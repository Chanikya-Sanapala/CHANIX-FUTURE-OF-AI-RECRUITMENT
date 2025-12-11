(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(components)/JobseekerProfile/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobseekerProfile
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
function JobseekerProfile() {
    var _basicDetails_address_split_, _basicDetails_address, _sectionsData_languages, _sectionsData_internship, _sectionsData_projects, _profileSections_find, _profileSections_find1;
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('basic');
    const [profileImage, setProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sectionsData, setSectionsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        education: [],
        skills: [],
        internship: [],
        position: [],
        projects: [],
        accomplishments: [],
        competitiveExams: [],
        academicAchievements: [],
        volunteering: [],
        extraCurricular: [],
        languages: [],
        preferences: {
            desiredJobType: '',
            preferredLocation: '',
            availability: ''
        },
        summary: ''
    });
    const [basicDetails, setBasicDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        studentId: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        dob: ''
    });
    const [newSkill, setNewSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        proficiency: 'Beginner'
    });
    const [newLanguage, setNewLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        proficiency: 'Basic'
    });
    const [newProject, setNewProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        link: '',
        tech: '',
        start: '',
        end: '',
        role: '',
        achievements: ''
    });
    const [newEducation, setNewEducation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        institute: '',
        degree: '',
        field: '',
        start: '',
        end: ''
    });
    const [newInternship, setNewInternship] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        company: '',
        role: '',
        start: '',
        end: '',
        summary: ''
    });
    const [newCompetitiveExam, setNewCompetitiveExam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        examName: '',
        year: '',
        score: '',
        rank: ''
    });
    const [newAcademicAchievement, setNewAcademicAchievement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        year: '',
        description: ''
    });
    const [newGeneric, setNewGeneric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        date: '',
        organization: '',
        role: '',
        start: '',
        end: '',
        issuer: '',
        certificateLink: ''
    });
    const [resumeFile, setResumeFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resumeInfo, setResumeInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        url: '',
        uploadDate: null,
        size: null
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview'); // 'overview' | 'edit'
    // Completion calculation
    const completion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "JobseekerProfile.useMemo[completion]": ()=>{
            var _basicDetails_fullName, _basicDetails_email, _basicDetails_phone, _basicDetails_address, _basicDetails_gender, _basicDetails_dob, _sectionsData_preferences_desiredJobType, _sectionsData_preferences_preferredLocation, _sectionsData_preferences_availability, _sectionsData_summary, _resumeInfo_name;
            let total = 0;
            let filled = 0;
            const add = {
                "JobseekerProfile.useMemo[completion].add": (isFilled)=>{
                    total += 1;
                    if (isFilled) filled += 1;
                }
            }["JobseekerProfile.useMemo[completion].add"];
            // Basic
            add(!!((_basicDetails_fullName = basicDetails.fullName) === null || _basicDetails_fullName === void 0 ? void 0 : _basicDetails_fullName.trim()));
            add(!!((_basicDetails_email = basicDetails.email) === null || _basicDetails_email === void 0 ? void 0 : _basicDetails_email.trim()));
            add(!!((_basicDetails_phone = basicDetails.phone) === null || _basicDetails_phone === void 0 ? void 0 : _basicDetails_phone.trim()));
            add(!!((_basicDetails_address = basicDetails.address) === null || _basicDetails_address === void 0 ? void 0 : _basicDetails_address.trim()));
            add(!!((_basicDetails_gender = basicDetails.gender) === null || _basicDetails_gender === void 0 ? void 0 : _basicDetails_gender.trim()));
            add(!!((_basicDetails_dob = basicDetails.dob) === null || _basicDetails_dob === void 0 ? void 0 : _basicDetails_dob.trim()));
            add(!!profileImage);
            // Preferences
            add(!!((_sectionsData_preferences_desiredJobType = sectionsData.preferences.desiredJobType) === null || _sectionsData_preferences_desiredJobType === void 0 ? void 0 : _sectionsData_preferences_desiredJobType.trim()));
            add(!!((_sectionsData_preferences_preferredLocation = sectionsData.preferences.preferredLocation) === null || _sectionsData_preferences_preferredLocation === void 0 ? void 0 : _sectionsData_preferences_preferredLocation.trim()));
            add(!!((_sectionsData_preferences_availability = sectionsData.preferences.availability) === null || _sectionsData_preferences_availability === void 0 ? void 0 : _sectionsData_preferences_availability.trim()));
            // Lists
            add((sectionsData.education || []).length > 0);
            add((sectionsData.skills || []).length > 0);
            add((sectionsData.languages || []).length > 0);
            add((sectionsData.internship || []).length > 0);
            add((sectionsData.projects || []).length > 0);
            add((sectionsData.competitiveExams || []).length > 0);
            add((sectionsData.academicAchievements || []).length > 0);
            // Summary
            add(!!((_sectionsData_summary = sectionsData.summary) === null || _sectionsData_summary === void 0 ? void 0 : _sectionsData_summary.trim()));
            // Resume
            add(!!((_resumeInfo_name = resumeInfo.name) === null || _resumeInfo_name === void 0 ? void 0 : _resumeInfo_name.trim()));
            const pct = total ? Math.round(filled / total * 100) : 0;
            return {
                pct,
                missing: Math.max(0, total - filled)
            };
        }
    }["JobseekerProfile.useMemo[completion]"], [
        basicDetails,
        profileImage,
        sectionsData,
        resumeInfo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobseekerProfile.useEffect": ()=>{
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
                    const u = JSON.parse(storedUser);
                    setUser(u);
                    const fullName = [
                        u === null || u === void 0 ? void 0 : u.firstName,
                        u === null || u === void 0 ? void 0 : u.lastName
                    ].filter(Boolean).join(' ') || (u === null || u === void 0 ? void 0 : u.username) || ((u === null || u === void 0 ? void 0 : u.email) ? u.email.split('@')[0] : '');
                    setBasicDetails({
                        "JobseekerProfile.useEffect": (prev)=>({
                                ...prev,
                                fullName,
                                email: (u === null || u === void 0 ? void 0 : u.email) || ''
                            })
                    }["JobseekerProfile.useEffect"]);
                    const userId = u._id || u.id || u.email || 'default';
                    const img = localStorage.getItem("profileImageUrl_".concat(userId));
                    if (img) setProfileImage(img);
                }
            } catch (_) {}
        }
    }["JobseekerProfile.useEffect"], [
        router
    ]);
    // Load existing profile from backend when user is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobseekerProfile.useEffect": ()=>{
            if (!user) return;
            const load = {
                "JobseekerProfile.useEffect.load": async ()=>{
                    try {
                        const base = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                        const url = base ? "".concat(base, "/api/profile/get") : "/api/profile/get";
                        const res = await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                userId: user._id || user.id,
                                userType: 'jobseeker'
                            }),
                            credentials: 'include'
                        });
                        const json = await res.json().catch({
                            "JobseekerProfile.useEffect.load": ()=>({})
                        }["JobseekerProfile.useEffect.load"]);
                        if ((json === null || json === void 0 ? void 0 : json.success) && json.data) {
                            var _p_preferences_jobTypes, _p_preferences, _p_preferences_preferredLocations, _p_preferences1, _p_preferences_expectedSalary, _p_preferences2, _p_preferences_workModes, _p_preferences3, _p_preferences_workModes1, _p_preferences4, _p_preferences_workModes2, _p_preferences5;
                            const u = json.data.user || {};
                            const p = json.data.profile || {};
                            // Basic details (combine User and JobSeekerProfile fields)
                            const fullName = u.fullName || [
                                u.firstName,
                                u.lastName
                            ].filter(Boolean).join(' ') || u.username || (u.email ? u.email.split('@')[0] : '') || basicDetails.fullName;
                            setBasicDetails({
                                "JobseekerProfile.useEffect.load": (prev)=>{
                                    var _p_address;
                                    return {
                                        ...prev,
                                        fullName: fullName || prev.fullName || '',
                                        email: u.email || prev.email || '',
                                        phone: p.phone || prev.phone || '',
                                        address: (typeof p.address === 'string' ? p.address : ((_p_address = p.address) === null || _p_address === void 0 ? void 0 : _p_address.street) || '') || prev.address || '',
                                        gender: p.gender || prev.gender || '',
                                        dob: (p.dateOfBirth ? String(p.dateOfBirth).slice(0, 10) : '') || prev.dob || ''
                                    };
                                }
                            }["JobseekerProfile.useEffect.load"]);
                            // Profile image with fallbacks (use profilePicture from JobSeekerProfile)
                            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                            const apiImg = p.profilePicture || p.profileImage || p.avatar || p.avatarUrl || p.imageUrl || p.profilePhoto || '';
                            const userId = u._id || u.id || u.email || 'default';
                            if (apiImg) {
                                const fullImg = apiImg.startsWith('http') ? apiImg : baseUrl ? "".concat(baseUrl).concat(apiImg) : apiImg;
                                setProfileImage(fullImg);
                                if ("TURBOPACK compile-time truthy", 1) localStorage.setItem("profileImageUrl_".concat(userId), fullImg);
                            } else if ("TURBOPACK compile-time truthy", 1) {
                                const localImg = localStorage.getItem("profileImageUrl_".concat(userId));
                                if (localImg) setProfileImage(localImg);
                            }
                            // Load resume info
                            const resumeData = p.resume;
                            if (resumeData && resumeData.filepath) {
                                const path = resumeData.filePath || resumeData.path;
                                if (path) {
                                    const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                                    const resumeUrl = path.startsWith('http') ? path : "".concat(baseUrl).concat(path);
                                    setResumeInfo({
                                        name: resumeData.fileName || resumeData.originalName || '',
                                        url: resumeUrl,
                                        uploadDate: resumeData.uploadedAt || resumeData.uploadDate,
                                        size: resumeData.size // Schema doesn't have size, might be missing
                                    });
                                }
                            }
                            // Helper to format YYYY-MM
                            const fmtDate = {
                                "JobseekerProfile.useEffect.load.fmtDate": (d)=>d ? new Date(d).toISOString().slice(0, 7) : ''
                            }["JobseekerProfile.useEffect.load.fmtDate"];
                            setSectionsData({
                                education: Array.isArray(p.education) ? p.education.map({
                                    "JobseekerProfile.useEffect.load": (e)=>({
                                            id: e._id || Date.now(),
                                            institute: e.institution,
                                            degree: e.degree,
                                            field: e.fieldOfStudy,
                                            start: fmtDate(e.startDate),
                                            end: fmtDate(e.endDate)
                                        })
                                }["JobseekerProfile.useEffect.load"]) : [],
                                skills: Array.isArray(p.skills) ? p.skills.map({
                                    "JobseekerProfile.useEffect.load": (s)=>({
                                            id: s._id || Date.now(),
                                            title: s.skillName,
                                            name: s.skillName,
                                            proficiency: s.proficiencyLevel ? s.proficiencyLevel.charAt(0).toUpperCase() + s.proficiencyLevel.slice(1) : 'Intermediate',
                                            description: "Proficiency: ".concat(s.proficiencyLevel ? s.proficiencyLevel.charAt(0).toUpperCase() + s.proficiencyLevel.slice(1) : 'Intermediate')
                                        })
                                }["JobseekerProfile.useEffect.load"]) : [],
                                internship: Array.isArray(p.experience) ? p.experience.map({
                                    "JobseekerProfile.useEffect.load": (exp)=>({
                                            id: exp._id || Date.now(),
                                            company: exp.company,
                                            role: exp.jobTitle,
                                            start: fmtDate(exp.startDate),
                                            end: fmtDate(exp.endDate),
                                            summary: exp.description
                                        })
                                }["JobseekerProfile.useEffect.load"]) : [],
                                projects: Array.isArray(p.projects) ? p.projects.map({
                                    "JobseekerProfile.useEffect.load": (proj)=>({
                                            id: proj._id || Date.now(),
                                            title: proj.title,
                                            description: proj.description,
                                            tech: Array.isArray(proj.technologies) ? proj.technologies.join(', ') : '',
                                            link: proj.projectUrl,
                                            start: fmtDate(proj.startDate),
                                            end: fmtDate(proj.endDate)
                                        })
                                }["JobseekerProfile.useEffect.load"]) : [],
                                languages: Array.isArray(p.languages) ? p.languages.map({
                                    "JobseekerProfile.useEffect.load": (l)=>({
                                            id: l._id || Date.now(),
                                            title: l.language,
                                            name: l.language,
                                            proficiency: l.proficiency ? l.proficiency.charAt(0).toUpperCase() + l.proficiency.slice(1) : 'Conversational',
                                            description: "Proficiency: ".concat(l.proficiency ? l.proficiency.charAt(0).toUpperCase() + l.proficiency.slice(1) : 'Conversational')
                                        })
                                }["JobseekerProfile.useEffect.load"]) : [],
                                competitiveExams: Array.isArray(p.competitiveExams) ? p.competitiveExams : [],
                                academicAchievements: Array.isArray(p.academicAchievements) ? p.academicAchievements : [],
                                accomplishments: Array.isArray(p.accomplishments) ? p.accomplishments : [],
                                position: Array.isArray(p.position) ? p.position : [],
                                volunteering: Array.isArray(p.volunteering) ? p.volunteering : [],
                                extraCurricular: Array.isArray(p.extraCurricular) ? p.extraCurricular : [],
                                preferences: {
                                    desiredJobType: ((_p_preferences = p.preferences) === null || _p_preferences === void 0 ? void 0 : (_p_preferences_jobTypes = _p_preferences.jobTypes) === null || _p_preferences_jobTypes === void 0 ? void 0 : _p_preferences_jobTypes[0]) || '',
                                    preferredLocation: ((_p_preferences1 = p.preferences) === null || _p_preferences1 === void 0 ? void 0 : (_p_preferences_preferredLocations = _p_preferences1.preferredLocations) === null || _p_preferences_preferredLocations === void 0 ? void 0 : _p_preferences_preferredLocations.join(', ')) || '',
                                    availability: '',
                                    expectedSalary: ((_p_preferences2 = p.preferences) === null || _p_preferences2 === void 0 ? void 0 : (_p_preferences_expectedSalary = _p_preferences2.expectedSalary) === null || _p_preferences_expectedSalary === void 0 ? void 0 : _p_preferences_expectedSalary.min) || '',
                                    remote: ((_p_preferences3 = p.preferences) === null || _p_preferences3 === void 0 ? void 0 : (_p_preferences_workModes = _p_preferences3.workModes) === null || _p_preferences_workModes === void 0 ? void 0 : _p_preferences_workModes.includes('remote')) ? 'remote' : ((_p_preferences4 = p.preferences) === null || _p_preferences4 === void 0 ? void 0 : (_p_preferences_workModes1 = _p_preferences4.workModes) === null || _p_preferences_workModes1 === void 0 ? void 0 : _p_preferences_workModes1.includes('hybrid')) ? 'hybrid' : ((_p_preferences5 = p.preferences) === null || _p_preferences5 === void 0 ? void 0 : (_p_preferences_workModes2 = _p_preferences5.workModes) === null || _p_preferences_workModes2 === void 0 ? void 0 : _p_preferences_workModes2.includes('on-site')) ? 'onsite' : '',
                                    desiredRoles: '',
                                    industries: '' // Not in schema
                                },
                                summary: p.summary || ''
                            });
                        }
                    } catch (_) {
                        console.error(_);
                    }
                }
            }["JobseekerProfile.useEffect.load"];
            load();
        }
    }["JobseekerProfile.useEffect"], [
        user
    ]);
    const profileSections = [
        {
            id: 'basic',
            label: 'Basic Details'
        },
        {
            id: 'preferences',
            label: 'Career Preferences'
        },
        {
            id: 'education',
            label: 'Education Details'
        },
        {
            id: 'internship',
            label: 'Internship & Work Ex'
        },
        {
            id: 'skills',
            label: 'Skills, Subjects & Languages'
        },
        {
            id: 'languages',
            label: 'Languages'
        },
        {
            id: 'position',
            label: 'Position of Responsibilities'
        },
        {
            id: 'projects',
            label: 'Projects'
        },
        {
            id: 'accomplishments',
            label: 'Accomplishments'
        },
        {
            id: 'volunteering',
            label: 'Volunteering'
        },
        {
            id: 'extra-curricular',
            label: 'Extra-curricular Activities'
        },
        {
            id: 'competitive-exams',
            label: 'Competitive Exams'
        },
        {
            id: 'academic-achievements',
            label: 'Academic Achievements'
        },
        {
            id: 'profile-summary',
            label: 'Profile Summary'
        },
        {
            id: 'resume',
            label: 'Resume'
        }
    ];
    const goToEdit = (sectionId)=>{
        setActiveSection(sectionId);
        setMode('edit');
        if ("TURBOPACK compile-time truthy", 1) {
            requestAnimationFrame(()=>{
                const el = document.getElementById('editor-root');
                if (el) el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    };
    const uploadAvatar = async (file)=>{
        const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const url = baseUrl ? "".concat(baseUrl, "/api/profile/upload-photo") : "/api/profile/upload-photo";
        const fd = new FormData();
        fd.append('file', file);
        if ((user === null || user === void 0 ? void 0 : user._id) || (user === null || user === void 0 ? void 0 : user.id)) fd.append('userId', user._id || user.id);
        fd.append('userType', 'jobseeker');
        const token = localStorage.getItem('token');
        const headers = {};
        if (token) headers['Authorization'] = "Bearer ".concat(token);
        const res = await fetch(url, {
            method: 'POST',
            body: fd,
            headers: headers
        });
        if (!res.ok) throw new Error('upload failed');
        return res.json().catch(()=>({}));
    };
    const handleImageChange = async (event)=>{
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e)=>{
            setProfileImage(e.target.result);
        };
        reader.readAsDataURL(file);
        try {
            var _result_data;
            const result = await uploadAvatar(file);
            const url = (result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.url) || (result === null || result === void 0 ? void 0 : result.url) || (result === null || result === void 0 ? void 0 : result.path) || null;
            if (url) {
                const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
                const fullUrl = url.startsWith('http') ? url : baseUrl ? "".concat(baseUrl).concat(url) : url;
                setProfileImage(fullUrl);
                if ("TURBOPACK compile-time truthy", 1) {
                    const storedUser = localStorage.getItem('user');
                    let userId = 'default';
                    if (storedUser) {
                        try {
                            const u = JSON.parse(storedUser);
                            userId = u._id || u.id || u.email || userId;
                        } catch (_) {}
                    }
                    localStorage.setItem("profileImageUrl_".concat(userId), fullUrl);
                }
            }
        } catch (_) {
            alert('Failed to upload photo. Please try again.');
        }
    };
    // Resume upload functions
    const handleResumeChange = (event)=>{
        const file = event.target.files[0];
        if (!file) return;
        // Validate file type
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        if (!allowedTypes.includes(file.type)) {
            alert('Please upload only PDF, DOC, or DOCX files.');
            return;
        }
        // Validate file size (10MB max)
        const maxSize = 10 * 1024 * 1024;
        if (file.size > maxSize) {
            alert('File too large. Maximum size is 10MB.');
            return;
        }
        setResumeFile(file);
        setResumeInfo({
            name: file.name,
            url: '',
            uploadDate: new Date(),
            size: file.size
        });
    };
    const uploadResume = async ()=>{
        if (!resumeFile || !user) return null;
        try {
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const token = localStorage.getItem('token');
            const fd = new FormData();
            fd.append('file', resumeFile);
            fd.append('userId', user._id || user.id);
            const res = await fetch("".concat(baseUrl, "/api/profile/upload-resume"), {
                method: 'POST',
                body: fd,
                headers: {
                    'Authorization': "Bearer ".concat(token)
                }
            });
            const result = await res.json();
            if (result.success) {
                const resumeData = result.data.resume;
                const resumeUrl = resumeData.path.startsWith('http') ? resumeData.path : "".concat(baseUrl).concat(resumeData.path);
                setResumeInfo({
                    name: resumeData.originalName || resumeFile.name,
                    url: resumeUrl,
                    uploadDate: resumeData.uploadDate,
                    size: resumeData.size
                });
                setResumeFile(null);
                return result.data.resume;
            } else {
                throw new Error(result.message || 'Failed to upload resume');
            }
        } catch (error) {
            console.error('Resume upload error:', error);
            throw error;
        }
    };
    const handleRemoveResume = async ()=>{
        if (!user || !resumeInfo.name) return;
        if (!confirm('Are you sure you want to remove your resume?')) return;
        try {
            const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
            const token = localStorage.getItem('token');
            const res = await fetch("".concat(baseUrl, "/api/profile/remove-resume"), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify({
                    userId: user._id || user.id
                })
            });
            const json = await res.json();
            if (json === null || json === void 0 ? void 0 : json.success) {
                setResumeInfo({
                    name: '',
                    url: '',
                    uploadDate: null,
                    size: null
                });
                setResumeFile(null);
                alert('Resume removed successfully!');
            } else {
                alert((json === null || json === void 0 ? void 0 : json.message) || 'Failed to remove resume. Please try again.');
            }
        } catch (error) {
            console.error('Resume removal error:', error);
            alert('Failed to remove resume. Please try again.');
        }
    };
    const baseUrl = (("TURBOPACK compile-time value", "http://localhost:5000") || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
    const profileSavePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PROFILE_SAVE_PATH || '/api/profile/jobseeker';
    const normalizedProfilePath = profileSavePath.startsWith('/') ? profileSavePath : "/".concat(profileSavePath);
    const handleSave = async ()=>{
        try {
            var _sectionsData_preferences, _sectionsData_preferences1, _sectionsData_preferences2, _sectionsData_preferences3, _sectionsData_preferences4;
            // Upload resume first if there's a new file
            let resumeData = null;
            if (resumeFile) {
                try {
                    resumeData = await uploadResume();
                } catch (error) {
                    alert('Failed to upload resume: ' + error.message);
                    return;
                }
            }
            const token = "object" !== 'undefined' && localStorage.getItem('token') || '';
            // Normalize phone number to 10 digits (backend expects /^[0-9]{10}$/)
            const normalizedPhone = (basicDetails.phone || '').replace(/\D/g, '').slice(-10);
            if (normalizedPhone && normalizedPhone.length !== 10) {
                alert('Please enter a valid 10-digit phone number (digits only).');
                return;
            }
            // Normalize gender to match backend enum: 'male', 'female', 'other', 'prefer-not-to-say'
            let normalizedGender = (basicDetails.gender || '').toString().trim().toLowerCase();
            if (normalizedGender === 'prefer not to say' || normalizedGender === 'prefer-not-to-say') {
                normalizedGender = 'prefer-not-to-say';
            }
            const allowedGenders = [
                '',
                'male',
                'female',
                'other',
                'prefer-not-to-say'
            ];
            if (!allowedGenders.includes(normalizedGender)) {
                alert('Please select a valid gender option.');
                return;
            }
            // Calculate availability date
            let availabilityDate = undefined;
            const avail = (_sectionsData_preferences = sectionsData.preferences) === null || _sectionsData_preferences === void 0 ? void 0 : _sectionsData_preferences.availability;
            if (avail) {
                const now = new Date();
                if (avail === 'Immediate') {
                    availabilityDate = now;
                } else if (avail.includes('15 days')) {
                    now.setDate(now.getDate() + 15);
                    availabilityDate = now;
                } else if (avail.includes('30 days')) {
                    now.setDate(now.getDate() + 30);
                    availabilityDate = now;
                } else if (avail.includes('60 days')) {
                    now.setDate(now.getDate() + 60);
                    availabilityDate = now;
                }
            }
            // Map Internships to Experience Schema
            const experience = (sectionsData.internship || []).map((item)=>({
                    jobTitle: item.role,
                    company: item.company,
                    startDate: item.start ? new Date(item.start) : undefined,
                    endDate: item.end ? new Date(item.end) : undefined,
                    description: item.summary,
                    isCurrentJob: false // Default/Assumption
                }));
            // Map Education
            const education = (sectionsData.education || []).map((item)=>({
                    degree: item.degree,
                    institution: item.institute,
                    fieldOfStudy: item.field,
                    startDate: item.start ? new Date(item.start) : undefined,
                    endDate: item.end ? new Date(item.end) : undefined,
                    grade: '',
                    description: '' // Not in UI
                }));
            // Map Skills
            const skills = (sectionsData.skills || []).map((item)=>({
                    skillName: item.name || item.title,
                    proficiencyLevel: (item.proficiency || 'Intermediate').toLowerCase()
                }));
            // Map Projects
            const projects = (sectionsData.projects || []).map((item)=>({
                    title: item.title,
                    description: item.description,
                    technologies: item.tech ? typeof item.tech === 'string' ? item.tech.split(',') : [] : [],
                    projectUrl: item.link,
                    startDate: item.start ? new Date(item.start) : undefined,
                    endDate: item.end ? new Date(item.end) : undefined
                }));
            // Map Languages
            const languages = (sectionsData.languages || []).map((item)=>({
                    language: item.name || item.title,
                    proficiency: (item.proficiency || 'Conversational').toLowerCase()
                }));
            // Flatten payload to match backend JobSeekerProfile schema
            const payload = {
                phone: normalizedPhone || undefined,
                dateOfBirth: basicDetails.dob,
                gender: normalizedGender || undefined,
                address: basicDetails.address ? {
                    street: basicDetails.address
                } : undefined,
                profilePicture: profileImage,
                summary: sectionsData.summary,
                preferences: {
                    jobTypes: ((_sectionsData_preferences1 = sectionsData.preferences) === null || _sectionsData_preferences1 === void 0 ? void 0 : _sectionsData_preferences1.desiredJobType) ? [
                        String(sectionsData.preferences.desiredJobType).toLowerCase()
                    ] : [],
                    preferredLocations: ((_sectionsData_preferences2 = sectionsData.preferences) === null || _sectionsData_preferences2 === void 0 ? void 0 : _sectionsData_preferences2.preferredLocation) ? [
                        sectionsData.preferences.preferredLocation
                    ] : [],
                    availabilityDate: availabilityDate,
                    expectedSalary: ((_sectionsData_preferences3 = sectionsData.preferences) === null || _sectionsData_preferences3 === void 0 ? void 0 : _sectionsData_preferences3.expectedSalary) ? {
                        min: Number(sectionsData.preferences.expectedSalary) || undefined
                    } : undefined,
                    // Adding missing preference fields that might be useful
                    workModes: ((_sectionsData_preferences4 = sectionsData.preferences) === null || _sectionsData_preferences4 === void 0 ? void 0 : _sectionsData_preferences4.remote) ? [
                        sectionsData.preferences.remote
                    ] : []
                },
                experience: experience,
                education: education,
                skills: skills,
                projects: projects,
                languages: languages,
                competitiveExams: sectionsData.competitiveExams || [],
                academicAchievements: sectionsData.academicAchievements || [],
                ...resumeData && {
                    resume: resumeData
                }
            };
            const requestUrl = baseUrl ? "".concat(baseUrl).concat(normalizedProfilePath) : "".concat(normalizedProfilePath);
            const res = await fetch(requestUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...token ? {
                        Authorization: "Bearer ".concat(token)
                    } : {}
                },
                body: JSON.stringify(payload),
                credentials: 'include'
            });
            const contentType = res.headers.get('content-type') || '';
            if (!res.ok) {
                const errText = await res.text().catch(()=>'');
                alert("Save failed (".concat(res.status, "). ").concat(errText || 'No error body returned.'));
                return;
            }
            const data = contentType.includes('application/json') ? await res.json().catch(()=>({})) : {};
            alert((data === null || data === void 0 ? void 0 : data.message) || 'Profile saved successfully.');
        } catch (e) {
            alert("Unable to save profile. ".concat((e === null || e === void 0 ? void 0 : e.message) || '').trim());
        }
    };
    const handleBackToDashboard = ()=>{
        router.push('/jobseeker-dashboard');
    };
    const handleAddItem = (section)=>{
        const newItem = {
            id: Date.now(),
            title: "New ".concat(section.label),
            description: 'Description goes here...',
            date: new Date().toISOString().split('T')[0]
        };
        setSectionsData((prev)=>({
                ...prev,
                [section.id]: [
                    ...prev[section.id],
                    newItem
                ]
            }));
    };
    const handleRemoveItem = (section, itemId)=>{
        setSectionsData((prev)=>({
                ...prev,
                [section.id]: prev[section.id].filter((item)=>item.id !== itemId)
            }));
    };
    const sectionKey = (id)=>{
        if (id === 'extra-curricular') return 'extraCurricular';
        if (id === 'competitive-exams') return 'competitiveExams';
        if (id === 'academic-achievements') return 'academicAchievements';
        return id;
    };
    const updateItem = (sectionId, itemId, patch)=>{
        const key = sectionKey(sectionId);
        setSectionsData((prev)=>({
                ...prev,
                [key]: (prev[key] || []).map((it)=>it.id === itemId ? {
                        ...it,
                        ...patch
                    } : it)
            }));
    };
    const renderSectionContent = ()=>{
        switch(activeSection){
            case 'preferences':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-indigo-50 border border-indigo-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-indigo-900 mb-2",
                                    children: "Career Preferences"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 652,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-indigo-700 text-sm",
                                    children: "Tell us what roles and locations you prefer. This helps surface better matches."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 653,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 651,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Desired Job Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 657,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sectionsData.preferences.desiredJobType,
                                            onChange: (e)=>setSectionsData((prev)=>({
                                                        ...prev,
                                                        preferences: {
                                                            ...prev.preferences,
                                                            desiredJobType: e.target.value
                                                        }
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 663,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Full-time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 664,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Part-time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 665,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Contract"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 666,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Internship"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 667,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Freelance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 668,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 658,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 656,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Preferred Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 672,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: sectionsData.preferences.preferredLocation,
                                            onChange: (e)=>setSectionsData((prev)=>({
                                                        ...prev,
                                                        preferences: {
                                                            ...prev.preferences,
                                                            preferredLocation: e.target.value
                                                        }
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., Bangalore, Remote"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 673,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 671,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Availability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 681,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sectionsData.preferences.availability,
                                            onChange: (e)=>setSectionsData((prev)=>({
                                                        ...prev,
                                                        preferences: {
                                                            ...prev.preferences,
                                                            availability: e.target.value
                                                        }
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 687,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Immediate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 688,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "15 days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 689,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "30 days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 690,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "60 days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 691,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 682,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 680,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Expected Salary (₹ per annum)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 695,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: sectionsData.preferences.expectedSalary || '',
                                            onChange: (e)=>setSectionsData((prev)=>({
                                                        ...prev,
                                                        preferences: {
                                                            ...prev.preferences,
                                                            expectedSalary: e.target.value
                                                        }
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., 600000"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 696,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 694,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Remote Preference"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 705,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sectionsData.preferences.remote || '',
                                            onChange: (e)=>setSectionsData((prev)=>({
                                                        ...prev,
                                                        preferences: {
                                                            ...prev.preferences,
                                                            remote: e.target.value
                                                        }
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "No preference"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 711,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "remote",
                                                    children: "Remote"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 712,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "hybrid",
                                                    children: "Hybrid"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 713,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "onsite",
                                                    children: "Onsite"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 714,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 706,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 704,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Desired Roles (comma-separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: sectionsData.preferences.desiredRoles || '',
                                            onChange: (e)=>setSectionsData((prev)=>({
                                                        ...prev,
                                                        preferences: {
                                                            ...prev.preferences,
                                                            desiredRoles: e.target.value
                                                        }
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., Frontend Developer, UI Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 719,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 717,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Industries of Interest (comma-separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 727,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: sectionsData.preferences.industries || '',
                                            onChange: (e)=>setSectionsData((prev)=>({
                                                        ...prev,
                                                        preferences: {
                                                            ...prev.preferences,
                                                            industries: e.target.value
                                                        }
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., FinTech, SaaS, E-commerce"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 728,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 726,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 655,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 650,
                    columnNumber: 11
                }, this);
            case 'projects':
                var _sectionsData_projects;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-orange-50 border border-orange-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-orange-900 mb-2",
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 743,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-orange-700 text-sm",
                                    children: "Add academic or personal projects with responsibilities and outcomes."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 744,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 742,
                            columnNumber: 13
                        }, this),
                        ((_sectionsData_projects = sectionsData.projects) === null || _sectionsData_projects === void 0 ? void 0 : _sectionsData_projects.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-black text-lg",
                                    children: "Your Projects"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 748,
                                    columnNumber: 17
                                }, this),
                                sectionsData.projects.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-4 bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 grid grid-cols-1 md:grid-cols-2 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Title"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 754,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.title || '',
                                                                    onChange: (e)=>updateItem('projects', item.id, {
                                                                            title: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 755,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 753,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Link"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 758,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.link || '',
                                                                    onChange: (e)=>updateItem('projects', item.id, {
                                                                            link: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 759,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 757,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Technologies"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 762,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.tech || '',
                                                                    onChange: (e)=>updateItem('projects', item.id, {
                                                                            tech: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 763,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 761,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "Start"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 767,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "month",
                                                                            value: item.start || '',
                                                                            onChange: (e)=>updateItem('projects', item.id, {
                                                                                    start: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 768,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 766,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "End"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 771,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "month",
                                                                            value: item.end || '',
                                                                            onChange: (e)=>updateItem('projects', item.id, {
                                                                                    end: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 772,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 765,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Role"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 776,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.role || '',
                                                                    onChange: (e)=>updateItem('projects', item.id, {
                                                                            role: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 777,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 775,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 780,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    value: item.description || '',
                                                                    onChange: (e)=>updateItem('projects', item.id, {
                                                                            description: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded",
                                                                    rows: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 781,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 779,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Achievements"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 784,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    value: item.achievements || '',
                                                                    onChange: (e)=>updateItem('projects', item.id, {
                                                                            achievements: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded",
                                                                    rows: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 785,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 783,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 752,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSectionsData((prev)=>({
                                                                ...prev,
                                                                projects: prev.projects.filter((p)=>p.id !== item.id)
                                                            })),
                                                    className: "text-red-600 hover:text-red-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 789,
                                                            columnNumber: 104
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 789,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 788,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 751,
                                            columnNumber: 21
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 750,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 747,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Project Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 798,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newProject.title,
                                            onChange: (e)=>setNewProject((prev)=>({
                                                        ...prev,
                                                        title: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., Smart Attendance System"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 799,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 797,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Project Link"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 802,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newProject.link,
                                            onChange: (e)=>setNewProject((prev)=>({
                                                        ...prev,
                                                        link: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "GitHub/Live URL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 803,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 801,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Technologies"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 806,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newProject.tech,
                                            onChange: (e)=>setNewProject((prev)=>({
                                                        ...prev,
                                                        tech: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., React, Node.js, MongoDB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 807,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 805,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Start"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 811,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "month",
                                                    value: newProject.start,
                                                    onChange: (e)=>setNewProject((prev)=>({
                                                                ...prev,
                                                                start: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 812,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 810,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "End"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 815,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "month",
                                                    value: newProject.end,
                                                    onChange: (e)=>setNewProject((prev)=>({
                                                                ...prev,
                                                                end: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 816,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 814,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 809,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 820,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newProject.role,
                                            onChange: (e)=>setNewProject((prev)=>({
                                                        ...prev,
                                                        role: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., Frontend Developer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 821,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 819,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 824,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: newProject.description,
                                            onChange: (e)=>setNewProject((prev)=>({
                                                        ...prev,
                                                        description: e.target.value
                                                    })),
                                            rows: "3",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "Brief project summary and scope"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 825,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 823,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Key Achievements"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 828,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: newProject.achievements,
                                            onChange: (e)=>setNewProject((prev)=>({
                                                        ...prev,
                                                        achievements: e.target.value
                                                    })),
                                            rows: "2",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., Improved performance by 30%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 829,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 827,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (!newProject.title.trim()) return;
                                            const item = {
                                                id: Date.now(),
                                                ...newProject,
                                                title: newProject.title.trim()
                                            };
                                            setSectionsData((prev)=>({
                                                    ...prev,
                                                    projects: [
                                                        item,
                                                        ...prev.projects || []
                                                    ]
                                                }));
                                            setNewProject({
                                                title: '',
                                                description: '',
                                                link: '',
                                                tech: '',
                                                start: '',
                                                end: '',
                                                role: '',
                                                achievements: ''
                                            });
                                        },
                                        className: "bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium",
                                        children: "+ Add Project"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 832,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 831,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 796,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 741,
                    columnNumber: 11
                }, this);
            case 'basic':
                var _basicDetails_fullName_trim_, _basicDetails_fullName_trim, _basicDetails_fullName;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border border-gray-300",
                                            children: profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: profileImage,
                                                alt: "Profile",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 854,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-semibold text-gray-600",
                                                children: ((_basicDetails_fullName = basicDetails.fullName) === null || _basicDetails_fullName === void 0 ? void 0 : (_basicDetails_fullName_trim = _basicDetails_fullName.trim()) === null || _basicDetails_fullName_trim === void 0 ? void 0 : (_basicDetails_fullName_trim_ = _basicDetails_fullName_trim[0]) === null || _basicDetails_fullName_trim_ === void 0 ? void 0 : _basicDetails_fullName_trim_.toUpperCase()) || 'U'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 860,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 852,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "profile-photo-input",
                                            className: "absolute bottom-0 right-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs cursor-pointer border border-white shadow",
                                            children: "📷"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 865,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "profile-photo-input",
                                            type: "file",
                                            accept: "image/*",
                                            onChange: handleImageChange,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 871,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 851,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-black font-medium",
                                            children: "Profile Photo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 880,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-black",
                                            children: "Upload a clear headshot. This will appear in your dashboard and profile."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 881,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 879,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 850,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 886,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "Enter your full name",
                                            value: basicDetails.fullName,
                                            onChange: (e)=>setBasicDetails((prev)=>({
                                                        ...prev,
                                                        fullName: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 887,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 885,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Student ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 896,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "Enter your student ID",
                                            value: basicDetails.studentId,
                                            onChange: (e)=>setBasicDetails((prev)=>({
                                                        ...prev,
                                                        studentId: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 897,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 895,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 884,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 908,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "Enter your email",
                                            value: basicDetails.email,
                                            onChange: (e)=>setBasicDetails((prev)=>({
                                                        ...prev,
                                                        email: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 909,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 907,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Phone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 918,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "Enter your phone number",
                                            value: basicDetails.phone,
                                            onChange: (e)=>setBasicDetails((prev)=>({
                                                        ...prev,
                                                        phone: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 919,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 917,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 906,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Gender"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 930,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            value: basicDetails.gender,
                                            onChange: (e)=>setBasicDetails((prev)=>({
                                                        ...prev,
                                                        gender: e.target.value
                                                    })),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 936,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Female"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 937,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Male"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 938,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Non-binary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 939,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Prefer not to say"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 940,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 931,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 929,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Birthday"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 944,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            value: basicDetails.dob,
                                            onChange: (e)=>setBasicDetails((prev)=>({
                                                        ...prev,
                                                        dob: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 945,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 943,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 928,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-black mb-2",
                                    children: "Address"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 954,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                    rows: "3",
                                    placeholder: "Enter your address",
                                    value: basicDetails.address,
                                    onChange: (e)=>setBasicDetails((prev)=>({
                                                ...prev,
                                                address: e.target.value
                                            }))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 955,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 953,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 849,
                    columnNumber: 11
                }, this);
            case 'languages':
                var _sectionsData_languages;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-yellow-900 mb-2",
                                    children: "Languages"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 970,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-yellow-700 text-sm",
                                    children: "Add languages you can speak or write with proficiency."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 971,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 969,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Language"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 975,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newLanguage.name,
                                            onChange: (e)=>setNewLanguage((prev)=>({
                                                        ...prev,
                                                        name: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., English"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 976,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 974,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Proficiency"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 979,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newLanguage.proficiency,
                                            onChange: (e)=>setNewLanguage((prev)=>({
                                                        ...prev,
                                                        proficiency: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Basic"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 981,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Conversational"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 982,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Fluent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 983,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Native"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 984,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 980,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 978,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (!newLanguage.name.trim()) return;
                                            const item = {
                                                id: Date.now(),
                                                title: newLanguage.name.trim(),
                                                description: "Proficiency: ".concat(newLanguage.proficiency),
                                                name: newLanguage.name.trim(),
                                                proficiency: newLanguage.proficiency // Store raw proficiency
                                            };
                                            setSectionsData((prev)=>({
                                                    ...prev,
                                                    languages: [
                                                        item,
                                                        ...prev.languages || []
                                                    ]
                                                }));
                                            setNewLanguage({
                                                name: '',
                                                proficiency: 'Basic'
                                            });
                                        },
                                        className: "w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium",
                                        children: "+ Add Language"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 988,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 987,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 973,
                            columnNumber: 13
                        }, this),
                        ((_sectionsData_languages = sectionsData.languages) === null || _sectionsData_languages === void 0 ? void 0 : _sectionsData_languages.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-black text-lg",
                                    children: "Your Languages"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1009,
                                    columnNumber: 17
                                }, this),
                                sectionsData.languages.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-4 bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-medium text-black",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1014,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-black mt-1",
                                                            children: item.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1013,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSectionsData((prev)=>({
                                                                ...prev,
                                                                languages: prev.languages.filter((l)=>l.id !== item.id)
                                                            })),
                                                    className: "text-red-600 hover:text-red-800",
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1017,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1012,
                                            columnNumber: 21
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1011,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1008,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 968,
                    columnNumber: 11
                }, this);
            case 'profile-summary':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 border border-gray-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-black mb-2",
                                    children: "Profile Summary"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1030,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black text-sm",
                                    children: "Write a concise summary to highlight your strengths."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1031,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1029,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                            rows: "6",
                            placeholder: "e.g., Final year CS student with strong JS/React skills...",
                            value: sectionsData.summary,
                            onChange: (e)=>setSectionsData((prev)=>({
                                        ...prev,
                                        summary: e.target.value
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1033,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 1028,
                    columnNumber: 11
                }, this);
            case 'resume':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-indigo-50 border border-indigo-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-indigo-900 mb-2",
                                    children: "Resume Upload"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1047,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-indigo-700 text-sm",
                                    children: "Upload your resume to showcase your qualifications to employers."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1048,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1046,
                            columnNumber: 13
                        }, this),
                        resumeInfo.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-gray-200 rounded-lg p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-600 font-semibold text-sm",
                                                    children: "PDF"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1057,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1056,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium text-black",
                                                        children: resumeInfo.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 23
                                                    }, this),
                                                    resumeInfo.uploadDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-black",
                                                        children: [
                                                            "Uploaded ",
                                                            new Date(resumeInfo.uploadDate).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1062,
                                                        columnNumber: 25
                                                    }, this),
                                                    resumeInfo.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-black",
                                                        children: [
                                                            "Size: ",
                                                            (resumeInfo.size / 1024 / 1024).toFixed(2),
                                                            " MB"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1067,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1059,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1055,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-3",
                                        children: [
                                            resumeInfo.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: resumeInfo.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 font-medium",
                                                children: "View Resume"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1075,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleRemoveResume,
                                                className: "px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-medium",
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1084,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1073,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                lineNumber: 1054,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1053,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-2 border-dashed border-gray-300 rounded-lg p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        id: "resume-upload",
                                        accept: ".pdf,.doc,.docx",
                                        onChange: handleResumeChange,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1098,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "resume-upload",
                                        className: "cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-8 h-8 text-black",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1111,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1110,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium text-black mb-2",
                                                children: resumeInfo.name ? 'Replace Resume' : 'Upload Resume'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-black mb-4",
                                                children: "Click to browse or drag and drop your resume"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1117,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-black",
                                                children: "Supported formats: PDF, DOC, DOCX (Max 10MB)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1120,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1105,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                lineNumber: 1097,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1096,
                            columnNumber: 13
                        }, this),
                        resumeFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-600 font-semibold text-sm",
                                                    children: "NEW"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1133,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1132,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-blue-900",
                                                        children: resumeFile.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1136,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-blue-700",
                                                        children: [
                                                            "Ready to upload • ",
                                                            (resumeFile.size / 1024 / 1024).toFixed(2),
                                                            " MB"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1137,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1135,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1131,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setResumeFile(null);
                                            setResumeInfo((prev)=>({
                                                    ...prev,
                                                    name: prev.url ? prev.name : '',
                                                    uploadDate: prev.url ? prev.uploadDate : null,
                                                    size: prev.url ? prev.size : null
                                                }));
                                        },
                                        className: "text-blue-600 hover:text-blue-800",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1142,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                lineNumber: 1130,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1129,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 1045,
                    columnNumber: 11
                }, this);
            case 'education':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-blue-900 mb-2",
                                    children: "Add Your Educational Qualifications"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-700 text-sm",
                                    children: "Include your degrees, certifications, and academic achievements."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1162,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1160,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Institute"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newEducation.institute,
                                            onChange: (e)=>setNewEducation((prev)=>({
                                                        ...prev,
                                                        institute: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., ABC University"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1168,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Degree"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newEducation.degree,
                                            onChange: (e)=>setNewEducation((prev)=>({
                                                        ...prev,
                                                        degree: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., B.Tech"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1172,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Field of Study"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newEducation.field,
                                            onChange: (e)=>setNewEducation((prev)=>({
                                                        ...prev,
                                                        field: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., Computer Science"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1176,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Start"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "month",
                                                    value: newEducation.start,
                                                    onChange: (e)=>setNewEducation((prev)=>({
                                                                ...prev,
                                                                start: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1181,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "End"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "month",
                                                    value: newEducation.end,
                                                    onChange: (e)=>setNewEducation((prev)=>({
                                                                ...prev,
                                                                end: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (!newEducation.institute.trim() || !newEducation.degree.trim()) return;
                                            const item = {
                                                id: Date.now(),
                                                institute: newEducation.institute.trim(),
                                                degree: newEducation.degree.trim(),
                                                field: newEducation.field.trim(),
                                                start: newEducation.start,
                                                end: newEducation.end
                                            };
                                            setSectionsData((prev)=>({
                                                    ...prev,
                                                    education: [
                                                        item,
                                                        ...prev.education
                                                    ]
                                                }));
                                            setNewEducation({
                                                institute: '',
                                                degree: '',
                                                field: '',
                                                start: '',
                                                end: ''
                                            });
                                        },
                                        className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium",
                                        children: "+ Add Education"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1189,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1165,
                            columnNumber: 13
                        }, this),
                        sectionsData.education.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-black text-lg",
                                    children: "Your Education"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1205,
                                    columnNumber: 17
                                }, this),
                                sectionsData.education.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-4 bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 grid grid-cols-1 md:grid-cols-2 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Institute"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1211,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.institute || '',
                                                                    onChange: (e)=>updateItem('education', item.id, {
                                                                            institute: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1212,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1210,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Degree"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1215,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.degree || '',
                                                                    onChange: (e)=>updateItem('education', item.id, {
                                                                            degree: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1216,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1214,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Field"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1219,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.field || '',
                                                                    onChange: (e)=>updateItem('education', item.id, {
                                                                            field: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1220,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1218,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "Start"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1224,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "month",
                                                                            value: item.start || '',
                                                                            onChange: (e)=>updateItem('education', item.id, {
                                                                                    start: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1225,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1223,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "End"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1228,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "month",
                                                                            value: item.end || '',
                                                                            onChange: (e)=>updateItem('education', item.id, {
                                                                                    end: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1229,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1227,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1222,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRemoveItem({
                                                            id: 'education'
                                                        }, item.id),
                                                    className: "text-red-600 hover:text-red-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1234,
                                                            columnNumber: 104
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1234,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1233,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1208,
                                            columnNumber: 21
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1207,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1204,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 1159,
                    columnNumber: 11
                }, this);
            case 'skills':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 border border-green-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-green-900 mb-2",
                                    children: "Skills & Languages"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-700 text-sm",
                                    children: "List your technical skills, subjects expertise, and language proficiencies."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1249,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Skill"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newSkill.name,
                                            onChange: (e)=>setNewSkill((prev)=>({
                                                        ...prev,
                                                        name: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., React"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1254,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Proficiency"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1257,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newSkill.proficiency,
                                            onChange: (e)=>setNewSkill((prev)=>({
                                                        ...prev,
                                                        proficiency: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Beginner"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1259,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Intermediate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Advanced"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1261,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Expert"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1262,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1258,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1256,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (!newSkill.name.trim()) return;
                                            const item = {
                                                id: Date.now(),
                                                title: newSkill.name.trim(),
                                                description: "Proficiency: ".concat(newSkill.proficiency),
                                                name: newSkill.name.trim(),
                                                proficiency: newSkill.proficiency // Store raw proficiency for saving
                                            };
                                            setSectionsData((prev)=>({
                                                    ...prev,
                                                    skills: [
                                                        item,
                                                        ...prev.skills
                                                    ]
                                                }));
                                            setNewSkill({
                                                name: '',
                                                proficiency: 'Beginner'
                                            });
                                        },
                                        className: "w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium",
                                        children: "+ Add Skill"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1266,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1251,
                            columnNumber: 13
                        }, this),
                        sectionsData.skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-black text-lg",
                                    children: "Your Skills"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1289,
                                    columnNumber: 17
                                }, this),
                                sectionsData.skills.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-4 bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-medium text-black",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1294,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-black mt-1",
                                                            children: item.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1295,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1293,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRemoveItem({
                                                            id: 'skills'
                                                        }, item.id),
                                                    className: "text-red-600 hover:text-red-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1302,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1301,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1297,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1292,
                                            columnNumber: 21
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1291,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1288,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 1246,
                    columnNumber: 11
                }, this);
            case 'internship':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-purple-50 border border-purple-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-purple-900 mb-2",
                                    children: "Internship & Work Experience"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1317,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-purple-700 text-sm",
                                    children: "Add your professional work experience and internships."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1318,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1316,
                            columnNumber: 13
                        }, this),
                        sectionsData.internship.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-black text-lg",
                                    children: "Your Experience"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1323,
                                    columnNumber: 17
                                }, this),
                                sectionsData.internship.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-4 bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 grid grid-cols-1 md:grid-cols-2 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Company"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1329,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.company || '',
                                                                    onChange: (e)=>updateItem('internship', item.id, {
                                                                            company: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1330,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1328,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Role"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1333,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.role || '',
                                                                    onChange: (e)=>updateItem('internship', item.id, {
                                                                            role: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1334,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1332,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "Start"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1338,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "month",
                                                                            value: item.start || '',
                                                                            onChange: (e)=>updateItem('internship', item.id, {
                                                                                    start: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1339,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1337,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "End"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1342,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "month",
                                                                            value: item.end || '',
                                                                            onChange: (e)=>updateItem('internship', item.id, {
                                                                                    end: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1343,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1341,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1336,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Summary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1347,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    value: item.summary || '',
                                                                    onChange: (e)=>updateItem('internship', item.id, {
                                                                            summary: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded",
                                                                    rows: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1348,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1346,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1327,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRemoveItem({
                                                            id: 'internship'
                                                        }, item.id),
                                                    className: "text-red-600 hover:text-red-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1352,
                                                            columnNumber: 104
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1352,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1351,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1326,
                                            columnNumber: 21
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1325,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1322,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Company"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newInternship.company,
                                            onChange: (e)=>setNewInternship((prev)=>({
                                                        ...prev,
                                                        company: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., Tech Solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1362,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1365,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newInternship.role,
                                            onChange: (e)=>setNewInternship((prev)=>({
                                                        ...prev,
                                                        role: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., Frontend Intern"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1366,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1364,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Start"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1370,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "month",
                                                    value: newInternship.start,
                                                    onChange: (e)=>setNewInternship((prev)=>({
                                                                ...prev,
                                                                start: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1371,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1369,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "End"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1374,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "month",
                                                    value: newInternship.end,
                                                    onChange: (e)=>setNewInternship((prev)=>({
                                                                ...prev,
                                                                end: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1375,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1373,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1368,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1379,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: newInternship.summary,
                                            onChange: (e)=>setNewInternship((prev)=>({
                                                        ...prev,
                                                        summary: e.target.value
                                                    })),
                                            rows: "3",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "Describe your responsibilities and achievements"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1380,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1378,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (!newInternship.company.trim() || !newInternship.role.trim()) return;
                                            const item = {
                                                id: Date.now(),
                                                company: newInternship.company.trim(),
                                                role: newInternship.role.trim(),
                                                start: newInternship.start,
                                                end: newInternship.end,
                                                summary: newInternship.summary
                                            };
                                            setSectionsData((prev)=>({
                                                    ...prev,
                                                    internship: [
                                                        item,
                                                        ...prev.internship
                                                    ]
                                                }));
                                            setNewInternship({
                                                company: '',
                                                role: '',
                                                start: '',
                                                end: '',
                                                summary: ''
                                            });
                                        },
                                        className: "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium",
                                        children: "+ Add Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1383,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1382,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1359,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 1315,
                    columnNumber: 11
                }, this);
            default:
                var _sectionsData_competitiveExams, _sectionsData_academicAchievements, _sectionsData_sectionKey;
                const currentSection = profileSections.find((s)=>s.id === activeSection);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 border border-gray-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-black mb-2",
                                    children: currentSection === null || currentSection === void 0 ? void 0 : currentSection.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1404,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black text-sm",
                                    children: "This section is available for you to update with your relevant information."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1405,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1403,
                            columnNumber: 13
                        }, this),
                        "case 'competitive-exams': return (",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-teal-50 border border-teal-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-teal-900 mb-2",
                                            children: "Competitive Exams"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1412,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-teal-700 text-sm",
                                            children: "Add details of exams like GATE, GRE, CAT, etc."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1413,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1411,
                                    columnNumber: 15
                                }, this),
                                ((_sectionsData_competitiveExams = sectionsData.competitiveExams) === null || _sectionsData_competitiveExams === void 0 ? void 0 : _sectionsData_competitiveExams.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-black text-lg",
                                            children: "Added Exams"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1418,
                                            columnNumber: 19
                                        }, this),
                                        sectionsData.competitiveExams.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-gray-200 rounded-lg p-4 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "font-bold text-black",
                                                                    children: item.examName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1423,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: [
                                                                        "Year: ",
                                                                        item.year,
                                                                        " | Score: ",
                                                                        item.score,
                                                                        " | Rank: ",
                                                                        item.rank
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1424,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1422,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSectionsData((prev)=>({
                                                                        ...prev,
                                                                        competitiveExams: prev.competitiveExams.filter((i)=>i.id !== item.id)
                                                                    })),
                                                            className: "text-red-600 hover:text-red-800",
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1426,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1421,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.id, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1420,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1417,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Exam Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1437,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newCompetitiveExam.examName,
                                                    onChange: (e)=>setNewCompetitiveExam((prev)=>({
                                                                ...prev,
                                                                examName: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "e.g., GATE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1438,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1436,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Year"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1441,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: newCompetitiveExam.year,
                                                    onChange: (e)=>setNewCompetitiveExam((prev)=>({
                                                                ...prev,
                                                                year: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "e.g., 2024"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1442,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1445,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newCompetitiveExam.score,
                                                    onChange: (e)=>setNewCompetitiveExam((prev)=>({
                                                                ...prev,
                                                                score: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "e.g., 750/1000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1446,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1444,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Rank"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1449,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newCompetitiveExam.rank,
                                                    onChange: (e)=>setNewCompetitiveExam((prev)=>({
                                                                ...prev,
                                                                rank: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "e.g., 150"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1450,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1448,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (!newCompetitiveExam.examName.trim()) return;
                                                    const item = {
                                                        id: Date.now(),
                                                        ...newCompetitiveExam
                                                    };
                                                    setSectionsData((prev)=>({
                                                            ...prev,
                                                            competitiveExams: [
                                                                item,
                                                                ...prev.competitiveExams || []
                                                            ]
                                                        }));
                                                    setNewCompetitiveExam({
                                                        examName: '',
                                                        year: '',
                                                        score: '',
                                                        rank: ''
                                                    });
                                                },
                                                className: "bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium",
                                                children: "+ Add Exam"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1453,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1452,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1435,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1410,
                            columnNumber: 13
                        }, this),
                        "); case 'academic-achievements': return (",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-pink-50 border border-pink-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-pink-900 mb-2",
                                            children: "Academic Achievements"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1473,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-pink-700 text-sm",
                                            children: "Highlight awards, scholarships, or academic recognitions."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1474,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1472,
                                    columnNumber: 15
                                }, this),
                                ((_sectionsData_academicAchievements = sectionsData.academicAchievements) === null || _sectionsData_academicAchievements === void 0 ? void 0 : _sectionsData_academicAchievements.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-black text-lg",
                                            children: "Your Achievements"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1479,
                                            columnNumber: 19
                                        }, this),
                                        sectionsData.academicAchievements.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-gray-200 rounded-lg p-4 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "font-bold text-black",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1484,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: item.year ? "Year: ".concat(item.year) : ''
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1485,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-700 mt-1",
                                                                    children: item.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1486,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1483,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSectionsData((prev)=>({
                                                                        ...prev,
                                                                        academicAchievements: prev.academicAchievements.filter((i)=>i.id !== item.id)
                                                                    })),
                                                            className: "text-red-600 hover:text-red-800",
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1488,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1482,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.id, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1481,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1478,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Title"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1499,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newAcademicAchievement.title,
                                                    onChange: (e)=>setNewAcademicAchievement((prev)=>({
                                                                ...prev,
                                                                title: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "e.g., University Gold Medalist"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1500,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1498,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Year"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1503,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: newAcademicAchievement.year,
                                                    onChange: (e)=>setNewAcademicAchievement((prev)=>({
                                                                ...prev,
                                                                year: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "e.g., 2023"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1504,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1502,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1507,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: newAcademicAchievement.description,
                                                    onChange: (e)=>setNewAcademicAchievement((prev)=>({
                                                                ...prev,
                                                                description: e.target.value
                                                            })),
                                                    rows: "2",
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "Brief details about the achievement"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1508,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1506,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (!newAcademicAchievement.title.trim()) return;
                                                    const item = {
                                                        id: Date.now(),
                                                        ...newAcademicAchievement
                                                    };
                                                    setSectionsData((prev)=>({
                                                            ...prev,
                                                            academicAchievements: [
                                                                item,
                                                                ...prev.academicAchievements || []
                                                            ]
                                                        }));
                                                    setNewAcademicAchievement({
                                                        title: '',
                                                        year: '',
                                                        description: ''
                                                    });
                                                },
                                                className: "bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium",
                                                children: "+ Add Achievement"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1511,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1510,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1497,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1471,
                            columnNumber: 13
                        }, this),
                        ");",
                        [
                            'position',
                            'accomplishments',
                            'volunteering',
                            'extra-curricular'
                        ].includes(activeSection) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1531,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newGeneric.title,
                                            onChange: (e)=>setNewGeneric((prev)=>({
                                                        ...prev,
                                                        title: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "e.g., Club Lead"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1532,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1530,
                                    columnNumber: 17
                                }, this),
                                activeSection === 'accomplishments' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Issuer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1537,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newGeneric.issuer,
                                                    onChange: (e)=>setNewGeneric((prev)=>({
                                                                ...prev,
                                                                issuer: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "e.g., Coursera, AWS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1538,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1536,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Certificate Link"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1541,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newGeneric.certificateLink,
                                                    onChange: (e)=>setNewGeneric((prev)=>({
                                                                ...prev,
                                                                certificateLink: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "URL to credential"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1542,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1540,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1545,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: newGeneric.date,
                                                    onChange: (e)=>setNewGeneric((prev)=>({
                                                                ...prev,
                                                                date: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1546,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1544,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Organization"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1552,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newGeneric.organization,
                                                    onChange: (e)=>setNewGeneric((prev)=>({
                                                                ...prev,
                                                                organization: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "e.g., Coding Club"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1553,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1551,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Role"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1556,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: newGeneric.role,
                                                    onChange: (e)=>setNewGeneric((prev)=>({
                                                                ...prev,
                                                                role: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                                    placeholder: "e.g., Lead Organizer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1557,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1555,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-black mb-2",
                                                            children: "Start"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1561,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "month",
                                                            value: newGeneric.start,
                                                            onChange: (e)=>setNewGeneric((prev)=>({
                                                                        ...prev,
                                                                        start: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1562,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1560,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-black mb-2",
                                                            children: "End"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1565,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "month",
                                                            value: newGeneric.end,
                                                            onChange: (e)=>setNewGeneric((prev)=>({
                                                                        ...prev,
                                                                        end: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1566,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1564,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1559,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-black mb-2",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1570,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: newGeneric.date,
                                                    onChange: (e)=>setNewGeneric((prev)=>({
                                                                ...prev,
                                                                date: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1571,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1569,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-black mb-2",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1576,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: newGeneric.description,
                                            onChange: (e)=>setNewGeneric((prev)=>({
                                                        ...prev,
                                                        description: e.target.value
                                                    })),
                                            rows: "3",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black",
                                            placeholder: "Describe your responsibilities, achievements or details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1577,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1575,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (!newGeneric.title.trim()) return;
                                            const item = activeSection === 'accomplishments' ? {
                                                id: Date.now(),
                                                title: newGeneric.title.trim(),
                                                description: newGeneric.description || '',
                                                date: newGeneric.date || '',
                                                issuer: newGeneric.issuer || '',
                                                certificateLink: newGeneric.certificateLink || ''
                                            } : {
                                                id: Date.now(),
                                                title: newGeneric.title.trim(),
                                                description: newGeneric.description || '',
                                                organization: newGeneric.organization || '',
                                                role: newGeneric.role || '',
                                                start: newGeneric.start || '',
                                                end: newGeneric.end || '',
                                                date: newGeneric.date || ''
                                            };
                                            setSectionsData((prev)=>({
                                                    ...prev,
                                                    [activeSection === 'extra-curricular' ? 'extraCurricular' : activeSection]: [
                                                        item,
                                                        ...prev[activeSection === 'extra-curricular' ? 'extraCurricular' : activeSection] || []
                                                    ]
                                                }));
                                            setNewGeneric({
                                                title: '',
                                                description: '',
                                                date: '',
                                                organization: '',
                                                role: '',
                                                start: '',
                                                end: '',
                                                issuer: '',
                                                certificateLink: ''
                                            });
                                        },
                                        className: "bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium",
                                        children: [
                                            "+ Add ",
                                            currentSection === null || currentSection === void 0 ? void 0 : currentSection.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1580,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1579,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1529,
                            columnNumber: 15
                        }, this),
                        ((_sectionsData_sectionKey = sectionsData[sectionKey(activeSection)]) === null || _sectionsData_sectionKey === void 0 ? void 0 : _sectionsData_sectionKey.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-black text-lg",
                                    children: [
                                        "Your ",
                                        currentSection === null || currentSection === void 0 ? void 0 : currentSection.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1600,
                                    columnNumber: 17
                                }, this),
                                sectionsData[sectionKey(activeSection)].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-4 bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 grid grid-cols-1 md:grid-cols-2 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Title"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1606,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.title || '',
                                                                    onChange: (e)=>updateItem(activeSection, item.id, {
                                                                            title: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1607,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1605,
                                                            columnNumber: 25
                                                        }, this),
                                                        activeSection === 'accomplishments' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "Issuer"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1612,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: item.issuer || '',
                                                                            onChange: (e)=>updateItem(activeSection, item.id, {
                                                                                    issuer: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1613,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1611,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "Certificate Link"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1616,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: item.certificateLink || '',
                                                                            onChange: (e)=>updateItem(activeSection, item.id, {
                                                                                    certificateLink: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1617,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1615,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1620,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "date",
                                                                            value: item.date || '',
                                                                            onChange: (e)=>updateItem(activeSection, item.id, {
                                                                                    date: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1621,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1619,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "Organization"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1627,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: item.organization || '',
                                                                            onChange: (e)=>updateItem(activeSection, item.id, {
                                                                                    organization: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1628,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1626,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "Role"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1631,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: item.role || '',
                                                                            onChange: (e)=>updateItem(activeSection, item.id, {
                                                                                    role: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1632,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1630,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-xs text-black mb-1",
                                                                                    children: "Start"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                                    lineNumber: 1636,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "month",
                                                                                    value: item.start || '',
                                                                                    onChange: (e)=>updateItem(activeSection, item.id, {
                                                                                            start: e.target.value
                                                                                        }),
                                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                                    lineNumber: 1637,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1635,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-xs text-black mb-1",
                                                                                    children: "End"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                                    lineNumber: 1640,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "month",
                                                                                    value: item.end || '',
                                                                                    onChange: (e)=>updateItem(activeSection, item.id, {
                                                                                            end: e.target.value
                                                                                        }),
                                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                                    lineNumber: 1641,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1639,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1634,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-black mb-1",
                                                                            children: "Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1645,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "date",
                                                                            value: item.date || '',
                                                                            onChange: (e)=>updateItem(activeSection, item.id, {
                                                                                    date: e.target.value
                                                                                }),
                                                                            className: "w-full px-3 py-2 border border-gray-300 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1646,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1644,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-black mb-1",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1651,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    value: item.description || '',
                                                                    onChange: (e)=>updateItem(activeSection, item.id, {
                                                                            description: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded",
                                                                    rows: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1652,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1650,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1604,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRemoveItem({
                                                            id: activeSection
                                                        }, item.id),
                                                    className: "text-red-600 hover:text-red-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1660,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1659,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1655,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1603,
                                            columnNumber: 21
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1602,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1599,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 1402,
                    columnNumber: 11
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        style: {
            fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
            background: '#f9fafb',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Jobseeker Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                        lineNumber: 1676,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Jobseeker Profile Management"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                        lineNumber: 1677,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                        lineNumber: 1678,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                        lineNumber: 1679,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                        lineNumber: 1680,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                lineNumber: 1675,
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
                                        onClick: handleBackToDashboard,
                                        className: "flex items-center text-black hover:text-gray-700 mr-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1693,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1692,
                                                columnNumber: 17
                                            }, this),
                                            "Back to Dashboard"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1688,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-black",
                                        children: "Career Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1697,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                lineNumber: 1687,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex space-x-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/jobseeker-dashboard",
                                        className: "text-black hover:text-gray-700 font-medium",
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1700,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/profiles/jobseeker-profile",
                                        className: "text-blue-600 font-medium border-b-2 border-blue-600",
                                        children: "My Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1703,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                lineNumber: 1699,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                        lineNumber: 1686,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 1685,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                lineNumber: 1684,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-28 h-28",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 36 36",
                                                className: "absolute inset-0 w-28 h-28 rotate-[-90deg]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
                                                        fill: "none",
                                                        stroke: "#F1F5F9",
                                                        strokeWidth: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1719,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831",
                                                        fill: "none",
                                                        stroke: "#22C55E",
                                                        strokeWidth: "3",
                                                        strokeDasharray: "".concat(Math.max(0, Math.min(100, completion.pct)), ", 100")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1720,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1718,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    const el = document.getElementById('profile-image');
                                                    if (el) el.click();
                                                },
                                                className: "w-24 h-24 bg-gray-200 rounded-full mx-auto mt-2 flex items-center justify-center overflow-hidden ring-2 ring-transparent hover:ring-blue-200 transition cursor-pointer",
                                                title: "Click to upload photo",
                                                children: profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: profileImage,
                                                    alt: "Profile",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1732,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl text-black",
                                                    children: "👤"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1734,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1722,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "profile-image",
                                                type: "file",
                                                accept: "image/*",
                                                className: "hidden",
                                                onChange: handleImageChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1737,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full border",
                                                children: [
                                                    completion.pct,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1744,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1717,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold text-black",
                                                children: [
                                                    user === null || user === void 0 ? void 0 : user.firstName,
                                                    user === null || user === void 0 ? void 0 : user.lastName
                                                ].filter(Boolean).join(' ') || (user === null || user === void 0 ? void 0 : user.username) || ((user === null || user === void 0 ? void 0 : user.email) ? user.email.split('@')[0] : 'User')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1749,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-black mt-1",
                                                children: basicDetails.address || 'Add address / city'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1750,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black",
                                                                children: "📍"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                lineNumber: 1753,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black",
                                                                children: ((_basicDetails_address = basicDetails.address) === null || _basicDetails_address === void 0 ? void 0 : (_basicDetails_address_split_ = _basicDetails_address.split(',')[1]) === null || _basicDetails_address_split_ === void 0 ? void 0 : _basicDetails_address_split_.trim()) || 'Chennai'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                lineNumber: 1754,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1752,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black",
                                                                children: "📞"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                lineNumber: 1757,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black",
                                                                children: basicDetails.phone || 'Add phone'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                lineNumber: 1758,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1756,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black",
                                                                children: "✉️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                lineNumber: 1761,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black",
                                                                children: basicDetails.email || 'Add email'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                lineNumber: 1762,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1760,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1751,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center gap-6 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-blue-600",
                                                        onClick: ()=>goToEdit('basic'),
                                                        children: basicDetails.gender ? "Gender: ".concat(basicDetails.gender) : 'Add Gender'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1766,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-blue-600",
                                                        onClick: ()=>goToEdit('basic'),
                                                        children: basicDetails.dob ? "Birthday: ".concat(basicDetails.dob) : 'Add birthday'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1767,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1765,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1748,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                lineNumber: 1715,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1714,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block lg:w-64 border-r shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "p-4 sticky top-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 bg-gray-50 border border-gray-200 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-3 border-b font-semibold text-black text-lg",
                                                    children: "Quick links"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1781,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "py-1",
                                                    children: [
                                                        {
                                                            label: 'Preference',
                                                            target: 'preferences'
                                                        },
                                                        {
                                                            label: 'Education',
                                                            target: 'education'
                                                        },
                                                        {
                                                            label: 'Key skills',
                                                            target: 'skills'
                                                        },
                                                        {
                                                            label: 'Languages',
                                                            target: 'languages'
                                                        },
                                                        {
                                                            label: 'Internships',
                                                            target: 'internship'
                                                        },
                                                        {
                                                            label: 'Projects',
                                                            target: 'projects'
                                                        },
                                                        {
                                                            label: 'Profile summary',
                                                            target: 'profile-summary'
                                                        },
                                                        {
                                                            label: 'Accomplishments',
                                                            target: 'accomplishments'
                                                        },
                                                        {
                                                            label: 'Competitive exams',
                                                            target: 'competitive-exams'
                                                        },
                                                        {
                                                            label: 'Employment',
                                                            target: 'internship'
                                                        },
                                                        {
                                                            label: 'Academic achievements',
                                                            target: 'academic-achievements'
                                                        },
                                                        {
                                                            label: 'Resume',
                                                            target: 'resume'
                                                        }
                                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>goToEdit(item.target),
                                                            className: "w-full text-left px-4 py-3 text-base transition-colors ".concat(activeSection === item.target ? 'bg-white text-blue-700 font-semibold border-l-4 border-blue-600' : 'text-black hover:bg-white hover:text-blue-700'),
                                                            children: item.label
                                                        }, item.target + item.label, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1797,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1782,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1780,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                        lineNumber: 1778,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1777,
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
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1815,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "mobile-nav",
                                            className: "block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base text-black bg-white",
                                            value: activeSection,
                                            onChange: (e)=>goToEdit(e.target.value),
                                            children: [
                                                {
                                                    label: 'Basic Details',
                                                    target: 'basic'
                                                },
                                                {
                                                    label: 'Preference',
                                                    target: 'preferences'
                                                },
                                                {
                                                    label: 'Education',
                                                    target: 'education'
                                                },
                                                {
                                                    label: 'Key skills',
                                                    target: 'skills'
                                                },
                                                {
                                                    label: 'Languages',
                                                    target: 'languages'
                                                },
                                                {
                                                    label: 'Internships',
                                                    target: 'internship'
                                                },
                                                {
                                                    label: 'Projects',
                                                    target: 'projects'
                                                },
                                                {
                                                    label: 'Profile summary',
                                                    target: 'profile-summary'
                                                },
                                                {
                                                    label: 'Accomplishments',
                                                    target: 'accomplishments'
                                                },
                                                {
                                                    label: 'Competitive exams',
                                                    target: 'competitive-exams'
                                                },
                                                {
                                                    label: 'Academic achievements',
                                                    target: 'academic-achievements'
                                                },
                                                {
                                                    label: 'Resume',
                                                    target: 'resume'
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: item.target,
                                                    children: item.label
                                                }, item.target, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1836,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1816,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1814,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b pb-3 mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-black",
                                                children: "View & Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                lineNumber: 1847,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1846,
                                            columnNumber: 15
                                        }, this),
                                        mode === 'overview' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-7 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-black",
                                                                    children: "Your career preferences"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1855,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-blue-600",
                                                                    onClick: ()=>goToEdit('preferences'),
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1856,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1854,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-base",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-black",
                                                                            children: "Preferred job type"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1860,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "text-blue-600",
                                                                            onClick: ()=>goToEdit('preferences'),
                                                                            children: sectionsData.preferences.desiredJobType ? sectionsData.preferences.desiredJobType : 'Add desired job type'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1861,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1859,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-black",
                                                                            children: "Availability to work"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1864,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "text-blue-600",
                                                                            onClick: ()=>goToEdit('preferences'),
                                                                            children: sectionsData.preferences.availability ? sectionsData.preferences.availability : 'Add work availability'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1865,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1863,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-black",
                                                                            children: "Preferred location"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1868,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "text-blue-600",
                                                                            onClick: ()=>goToEdit('preferences'),
                                                                            children: sectionsData.preferences.preferredLocation ? sectionsData.preferences.preferredLocation : 'Add preferred work location'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1869,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1867,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1858,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1853,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-7 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-black",
                                                                    children: "Education"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1877,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-blue-600",
                                                                    onClick: ()=>goToEdit('education'),
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1878,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1876,
                                                            columnNumber: 21
                                                        }, this),
                                                        sectionsData.education.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2 text-base text-black",
                                                            children: sectionsData.education.slice(0, 2).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: e.degree
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1883,
                                                                            columnNumber: 78
                                                                        }, this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-black",
                                                                            children: e.institute
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1883,
                                                                            columnNumber: 126
                                                                        }, this)
                                                                    ]
                                                                }, e.id, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1883,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1881,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-black text-base",
                                                            children: "Add your degree details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1887,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1875,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-7 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-black",
                                                                    children: "Key skills"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1894,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-blue-600",
                                                                    onClick: ()=>goToEdit('skills'),
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1895,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1893,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: [
                                                                (sectionsData.skills || []).slice(0, 8).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-3 py-1.5 rounded-full bg-gray-100 text-black text-base",
                                                                        children: s.title
                                                                    }, s.id, false, {
                                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                        lineNumber: 1899,
                                                                        columnNumber: 25
                                                                    }, this)),
                                                                sectionsData.skills.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-black text-base",
                                                                    children: "Add your key skills"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1901,
                                                                    columnNumber: 60
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1897,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1892,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-7 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-black",
                                                                    children: "Languages"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1908,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-blue-600",
                                                                    onClick: ()=>goToEdit('languages'),
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1909,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1907,
                                                            columnNumber: 21
                                                        }, this),
                                                        ((_sectionsData_languages = sectionsData.languages) === null || _sectionsData_languages === void 0 ? void 0 : _sectionsData_languages.length) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "text-base text-black list-disc list-inside",
                                                            children: sectionsData.languages.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        l.title,
                                                                        " • ",
                                                                        l.description
                                                                    ]
                                                                }, l.id, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1913,
                                                                    columnNumber: 58
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1912,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-black text-base",
                                                            children: "Add languages you know"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1915,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1906,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-7 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-black",
                                                                    children: "Internships"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1921,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-blue-600",
                                                                    onClick: ()=>goToEdit('internship'),
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1922,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1920,
                                                            columnNumber: 21
                                                        }, this),
                                                        ((_sectionsData_internship = sectionsData.internship) === null || _sectionsData_internship === void 0 ? void 0 : _sectionsData_internship.length) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "text-base text-black list-disc list-inside",
                                                            children: sectionsData.internship.slice(0, 2).map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        i.role,
                                                                        " @ ",
                                                                        i.company
                                                                    ]
                                                                }, i.id, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1926,
                                                                    columnNumber: 71
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1925,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-black text-base",
                                                            children: "Add internship or work experience"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1928,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1919,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-7 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-black",
                                                                    children: "Projects"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1934,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-blue-600",
                                                                    onClick: ()=>goToEdit('projects'),
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1935,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1933,
                                                            columnNumber: 21
                                                        }, this),
                                                        ((_sectionsData_projects = sectionsData.projects) === null || _sectionsData_projects === void 0 ? void 0 : _sectionsData_projects.length) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "text-base text-black list-disc list-inside",
                                                            children: sectionsData.projects.slice(0, 2).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: p.title
                                                                }, p.id, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1939,
                                                                    columnNumber: 69
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1938,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-black text-base",
                                                            children: "Add your projects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1941,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1932,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-7 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-black",
                                                                    children: "Profile summary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1947,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-blue-600",
                                                                    onClick: ()=>goToEdit('profile-summary'),
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1948,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1946,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base text-black",
                                                            children: sectionsData.summary || 'Write a concise summary to highlight your strengths'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1950,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1945,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl p-7 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-black",
                                                                    children: "Resume"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1956,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-blue-600",
                                                                    onClick: ()=>goToEdit('resume'),
                                                                    children: resumeInfo.name ? 'Update' : 'Add'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1957,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1955,
                                                            columnNumber: 21
                                                        }, this),
                                                        resumeInfo.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-600 font-semibold text-xs",
                                                                        children: "PDF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                        lineNumber: 1964,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1963,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium text-black",
                                                                            children: resumeInfo.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1967,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        resumeInfo.uploadDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-black",
                                                                            children: [
                                                                                "Uploaded ",
                                                                                new Date(resumeInfo.uploadDate).toLocaleDateString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                            lineNumber: 1969,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                                    lineNumber: 1966,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1962,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-black text-base",
                                                            children: "Upload your resume to showcase your qualifications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1976,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1954,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1851,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "editor-root",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-semibold text-black mb-2",
                                                            children: (_profileSections_find = profileSections.find((s)=>s.id === activeSection)) === null || _profileSections_find === void 0 ? void 0 : _profileSections_find.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1983,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-black",
                                                            children: [
                                                                "Manage your ",
                                                                (_profileSections_find1 = profileSections.find((s)=>s.id === activeSection)) === null || _profileSections_find1 === void 0 ? void 0 : _profileSections_find1.label.toLowerCase()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                            lineNumber: 1986,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1982,
                                                    columnNumber: 19
                                                }, this),
                                                renderSectionContent(),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8 pt-6 border-t flex justify-end items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleSave,
                                                        className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",
                                                        children: "Save Changes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                        lineNumber: 1994,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                                    lineNumber: 1993,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                            lineNumber: 1981,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                                    lineNumber: 1844,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                            lineNumber: 1774,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                    lineNumber: 1712,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
                lineNumber: 1711,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(components)/JobseekerProfile/page.jsx",
        lineNumber: 1674,
        columnNumber: 5
    }, this);
}
_s(JobseekerProfile, "uR8eq4HQUIv5PWOU96MvoWf7Xs8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = JobseekerProfile;
var _c;
__turbopack_context__.k.register(_c, "JobseekerProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28components%29_JobseekerProfile_page_jsx_c4688dfe._.js.map