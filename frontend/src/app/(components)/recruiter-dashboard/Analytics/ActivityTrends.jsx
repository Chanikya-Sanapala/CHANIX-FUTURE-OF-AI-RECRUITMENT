import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ActivityTrends({ data, range }) {
    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-center h-96">
                <p className="text-gray-400">No activity data available for the selected range.</p>
            </div>
        );
    }

    const formatDate = (str) => {
        const date = new Date(str);
        if (range === 'year') {
            return date.toLocaleDateString("en-US", { month: "short", year: '2-digit' });
        }
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };

    return (
        <div className="h-80 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    barGap={8}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                        dy={10}
                        tickFormatter={formatDate}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                        width={30}
                    />
                    <Tooltip
                        cursor={{ fill: '#f8fafc', radius: 8 }}
                        contentStyle={{
                            borderRadius: '16px',
                            border: 'none',
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                            padding: '12px 16px',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(4px)'
                        }}
                        labelStyle={{ color: '#111827', fontWeight: 'bold', marginBottom: '8px' }}
                        itemStyle={{ fontSize: '12px', fontWeight: '600', padding: '2px 0' }}
                        labelFormatter={(value) => {
                            return new Date(value).toLocaleDateString("en-US", {
                                month: "short",
                                day: range === 'year' ? undefined : "numeric",
                                year: "numeric"
                            });
                        }}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        height={40}
                        iconType="circle"
                        iconSize={8}
                        formatter={(value) => <span className="text-xs font-bold text-gray-500 ml-1">{value}</span>}
                    />
                    <Bar
                        dataKey="resumes"
                        name="Resumes"
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                        barSize={12}
                    />
                    <Bar
                        dataKey="interviews"
                        name="Interviews"
                        fill="#8B5CF6"
                        radius={[4, 4, 0, 0]}
                        barSize={12}
                    />
                    <Bar
                        dataKey="offers"
                        name="Offers"
                        fill="#10B981"
                        radius={[4, 4, 0, 0]}
                        barSize={12}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
