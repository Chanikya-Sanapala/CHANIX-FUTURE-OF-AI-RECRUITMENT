import React from 'react';
import { FiClock, FiTarget, FiArrowUp, FiArrowDown } from 'react-icons/fi';

export default function EfficiencyMetrics({ data }) {
    if (!data) return null;

    const { timeToFill, interviewToOfferRatio } = data;

    return (
        <div className="grid grid-cols-1 gap-6 h-full">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3.5 rounded-xl bg-indigo-50 text-indigo-600 shadow-sm">
                        <FiClock className="w-6 h-6" />
                    </div>
                    <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
                        <FiArrowDown className="mr-1" /> 12%
                    </span>
                </div>
                <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Avg Time to Fill</p>
                    <div className="flex items-baseline gap-2">
                        <h4 className="text-4xl font-bold text-gray-900 tracking-tight">{timeToFill}</h4>
                        <span className="text-gray-400 font-bold text-sm">days</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
                        <div className="bg-indigo-500 h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wide">Target: &lt; 30 days</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3.5 rounded-xl bg-teal-50 text-teal-600 shadow-sm">
                        <FiTarget className="w-6 h-6" />
                    </div>
                    <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
                        <FiArrowUp className="mr-1" /> 5%
                    </span>
                </div>
                <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Interview to Offer</p>
                    <div className="flex items-baseline gap-2">
                        <h4 className="text-4xl font-bold text-gray-900 tracking-tight">{interviewToOfferRatio}%</h4>
                        <span className="text-gray-400 font-bold text-sm">Conv.</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
                        <div className="bg-teal-500 h-full rounded-full" style={{ width: `${Math.min(interviewToOfferRatio, 100)}%` }}></div>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wide">Target: &gt; 25%</p>
                </div>
            </div>
        </div>
    );
}
