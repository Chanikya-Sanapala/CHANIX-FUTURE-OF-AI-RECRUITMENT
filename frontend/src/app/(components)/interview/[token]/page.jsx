'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function InterviewSession() {
    const { token } = useParams();
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [interview, setInterview] = useState(null);
    const [started, setStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);

    const [stream, setStream] = useState(null);

    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);

    // Canvas Refs
    const canvasRef = useRef(null); // Visible PREVIEW
    const recordingCanvasRef = useRef(null); // Hidden RECORDING

    const requestRef = useRef(null);
    const sourceContainerRef = useRef(null);
    const isSpeakingRef = useRef(false);

    // Sync state to ref for animation loop
    useEffect(() => {
        isSpeakingRef.current = isSpeaking;
    }, [isSpeaking]);

    // Base URL for API
    const API_URL = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5005').trim().replace(/\/$/, '') + '/api';

    useEffect(() => {
        fetchInterviewDetails();
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            if (stream) stream.getTracks().forEach(t => t.stop());
        };
    }, [token]);

    const drawLoops = (screenVideo, cameraVideo) => {
        const time = Date.now();

        // --- 1. Draw PREVIEW (Visible to User) ---
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            // Ensure high internal resolution for crisp rendering on large screens
            const dpr = window.devicePixelRatio || 1;
            // Set display size (css pixels) - handled by class w-full h-full
            // Set actual size in memory (scaled to account for DPR or just fixed HD)
            // Sticking to fixed 1280x720 logic coordinate system for simplicity
            canvas.width = 1280;
            canvas.height = 720;

            // A. Dark Background
            const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 50, canvas.width / 2, canvas.height / 2, 800);
            gradient.addColorStop(0, '#1e293b'); // slate-800
            gradient.addColorStop(1, '#0f172a'); // slate-900
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // B. AI Animation (Sci-Fi Orb)
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // 1. Dynamic Outer Ring (Rotating)
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(time / 3000);
            ctx.strokeStyle = '#3b82f6'; // blue-500
            ctx.lineWidth = 2;
            ctx.setLineDash([20, 15]);
            ctx.beginPath();
            ctx.arc(0, 0, 80, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();

            // 2. Inner Tech Ring (Counter-Rotating)
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(-time / 2000);
            ctx.strokeStyle = '#60a5fa'; // blue-400
            ctx.lineWidth = 2;
            ctx.setLineDash([10, 10]);
            ctx.beginPath();
            ctx.arc(0, 0, 60, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();

            // 3. Glowing Core
            const baseRadius = 30;
            const pulse = isSpeakingRef.current ? Math.sin(time / 150) * 5 : Math.sin(time / 1000) * 2;
            const radius = baseRadius + pulse;

            const gradientCore = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, radius);
            gradientCore.addColorStop(0, '#dbeafe'); // bright center
            gradientCore.addColorStop(0.5, '#3b82f6'); // blue
            gradientCore.addColorStop(1, 'rgba(37, 99, 235, 0)'); // transparent

            ctx.fillStyle = gradientCore;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
            ctx.fill();

            // 4. Solid Nucleus
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
            ctx.fill();

            // 5. Speaking Waveforms
            if (isSpeakingRef.current) {
                ctx.strokeStyle = 'rgba(147, 197, 253, 0.6)';
                ctx.lineWidth = 1;
                ctx.setLineDash([]);
                for (let i = 0; i < 3; i++) {
                    const rippleRadius = 40 + ((time / 20 + i * 30) % 60);
                    const opacity = 1 - (rippleRadius - 40) / 60;
                    ctx.globalAlpha = opacity;
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, rippleRadius, 0, 2 * Math.PI);
                    ctx.stroke();
                }
                ctx.globalAlpha = 1.0;
            }

            // Text Label
            ctx.fillStyle = '#94a3b8';
            ctx.font = '24px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(isSpeakingRef.current ? 'AI is speaking...' : 'Listening...', centerX, centerY + 130);

            // C. PiP (User Camera)
            drawPiP(ctx, cameraVideo, canvas.width, canvas.height);
        }

        // --- 2. Draw RECORDING (Hidden) ---
        if (recordingCanvasRef.current) {
            const canvas = recordingCanvasRef.current;
            const ctx = canvas.getContext('2d');

            // A. Screen Share Background
            if (screenVideo && screenVideo.readyState >= 2) {
                ctx.drawImage(screenVideo, 0, 0, canvas.width, canvas.height);
            } else {
                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // B. PiP (User Camera)
            drawPiP(ctx, cameraVideo, canvas.width, canvas.height);
        }

        requestRef.current = requestAnimationFrame(() => drawLoops(screenVideo, cameraVideo));
    };

    const drawPiP = (ctx, cameraVideo, width, height) => {
        if (cameraVideo && cameraVideo.readyState >= 2) {
            const camWidth = 320;
            const camHeight = 240;
            const padding = 20;
            const x = width - camWidth - padding;
            const y = height - camHeight - padding;

            ctx.save();
            // Shadow
            ctx.shadowColor = 'rgba(0,0,0,0.7)';
            ctx.shadowBlur = 15;

            // Border
            ctx.strokeStyle = '#2563eb'; // blue-600
            ctx.lineWidth = 4;
            ctx.strokeRect(x, y, camWidth, camHeight);

            // Video
            ctx.drawImage(cameraVideo, x, y, camWidth, camHeight);

            // "You" label
            ctx.fillStyle = '#333';
            ctx.globalAlpha = 0.7;
            ctx.fillRect(x + 5, y + 5, 40, 20);
            ctx.globalAlpha = 1.0;
            ctx.fillStyle = '#fff';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('You', x + 10, y + 19);

            ctx.restore();
        }
    };

    const fetchInterviewDetails = async () => {
        try {
            const res = await fetch(`${API_URL}/interviews/${token}`);
            const data = await res.json();
            if (data.success) {
                setInterview(data.data);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Failed to load interview details');
        } finally {
            setLoading(false);
        }
    };

    const startCamera = async () => {
        try {
            // 1. Get User Media (Camera + Mic)
            const userStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

            // 2. Get Display Media (Screen)
            let screenStream;
            try {
                screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
            } catch (err) {
                alert("Screen sharing is mandatory. Please reload and allow screen sharing.");
                userStream.getTracks().forEach(track => track.stop());
                return;
            }

            setIsScreenSharing(true);

            // 3. Create Video Elements for Source
            const screenVideo = document.createElement('video');
            screenVideo.srcObject = screenStream;
            screenVideo.muted = true;
            screenVideo.playsInline = true;
            screenVideo.autoplay = true;

            const cameraVideo = document.createElement('video');
            cameraVideo.srcObject = userStream;
            cameraVideo.muted = true;
            cameraVideo.playsInline = true;
            cameraVideo.autoplay = true;

            // 4. Attach to DOM (Hidden Container)
            if (sourceContainerRef.current) {
                sourceContainerRef.current.innerHTML = '';
                sourceContainerRef.current.appendChild(screenVideo);
                sourceContainerRef.current.appendChild(cameraVideo);
            }

            // 5. Wait for Play
            await screenVideo.play();
            await cameraVideo.play();

            // 6. Initialize Hidden Recording Canvas
            const recCanvas = document.createElement('canvas');
            recCanvas.width = 1280;
            recCanvas.height = 720;
            recordingCanvasRef.current = recCanvas;

            // 7. Start Drawing Loops
            drawLoops(screenVideo, cameraVideo);

            // 8. Capture Stream from RECORDING Canvas
            const canvasStream = recCanvas.captureStream(30);
            const micTrack = userStream.getAudioTracks()[0];
            if (micTrack) {
                canvasStream.addTrack(micTrack);
            }

            setStream(canvasStream);

            // Stop logic
            screenStream.getVideoTracks()[0].onended = () => {
                finishInterview();
            };

            const mediaRecorder = new MediaRecorder(canvasStream, { mimeType: 'video/webm' });
            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };
            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;

            setIsRecording(true);
            setStarted(true);

            // 9. Speak Question
            if (interview && interview.questions) {
                speakQuestion(interview.questions[0]);
            }

        } catch (err) {
            console.error("Start Camera Error:", err);
            if (err.name === 'NotAllowedError') {
                alert('Permissions denied! You must allow Camera, Microphone, and Screen Share access.');
            } else {
                alert('Could not start interview inputs: ' + err.message);
            }
        }
    };

    // Voice Selection Helper
    const getFemaleVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        // Priority list for female voices
        const preferredVoices = [
            "Microsoft Zira",
            "Google UK English Female",
            "Google US English",
            "Samantha"
        ];

        for (const name of preferredVoices) {
            const voice = voices.find(v => v.name.includes(name));
            if (voice) return voice;
        }

        // Fallback: any voice with "Female" in name
        return voices.find(v => v.name.includes("Female")) || voices[0];
    };

    // Ensure voices are loaded
    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                console.log("Voices loaded:", voices.map(v => v.name));
            }
        };
        window.speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices();

        return () => { window.speechSynthesis.onvoiceschanged = null; };
    }, []);

    const speakQuestion = (text) => {
        if ('speechSynthesis' in window) {
            // Cancel any current speech
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(text);
            const voice = getFemaleVoice();
            if (voice) {
                utterance.voice = voice;
                // Pitch adjustments for more feminine tone if generic voice
                if (!voice.name.includes("Zira") && !voice.name.includes("Samantha")) {
                    utterance.pitch = 1.2;
                }
            }

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);

            // Speak
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < interview.questions.length - 1) {
            const nextIndex = currentQuestionIndex + 1;
            setCurrentQuestionIndex(nextIndex);
            speakQuestion(interview.questions[nextIndex]);
        } else {
            finishInterview();
        }
    };

    const finishInterview = async () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setIsSpeaking(false);

            mediaRecorderRef.current.onstop = async () => {
                const blob = new Blob(chunksRef.current, { type: 'video/webm' });
                submitRecordings(blob);
            };
            if (stream) stream.getTracks().forEach(track => track.stop());
        }
    };

    const submitRecordings = async (videoBlob) => {
        setUploading(true);
        const formData = new FormData();
        formData.append('token', token);
        formData.append('recording', videoBlob, 'interview.webm');

        try {
            const res = await fetch(`${API_URL}/interviews/submit`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (data.success) {
                setCompleted(true);
            } else {
                alert('Upload failed: ' + data.message);
            }
        } catch (err) {
            alert('Upload error. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading Interview...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-500 font-bold">{error}</div>;

    if (completed) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <div className="text-center space-y-4 bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full">
                <div className="text-5xl mb-4">✅</div>
                <h1 className="text-3xl font-bold text-green-400">Interview Submitted!</h1>
                <p className="text-gray-400">Thank you for completing the interview. The recruiter will review your response shortly.</p>
                <button onClick={() => router.push('/')} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold w-full transition-colors">Return Home</button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col font-sans">
            {/* Header / Question Area */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-center border-b border-gray-700 min-h-[150px] flex flex-col justify-center items-center relative overflow-hidden shrink-0">
                {/* Header Icon Replaced with Modern CSS Orb */}
                {started && (
                    <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                        <div className={`absolute inset-0 rounded-full border-2 border-blue-400/50 border-dashed animate-[spin_10s_linear_infinite]`}></div>
                        <div className={`absolute inset-2 rounded-full border-2 border-cyan-400/50 border-dashed animate-[spin_5s_linear_infinite_reverse]`}></div>
                        <div className={`w-8 h-8 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] ${isSpeaking ? 'animate-pulse scale-125' : 'scale-100'} transition-transform duration-300`}></div>
                    </div>
                )}

                {!started ? (
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Welcome to your AI Interview</h1>
                ) : (
                    <div className="space-y-4 max-w-4xl z-10 animate-fade-in-up">
                        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Question {currentQuestionIndex + 1} of {interview.questions.length}</p>
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                            {interview.questions[currentQuestionIndex]}
                        </h2>
                    </div>
                )}
            </div>

            {/* Main Workspace */}
            <main className="flex-1 p-6 flex flex-col items-center justify-start gap-8 w-full max-w-6xl mx-auto">

                {/* Visual Workspace (Preview Canvas) */}
                <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">

                    {/* The Visible Canvas (Shows Sci-Fi Orb + PiP) NO MIRROR */}
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-contain block"
                    />

                    {/* Uploading Overlay */}
                    {uploading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-50 backdrop-blur-sm">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                            <p className="text-blue-400 font-bold text-lg">Uploading Interview...</p>
                        </div>
                    )}

                    {/* Start / Intro Overlay */}
                    {!started && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/95 z-40 p-6 text-center space-y-8 backdrop-blur-sm">
                            <div className="max-w-md w-full space-y-6">
                                <h2 className="text-2xl font-bold text-white">Ready to Start?</h2>
                                <div className="space-y-4 text-gray-300 bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-left">
                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <p>Ensure you are in a quiet, well-lit environment.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <p>Your camera and microphone will be recorded.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <p>Screen sharing is <strong>mandatory</strong>.</p>
                                    </div>
                                </div>
                                <button
                                    onClick={startCamera}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 group"
                                >
                                    <span className="group-hover:animate-bounce">🎥</span> Start Interview
                                </button>
                            </div>
                        </div>
                    )}

                    {/* REC Indicator */}
                    {started && (
                        <div className="absolute top-4 right-4 flex gap-2 z-30">
                            <span className="bg-red-600/90 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full animate-pulse shadow-sm font-mono tracking-wider flex items-center gap-2 border border-red-500/50">
                                <span className="block w-2 h-2 bg-white rounded-full"></span> REC
                            </span>
                        </div>
                    )}
                </div>

                {/* Question Controls */}
                {started && (
                    <div className="flex flex-wrap gap-4 justify-center w-full max-w-2xl animate-fade-in">
                        <button
                            onClick={handleNextQuestion}
                            disabled={uploading || isSpeaking}
                            className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-xl font-bold text-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                        >
                            {currentQuestionIndex === interview.questions.length - 1 ? 'Finish & Submit' : 'Next Question →'}
                        </button>
                    </div>
                )}
            </main>

            {/* Hidden container for managing video sources */}
            <div ref={sourceContainerRef} className="hidden" aria-hidden="true" />
        </div>
    );
}
