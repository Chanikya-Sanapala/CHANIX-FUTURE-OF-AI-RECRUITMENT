"use client";

import { useState, useEffect, useRef } from 'react';
import { FiSend, FiMessageSquare, FiMic, FiUser, FiCpu, FiRefreshCw } from 'react-icons/fi';

export default function MockInterview({ jobTitle = "General Role" }) {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: `Hello! I'm your AI Interviewer. I'll be asking you a few questions for the ${jobTitle} position. Ready to start?` }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const messagesEndRef = useRef(null);

    const questions = [
        "Great! Let's begin. user, can you tell me a little about yourself?",
        "That's interesting. What do you consider your greatest professional strength?",
        "Can you describe a challenging situation you faced at work and how you handled it?",
        "Where do you see yourself in 5 years?",
        "Why do you want to work for this company?",
        "That wraps up our session! Do you have any questions for me?"
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), sender: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // AI Response Logic
        setTimeout(() => {
            let aiResponseText = "";

            // Simple logic to move to next question
            if (questionIndex < questions.length) {
                // Provide generic feedback/acknowledgment based on length
                const feedback = inputValue.length > 50
                    ? "That's a very detailed answer, good job."
                    : "Thanks for sharing that.";

                aiResponseText = `${feedback} \n\n${questions[questionIndex]}`;
                setQuestionIndex(prev => prev + 1);
            } else {
                aiResponseText = "Thanks for your time! You did great. I'll compile your feedback report shortly.";
            }

            const aiMsg = { id: Date.now() + 1, sender: 'ai', text: aiResponseText };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    const resetInterview = () => {
        setMessages([
            { id: 1, sender: 'ai', text: `Hello! I'm your AI Interviewer. I'll be asking you a few questions for the ${jobTitle} position. Ready to start?` }
        ]);
        setQuestionIndex(0);
    };

    return (
        <div className="ios-card bg-white border border-gray-100 shadow-xl overflow-hidden flex flex-col h-[500px]">
            {/* Header */}
            <div className="bg-gray-50/80 backdrop-blur-sm p-4 border-b border-gray-100 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <FiCpu className="text-indigo-600 w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">AI Interviewer</h3>
                        <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                        </p>
                    </div>
                </div>
                <button onClick={resetInterview} className="p-2 hover:bg-gray-200 rounded-full text-gray-500 transition-colors" title="Restart">
                    <FiRefreshCw />
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex items-end max-w-[80%] gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white ${msg.sender === 'user' ? 'bg-gray-900' : 'bg-indigo-600'}`}>
                                {msg.sender === 'user' ? <FiUser /> : <FiCpu />}
                            </div>

                            {/* Bubble */}
                            <div
                                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${msg.sender === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="flex items-end gap-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs">
                                <FiCpu />
                            </div>
                            <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <input
                        type="text"
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-900 placeholder-gray-500 py-2"
                        placeholder="Type your answer..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <FiMic className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className={`p-2 rounded-full transition-all ${inputValue.trim() ? 'bg-blue-600 text-white shadow-md transform hover:scale-105' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                        <FiSend className="w-4 h-4 ml-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
