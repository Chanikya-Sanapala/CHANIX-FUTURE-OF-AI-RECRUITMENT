(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(components)/jobseeker-dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobseekerDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../components/ProfilePage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Utility function to safely parse JSON
const safeJsonParse = function(str) {
    let defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    try {
        return JSON.parse(str);
    } catch (error) {
        console.error('JSON parse error:', error);
        return defaultValue;
    }
};
function JobseekerDashboard() {
    var _user_firstName, _user_username, _user_name, _user_email, _user_firstName_, _user_firstName1, _user_username_, _user_username1, _user_email_, _user_email1, _user_skills;
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [profileEditMode, setProfileEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [jobPosts, setJobPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jobFilters, setJobFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        q: '',
        location: '',
        jobType: '',
        minSalary: '',
        maxSalary: '',
        sort: 'newest'
    });
    const [jobsPage, setJobsPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [jobsTotal, setJobsTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [jobsLimit, setJobsLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [jobsLoading, setJobsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showNotifications, setShowNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savedJobs, setSavedJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [appliedJobs, setAppliedJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [interviews, setInterviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [assessments, setAssessments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [competitions, setCompetitions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profileCompletion, setProfileCompletion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [profileLoading, setProfileLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProfilePanel, setShowProfilePanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarPreview, setAvatarPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showDesktopMenu, setShowDesktopMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQuestionModal, setShowQuestionModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentJob, setCurrentJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [questionAnswers, setQuestionAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmittingApplication, setIsSubmittingApplication] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [applyingJobId, setApplyingJobId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const profileDataLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const uploadAvatar = async (file)=>{
        var _result_data;
        // Validate file type
        const allowedTypes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
            'image/webp'
        ];
        if (!allowedTypes.includes(file.type)) {
            throw new Error('Please upload only image files (JPEG, PNG, GIF, WebP).');
        }
        // Validate file size (5MB max)
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            throw new Error('File too large. Maximum size is 5MB.');
        }
        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const uploadUrl = baseUrl ? "".concat(baseUrl, "/api/profile/upload-photo") : "/api/profile/upload-photo";
        const token = localStorage.getItem('token');
        const fd = new FormData();
        fd.append('file', file);
        if ((user === null || user === void 0 ? void 0 : user._id) || (user === null || user === void 0 ? void 0 : user.id)) fd.append('userId', user._id || user.id);
        fd.append('userType', 'jobseeker');
        const res = await fetch(uploadUrl, {
            method: 'POST',
            body: fd,
            headers: {
                'Authorization': "Bearer ".concat(token)
            }
        });
        if (!res.ok) {
            const errorData = await res.json().catch(()=>({}));
            throw new Error(errorData.message || 'Upload failed');
        }
        const result = await res.json().catch(()=>({}));
        const url = (result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.url) || (result === null || result === void 0 ? void 0 : result.url) || (result === null || result === void 0 ? void 0 : result.path) || '';
        if (url) {
            // Ensure the URL is complete (add backend URL if it's a relative path)
            const fullUrl = url.startsWith('http') ? url : "".concat(baseUrl).concat(url);
            // Store locally for instant preview, scoped per user
            if ("TURBOPACK compile-time truthy", 1) {
                const userId = (user === null || user === void 0 ? void 0 : user._id) || (user === null || user === void 0 ? void 0 : user.id) || (user === null || user === void 0 ? void 0 : user.email) || 'default';
                localStorage.setItem("profileImageUrl_".concat(userId), fullUrl);
            }
            return fullUrl;
        }
        throw new Error('No URL returned from upload');
    };
    // Build query string for jobs
    const buildJobsQuery = function() {
        let page = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        const params = new URLSearchParams();
        params.set('page', String(page));
        params.set('limit', String(jobsLimit));
        if (jobFilters.q) params.set('q', jobFilters.q);
        if (jobFilters.location) params.set('location', jobFilters.location);
        if (jobFilters.jobType) params.set('jobType', jobFilters.jobType);
        if (jobFilters.minSalary) params.set('minSalary', jobFilters.minSalary);
        if (jobFilters.maxSalary) params.set('maxSalary', jobFilters.maxSalary);
        if (jobFilters.sort) params.set('sort', jobFilters.sort);
        return params.toString();
    };
    // Load jobs from backend with filters and pagination
    const loadJobs = async function() {
        let page = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        try {
            setJobsLoading(true);
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const apiUrl = baseUrl ? "".concat(baseUrl, "/api/jobs?").concat(buildJobsQuery(page)) : "/api/jobs?".concat(buildJobsQuery(page));
            const res = await fetch(apiUrl, {
                cache: 'no-store'
            });
            const json = await res.json();
            if ((json === null || json === void 0 ? void 0 : json.success) && Array.isArray(json.data)) {
                const items = json.data.map((j)=>({
                        id: j._id || j.id,
                        title: j.title,
                        company: j.company,
                        description: j.description,
                        skillsRequired: j.skillsRequired || [],
                        experience: j.experience || '',
                        location: j.location || '',
                        jobType: j.jobType || 'Full-time',
                        salary: j.salary || (j.maxSalary ? "Rs.".concat(j.maxSalary) : ''),
                        deadline: j.deadline || '',
                        postedDate: j.postedDate || '',
                        applicants: j.applicants || 0,
                        urgent: !!j.urgent,
                        featured: !!j.featured
                    }));
                setJobPosts(items);
                setJobsTotal(Number(json.total || 0));
                setJobsLimit(Number(json.limit || jobsLimit));
                setJobsPage(Number(json.page || page));
            } else {
                setJobPosts([]);
                setJobsTotal(0);
            }
        } catch (_) {
            setJobPosts([]);
            setJobsTotal(0);
        } finally{
            setJobsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobseekerDashboard.useEffect": ()=>{
            const loadNotifications = {
                "JobseekerDashboard.useEffect.loadNotifications": async ()=>{
                    try {
                        const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
                        if (!token) return;
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        const apiUrl = baseUrl ? "".concat(baseUrl, "/api/notifications") : '/api/notifications';
                        const res = await fetch(apiUrl, {
                            headers: {
                                'Authorization': "Bearer ".concat(token)
                            },
                            cache: 'no-store'
                        });
                        const json = await res.json().catch({
                            "JobseekerDashboard.useEffect.loadNotifications": ()=>({})
                        }["JobseekerDashboard.useEffect.loadNotifications"]);
                        if (res.ok && (json === null || json === void 0 ? void 0 : json.success) && Array.isArray(json.data)) {
                            const serverNotifications = json.data.map({
                                "JobseekerDashboard.useEffect.loadNotifications.serverNotifications": (n)=>({
                                        id: n._id,
                                        type: n.type || 'application',
                                        title: n.title || 'Notification',
                                        message: n.message || '',
                                        timestamp: new Date(n.createdAt || Date.now()).toLocaleString('en-IN'),
                                        read: !!n.read
                                    })
                            }["JobseekerDashboard.useEffect.loadNotifications.serverNotifications"]);
                            setNotifications({
                                "JobseekerDashboard.useEffect.loadNotifications": (prev)=>{
                                    const existingIds = new Set(prev.map({
                                        "JobseekerDashboard.useEffect.loadNotifications": (p)=>String(p.id)
                                    }["JobseekerDashboard.useEffect.loadNotifications"]));
                                    const merged = [
                                        ...serverNotifications.filter({
                                            "JobseekerDashboard.useEffect.loadNotifications": (n)=>!existingIds.has(String(n.id))
                                        }["JobseekerDashboard.useEffect.loadNotifications"]),
                                        ...prev
                                    ];
                                    return merged;
                                }
                            }["JobseekerDashboard.useEffect.loadNotifications"]);
                        }
                    } catch (_) {
                    // Ignore notification load errors to avoid breaking dashboard
                    }
                }
            }["JobseekerDashboard.useEffect.loadNotifications"];
            loadNotifications();
        }
    }["JobseekerDashboard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobseekerDashboard.useEffect": ()=>{
            try {
                const params = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
                const u = params ? params.get('u') : null;
                if (u) {
                    try {
                        const decoded = JSON.parse(atob(decodeURIComponent(u)));
                        if (decoded === null || decoded === void 0 ? void 0 : decoded.user) {
                            localStorage.setItem('user', JSON.stringify(decoded.user));
                        }
                        setUser((decoded === null || decoded === void 0 ? void 0 : decoded.user) || null);
                        if ("TURBOPACK compile-time truthy", 1) {
                            const url = new URL(window.location.href);
                            url.searchParams.delete('u');
                            window.history.replaceState({}, '', url.toString());
                        }
                    } catch (error) {
                        console.error('Error parsing URL parameter:', error);
                        // Clear the invalid parameter
                        if ("TURBOPACK compile-time truthy", 1) {
                            const url = new URL(window.location.href);
                            url.searchParams.delete('u');
                            window.history.replaceState({}, '', url.toString());
                        }
                    }
                }
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    try {
                        const userData = JSON.parse(storedUser);
                        const userId = userData._id || userData.id || userData.email || 'default';
                        const img = localStorage.getItem("profileImageUrl_".concat(userId));
                        if (img) {
                            setAvatarPreview(img);
                            // Update user data with profile image
                            userData.profileImage = img;
                        }
                        setUser(userData);
                    } catch (error) {
                        console.error('Error parsing stored user data:', error);
                        localStorage.removeItem('user'); // Clear invalid data
                    }
                }
            } catch (_) {}
            // Initial jobs load
            loadJobs(1);
        }
    }["JobseekerDashboard.useEffect"], []);
    // Interview status update
    const handleUpdateInterviewStatus = async (id, newStatus)=>{
        try {
            const res = await fetch('/api/interviews', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    status: newStatus
                })
            });
            if (res.ok) {
                setInterviews((prev)=>prev.map((i)=>i.id === id || i._id === id ? {
                            ...i,
                            status: newStatus
                        } : i));
            }
        } catch (_) {}
    };
    // Assessments start/submit
    const handleStartAssessment = async (assessmentId)=>{
        if (!user) return;
        try {
            const res = await fetch('/api/assessments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'start',
                    userId: user._id || user.id,
                    assessmentId
                })
            });
            if (res.ok) {
                setAssessments((prev)=>prev.map((a)=>String(a.id) === String(assessmentId) ? {
                            ...a,
                            status: 'In Progress'
                        } : a));
            }
        } catch (_) {}
    };
    const handleSubmitAssessment = async function(assessmentId) {
        let score = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (!user) return;
        try {
            const res = await fetch('/api/assessments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'submit',
                    userId: user._id || user.id,
                    assessmentId,
                    score
                })
            });
            if (res.ok) {
                setAssessments((prev)=>prev.map((a)=>String(a.id) === String(assessmentId) ? {
                            ...a,
                            status: 'Completed',
                            score
                        } : a));
            }
        } catch (_) {}
    };
    // Event register/unregister
    const handleRegisterEvent = async (eventId, registered)=>{
        if (!user) return;
        try {
            const res = await fetch('/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: registered ? 'unregister' : 'register',
                    userId: user._id || user.id,
                    eventId
                })
            });
            const ok = res.ok;
            if (ok) {
                setEvents((prev)=>prev.map((ev)=>ev._id === eventId ? {
                            ...ev,
                            registered: !registered
                        } : ev));
            }
        } catch (_) {}
    };
    // Competition participate
    const handleParticipateCompetition = async (competitionId)=>{
        if (!user) return;
        try {
            const res = await fetch('/api/competitions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: user._id || user.id,
                    competitionId
                })
            });
            if (res.ok) {
                setCompetitions((prev)=>prev.map((c)=>c._id === competitionId ? {
                            ...c,
                            participated: true
                        } : c));
            }
        } catch (_) {}
    };
    function handleDashboardAvatarChange(e) {
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev)=>setAvatarPreview(ev.target.result);
        reader.readAsDataURL(file);
        uploadAvatar(file).then((url)=>{
            // Update user state with new profile image
            setUser((prev)=>({
                    ...prev,
                    profileImage: url
                }));
            // refresh completion/data
            if ("TURBOPACK compile-time truthy", 1) window.dispatchEvent(new Event('focus'));
            alert('Profile picture uploaded successfully!');
        }).catch((error)=>{
            console.error('Avatar upload error:', error);
            alert(error.message || 'Failed to upload photo. Please try again.');
            // Reset preview on error
            setAvatarPreview(null);
        });
    }
    ;
    // Load initial data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobseekerDashboard.useEffect": ()=>{
            loadJobs(1);
            // Load saved and sample content for other tabs (appliedJobs now comes from backend per user)
            try {
                setSavedJobs(JSON.parse(localStorage.getItem('savedJobs') || '[]'));
            } catch (error) {
                console.error('Error parsing savedJobs:', error);
                setSavedJobs([]);
            }
            // Fetch applied jobs from backend for the logged-in user
            const fetchAppliedJobs = {
                "JobseekerDashboard.useEffect.fetchAppliedJobs": async ()=>{
                    if (!user) return;
                    try {
                        const token = localStorage.getItem('token');
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        const apiUrl = baseUrl ? "".concat(baseUrl, "/api/applications") : '/api/applications';
                        const res = await fetch(apiUrl, {
                            headers: {
                                'Authorization': "Bearer ".concat(token)
                            },
                            cache: 'no-store'
                        });
                        const json = await res.json();
                        if ((json === null || json === void 0 ? void 0 : json.success) && Array.isArray(json.data)) {
                            const apps = json.data.map({
                                "JobseekerDashboard.useEffect.fetchAppliedJobs.apps": (a)=>{
                                    var _a_job;
                                    return {
                                        id: ((_a_job = a.job) === null || _a_job === void 0 ? void 0 : _a_job._id) || a.jobId || a.job || a._id,
                                        at: a.appliedDate || a.createdAt || new Date().toISOString()
                                    };
                                }
                            }["JobseekerDashboard.useEffect.fetchAppliedJobs.apps"]);
                            setAppliedJobs(apps);
                            const userId = user._id || user.id || user.email || 'default';
                            localStorage.setItem("appliedJobs_".concat(userId), JSON.stringify(apps));
                        }
                    } catch (error) {
                        console.error('Error fetching applied jobs:', error);
                    }
                }
            }["JobseekerDashboard.useEffect.fetchAppliedJobs"];
            fetchAppliedJobs();
            try {
                setInterviews(JSON.parse(localStorage.getItem('interviews') || JSON.stringify([
                    {
                        id: 1,
                        title: 'Frontend Developer - Tech Solutions',
                        date: '2025-11-10',
                        time: '11:00 AM',
                        status: 'Scheduled'
                    },
                    {
                        id: 2,
                        title: 'Backend Engineer - Data Systems',
                        date: '2025-11-14',
                        time: '03:00 PM',
                        status: 'Scheduled'
                    }
                ])));
            } catch (error) {
                console.error('Error parsing interviews:', error);
                setInterviews([]);
                localStorage.removeItem('interviews');
            }
            try {
                setAssessments(JSON.parse(localStorage.getItem('assessments') || JSON.stringify([
                    {
                        id: 1,
                        name: 'JavaScript Fundamentals',
                        status: 'Not Started'
                    },
                    {
                        id: 2,
                        name: 'React Proficiency',
                        status: 'In Progress'
                    },
                    {
                        id: 3,
                        name: 'DSA Basics',
                        status: 'Completed'
                    }
                ])));
            } catch (error) {
                console.error('Error parsing assessments:', error);
                setAssessments([]);
                localStorage.removeItem('assessments');
            }
            try {
                setEvents(JSON.parse(localStorage.getItem('events') || JSON.stringify([
                    {
                        id: 1,
                        name: 'Tech Career Fair',
                        date: '2025-11-20',
                        location: 'Virtual'
                    },
                    {
                        id: 2,
                        name: 'React Summit',
                        date: '2025-12-05',
                        location: 'Bangalore'
                    }
                ])));
            } catch (error) {
                console.error('Error parsing events:', error);
                setEvents([]);
                localStorage.removeItem('events');
            }
            try {
                setCompetitions(JSON.parse(localStorage.getItem('competitions') || JSON.stringify([
                    {
                        id: 1,
                        name: 'Hackathon 2025',
                        deadline: '2025-12-01',
                        prize: 'Rs.1,00,000'
                    },
                    {
                        id: 2,
                        name: 'AI Challenge',
                        deadline: '2025-12-15',
                        prize: 'Rs.50,000'
                    }
                ])));
            } catch (error) {
                console.error('Error parsing competitions:', error);
                setCompetitions([]);
                localStorage.removeItem('competitions');
            }
            // Listen for storage changes (new job posts)
            const handleStorageChange = {
                "JobseekerDashboard.useEffect.handleStorageChange": ()=>{
                    loadJobs();
                }
            }["JobseekerDashboard.useEffect.handleStorageChange"];
            window.addEventListener('storage', handleStorageChange);
            return ({
                "JobseekerDashboard.useEffect": ()=>window.removeEventListener('storage', handleStorageChange)
            })["JobseekerDashboard.useEffect"];
        }
    }["JobseekerDashboard.useEffect"], []);
    // Re-fetch jobs when page changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobseekerDashboard.useEffect": ()=>{
            loadJobs(jobsPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["JobseekerDashboard.useEffect"], [
        jobsPage
    ]);
    // Re-fetch jobs when filters change (reset to page 1)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobseekerDashboard.useEffect": ()=>{
            setJobsPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["JobseekerDashboard.useEffect"], [
        jobFilters.q,
        jobFilters.location,
        jobFilters.jobType,
        jobFilters.minSalary,
        jobFilters.maxSalary,
        jobFilters.sort
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobseekerDashboard.useEffect": ()=>{
            if (!user || !user._id || profileDataLoaded.current) return;
            let isMounted = true;
            profileDataLoaded.current = true;
            // Load applications for this user from backend
            const loadApplications = {
                "JobseekerDashboard.useEffect.loadApplications": async ()=>{
                    try {
                        const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
                        if (!token) return;
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        const apiUrl = baseUrl ? "".concat(baseUrl, "/api/applications") : '/api/applications';
                        const res = await fetch(apiUrl, {
                            headers: {
                                'Authorization': "Bearer ".concat(token)
                            },
                            cache: 'no-store'
                        });
                        const json = await res.json();
                        if (isMounted && (json === null || json === void 0 ? void 0 : json.success) && Array.isArray(json.data)) {
                            const apps = json.data.map({
                                "JobseekerDashboard.useEffect.loadApplications.apps": (a)=>{
                                    var _a_job;
                                    return {
                                        id: ((_a_job = a.job) === null || _a_job === void 0 ? void 0 : _a_job._id) || a.jobId || a.job || a._id,
                                        at: a.appliedDate || a.createdAt || new Date().toISOString()
                                    };
                                }
                            }["JobseekerDashboard.useEffect.loadApplications.apps"]);
                            setAppliedJobs(apps);
                            const userId = user._id || user.id || user.email || 'default';
                            localStorage.setItem("appliedJobs_".concat(userId), JSON.stringify(apps));
                        }
                    } catch (_) {}
                }
            }["JobseekerDashboard.useEffect.loadApplications"];
            // Load events and competitions (only once)
            const loadEventsAndCompetitions = {
                "JobseekerDashboard.useEffect.loadEventsAndCompetitions": async ()=>{
                    try {
                        const evRes = await fetch("/api/events?userId=".concat(encodeURIComponent(user._id || user.id)), {
                            cache: 'no-store'
                        });
                        const evJson = await evRes.json();
                        if (isMounted && (evJson === null || evJson === void 0 ? void 0 : evJson.success) && Array.isArray(evJson.data)) setEvents(evJson.data);
                    } catch (_) {}
                    try {
                        const cmpRes = await fetch("/api/competitions", {
                            cache: 'no-store'
                        });
                        const cmpJson = await cmpRes.json();
                        if (isMounted && (cmpJson === null || cmpJson === void 0 ? void 0 : cmpJson.success) && Array.isArray(cmpJson.data)) setCompetitions(cmpJson.data);
                    } catch (_) {}
                }
            }["JobseekerDashboard.useEffect.loadEventsAndCompetitions"];
            // Load profile data (only once)
            const loadProfileData = {
                "JobseekerDashboard.useEffect.loadProfileData": async ()=>{
                    const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                    try {
                        setProfileLoading(true);
                        const getReq = await fetch("".concat(baseUrl, "/api/profile/get"), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                userId: user._id || user.id,
                                userType: 'jobseeker'
                            })
                        });
                        const getRes = await getReq.json().catch({
                            "JobseekerDashboard.useEffect.loadProfileData": ()=>({})
                        }["JobseekerDashboard.useEffect.loadProfileData"]);
                        if (isMounted && getRes && getRes.success) {
                            var _getRes_data;
                            setProfileData(getRes.data);
                            const apiImg = getRes === null || getRes === void 0 ? void 0 : (_getRes_data = getRes.data) === null || _getRes_data === void 0 ? void 0 : _getRes_data.profileImage;
                            const localImg = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('profileImageUrl') : "TURBOPACK unreachable";
                            if (apiImg) {
                                const fullImageUrl = apiImg.startsWith('http') ? apiImg : "".concat(baseUrl).concat(apiImg);
                                setAvatarPreview(fullImageUrl);
                                if ("TURBOPACK compile-time truthy", 1) localStorage.setItem('profileImageUrl', fullImageUrl);
                            } else if (localImg) {
                                setAvatarPreview(localImg);
                            }
                        }
                    } catch (_) {}
                    try {
                        const chkReq = await fetch("".concat(baseUrl, "/api/profile/check-completion"), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                userId: user._id || user.id,
                                userType: 'jobseeker'
                            })
                        });
                        const chkRes = await chkReq.json().catch({
                            "JobseekerDashboard.useEffect.loadProfileData": ()=>({})
                        }["JobseekerDashboard.useEffect.loadProfileData"]);
                        if (isMounted && chkRes && chkRes.success) {
                            const v = chkRes.data;
                            const pct = typeof v === 'number' ? v : typeof (v === null || v === void 0 ? void 0 : v.percentage) === 'number' ? v.percentage : typeof (v === null || v === void 0 ? void 0 : v.completion) === 'number' ? v.completion : 0;
                            setProfileCompletion(Number.isFinite(pct) ? Math.max(0, Math.min(100, Math.round(pct))) : 0);
                        }
                    } catch (_) {} finally{
                        if (isMounted) setProfileLoading(false);
                    }
                }
            }["JobseekerDashboard.useEffect.loadProfileData"];
            // Execute all loads once
            loadApplications();
            loadEventsAndCompetitions();
            loadProfileData();
            // Cleanup function
            return ({
                "JobseekerDashboard.useEffect": ()=>{
                    isMounted = false;
                }
            })["JobseekerDashboard.useEffect"];
        }
    }["JobseekerDashboard.useEffect"], [
        user === null || user === void 0 ? void 0 : user._id
    ]); // Only depend on user ID
    // Open profile drawer if query parameter is present
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobseekerDashboard.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const params = new URLSearchParams(window.location.search);
            if (params.get('panel') === 'profile') setShowProfilePanel(true);
        }
    }["JobseekerDashboard.useEffect"], []);
    const openProfilePanel = ()=>{
        setShowProfilePanel(true);
        if ("TURBOPACK compile-time truthy", 1) {
            const url = new URL(window.location.href);
            url.searchParams.set('panel', 'profile');
            window.history.replaceState({}, '', url.toString());
        }
    };
    const closeProfilePanel = ()=>{
        setShowProfilePanel(false);
        if ("TURBOPACK compile-time truthy", 1) {
            const url = new URL(window.location.href);
            url.searchParams.delete('panel');
            window.history.replaceState({}, '', url.toString());
        }
    };
    const handleApplyJob = async (jobId)=>{
        const job = jobPosts.find((j)=>j.id === jobId);
        if (!job || !user) return;
        if (appliedJobs.some((j)=>j.id === jobId)) return;
        if (applyingJobId === jobId) return; // Prevent multiple clicks
        setApplyingJobId(jobId); // Set loading state for this specific job
        try {
            var _jobData_data;
            // First, fetch the job details to check for custom questions
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const jobRes = await fetch("".concat(baseUrl, "/api/jobs/").concat(jobId), {
                cache: 'no-store'
            });
            const jobData = await jobRes.json();
            if ((jobData === null || jobData === void 0 ? void 0 : jobData.success) && ((_jobData_data = jobData.data) === null || _jobData_data === void 0 ? void 0 : _jobData_data.customQuestions) && jobData.data.customQuestions.length > 0) {
                // Job has custom questions, show modal
                setCurrentJob({
                    ...job,
                    customQuestions: jobData.data.customQuestions
                });
                setCurrentQuestionIndex(0);
                setQuestionAnswers({});
                setShowQuestionModal(true);
                setApplyingJobId(null); // Clear loading state when modal opens
            } else {
                // No custom questions, apply directly
                await submitApplication(jobId, []);
            }
        } catch (error) {
            console.error('Error fetching job details:', error);
            // Fallback to direct application
            await submitApplication(jobId, []);
        } finally{
            // Ensure loading state is cleared if not handled by submitApplication
            if (applyingJobId === jobId && !showQuestionModal) {
                setApplyingJobId(null);
            }
        }
    };
    const submitApplication = async function(jobId) {
        let customAnswers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        const job = jobPosts.find((j)=>j.id === jobId);
        if (!job || !user) return;
        try {
            setIsSubmittingApplication(true);
            const token = localStorage.getItem('token');
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const res = await fetch("".concat(baseUrl, "/api/applications"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                    jobId,
                    customAnswers,
                    coverLetter: ''
                })
            });
            const json = await res.json();
            if (json === null || json === void 0 ? void 0 : json.success) {
                var _json_data;
                const at = (json === null || json === void 0 ? void 0 : (_json_data = json.data) === null || _json_data === void 0 ? void 0 : _json_data.appliedDate) || new Date().toISOString();
                const applied = [
                    {
                        id: jobId,
                        at
                    },
                    ...appliedJobs
                ];
                setAppliedJobs(applied);
                const userId = user._id || user.id || user.email || 'default';
                localStorage.setItem("appliedJobs_".concat(userId), JSON.stringify(applied));
                alert("Application submitted for ".concat(job.title, " at ").concat(job.company, "!\n\nWe will contact you soon for further process."));
                const applicationNotification = {
                    id: Date.now(),
                    type: 'application',
                    title: 'Application Submitted!',
                    message: "You applied for ".concat(job.title),
                    timestamp: new Date().toLocaleTimeString('en-IN'),
                    read: false
                };
                setNotifications((prev)=>[
                        applicationNotification,
                        ...prev
                    ]);
                // Close modal if open
                setShowQuestionModal(false);
                setCurrentJob(null);
                setQuestionAnswers({});
            } else {
                alert('Failed to submit application: ' + (json.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Application submission error:', error);
            alert('Failed to submit application. Please try again.');
        } finally{
            setIsSubmittingApplication(false);
            setApplyingJobId(null); // Clear loading state for the specific job
        }
    };
    const handleQuestionAnswer = (questionId, answer)=>{
        setQuestionAnswers((prev)=>({
                ...prev,
                [questionId]: answer
            }));
    };
    const handleNextQuestion = ()=>{
        var _questionAnswers_currentQuestion_id;
        if (!(currentJob === null || currentJob === void 0 ? void 0 : currentJob.customQuestions)) return;
        const currentQuestion = currentJob.customQuestions[currentQuestionIndex];
        if ((currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.isRequired) && !((_questionAnswers_currentQuestion_id = questionAnswers[currentQuestion.id]) === null || _questionAnswers_currentQuestion_id === void 0 ? void 0 : _questionAnswers_currentQuestion_id.trim())) {
            alert('Please answer this required question before proceeding.');
            return;
        }
        if (currentQuestionIndex < currentJob.customQuestions.length - 1) {
            setCurrentQuestionIndex((prev)=>prev + 1);
        } else {
            // All questions answered, submit application
            const customAnswers = currentJob.customQuestions.map((q)=>({
                    questionId: q.id,
                    answer: questionAnswers[q.id] || ''
                })).filter((a)=>a.answer.trim());
            submitApplication(currentJob.id, customAnswers);
        }
    };
    const handleSkipQuestion = ()=>{
        if (!(currentJob === null || currentJob === void 0 ? void 0 : currentJob.customQuestions)) return;
        if (currentQuestionIndex < currentJob.customQuestions.length - 1) {
            setCurrentQuestionIndex((prev)=>prev + 1);
        } else {
            // Last question, submit with current answers
            const customAnswers = currentJob.customQuestions.map((q)=>({
                    questionId: q.id,
                    answer: questionAnswers[q.id] || ''
                })).filter((a)=>a.answer.trim());
            submitApplication(currentJob.id, customAnswers);
        }
    };
    const handleCloseQuestionModal = ()=>{
        setShowQuestionModal(false);
        setCurrentJob(null);
        setQuestionAnswers({});
        setCurrentQuestionIndex(0);
    };
    const toggleSaveJob = (jobId)=>{
        const isSaved = savedJobs.includes(jobId);
        const updated = isSaved ? savedJobs.filter((id)=>id !== jobId) : [
            jobId,
            ...savedJobs
        ];
        setSavedJobs(updated);
        localStorage.setItem('savedJobs', JSON.stringify(updated));
    };
    const clearNotification = (id)=>{
        setNotifications((prev)=>prev.filter((notification)=>notification.id !== id));
    };
    const clearAllNotifications = ()=>{
        setNotifications([]);
    };
    const navigationItems = [
        {
            id: 'home',
            label: 'Home',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHome"]
        },
        {
            id: 'job-profiles',
            label: 'Job Profiles',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"]
        },
        {
            id: 'my-profile',
            label: 'My Profile',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"],
            path: '/profiles/jobseeker-profile'
        },
        {
            id: 'interviews',
            label: 'Interviews',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"]
        },
        {
            id: 'assessments',
            label: 'Assessments',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"]
        },
        {
            id: 'events',
            label: 'Events',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAward"]
        },
        {
            id: 'competitions',
            label: 'Competitions',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBook"]
        }
    ];
    const handleNavigation = (item)=>{
        if (item.path) {
            router.push(item.path);
            setIsMobileMenuOpen(false);
            return;
        }
        setActiveTab(item.id);
        setIsMobileMenuOpen(false);
    };
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleNotifications = ()=>{
        setShowNotifications(!showNotifications);
    };
    const launchpadStats = {
        opportunities: '1700+',
        tests: '50+',
        courses: '1000+'
    };
    const handleLogout = ()=>{
        try {
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            fetch("".concat(baseUrl, "/api/logout"), {
                method: 'POST',
                credentials: 'include'
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
                        children: "Jobseeker Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 804,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Jobseeker Dashboard - Find your dream job"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 805,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 803,
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mr-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowDesktopMenu((prev)=>!prev),
                                                className: "p-2 rounded-lg hover:bg-gray-100 text-black",
                                                "aria-label": "Open menu",
                                                "aria-expanded": showDesktopMenu,
                                                "aria-controls": "header-menu-dropdown",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 822,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 815,
                                                columnNumber: 13
                                            }, this),
                                            showDesktopMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                id: "header-menu-dropdown",
                                                className: "absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "py-2",
                                                    children: navigationItems.map((item)=>{
                                                        const IconComponent = item.icon;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    handleNavigation(item);
                                                                    setShowDesktopMenu(false);
                                                                },
                                                                className: "w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 ".concat(activeTab === item.id ? 'text-blue-700' : 'text-black'),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 835,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 836,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 831,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, item.id, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 830,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 826,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 825,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 814,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-black",
                                        children: "Career Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 845,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 813,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: toggleNotifications,
                                                className: "p-2 rounded-lg text-black hover:text-gray-900 hover:bg-gray-100 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 855,
                                                        columnNumber: 15
                                                    }, this),
                                                    notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                                        children: notifications.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 857,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 851,
                                                columnNumber: 13
                                            }, this),
                                            showNotifications && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 border-b",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-black",
                                                                    children: "Notifications"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 21
                                                                }, this),
                                                                notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: clearAllNotifications,
                                                                    className: "text-sm text-blue-600 hover:text-blue-800",
                                                                    children: "Clear All"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 868,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 865,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 864,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-96 overflow-y-auto",
                                                        children: notifications.length > 0 ? notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 border-b hover:bg-gray-50 transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "font-semibold text-black text-sm",
                                                                                    children: notification.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 878,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-black text-sm mt-1",
                                                                                    children: notification.message
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 879,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-black mt-2",
                                                                                    children: notification.timestamp
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 880,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 877,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>clearNotification(notification.id),
                                                                            className: "ml-2 text-black hover:text-gray-600",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 883,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 882,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, notification.id, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 875,
                                                                columnNumber: 23
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-8 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"], {
                                                                    className: "w-12 h-12 text-black mx-auto mb-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 890,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-black",
                                                                    children: "No notifications yet"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 891,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 889,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 872,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 863,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 850,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openProfilePanel,
                                        className: "ml-2 flex items-center space-x-2 text-blue-600 hover:text-blue-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold overflow-hidden",
                                                children: [
                                                    (user === null || user === void 0 ? void 0 : user.profileImage) || avatarPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: (user === null || user === void 0 ? void 0 : user.profileImage) || avatarPreview,
                                                        alt: "Profile",
                                                        className: "w-full h-full object-cover rounded-full",
                                                        onError: (e)=>{
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 901,
                                                        columnNumber: 17
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "".concat((user === null || user === void 0 ? void 0 : user.profileImage) || avatarPreview ? 'hidden' : 'flex', " w-full h-full items-center justify-center"),
                                                        children: ((user === null || user === void 0 ? void 0 : (_user_firstName = user.firstName) === null || _user_firstName === void 0 ? void 0 : _user_firstName[0]) || (user === null || user === void 0 ? void 0 : (_user_username = user.username) === null || _user_username === void 0 ? void 0 : _user_username[0]) || (user === null || user === void 0 ? void 0 : (_user_name = user.name) === null || _user_name === void 0 ? void 0 : _user_name[0]) || (user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email[0]) || 'U').toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 911,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 899,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:block",
                                                children: "My Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 923,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 898,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "ml-2 px-3 py-2 text-sm border border-gray-300 rounded-lg text-black hover:bg-gray-50",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 925,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 849,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 811,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                    lineNumber: 810,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 809,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8",
                    children: [
                        isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg z-50",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-b",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-semibold text-black",
                                                    children: "Menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 940,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsMobileMenuOpen(false),
                                                    className: "p-2 rounded-lg text-black hover:text-gray-900 hover:bg-gray-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 945,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 941,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 939,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 938,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: navigationItems.map((item)=>{
                                                const IconComponent = item.icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleNavigation(item),
                                                        className: "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ".concat(activeTab === item.id ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-black hover:bg-gray-50'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 963,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 964,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 955,
                                                        columnNumber: 27
                                                    }, this)
                                                }, item.id, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 954,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 950,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 949,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 936,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                            lineNumber: 935,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex-1",
                            children: [
                                activeTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg shadow-sm border p-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-20 h-20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        viewBox: "0 0 36 36",
                                                                        className: "w-20 h-20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M18 2.0845   a 15.9155 15.9155 0 0 1 0 31.831   a 15.9155 15.9155 0 0 1 0 -31.831",
                                                                                fill: "none",
                                                                                stroke: "#E5E7EB",
                                                                                strokeWidth: "3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 986,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M18 2.0845   a 15.9155 15.9155 0 0 1 0 31.831",
                                                                                fill: "none",
                                                                                stroke: "#2563EB",
                                                                                strokeWidth: "3",
                                                                                strokeDasharray: "".concat(Math.max(0, Math.min(100, profileCompletion)), ", 100")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 989,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 985,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            var _document_getElementById;
                                                                            return (_document_getElementById = document.getElementById('dash-avatar-input')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();
                                                                        },
                                                                        className: "absolute inset-1 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ring-2 ring-transparent hover:ring-blue-200 transition",
                                                                        title: "Click to upload photo",
                                                                        children: avatarPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: avatarPreview,
                                                                            alt: "Avatar",
                                                                            className: "w-full h-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1000,
                                                                            columnNumber: 27
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-black",
                                                                            children: "User"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1002,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 993,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "dash-avatar-input",
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        className: "hidden",
                                                                        onChange: async (e)=>{
                                                                            var _e_target_files;
                                                                            const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
                                                                            if (!file) return;
                                                                            const reader = new FileReader();
                                                                            reader.onload = (ev)=>setAvatarPreview(ev.target.result);
                                                                            reader.readAsDataURL(file);
                                                                            try {
                                                                                const r = await uploadAvatar(file);
                                                                                if (r === null || r === void 0 ? void 0 : r.url) setAvatarPreview(r.url);
                                                                                if ("TURBOPACK compile-time truthy", 1) window.dispatchEvent(new Event('focus'));
                                                                            } catch (_) {
                                                                                alert('Failed to upload photo. Please try again.');
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1005,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-semibold px-1.5 py-0.5 rounded-full border",
                                                                        children: profileLoading ? '...' : "".concat(Math.max(0, Math.min(100, profileCompletion)), "%")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1025,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 984,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-lg font-semibold text-black",
                                                                        children: [
                                                                            user === null || user === void 0 ? void 0 : user.firstName,
                                                                            user === null || user === void 0 ? void 0 : user.lastName
                                                                        ].filter(Boolean).join(' ') || (user === null || user === void 0 ? void 0 : user.username) || (user === null || user === void 0 ? void 0 : user.name) || ((user === null || user === void 0 ? void 0 : user.email) ? user.email.split('@')[0] : 'User')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1030,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-black mt-1",
                                                                        children: "Profile completion"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1033,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1029,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 983,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/profiles/jobseeker-profile",
                                                        className: "px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700",
                                                        children: "Complete profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1036,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 982,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 981,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg shadow-sm border p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-6 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: jobFilters.q,
                                                            onChange: (e)=>setJobFilters((v)=>({
                                                                        ...v,
                                                                        q: e.target.value
                                                                    })),
                                                            className: "px-3 py-2 border rounded-lg text-gray-900",
                                                            placeholder: "Search jobs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1042,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: jobFilters.location,
                                                            onChange: (e)=>setJobFilters((v)=>({
                                                                        ...v,
                                                                        location: e.target.value
                                                                    })),
                                                            className: "px-3 py-2 border rounded-lg text-gray-900",
                                                            placeholder: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1048,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: jobFilters.jobType,
                                                            onChange: (e)=>setJobFilters((v)=>({
                                                                        ...v,
                                                                        jobType: e.target.value
                                                                    })),
                                                            className: "px-3 py-2 border rounded-lg text-gray-900",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Any Type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1059,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Full-time",
                                                                    children: "Full-time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1060,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Part-time",
                                                                    children: "Part-time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1061,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Contract",
                                                                    children: "Contract"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1062,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Internship",
                                                                    children: "Internship"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1063,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Freelance",
                                                                    children: "Freelance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1064,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1054,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: jobFilters.minSalary,
                                                            onChange: (e)=>setJobFilters((v)=>({
                                                                        ...v,
                                                                        minSalary: e.target.value
                                                                    })),
                                                            type: "number",
                                                            className: "px-3 py-2 border rounded-lg text-gray-900",
                                                            placeholder: "Min Salary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1066,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: jobFilters.maxSalary,
                                                            onChange: (e)=>setJobFilters((v)=>({
                                                                        ...v,
                                                                        maxSalary: e.target.value
                                                                    })),
                                                            type: "number",
                                                            className: "px-3 py-2 border rounded-lg text-gray-900",
                                                            placeholder: "Max Salary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1073,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: jobFilters.sort,
                                                            onChange: (e)=>setJobFilters((v)=>({
                                                                        ...v,
                                                                        sort: e.target.value
                                                                    })),
                                                            className: "px-3 py-2 border rounded-lg text-gray-900",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "newest",
                                                                    children: "Newest"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1085,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "relevance",
                                                                    children: "Relevance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1086,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "salary",
                                                                    children: "Salary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1087,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1080,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1041,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setJobsPage(1);
                                                            },
                                                            className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                            children: "Apply"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1091,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setJobFilters({
                                                                    q: '',
                                                                    location: '',
                                                                    jobType: '',
                                                                    minSalary: '',
                                                                    maxSalary: '',
                                                                    sort: 'newest'
                                                                }),
                                                            className: "px-4 py-2 border rounded-lg text-gray-900 hover:bg-gray-50",
                                                            children: "Clear"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1092,
                                                            columnNumber: 19
                                                        }, this),
                                                        jobsLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Loading jobs..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1093,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1090,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1040,
                                            columnNumber: 15
                                        }, this),
                                        jobPosts.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "job-".concat(job.id),
                                                className: "bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6 border-b",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center space-x-2 mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full",
                                                                                    children: "Open for applications"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1106,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                job.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full",
                                                                                    children: "Featured"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1111,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1105,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                            className: "text-xl font-semibold text-gray-900",
                                                                            children: [
                                                                                job.title,
                                                                                " - ",
                                                                                job.company
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1116,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-600 mt-1 flex flex-wrap gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "flex items-center space-x-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"], {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                            lineNumber: 1121,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: job.location
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                            lineNumber: 1122,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1120,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "flex items-center space-x-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                            lineNumber: 1125,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: job.jobType
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                            lineNumber: 1126,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1124,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "flex items-center space-x-1",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-semibold text-green-600",
                                                                                        children: job.salary
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1130,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1128,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1119,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1104,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 mt-4 sm:mt-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>toggleSaveJob(job.id),
                                                                            className: "px-4 py-2 rounded-lg font-medium border ".concat(savedJobs.includes(job.id) ? 'bg-blue-50 text-blue-700 border-blue-200' : 'text-gray-700 hover:bg-gray-50 border-gray-300'),
                                                                            children: savedJobs.includes(job.id) ? 'Saved' : 'Save'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1135,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleApplyJob(job.id),
                                                                            disabled: appliedJobs.some((j)=>j.id === job.id) || applyingJobId === job.id,
                                                                            className: "bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ".concat(appliedJobs.some((j)=>j.id === job.id) || applyingJobId === job.id ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'),
                                                                            children: applyingJobId === job.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1152,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Applying..."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1153,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"], {
                                                                                        className: "w-4 h-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1157,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: appliedJobs.some((j)=>j.id === job.id) ? 'Applied' : 'Apply Now'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1158,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1141,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1134,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1103,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1102,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 mb-4 leading-relaxed",
                                                                children: job.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1167,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAward"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1171,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Skills Required"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1172,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1170,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: job.skillsRequired.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm flex items-center space-x-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                                                        className: "w-3 h-3"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1177,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: skill
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1178,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, index, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1176,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1174,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1169,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1186,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Experience:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1187,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    " ",
                                                                                    job.experience
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1187,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1185,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1190,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Deadline:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1191,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    " ",
                                                                                    job.deadline
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1191,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1189,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1184,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, job.id, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1097,
                                                columnNumber: 17
                                            }, this)),
                                        jobPosts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg shadow-sm border p-8 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"], {
                                                    className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 mb-2",
                                                    children: "No jobs available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1201,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Check back later for new job opportunities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1202,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1199,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between bg-white rounded-lg shadow-sm border p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        "Page ",
                                                        jobsPage,
                                                        " of ",
                                                        Math.max(1, Math.ceil((jobsTotal || 0) / (jobsLimit || 10)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1208,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setJobsPage((p)=>Math.max(1, p - 1)),
                                                            disabled: jobsPage <= 1,
                                                            className: "px-3 py-2 border rounded-lg ".concat(jobsPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'),
                                                            children: "Previous"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1210,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setJobsPage((p)=>p * (jobsLimit || 10) < (jobsTotal || 0) ? p + 1 : p),
                                                            disabled: jobsPage * (jobsLimit || 10) >= (jobsTotal || 0),
                                                            className: "px-3 py-2 border rounded-lg ".concat(jobsPage * (jobsLimit || 10) >= (jobsTotal || 0) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'),
                                                            children: "Next"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1215,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1207,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 980,
                                    columnNumber: 13
                                }, this),
                                activeTab === 'job-profiles' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg shadow-sm border p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                                    children: "Saved Jobs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1228,
                                                    columnNumber: 19
                                                }, this),
                                                savedJobs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "No saved jobs yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: jobPosts.filter((j)=>savedJobs.includes(j.id)).map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border rounded-lg p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-gray-900",
                                                                                children: job.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1237,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-600",
                                                                                children: [
                                                                                    job.company,
                                                                                    " - ",
                                                                                    job.location
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1238,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1236,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>toggleSaveJob(job.id),
                                                                        className: "text-blue-600 hover:text-blue-800",
                                                                        children: "Unsave"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1240,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1235,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, job.id, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1234,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1232,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1227,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg shadow-sm border p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                                    children: "Applied Jobs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1249,
                                                    columnNumber: 19
                                                }, this),
                                                appliedJobs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "You haven't applied to any jobs yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1251,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: appliedJobs.map((app)=>{
                                                        const job = jobPosts.find((j)=>j.id === app.id);
                                                        if (!job) return null;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border rounded-lg p-4 flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-semibold text-gray-900",
                                                                            children: job.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1260,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-600",
                                                                            children: [
                                                                                job.company,
                                                                                " - Applied on ",
                                                                                new Date(app.at).toLocaleDateString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1261,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1259,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full",
                                                                    children: "Submitted"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1263,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, app.id, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1258,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1253,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1226,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'interviews' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow-sm border p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-2",
                                                children: "Upcoming Interviews"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1276,
                                                columnNumber: 19
                                            }, this),
                                            interviews.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "No interviews scheduled."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1278,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: interviews.map((itv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-lg p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-gray-900",
                                                                                children: itv.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1285,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-600",
                                                                                children: [
                                                                                    itv.date,
                                                                                    " - ",
                                                                                    itv.time
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1286,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1284,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full",
                                                                        children: itv.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1288,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1283,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleUpdateInterviewStatus(itv.id, 'Completed'),
                                                                        className: "px-3 py-2 text-sm border rounded-lg hover:bg-gray-50",
                                                                        children: "Mark as Done"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1291,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleUpdateInterviewStatus(itv.id, 'Cancelled'),
                                                                        className: "px-3 py-2 text-sm border rounded-lg hover:bg-gray-50",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1292,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    itv.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: itv.link,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                                        children: "Join"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1294,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1290,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, itv.id, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1282,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1280,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1275,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1274,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'assessments' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow-sm border p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-4",
                                                children: "Assessments"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1308,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: assessments.map((asmt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-lg p-4 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-gray-900",
                                                                        children: asmt.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1313,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-600",
                                                                        children: [
                                                                            "Status: ",
                                                                            asmt.status,
                                                                            typeof asmt.score === 'number' ? " - Score: ".concat(asmt.score) : ''
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1314,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1312,
                                                                columnNumber: 25
                                                            }, this),
                                                            asmt.status === 'Completed' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-4 py-2 border rounded-lg hover:bg-gray-50",
                                                                children: "Review"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1317,
                                                                columnNumber: 27
                                                            }, this) : asmt.status === 'In Progress' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleSubmitAssessment(asmt.id, 85),
                                                                className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                                children: "Submit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1319,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStartAssessment(asmt.id),
                                                                className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                                children: "Start"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1321,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, asmt.id, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1311,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1309,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1307,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1306,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'events' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow-sm border p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-2",
                                                children: "Events"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1333,
                                                columnNumber: 19
                                            }, this),
                                            events.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "No upcoming events."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1335,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: events.map((evt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-lg p-4 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-gray-900",
                                                                        children: evt.name || evt.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1341,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-600",
                                                                        children: [
                                                                            evt.date,
                                                                            " - ",
                                                                            evt.location || evt.link
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1342,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1340,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-4 py-2 rounded-lg border ".concat(evt.registered ? 'bg-blue-50 text-blue-700 border-blue-200' : 'hover:bg-gray-50'),
                                                                onClick: ()=>handleRegisterEvent(evt._id || evt.id, !!evt.registered),
                                                                children: evt.registered ? 'Unregister' : 'Register'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1344,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, evt.id, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1339,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1337,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1332,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1331,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'competitions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow-sm border p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-2",
                                                children: "Competitions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1361,
                                                columnNumber: 19
                                            }, this),
                                            competitions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "No active competitions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1363,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: competitions.map((cmp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-lg p-4 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-gray-900",
                                                                        children: cmp.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1369,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-600",
                                                                        children: [
                                                                            "Deadline: ",
                                                                            cmp.deadline,
                                                                            " - Prize: ",
                                                                            cmp.prize
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1370,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1368,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleParticipateCompetition(cmp._id || cmp.id),
                                                                disabled: !!cmp.participated,
                                                                className: "px-4 py-2 rounded-lg text-white ".concat(cmp.participated ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'),
                                                                children: cmp.participated ? 'Participated' : 'Participate'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1372,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, cmp.id, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1367,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1365,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1360,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1359,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-lg text-white p-8 mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col lg:flex-row items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lg:w-1/2 mb-6 lg:mb-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-3",
                                                                children: "New"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1394,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-2xl font-bold",
                                                                children: "Launchpad is now LIVE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1397,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1393,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold mb-4",
                                                        children: "Upskill, Practice & Crack a Job"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1399,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-3 gap-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold",
                                                                        children: launchpadStats.opportunities
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1405,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm opacity-90",
                                                                        children: "Job Opportunities"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1406,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1404,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold",
                                                                        children: launchpadStats.tests
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1409,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm opacity-90",
                                                                        children: "Practice Tests"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1410,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1408,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold",
                                                                        children: launchpadStats.courses
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1413,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm opacity-90",
                                                                        children: "Free Certificate Course"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1414,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1412,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1403,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg font-semibold",
                                                                children: "All for Free"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1419,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "opacity-90",
                                                                children: "and let your career take flight"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1420,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1418,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAward"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1424,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Visit Launchpad Now"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1425,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1423,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1392,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lg:w-2/5 flex justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAward"], {
                                                                    className: "w-10 h-10 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1433,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1432,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold",
                                                                children: "Start Your Journey Today!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1435,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1431,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1430,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1429,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1391,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1390,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                            lineNumber: 978,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                    lineNumber: 932,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 931,
                columnNumber: 7
            }, this),
            showQuestionModal && currentJob && currentJob.customQuestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl max-w-md w-full overflow-y-auto",
                    style: {
                        maxHeight: '90vh'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900",
                                                children: "Application Questions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1453,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: [
                                                    "Question ",
                                                    currentQuestionIndex + 1,
                                                    " of ",
                                                    currentJob.customQuestions.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1454,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1452,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCloseQuestionModal,
                                        className: "text-gray-400 hover:text-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1462,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1458,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 1451,
                                columnNumber: 15
                            }, this),
                            currentJob.customQuestions[currentQuestionIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: [
                                                    currentJob.customQuestions[currentQuestionIndex].question,
                                                    currentJob.customQuestions[currentQuestionIndex].isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500 ml-1",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1472,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1469,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: questionAnswers[currentJob.customQuestions[currentQuestionIndex].id] || '',
                                                onChange: (e)=>handleQuestionAnswer(currentJob.customQuestions[currentQuestionIndex].id, e.target.value),
                                                placeholder: "Enter your answer here...",
                                                rows: 4,
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1475,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1468,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: !currentJob.customQuestions[currentQuestionIndex].isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSkipQuestion,
                                                    className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50",
                                                    children: "Skip"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1487,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1485,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleNextQuestion,
                                                disabled: isSubmittingApplication,
                                                className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2",
                                                children: isSubmittingApplication ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1503,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Submitting..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1504,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: currentQuestionIndex === currentJob.customQuestions.length - 1 ? 'Submit Application' : 'Next'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1507,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1496,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1484,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-200 rounded-full h-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                                                style: {
                                                    width: "".concat((currentQuestionIndex + 1) / currentJob.customQuestions.length * 100, "%")
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1517,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1516,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1515,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 1467,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 1450,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                    lineNumber: 1449,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 1448,
                columnNumber: 9
            }, this),
            showProfilePanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/40 z-40",
                        onClick: closeProfilePanel
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 1533,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed right-0 top-0 bottom-0 z-50 w-full sm:w-96 bg-white shadow-2xl border-l border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: "My Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1536,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeProfilePanel,
                                        className: "text-gray-500 hover:text-gray-700",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1537,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 1535,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-y-auto p-4",
                                style: {
                                    height: 'calc(100vh - 56px)'
                                },
                                children: profileEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JobSeekerProfileForm, {
                                            user: user
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1544,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "mt-4 w-full py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300",
                                            onClick: ()=>setProfileEditMode(false),
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1545,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 p-4 bg-gray-50 rounded shadow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4",
                                                        children: (user === null || user === void 0 ? void 0 : (_user_firstName1 = user.firstName) === null || _user_firstName1 === void 0 ? void 0 : (_user_firstName_ = _user_firstName1[0]) === null || _user_firstName_ === void 0 ? void 0 : _user_firstName_.toUpperCase()) || (user === null || user === void 0 ? void 0 : (_user_username1 = user.username) === null || _user_username1 === void 0 ? void 0 : (_user_username_ = _user_username1[0]) === null || _user_username_ === void 0 ? void 0 : _user_username_.toUpperCase()) || (user === null || user === void 0 ? void 0 : (_user_email1 = user.email) === null || _user_email1 === void 0 ? void 0 : (_user_email_ = _user_email1[0]) === null || _user_email_ === void 0 ? void 0 : _user_email_.toUpperCase()) || 'U'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1557,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-lg text-black",
                                                                children: (user === null || user === void 0 ? void 0 : user.username) || (user === null || user === void 0 ? void 0 : user.firstName) || 'User'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1561,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Jobseeker"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1562,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: user === null || user === void 0 ? void 0 : user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1563,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-blue-600 underline text-xs mt-1",
                                                                onClick: ()=>router.push('/JobseekerProfile'),
                                                                children: "View & Update Profile"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1564,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1560,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1556,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1555,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 p-4 bg-white rounded shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold mb-2 text-gray-900",
                                                    children: "Profile Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1575,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "Phone"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1577,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1577,
                                                                    columnNumber: 70
                                                                }, this),
                                                                (user === null || user === void 0 ? void 0 : user.phone) || 'Not provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1577,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "Date of Birth"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1578,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1578,
                                                                    columnNumber: 78
                                                                }, this),
                                                                (user === null || user === void 0 ? void 0 : user.dob) || 'Not provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1578,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "Gender"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1579,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1579,
                                                                    columnNumber: 71
                                                                }, this),
                                                                (user === null || user === void 0 ? void 0 : user.gender) || 'Not provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1579,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "Address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1580,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1580,
                                                                    columnNumber: 72
                                                                }, this),
                                                                (user === null || user === void 0 ? void 0 : user.address) || 'Not provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1580,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "Summary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1581,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1581,
                                                                    columnNumber: 72
                                                                }, this),
                                                                (user === null || user === void 0 ? void 0 : user.summary) || 'Not provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1581,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "Skills"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1582,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1582,
                                                                    columnNumber: 71
                                                                }, this),
                                                                (user === null || user === void 0 ? void 0 : (_user_skills = user.skills) === null || _user_skills === void 0 ? void 0 : _user_skills.join(', ')) || 'Not provided'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1582,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1576,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1574,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 1541,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 1534,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
        lineNumber: 802,
        columnNumber: 5
    }, this);
}
_s(JobseekerDashboard, "p1ewemz9Sc5oj37V4eDJBWUleW8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = JobseekerDashboard;
var _c;
__turbopack_context__.k.register(_c, "JobseekerDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28components%29_jobseeker-dashboard_page_jsx_fa823cc8._.js.map