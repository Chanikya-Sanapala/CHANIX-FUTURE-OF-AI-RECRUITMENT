"use client";
import { useState, useEffect } from 'react';
import { FiCpu, FiTrendingUp, FiActivity, FiAward, FiPlay } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function GameZone({ user, streak, onGameComplete }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [gridSize, setGridSize] = useState(3);
    const [sequence, setSequence] = useState([]);
    const [playerSequence, setPlayerSequence] = useState([]);
    const [showingSequence, setShowingSequence] = useState(false);
    const [gameState, setGameState] = useState('menu'); // menu, playing, gameover
    const [highScore, setHighScore] = useState(0);

    const [activeGame, setActiveGame] = useState(null);

    useEffect(() => {
        // Load high score from user stats if available
        if (user?.gameScores) {
            const max = user.gameScores.reduce((acc, curr) => Math.max(acc, curr.score), 0);
            setHighScore(max);
        }
    }, [user]);

    const startGame = () => {
        setGameState('playing');
        setScore(0);
        setLevel(1);
        setGridSize(3);
        startLevel(1, 3);
    };

    const startLevel = (lvl, size) => {
        setPlayerSequence([]);
        const seqLength = lvl + 2;
        const newSeq = [];
        for (let i = 0; i < seqLength; i++) {
            newSeq.push(Math.floor(Math.random() * (size * size)));
        }
        setSequence(newSeq);
        setShowingSequence(true);

        let i = 0;
        const interval = setInterval(() => {
            if (i >= newSeq.length) {
                clearInterval(interval);
                setShowingSequence(false);
                return;
            }
            // Blink logic could go here if we had ref to cells, but for React we'll just rely on state
            // For simplicity in React, we might not blink sequentially like this without complex state.
            // Better approach: Set a "activeCell" state.
            const currentCell = newSeq[i];
            setActiveCell(currentCell);
            setTimeout(() => setActiveCell(null), 500);
            i++;
        }, 800);
    };

    const [activeCell, setActiveCell] = useState(null);

    const handleCellClick = (index) => {
        if (showingSequence || gameState !== 'playing') return;

        // Visual feedback
        setActiveCell(index);
        setTimeout(() => setActiveCell(null), 200);

        const nextIndex = playerSequence.length;
        if (sequence[nextIndex] === index) {
            const newPlayerSeq = [...playerSequence, index];
            setPlayerSequence(newPlayerSeq);
            setScore(s => s + 10);

            if (newPlayerSeq.length === sequence.length) {
                // Level Complete
                toast.success("Level Complete! Getting faster...", { autoClose: 1000 });
                setTimeout(() => {
                    setLevel(l => l + 1);
                    // Increase grid size every 3 levels
                    const newSize = (level + 1) % 3 === 0 ? Math.min(gridSize + 1, 5) : gridSize;
                    setGridSize(newSize);
                    startLevel(level + 1, newSize);
                }, 1000);
            }
        } else {
            gameOver();
        }
    };

    const gameOver = async () => {
        setGameState('gameover');
        toast.error("Game Over! Good effort.");
        if (score > highScore) setHighScore(score);

        // Send to backend
        if (score > 0) {
            try {
                const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                const token = localStorage.getItem('token');
                await fetch(`${baseUrl}/api/games/result`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ gameId: 'memory-matrix', score })
                });
                if (onGameComplete) onGameComplete(score);
            } catch (e) {
                console.error(e);
            }
        }
    };

    // Logic Puzzle State
    const [logicGameState, setLogicGameState] = useState('menu'); // menu, playing, gameover
    const [logicScore, setLogicScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [round, setRound] = useState(1);

    const startLogicGame = () => {
        setLogicGameState('playing');
        setLogicScore(0);
        setRound(1);
        generateSequence(1);
    };

    const generateSequence = (level) => {
        // Types: 0: Arithmetic, 1: Geometric, 2: Fibonacci-like, 3: Squares/Cubes
        const type = Math.floor(Math.random() * Math.min(level + 1, 4));
        let seq = [];
        let answer = 0;
        let rule = "";

        if (type === 0 || type >= 4) { // Arithmetic (Add/Sub)
            const start = Math.floor(Math.random() * 20);
            const diff = Math.floor(Math.random() * 10) + 1;
            for (let i = 0; i < 5; i++) seq.push(start + (i * diff));
            answer = seq[4] + diff;
            rule = `Add ${diff}`;
        } else if (type === 1) { // Geometric (Multiply)
            const start = Math.floor(Math.random() * 5) + 1;
            const ratio = Math.floor(Math.random() * 3) + 2;
            for (let i = 0; i < 4; i++) seq.push(start * Math.pow(ratio, i));
            answer = seq[3] * ratio;
            rule = `Multiply by ${ratio}`;
        } else if (type === 2) { // Fibonacci-ish
            const a = Math.floor(Math.random() * 5);
            const b = Math.floor(Math.random() * 5) + 1;
            seq = [a, b];
            for (let i = 2; i < 6; i++) seq.push(seq[i - 1] + seq[i - 2]);
            answer = seq[5] + seq[4];
            rule = "Sum of previous two";
        } else if (type === 3) { // Squares
            const start = Math.floor(Math.random() * 5) + 1;
            for (let i = 0; i < 5; i++) seq.push((start + i) * (start + i));
            answer = (start + 5) * (start + 5);
            rule = "Square numbers";
        }

        // Generate wrong options
        let options = [answer];
        while (options.length < 4) {
            let offset = Math.floor(Math.random() * 20) - 10;
            let val = answer + offset;
            if (val > 0 && !options.includes(val)) options.push(val);
        }
        options = options.sort(() => Math.random() - 0.5);

        setCurrentQuestion({ sequence: seq, answer, options, rule });
    };

    const handleOptionSelect = (selected) => {
        if (selected === currentQuestion.answer) {
            toast.success("Correct!", { autoClose: 500 });
            setLogicScore(s => s + 20);
            setTimeout(() => {
                setRound(r => r + 1);
                generateSequence(round + 1);
            }, 800);
        } else {
            toast.error(`Wrong! Pattern was: ${currentQuestion.rule}`);
            endLogicGame();
        }
    };

    const endLogicGame = async () => {
        setLogicGameState('gameover');
        if (logicScore > highScore) setHighScore(logicScore); // Unified high score for now

        if (logicScore > 0) {
            try {
                const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                const token = localStorage.getItem('token');
                await fetch(`${baseUrl}/api/games/result`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                    body: JSON.stringify({ gameId: 'logic-puzzle', score: logicScore })
                });
                if (onGameComplete) onGameComplete(logicScore);
            } catch (e) { console.error(e); }
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <FiCpu className="text-indigo-600" /> {activeGame === 'memory-matrix' ? 'Memory Matrix' : activeGame === 'logic-puzzle' ? 'Sequence Master' : 'Game Zone'}
                    </h2>
                    <p className="text-gray-500">
                        {activeGame === 'memory-matrix'
                            ? "Memorize the pattern."
                            : activeGame === 'logic-puzzle'
                                ? "Find the next number."
                                : "Boost your cognitive score to get recommended to recruiters."}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100">
                        <div className="text-xs text-indigo-500 font-bold uppercase tracking-wider">High Score</div>
                        <div className="text-xl font-bold text-indigo-700">{highScore}</div>
                    </div>
                    <div className="bg-orange-50 px-4 py-2 rounded-xl border border-orange-100">
                        <div className="text-xs text-orange-500 font-bold uppercase tracking-wider">Cognitive Score</div>
                        <div className="text-xl font-bold text-orange-700">{user?.cognitiveScore || 0}%</div>
                    </div>
                    {user?.isRecruiterRecommended && (
                        <div className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1 text-green-700 font-bold text-xs">
                            <FiAward /> Recommended
                        </div>
                    )}
                </div>
            </div>

            {/* Game Library View */}
            {!activeGame && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                    {/* Memory Matrix Card */}
                    <div
                        onClick={() => setActiveGame('memory-matrix')}
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FiCpu className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Memory Matrix</h3>
                            <p className="text-gray-500 text-sm mb-4">Train your working memory and visual attention.</p>
                            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                                <FiPlay className="fill-current" /> Play Now
                            </div>
                        </div>
                    </div>

                    {/* Logic Puzzle Card */}
                    <div
                        onClick={() => setActiveGame('logic-puzzle')}
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FiActivity className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Sequence Master</h3>
                            <p className="text-gray-500 text-sm mb-4">Identify the pattern and find the next number.</p>
                            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                                <FiPlay className="fill-current" /> Play Now
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Game View - Logic Puzzle */}
            {activeGame === 'logic-puzzle' && (
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[500px] flex flex-col relative animate-fade-in">
                    {logicGameState !== 'playing' && (
                        <button
                            onClick={() => { setActiveGame(null); setLogicGameState('menu'); }}
                            className="absolute top-6 left-6 z-20 px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-200"
                        >
                            ← Back to Library
                        </button>
                    )}

                    {logicGameState === 'menu' && (
                        <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                <FiActivity className="w-12 h-12 text-emerald-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Sequence Master</h3>
                            <p className="text-gray-500 max-w-md mb-8">Analyze the number sequence and select the correct continuation. Speed and accuracy matter.</p>
                            <button
                                onClick={startLogicGame}
                                className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all flex items-center gap-2"
                            >
                                <FiPlay /> Start Challenge
                            </button>
                        </div>
                    )}

                    {logicGameState === 'gameover' && (
                        <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">Game Over</h3>
                            <div className="text-6xl font-black text-emerald-600 mb-2">{logicScore}</div>
                            <p className="text-gray-400 mb-8 uppercase tracking-widest font-bold">Total Score</p>
                            <div className="flex gap-4">
                                <button
                                    onClick={startLogicGame}
                                    className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-colors"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={() => { setActiveGame(null); setLogicGameState('menu'); }}
                                    className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    Exit
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Game Interface */}
                    {logicGameState === 'playing' && currentQuestion && (
                        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8">
                            <div className="flex justify-between w-full max-w-md mb-12">
                                <div className="text-lg font-bold text-gray-500">Round {round}</div>
                                <div className="text-lg font-bold text-emerald-600">Score: {logicScore}</div>
                            </div>

                            <div className="mb-12">
                                <div className="flex gap-4 items-center justify-center flex-wrap">
                                    {currentQuestion.sequence.map((num, i) => (
                                        <div key={i} className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-2xl font-bold text-gray-800">
                                            {num}
                                        </div>
                                    ))}
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-100 rounded-2xl shadow-inner border-2 border-emerald-200 flex items-center justify-center text-2xl font-bold text-emerald-600 animate-pulse">
                                        ?
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                                {currentQuestion.options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleOptionSelect(opt)}
                                        className="py-4 bg-white rounded-xl shadow-sm border border-gray-200 text-xl font-bold text-gray-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all active:scale-95"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Game View - Memory Matrix */}
            {activeGame === 'memory-matrix' && (
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[500px] flex flex-col relative animate-fade-in">

                    {gameState !== 'playing' && (
                        <button
                            onClick={() => { setActiveGame(null); setGameState('menu'); }}
                            className="absolute top-6 left-6 z-20 px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-200"
                        >
                            ← Back to Library
                        </button>
                    )}

                    {gameState === 'menu' && (
                        <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                <FiCpu className="w-12 h-12 text-indigo-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Memory Matrix</h3>
                            <p className="text-gray-500 max-w-md mb-8">Memorize the sequence of highlighted cells. Improve your attention span and working memory.</p>
                            <button
                                onClick={startGame}
                                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all flex items-center gap-2"
                            >
                                <FiPlay /> Start Game
                            </button>
                        </div>
                    )}

                    {gameState === 'gameover' && (
                        <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">Game Over</h3>
                            <div className="text-6xl font-black text-indigo-600 mb-2">{score}</div>
                            <p className="text-gray-400 mb-8 uppercase tracking-widest font-bold">Total Score</p>

                            <div className="flex gap-4">
                                <button
                                    onClick={startGame}
                                    className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-colors"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={() => setGameState('menu')}
                                    className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    Main Menu
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Game Board */}
                    <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8">
                        <div className="flex justify-between w-full max-w-md mb-8">
                            <div className="text-lg font-bold text-gray-500">Level {level}</div>
                            <div className="text-lg font-bold text-indigo-600">Score: {score}</div>
                        </div>

                        <div
                            className="grid gap-3 transition-all duration-300"
                            style={{
                                gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                                width: '100%',
                                maxWidth: '400px',
                                aspectRatio: '1/1'
                            }}
                        >
                            {Array.from({ length: gridSize * gridSize }).map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleCellClick(i)}
                                    className={`
                                  rounded-xl cursor-pointer transition-all duration-150 transform hover:scale-[1.02] shadow-sm
                                  ${activeCell === i
                                            ? 'bg-indigo-500 shadow-indigo-300 shadow-lg scale-95'
                                            : 'bg-white hover:bg-gray-100 border border-gray-200'
                                        }
                               `}
                                ></div>
                            ))}
                        </div>

                        <div className="mt-8 text-center h-8">
                            {showingSequence ? (
                                <span className="text-indigo-500 font-bold animate-pulse">Watch the sequence...</span>
                            ) : (
                                <span className="text-gray-400 font-medium">Your turn!</span>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}
