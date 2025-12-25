module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/(components)/Login/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LoginPage() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        password: '',
        userType: ''
    });
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Debug: Log state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('🔄 Form state updated:', formData);
    }, [
        formData
    ]);
    const handleLogin = async (e)=>{
        e.preventDefault();
        setMessage('');
        setIsLoading(true);
        // Validation
        if (!formData.email || !formData.password) {
            setMessage('❌ Please fill in all required fields');
            setIsLoading(false);
            return;
        }
        if (!formData.userType) {
            setMessage('❌ Please select a user type');
            setIsLoading(false);
            return;
        }
        console.log('🔐 Attempting login with:', {
            email: formData.email,
            userType: formData.userType,
            passwordLength: formData.password.length
        });
        try {
            // Call the backend API
            const baseUrl = ("TURBOPACK compile-time value", "http://localhost:5005") || "http://localhost:5005";
            const res = await fetch(`${baseUrl}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log('📨 Login response:', {
                status: res.status,
                data
            });
            const payload = data?.data || {};
            const token = payload.token;
            const user = payload.user;
            if (res.ok && data.success && token && user) {
                setMessage('✅ ' + data.message);
                console.log('🎉 Login successful, redirecting...');
                // Store token in localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                setTimeout(()=>{
                    // Prefer backend userType, but fall back to the selected form userType
                    const type = (user?.userType || formData.userType || '').toLowerCase();
                    let path = '/jobseeker-dashboard';
                    if (type === 'recruiter') path = '/recruiter-dashboard';
                    else if (type === 'admin' || type === 'administrator') path = '/admin-dashboard';
                    try {
                        const encoded = btoa(JSON.stringify({
                            user,
                            token,
                            userType: user.userType
                        }));
                        window.location.href = `${path}?u=${encodeURIComponent(encoded)}`;
                    } catch (_) {
                        window.location.href = path;
                    }
                }, 1200);
            } else {
                console.log('❌ Login failed:', data);
                setMessage('❌ ' + (data?.message || 'Login failed'));
            }
        } catch (error) {
            console.error('❌ Login error:', error);
            setMessage('❌ Network error: Could not connect to server. Make sure backend is running on port 5005.');
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: '0',
            zIndex: 50,
            backgroundColor: '#000000',
            backgroundImage: `
        radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
        radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
        radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)
      `,
            overflowY: 'auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px'
            },
            className: "jsx-a7faedbd07ec317c",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    id: "a7faedbd07ec317c",
                    children: ".glass-login-card{-webkit-backdrop-filter:blur(16px);border:1px solid #fff3;border-radius:24px;width:100%;max-width:420px;padding:48px;box-shadow:0 8px 32px #0000004d;background:#ffffff1a!important;margin:0!important}.glass-title{color:#fff;text-align:center;letter-spacing:-.5px;margin-bottom:32px;font-size:32px;font-weight:700}.glass-input-wrapper{margin-bottom:20px;position:relative}.glass-input-field{color:#fff;background:#ffffff0d;border:1px solid #ffffff1a;border-radius:12px;outline:none;width:100%;padding:16px 16px 16px 48px;font-size:15px;transition:all .2s}.glass-input-field::placeholder{color:#fff6}.glass-input-field:focus{background:#ffffff1a;border-color:#ffffff4d}.glass-input-field option{color:#fff;background:#1a1a1a}.glass-icon{opacity:.7;z-index:10;font-size:18px;position:absolute;top:50%;left:16px;transform:translateY(-50%)}.glass-toggle-password{cursor:pointer;opacity:.7;font-size:18px;position:absolute;top:50%;right:16px;transform:translateY(-50%)}.glass-toggle-password:hover{opacity:1}.glass-btn-primary{color:#000;cursor:pointer;background:#fff;border:none;border-radius:12px;width:100%;margin-top:24px;padding:16px;font-size:16px;font-weight:600;transition:all .2s}.glass-btn-primary:hover{transform:translateY(-1px);box-shadow:0 4px 12px #0003}.glass-btn-primary:disabled{opacity:.7;cursor:not-allowed}.glass-forgot-wrapper{text-align:right;margin-top:8px}.glass-forgot-link{color:#fff9;font-size:14px;text-decoration:none;transition:color .2s}.glass-forgot-link:hover{color:#fff}.glass-footer-text{text-align:center;color:#fff9;margin-top:24px;font-size:14px}.glass-link{color:#fff;font-weight:600;text-decoration:none}.glass-link:hover{text-decoration:underline}"
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "jsx-a7faedbd07ec317c" + " " + "glass-login-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "jsx-a7faedbd07ec317c" + " " + "glass-title",
                            children: "Welcome Back"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                textAlign: 'center',
                                color: 'rgba(255,255,255,0.6)',
                                marginBottom: '32px',
                                marginTop: '-24px',
                                fontSize: '15px'
                            },
                            className: "jsx-a7faedbd07ec317c",
                            children: "Enter your credentials to access your account"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                fontSize: '14px',
                                marginBottom: '24px',
                                padding: '12px',
                                borderRadius: '12px',
                                color: message.includes('✅') ? '#86efac' : '#fca5a5',
                                backgroundColor: message.includes('✅') ? 'rgba(22, 101, 52, 0.2)' : 'rgba(153, 27, 27, 0.2)',
                                border: `1px solid ${message.includes('✅') ? 'rgba(134, 239, 172, 0.2)' : 'rgba(252, 165, 165, 0.2)'}`,
                                backdropFilter: 'blur(4px)'
                            },
                            className: "jsx-a7faedbd07ec317c",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a7faedbd07ec317c" + " " + "glass-input-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-a7faedbd07ec317c" + " " + "glass-icon email-icon",
                                    children: "✉️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Email address",
                                    value: formData.email,
                                    onChange: (e)=>{
                                        console.log('Email changed to:', e.target.value);
                                        setFormData({
                                            ...formData,
                                            email: e.target.value
                                        });
                                    },
                                    required: true,
                                    className: "jsx-a7faedbd07ec317c" + " " + "glass-input-field"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a7faedbd07ec317c" + " " + "glass-input-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-a7faedbd07ec317c" + " " + "glass-icon",
                                    children: "👤"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.userType,
                                    onChange: (e)=>{
                                        console.log('User type changed to:', e.target.value);
                                        setFormData({
                                            ...formData,
                                            userType: e.target.value
                                        });
                                    },
                                    style: {
                                        paddingLeft: '48px',
                                        appearance: 'none'
                                    },
                                    required: true,
                                    className: "jsx-a7faedbd07ec317c" + " " + "glass-input-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            className: "jsx-a7faedbd07ec317c",
                                            children: "Select User Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "jobseeker",
                                            className: "jsx-a7faedbd07ec317c",
                                            children: "Job Seeker"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "recruiter",
                                            className: "jsx-a7faedbd07ec317c",
                                            children: "Recruiter"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "admin",
                                            className: "jsx-a7faedbd07ec317c",
                                            children: "Administrator"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        pointerEvents: 'none',
                                        color: 'rgba(255,255,255,0.4)',
                                        fontSize: '12px'
                                    },
                                    className: "jsx-a7faedbd07ec317c",
                                    children: "▼"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a7faedbd07ec317c" + " " + "glass-input-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-a7faedbd07ec317c" + " " + "glass-icon password-icon",
                                    children: "🔒"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: showPassword ? 'text' : 'password',
                                    placeholder: "Password",
                                    value: formData.password,
                                    onChange: (e)=>{
                                        console.log('Password changed, length:', e.target.value.length);
                                        setFormData({
                                            ...formData,
                                            password: e.target.value
                                        });
                                    },
                                    required: true,
                                    className: "jsx-a7faedbd07ec317c" + " " + "glass-input-field"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    onClick: ()=>setShowPassword(!showPassword),
                                    className: "jsx-a7faedbd07ec317c" + " " + "glass-toggle-password",
                                    children: showPassword ? '🙈' : '👁️'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a7faedbd07ec317c" + " " + "glass-forgot-wrapper",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/ForgotPassword",
                                className: "glass-forgot-link",
                                children: "Forgot password?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/Login/page.jsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: "jsx-a7faedbd07ec317c" + " " + "glass-btn-primary",
                            children: isLoading ? 'Signing in...' : 'Sign In'
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-a7faedbd07ec317c" + " " + "glass-footer-text",
                            children: [
                                "Don't have an account? ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/Signup",
                                    className: "glass-link",
                                    children: "Sign up"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                                    lineNumber: 329,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/Login/page.jsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/Login/page.jsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(components)/Login/page.jsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(components)/Login/page.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__085cbada._.js.map