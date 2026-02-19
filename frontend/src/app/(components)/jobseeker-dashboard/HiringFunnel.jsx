"use client";
import React from 'react';
import { FiFileText, FiUserCheck, FiVideo, FiGift, FiCheckCircle } from 'react-icons/fi';

export default function HiringFunnel({ applications = [] }) {
    // Define stages and their corresponding icons/colors
    const stages = [
        { id: 'Applied', label: 'Applied', icon: FiFileText, color: 'text-blue-500', bg: 'bg-blue-100', border: 'border-blue-200' },
        { id: 'Shortlisted', label: 'Shortlisted', icon: FiUserCheck, color: 'text-purple-500', bg: 'bg-purple-100', border: 'border-purple-200' },
        { id: 'Interview', label: 'Interview', icon: FiVideo, color: 'text-orange-500', bg: 'bg-orange-100', border: 'border-orange-200' },
        { id: 'Offer', label: 'Offer', icon: FiGift, color: 'text-pink-500', bg: 'bg-pink-100', border: 'border-pink-200' },
        { id: 'Hired', label: 'Hired', icon: FiCheckCircle, color: 'text-green-500', bg: 'bg-green-100', border: 'border-green-200' },
    ];

    // Calculate counts for each stage
    const counts = stages.reduce((acc, stage) => {
        acc[stage.id] = applications.filter(app => app.status === stage.id).length;
        return acc;
    }, {});

    // Calculate total active applications (excluding Rejected)
    const totalActive = applications.filter(app => app.status !== 'Rejected').length;

    return (
        <div className="ios-card p-6 mb-8 animate-fade-in relative overflow-hidden">
            {/* Decorative Background Blur */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <FiUserCheck className="w-5 h-5 text-gray-600" />
                </span>
                Hiring Pipeline
                <span className="text-xs font-medium px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full ml-auto">
                    {totalActive} Active
                </span>
            </h3>

            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block rounded-full"></div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 relative z-10">
                    {stages.map((stage, index) => {
                        const count = counts[stage.id] || 0;
                        const isActive = count > 0;
                        const Icon = stage.icon;

                        return (
                            <div key={stage.id} className="flex flex-col items-center">
                                {/* Stage Circle */}
                                <div
                                    className={`
                        w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 relative group
                        ${isActive ? `${stage.bg} ${stage.color} shadow-sm border ${stage.border}` : 'bg-gray-50 text-gray-300 border border-gray-100'}
                    `}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : 'scale-100'}`} />

                                    {/* Count Badge */}
                                    {count > 0 && (
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold border border-gray-100 text-gray-800">
                                            {count}
                                        </div>
                                    )}
                                </div>

                                {/* Label */}
                                <div className={`text-sm font-medium ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                                    {stage.label}
                                </div>

                                {/* Mobile Line Connector (Vertical/Grid) - could be hidden or different */}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Shortlisted/Offer Note if empty */}
            {totalActive === 0 && (
                <div className="text-center mt-6 text-sm text-gray-400 bg-gray-50/50 p-3 rounded-xl border border-dashed border-gray-200">
                    Apply to jobs to see your progress here.
                </div>
            )}
        </div>
    );
}
