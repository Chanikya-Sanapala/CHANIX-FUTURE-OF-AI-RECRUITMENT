import React from 'react';
import { FiStar } from 'react-icons/fi';

export default function ClientFeedback({ data }) {
    if (!data) return null;
    const { rating, reviews, sentiment } = data;

    const renderStars = (score) => {
        return [...Array(5)].map((_, i) => (
            <FiStar
                key={i}
                className={`w-5 h-5 ${i < Math.floor(score) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Client Feedback</h3>

            <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-yellow-50 flex items-center justify-center border-4 border-yellow-100">
                    <span className="text-5xl font-extrabold text-gray-900 tracking-tighter">{rating}</span>
                </div>
                <div>
                    <div className="flex mb-2 gap-0.5">{renderStars(rating)}</div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">{reviews} Verified Reviews</p>
                </div>
            </div>

            <div className="space-y-5">
                <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="font-bold text-gray-500 uppercase tracking-wider">Positive</span>
                        <span className="text-gray-900 font-bold">{sentiment.positive}%</span>
                    </div>
                    <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full shadow-lg shadow-green-200" style={{ width: `${sentiment.positive}%` }}></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="font-bold text-gray-500 uppercase tracking-wider">Neutral</span>
                        <span className="text-gray-900 font-bold">{sentiment.neutral}%</span>
                    </div>
                    <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-400 rounded-full shadow-lg shadow-yellow-200" style={{ width: `${sentiment.neutral}%` }}></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="font-bold text-gray-500 uppercase tracking-wider">Negative</span>
                        <span className="text-gray-900 font-bold">{sentiment.negative}%</span>
                    </div>
                    <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full shadow-lg shadow-red-200" style={{ width: `${sentiment.negative}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
