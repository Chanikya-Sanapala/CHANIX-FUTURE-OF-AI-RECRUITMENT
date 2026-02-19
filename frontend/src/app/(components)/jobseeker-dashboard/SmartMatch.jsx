"use client";

import { useState } from 'react';
import { FiCpu, FiCheckCircle, FiAlertCircle, FiX, FiUploadCloud } from 'react-icons/fi';

export default function SmartMatch({ user, job }) {
    const [isScanning, setIsScanning] = useState(false);
    const [scanResult, setScanResult] = useState(null);

    const handleScan = () => {
        setIsScanning(true);

        // Simulate AI Processing time
        setTimeout(() => {
            const resumeText = ((user.summary || "") + " " + (user.skills || []).join(" ")).toLowerCase();
            const jobDesc = ((job.description || "") + " " + (job.skillsRequired || []).join(" ")).toLowerCase();

            // 1. Extract Keywords from Job (Simple simulation)
            // in a real app, this would be an API call to an NLP service
            const potentialKeywords = [
                "react", "javascript", "css", "node", "python", "java", "sql", "aws", "docker",
                "communication", "teamwork", "agile", "scrum", "leadership", "figma", "design", "ui/ux",
                "api", "graphql", "rest", "typescript"
            ];

            const jobKeywords = potentialKeywords.filter(k => jobDesc.includes(k));
            const finalKeywords = jobKeywords.length > 0 ? jobKeywords : ["javascript", "communication"]; // Fallback

            // 2. Check matches
            const matched = finalKeywords.filter(k => resumeText.includes(k));
            const missing = finalKeywords.filter(k => !resumeText.includes(k));

            const score = finalKeywords.length > 0
                ? Math.round((matched.length / finalKeywords.length) * 100)
                : 60; // Default to 60% for demo

            setScanResult({
                score,
                matched,
                missing: missing
            });
            setIsScanning(false);
        }, 2500);
    };

    const getScoreColor = (score) => {
        if (score >= 80) return 'text-green-500';
        if (score >= 50) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="ios-card bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between mb-6 relative z-10">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <FiCpu className="text-indigo-600 w-5 h-5" /> Smart Match AI
                </h3>
                {scanResult && (
                    <button
                        onClick={() => setScanResult(null)}
                        className="text-xs font-semibold text-gray-400 hover:text-gray-600 px-3 py-1 bg-gray-50 rounded-full"
                    >
                        Reset
                    </button>
                )}
            </div>

            {!scanResult ? (
                <div className="text-center py-8 relative z-10">
                    <div className={`w-20 h-20 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${isScanning ? 'scale-110 shadow-lg shadow-indigo-200' : ''}`}>
                        <FiUploadCloud className={`w-8 h-8 text-indigo-500 transition-all duration-500 ${isScanning ? 'animate-bounce' : ''}`} />
                    </div>

                    {isScanning ? (
                        <div className="animate-fade-in">
                            <h4 className="text-gray-900 font-bold mb-1">Analyzing Resume...</h4>
                            <p className="text-sm text-gray-500 animate-pulse">Checking skills match & keywords</p>
                            <div className="w-32 h-1.5 bg-gray-100 rounded-full mx-auto mt-4 overflow-hidden">
                                <div className="h-full bg-indigo-500 animate-progress-indeterminate"></div>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-fade-in">
                            <p className="text-gray-600 mb-6 max-w-xs mx-auto text-sm leading-relaxed">
                                Scan your profile against this job to see your match score and missing keywords.
                            </p>
                            <button
                                onClick={handleScan}
                                className="ios-btn px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm rounded-full"
                            >
                                Start AI Scan
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="animate-fade-in-up relative z-10">
                    <div className="flex items-center justify-center mb-8">
                        <div className="relative w-32 h-32">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="64" cy="64" r="56" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                                <circle
                                    cx="64" cy="64" r="56"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="transparent"
                                    strokeDasharray={351.86}
                                    strokeDashoffset={351.86 - (351.86 * scanResult.score) / 100}
                                    className={`${getScoreColor(scanResult.score)} transition-all duration-1000 ease-out`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className={`text-3xl font-black ${getScoreColor(scanResult.score)}`}>{scanResult.score}%</span>
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-1">Match</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-green-50/50 p-4 rounded-2xl border border-green-100">
                            <h4 className="text-xs font-bold text-green-800 mb-3 flex items-center gap-2 uppercase tracking-wide">
                                <FiCheckCircle className="text-green-500" /> Matched Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {scanResult.matched.length > 0 ? (
                                    scanResult.matched.map((k, i) => (
                                        <span key={i} className="px-3 py-1 bg-white text-green-700 text-xs font-bold rounded-lg border border-green-100 shadow-sm capitalize">
                                            {k}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-xs text-gray-400 italic">No exact matches found.</span>
                                )}
                            </div>
                        </div>

                        <div className="bg-red-50/50 p-4 rounded-2xl border border-red-100">
                            <h4 className="text-xs font-bold text-red-800 mb-3 flex items-center gap-2 uppercase tracking-wide">
                                <FiAlertCircle className="text-red-500" /> Missing Keywords
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {scanResult.missing.length > 0 ? (
                                    scanResult.missing.map((k, i) => (
                                        <span key={i} className="px-3 py-1 bg-white text-red-700 text-xs font-bold rounded-lg border border-red-100 shadow-sm capitalize">
                                            {k}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                                        <FiCheckCircle /> Great job! No major keywords missing.
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        </div>
    );
}
