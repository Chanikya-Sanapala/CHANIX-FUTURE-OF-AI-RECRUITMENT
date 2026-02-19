import React from 'react';
import { FiTrendingUp, FiCheckCircle, FiUsers, FiMail } from 'react-icons/fi';

export default function Leaderboard({ data }) {
    if (!data) return null;

    const { resumesSourced, submittals, interviewsScheduled, offersClosed } = data;

    const cards = [
        {
            title: 'Resumes Sourced',
            value: resumesSourced,
            icon: <FiUsers className="w-6 h-6 text-blue-600" />,
            bg: 'bg-blue-50',
            color: 'text-blue-600',
            desc: 'Candidates added'
        },
        {
            title: 'Submittals',
            value: submittals,
            icon: <FiMail className="w-6 h-6 text-purple-600" />,
            bg: 'bg-purple-50',
            color: 'text-purple-600',
            desc: 'Sent to clients'
        },
        {
            title: 'Interviews',
            value: interviewsScheduled,
            icon: <FiCheckCircle className="w-6 h-6 text-orange-600" />,
            bg: 'bg-orange-50',
            color: 'text-orange-600',
            desc: 'Scheduled'
        },
        {
            title: 'Offers Closed',
            value: offersClosed,
            icon: <FiTrendingUp className="w-6 h-6 text-green-600" />,
            bg: 'bg-green-50',
            color: 'text-green-600',
            desc: 'Placements'
        }
    ];

    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <FiTrendingUp className="w-6 h-6 text-blue-600" />
                Performance Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <div key={index} className="p-6 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3.5 rounded-xl ${card.bg} shadow-sm`}>
                                {card.icon}
                            </div>
                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wide ${card.bg} ${card.color}`}>
                                Active
                            </span>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{card.title}</p>
                            <h4 className="text-3xl font-bold text-gray-900 tracking-tight">{card.value}</h4>
                            <p className="text-xs text-gray-400 mt-2 font-medium">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
