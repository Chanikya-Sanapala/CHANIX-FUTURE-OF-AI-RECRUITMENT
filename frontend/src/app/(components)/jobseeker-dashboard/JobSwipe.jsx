"use client";

import { useState, useEffect } from 'react';
import { FiX, FiCheck, FiBriefcase, FiMapPin, FiDollarSign, FiInfo, FiLayers } from 'react-icons/fi';

export default function JobSwipe({ jobs, onApply, onSkip }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null); // 'left' or 'right'
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        // Basic filter to ensure valid jobs
        if (jobs) {
            setFilteredJobs(jobs.filter(j => j.status !== 'expired'));
        }
    }, [jobs]);

    const currentJob = filteredJobs[currentIndex];
    const nextJob = filteredJobs[currentIndex + 1];

    const handleSwipe = (dir) => {
        if (!currentJob) return;

        setDirection(dir);

        // Animate out
        setTimeout(() => {
            if (dir === 'right') {
                onApply(currentJob.id);
            } else {
                onSkip(currentJob.id);
            }

            setDirection(null);
            setCurrentIndex(prev => prev + 1);
        }, 300);
    };

    if (!currentJob) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center h-[500px] bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <FiLayers className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">All Caught Up!</h3>
                <p className="text-gray-500 mt-2 max-w-xs mx-auto">You've viewed all available jobs for now. Check back later!</p>
                <button
                    onClick={() => setCurrentIndex(0)}
                    className="mt-8 px-6 py-3 bg-white border border-gray-200 rounded-full text-indigo-600 font-bold hover:bg-gray-50 transition-colors shadow-sm"
                >
                    Start Over
                </button>
            </div>
        );
    }

    return (
        <div className="relative w-full max-w-md mx-auto h-[600px] flex items-center justify-center">

            {/* Background Card (Next Job Placeholder) */}
            {nextJob && (
                <div className="absolute top-0 w-full h-[580px] bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 transform scale-95 translate-y-4 opacity-60 z-0">
                    {/* Skeleton UI */}
                    <div className="h-40 bg-gray-100 rounded-2xl mb-6"></div>
                    <div className="space-y-4">
                        <div className="h-8 w-3/4 bg-gray-100 rounded-lg"></div>
                        <div className="h-4 w-1/2 bg-gray-50 rounded-lg"></div>
                    </div>
                </div>
            )}

            {/* Active Card */}
            <div
                className={`absolute top-0 w-full h-full bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 ease-out transform z-10
            ${direction === 'left' ? '-translate-x-[150%] -rotate-12 opacity-50' : ''}
            ${direction === 'right' ? 'translate-x-[150%] rotate-12 opacity-50' : ''}
        `}
            >
                {/* Card Header / Image Area */}
                <div className="h-40 bg-gradient-to-br from-blue-600 to-indigo-700 relative p-6 flex flex-col justify-end">
                    <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl transform translate-x-12 -translate-y-12"></div>

                    <div className="relative z-10">
                        <div className="absolute top-[-80px] right-[-10px]">
                            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-white/10">
                                {currentJob.jobType}
                            </span>
                        </div>
                        <h2 className="text-2xl font-black text-white leading-tight drop-shadow-sm line-clamp-2">{currentJob.title}</h2>
                        <p className="text-blue-100 font-medium mt-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                            {currentJob.company}
                        </p>
                    </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col h-[calc(100%-160px)]">
                    <div className="space-y-5 overflow-y-auto pr-2 custom-scrollbar flex-1 relative">

                        {/* Meta Tags */}
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg font-medium border border-gray-100"><FiMapPin className="text-gray-400" /> {currentJob.location}</span>
                            <span className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg font-bold border border-green-100"><FiDollarSign className="text-green-500" /> {currentJob.salary}</span>
                        </div>

                        {/* Description */}
                        <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {currentJob.description}
                            </p>
                        </div>

                        {/* Skills */}
                        <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Requirements</h4>
                            <div className="flex flex-wrap gap-2">
                                {currentJob.skillsRequired.slice(0, 6).map(skill => (
                                    <span key={skill} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-center gap-8 mt-4 pt-4 relative z-20 bg-white">
                        <button
                            onClick={() => handleSwipe('left')}
                            className="w-16 h-16 rounded-full bg-white border border-gray-100 text-red-500 flex items-center justify-center shadow-lg hover:bg-red-50 hover:scale-110 active:scale-95 transition-all group"
                        >
                            <FiX className="w-8 h-8 group-hover:rotate-90 transition-transform" />
                        </button>

                        <button
                            className="w-12 h-12 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-gray-100 transition-all border border-gray-100"
                            title="View Details"
                        >
                            <FiInfo className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => handleSwipe('right')}
                            className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-green-200 hover:shadow-green-300 hover:scale-110 active:scale-95 transition-all group"
                        >
                            <FiCheck className="w-8 h-8 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Swipe Feedback Overlay */}
                {direction === 'right' && (
                    <div className="absolute top-8 left-8 border-4 border-green-500 text-green-500 font-black text-5xl px-4 py-2 rounded-xl transform -rotate-12 bg-white/90 backdrop-blur-sm z-50 shadow-xl tracking-tighter">
                        LIKE
                    </div>
                )}
                {direction === 'left' && (
                    <div className="absolute top-8 right-8 border-4 border-red-500 text-red-500 font-black text-5xl px-4 py-2 rounded-xl transform rotate-12 bg-white/90 backdrop-blur-sm z-50 shadow-xl tracking-tighter">
                        NOPE
                    </div>
                )}

            </div>
        </div>
    );
}
