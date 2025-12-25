(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(components)/recruiter-dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecruiterDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const baseAuthUrl = ("TURBOPACK compile-time value", "http://localhost:5005");
console.log("RecruiterDashboard baseAuthUrl:", baseAuthUrl);
function RecruiterDashboard() {
    var _user_firstName, _user_firstName1, _profile_profile, _profile_profile1, _profile_profile_company, _profile_profile2, _profile_profile_company1, _profile_profile3, _activityStats_labels_activityStats_data_indexOf, _selectedApplication_applicant_fullName, _selectedApplication_applicant, _selectedApplication_applicant1, _selectedApplication_applicant2, _selectedApplication_applicant3, _selectedApplication_job, _selectedApplication_applicant4, _selectedApplication_applicant5, _selectedApplication_applicant_resume, _selectedApplication_applicant6;
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [showJobForm, setShowJobForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [jobPosts, setJobPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [interviews, setInterviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [applications, setApplications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Mobile Sidebar State
    // ... (Keep existing Job Management State)
    const [newJob, setNewJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        company: '',
        description: '',
        skillsRequired: [],
        experience: '',
        location: '',
        salary: '',
        jobType: 'Full-time',
        deadline: '',
        customQuestions: []
    });
    const [editingJob, setEditingJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ... (Keep existing Filter/Sort State)
    const [appFilter, setAppFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [appSort, setAppSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('date-desc');
    const [selectedApplication, setSelectedApplication] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showCandidateModal, setShowCandidateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ... (Keep existing Profile State)
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditingProfile, setIsEditingProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileForm, setProfileForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: '',
        lastName: '',
        phone: '',
        position: '',
        bio: '',
        linkedin: '',
        companyName: '',
        companyWebsite: '',
        companyIndustry: '',
        companyDescription: '',
        companyLocation: '',
        companySize: '1-10'
    });
    // ... (Keep existing Dashboard Features State)
    const [statsData, setStatsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activityStats, setActivityStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        labels: [],
        data: [],
        totalMinutes: 0,
        range: 'week'
    });
    const [networkRequests, setNetworkRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [myConnections, setMyConnections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // ... (Keep existing useEffects and fetch logic)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecruiterDashboard.useEffect": ()=>{
            const token = localStorage.getItem('token');
            if (!token) return;
            const recordTime = {
                "RecruiterDashboard.useEffect.recordTime": async ()=>{
                    try {
                        await fetch("".concat(baseAuthUrl, "/api/analytics/activity/record"), {
                            method: 'POST',
                            headers: {
                                'Authorization': "Bearer ".concat(token)
                            }
                        });
                        fetchActivityStats('week');
                    } catch (e) {
                        console.error("Time tracking error", e);
                    }
                }
            }["RecruiterDashboard.useEffect.recordTime"];
            const interval = setInterval(recordTime, 60000);
            return ({
                "RecruiterDashboard.useEffect": ()=>clearInterval(interval)
            })["RecruiterDashboard.useEffect"];
        }
    }["RecruiterDashboard.useEffect"], []);
    const fetchActivityStats = async function() {
        let range = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'week';
        // ... (Keep logic)
        const token = localStorage.getItem('token');
        try {
            const res = await fetch("".concat(baseAuthUrl, "/api/analytics/activity/stats?range=").concat(range), {
                headers: {
                    'Authorization': "Bearer ".concat(token)
                }
            });
            const data = await res.json();
            if (data.success) {
                setActivityStats(data.data);
            }
        } catch (e) {
            console.error("Activity stats fetch error", e);
        }
    };
    const fetchRecruiterData = async (userId)=>{
        if (!userId) return;
        const token = localStorage.getItem('token');
        try {
            fetchActivityStats('week');
            // Fetch Jobs
            const jobsRes = await fetch("".concat(baseAuthUrl, "/api/jobs?recruiterId=").concat(userId), {
                headers: {
                    'Authorization': "Bearer ".concat(token)
                }
            });
            const jobsData = await jobsRes.json();
            if (jobsData.success) {
                setJobPosts(jobsData.data.reverse());
            }
            // Fetch Applications
            const appsRes = await fetch("".concat(baseAuthUrl, "/api/applications"), {
                headers: {
                    'Authorization': "Bearer ".concat(token)
                }
            });
            const appsData = await appsRes.json();
            if (appsData.success && Array.isArray(appsData.data)) {
                setApplications(appsData.data);
            }
            // Fetch Interviews
            try {
                const intRes = await fetch("".concat(baseAuthUrl, "/api/interviews/recruiter"), {
                    headers: {
                        'Authorization': "Bearer ".concat(token)
                    }
                });
                const intData = await intRes.json();
                if (intData.success) setInterviews(intData.data);
            } catch (e) {
                console.error("Interview fetch error", e);
            }
            // Fetch Analytics
            try {
                const anaRes = await fetch("".concat(baseAuthUrl, "/api/analytics/recruiter/stats"), {
                    headers: {
                        'Authorization': "Bearer ".concat(token)
                    }
                });
                const anaData = await anaRes.json();
                if (anaData.success) setStatsData(anaData.data);
            } catch (e) {
                console.error("Analytics fetch error", e);
            }
            // Fetch Suggestions
            try {
                const suggRes = await fetch("".concat(baseAuthUrl, "/api/profile/suggestions"), {
                    headers: {
                        'Authorization': "Bearer ".concat(token)
                    }
                });
                const suggData = await suggRes.json();
                if (suggData.success) setSuggestions(suggData.data);
            } catch (e) {
                console.error("Suggestions fetch error", e);
            }
            // Fetch Profile
            try {
                const profileRes = await fetch("".concat(baseAuthUrl, "/api/profile/get"), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer ".concat(token)
                    },
                    body: JSON.stringify({
                        userId: userId,
                        userType: 'recruiter'
                    })
                });
                const pData = await profileRes.json();
                if (pData.success && pData.data) {
                    var _p_socialProfiles, _p_company, _p_company1, _p_company2, _p_company3, _p_company4, _p_company5;
                    const p = pData.data.profile || {};
                    const u = pData.data.user || {};
                    setProfile(pData.data);
                    setProfileForm({
                        firstName: u.firstName || '',
                        lastName: u.lastName || '',
                        phone: p.phone || '',
                        position: p.position || '',
                        bio: p.bio || '',
                        linkedin: ((_p_socialProfiles = p.socialProfiles) === null || _p_socialProfiles === void 0 ? void 0 : _p_socialProfiles.linkedin) || '',
                        companyName: ((_p_company = p.company) === null || _p_company === void 0 ? void 0 : _p_company.name) || '',
                        companyWebsite: ((_p_company1 = p.company) === null || _p_company1 === void 0 ? void 0 : _p_company1.website) || '',
                        companyIndustry: ((_p_company2 = p.company) === null || _p_company2 === void 0 ? void 0 : _p_company2.industry) || '',
                        companyDescription: ((_p_company3 = p.company) === null || _p_company3 === void 0 ? void 0 : _p_company3.description) || '',
                        companyLocation: ((_p_company4 = p.company) === null || _p_company4 === void 0 ? void 0 : _p_company4.address) || '',
                        companySize: ((_p_company5 = p.company) === null || _p_company5 === void 0 ? void 0 : _p_company5.size) || '1-10'
                    });
                }
            } catch (e) {
                console.error("Profile fetch error", e);
            }
            // Fetch Network Data (Requests & Connections)
            try {
                const reqRes = await fetch("".concat(baseAuthUrl, "/api/connections/requests"), {
                    headers: {
                        'Authorization': "Bearer ".concat(token)
                    }
                });
                const reqData = await reqRes.json();
                if (Array.isArray(reqData)) setNetworkRequests(reqData);
                const connRes = await fetch("".concat(baseAuthUrl, "/api/connections/my-connections"), {
                    headers: {
                        'Authorization': "Bearer ".concat(token)
                    }
                });
                const connData = await connRes.json();
                if (Array.isArray(connData)) setMyConnections(connData);
            } catch (e) {
                console.error("Network fetch error", e);
            }
        } catch (error) {
            console.error("Data fetch error:", error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecruiterDashboard.useEffect": ()=>{
            const token = localStorage.getItem('token');
            const userData = localStorage.getItem('user');
            if (!token || !userData) {
                router.push('/login');
            } else {
                const u = JSON.parse(userData);
                setUser(u);
                fetchRecruiterData(u._id || u.id);
            }
        }
    }["RecruiterDashboard.useEffect"], []);
    const handleLogout = ()=>{
        localStorage.clear();
        router.push('/');
    };
    // ... (Keep existing Profile/Job handler functions)
    const handleConnect = async (userId, userName)=>{
        const token = localStorage.getItem('token');
        try {
            const res = await fetch("".concat(baseAuthUrl, "/api/connections/request"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                    recipientId: userId
                })
            });
            const data = await res.json();
            if (res.ok) {
                alert("Connection request sent to ".concat(userName, "!"));
                // Remove user from suggestions list
                setSuggestions(suggestions.filter((s)=>s._id !== userId));
            } else {
                alert(data.message || 'Failed to send request');
            }
        } catch (err) {
            console.error('Connection request error:', err);
            alert('Error sending connection request');
        }
    };
    const handleRespondToRequest = async (connectionId, status)=>{
        const token = localStorage.getItem('token');
        try {
            const res = await fetch("".concat(baseAuthUrl, "/api/connections/").concat(connectionId, "/respond"), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                    status
                })
            });
            const data = await res.json();
            if (res.ok) {
                alert("Connection ".concat(status, "!"));
                // Refresh network data
                const reqRes = await fetch("".concat(baseAuthUrl, "/api/connections/requests"), {
                    headers: {
                        'Authorization': "Bearer ".concat(token)
                    }
                });
                const reqData = await reqRes.json();
                if (Array.isArray(reqData)) setNetworkRequests(reqData);
                const connRes = await fetch("".concat(baseAuthUrl, "/api/connections/my-connections"), {
                    headers: {
                        'Authorization': "Bearer ".concat(token)
                    }
                });
                const connData = await connRes.json();
                if (Array.isArray(connData)) setMyConnections(connData);
            } else {
                alert(data.message || 'Failed to update request');
            }
        } catch (err) {
            console.error('Respond request error:', err);
            alert('Error updating request');
        }
    };
    const handleProfileUpdate = async (e)=>{
        // ... keep implementation
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            // ... payload ...
            const payload = {
                firstName: profileForm.firstName,
                lastName: profileForm.lastName,
                phone: profileForm.phone,
                position: profileForm.position,
                bio: profileForm.bio,
                socialProfiles: {
                    linkedin: profileForm.linkedin
                },
                company: {
                    name: profileForm.companyName,
                    website: profileForm.companyWebsite,
                    industry: profileForm.companyIndustry,
                    description: profileForm.companyDescription,
                    address: profileForm.companyLocation,
                    size: profileForm.companySize || '1-10'
                }
            };
            const res = await fetch("".concat(baseAuthUrl, "/api/profile/recruiter"), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (data.success) {
                alert('Profile updated successfully!');
                setIsEditingProfile(false);
                fetchRecruiterData(user._id || user.id);
            } else {
                alert(data.message || 'Update failed');
            }
        } catch (err) {
            alert('Error updating profile');
        }
    };
    // ... keep handlePostJob ...
    const handlePostJob = async (e)=>{
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const payload = {
                ...newJob,
                recruiterId: user._id || user.id
            };
            const res = await fetch("".concat(baseAuthUrl, "/api/jobs"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            if (result.success) {
                setJobPosts([
                    result.data,
                    ...jobPosts
                ]);
                setShowJobForm(false);
                setNewJob({
                    title: '',
                    company: '',
                    description: '',
                    skillsRequired: [],
                    experience: '',
                    location: '',
                    salary: '',
                    jobType: 'Full-time',
                    deadline: '',
                    customQuestions: []
                });
                alert('Job Posted Successfully!');
            } else {
                alert(result.message);
            }
        } catch (err) {
            console.error(err);
            alert('Error posting job: ' + err.message);
        }
    };
    // ... keep handleUpdateJob ...
    const handleUpdateJob = async (e)=>{
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            if (!(editingJob === null || editingJob === void 0 ? void 0 : editingJob._id)) return;
            const payload = {
                title: newJob.title,
                company: newJob.company,
                description: newJob.description,
                location: newJob.location,
                salary: newJob.salary,
                jobType: newJob.jobType,
                deadline: newJob.deadline
            };
            const res = await fetch("".concat(baseAuthUrl, "/api/jobs/").concat(editingJob._id), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            if (result.success) {
                setJobPosts(jobPosts.map((j)=>j._id === editingJob._id ? result.data : j));
                setShowJobForm(false);
                setEditingJob(null);
                setNewJob({
                    title: '',
                    company: '',
                    description: '',
                    skillsRequired: [],
                    experience: '',
                    location: '',
                    salary: '',
                    jobType: 'Full-time',
                    deadline: '',
                    customQuestions: []
                });
                alert('Job Updated Successfully!');
            } else {
                alert(result.message);
            }
        } catch (err) {
            alert('Error updating job: ' + err.message);
        }
    };
    // ... helper functions
    const startEditJob = (job)=>{
        setEditingJob(job);
        setNewJob({
            title: job.title || '',
            company: job.company || '',
            description: job.description || '',
            skillsRequired: job.skillsRequired || [],
            experience: job.experience || '',
            location: job.location || '',
            salary: job.salary || '',
            jobType: job.jobType || 'Full-time',
            deadline: job.deadline ? new Date(job.deadline).toISOString().split('T')[0] : '',
            customQuestions: job.customQuestions || []
        });
        setShowJobForm(true);
    };
    const handleCloseJob = async (jobId)=>{
        if (!confirm('Are you sure you want to close this job?')) return;
        const token = localStorage.getItem('token');
        try {
            const res = await fetch("".concat(baseAuthUrl, "/api/jobs/").concat(jobId, "/status"), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                    status: 'Closed'
                })
            });
            const result = await res.json();
            if (result.success) {
                setJobPosts(jobPosts.map((j)=>j._id === jobId || j.id === jobId ? {
                        ...j,
                        status: 'Closed'
                    } : j));
            }
        } catch (err) {
            console.error(err);
        }
    };
    const handleScheduleInterview = async (candidateId, jobId)=>{
        if (!candidateId || !jobId) return alert('Missing candidate or job info');
        if (!confirm('Schedule AI Interview for this candidate?')) return;
        try {
            const token = localStorage.getItem('token');
            const res = await fetch("".concat(baseAuthUrl, "/api/interviews/schedule"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                    candidateId,
                    jobId
                })
            });
            const data = await res.json();
            if (data.success) {
                alert("Interview Scheduled!\nLink: ".concat(data.data.link, "\n(Link also sent to candidate email)"));
            } else {
                alert(data.message || 'Failed to schedule');
            }
        } catch (err) {
            console.error(err);
            alert('Error scheduling interview');
        }
    };
    const filteredApplications = applications.filter((app)=>{
        if (appFilter === 'All') return true;
        return (app.status || 'Pending') === appFilter;
    }).sort((a, b)=>{
        if (appSort === 'date-desc') return new Date(b.createdAt) - new Date(a.createdAt);
        if (appSort === 'match-desc') return (b.matchScore || 0) - (a.matchScore || 0);
        return 0;
    });
    const handleViewCandidate = (app)=>{
        setSelectedApplication(app);
        setShowCandidateModal(true);
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
        lineNumber: 394,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex font-sans text-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Recruiter Dashboard | Smart Engine"
                }, void 0, false, {
                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm",
                onClick: ()=>setIsSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                lineNumber: 404,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "fixed md:sticky top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 transform \n          ".concat(isSidebarOpen ? 'translate-x-0' : '-translate-x-full', " md:translate-x-0"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b border-gray-100 flex justify-between items-center bg-blue-50/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                                children: "SmartRecruit"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsSidebarOpen(false),
                                className: "md:hidden text-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 p-4 space-y-2 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('dashboard');
                                    setShowJobForm(false);
                                    setIsSidebarOpen(false);
                                },
                                className: "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200\n                  ".concat(activeTab === 'dashboard' && !showJobForm ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', "\n                "),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPieChart"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('applications');
                                    setShowJobForm(false);
                                    setIsSidebarOpen(false);
                                },
                                className: "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200\n                  ".concat(activeTab === 'applications' && !showJobForm ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', "\n                "),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Applications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('profile');
                                    setShowJobForm(false);
                                    setIsSidebarOpen(false);
                                },
                                className: "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200\n                  ".concat(activeTab === 'profile' ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', "\n                "),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "My Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 448,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 441,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('network');
                                    setShowJobForm(false);
                                    setIsSidebarOpen(false);
                                },
                                className: "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200\n                  ".concat(activeTab === 'network' ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', "\n                "),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "My Network"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    networkRequests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-red-500 text-white text-xs px-2 py-0.5 rounded-full",
                                        children: networkRequests.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 459,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 mt-4 border-t border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowJobForm(true);
                                        setIsSidebarOpen(false);
                                    },
                                    className: "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlusSquare"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Post a Job"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-6 mt-4 border-t border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",
                                        children: "You might know"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 473,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 px-2",
                                        children: [
                                            suggestions.slice(0, 3).map((sug, i)=>{
                                                var _sug_firstName;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0",
                                                            children: sug.profilePicture ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: sug.profilePicture,
                                                                alt: sug.firstName,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 479,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full flex items-center justify-center text-xs font-bold text-gray-500",
                                                                children: (_sug_firstName = sug.firstName) === null || _sug_firstName === void 0 ? void 0 : _sug_firstName[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 481,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 477,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium text-gray-900 truncate",
                                                                    children: [
                                                                        sug.firstName,
                                                                        " ",
                                                                        sug.lastName
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-gray-500 truncate",
                                                                    children: sug.headline || 'Recruiter'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 484,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "opacity-0 group-hover:opacity-100 text-blue-600 hover:text-blue-800 transition",
                                                            onClick: ()=>handleConnect(sug._id, sug.firstName),
                                                            title: "Connect",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlusSquare"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 491,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 488,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 476,
                                                    columnNumber: 17
                                                }, this);
                                            }),
                                            suggestions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "px-2 text-xs text-gray-400 font-style: italic",
                                                children: "No suggestions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 495,
                                                columnNumber: 44
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full text-xs text-blue-600 font-medium py-2 hover:bg-blue-50 rounded text-center mt-1",
                                                children: "View All Connections"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-gray-100 bg-gray-50/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "flex items-center space-x-3 text-red-600 px-4 py-2 hover:bg-red-50 rounded-lg w-full transition font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto w-full md:ml-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "bg-white px-6 py-4 shadow-sm flex justify-between items-center sticky top-0 z-10 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsSidebarOpen(true),
                                        className: "p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100 md:hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 521,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 517,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-800 hidden sm:block",
                                        children: showJobForm ? 'Post New Job' : activeTab === 'applications' ? 'Applications' : activeTab === 'profile' ? 'My Profile' : activeTab === 'network' ? 'My Network' : 'Dashboard Overview'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right hidden sm:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-gray-900",
                                                children: [
                                                    user === null || user === void 0 ? void 0 : user.firstName,
                                                    " ",
                                                    user === null || user === void 0 ? void 0 : user.lastName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Recruiter"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 531,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 529,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md",
                                        children: user === null || user === void 0 ? void 0 : (_user_firstName = user.firstName) === null || _user_firstName === void 0 ? void 0 : _user_firstName[0]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 533,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 max-w-[1600px] mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: showJobForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold mb-6",
                                        children: editingJob ? 'Edit Job Posting' : 'Create Job Posting'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 544,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: editingJob ? handleUpdateJob : handlePostJob,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Job Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 548,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                type: "text",
                                                                value: newJob.title,
                                                                onChange: (e)=>setNewJob({
                                                                        ...newJob,
                                                                        title: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",
                                                                placeholder: "e.g. Senior React Developer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 549,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 547,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Company Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 552,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                type: "text",
                                                                value: newJob.company,
                                                                onChange: (e)=>setNewJob({
                                                                        ...newJob,
                                                                        company: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 553,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 551,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 546,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Job Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 557,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: newJob.description,
                                                        onChange: (e)=>setNewJob({
                                                                ...newJob,
                                                                description: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",
                                                        rows: "5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 558,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 556,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 562,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                type: "text",
                                                                value: newJob.location,
                                                                onChange: (e)=>setNewJob({
                                                                        ...newJob,
                                                                        location: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",
                                                                placeholder: "e.g. New York, Remote"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 563,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 561,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Salary Range"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 566,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: newJob.salary,
                                                                onChange: (e)=>setNewJob({
                                                                        ...newJob,
                                                                        salary: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",
                                                                placeholder: "e.g. $100k - $120k"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 567,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 565,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 560,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Job Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 572,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: newJob.jobType,
                                                                onChange: (e)=>setNewJob({
                                                                        ...newJob,
                                                                        jobType: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",
                                                                style: {
                                                                    backgroundColor: 'white'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Full-time",
                                                                        children: "Full-time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 574,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Part-time",
                                                                        children: "Part-time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 575,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Contract",
                                                                        children: "Contract"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Internship",
                                                                        children: "Internship"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 577,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 573,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 571,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Application Deadline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 581,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                required: true,
                                                                value: newJob.deadline,
                                                                min: new Date().toISOString().split('T')[0],
                                                                onChange: (e)=>setNewJob({
                                                                        ...newJob,
                                                                        deadline: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 582,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-1",
                                                                children: "Applications will close after this date."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 583,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 580,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end gap-3 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setShowJobForm(false);
                                                            setEditingJob(null);
                                                        },
                                                        className: "px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 587,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm",
                                                        children: editingJob ? 'Update Job' : 'Post Job'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 588,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 586,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 545,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 543,
                                columnNumber: 15
                            }, this) : activeTab === 'profile' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-900",
                                                children: "My Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 595,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsEditingProfile(!isEditingProfile),
                                                className: "text-blue-600 font-medium hover:underline",
                                                children: isEditingProfile ? 'Cancel' : 'Edit'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 596,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this),
                                    isEditingProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleProfileUpdate,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: profileForm.firstName,
                                                        onChange: (e)=>setProfileForm({
                                                                ...profileForm,
                                                                firstName: e.target.value
                                                            }),
                                                        className: "border p-2 rounded",
                                                        placeholder: "First Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 603,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: profileForm.lastName,
                                                        onChange: (e)=>setProfileForm({
                                                                ...profileForm,
                                                                lastName: e.target.value
                                                            }),
                                                        className: "border p-2 rounded",
                                                        placeholder: "Last Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 604,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: profileForm.phone,
                                                        onChange: (e)=>setProfileForm({
                                                                ...profileForm,
                                                                phone: e.target.value
                                                            }),
                                                        className: "border p-2 rounded",
                                                        placeholder: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 605,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: profileForm.position,
                                                        onChange: (e)=>setProfileForm({
                                                                ...profileForm,
                                                                position: e.target.value
                                                            }),
                                                        className: "border p-2 rounded",
                                                        placeholder: "Position"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 606,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 602,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: profileForm.bio,
                                                onChange: (e)=>setProfileForm({
                                                        ...profileForm,
                                                        bio: e.target.value
                                                    }),
                                                className: "w-full border p-2 rounded",
                                                rows: "3",
                                                placeholder: "Bio"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 608,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold border-t pt-4",
                                                children: "Company Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 609,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: profileForm.companyName,
                                                        onChange: (e)=>setProfileForm({
                                                                ...profileForm,
                                                                companyName: e.target.value
                                                            }),
                                                        className: "border p-2 rounded",
                                                        placeholder: "Company Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 611,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: profileForm.companyWebsite,
                                                        onChange: (e)=>setProfileForm({
                                                                ...profileForm,
                                                                companyWebsite: e.target.value
                                                            }),
                                                        className: "border p-2 rounded",
                                                        placeholder: "Website"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 612,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: profileForm.companyIndustry,
                                                        onChange: (e)=>setProfileForm({
                                                                ...profileForm,
                                                                companyIndustry: e.target.value
                                                            }),
                                                        className: "border p-2 rounded",
                                                        placeholder: "Industry (e.g. IT, Healthcare)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 614,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: profileForm.companyLocation,
                                                        onChange: (e)=>setProfileForm({
                                                                ...profileForm,
                                                                companyLocation: e.target.value
                                                            }),
                                                        className: "border p-2 rounded",
                                                        placeholder: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 615,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: profileForm.companySize,
                                                        onChange: (e)=>setProfileForm({
                                                                ...profileForm,
                                                                companySize: e.target.value
                                                            }),
                                                        className: "border p-2 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1-10",
                                                                children: "1-10 Employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 617,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "11-50",
                                                                children: "11-50 Employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 618,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "51-200",
                                                                children: "51-200 Employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 619,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "201-500",
                                                                children: "201-500 Employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 620,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "501-1000",
                                                                children: "501-1000 Employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 621,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1000+",
                                                                children: "1000+ Employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 622,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 616,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 610,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "bg-blue-600 text-white px-6 py-2 rounded",
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 625,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 601,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600",
                                                        children: user === null || user === void 0 ? void 0 : (_user_firstName1 = user.firstName) === null || _user_firstName1 === void 0 ? void 0 : _user_firstName1[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 630,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-2xl font-bold",
                                                                children: [
                                                                    user === null || user === void 0 ? void 0 : user.firstName,
                                                                    " ",
                                                                    user === null || user === void 0 ? void 0 : user.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 632,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: (profile === null || profile === void 0 ? void 0 : (_profile_profile = profile.profile) === null || _profile_profile === void 0 ? void 0 : _profile_profile.position) || 'Recruiter'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 633,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 631,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 629,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Email:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 637,
                                                                columnNumber: 26
                                                            }, this),
                                                            " ",
                                                            user === null || user === void 0 ? void 0 : user.email
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 637,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Phone:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 638,
                                                                columnNumber: 26
                                                            }, this),
                                                            " ",
                                                            (profile === null || profile === void 0 ? void 0 : (_profile_profile1 = profile.profile) === null || _profile_profile1 === void 0 ? void 0 : _profile_profile1.phone) || 'N/A'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 638,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Company:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 639,
                                                                columnNumber: 26
                                                            }, this),
                                                            " ",
                                                            (profile === null || profile === void 0 ? void 0 : (_profile_profile2 = profile.profile) === null || _profile_profile2 === void 0 ? void 0 : (_profile_profile_company = _profile_profile2.company) === null || _profile_profile_company === void 0 ? void 0 : _profile_profile_company.name) || 'N/A'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 639,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Location:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 640,
                                                                columnNumber: 26
                                                            }, this),
                                                            " ",
                                                            (profile === null || profile === void 0 ? void 0 : (_profile_profile3 = profile.profile) === null || _profile_profile3 === void 0 ? void 0 : (_profile_profile_company1 = _profile_profile3.company) === null || _profile_profile_company1 === void 0 ? void 0 : _profile_profile_company1.address) || 'N/A'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 640,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 636,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 628,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 593,
                                columnNumber: 15
                            }, this) : activeTab === 'network' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2",
                                                children: [
                                                    "Incoming Requests",
                                                    networkRequests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded-full",
                                                        children: networkRequests.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 651,
                                                        columnNumber: 52
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 649,
                                                columnNumber: 19
                                            }, this),
                                            networkRequests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 italic",
                                                children: "No pending connection requests."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 654,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                                children: networkRequests.map((req, i)=>{
                                                    var _req_requester, _req_requester_firstName, _req_requester1, _req_requester2, _req_requester3, _req_requester4;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-20 h-20 bg-gray-200 rounded-full mb-4 overflow-hidden",
                                                                children: ((_req_requester = req.requester) === null || _req_requester === void 0 ? void 0 : _req_requester.profilePicture) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: req.requester.profilePicture,
                                                                    alt: req.requester.firstName,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400",
                                                                    children: (_req_requester1 = req.requester) === null || _req_requester1 === void 0 ? void 0 : (_req_requester_firstName = _req_requester1.firstName) === null || _req_requester_firstName === void 0 ? void 0 : _req_requester_firstName[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 663,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 659,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-gray-900",
                                                                children: [
                                                                    (_req_requester2 = req.requester) === null || _req_requester2 === void 0 ? void 0 : _req_requester2.firstName,
                                                                    " ",
                                                                    (_req_requester3 = req.requester) === null || _req_requester3 === void 0 ? void 0 : _req_requester3.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 666,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-500 mb-4",
                                                                children: ((_req_requester4 = req.requester) === null || _req_requester4 === void 0 ? void 0 : _req_requester4.headline) || 'Recruiter'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 667,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 w-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleRespondToRequest(req._id, 'accepted'),
                                                                        className: "flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700",
                                                                        children: "Accept"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 669,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleRespondToRequest(req._id, 'rejected'),
                                                                        className: "flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200",
                                                                        children: "Reject"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 670,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 668,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 658,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 656,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 648,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-900 mb-4",
                                                children: "My Connections"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this),
                                            myConnections.filter((c)=>c.status === 'accepted').length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 italic",
                                                children: "No connections yet. Go to Dashboard to find people!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 682,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                                children: myConnections.filter((c)=>c.status === 'accepted').map((conn, i)=>// Note: myConnections return structure is { connectionId, otherUserId, status, isRequester }. 
                                                    // We might need to fetch user details for these. Ideally the backend 'my-connections' endpoint should populate user details.
                                                    // Let's check backend implementation.. 
                                                    // Ah, backend 'getMyConnections' currently only returns IDs. We need to update backend or fetch user details here.
                                                    // For now, let's display ID to confirm it works, then I'll fix backend to populate.
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {}, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 693,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 692,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-bold text-sm",
                                                                        children: [
                                                                            "User ID: ",
                                                                            conn.otherUserId
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 696,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-green-600",
                                                                        children: "Connected"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 697,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 695,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 691,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 684,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 679,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 646,
                                columnNumber: 15
                            }, this) : activeTab === 'applications' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: appFilter,
                                                        onChange: (e)=>setAppFilter(e.target.value),
                                                        className: "border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "All",
                                                                children: "All Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 711,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Pending",
                                                                children: "Pending"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 712,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Shortlisted",
                                                                children: "Shortlisted"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 713,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Rejected",
                                                                children: "Rejected"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 714,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 710,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: appSort,
                                                        onChange: (e)=>setAppSort(e.target.value),
                                                        className: "border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "date-desc",
                                                                children: "Newest First"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 717,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "match-desc",
                                                                children: "Highest Match Score"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 718,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 716,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 709,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "Showing ",
                                                    filteredApplications.length,
                                                    " applications"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 721,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 708,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-gray-50 border-b border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-4 font-semibold text-gray-600",
                                                                children: "Candidate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 730,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-4 font-semibold text-gray-600",
                                                                children: "Job Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 731,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-4 font-semibold text-gray-600",
                                                                children: "Match"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 732,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-4 font-semibold text-gray-600",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 733,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-4 font-semibold text-gray-600",
                                                                children: "Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 734,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-4 font-semibold text-gray-600",
                                                                children: "Action"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 735,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 729,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 728,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-gray-100",
                                                    children: filteredApplications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: "6",
                                                            className: "px-6 py-8 text-center text-gray-500",
                                                            children: "No applications found."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 740,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 740,
                                                        columnNumber: 25
                                                    }, this) : filteredApplications.map((app, idx)=>{
                                                        var _app_applicant, _app_job;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleViewCandidate(app),
                                                                        className: "font-medium text-blue-600 hover:underline text-left",
                                                                        children: ((_app_applicant = app.applicant) === null || _app_applicant === void 0 ? void 0 : _app_applicant.fullName) || 'Unknown'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 745,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 744,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 text-gray-600",
                                                                    children: ((_app_job = app.job) === null || _app_job === void 0 ? void 0 : _app_job.title) || 'Job Name'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 749,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 rounded text-xs font-bold ".concat((app.matchScore || 0) >= 80 ? 'bg-green-100 text-green-700' : (app.matchScore || 0) >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'),
                                                                        children: [
                                                                            app.matchScore || 0,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 751,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: app.status || 'Pending'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 757,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 text-gray-500 text-sm",
                                                                    children: new Date(app.createdAt).toLocaleDateString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 758,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 flex gap-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleViewCandidate(app),
                                                                        className: "text-gray-600 hover:bg-gray-100 px-3 py-1 rounded text-sm transition border border-gray-200",
                                                                        children: "View"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 760,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 759,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 743,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 738,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 727,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 726,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 706,
                                columnNumber: 15
                            }, this) : // Default Dashboard (Enhanced V2)
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row gap-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 bg-blue-50 rounded-lg text-blue-600",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-6 h-6",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 785,
                                                                            columnNumber: 106
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 785,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 784,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium text-gray-400",
                                                                    children: "Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 787,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 783,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-gray-500 font-medium mb-1",
                                                            children: "My Hotlist (Jobs)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 789,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-end gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-3xl font-bold text-gray-900",
                                                                    children: jobPosts.length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 791,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-600 text-sm font-medium mb-1 cursor-pointer hover:underline",
                                                                    onClick: ()=>setActiveTab('applications'),
                                                                    children: "View Details ›"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 792,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 790,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 782,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 bg-purple-50 rounded-lg text-purple-600",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-6 h-6",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 800,
                                                                            columnNumber: 106
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 800,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 799,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium text-gray-400",
                                                                    children: "Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 802,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 798,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-gray-500 font-medium mb-1",
                                                            children: "My Submissions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 804,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-end gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-3xl font-bold text-gray-900",
                                                                    children: applications.length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 806,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-purple-600 text-sm font-medium mb-1 cursor-pointer hover:underline",
                                                                    onClick: ()=>setActiveTab('applications'),
                                                                    children: "View Details ›"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 807,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 805,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 797,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-0 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/30",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-gray-800 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5 text-blue-500",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2",
                                                                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 816,
                                                                                columnNumber: 120
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 816,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Time Activity"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 815,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex bg-gray-100 rounded-lg p-0.5",
                                                                    children: [
                                                                        'week',
                                                                        'month',
                                                                        'year'
                                                                    ].map((range)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>fetchActivityStats(range),
                                                                            className: "px-3 py-1 text-xs font-semibold rounded-md transition-all ".concat(activityStats.range === range ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'),
                                                                            children: range.charAt(0).toUpperCase() + range.slice(1)
                                                                        }, range, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 821,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 819,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 814,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col sm:flex-row gap-8 items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative w-32 h-32 flex-shrink-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-full h-full transform -rotate-90",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                        cx: "64",
                                                                                        cy: "64",
                                                                                        r: "56",
                                                                                        className: "stroke-gray-100",
                                                                                        strokeWidth: "8",
                                                                                        fill: "none"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 838,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                        cx: "64",
                                                                                        cy: "64",
                                                                                        r: "56",
                                                                                        className: "stroke-blue-500 transition-all duration-1000 ease-out",
                                                                                        strokeWidth: "8",
                                                                                        strokeLinecap: "round",
                                                                                        strokeDasharray: 2 * Math.PI * 56,
                                                                                        strokeDashoffset: 2 * Math.PI * 56 * (1 - Math.min(activityStats.totalMinutes / (activityStats.range === 'week' ? 2400 : 9600), 1)),
                                                                                        fill: "none"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 847,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 836,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 flex flex-col items-center justify-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-2xl font-bold text-gray-900",
                                                                                        children: [
                                                                                            Math.floor(activityStats.totalMinutes / 60),
                                                                                            "h"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 860,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs text-gray-500",
                                                                                        children: [
                                                                                            activityStats.totalMinutes % 60,
                                                                                            "m"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 861,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 859,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 835,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 w-full",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid grid-cols-2 gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "bg-blue-50/50 p-3 rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-blue-600 font-medium mb-1",
                                                                                                children: "Daily Average"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                lineNumber: 869,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-lg font-bold text-gray-800",
                                                                                                children: [
                                                                                                    Math.round(activityStats.totalMinutes / (activityStats.data.filter((d)=>d > 0).length || 1) / 60 * 10) / 10,
                                                                                                    "h"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                lineNumber: 870,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 868,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "bg-purple-50/50 p-3 rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-purple-600 font-medium mb-1",
                                                                                                children: "Most Active"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                lineNumber: 875,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-lg font-bold text-gray-800",
                                                                                                children: activityStats.data.length > 0 ? ((_activityStats_labels_activityStats_data_indexOf = activityStats.labels[activityStats.data.indexOf(Math.max(...activityStats.data))]) === null || _activityStats_labels_activityStats_data_indexOf === void 0 ? void 0 : _activityStats_labels_activityStats_data_indexOf.slice(0, 3)) || 'N/A' : '--'
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                lineNumber: 876,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 874,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 867,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-4 h-12 flex items-end gap-1 justify-between",
                                                                                children: activityStats.data.length > 0 ? activityStats.data.slice(-7).map((val, i)=>{
                                                                                    const max = Math.max(...activityStats.data, 1);
                                                                                    const height = val / max * 100;
                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex-1 flex flex-col items-center gap-1 group relative",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-full bg-blue-100 rounded-t-sm h-full relative overflow-hidden",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-cyan-400 transition-all duration-500",
                                                                                                    style: {
                                                                                                        height: "".concat(Math.max(height, 5), "%")
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                    lineNumber: 893,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                lineNumber: 892,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10",
                                                                                                children: [
                                                                                                    Math.floor(val / 60),
                                                                                                    "h ",
                                                                                                    val % 60,
                                                                                                    "m"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                lineNumber: 899,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, i, true, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 891,
                                                                                        columnNumber: 35
                                                                                    }, this);
                                                                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-full text-center text-xs text-gray-400 self-center",
                                                                                    children: "No activity yet"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                    lineNumber: 905,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 886,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 866,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 833,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 832,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 812,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 780,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold text-gray-900",
                                                                    children: "Job Match Center"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 918,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide",
                                                                    children: "AI Driven"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 919,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 917,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1",
                                                            onClick: ()=>setActiveTab('applications'),
                                                            children: [
                                                                "View Hotlist ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "›"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 922,
                                                                    columnNumber: 38
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 921,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 916,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        applications.filter((app)=>(app.matchScore || 0) >= 70).slice(0, 4).map((app, i)=>{
                                                            var _app_applicant_fullName, _app_applicant, _app_applicant1, _app_job;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition cursor-pointer",
                                                                onClick: ()=>handleViewCandidate(app),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg mr-4 shrink-0",
                                                                        children: ((_app_applicant = app.applicant) === null || _app_applicant === void 0 ? void 0 : (_app_applicant_fullName = _app_applicant.fullName) === null || _app_applicant_fullName === void 0 ? void 0 : _app_applicant_fullName[0]) || 'A'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 934,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-bold text-gray-900 truncate",
                                                                                children: ((_app_applicant1 = app.applicant) === null || _app_applicant1 === void 0 ? void 0 : _app_applicant1.fullName) || 'Candidate'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 938,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-500 truncate",
                                                                                children: ((_app_job = app.job) === null || _app_job === void 0 ? void 0 : _app_job.title) || 'Unknown Job'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 939,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 937,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col items-end gap-2 ml-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "px-2 py-0.5 rounded text-xs font-bold text-white\n                              ".concat((app.matchScore || 0) >= 50 ? 'bg-green-500' : 'bg-red-500', "\n                            "),
                                                                                children: (app.matchScore || 0) >= 85 ? 'Excellent Fit' : (app.matchScore || 0) >= 50 ? 'Good Fit' : 'Nutural'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 942,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100 font-medium",
                                                                                children: "View"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 947,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 941,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 933,
                                                                columnNumber: 27
                                                            }, this);
                                                        }),
                                                        applications.filter((app)=>(app.matchScore || 0) >= 70).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-2 text-center py-8 text-gray-500 italic",
                                                            children: "No high-match candidates found yet. Post more jobs or wait for applicants!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 953,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 927,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 915,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-800 mb-4",
                                                    children: "Your Active Job Postings"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 962,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: jobPosts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-500 italic",
                                                        children: "No jobs posted yet."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 965,
                                                        columnNumber: 25
                                                    }, this) : jobPosts.slice(0, 4).map((job, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 ".concat(job.status === 'Closed' ? 'opacity-75' : ''),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-start mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-gray-900 text-lg",
                                                                            children: job.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 970,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-2 py-1 rounded text-xs font-medium ".concat(job.status === 'Closed' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'),
                                                                            children: job.status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 971,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 969,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-500 text-sm mb-4",
                                                                    children: [
                                                                        job.company,
                                                                        " • ",
                                                                        job.location
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 975,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2 border-t pt-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>startEditJob(job),
                                                                            className: "flex-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100 font-medium",
                                                                            children: "Edit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 977,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        job.status !== 'Closed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleCloseJob(job._id || job.id),
                                                                            className: "flex-1 px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded hover:bg-red-100 font-medium",
                                                                            children: "Close"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 979,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 976,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 968,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 963,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 961,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                    lineNumber: 778,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 776,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this),
                    showCandidateModal && selectedApplication && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-b sticky top-0 bg-white z-10 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: "Candidate Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 1001,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowCandidateModal(false),
                                            className: "text-gray-500 hover:text-gray-700 text-2xl",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 1002,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                    lineNumber: 1000,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600",
                                                    children: ((_selectedApplication_applicant = selectedApplication.applicant) === null || _selectedApplication_applicant === void 0 ? void 0 : (_selectedApplication_applicant_fullName = _selectedApplication_applicant.fullName) === null || _selectedApplication_applicant_fullName === void 0 ? void 0 : _selectedApplication_applicant_fullName[0]) || 'U'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1006,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold",
                                                            children: (_selectedApplication_applicant1 = selectedApplication.applicant) === null || _selectedApplication_applicant1 === void 0 ? void 0 : _selectedApplication_applicant1.fullName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1010,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600",
                                                            children: (_selectedApplication_applicant2 = selectedApplication.applicant) === null || _selectedApplication_applicant2 === void 0 ? void 0 : _selectedApplication_applicant2.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1011,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-500 text-sm mt-1 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 1013,
                                                                        columnNumber: 104
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 1013,
                                                                    columnNumber: 25
                                                                }, this),
                                                                ((_selectedApplication_applicant3 = selectedApplication.applicant) === null || _selectedApplication_applicant3 === void 0 ? void 0 : _selectedApplication_applicant3.phone) || 'No phone provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1009,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-auto text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Match Score"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-blue-600",
                                                            children: [
                                                                selectedApplication.matchScore || 0,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1017,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 1005,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-xs font-semibold text-gray-500 uppercase",
                                                            children: "Applying For"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1025,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: (_selectedApplication_job = selectedApplication.job) === null || _selectedApplication_job === void 0 ? void 0 : _selectedApplication_job.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1026,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1024,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-xs font-semibold text-gray-500 uppercase",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1029,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: selectedApplication.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1030,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1028,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-xs font-semibold text-gray-500 uppercase",
                                                            children: "Experience"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1033,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: ((_selectedApplication_applicant4 = selectedApplication.applicant) === null || _selectedApplication_applicant4 === void 0 ? void 0 : _selectedApplication_applicant4.experience) || 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1034,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1032,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-xs font-semibold text-gray-500 uppercase",
                                                            children: "Skills"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1037,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: ((_selectedApplication_applicant5 = selectedApplication.applicant) === null || _selectedApplication_applicant5 === void 0 ? void 0 : _selectedApplication_applicant5.skills) || 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1038,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1036,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 1023,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-gray-900 mb-2",
                                                    children: "Resume"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1043,
                                                    columnNumber: 21
                                                }, this),
                                                ((_selectedApplication_applicant6 = selectedApplication.applicant) === null || _selectedApplication_applicant6 === void 0 ? void 0 : (_selectedApplication_applicant_resume = _selectedApplication_applicant6.resume) === null || _selectedApplication_applicant_resume === void 0 ? void 0 : _selectedApplication_applicant_resume.filePath) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: selectedApplication.applicant.resume.filePath,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-2 text-blue-600 hover:underline font-medium",
                                                    children: "📄 View Resume"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1045,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 italic",
                                                    children: "No resume uploaded."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 1054,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 1042,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 pt-4 border-t",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg font-medium",
                                                onClick: ()=>setShowCandidateModal(false),
                                                children: "Close"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 1059,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 1058,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                    lineNumber: 1004,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                            lineNumber: 999,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                        lineNumber: 998,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                lineNumber: 513,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
        lineNumber: 397,
        columnNumber: 5
    }, this);
}
_s(RecruiterDashboard, "k+pAGkbTDB34+0Y9uCgL8pfIhUA=");
_c = RecruiterDashboard;
var _c;
__turbopack_context__.k.register(_c, "RecruiterDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28components%29_recruiter-dashboard_page_jsx_050520e9._.js.map