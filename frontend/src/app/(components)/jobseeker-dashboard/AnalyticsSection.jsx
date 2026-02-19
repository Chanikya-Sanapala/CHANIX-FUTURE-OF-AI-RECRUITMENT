"use client";

import { useMemo } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    PieChart,
    Pie
} from 'recharts';
import { FiTrendingUp, FiEye, FiTarget, FiActivity } from 'react-icons/fi';

export default function AnalyticsSection({ appliedJobs = [], interviews = [] }) {

    // Memoize data processing
    const stats = useMemo(() => {
        // 1. Applications over time (Last 6 months)
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currentMonth = new Date().getMonth();
        const last6Months = [];

        // Initialize last 6 months data
        for (let i = 5; i >= 0; i--) {
            // Handle year rollover correctly
            let mIndex = currentMonth - i;
            let y = new Date().getFullYear();
            if (mIndex < 0) {
                mIndex += 12;
                y -= 1;
            }

            last6Months.push({
                name: months[mIndex],
                monthIndex: mIndex,
                year: y,
                applications: 0,
                interviews: 0
            });
        }

        // Fill data for Applications
        appliedJobs.forEach(job => {
            const date = new Date(job.appliedDate);
            if (isNaN(date.getTime())) return;

            const monthIdx = date.getMonth();
            const year = date.getFullYear();
            const bin = last6Months.find(m => m.monthIndex === monthIdx && m.year === year);
            if (bin) bin.applications++;
        });

        // Fill data for Interviews
        interviews.forEach(int => {
            const date = new Date(int.date); // Assuming date string format is parseable
            if (isNaN(date.getTime())) return;
            const monthIdx = date.getMonth();
            const year = date.getFullYear();
            const bin = last6Months.find(m => m.monthIndex === monthIdx && m.year === year);
            if (bin) bin.interviews++;
        });

        // 2. Response Rate
        const totalApps = appliedJobs.length;
        const interviewsCount = interviews.length;
        const responseRate = totalApps > 0 ? Math.round((interviewsCount / totalApps) * 100) : 0;

        // Weekly Goal status
        const weeklyGoal = 5;
        const now = new Date();
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        const weeklyProgress = appliedJobs.filter(j => {
            const d = new Date(j.appliedDate);
            return d >= oneWeekAgo && d <= now;
        }).length;

        return {
            barData: last6Months,
            responseRate,
            weeklyGoal,
            weeklyProgress: Math.min(weeklyProgress, weeklyGoal)
        };
    }, [appliedJobs, interviews]);

    // Ring Data for chart
    const ringData = [
        { name: 'Rate', value: stats.responseRate, fill: '#8b5cf6' },
        { name: 'Remaining', value: 100 - stats.responseRate, fill: '#e5e7eb' }
    ];

    return (
        <div className="space-y-6 animate-fade-in-up mb-8">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                    <span className="text-2xl">📊</span> Career Health
                </h2>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wider">Beta</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Chart */}
                <div className="lg:col-span-2 ios-card p-6 flex flex-col justify-between min-h-[300px] bg-white rounded-[2rem] shadow-sm border border-gray-100">
                    <div className="mb-6 flex justify-between items-start">
                        <div>
                            <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                                Activity Overview
                            </h3>
                            <p className="text-sm text-gray-400 font-medium mt-1">Applications vs Interviews (6 Months)</p>
                        </div>
                        <div className="flex gap-4 text-xs font-bold">
                            <div className="flex items-center gap-1.5 text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Applied
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Interview
                            </div>
                        </div>
                    </div>

                    <div className="h-56 w-full mt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats.barData} barGap={4}>
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600 }}
                                    dy={10}
                                />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc', radius: 8 }}
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', padding: '12px' }}
                                    itemStyle={{ fontSize: '12px', fontWeight: 600, padding: '2px 0' }}
                                    labelStyle={{ fontSize: '11px', color: '#94a3b8', marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase' }}
                                />
                                <Bar dataKey="applications" name="Applications" fill="#3b82f6" radius={[4, 4, 4, 4]} barSize={12} />
                                <Bar dataKey="interviews" name="Interviews" fill="#8b5cf6" radius={[4, 4, 4, 4]} barSize={12} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Side Stats */}
                <div className="space-y-6">

                    {/* Response Rate Card */}
                    <div className="ios-card p-6 flex items-center justify-between bg-white rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Response Rate</p>
                            <div className="text-4xl font-black text-gray-900 tracking-tight">{stats.responseRate}%</div>
                            <p className="text-[10px] text-gray-400 font-medium mt-1">Interview conversion</p>
                        </div>
                        <div className="h-20 w-20 relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={ringData}
                                        innerRadius={25}
                                        outerRadius={36}
                                        paddingAngle={0}
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={-270}
                                        stroke="none"
                                    >
                                        {ringData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex items-center justify-center text-purple-600">
                                <FiTrendingUp className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-50 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
                    </div>

                    {/* Weekly Goal Ring */}
                    <div className="ios-card p-6 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white rounded-[2rem] shadow-lg">
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div>
                                <h3 className="text-base font-bold text-white">Weekly Targets</h3>
                                <p className="text-xs text-gray-400 font-medium mt-0.5">5 Applications / week</p>
                            </div>
                            <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl text-green-400">
                                <FiTarget className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="mt-2 relative z-10">
                            <div className="flex justify-between text-xs font-bold mb-2">
                                <span className={stats.weeklyProgress >= 5 ? 'text-green-400' : 'text-blue-400'}>
                                    {stats.weeklyProgress} / 5 Applied
                                </span>
                                <span className="text-gray-500">{Math.round((stats.weeklyProgress / 5) * 100)}%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ease-out ${stats.weeklyProgress >= 5 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-blue-400 to-indigo-500'}`}
                                    style={{ width: `${(stats.weeklyProgress / 5) * 100}%` }}
                                ></div>
                            </div>
                            {stats.weeklyProgress >= 5 && (
                                <p className="text-[10px] text-green-400 font-bold mt-3 animate-pulse">🎉 Week goal completed!</p>
                            )}
                        </div>

                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
