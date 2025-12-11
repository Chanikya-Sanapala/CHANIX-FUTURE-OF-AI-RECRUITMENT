(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(components)/RecruiterProfile/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecruiterProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function RecruiterProfile() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('basic');
    const [profileImage, setProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview'); // 'overview' | 'edit'
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [basicDetails, setBasicDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        department: '',
        bio: ''
    });
    const [companyDetails, setCompanyDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        website: '',
        industry: '',
        size: '',
        description: '',
        address: {
            street: '',
            city: '',
            state: '',
            country: 'India',
            zipCode: ''
        },
        founded: '',
        logo: ''
    });
    const [specializations, setSpecializations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newSpecialization, setNewSpecialization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [experienceInRecruitment, setExperienceInRecruitment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [socialProfiles, setSocialProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        linkedin: '',
        twitter: ''
    });
    // Completion calculation
    const completion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RecruiterProfile.useMemo[completion]": ()=>{
            var _basicDetails_firstName, _basicDetails_lastName, _basicDetails_email, _basicDetails_phone, _basicDetails_position, _companyDetails_name, _companyDetails_industry, _companyDetails_size, _companyDetails_description, _companyDetails_address_city, _companyDetails_address_country;
            let total = 0;
            let filled = 0;
            const add = {
                "RecruiterProfile.useMemo[completion].add": (isFilled)=>{
                    total += 1;
                    if (isFilled) filled += 1;
                }
            }["RecruiterProfile.useMemo[completion].add"];
            // Basic
            add(!!((_basicDetails_firstName = basicDetails.firstName) === null || _basicDetails_firstName === void 0 ? void 0 : _basicDetails_firstName.trim()));
            add(!!((_basicDetails_lastName = basicDetails.lastName) === null || _basicDetails_lastName === void 0 ? void 0 : _basicDetails_lastName.trim()));
            add(!!((_basicDetails_email = basicDetails.email) === null || _basicDetails_email === void 0 ? void 0 : _basicDetails_email.trim()));
            add(!!((_basicDetails_phone = basicDetails.phone) === null || _basicDetails_phone === void 0 ? void 0 : _basicDetails_phone.trim()));
            add(!!((_basicDetails_position = basicDetails.position) === null || _basicDetails_position === void 0 ? void 0 : _basicDetails_position.trim()));
            add(!!profileImage);
            // Company
            add(!!((_companyDetails_name = companyDetails.name) === null || _companyDetails_name === void 0 ? void 0 : _companyDetails_name.trim()));
            add(!!((_companyDetails_industry = companyDetails.industry) === null || _companyDetails_industry === void 0 ? void 0 : _companyDetails_industry.trim()));
            add(!!((_companyDetails_size = companyDetails.size) === null || _companyDetails_size === void 0 ? void 0 : _companyDetails_size.trim()));
            add(!!((_companyDetails_description = companyDetails.description) === null || _companyDetails_description === void 0 ? void 0 : _companyDetails_description.trim()));
            add(!!((_companyDetails_address_city = companyDetails.address.city) === null || _companyDetails_address_city === void 0 ? void 0 : _companyDetails_address_city.trim()));
            add(!!((_companyDetails_address_country = companyDetails.address.country) === null || _companyDetails_address_country === void 0 ? void 0 : _companyDetails_address_country.trim()));
            // Other
            add(specializations.length > 0);
            add(experienceInRecruitment > 0);
            const pct = total ? Math.round(filled / total * 100) : 0;
            return {
                pct,
                missing: Math.max(0, total - filled)
            };
        }
    }["RecruiterProfile.useMemo[completion]"], [
        basicDetails,
        profileImage,
        companyDetails,
        specializations,
        experienceInRecruitment
    ]);
    // Load user data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecruiterProfile.useEffect": ()=>{
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
                    setBasicDetails({
                        "RecruiterProfile.useEffect": (prev)=>({
                                ...prev,
                                firstName: (userData === null || userData === void 0 ? void 0 : userData.firstName) || '',
                                lastName: (userData === null || userData === void 0 ? void 0 : userData.lastName) || '',
                                email: (userData === null || userData === void 0 ? void 0 : userData.email) || ''
                            })
                    }["RecruiterProfile.useEffect"]);
                    const userId = userData._id || userData.id || userData.email || 'default';
                    const img = localStorage.getItem("profileImageUrl_".concat(userId));
                    if (img) setProfileImage(img);
                }
            } catch (_) {}
        }
    }["RecruiterProfile.useEffect"], []);
    // Load existing profile from backend
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecruiterProfile.useEffect": ()=>{
            if (!user) return;
            const loadProfile = {
                "RecruiterProfile.useEffect.loadProfile": async ()=>{
                    try {
                        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        const url = baseUrl ? "".concat(baseUrl, "/api/profile/get") : "/api/profile/get";
                        const res = await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                userId: user._id || user.id,
                                userType: 'recruiter'
                            }),
                            credentials: 'include'
                        });
                        const json = await res.json().catch({
                            "RecruiterProfile.useEffect.loadProfile": ()=>({})
                        }["RecruiterProfile.useEffect.loadProfile"]);
                        if ((json === null || json === void 0 ? void 0 : json.success) && json.data) {
                            const u = json.data.user || {};
                            const p = json.data.profile || {};
                            // Update basic details
                            setBasicDetails({
                                "RecruiterProfile.useEffect.loadProfile": (prev)=>({
                                        ...prev,
                                        firstName: u.firstName || prev.firstName || '',
                                        lastName: u.lastName || prev.lastName || '',
                                        email: u.email || prev.email || '',
                                        phone: p.phone || prev.phone || '',
                                        position: p.position || prev.position || '',
                                        department: p.department || prev.department || '',
                                        bio: p.bio || prev.bio || ''
                                    })
                            }["RecruiterProfile.useEffect.loadProfile"]);
                            // Update company details
                            if (p.company) {
                                setCompanyDetails({
                                    "RecruiterProfile.useEffect.loadProfile": (prev)=>{
                                        var _p_company_address, _p_company_address1, _p_company_address2, _p_company_address3, _p_company_address4;
                                        return {
                                            ...prev,
                                            name: p.company.name || prev.name || '',
                                            website: p.company.website || prev.website || '',
                                            industry: p.company.industry || prev.industry || '',
                                            size: p.company.size || prev.size || '',
                                            description: p.company.description || prev.description || '',
                                            address: {
                                                street: ((_p_company_address = p.company.address) === null || _p_company_address === void 0 ? void 0 : _p_company_address.street) || prev.address.street || '',
                                                city: ((_p_company_address1 = p.company.address) === null || _p_company_address1 === void 0 ? void 0 : _p_company_address1.city) || prev.address.city || '',
                                                state: ((_p_company_address2 = p.company.address) === null || _p_company_address2 === void 0 ? void 0 : _p_company_address2.state) || prev.address.state || '',
                                                country: ((_p_company_address3 = p.company.address) === null || _p_company_address3 === void 0 ? void 0 : _p_company_address3.country) || prev.address.country || 'India',
                                                zipCode: ((_p_company_address4 = p.company.address) === null || _p_company_address4 === void 0 ? void 0 : _p_company_address4.zipCode) || prev.address.zipCode || ''
                                            },
                                            founded: p.company.founded ? String(p.company.founded).slice(0, 10) : prev.founded || '',
                                            logo: p.company.logo || prev.logo || ''
                                        };
                                    }
                                }["RecruiterProfile.useEffect.loadProfile"]);
                            }
                            // Update other fields
                            if (p.specializations) setSpecializations(p.specializations || []);
                            if (p.experienceInRecruitment) setExperienceInRecruitment(p.experienceInRecruitment || 0);
                            if (p.socialProfiles) setSocialProfiles(p.socialProfiles || {
                                linkedin: '',
                                twitter: ''
                            });
                            // Load profile image
                            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                            const apiImg = p.profilePicture || p.profileImage || p.avatar || '';
                            const userId = u._id || u.id || u.email || 'default';
                            if (apiImg) {
                                const fullImg = apiImg.startsWith('http') ? apiImg : baseUrl ? "".concat(baseUrl).concat(apiImg) : apiImg;
                                setProfileImage(fullImg);
                                if ("TURBOPACK compile-time truthy", 1) localStorage.setItem("profileImageUrl_".concat(userId), fullImg);
                            } else if ("TURBOPACK compile-time truthy", 1) {
                                const localImg = localStorage.getItem("profileImageUrl_".concat(userId));
                                if (localImg) setProfileImage(localImg);
                            }
                        }
                    } catch (error) {
                        console.error('Error loading profile:', error);
                    }
                }
            }["RecruiterProfile.useEffect.loadProfile"];
            loadProfile();
        }
    }["RecruiterProfile.useEffect"], [
        user
    ]);
    const handleImageChange = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleAddSpecialization = ()=>{
        if (newSpecialization.trim() && !specializations.includes(newSpecialization)) {
            setSpecializations([
                ...specializations,
                newSpecialization
            ]);
            setNewSpecialization('');
        }
    };
    const handleRemoveSpecialization = (spec)=>{
        setSpecializations(specializations.filter((s)=>s !== spec));
    };
    const handleSaveProfile = async ()=>{
        setIsLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Please login to save profile');
                return;
            }
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const url = baseUrl ? "".concat(baseUrl, "/api/profile/recruiter") : "/api/profile/recruiter";
            const payload = {
                firstName: basicDetails.firstName,
                lastName: basicDetails.lastName,
                phone: basicDetails.phone,
                position: basicDetails.position,
                department: basicDetails.department,
                bio: basicDetails.bio,
                company: {
                    name: companyDetails.name,
                    website: companyDetails.website,
                    industry: companyDetails.industry,
                    size: companyDetails.size,
                    description: companyDetails.description,
                    address: companyDetails.address,
                    founded: companyDetails.founded ? new Date(companyDetails.founded) : null,
                    logo: companyDetails.logo
                },
                specializations,
                experienceInRecruitment: parseInt(experienceInRecruitment) || 0,
                socialProfiles
            };
            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json().catch(()=>({}));
            if (json === null || json === void 0 ? void 0 : json.success) {
                var _json_data;
                // Update user data in localStorage with firstName and lastName
                if ((_json_data = json.data) === null || _json_data === void 0 ? void 0 : _json_data.user) {
                    const updatedUser = {
                        ...user,
                        firstName: json.data.user.firstName || basicDetails.firstName,
                        lastName: json.data.user.lastName || basicDetails.lastName
                    };
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                    setUser(updatedUser);
                }
                // Handle profile image upload if changed
                if (profileImage && profileImage.startsWith('data:')) {
                    const formData = new FormData();
                    const canvas = document.createElement('canvas');
                    const img = new Image();
                    img.onload = async ()=>{
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        canvas.toBlob(async (blob)=>{
                            formData.append('file', blob, 'profile.jpg');
                            formData.append('userId', user._id || user.id);
                            formData.append('userType', 'recruiter');
                            try {
                                const uploadRes = await fetch("".concat(baseUrl, "/api/profile/upload-photo"), {
                                    method: 'POST',
                                    headers: {
                                        'Authorization': "Bearer ".concat(token)
                                    },
                                    body: formData
                                });
                                const uploadJson = await uploadRes.json().catch(()=>({}));
                                if (uploadJson === null || uploadJson === void 0 ? void 0 : uploadJson.success) {
                                    var _uploadJson_data;
                                    const userId = user._id || user.id || user.email || 'default';
                                    const imageUrl = ((_uploadJson_data = uploadJson.data) === null || _uploadJson_data === void 0 ? void 0 : _uploadJson_data.url) || uploadJson.url || '';
                                    if (imageUrl) {
                                        const fullUrl = imageUrl.startsWith('http') ? imageUrl : "".concat(baseUrl).concat(imageUrl);
                                        setProfileImage(fullUrl);
                                        localStorage.setItem("profileImageUrl_".concat(userId), fullUrl);
                                    }
                                }
                            } catch (err) {
                                console.error('Image upload error:', err);
                            }
                        });
                    };
                    img.src = profileImage;
                }
                alert('Profile saved successfully!');
                setMode('overview');
            } else {
                alert((json === null || json === void 0 ? void 0 : json.message) || 'Failed to save profile');
            }
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Failed to save profile. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/login'),
                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                        children: "Go to Login"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                        lineNumber: 342,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                lineNumber: 340,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
            lineNumber: 339,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-gray-900",
                                    children: "Recruiter Profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-2",
                                    children: [
                                        "Profile Completion: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-blue-600",
                                            children: [
                                                completion.pct,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                            lineNumber: 361,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push('/recruiter-dashboard'),
                            className: "px-4 py-2 text-gray-600 hover:text-gray-900",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                lineNumber: 368,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-white rounded-lg shadow p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-gray-200 rounded-full h-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                                style: {
                                    width: "".concat(completion.pct, "%")
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mt-2",
                            children: completion.missing > 0 ? "".concat(completion.missing, " fields to complete") : 'Profile complete!'
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block bg-white rounded-lg shadow p-4 sticky top-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-2",
                                        children: [
                                            'basic',
                                            'company',
                                            'specializations',
                                            'social'
                                        ].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveSection(section),
                                                className: "w-full text-left px-4 py-2 rounded transition-colors ".concat(activeSection === section ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'),
                                                children: section.charAt(0).toUpperCase() + section.slice(1)
                                            }, section, false, {
                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                lineNumber: 393,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "mobile-nav",
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Navigate to Section"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "mobile-nav",
                                            className: "block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base text-gray-900 bg-white",
                                            value: activeSection,
                                            onChange: (e)=>setActiveSection(e.target.value),
                                            children: [
                                                'basic',
                                                'company',
                                                'specializations',
                                                'social'
                                            ].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: section,
                                                    children: section.charAt(0).toUpperCase() + section.slice(1)
                                                }, section, false, {
                                                    fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                    lineNumber: 417,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-gray-900",
                                                children: [
                                                    activeSection === 'basic' && 'Basic Information',
                                                    activeSection === 'company' && 'Company Details',
                                                    activeSection === 'specializations' && 'Specializations',
                                                    activeSection === 'social' && 'Social Profiles'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                lineNumber: 430,
                                                columnNumber: 17
                                            }, this),
                                            mode === 'overview' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMode('edit'),
                                                className: "w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 441,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Edit Profile"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                lineNumber: 437,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleSaveProfile,
                                                        disabled: isLoading,
                                                        className: "w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSave"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 451,
                                                                columnNumber: 23
                                                            }, this),
                                                            isLoading ? 'Saving...' : 'Save Changes'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setMode('overview'),
                                                        className: "w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 458,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Cancel"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 454,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                lineNumber: 445,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            activeSection === 'basic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden",
                                                                        children: profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: profileImage,
                                                                            alt: "Profile",
                                                                            className: "h-full w-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                            lineNumber: 475,
                                                                            columnNumber: 29
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"], {
                                                                            className: "h-12 w-12 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                            lineNumber: 477,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 473,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            var _fileInputRef_current;
                                                                            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                                                        },
                                                                        className: "absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUpload"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                            lineNumber: 485,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 481,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: fileInputRef,
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        onChange: handleImageChange,
                                                                        className: "hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 472,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-gray-900",
                                                                        children: "Profile Picture"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-600",
                                                                        children: "JPG, PNG or GIF (Max 5MB)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 498,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 496,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 471,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "First Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 505,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: basicDetails.firstName,
                                                                        onChange: (e)=>setBasicDetails({
                                                                                ...basicDetails,
                                                                                firstName: e.target.value
                                                                            }),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900",
                                                                        children: basicDetails.firstName || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 514,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 504,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Last Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 519,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: basicDetails.lastName,
                                                                        onChange: (e)=>setBasicDetails({
                                                                                ...basicDetails,
                                                                                lastName: e.target.value
                                                                            }),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 521,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900",
                                                                        children: basicDetails.lastName || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 528,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 518,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 533,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900 flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMail"], {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 535,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            basicDetails.email
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 534,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 532,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Phone"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 541,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "tel",
                                                                        value: basicDetails.phone,
                                                                        onChange: (e)=>setBasicDetails({
                                                                                ...basicDetails,
                                                                                phone: e.target.value
                                                                            }),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 543,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900 flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPhone"], {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 551,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            basicDetails.phone || '-'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 550,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 540,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Position"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: basicDetails.position,
                                                                        onChange: (e)=>setBasicDetails({
                                                                                ...basicDetails,
                                                                                position: e.target.value
                                                                            }),
                                                                        placeholder: "e.g., Senior Recruiter",
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900",
                                                                        children: basicDetails.position || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 568,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 557,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Department"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 573,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: basicDetails.department,
                                                                        onChange: (e)=>setBasicDetails({
                                                                                ...basicDetails,
                                                                                department: e.target.value
                                                                            }),
                                                                        placeholder: "e.g., Human Resources",
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 575,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900",
                                                                        children: basicDetails.department || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 583,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 572,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 503,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Bio"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 589,
                                                                columnNumber: 23
                                                            }, this),
                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: basicDetails.bio,
                                                                onChange: (e)=>setBasicDetails({
                                                                        ...basicDetails,
                                                                        bio: e.target.value
                                                                    }),
                                                                rows: 4,
                                                                placeholder: "Tell us about yourself...",
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 591,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-900 whitespace-pre-line",
                                                                children: basicDetails.bio || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 599,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 588,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                lineNumber: 469,
                                                columnNumber: 19
                                            }, this),
                                            activeSection === 'company' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Company Name *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 610,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: companyDetails.name,
                                                                        onChange: (e)=>setCompanyDetails({
                                                                                ...companyDetails,
                                                                                name: e.target.value
                                                                            }),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 612,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900 flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"], {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 620,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            companyDetails.name || '-'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 619,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 609,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Industry *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 627,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: companyDetails.industry,
                                                                        onChange: (e)=>setCompanyDetails({
                                                                                ...companyDetails,
                                                                                industry: e.target.value
                                                                            }),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Select Industry"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 634,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Information Technology",
                                                                                children: "Information Technology"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 635,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Finance",
                                                                                children: "Finance"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 636,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Healthcare",
                                                                                children: "Healthcare"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 637,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Education",
                                                                                children: "Education"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 638,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Manufacturing",
                                                                                children: "Manufacturing"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 639,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Retail",
                                                                                children: "Retail"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 640,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Other",
                                                                                children: "Other"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 641,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 629,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900",
                                                                        children: companyDetails.industry || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 644,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 626,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Company Size *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 649,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: companyDetails.size,
                                                                        onChange: (e)=>setCompanyDetails({
                                                                                ...companyDetails,
                                                                                size: e.target.value
                                                                            }),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Select Size"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 656,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "1-10",
                                                                                children: "1-10 employees"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 657,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "11-50",
                                                                                children: "11-50 employees"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 658,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "51-200",
                                                                                children: "51-200 employees"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 659,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "201-500",
                                                                                children: "201-500 employees"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 660,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "501-1000",
                                                                                children: "501-1000 employees"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 661,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "1000+",
                                                                                children: "1000+ employees"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 662,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 651,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900",
                                                                        children: companyDetails.size || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 665,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 648,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Website"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 670,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "url",
                                                                        value: companyDetails.website,
                                                                        onChange: (e)=>setCompanyDetails({
                                                                                ...companyDetails,
                                                                                website: e.target.value
                                                                            }),
                                                                        placeholder: "https://example.com",
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 672,
                                                                        columnNumber: 27
                                                                    }, this) : companyDetails.website ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-blue-600 flex items-center hover:underline",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGlobe"], {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 681,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                href: companyDetails.website,
                                                                                target: "_blank",
                                                                                rel: "noopener noreferrer",
                                                                                children: companyDetails.website
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 682,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 680,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900",
                                                                        children: "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 669,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Founded"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 692,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: companyDetails.founded,
                                                                        onChange: (e)=>setCompanyDetails({
                                                                                ...companyDetails,
                                                                                founded: e.target.value
                                                                            }),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 694,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-900",
                                                                        children: companyDetails.founded || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 701,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 691,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 608,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Company Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 707,
                                                                columnNumber: 23
                                                            }, this),
                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: companyDetails.description,
                                                                onChange: (e)=>setCompanyDetails({
                                                                        ...companyDetails,
                                                                        description: e.target.value
                                                                    }),
                                                                rows: 4,
                                                                placeholder: "Tell us about your company...",
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 709,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-900 whitespace-pre-line",
                                                                children: companyDetails.description || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 717,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 706,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t pt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-gray-900 mb-4",
                                                                children: "Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 723,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                                children: "Street Address"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 726,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: companyDetails.address.street,
                                                                                onChange: (e)=>setCompanyDetails({
                                                                                        ...companyDetails,
                                                                                        address: {
                                                                                            ...companyDetails.address,
                                                                                            street: e.target.value
                                                                                        }
                                                                                    }),
                                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 728,
                                                                                columnNumber: 29
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-900",
                                                                                children: companyDetails.address.street || '-'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 738,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                                children: "City"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 743,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: companyDetails.address.city,
                                                                                onChange: (e)=>setCompanyDetails({
                                                                                        ...companyDetails,
                                                                                        address: {
                                                                                            ...companyDetails.address,
                                                                                            city: e.target.value
                                                                                        }
                                                                                    }),
                                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 745,
                                                                                columnNumber: 29
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-900",
                                                                                children: companyDetails.address.city || '-'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 755,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 742,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                                children: "State/Province"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 760,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: companyDetails.address.state,
                                                                                onChange: (e)=>setCompanyDetails({
                                                                                        ...companyDetails,
                                                                                        address: {
                                                                                            ...companyDetails.address,
                                                                                            state: e.target.value
                                                                                        }
                                                                                    }),
                                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 762,
                                                                                columnNumber: 29
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-900",
                                                                                children: companyDetails.address.state || '-'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 772,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 759,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                                children: "ZIP/Postal Code"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 777,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: companyDetails.address.zipCode,
                                                                                onChange: (e)=>setCompanyDetails({
                                                                                        ...companyDetails,
                                                                                        address: {
                                                                                            ...companyDetails.address,
                                                                                            zipCode: e.target.value
                                                                                        }
                                                                                    }),
                                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 779,
                                                                                columnNumber: 29
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-900",
                                                                                children: companyDetails.address.zipCode || '-'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 789,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 776,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                                children: "Country"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 794,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                value: companyDetails.address.country,
                                                                                onChange: (e)=>setCompanyDetails({
                                                                                        ...companyDetails,
                                                                                        address: {
                                                                                            ...companyDetails.address,
                                                                                            country: e.target.value
                                                                                        }
                                                                                    }),
                                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "India",
                                                                                        children: "India"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                        lineNumber: 804,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "United States",
                                                                                        children: "United States"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                        lineNumber: 805,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "United Kingdom",
                                                                                        children: "United Kingdom"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                        lineNumber: 806,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "Canada",
                                                                                        children: "Canada"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                        lineNumber: 807,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "Australia",
                                                                                        children: "Australia"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                        lineNumber: 808,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "Other",
                                                                                        children: "Other"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                        lineNumber: 809,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 796,
                                                                                columnNumber: 29
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-900",
                                                                                children: companyDetails.address.country || '-'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 812,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 793,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 724,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 722,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                lineNumber: 607,
                                                columnNumber: 19
                                            }, this),
                                            activeSection === 'specializations' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Years of Experience in Recruitment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 824,
                                                                columnNumber: 23
                                                            }, this),
                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "0",
                                                                max: "50",
                                                                value: experienceInRecruitment,
                                                                onChange: (e)=>setExperienceInRecruitment(e.target.value),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 826,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-900",
                                                                children: [
                                                                    experienceInRecruitment,
                                                                    " years"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 835,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 823,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Specializations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 840,
                                                                columnNumber: 23
                                                            }, this),
                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: newSpecialization,
                                                                                onChange: (e)=>setNewSpecialization(e.target.value),
                                                                                onKeyPress: (e)=>e.key === 'Enter' && handleAddSpecialization(),
                                                                                placeholder: "e.g., IT Recruitment, Executive Search",
                                                                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 844,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: handleAddSpecialization,
                                                                                className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                                                                                children: "Add"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 852,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 843,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: specializations.map((spec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: spec
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                        lineNumber: 865,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleRemoveSpecialization(spec),
                                                                                        className: "text-blue-700 hover:text-blue-900",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                            lineNumber: 870,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                        lineNumber: 866,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, idx, true, {
                                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                                lineNumber: 861,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 859,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 842,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: specializations.length > 0 ? specializations.map((spec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm",
                                                                        children: spec
                                                                    }, idx, false, {
                                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                        lineNumber: 880,
                                                                        columnNumber: 31
                                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600",
                                                                    children: "No specializations added"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                    lineNumber: 885,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 877,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 839,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                lineNumber: 822,
                                                columnNumber: 19
                                            }, this),
                                            activeSection === 'social' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "LinkedIn Profile"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 897,
                                                                columnNumber: 23
                                                            }, this),
                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "url",
                                                                value: socialProfiles.linkedin,
                                                                onChange: (e)=>setSocialProfiles({
                                                                        ...socialProfiles,
                                                                        linkedin: e.target.value
                                                                    }),
                                                                placeholder: "https://linkedin.com/in/yourprofile",
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 899,
                                                                columnNumber: 25
                                                            }, this) : socialProfiles.linkedin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: socialProfiles.linkedin,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "text-blue-600 hover:underline",
                                                                children: socialProfiles.linkedin
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 907,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 916,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 896,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Twitter Profile"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 921,
                                                                columnNumber: 23
                                                            }, this),
                                                            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "url",
                                                                value: socialProfiles.twitter,
                                                                onChange: (e)=>setSocialProfiles({
                                                                        ...socialProfiles,
                                                                        twitter: e.target.value
                                                                    }),
                                                                placeholder: "https://twitter.com/yourprofile",
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 923,
                                                                columnNumber: 25
                                                            }, this) : socialProfiles.twitter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: socialProfiles.twitter,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "text-blue-600 hover:underline",
                                                                children: socialProfiles.twitter
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 931,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                                lineNumber: 940,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                        lineNumber: 920,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                                lineNumber: 895,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
            lineNumber: 355,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(components)/RecruiterProfile/page.jsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_s(RecruiterProfile, "h40X2ghgJKkMV8qJLYo5CLj73BA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RecruiterProfile;
var _c;
__turbopack_context__.k.register(_c, "RecruiterProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28components%29_RecruiterProfile_page_jsx_46f2d64e._.js.map