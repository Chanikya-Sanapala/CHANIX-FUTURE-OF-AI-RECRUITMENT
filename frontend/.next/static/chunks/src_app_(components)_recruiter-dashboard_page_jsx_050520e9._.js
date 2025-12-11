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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RecruiterDashboard() {
    var _user_firstName, _user_username, _user_email;
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [showJobForm, setShowJobForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Mobile menu state
    const [jobPosts, setJobPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [applications, setApplications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedJob, setSelectedJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [jobApplications, setJobApplications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isApplicationsModalOpen, setIsApplicationsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingApplications, setIsLoadingApplications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [applicationsError, setApplicationsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
        customQuestions: [
            {
                id: 'q1',
                question: '',
                isRequired: false
            },
            {
                id: 'q2',
                question: '',
                isRequired: false
            },
            {
                id: 'q3',
                question: '',
                isRequired: false
            }
        ]
    });
    const [currentSkill, setCurrentSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const baseAuthUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
    const handleLogout = ()=>{
        try {
            fetch("".concat(baseAuthUrl, "/api/logout"), {
                method: 'POST'
            }).finally(()=>{
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                localStorage.removeItem('userType');
                router.push('/');
            });
        } catch (_) {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('userType');
            router.push('/');
        }
    };
    const handleUpdateApplicationStatus = async (applicationId, newStatus)=>{
        try {
            const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
            if (!token) {
                alert('Please login to update applications');
                return;
            }
            const response = await fetch("".concat(baseAuthUrl, "/api/applications/").concat(applicationId), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                    status: newStatus
                })
            });
            const result = await response.json();
            if (!response.ok || !result.success) {
                throw new Error(result.message || "Failed to update application (status ".concat(response.status, ")"));
            }
            setJobApplications((prev)=>prev.map((app)=>app._id === applicationId ? {
                        ...app,
                        status: newStatus
                    } : app));
            alert("Application marked as ".concat(newStatus));
        } catch (error) {
            console.error('Error updating application status:', error);
            alert('Failed to update application status. Please try again.');
        }
    };
    const handleViewApplications = async (job)=>{
        try {
            const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
            if (!token) {
                alert('Please login to view applications');
                return;
            }
            setSelectedJob(job);
            setIsApplicationsModalOpen(true);
            setIsLoadingApplications(true);
            setApplicationsError('');
            const response = await fetch("".concat(baseAuthUrl, "/api/applications?jobId=").concat(job._id || job.id), {
                headers: {
                    'Authorization': "Bearer ".concat(token)
                }
            });
            if (!response.ok) {
                throw new Error("HTTP error! status: ".concat(response.status));
            }
            const result = await response.json();
            if (result.success && Array.isArray(result.data)) {
                const apps = result.data;
                // Enrich with jobseeker profile data (name, email, phone, resume) from profile/get
                const applicantIds = Array.from(new Set(apps.map((a)=>{
                    const raw = a.applicant;
                    if (!raw) return null;
                    if (typeof raw === 'string') return raw;
                    return raw._id || raw.id || raw.userId || null;
                }).filter(Boolean)));
                const profilesById = {};
                await Promise.all(applicantIds.map(async (id)=>{
                    try {
                        const res = await fetch("".concat(baseAuthUrl, "/api/profile/get"), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                userId: id,
                                userType: 'jobseeker'
                            })
                        });
                        const json = await res.json().catch(()=>({}));
                        if (res.ok && (json === null || json === void 0 ? void 0 : json.success) && json.data) {
                            profilesById[String(id)] = json.data;
                        }
                    } catch (_) {}
                }));
                const enriched = apps.map((app)=>{
                    var _app_applicant, _app_applicant1, _app_applicant2, _app_applicant3, _app_applicant4, _app_applicant5, _app_applicant6;
                    const rawApplicant = app.applicant;
                    const applicant = typeof rawApplicant === 'string' ? {
                        userId: rawApplicant
                    } : rawApplicant || {};
                    const id = applicant._id || applicant.id || applicant.userId;
                    const profileData = id ? profilesById[String(id)] : null;
                    if (!profileData) return app;
                    const userInfo = profileData.user || {};
                    const profileInfo = profileData.profile || {};
                    return {
                        ...app,
                        applicant: {
                            ...applicant,
                            username: userInfo.username || ((_app_applicant = app.applicant) === null || _app_applicant === void 0 ? void 0 : _app_applicant.username) || (userInfo.email ? userInfo.email.split('@')[0] : undefined),
                            fullName: ((_app_applicant1 = app.applicant) === null || _app_applicant1 === void 0 ? void 0 : _app_applicant1.fullName) || userInfo.fullName || [
                                userInfo.firstName,
                                userInfo.lastName
                            ].filter(Boolean).join(' ') || profileInfo.fullName || [
                                profileInfo.firstName,
                                profileInfo.lastName
                            ].filter(Boolean).join(' '),
                            firstName: ((_app_applicant2 = app.applicant) === null || _app_applicant2 === void 0 ? void 0 : _app_applicant2.firstName) || userInfo.firstName || profileInfo.firstName,
                            lastName: ((_app_applicant3 = app.applicant) === null || _app_applicant3 === void 0 ? void 0 : _app_applicant3.lastName) || userInfo.lastName || profileInfo.lastName,
                            email: ((_app_applicant4 = app.applicant) === null || _app_applicant4 === void 0 ? void 0 : _app_applicant4.email) || userInfo.email,
                            phone: ((_app_applicant5 = app.applicant) === null || _app_applicant5 === void 0 ? void 0 : _app_applicant5.phone) || profileInfo.phone || (profileInfo.address ? profileInfo.address.phone : undefined),
                            resume: profileInfo.resume || ((_app_applicant6 = app.applicant) === null || _app_applicant6 === void 0 ? void 0 : _app_applicant6.resume) || null
                        }
                    };
                });
                setJobApplications(enriched);
            } else {
                setApplicationsError(result.message || 'Failed to load applications');
            }
        } catch (error) {
            console.error('Error fetching applications:', error);
            setApplicationsError('Failed to load applications. Please try again.');
        } finally{
            setIsLoadingApplications(false);
        }
    };
    // Function to fetch recruiter's jobs
    const fetchRecruiterJobs = async (userId)=>{
        try {
            const token = localStorage.getItem('token');
            if (!token || !userId) return;
            const response = await fetch("".concat(baseAuthUrl, "/api/jobs?recruiterId=").concat(userId), {
                headers: {
                    'Authorization': "Bearer ".concat(token)
                }
            });
            if (!response.ok) {
                throw new Error("HTTP error! status: ".concat(response.status));
            }
            const result = await response.json();
            if (result.success) {
                setJobPosts(result.data);
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };
    const fetchRecruiterApplications = async ()=>{
        try {
            const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
            if (!token) return;
            const response = await fetch("".concat(baseAuthUrl, "/api/applications"), {
                headers: {
                    'Authorization': "Bearer ".concat(token)
                }
            });
            const result = await response.json();
            if (response.ok && result.success && Array.isArray(result.data)) {
                const apps = result.data;
                // Enrich with jobseeker profile data (name, email, phone) from profile/get
                const applicantIds = Array.from(new Set(apps.map((a)=>{
                    const raw = a.applicant;
                    if (!raw) return null;
                    if (typeof raw === 'string') return raw;
                    return raw._id || raw.id || raw.userId || null;
                }).filter(Boolean)));
                const profilesById = {};
                await Promise.all(applicantIds.map(async (id)=>{
                    try {
                        const res = await fetch("".concat(baseAuthUrl, "/api/profile/get"), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                userId: id,
                                userType: 'jobseeker'
                            })
                        });
                        const json = await res.json().catch(()=>({}));
                        if (res.ok && (json === null || json === void 0 ? void 0 : json.success) && json.data) {
                            profilesById[String(id)] = json.data;
                        }
                    } catch (_) {}
                }));
                const enrichedApps = apps.map((app)=>{
                    var _app_applicant, _app_applicant1, _app_applicant2, _app_applicant3, _app_applicant4, _app_applicant5, _app_applicant6;
                    const rawApplicant = app.applicant;
                    const applicant = typeof rawApplicant === 'string' ? {
                        userId: rawApplicant
                    } : rawApplicant || {};
                    const id = applicant._id || applicant.id || applicant.userId;
                    const profileData = id ? profilesById[String(id)] : null;
                    if (!profileData) return app;
                    const userInfo = profileData.user || {};
                    const profileInfo = profileData.profile || {};
                    return {
                        ...app,
                        applicant: {
                            ...app.applicant,
                            username: userInfo.username || ((_app_applicant = app.applicant) === null || _app_applicant === void 0 ? void 0 : _app_applicant.username) || (userInfo.email ? userInfo.email.split('@')[0] : undefined),
                            fullName: ((_app_applicant1 = app.applicant) === null || _app_applicant1 === void 0 ? void 0 : _app_applicant1.fullName) || userInfo.fullName || [
                                userInfo.firstName,
                                userInfo.lastName
                            ].filter(Boolean).join(' ') || profileInfo.fullName || [
                                profileInfo.firstName,
                                profileInfo.lastName
                            ].filter(Boolean).join(' '),
                            firstName: ((_app_applicant2 = app.applicant) === null || _app_applicant2 === void 0 ? void 0 : _app_applicant2.firstName) || userInfo.firstName || profileInfo.firstName,
                            lastName: ((_app_applicant3 = app.applicant) === null || _app_applicant3 === void 0 ? void 0 : _app_applicant3.lastName) || userInfo.lastName || profileInfo.lastName,
                            email: ((_app_applicant4 = app.applicant) === null || _app_applicant4 === void 0 ? void 0 : _app_applicant4.email) || userInfo.email,
                            phone: ((_app_applicant5 = app.applicant) === null || _app_applicant5 === void 0 ? void 0 : _app_applicant5.phone) || profileInfo.phone || (profileInfo.address ? profileInfo.address.phone : undefined),
                            resume: profileInfo.resume || ((_app_applicant6 = app.applicant) === null || _app_applicant6 === void 0 ? void 0 : _app_applicant6.resume) || null
                        }
                    };
                });
                setApplications(enrichedApps);
            }
        } catch (error) {
            console.error('Error fetching recruiter applications:', error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecruiterDashboard.useEffect": ()=>{
            try {
                const params = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
                const u = params ? params.get('u') : null;
                if (u) {
                    try {
                        const decoded = JSON.parse(atob(decodeURIComponent(u)));
                        if (decoded === null || decoded === void 0 ? void 0 : decoded.user) localStorage.setItem('user', JSON.stringify(decoded.user));
                        if (decoded === null || decoded === void 0 ? void 0 : decoded.token) localStorage.setItem('token', decoded.token);
                        if (decoded === null || decoded === void 0 ? void 0 : decoded.userType) localStorage.setItem('userType', decoded.userType);
                        setUser((decoded === null || decoded === void 0 ? void 0 : decoded.user) || null);
                        if ("TURBOPACK compile-time truthy", 1) {
                            const url = new URL(window.location.href);
                            url.searchParams.delete('u');
                            window.history.replaceState({}, '', url.toString());
                        }
                    } catch (_) {}
                }
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    const userData = JSON.parse(storedUser);
                    setUser(userData);
                    // Fetch recruiter's jobs
                    fetchRecruiterJobs(userData._id || userData.id);
                    // Fetch recruiter's applications
                    fetchRecruiterApplications();
                }
            } catch (_) {}
        }
    }["RecruiterDashboard.useEffect"], [
        router
    ]);
    const navigationItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: '📊'
        },
        {
            id: 'post-job',
            label: 'Post New Job',
            icon: '➕'
        },
        {
            id: 'applications',
            label: 'Applications',
            icon: '📝'
        },
        {
            id: 'profile',
            label: 'Profile',
            icon: '👤'
        }
    ];
    const handleAddSkill = ()=>{
        if (currentSkill.trim() && !newJob.skillsRequired.includes(currentSkill.trim())) {
            setNewJob((prev)=>({
                    ...prev,
                    skillsRequired: [
                        ...prev.skillsRequired,
                        currentSkill.trim()
                    ]
                }));
            setCurrentSkill('');
        }
    };
    const handleRemoveSkill = (skillToRemove)=>{
        setNewJob((prev)=>({
                ...prev,
                skillsRequired: prev.skillsRequired.filter((skill)=>skill !== skillToRemove)
            }));
    };
    const handleQuestionChange = (questionId, field, value)=>{
        setNewJob((prev)=>({
                ...prev,
                customQuestions: prev.customQuestions.map((q)=>q.id === questionId ? {
                        ...q,
                        [field]: value
                    } : q)
            }));
    };
    const handlePostJob = async (e)=>{
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Please login to post jobs');
                return;
            }
            const recruiterId = (user === null || user === void 0 ? void 0 : user._id) || (user === null || user === void 0 ? void 0 : user.id) || (user === null || user === void 0 ? void 0 : user.userId) || null;
            const payload = {
                ...newJob,
                recruiterId
            };
            const response = await fetch("".concat(baseAuthUrl, "/api/jobs"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            if (result.success) {
                // Add to local state
                setJobPosts((prev)=>[
                        result.data,
                        ...prev
                    ]);
                // Reset form
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
                    customQuestions: [
                        {
                            id: 'q1',
                            question: '',
                            isRequired: false
                        },
                        {
                            id: 'q2',
                            question: '',
                            isRequired: false
                        },
                        {
                            id: 'q3',
                            question: '',
                            isRequired: false
                        }
                    ]
                });
                setShowJobForm(false);
                alert('Job posted successfully!');
            } else {
                alert(result.message || 'Failed to post job');
            }
        } catch (error) {
            console.error('Error posting job:', error);
            alert('Failed to post job. Please try again.');
        }
    };
    const handleNavigation = (item)=>{
        if (item.id === 'post-job') {
            setShowJobForm(true);
        } else if (item.id === 'profile') {
            router.push('/RecruiterProfile');
        } else {
            setActiveTab(item.id);
            setShowJobForm(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        style: {
            background: '#f9fafb',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Recruiter Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Recruiter Dashboard - Manage job posts and applications"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 mr-2",
                                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 463,
                                                columnNumber: 17
                                            }, this),
                                            isMobileMenuOpen ? /* Close Icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "block h-6 w-6",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M6 18L18 6M6 6l12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 467,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 466,
                                                columnNumber: 19
                                            }, this) : /* Menu Icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "block h-6 w-6",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 472,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 471,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl md:text-2xl font-bold text-gray-900",
                                        children: "Recruiter Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-700",
                                        children: (()=>{
                                            const name = [
                                                user === null || user === void 0 ? void 0 : user.firstName,
                                                user === null || user === void 0 ? void 0 : user.lastName
                                            ].filter(Boolean).join(' ') || (user === null || user === void 0 ? void 0 : user.username) || ((user === null || user === void 0 ? void 0 : user.email) ? user.email.split('@')[0] : '') || 'Recruiter';
                                            const email = (user === null || user === void 0 ? void 0 : user.email) ? " (".concat(user.email, ")") : '';
                                            return "Welcome, ".concat(name).concat(email, "!");
                                        })()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold",
                                        children: ((user === null || user === void 0 ? void 0 : (_user_firstName = user.firstName) === null || _user_firstName === void 0 ? void 0 : _user_firstName[0]) || (user === null || user === void 0 ? void 0 : (_user_username = user.username) === null || _user_username === void 0 ? void 0 : _user_username[0]) || (user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email[0]) || 'R').toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 489,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "ml-2 px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                        lineNumber: 456,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n              fixed inset-0 z-40 lg:static lg:z-auto lg:block\n              ".concat(isMobileMenuOpen ? 'block' : 'hidden', "\n            "),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden",
                                    onClick: ()=>setIsMobileMenuOpen(false)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:static lg:shadow-sm lg:block overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-4 py-3 border-b lg:hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-bold text-gray-900",
                                                    children: "Menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 524,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsMobileMenuOpen(false),
                                                    className: "p-2 -mr-2 text-gray-500 hover:text-gray-700",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-6 h-6",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M6 18L18 6M6 6l12 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 530,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 529,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 525,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 523,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                handleNavigation(item);
                                                                setIsMobileMenuOpen(false);
                                                            },
                                                            className: "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ".concat(activeTab === item.id || item.id === 'post-job' && showJobForm ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-gray-700 hover:bg-gray-50'),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg",
                                                                    children: item.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 549,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: item.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 539,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, item.id, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 538,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 535,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex-1",
                            children: showJobForm ? /* Job Posting Form */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-sm border p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: "Post New Job"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 565,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 mt-1",
                                                children: "Fill in the details to create a new job posting"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 566,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 564,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handlePostJob,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Job Title *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 572,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: newJob.title,
                                                                onChange: (e)=>setNewJob((prev)=>({
                                                                            ...prev,
                                                                            title: e.target.value
                                                                        })),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "e.g., Frontend Developer"
                                                            }, void 0, false, {
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
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Company *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 583,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: newJob.company,
                                                                onChange: (e)=>setNewJob((prev)=>({
                                                                            ...prev,
                                                                            company: e.target.value
                                                                        })),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Your company name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 584,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 582,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Job Description *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 596,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: newJob.description,
                                                        onChange: (e)=>setNewJob((prev)=>({
                                                                    ...prev,
                                                                    description: e.target.value
                                                                })),
                                                        rows: "4",
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                        placeholder: "Describe the job responsibilities and requirements..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 597,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 595,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Skills Required *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 608,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: currentSkill,
                                                                onChange: (e)=>setCurrentSkill(e.target.value),
                                                                onKeyPress: (e)=>e.key === 'Enter' && (e.preventDefault(), handleAddSkill()),
                                                                className: "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Add a skill (e.g., React)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 610,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleAddSkill,
                                                                className: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700",
                                                                children: "Add"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 618,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 609,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: newJob.skillsRequired.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center",
                                                                children: [
                                                                    skill,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleRemoveSkill(skill),
                                                                        className: "ml-2 text-blue-600 hover:text-blue-800",
                                                                        children: "×"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 630,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 628,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 626,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 607,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Experience Required"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 644,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: newJob.experience,
                                                                onChange: (e)=>setNewJob((prev)=>({
                                                                            ...prev,
                                                                            experience: e.target.value
                                                                        })),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "e.g., 2-4 years"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 645,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 643,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 654,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: newJob.location,
                                                                onChange: (e)=>setNewJob((prev)=>({
                                                                            ...prev,
                                                                            location: e.target.value
                                                                        })),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "e.g., Remote, New York, NY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 655,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 653,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 642,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Salary Range"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 667,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: newJob.salary,
                                                                onChange: (e)=>setNewJob((prev)=>({
                                                                            ...prev,
                                                                            salary: e.target.value
                                                                        })),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "e.g., $70,000 - $90,000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 668,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 666,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Job Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 677,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: newJob.jobType,
                                                                onChange: (e)=>setNewJob((prev)=>({
                                                                            ...prev,
                                                                            jobType: e.target.value
                                                                        })),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Full-time",
                                                                        children: "Full-time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 683,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Part-time",
                                                                        children: "Part-time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Contract",
                                                                        children: "Contract"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 685,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Internship",
                                                                        children: "Internship"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 686,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Remote",
                                                                        children: "Remote"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 678,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 676,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 665,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t pt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-900 mb-4",
                                                        children: "Application Questions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 694,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mb-6",
                                                        children: "Add up to 3 custom questions for job applicants. You can mark questions as mandatory or optional."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 695,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: newJob.customQuestions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gray-50 p-4 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Question ",
                                                                                    index + 1
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 701,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        id: "required-".concat(question.id),
                                                                                        checked: question.isRequired,
                                                                                        onChange: (e)=>handleQuestionChange(question.id, 'isRequired', e.target.checked),
                                                                                        className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 705,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        htmlFor: "required-".concat(question.id),
                                                                                        className: "ml-2 text-sm text-gray-700",
                                                                                        children: "Mandatory"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 712,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                lineNumber: 704,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 700,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        value: question.question,
                                                                        onChange: (e)=>handleQuestionChange(question.id, 'question', e.target.value),
                                                                        placeholder: 'Enter your question here... (e.g., "Why are you interested in this position?")',
                                                                        rows: "2",
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 717,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    question.isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-red-600 mt-1",
                                                                        children: "* This question is mandatory for applicants"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, question.id, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 699,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 697,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 693,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Application Deadline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 733,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        required: true,
                                                        value: newJob.deadline,
                                                        onChange: (e)=>setNewJob((prev)=>({
                                                                    ...prev,
                                                                    deadline: e.target.value
                                                                })),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 734,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 732,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 pt-6 border-t flex-col-reverse sm:flex-row sm:justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowJobForm(false),
                                                        className: "w-full sm:w-auto px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 744,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",
                                                        children: "Post Job"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 751,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 743,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 569,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 563,
                                columnNumber: 15
                            }, this) : activeTab === 'applications' ? /* Applications Tab */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: !selectedJob ? // Level 1: List of Jobs with Application Counts
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg shadow-sm border p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                                    children: "Applications by Job"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 768,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Select a job to view its applicants."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 769,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 767,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                            children: [
                                                jobPosts.map((job, idx)=>{
                                                    const jobId = job._id || job.id;
                                                    const count = applications.filter((a)=>{
                                                        var _a_job;
                                                        const appJobId = ((_a_job = a.job) === null || _a_job === void 0 ? void 0 : _a_job._id) || a.job || '';
                                                        return String(appJobId) === String(jobId);
                                                    }).length;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedJob(job),
                                                        className: "bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-lg text-gray-900 mb-2",
                                                                children: job.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 784,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-500 text-sm mb-4",
                                                                children: job.company
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 785,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium",
                                                                        children: [
                                                                            count,
                                                                            " Applicants"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 787,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-600",
                                                                        children: "View →"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                        lineNumber: 790,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 786,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, jobId || idx, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 779,
                                                        columnNumber: 27
                                                    }, this);
                                                }),
                                                jobPosts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-full text-center p-8 bg-white border rounded-lg text-gray-500",
                                                    children: "No jobs posted yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 796,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 771,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true) : // Level 2: List of Applicants for Selected Job
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg shadow-sm border p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedJob(null),
                                                        className: "text-gray-500 hover:text-gray-900 mb-2 flex items-center gap-1 text-sm",
                                                        children: "← Back to Jobs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 807,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-gray-900",
                                                        children: [
                                                            selectedJob.title,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500 font-normal text-lg",
                                                                children: [
                                                                    "(",
                                                                    selectedJob.company,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                lineNumber: 811,
                                                                columnNumber: 47
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 810,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 806,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 805,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                applications.filter((a)=>{
                                                    var _a_job;
                                                    const jobId = selectedJob._id || selectedJob.id;
                                                    const appJobId = ((_a_job = a.job) === null || _a_job === void 0 ? void 0 : _a_job._id) || a.job || '';
                                                    return String(appJobId) === String(jobId);
                                                }).map((application, index)=>{
                                                    const applicant = application.applicant || {};
                                                    const skills = applicant.skills || [];
                                                    const resume = applicant.resume || null;
                                                    let resumeUrl = '';
                                                    if (resume && resume.filePath) {
                                                        resumeUrl = resume.filePath.startsWith('http') ? resume.filePath : "".concat(baseAuthUrl).concat(resume.filePath);
                                                    }
                                                    const matchScore = application.matchScore || 0;
                                                    // Score Color Logic
                                                    let scoreColor = 'text-red-500';
                                                    let ringColor = 'text-red-200';
                                                    if (matchScore >= 75) {
                                                        scoreColor = 'text-green-600';
                                                        ringColor = 'text-green-200';
                                                    } else if (matchScore >= 50) {
                                                        scoreColor = 'text-yellow-600';
                                                        ringColor = 'text-yellow-200';
                                                    }
                                                    // SVGs for Circular Progress
                                                    const radius = 18;
                                                    const circumference = 2 * Math.PI * radius;
                                                    const offset = circumference - matchScore / 100 * circumference;
                                                    const appKey = application._id || application.id || "app-".concat(index);
                                                    const rawFullName = applicant.fullName || [
                                                        applicant.firstName,
                                                        applicant.lastName
                                                    ].filter(Boolean).join(' ');
                                                    const hasFullName = rawFullName && !rawFullName.toLowerCase().includes('undefined') && rawFullName.trim().length > 0;
                                                    // Display Logic: User preferences seems to be Username -> Full Name -> Email Prefix
                                                    // But typically Full Name is better. However, user specifically asked for "actual user_name" 
                                                    // to not be the email prefix. 
                                                    // Let's use Username if available, else Full Name, else Email.
                                                    const displayName = applicant.username || (hasFullName ? rawFullName.trim() : applicant.email || 'Unknown');
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col md:flex-row justify-between items-start gap-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center justify-center shrink-0 w-24",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative w-16 h-16",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-full h-full transform -rotate-90",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                            cx: "32",
                                                                                            cy: "32",
                                                                                            r: radius,
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: "4",
                                                                                            fill: "transparent",
                                                                                            className: ringColor
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 863,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                            cx: "32",
                                                                                            cy: "32",
                                                                                            r: radius,
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: "4",
                                                                                            fill: "transparent",
                                                                                            strokeDasharray: circumference,
                                                                                            strokeDashoffset: offset,
                                                                                            strokeLinecap: "round",
                                                                                            className: scoreColor
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 868,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                    lineNumber: 862,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "absolute inset-0 flex items-center justify-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm font-bold ".concat(scoreColor),
                                                                                        children: [
                                                                                            Math.round(matchScore),
                                                                                            "%"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                        lineNumber: 878,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                    lineNumber: 877,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 861,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 font-medium mt-1",
                                                                            children: "Match Score"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 881,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 860,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col md:flex-row md:justify-between md:items-start",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                            className: "text-lg font-bold text-gray-900",
                                                                                            children: displayName
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 888,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-sm text-gray-600 space-y-1 mt-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "flex items-center gap-2",
                                                                                                    children: [
                                                                                                        "✉️ ",
                                                                                                        applicant.email || 'No email'
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                    lineNumber: 890,
                                                                                                    columnNumber: 41
                                                                                                }, this),
                                                                                                applicant.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "flex items-center gap-2",
                                                                                                    children: [
                                                                                                        "📞 ",
                                                                                                        applicant.phone
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                    lineNumber: 894,
                                                                                                    columnNumber: 43
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 889,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex flex-wrap gap-2 mt-3",
                                                                                            children: skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs border",
                                                                                                    children: skill
                                                                                                }, i, false, {
                                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                                    lineNumber: 903,
                                                                                                    columnNumber: 45
                                                                                                }, this))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 901,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                    lineNumber: 887,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mt-4 md:mt-0 flex flex-col items-end gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "px-3 py-1 rounded-full text-sm font-medium ".concat(application.status === 'Interview' ? 'bg-yellow-100 text-yellow-800' : application.status === 'Hired' ? 'bg-green-100 text-green-800' : application.status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'),
                                                                                            children: application.status
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 912,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-xs text-gray-400",
                                                                                            children: [
                                                                                                "Applied: ",
                                                                                                application.appliedDate ? new Date(application.appliedDate).toLocaleDateString() : 'N/A'
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 919,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                    lineNumber: 911,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 886,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-4 pt-4 border-t flex flex-col sm:flex-row gap-4 sm:items-center",
                                                                            children: [
                                                                                resumeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: resumeUrl,
                                                                                    target: "_blank",
                                                                                    rel: "noopener noreferrer",
                                                                                    className: "text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1",
                                                                                    children: "📄 View Resume"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                    lineNumber: 927,
                                                                                    columnNumber: 39
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-gray-400 flex items-center gap-1",
                                                                                    children: "📄 No Resume"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                    lineNumber: 931,
                                                                                    columnNumber: 39
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    className: "w-full sm:w-auto text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500",
                                                                                    value: application.status,
                                                                                    onChange: (e)=>handleUpdateApplicationStatus(application._id, e.target.value),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Applied",
                                                                                            children: "Active"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 939,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Interview",
                                                                                            children: "Interview"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 940,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Hired",
                                                                                            children: "Hired"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 941,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "Rejected",
                                                                                            children: "Rejected"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                            lineNumber: 942,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                                    lineNumber: 934,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 925,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 885,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 858,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, appKey, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 857,
                                                        columnNumber: 29
                                                    }, this);
                                                }),
                                                applications.filter((a)=>{
                                                    var _a_job;
                                                    const jobId = selectedJob._id || selectedJob.id;
                                                    const appJobId = ((_a_job = a.job) === null || _a_job === void 0 ? void 0 : _a_job._id) || a.job || '';
                                                    return String(appJobId) === String(jobId);
                                                }).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center p-12 bg-white border border-dashed rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-lg",
                                                        children: "No applications for this job yet."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                        lineNumber: 957,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 956,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 816,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 762,
                                columnNumber: 15
                            }, this) : /* Dashboard Tab - Job Posts */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow-sm border p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold text-gray-900 mb-1",
                                                            children: "Your Job Posts"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 970,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600",
                                                            children: "Manage your active job postings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 971,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 969,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowJobForm(true),
                                                    className: "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium whitespace-nowrap",
                                                    children: "+ Post New Job"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 973,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 968,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                        lineNumber: 967,
                                        columnNumber: 17
                                    }, this),
                                    jobPosts.map((job)=>{
                                        var _job_skillsRequired;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg shadow-sm border",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 border-b",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-semibold text-gray-900",
                                                                    children: job.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 987,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600 mt-1",
                                                                    children: [
                                                                        job.company,
                                                                        " • ",
                                                                        job.location,
                                                                        " • ",
                                                                        job.jobType
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 988,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 mt-2",
                                                                    children: job.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 989,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-2 mt-3",
                                                                    children: (_job_skillsRequired = job.skillsRequired) === null || _job_skillsRequired === void 0 ? void 0 : _job_skillsRequired.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm",
                                                                            children: skill
                                                                        }, index, false, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 993,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 991,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-4 mt-4 text-sm text-gray-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "💰 ",
                                                                                job.salary
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 1000,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "⏳ ",
                                                                                job.experience
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 1001,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "📅 Apply by: ",
                                                                                new Date(job.deadline).toLocaleDateString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 1002,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "👥 ",
                                                                                job.applicants,
                                                                                " applicants"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                            lineNumber: 1003,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 999,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 986,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right flex flex-col items-end gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium px-3 py-1 rounded-full ".concat(job.status === 'Active' ? 'bg-green-100 text-green-800' : job.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'),
                                                                    children: job.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 1007,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: [
                                                                        "Posted: ",
                                                                        new Date(job.createdAt || job.postedDate).toLocaleDateString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 1013,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setSelectedJob(job);
                                                                        setActiveTab('applications');
                                                                    },
                                                                    className: "text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1",
                                                                    children: "View Applicants →"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                                    lineNumber: 1016,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                            lineNumber: 1006,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                    lineNumber: 985,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                                lineNumber: 984,
                                                columnNumber: 21
                                            }, this)
                                        }, job._id || job.id, false, {
                                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                            lineNumber: 983,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                                lineNumber: 966,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                            lineNumber: 560,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                    lineNumber: 509,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
                lineNumber: 508,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(components)/recruiter-dashboard/page.jsx",
        lineNumber: 447,
        columnNumber: 5
    }, this);
}
_s(RecruiterDashboard, "FFV8ZSQ5/+K12zcwGQ/H0+ruiOU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RecruiterDashboard;
var _c;
__turbopack_context__.k.register(_c, "RecruiterDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28components%29_recruiter-dashboard_page_jsx_050520e9._.js.map