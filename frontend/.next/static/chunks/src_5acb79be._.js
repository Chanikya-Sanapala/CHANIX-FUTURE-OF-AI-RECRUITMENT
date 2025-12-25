(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ProfilePage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
function ProfilePage(param) {
    let { user, userType } = param;
    const name = [
        user === null || user === void 0 ? void 0 : user.firstName,
        user === null || user === void 0 ? void 0 : user.lastName
    ].filter(Boolean).join(" ") || (user === null || user === void 0 ? void 0 : user.user_name) || (user === null || user === void 0 ? void 0 : user.username) || (user === null || user === void 0 ? void 0 : user.name) || ((user === null || user === void 0 ? void 0 : user.email) ? user.email.split("@")[0] : "User");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-gray-50 rounded shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4",
                            children: (name || "U").charAt(0).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProfilePage.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-bold text-lg text-gray-900",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProfilePage.jsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600",
                                    children: (userType || "jobseeker").toString().replace(/^[a-z]/, (c)=>c.toUpperCase())
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProfilePage.jsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600",
                                    children: (user === null || user === void 0 ? void 0 : user.email) || ""
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProfilePage.jsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProfilePage.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProfilePage.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProfilePage.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-white rounded shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold mb-2 text-gray-900",
                        children: "Profile Information"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfilePage.jsx",
                        lineNumber: 29,
                        columnNumber: 9
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
                                        fileName: "[project]/src/components/ProfilePage.jsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/ProfilePage.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    (user === null || user === void 0 ? void 0 : user.phone) || "Not provided"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfilePage.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Date of Birth"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfilePage.jsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/ProfilePage.jsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    (user === null || user === void 0 ? void 0 : user.dob) || (user === null || user === void 0 ? void 0 : user.dateOfBirth) || "Not provided"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfilePage.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Gender"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfilePage.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/ProfilePage.jsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    (user === null || user === void 0 ? void 0 : user.gender) || "Not provided"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfilePage.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfilePage.jsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/ProfilePage.jsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    (user === null || user === void 0 ? void 0 : user.address) || "Not provided"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfilePage.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProfilePage.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProfilePage.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProfilePage.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ProfilePage;
var _c;
__turbopack_context__.k.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProfilePage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProfilePage.jsx [app-client] (ecmascript)");
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
    var _user_user_name, _user_firstName, _user_username, _user_name, _user_email, _user_firstName1, _user_name1, _questionAnswers_currentJob_customQuestions_currentQuestionIndex_id, _questionAnswers_currentJob_customQuestions_currentQuestionIndex_id1, _user_firstName_, _user_firstName2, _user_username_, _user_username1;
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
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Unified sidebar state
    const [showQuestionModal, setShowQuestionModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentJob, setCurrentJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [questionAnswers, setQuestionAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmittingApplication, setIsSubmittingApplication] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [applyingJobId, setApplyingJobId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Match Modal State
    const [matchModalState, setMatchModalState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        type: 'success',
        score: 0,
        suggestions: [],
        message: ''
    });
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
        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || 'http://localhost:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || 'http://localhost:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || 'http://localhost:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
            // Fetch latest profile to ensure avatar and details are up to date
            const refreshProfile = {
                "JobseekerDashboard.useEffect.refreshProfile": async ()=>{
                    try {
                        const token = localStorage.getItem('token');
                        const storedUser = localStorage.getItem('user');
                        let currentUserId = null;
                        if (storedUser) {
                            const parsed = JSON.parse(storedUser);
                            currentUserId = parsed._id || parsed.id;
                        }
                        if (token && currentUserId) {
                            var _json_data;
                            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || 'http://localhost:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                            const res = await fetch("".concat(baseUrl, "/api/profile/get"), {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    userId: currentUserId,
                                    userType: 'jobseeker'
                                })
                            });
                            const json = await res.json();
                            if ((json === null || json === void 0 ? void 0 : json.success) && (json === null || json === void 0 ? void 0 : (_json_data = json.data) === null || _json_data === void 0 ? void 0 : _json_data.profile)) {
                                const p = json.data.profile;
                                // Update avatar
                                if (p.profilePicture) {
                                    const apiImg = p.profilePicture;
                                    const fullImg = apiImg.startsWith('http') ? apiImg : "".concat(baseUrl).concat(apiImg.startsWith('/') ? '' : '/').concat(apiImg);
                                    setAvatarPreview(fullImg);
                                    localStorage.setItem("profileImageUrl_".concat(currentUserId), fullImg);
                                    // Update user state if missing image
                                    // Update user state if missing image
                                    setUser({
                                        "JobseekerDashboard.useEffect.refreshProfile": (prev)=>{
                                            var _p_contactDetails, _p_personalDetails, _p_personalDetails1, _p_personalDetails2, _p_contactDetails1, _p_contactDetails_address, _p_contactDetails2, _p_address;
                                            return prev ? {
                                                ...prev,
                                                profileImage: fullImg,
                                                // Sync missing fields from profile
                                                phone: ((_p_contactDetails = p.contactDetails) === null || _p_contactDetails === void 0 ? void 0 : _p_contactDetails.phone) || p.phone || prev.phone,
                                                gender: ((_p_personalDetails = p.personalDetails) === null || _p_personalDetails === void 0 ? void 0 : _p_personalDetails.gender) || p.gender || prev.gender,
                                                dob: ((_p_personalDetails1 = p.personalDetails) === null || _p_personalDetails1 === void 0 ? void 0 : _p_personalDetails1.dateOfBirth) || p.dateOfBirth ? new Date(((_p_personalDetails2 = p.personalDetails) === null || _p_personalDetails2 === void 0 ? void 0 : _p_personalDetails2.dateOfBirth) || p.dateOfBirth).toISOString().split('T')[0] : prev.dob,
                                                address: (((_p_contactDetails1 = p.contactDetails) === null || _p_contactDetails1 === void 0 ? void 0 : _p_contactDetails1.address) && typeof p.contactDetails.address === 'string' ? p.contactDetails.address : (_p_contactDetails2 = p.contactDetails) === null || _p_contactDetails2 === void 0 ? void 0 : (_p_contactDetails_address = _p_contactDetails2.address) === null || _p_contactDetails_address === void 0 ? void 0 : _p_contactDetails_address.street) || (typeof p.address === 'string' ? p.address : (_p_address = p.address) === null || _p_address === void 0 ? void 0 : _p_address.street) || prev.address,
                                                summary: p.profileSummary || p.summary || prev.summary,
                                                skills: p.skills && p.skills.length > 0 ? p.skills.map({
                                                    "JobseekerDashboard.useEffect.refreshProfile": (s)=>s.skill || s.skillName || s
                                                }["JobseekerDashboard.useEffect.refreshProfile"]) : p.keySkills && p.keySkills.length > 0 ? p.keySkills : prev.skills
                                            } : prev;
                                        }
                                    }["JobseekerDashboard.useEffect.refreshProfile"]);
                                } else {
                                    // Update details even if no image change
                                    setUser({
                                        "JobseekerDashboard.useEffect.refreshProfile": (prev)=>{
                                            var _p_contactDetails, _p_personalDetails, _p_personalDetails1, _p_personalDetails2, _p_contactDetails1, _p_contactDetails_address, _p_contactDetails2, _p_address;
                                            return prev ? {
                                                ...prev,
                                                // Sync missing fields from profile
                                                phone: ((_p_contactDetails = p.contactDetails) === null || _p_contactDetails === void 0 ? void 0 : _p_contactDetails.phone) || p.phone || prev.phone,
                                                gender: ((_p_personalDetails = p.personalDetails) === null || _p_personalDetails === void 0 ? void 0 : _p_personalDetails.gender) || p.gender || prev.gender,
                                                dob: ((_p_personalDetails1 = p.personalDetails) === null || _p_personalDetails1 === void 0 ? void 0 : _p_personalDetails1.dateOfBirth) || p.dateOfBirth ? new Date(((_p_personalDetails2 = p.personalDetails) === null || _p_personalDetails2 === void 0 ? void 0 : _p_personalDetails2.dateOfBirth) || p.dateOfBirth).toISOString().split('T')[0] : prev.dob,
                                                address: (((_p_contactDetails1 = p.contactDetails) === null || _p_contactDetails1 === void 0 ? void 0 : _p_contactDetails1.address) && typeof p.contactDetails.address === 'string' ? p.contactDetails.address : (_p_contactDetails2 = p.contactDetails) === null || _p_contactDetails2 === void 0 ? void 0 : (_p_contactDetails_address = _p_contactDetails2.address) === null || _p_contactDetails_address === void 0 ? void 0 : _p_contactDetails_address.street) || (typeof p.address === 'string' ? p.address : (_p_address = p.address) === null || _p_address === void 0 ? void 0 : _p_address.street) || prev.address,
                                                summary: p.profileSummary || p.summary || prev.summary,
                                                skills: p.skills && p.skills.length > 0 ? p.skills.map({
                                                    "JobseekerDashboard.useEffect.refreshProfile": (s)=>s.skill || s.skillName || s
                                                }["JobseekerDashboard.useEffect.refreshProfile"]) : p.keySkills && p.keySkills.length > 0 ? p.keySkills : prev.skills
                                            } : prev;
                                        }
                                    }["JobseekerDashboard.useEffect.refreshProfile"]);
                                }
                            }
                        }
                    } catch (e) {
                        console.error('Profile refresh error', e);
                    }
                }
            }["JobseekerDashboard.useEffect.refreshProfile"];
            refreshProfile();
        }
    }["JobseekerDashboard.useEffect"], []);
    const handleUpdateInterviewStatus = async (id, newStatus)=>{
        try {
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const res = await fetch("".concat(baseUrl, "/api/interviews"), {
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
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const res = await fetch("".concat(baseUrl, "/api/assessments"), {
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
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const res = await fetch("".concat(baseUrl, "/api/assessments"), {
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
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const res = await fetch("".concat(baseUrl, "/api/events"), {
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
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const res = await fetch("".concat(baseUrl, "/api/competitions"), {
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
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        const apiUrl = baseUrl ? "".concat(baseUrl, "/api/applications") : '/api/applications';
                        const res = await fetch(apiUrl, {
                            headers: {
                                'Authorization': "Bearer ".concat(token)
                            },
                            cache: 'no-store'
                        });
                        const json = await res.json();
                        if ((json === null || json === void 0 ? void 0 : json.success) && Array.isArray(json.data)) {
                            // Store full application details
                            const apps = json.data.map({
                                "JobseekerDashboard.useEffect.fetchAppliedJobs.apps": (a)=>{
                                    var _a_job, _a_job1, _a_job2, _a_job3;
                                    return {
                                        _id: a._id,
                                        jobId: ((_a_job = a.job) === null || _a_job === void 0 ? void 0 : _a_job._id) || ((_a_job1 = a.job) === null || _a_job1 === void 0 ? void 0 : _a_job1.id) || a.job,
                                        jobTitle: ((_a_job2 = a.job) === null || _a_job2 === void 0 ? void 0 : _a_job2.title) || 'Unknown Job',
                                        company: ((_a_job3 = a.job) === null || _a_job3 === void 0 ? void 0 : _a_job3.company) || 'Unknown Company',
                                        status: a.status || 'Applied',
                                        matchScore: a.matchScore || 0,
                                        appliedDate: a.appliedDate || a.createdAt || new Date().toISOString()
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
            // Interviews, assessments, events, and competitions should come only from backend APIs
            // Fetch interviews (Job Seeker's own interviews)
            // Interviews are fetched in the user-dependent effect below
            setAssessments([]);
            setEvents([]);
            setCompetitions([]);
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
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        // FIX: Add applicantId to query to ensure we fetch correctly
                        const userId = user._id || user.id || user.email;
                        const apiUrl = baseUrl ? "".concat(baseUrl, "/api/applications?applicantId=").concat(userId) : "/api/applications?applicantId=".concat(userId);
                        const res = await fetch(apiUrl, {
                            headers: {
                                'Authorization': "Bearer ".concat(token)
                            },
                            cache: 'no-store'
                        });
                        const json = await res.json();
                        if (isMounted && (json === null || json === void 0 ? void 0 : json.success) && Array.isArray(json.data)) {
                            // Store full application details
                            const apps = json.data.map({
                                "JobseekerDashboard.useEffect.loadApplications.apps": (a)=>{
                                    var _a_job, _a_job1, _a_job2, _a_job3;
                                    return {
                                        _id: a._id,
                                        jobId: ((_a_job = a.job) === null || _a_job === void 0 ? void 0 : _a_job._id) || ((_a_job1 = a.job) === null || _a_job1 === void 0 ? void 0 : _a_job1.id) || a.job,
                                        jobTitle: ((_a_job2 = a.job) === null || _a_job2 === void 0 ? void 0 : _a_job2.title) || 'Unknown Job',
                                        company: ((_a_job3 = a.job) === null || _a_job3 === void 0 ? void 0 : _a_job3.company) || 'Unknown Company',
                                        status: a.status || 'Applied',
                                        matchScore: a.matchScore || 0,
                                        appliedDate: a.appliedDate || a.createdAt || new Date().toISOString()
                                    };
                                }
                            }["JobseekerDashboard.useEffect.loadApplications.apps"]);
                            setAppliedJobs(apps);
                            const currentUserId = user._id || user.id || user.email || 'default';
                            localStorage.setItem("appliedJobs_".concat(currentUserId), JSON.stringify(apps));
                        }
                    } catch (_) {}
                }
            }["JobseekerDashboard.useEffect.loadApplications"];
            // Load events and competitions (only once)
            const loadEventsAndCompetitions = {
                "JobseekerDashboard.useEffect.loadEventsAndCompetitions": async ()=>{
                    try {
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        const evRes = await fetch("".concat(baseUrl, "/api/events?userId=").concat(encodeURIComponent(user._id || user.id)), {
                            cache: 'no-store'
                        });
                        const evJson = await evRes.json();
                        if (isMounted && (evJson === null || evJson === void 0 ? void 0 : evJson.success) && Array.isArray(evJson.data)) setEvents(evJson.data);
                    } catch (_) {}
                    try {
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        const cmpRes = await fetch("".concat(baseUrl, "/api/competitions?userId=").concat(encodeURIComponent(user._id || user.id)), {
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
                    const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
                            setProfileData(getRes.data);
                            const u = getRes.data.user || {};
                            const p = getRes.data.profile || {};
                            const userId = u._id || u.id || u.email || (user === null || user === void 0 ? void 0 : user._id) || (user === null || user === void 0 ? void 0 : user.id) || (user === null || user === void 0 ? void 0 : user.email) || 'default';
                            const apiImg = p.profilePicture || p.profileImage || p.avatar || p.avatarUrl || p.imageUrl || p.profilePhoto || '';
                            const localImg = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("profileImageUrl_".concat(userId)) : "TURBOPACK unreachable";
                            if (apiImg) {
                                const fullImageUrl = apiImg.startsWith('http') ? apiImg : baseUrl ? "".concat(baseUrl).concat(apiImg) : apiImg;
                                setAvatarPreview(fullImageUrl);
                                if ("TURBOPACK compile-time truthy", 1) localStorage.setItem("profileImageUrl_".concat(userId), fullImageUrl);
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
            // Load interviews
            const loadInterviews = {
                "JobseekerDashboard.useEffect.loadInterviews": async ()=>{
                    try {
                        const token = localStorage.getItem('token');
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        const res = await fetch("".concat(baseUrl, "/api/interviews/my-interviews"), {
                            headers: {
                                'Authorization': "Bearer ".concat(token)
                            }
                        });
                        const json = await res.json();
                        if (isMounted && json.success) {
                            setInterviews(json.data.map({
                                "JobseekerDashboard.useEffect.loadInterviews": (i)=>{
                                    var _i_jobId, _i_jobId1;
                                    return {
                                        id: i._id,
                                        title: ((_i_jobId = i.jobId) === null || _i_jobId === void 0 ? void 0 : _i_jobId.title) || 'General Interview',
                                        company: ((_i_jobId1 = i.jobId) === null || _i_jobId1 === void 0 ? void 0 : _i_jobId1.company) || '',
                                        date: new Date(i.createdAt).toLocaleDateString(),
                                        time: new Date(i.createdAt).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        }),
                                        status: i.status === 'pending' ? 'Pending' : i.status === 'completed' ? 'Completed' : i.status,
                                        token: i.uniqueToken,
                                        link: i.uniqueToken ? "/interview/".concat(i.uniqueToken) : '#'
                                    };
                                }
                            }["JobseekerDashboard.useEffect.loadInterviews"]));
                        }
                    } catch (err) {
                        console.error("Error fetching interviews:", err);
                    }
                }
            }["JobseekerDashboard.useEffect.loadInterviews"];
            // Execute all loads once
            loadApplications();
            loadEventsAndCompetitions();
            loadProfileData();
            loadInterviews();
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
    const submitApplication = async function(jobId) {
        let customAnswers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        const job = jobPosts.find((j)=>j.id === jobId);
        if (!job || !user) return;
        try {
            setIsSubmittingApplication(true);
            const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const res = await fetch("".concat(baseUrl, "/api/applications"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...token ? {
                        'Authorization': "Bearer ".concat(token)
                    } : {}
                },
                body: JSON.stringify({
                    jobId,
                    applicantId: (user === null || user === void 0 ? void 0 : user._id) || (user === null || user === void 0 ? void 0 : user.id) || (user === null || user === void 0 ? void 0 : user.userId),
                    customAnswers,
                    coverLetter: ''
                })
            });
            const json = await res.json().catch(()=>({}));
            if (json === null || json === void 0 ? void 0 : json.success) {
                var _json_data, _json_data1, _json_data2;
                // ... (Success code unchanged) ...
                const at = (json === null || json === void 0 ? void 0 : (_json_data = json.data) === null || _json_data === void 0 ? void 0 : _json_data.appliedDate) || new Date().toISOString();
                const successApp = {
                    _id: json.data._id,
                    jobTitle: job.title,
                    company: job.company,
                    status: json.data.status || 'Applied',
                    matchScore: json.data.matchScore,
                    appliedDate: at
                };
                const applied = [
                    successApp,
                    ...appliedJobs
                ];
                setAppliedJobs(applied);
                const userId = user._id || user.id || user.email || 'default';
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem("appliedJobs_".concat(userId), JSON.stringify(applied));
                }
                const scoreMsg = (json === null || json === void 0 ? void 0 : (_json_data1 = json.data) === null || _json_data1 === void 0 ? void 0 : _json_data1.matchScore) ? "\nMatch Score: ".concat(json.data.matchScore, "%") : '';
                // REPLACE ALERT WITH MODAL
                // alert(`Application submitted for ${job.title} at ${job.company}!${scoreMsg}\n\nWe will contact you soon for further process.`);
                setMatchModalState({
                    show: true,
                    type: 'success',
                    score: (json === null || json === void 0 ? void 0 : (_json_data2 = json.data) === null || _json_data2 === void 0 ? void 0 : _json_data2.matchScore) || 0,
                    suggestions: [],
                    message: "Application submitted for ".concat(job.title, " at ").concat(job.company, "!")
                });
                // ... (Notification code unchanged) ...
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
                setShowQuestionModal(false);
                setCurrentJob(null);
                setQuestionAnswers({});
                setCurrentQuestionIndex(0);
            } else {
                var _json_data3;
                // Handle Blocked Application due to low score
                if (json === null || json === void 0 ? void 0 : (_json_data3 = json.data) === null || _json_data3 === void 0 ? void 0 : _json_data3.blocksApplication) {
                    const score = json.data.score;
                    const suggestions = json.data.suggestions || [];
                    // Add rejected application to list immediately
                    if (json.data.applicationId) {
                        const rejectionApp = {
                            _id: json.data.applicationId,
                            jobTitle: job.title,
                            company: job.company,
                            status: 'Rejected',
                            matchScore: score,
                            appliedDate: new Date().toISOString()
                        };
                        setAppliedJobs((prev)=>[
                                rejectionApp,
                                ...prev
                            ]);
                    // Update localStorage too if needed, but simplistic is fine for now
                    }
                    // REPLACE ALERT WITH MODAL
                    setMatchModalState({
                        show: true,
                        type: 'error',
                        score: score,
                        suggestions: suggestions,
                        message: "Match Score Too Low"
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to submit application: ' + (json.message || 'Unknown error'));
                }
            }
        } catch (error) {
            console.error('Application submission error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to submit application. Please try again.');
        } finally{
            setIsSubmittingApplication(false);
            setApplyingJobId(null);
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
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning('Please answer this required question before proceeding.');
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
            id: 'find-jobs',
            label: 'Find Jobs',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"]
        },
        {
            id: 'applied-jobs',
            label: 'Applied Jobs',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"]
        },
        {
            id: 'saved-jobs',
            label: 'Saved Jobs',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBookmark"]
        },
        {
            id: 'my-profile',
            label: 'My Profile',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"],
            path: '/JobseekerProfile'
        },
        {
            id: 'interviews',
            label: 'Interviews',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"]
        },
        {
            id: 'assessments',
            label: 'Assessments',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBook"]
        },
        {
            id: 'events',
            label: 'Events',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAward"]
        },
        {
            id: 'competitions',
            label: 'Competitions',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAward"]
        }
    ];
    const handleNavigation = (item)=>{
        if (item.path) {
            router.push(item.path);
            setIsSidebarOpen(false);
            return;
        }
        setActiveTab(item.id);
        setIsSidebarOpen(false);
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
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5005") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
                        lineNumber: 914,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Jobseeker Dashboard - Find your dream job"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 915,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 913,
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
                                        className: "mr-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsSidebarOpen(true),
                                            className: "p-2 rounded-lg hover:bg-gray-100 text-black transition-colors",
                                            "aria-label": "Open menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 930,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 925,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 924,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-black",
                                        children: "Career Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 933,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 923,
                                columnNumber: 13
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
                                                        lineNumber: 943,
                                                        columnNumber: 19
                                                    }, this),
                                                    notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                                        children: notifications.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 945,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 939,
                                                columnNumber: 17
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
                                                                    lineNumber: 954,
                                                                    columnNumber: 25
                                                                }, this),
                                                                notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: clearAllNotifications,
                                                                    className: "text-sm text-blue-600 hover:text-blue-800",
                                                                    children: "Clear All"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 956,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 953,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 952,
                                                        columnNumber: 21
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
                                                                                    lineNumber: 966,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-black text-sm mt-1",
                                                                                    children: notification.message
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 967,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-black mt-2",
                                                                                    children: notification.timestamp
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 968,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 965,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>clearNotification(notification.id),
                                                                            className: "ml-2 text-black hover:text-gray-600",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 971,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 970,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 964,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, notification.id, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 963,
                                                                columnNumber: 27
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-8 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"], {
                                                                    className: "w-12 h-12 text-black mx-auto mb-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 978,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-black",
                                                                    children: "No notifications yet"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 979,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 977,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 960,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 951,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 938,
                                        columnNumber: 15
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
                                                        lineNumber: 989,
                                                        columnNumber: 21
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "".concat((user === null || user === void 0 ? void 0 : user.profileImage) || avatarPreview ? 'hidden' : 'flex', " w-full h-full items-center justify-center"),
                                                        children: ((user === null || user === void 0 ? void 0 : (_user_user_name = user.user_name) === null || _user_user_name === void 0 ? void 0 : _user_user_name[0]) || (user === null || user === void 0 ? void 0 : (_user_firstName = user.firstName) === null || _user_firstName === void 0 ? void 0 : _user_firstName[0]) || (user === null || user === void 0 ? void 0 : (_user_username = user.username) === null || _user_username === void 0 ? void 0 : _user_username[0]) || (user === null || user === void 0 ? void 0 : (_user_name = user.name) === null || _user_name === void 0 ? void 0 : _user_name[0]) || (user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email[0]) || 'U').toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 999,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 987,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:block",
                                                children: "My Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1012,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 986,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "ml-2 px-3 py-2 text-sm border border-gray-300 rounded-lg text-black hover:bg-gray-50",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1014,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 937,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 921,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                    lineNumber: 920,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 919,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8",
                    children: [
                        isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
                            onClick: ()=>setIsSidebarOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                            lineNumber: 1028,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ".concat(isSidebarOpen ? 'translate-x-0' : '-translate-x-full'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-4 border-b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-gray-800",
                                            children: "Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1040,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsSidebarOpen(false),
                                            className: "p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1045,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1041,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1039,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-64px)]",
                                    children: navigationItems.map((item)=>{
                                        const IconComponent = item.icon;
                                        const isActive = activeTab === item.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleNavigation(item),
                                            className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ".concat(isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                    className: "w-5 h-5 ".concat(isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1062,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1063,
                                                    columnNumber: 21
                                                }, this),
                                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1065,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1054,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1049,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1078,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "Sign Out"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1079,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1074,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1073,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                            lineNumber: 1035,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex-1",
                            children: [
                                (activeTab === 'home' || activeTab === 'find-jobs') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col md:flex-row items-center md:items-start gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative group shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-24 h-24 rounded-full p-1 bg-gradient-to-br from-blue-500 to-indigo-600",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full h-full rounded-full bg-white p-0.5 relative overflow-hidden",
                                                                    children: [
                                                                        (user === null || user === void 0 ? void 0 : user.profileImage) || avatarPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: (user === null || user === void 0 ? void 0 : user.profileImage) || avatarPreview,
                                                                            alt: "Profile",
                                                                            className: "w-full h-full object-cover rounded-full"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1097,
                                                                            columnNumber: 29
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-full h-full bg-gray-50 flex items-center justify-center text-2xl font-bold text-blue-600",
                                                                            children: ((user === null || user === void 0 ? void 0 : (_user_firstName1 = user.firstName) === null || _user_firstName1 === void 0 ? void 0 : _user_firstName1[0]) || (user === null || user === void 0 ? void 0 : (_user_name1 = user.name) === null || _user_name1 === void 0 ? void 0 : _user_name1[0]) || 'U').toUpperCase()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1099,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                var _document_getElementById;
                                                                                return (_document_getElementById = document.getElementById('dash-avatar-main')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();
                                                                            },
                                                                            className: "absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium",
                                                                            children: "Change"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1103,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1095,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1094,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "dash-avatar-main",
                                                                type: "file",
                                                                className: "hidden",
                                                                accept: "image/*",
                                                                onChange: async (e)=>{
                                                                    var _e_target_files;
                                                                    const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
                                                                    if (file) {
                                                                        const reader = new FileReader();
                                                                        reader.onload = (ev)=>setAvatarPreview(ev.target.result);
                                                                        reader.readAsDataURL(file);
                                                                        await uploadAvatar(file);
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1111,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm whitespace-nowrap",
                                                                children: [
                                                                    Math.round(profileCompletion),
                                                                    "% Ready"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1120,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1093,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 text-center md:text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                className: "text-2xl font-bold text-gray-900",
                                                                                children: (user === null || user === void 0 ? void 0 : user.firstName) || (user === null || user === void 0 ? void 0 : user.lastName) ? "".concat((user === null || user === void 0 ? void 0 : user.firstName) || '', " ").concat((user === null || user === void 0 ? void 0 : user.lastName) || '').trim() : (user === null || user === void 0 ? void 0 : user.name) || (user === null || user === void 0 ? void 0 : user.username) || 'Job Seeker'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1128,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-500 font-medium",
                                                                                children: (user === null || user === void 0 ? void 0 : user.profileTitle) || (user === null || user === void 0 ? void 0 : user.title) || 'Job Seeker'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1133,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400 mt-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                                                                                        className: "w-3.5 h-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1135,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: (user === null || user === void 0 ? void 0 : user.address) || (user === null || user === void 0 ? void 0 : user.location) || 'Location not set'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1136,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1134,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1127,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/JobseekerProfile",
                                                                        className: "px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200",
                                                                        children: "Complete Profile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1139,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1126,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-3 bg-blue-50 rounded-xl border border-blue-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-2xl font-bold text-blue-600",
                                                                                children: appliedJobs.length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1146,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs font-semibold text-blue-400 uppercase tracking-wider",
                                                                                children: "Applied"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1147,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1145,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-3 bg-indigo-50 rounded-xl border border-indigo-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-2xl font-bold text-indigo-600",
                                                                                children: savedJobs.length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1150,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs font-semibold text-indigo-400 uppercase tracking-wider",
                                                                                children: "Saved"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1151,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1149,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-3 bg-purple-50 rounded-xl border border-purple-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-2xl font-bold text-purple-600",
                                                                                children: appliedJobs.filter((job)=>[
                                                                                        'interview',
                                                                                        'interviewing',
                                                                                        'scheduled'
                                                                                    ].includes((job.status || '').toLowerCase())).length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1154,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs font-semibold text-purple-400 uppercase tracking-wider",
                                                                                children: "Interviews"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1157,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1153,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-3 bg-emerald-50 rounded-xl border border-emerald-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-2xl font-bold text-emerald-600",
                                                                                children: appliedJobs.filter((job)=>[
                                                                                        'offer',
                                                                                        'offer_received',
                                                                                        'hired'
                                                                                    ].includes((job.status || '').toLowerCase())).length
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1160,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs font-semibold text-emerald-400 uppercase tracking-wider",
                                                                                children: "Offers"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1163,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1159,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1144,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1125,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1092,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1091,
                                            columnNumber: 17
                                        }, this),
                                        jobPosts.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "job-".concat(job.id),
                                                className: "bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200",
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
                                                                                new Date(job.deadline) < new Date() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full",
                                                                                    children: "Expired"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1183,
                                                                                    columnNumber: 31
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full",
                                                                                    children: "Open for applications"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1187,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                job.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full",
                                                                                    children: "Featured"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1193,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1181,
                                                                            columnNumber: 27
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
                                                                            lineNumber: 1198,
                                                                            columnNumber: 27
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
                                                                                            lineNumber: 1203,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: job.location
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                            lineNumber: 1204,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1202,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "flex items-center space-x-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                            lineNumber: 1207,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: job.jobType
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                            lineNumber: 1208,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1206,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "flex items-center space-x-1",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-semibold text-green-600",
                                                                                        children: job.salary
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1212,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1210,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1201,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1180,
                                                                    columnNumber: 25
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
                                                                            lineNumber: 1217,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleApplyJob(job.id),
                                                                            disabled: appliedJobs.some((j)=>j.id === job.id) || applyingJobId === job.id || new Date(job.deadline) < new Date(),
                                                                            className: "bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ".concat(appliedJobs.some((j)=>j.id === job.id) || applyingJobId === job.id || new Date(job.deadline) < new Date() ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'),
                                                                            children: applyingJobId === job.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1233,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Applying..."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1234,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"], {
                                                                                        className: "w-4 h-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1238,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: appliedJobs.some((j)=>j.id === job.id) ? 'Applied' : new Date(job.deadline) < new Date() ? 'Expired' : 'Apply Now'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1239,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1223,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1216,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1179,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1178,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 mb-4 leading-relaxed",
                                                                children: job.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1254,
                                                                columnNumber: 23
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
                                                                                lineNumber: 1258,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Skills Required"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1259,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1257,
                                                                        columnNumber: 25
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
                                                                                        lineNumber: 1264,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: skill
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1265,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, index, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1263,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1261,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1256,
                                                                columnNumber: 23
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
                                                                                lineNumber: 1273,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Experience:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1274,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    " ",
                                                                                    job.experience
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1274,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1272,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1277,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Deadline:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1278,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    " ",
                                                                                    job.deadline
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1278,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1276,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1271,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1253,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, job.id, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1173,
                                                columnNumber: 19
                                            }, this)),
                                        jobPosts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg shadow-sm p-8 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"], {
                                                    className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1287,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 mb-2",
                                                    children: "No jobs available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1288,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Check back later for new job opportunities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1289,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1286,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between bg-white rounded-lg shadow-sm p-4",
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
                                                    lineNumber: 1295,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setJobsPage((p)=>Math.max(1, p - 1)),
                                                            disabled: jobsPage <= 1,
                                                            className: "px-3 py-2 rounded-lg ".concat(jobsPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'),
                                                            children: "Previous"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1297,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setJobsPage((p)=>p * (jobsLimit || 10) < (jobsTotal || 0) ? p + 1 : p),
                                                            disabled: jobsPage * (jobsLimit || 10) >= (jobsTotal || 0),
                                                            className: "px-3 py-2 border rounded-lg ".concat(jobsPage * (jobsLimit || 10) >= (jobsTotal || 0) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'),
                                                            children: "Next"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1302,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1296,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1294,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1089,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'applied-jobs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "Applied Jobs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1315,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium",
                                                    children: [
                                                        appliedJobs.length,
                                                        " Applications"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1316,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1314,
                                            columnNumber: 17
                                        }, this),
                                        appliedJobs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                        className: "w-8 h-8 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1322,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1321,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 mb-1",
                                                    children: "No applications yet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1324,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 mb-6",
                                                    children: "Start applying to jobs to track them here."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1325,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab('home'),
                                                    className: "px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700",
                                                    children: "Browse Jobs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1326,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1320,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-4",
                                            children: appliedJobs.map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-bold text-gray-900",
                                                                        children: app.jobTitle
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1334,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-600 font-medium",
                                                                        children: app.company
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1335,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mt-2 text-sm text-gray-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                        className: "w-4 h-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1337,
                                                                                        columnNumber: 73
                                                                                    }, this),
                                                                                    " Applied: ",
                                                                                    new Date(app.appliedDate).toLocaleDateString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1337,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            app.matchScore > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex items-center gap-1 text-emerald-600 font-medium",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                                                        className: "w-4 h-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1338,
                                                                                        columnNumber: 125
                                                                                    }, this),
                                                                                    " ",
                                                                                    app.matchScore,
                                                                                    "% Match"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1338,
                                                                                columnNumber: 54
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1336,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1333,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-4 py-2 rounded-lg text-sm font-semibold capitalize\n                                ".concat(app.status === 'Applied' ? 'bg-blue-50 text-blue-700' : app.status === 'Rejected' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'),
                                                                        children: app.status || 'Applied'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1342,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "p-2 text-gray-400 hover:text-gray-600",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1348,
                                                                            columnNumber: 87
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1348,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1341,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1332,
                                                        columnNumber: 25
                                                    }, this)
                                                }, app._id, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1331,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1329,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1313,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'saved-jobs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "Saved Jobs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1361,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium",
                                                    children: [
                                                        savedJobs.length,
                                                        " Saved"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1362,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1360,
                                            columnNumber: 17
                                        }, this),
                                        savedJobs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBookmark"], {
                                                        className: "w-8 h-8 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1368,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1367,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 mb-1",
                                                    children: "No saved jobs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1370,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 mb-6",
                                                    children: "Save jobs you're interested in to view them later."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1371,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab('home'),
                                                    className: "px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700",
                                                    children: "Browse Jobs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1372,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1366,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: jobPosts.filter((j)=>savedJobs.includes(j.id)).map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-bold text-gray-900 line-clamp-1",
                                                                            children: job.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1380,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-gray-600 text-sm",
                                                                                    children: job.company
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1382,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                new Date(job.deadline) < new Date() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full",
                                                                                    children: "Expired"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1384,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1381,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1379,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>toggleSaveJob(job.id),
                                                                    className: "text-indigo-600 hover:text-indigo-800 p-2 bg-indigo-50 rounded-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBookmark"], {
                                                                        className: "w-5 h-5 fill-current"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1389,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1388,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1378,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-sm text-gray-500 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1393,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " ",
                                                                job.location
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1392,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleApplyJob(job.id),
                                                            disabled: new Date(job.deadline) < new Date(),
                                                            className: "w-full py-2.5 rounded-lg font-medium transition-colors ".concat(new Date(job.deadline) < new Date() ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-black'),
                                                            children: new Date(job.deadline) < new Date() ? 'Expired' : 'Apply Now'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1395,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, job.id, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1377,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1375,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1359,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'interviews' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "My Interviews"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1415,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium",
                                                    children: [
                                                        interviews.length,
                                                        " Scheduled"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1416,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1414,
                                            columnNumber: 17
                                        }, this),
                                        interviews.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                        className: "w-8 h-8 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1422,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1421,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 mb-1",
                                                    children: "No interviews scheduled"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1424,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 mb-6",
                                                    children: "Applications that advance will have interviews appear here."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1425,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1420,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: interviews.map((itv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-bold text-gray-900",
                                                                    children: itv.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1432,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600 font-medium",
                                                                    children: itv.company
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1433,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 mt-2 text-sm text-gray-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1435,
                                                                                columnNumber: 71
                                                                            }, this),
                                                                            " Added: ",
                                                                            itv.date,
                                                                            " at ",
                                                                            itv.time
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1435,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1434,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1431,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-4 py-2 rounded-lg text-sm font-semibold capitalize flex items-center gap-2\n                                ".concat(itv.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' : itv.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-gray-50 text-gray-700'),
                                                                    children: [
                                                                        itv.status === 'Pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-2 h-2 rounded-full bg-yellow-500 animate-pulse"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1444,
                                                                            columnNumber: 58
                                                                        }, this),
                                                                        itv.status === 'Completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1445,
                                                                            columnNumber: 60
                                                                        }, this),
                                                                        itv.status
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1440,
                                                                    columnNumber: 27
                                                                }, this),
                                                                itv.status === 'Pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/interview/".concat(itv.token),
                                                                    className: "px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-200 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiVideo"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1454,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        " Start Interview"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1450,
                                                                    columnNumber: 29
                                                                }, this),
                                                                itv.status === 'Completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    disabled: true,
                                                                    className: "px-6 py-2.5 bg-gray-100 text-gray-400 font-bold rounded-xl cursor-not-allowed",
                                                                    children: "Submitted"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1459,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1439,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, itv.id, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1430,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1428,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1413,
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
                                                lineNumber: 1477,
                                                columnNumber: 21
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
                                                                        lineNumber: 1482,
                                                                        columnNumber: 29
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
                                                                        lineNumber: 1483,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1481,
                                                                columnNumber: 27
                                                            }, this),
                                                            asmt.status === 'Completed' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-4 py-2 border rounded-lg hover:bg-gray-50",
                                                                children: "Review"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1486,
                                                                columnNumber: 29
                                                            }, this) : asmt.status === 'In Progress' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleSubmitAssessment(asmt.id, 85),
                                                                className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                                children: "Submit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1488,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStartAssessment(asmt.id),
                                                                className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                                children: "Start"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1490,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, asmt.id, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1480,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1478,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1476,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1475,
                                    columnNumber: 17
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
                                                lineNumber: 1504,
                                                columnNumber: 21
                                            }, this),
                                            events.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "No events scheduled for you at the moment."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1506,
                                                columnNumber: 23
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
                                                                        lineNumber: 1512,
                                                                        columnNumber: 31
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
                                                                        lineNumber: 1513,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1511,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-4 py-2 rounded-lg border ".concat(evt.registered ? 'bg-blue-50 text-blue-700 border-blue-200' : 'hover:bg-gray-50'),
                                                                onClick: ()=>handleRegisterEvent(evt._id || evt.id, !!evt.registered),
                                                                children: evt.registered ? 'Unregister' : 'Register'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1515,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, evt.id, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1510,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1508,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1503,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1502,
                                    columnNumber: 17
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
                                                lineNumber: 1534,
                                                columnNumber: 21
                                            }, this),
                                            competitions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "No active competitions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1536,
                                                columnNumber: 23
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
                                                                        lineNumber: 1542,
                                                                        columnNumber: 31
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
                                                                        lineNumber: 1543,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1541,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleParticipateCompetition(cmp._id || cmp.id),
                                                                disabled: !!cmp.participated,
                                                                className: "px-4 py-2 rounded-lg text-white ".concat(cmp.participated ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'),
                                                                children: cmp.participated ? 'Participated' : 'Participate'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1545,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, cmp.id, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1540,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1538,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1533,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1532,
                                    columnNumber: 17
                                }, this),
                                activeTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-lg text-white p-4 md:p-8 mt-8",
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
                                                                lineNumber: 1569,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xl md:text-2xl font-bold",
                                                                children: "Launchpad is now LIVE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1572,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1568,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg md:text-xl font-semibold mb-4",
                                                        children: "Upskill, Practice & Crack a Job"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1574,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center p-2 bg-white/10 rounded-lg sm:bg-transparent sm:p-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold",
                                                                        children: launchpadStats.opportunities
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1580,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm opacity-90",
                                                                        children: "Job Opportunities"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1581,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1579,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center p-2 bg-white/10 rounded-lg sm:bg-transparent sm:p-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold",
                                                                        children: launchpadStats.tests
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1584,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm opacity-90",
                                                                        children: "Practice Tests"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1585,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1583,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center p-2 bg-white/10 rounded-lg sm:bg-transparent sm:p-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl font-bold",
                                                                        children: launchpadStats.courses
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1588,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm opacity-90",
                                                                        children: "Free Certificate Course"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1589,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1587,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1578,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg font-semibold",
                                                                children: "All for Free"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1594,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "opacity-90",
                                                                children: "and let your career take flight"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1595,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1593,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAward"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1599,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Visit Launchpad Now"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1600,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1598,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1567,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lg:w-2/5 flex justify-center w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm w-full max-w-xs sm:max-w-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAward"], {
                                                                    className: "w-10 h-10 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1608,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1607,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold",
                                                                children: "Start Your Journey Today!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1610,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1606,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1605,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1604,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1566,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1565,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                            lineNumber: 1085,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                    lineNumber: 1022,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 1020,
                columnNumber: 7
            }, this),
            showQuestionModal && currentJob && currentJob.customQuestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100",
                    style: {
                        maxHeight: '90vh',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-800",
                                                children: "Job Application"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1636,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: [
                                                    currentJob.title,
                                                    " • ",
                                                    currentJob.company
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1637,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center text-sm text-blue-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Question ",
                                                                currentQuestionIndex + 1,
                                                                " of ",
                                                                currentJob.customQuestions.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1642,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-4 w-32 bg-gray-200 rounded-full h-1.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-blue-600 h-1.5 rounded-full transition-all duration-300 ease-out",
                                                                style: {
                                                                    width: "".concat((currentQuestionIndex + 1) / currentJob.customQuestions.length * 100, "%")
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1646,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1645,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1641,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1640,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1635,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCloseQuestionModal,
                                        className: "p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1659,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1654,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 1634,
                                columnNumber: 17
                            }, this),
                            currentJob.customQuestions && currentJob.customQuestions[currentQuestionIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 p-4 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-base font-medium text-gray-800 mb-3",
                                                children: [
                                                    currentJob.customQuestions[currentQuestionIndex].question,
                                                    currentJob.customQuestions[currentQuestionIndex].isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500 ml-1",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1669,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1666,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: questionAnswers[currentJob.customQuestions[currentQuestionIndex].id] || '',
                                                onChange: (e)=>handleQuestionAnswer(currentJob.customQuestions[currentQuestionIndex].id, e.target.value),
                                                placeholder: "Type your answer here...",
                                                rows: 5,
                                                className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-200",
                                                style: {
                                                    minHeight: '120px',
                                                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1672,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1665,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row justify-between items-center pt-2 gap-4",
                                        children: [
                                            !currentJob.customQuestions[currentQuestionIndex].isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSkipQuestion,
                                                className: "w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
                                                children: "Skip this question"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1687,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full sm:w-auto flex-1 flex justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleNextQuestion,
                                                    disabled: isSubmittingApplication || currentJob.customQuestions[currentQuestionIndex].isRequired && !((_questionAnswers_currentJob_customQuestions_currentQuestionIndex_id = questionAnswers[currentJob.customQuestions[currentQuestionIndex].id]) === null || _questionAnswers_currentJob_customQuestions_currentQuestionIndex_id === void 0 ? void 0 : _questionAnswers_currentJob_customQuestions_currentQuestionIndex_id.trim()),
                                                    className: "w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ".concat(isSubmittingApplication || currentJob.customQuestions[currentQuestionIndex].isRequired && !((_questionAnswers_currentJob_customQuestions_currentQuestionIndex_id1 = questionAnswers[currentJob.customQuestions[currentQuestionIndex].id]) === null || _questionAnswers_currentJob_customQuestions_currentQuestionIndex_id1 === void 0 ? void 0 : _questionAnswers_currentJob_customQuestions_currentQuestionIndex_id1.trim()) ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'),
                                                    children: isSubmittingApplication ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1705,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center",
                                                        children: currentQuestionIndex === currentJob.customQuestions.length - 1 ? 'Submit Application' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                "Next Question",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 ml-2",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1714,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1713,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1711,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1707,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1696,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1695,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1685,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 1664,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 1633,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                    lineNumber: 1626,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 1625,
                columnNumber: 11
            }, this),
            showProfilePanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity",
                        onClick: closeProfilePanel
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 1736,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[480px] bg-white shadow-2xl border-l border-gray-100 transform transition-transform duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-gray-900 tracking-tight",
                                        children: "My Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1739,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeProfilePanel,
                                        className: "p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1744,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1740,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 1738,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-y-auto h-[calc(100vh-80px)]",
                                children: profileEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JobSeekerProfileForm, {
                                    user: user
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1750,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative mb-4 group",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-24 h-24 rounded-full p-1 bg-white border-2 border-blue-100 shadow-sm mx-auto overflow-hidden",
                                                        children: [
                                                            (user === null || user === void 0 ? void 0 : user.profileImage) || avatarPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: (user === null || user === void 0 ? void 0 : user.profileImage) || avatarPreview,
                                                                alt: "Profile",
                                                                className: "w-full h-full rounded-full object-cover",
                                                                onError: (e)=>{
                                                                    e.target.style.display = 'none';
                                                                    e.target.nextSibling.style.display = 'flex';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1758,
                                                                columnNumber: 29
                                                            }, this) : null,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center ".concat((user === null || user === void 0 ? void 0 : user.profileImage) || avatarPreview ? 'hidden' : 'flex'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl font-bold text-blue-600",
                                                                    children: (user === null || user === void 0 ? void 0 : (_user_firstName2 = user.firstName) === null || _user_firstName2 === void 0 ? void 0 : (_user_firstName_ = _user_firstName2[0]) === null || _user_firstName_ === void 0 ? void 0 : _user_firstName_.toUpperCase()) || (user === null || user === void 0 ? void 0 : (_user_username1 = user.username) === null || _user_username1 === void 0 ? void 0 : (_user_username_ = _user_username1[0]) === null || _user_username_ === void 0 ? void 0 : _user_username_.toUpperCase()) || 'U'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1769,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1768,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1756,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1755,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-900 mb-1",
                                                    children: (user === null || user === void 0 ? void 0 : user.username) || (user === null || user === void 0 ? void 0 : user.firstName) || 'User'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1776,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base text-gray-500 font-medium mb-1",
                                                    children: "Job Seeker"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1779,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-2 text-gray-500 text-sm mb-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMail"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1781,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: user === null || user === void 0 ? void 0 : user.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1782,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1780,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>router.push('/JobseekerProfile'),
                                                    className: "inline-flex items-center justify-center px-6 py-2.5 border border-blue-600 text-blue-600 font-semibold text-sm rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all w-full sm:w-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2",
                                                            children: "View & Update Profile"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1789,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1790,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1785,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1754,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-5 rounded-2xl border border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-4",
                                                            children: "Contact Information"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1797,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-2.5 bg-white rounded-xl shadow-sm text-blue-600 shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPhone"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1801,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1800,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-400 mb-0.5",
                                                                                    children: "Phone"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1804,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base font-semibold text-gray-900 truncate",
                                                                                    children: (user === null || user === void 0 ? void 0 : user.phone) || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-400 italic font-normal",
                                                                                        children: "Not provided"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1805,
                                                                                        columnNumber: 109
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1805,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1803,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1799,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-2.5 bg-white rounded-xl shadow-sm text-purple-600 shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1811,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1810,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-400 mb-0.5",
                                                                                    children: "Location"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1814,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base font-semibold text-gray-900 break-words",
                                                                                    children: (user === null || user === void 0 ? void 0 : user.address) || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-400 italic font-normal",
                                                                                        children: "Not provided"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1815,
                                                                                        columnNumber: 114
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1815,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1813,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1809,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1798,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1796,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-5 rounded-2xl border border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-4",
                                                            children: "Personal Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1822,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-2.5 bg-white rounded-xl shadow-sm text-pink-600 shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1826,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1825,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-400 mb-0.5",
                                                                                    children: "Date of Birth"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1829,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base font-semibold text-gray-900",
                                                                                    children: (user === null || user === void 0 ? void 0 : user.dob) ? String(user.dob).split('T')[0] : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-400 italic font-normal",
                                                                                        children: "Not provided"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1830,
                                                                                        columnNumber: 130
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1830,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1828,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1824,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-2.5 bg-white rounded-xl shadow-sm text-teal-600 shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1836,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1835,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-gray-400 mb-0.5",
                                                                                    children: "Gender"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1839,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base font-semibold text-gray-900",
                                                                                    children: (user === null || user === void 0 ? void 0 : user.gender) || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-400 italic font-normal",
                                                                                        children: "Not provided"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1840,
                                                                                        columnNumber: 101
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1840,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                            lineNumber: 1838,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1834,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1823,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1821,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-5 rounded-2xl border border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-4",
                                                            children: "Professional"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1848,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: (user === null || user === void 0 ? void 0 : user.summary) && user.summary !== 'Not provided' || (user === null || user === void 0 ? void 0 : user.skills) && user.skills.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    (user === null || user === void 0 ? void 0 : user.summary) && user.summary !== 'Not provided' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-2.5 bg-white rounded-xl shadow-sm text-orange-600 shrink-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                                                                                    className: "w-5 h-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1855,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1854,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1 min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm font-medium text-gray-400 mb-0.5",
                                                                                        children: "Summary"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1858,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm font-medium text-gray-700 leading-relaxed line-clamp-4",
                                                                                        children: user.summary
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1859,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1857,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1853,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    (user === null || user === void 0 ? void 0 : user.skills) && user.skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-2.5 bg-white rounded-xl shadow-sm text-indigo-600 shrink-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCpu"], {
                                                                                    className: "w-5 h-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                    lineNumber: 1867,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1866,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1 min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm font-medium text-gray-400 mb-0.5",
                                                                                        children: "Skills"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1870,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-wrap gap-2 mt-1",
                                                                                        children: user.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "px-2.5 py-1 bg-white rounded-md text-xs font-semibold text-gray-700 border border-gray-200 shadow-sm",
                                                                                                children: skill
                                                                                            }, i, false, {
                                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                                lineNumber: 1873,
                                                                                                columnNumber: 41
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                        lineNumber: 1871,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                                lineNumber: 1869,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1865,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400 italic font-normal text-sm block text-center py-2",
                                                                children: "Add professional details to your profile to see them here."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1881,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1849,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1847,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1795,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-gray-100 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 bg-gray-100 text-gray-600 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSettings"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1892,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1891,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-gray-700",
                                                                    children: "Settings"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1894,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1890,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                                                            className: "w-4 h-4 text-gray-400 group-hover:text-gray-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1896,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1889,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 bg-gray-100 text-gray-600 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHelpCircle"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                        lineNumber: 1902,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1901,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-gray-700",
                                                                    children: "Help & FAQs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1904,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1900,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                                                            className: "w-4 h-4 text-gray-400 group-hover:text-gray-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1906,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1899,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleLogout,
                                                    className: "w-full flex items-center justify-between p-4 bg-red-50 hover:bg-red-100 rounded-xl border border-red-100 transition-colors group mt-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 bg-white text-red-500 rounded-lg shadow-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                    lineNumber: 1915,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1914,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-red-600",
                                                                children: "Log Out"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                                lineNumber: 1917,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                        lineNumber: 1913,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1909,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1888,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1752,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 1748,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                        lineNumber: 1737,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 1735,
                columnNumber: 11
            }, this),
            matchModalState.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden transform transition-all scale-100 border border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-28 flex flex-col justify-start pt-4 items-center ".concat(matchModalState.type === 'success' ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-red-500 to-pink-600'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1",
                                        children: matchModalState.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                className: "w-5 h-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1940,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1939,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1937,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white tracking-wide",
                                        children: matchModalState.type === 'success' ? 'Application Sent' : 'Application'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                        lineNumber: 1944,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                lineNumber: 1936,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                            lineNumber: 1935,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center -mt-12 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-20 h-20 bg-white rounded-full p-1.5 shadow-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full rounded-full border-4 flex items-center justify-center ".concat(matchModalState.type === 'success' ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-bold",
                                                    children: [
                                                        matchModalState.score,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1956,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                lineNumber: 1955,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1954,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-gray-400 font-medium uppercase mt-1 tracking-wider",
                                            children: "Match Score"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1959,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1952,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-700 font-medium mb-4 text-sm",
                                    children: matchModalState.message
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1962,
                                    columnNumber: 17
                                }, this),
                                matchModalState.suggestions && matchModalState.suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-orange-50 rounded-xl p-3 mb-4 border border-orange-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xs font-bold text-orange-800 mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-orange-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1969,
                                                    columnNumber: 23
                                                }, this),
                                                "Improvement Suggestions"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1968,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1.5 max-h-32 overflow-y-auto pr-2",
                                            children: matchModalState.suggestions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-xs text-gray-700 flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 w-1 h-1 rounded-full bg-gray-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                            lineNumber: 1975,
                                                            columnNumber: 27
                                                        }, this),
                                                        s
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                                    lineNumber: 1974,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1972,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1967,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMatchModalState({
                                                    ...matchModalState,
                                                    show: false
                                                }),
                                            className: "flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors",
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1984,
                                            columnNumber: 19
                                        }, this),
                                        matchModalState.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMatchModalState({
                                                    ...matchModalState,
                                                    show: false
                                                }),
                                            className: "flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl",
                                            children: "Done"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                            lineNumber: 1991,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                                    lineNumber: 1983,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                            lineNumber: 1951,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                    lineNumber: 1932,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
                lineNumber: 1931,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(components)/jobseeker-dashboard/page.jsx",
        lineNumber: 912,
        columnNumber: 5
    }, this);
}
_s(JobseekerDashboard, "crbc3lYHKjOHdhMifbNJTOfHZOw=", false, function() {
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

//# sourceMappingURL=src_5acb79be._.js.map