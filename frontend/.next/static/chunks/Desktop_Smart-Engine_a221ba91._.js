(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Smart-Engine/backend/src/models/User.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/node_modules/mongoose/dist/browser.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/node_modules/bcryptjs/index.js [app-client] (ecmascript)");
;
;
const userSchema = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Schema({
    username: {
        type: String,
        required: [
            true,
            'Username is required'
        ],
        trim: true,
        minlength: [
            2,
            'Username must be at least 2 characters long'
        ],
        maxlength: [
            30,
            'Username cannot exceed 30 characters'
        ]
    },
    // lastName: {
    //   type: String,
    //   required: [true, 'Last name is required'],
    //   trim: true,
    //   minlength: [2, 'Last name must be at least 2 characters long'],
    //   maxlength: [30, 'Last name cannot exceed 30 characters'],
    //   match: [/^[a-zA-Z\s]+$/, 'Last name can only contain letters and spaces']
    // },
    email: {
        type: String,
        required: [
            true,
            'Email is required'
        ],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(email) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
            },
            message: 'Please provide a valid email address'
        }
    },
    password: {
        type: String,
        required: [
            true,
            'Password is required'
        ],
        minlength: [
            6,
            'Password must be at least 6 characters long'
        ],
        validate: {
            validator: function(password) {
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/.test(password);
            },
            message: 'Password must contain at least one letter, one number, and one special character'
        }
    },
    userType: {
        type: String,
        required: [
            true,
            'User type is required'
        ],
        enum: {
            values: [
                'Job Seeker',
                'Recruiter',
                'Entrepreneur'
            ],
            message: 'User type must be either Job Seeker, Recruiter, or Entrepreneur'
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isProfileCompleted: {
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date,
        default: null
    },
    loginAttempts: {
        type: Number,
        default: 0,
        max: 5
    },
    lockUntil: {
        type: Date,
        default: null
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            delete ret.__v;
            delete ret.loginAttempts;
            delete ret.lockUntil;
            return ret;
        }
    }
});
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].compare(candidatePassword, this.password);
};
userSchema.virtual('fullName').get(function() {
    return "".concat(this.firstName, " ").concat(this.lastName);
});
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        const saltRounds = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BCRYPT_SALT_ROUNDS) || 12;
        this.password = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hash(this.password, saltRounds);
        next();
    } catch (error) {
        next(error);
    }
});
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].compare(candidatePassword, this.password);
};
userSchema.methods.isLocked = function() {
    return !!(this.lockUntil && this.lockUntil > Date.now());
};
userSchema.methods.incLoginAttempts = function() {
    if (this.lockUntil && this.lockUntil < Date.now()) {
        return this.updateOne({
            $unset: {
                lockUntil: 1
            },
            $set: {
                loginAttempts: 1
            }
        });
    }
    const updates = {
        $inc: {
            loginAttempts: 1
        }
    };
    if (this.loginAttempts + 1 >= 5 && !this.isLocked()) {
        updates.$set = {
            lockUntil: Date.now() + 2 * 60 * 60 * 1000
        };
    }
    return this.updateOne(updates);
};
userSchema.methods.resetLoginAttempts = function() {
    return this.updateOne({
        $unset: {
            loginAttempts: 1,
            lockUntil: 1
        }
    });
};
userSchema.statics.findByEmail = function(email) {
    return this.findOne({
        email: email.toLowerCase()
    });
};
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].model('User', userSchema);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Smart-Engine/backend/src/models/JobSeekerProfile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/node_modules/mongoose/dist/browser.umd.js [app-client] (ecmascript)");
;
const jobSeekerProfileSchema = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Schema({
    userId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        match: [
            /^[0-9]{10}$/,
            'Phone number must be 10 digits'
        ]
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        enum: [
            'male',
            'female',
            'other',
            'prefer-not-to-say'
        ]
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zipCode: String
    },
    profilePicture: {
        type: String
    },
    resume: {
        fileName: String,
        filePath: String,
        uploadedAt: {
            type: Date,
            default: Date.now
        }
    },
    summary: {
        type: String,
        maxlength: [
            1000,
            'Summary cannot exceed 1000 characters'
        ]
    },
    experience: [
        {
            jobTitle: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            startDate: {
                type: Date,
                required: true
            },
            endDate: Date,
            isCurrentJob: {
                type: Boolean,
                default: false
            },
            description: String,
            location: String
        }
    ],
    education: [
        {
            degree: {
                type: String,
                required: true
            },
            institution: {
                type: String,
                required: true
            },
            fieldOfStudy: String,
            startDate: Date,
            endDate: Date,
            grade: String,
            description: String
        }
    ],
    skills: [
        {
            skillName: {
                type: String,
                required: true
            },
            proficiencyLevel: {
                type: String,
                enum: [
                    'beginner',
                    'intermediate',
                    'advanced',
                    'expert'
                ],
                default: 'intermediate'
            }
        }
    ],
    certifications: [
        {
            name: {
                type: String,
                required: true
            },
            issuingOrganization: {
                type: String,
                required: true
            },
            issueDate: Date,
            expiryDate: Date,
            credentialId: String,
            credentialUrl: String
        }
    ],
    languages: [
        {
            language: {
                type: String,
                required: true
            },
            proficiency: {
                type: String,
                enum: [
                    'basic',
                    'conversational',
                    'fluent',
                    'native'
                ],
                default: 'conversational'
            }
        }
    ],
    projects: [
        {
            title: {
                type: String,
                required: true
            },
            description: String,
            technologies: [
                String
            ],
            projectUrl: String,
            githubUrl: String,
            startDate: Date,
            endDate: Date
        }
    ],
    socialProfiles: {
        linkedin: String,
        github: String,
        portfolio: String,
        twitter: String
    },
    preferences: {
        jobTypes: [
            {
                type: String,
                enum: [
                    'full-time',
                    'part-time',
                    'contract',
                    'internship',
                    'freelance'
                ]
            }
        ],
        workModes: [
            {
                type: String,
                enum: [
                    'remote',
                    'on-site',
                    'hybrid'
                ]
            }
        ],
        preferredLocations: [
            String
        ],
        expectedSalary: {
            min: Number,
            max: Number,
            currency: {
                type: String,
                default: 'INR'
            }
        },
        availabilityDate: Date,
        willingToRelocate: {
            type: Boolean,
            default: false
        }
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
jobSeekerProfileSchema.virtual('experienceYears').get(function() {
    if (!this.experience || this.experience.length === 0) return 0;
    let totalMonths = 0;
    this.experience.forEach((exp)=>{
        const startDate = new Date(exp.startDate);
        const endDate = exp.isCurrentJob ? new Date() : new Date(exp.endDate);
        const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
        totalMonths += monthsDiff;
    });
    return Math.round(totalMonths / 12 * 10) / 10;
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].model('JobSeekerProfile', jobSeekerProfileSchema);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Smart-Engine/backend/src/models/RecruiterProfile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/node_modules/mongoose/dist/browser.umd.js [app-client] (ecmascript)");
;
const recruiterProfileSchema = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Schema({
    userId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        match: [
            /^[0-9]{10}$/,
            'Phone number must be 10 digits'
        ]
    },
    profilePicture: String,
    company: {
        name: {
            type: String
        },
        website: String,
        industry: {
            type: String
        },
        size: {
            type: String,
            enum: [
                '1-10',
                '11-50',
                '51-200',
                '201-500',
                '501-1000',
                '1000+'
            ]
        },
        description: String,
        logo: String,
        address: {
            street: String,
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            zipCode: String
        },
        founded: Date
    },
    position: {
        type: String
    },
    department: String,
    bio: {
        type: String,
        maxlength: [
            500,
            'Bio cannot exceed 500 characters'
        ]
    },
    specializations: [
        {
            type: String,
            enum: [
                'software-development',
                'data-science',
                'marketing',
                'sales',
                'finance',
                'human-resources',
                'operations',
                'design',
                'product-management',
                'consulting',
                'healthcare',
                'education',
                'other'
            ]
        }
    ],
    experienceInRecruitment: {
        type: Number,
        min: 0,
        max: 50
    },
    socialProfiles: {
        linkedin: String,
        twitter: String
    },
    verificationStatus: {
        isCompanyVerified: {
            type: Boolean,
            default: false
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        verifiedAt: Date,
        verificationDocument: String
    },
    subscriptionPlan: {
        type: String,
        enum: [
            'free',
            'basic',
            'premium',
            'enterprise'
        ],
        default: 'free'
    },
    permissions: {
        canPostJobs: {
            type: Boolean,
            default: true
        },
        canViewProfiles: {
            type: Boolean,
            default: true
        },
        maxJobPostsPerMonth: {
            type: Number,
            default: 5
        }
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].model('RecruiterProfile', recruiterProfileSchema);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Smart-Engine/backend/src/models/AdminProfile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/node_modules/mongoose/dist/browser.umd.js [app-client] (ecmascript)");
;
const adminProfileSchema = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Schema({
    userId: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        match: [
            /^[0-9]{10}$/,
            'Phone number must be 10 digits'
        ]
    },
    profilePicture: String,
    role: {
        type: String,
        enum: [
            'super-admin',
            'admin',
            'moderator',
            'organiser'
        ],
        default: 'organiser'
    },
    department: {
        type: String,
        enum: [
            'operations',
            'hr',
            'tech',
            'marketing',
            'finance',
            'support'
        ]
    },
    permissions: [
        {
            type: String,
            enum: [
                'manage-users',
                'manage-jobs',
                'manage-companies',
                'view-analytics',
                'manage-payments',
                'moderate-content',
                'system-settings',
                'export-data',
                'manage-admins'
            ]
        }
    ],
    bio: {
        type: String,
        maxlength: [
            300,
            'Bio cannot exceed 300 characters'
        ]
    },
    workingHours: {
        timezone: {
            type: String,
            default: 'Asia/Kolkata'
        },
        availability: [
            {
                day: {
                    type: String,
                    enum: [
                        'monday',
                        'tuesday',
                        'wednesday',
                        'thursday',
                        'friday',
                        'saturday',
                        'sunday'
                    ]
                },
                startTime: String,
                endTime: String
            }
        ]
    },
    emergencyContact: {
        name: String,
        phone: String,
        relationship: String
    },
    lastActiveAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].model('AdminProfile', adminProfileSchema);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Smart-Engine/backend/src/utils/responseHandler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendError",
    ()=>sendError,
    "sendResponse",
    ()=>sendResponse,
    "sendSuccess",
    ()=>sendSuccess
]);
const sendResponse = function(res, statusCode, success, message) {
    let data = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, error = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
    const response = {
        success,
        message,
        timestamp: new Date().toISOString(),
        ...data && {
            data
        },
        ...error && {
            error
        }
    };
    return res.status(statusCode).json(response);
};
const sendSuccess = function(res, message) {
    let data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, statusCode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 200;
    return sendResponse(res, statusCode, true, message, data);
};
const sendError = function(res, message) {
    let error = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, statusCode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 400;
    return sendResponse(res, statusCode, false, message, null, error);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Smart-Engine/backend/src/controllers/profileController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProfile",
    ()=>deleteProfile,
    "getDetailedProfile",
    ()=>getDetailedProfile,
    "updateAdminProfile",
    ()=>updateAdminProfile,
    "updateJobSeekerProfile",
    ()=>updateJobSeekerProfile,
    "updateRecruiterProfile",
    ()=>updateRecruiterProfile,
    "users",
    ()=>users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$models$2f$User$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/src/models/User.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$models$2f$JobSeekerProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/src/models/JobSeekerProfile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$models$2f$RecruiterProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/src/models/RecruiterProfile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$models$2f$AdminProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/src/models/AdminProfile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/src/utils/responseHandler.js [app-client] (ecmascript)");
;
;
;
;
;
const getProfileModel = (userType)=>{
    switch(userType){
        case 'jobseeker':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$models$2f$JobSeekerProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        case 'recruiter':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$models$2f$RecruiterProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        case 'admin':
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$models$2f$AdminProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        default:
            return null;
    }
};
const updateJobSeekerProfile = async (req, res)=>{
    try {
        if (req.user.userType !== 'jobseeker') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Access denied. This endpoint is for job seekers only.', null, 403);
        }
        const ProfileModel = getProfileModel(req.user.userType);
        let profile = await ProfileModel.findOne({
            userId: req.user._id
        });
        if (!profile) {
            profile = new ProfileModel({
                userId: req.user._id
            });
        }
        const allowedFields = [
            'phone',
            'dateOfBirth',
            'gender',
            'address',
            'profilePicture',
            'summary',
            'experience',
            'education',
            'skills',
            'certifications',
            'languages',
            'projects',
            'socialProfiles',
            'preferences'
        ];
        allowedFields.forEach((field)=>{
            if (req.body[field] !== undefined) {
                profile[field] = req.body[field];
            }
        });
        await profile.save();
        req.user.isProfileCompleted = true;
        await req.user.save();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendSuccess"])(res, 'Job seeker profile updated successfully', {
            profile
        });
    } catch (error) {
        console.error('Update job seeker profile error:', error);
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err)=>({
                    field: err.path,
                    message: err.message
                }));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Validation failed', validationErrors, 422);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Failed to update profile', null, 500);
    }
};
const updateRecruiterProfile = async (req, res)=>{
    try {
        var _req_body_company, _req_body_company1, _req_body_company2;
        if (req.user.userType !== 'recruiter') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Access denied. This endpoint is for recruiters only.', null, 403);
        }
        const ProfileModel = getProfileModel(req.user.userType);
        let profile = await ProfileModel.findOne({
            userId: req.user._id
        });
        if (!profile) {
            profile = new ProfileModel({
                userId: req.user._id
            });
        }
        // Validate required fields for recruiter
        const requiredFields = [
            'phone',
            'company.name',
            'company.industry',
            'company.size',
            'position'
        ];
        const errors = [];
        if (!req.body.phone) errors.push({
            field: 'phone',
            message: 'Phone number is required'
        });
        if (!((_req_body_company = req.body.company) === null || _req_body_company === void 0 ? void 0 : _req_body_company.name)) errors.push({
            field: 'company.name',
            message: 'Company name is required'
        });
        if (!((_req_body_company1 = req.body.company) === null || _req_body_company1 === void 0 ? void 0 : _req_body_company1.industry)) errors.push({
            field: 'company.industry',
            message: 'Company industry is required'
        });
        if (!((_req_body_company2 = req.body.company) === null || _req_body_company2 === void 0 ? void 0 : _req_body_company2.size)) errors.push({
            field: 'company.size',
            message: 'Company size is required'
        });
        if (!req.body.position) errors.push({
            field: 'position',
            message: 'Position is required'
        });
        if (errors.length > 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Validation failed', errors, 422);
        }
        const allowedFields = [
            'phone',
            'profilePicture',
            'company',
            'position',
            'department',
            'bio',
            'specializations',
            'experienceInRecruitment',
            'socialProfiles'
        ];
        allowedFields.forEach((field)=>{
            if (req.body[field] !== undefined) {
                profile[field] = req.body[field];
            }
        });
        await profile.save();
        req.user.isProfileCompleted = true;
        await req.user.save();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendSuccess"])(res, 'Recruiter profile updated successfully', {
            profile
        });
    } catch (error) {
        console.error('Update recruiter profile error:', error);
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err)=>({
                    field: err.path,
                    message: err.message
                }));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Validation failed', validationErrors, 422);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Failed to update profile', null, 500);
    }
};
const updateAdminProfile = async (req, res)=>{
    try {
        if (req.user.userType !== 'admin') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Access denied. This endpoint is for admins only.', null, 403);
        }
        const ProfileModel = getProfileModel(req.user.userType);
        let profile = await ProfileModel.findOne({
            userId: req.user._id
        });
        if (!profile) {
            profile = new ProfileModel({
                userId: req.user._id
            });
        }
        // Validate required fields for admin
        const errors = [];
        if (!req.body.phone) errors.push({
            field: 'phone',
            message: 'Phone number is required'
        });
        if (!req.body.department) errors.push({
            field: 'department',
            message: 'Department is required'
        });
        if (errors.length > 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Validation failed', errors, 422);
        }
        const allowedFields = [
            'phone',
            'profilePicture',
            'role',
            'department',
            'permissions',
            'bio',
            'workingHours',
            'emergencyContact'
        ];
        allowedFields.forEach((field)=>{
            if (req.body[field] !== undefined) {
                profile[field] = req.body[field];
            }
        });
        await profile.save();
        req.user.isProfileCompleted = true;
        await req.user.save();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendSuccess"])(res, 'Admin profile updated successfully', {
            profile
        });
    } catch (error) {
        console.error('Update admin profile error:', error);
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err)=>({
                    field: err.path,
                    message: err.message
                }));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Validation failed', validationErrors, 422);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Failed to update profile', null, 500);
    }
};
const getDetailedProfile = async (req, res)=>{
    try {
        const ProfileModel = getProfileModel(req.user.userType);
        let profile = null;
        if (ProfileModel) {
            profile = await ProfileModel.findOne({
                userId: req.user._id
            });
        }
        const responseData = {
            user: {
                id: req.user._id,
                firstName: req.user.firstName,
                lastName: req.user.lastName,
                fullName: req.user.fullName,
                email: req.user.email,
                userType: req.user.userType,
                isActive: req.user.isActive,
                isProfileCompleted: req.user.isProfileCompleted,
                lastLogin: req.user.lastLogin,
                createdAt: req.user.createdAt,
                updatedAt: req.user.updatedAt
            },
            profile
        };
        if (req.user.userType === 'jobseeker' && profile) {
            responseData.profile.experienceYears = profile.experienceYears;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendSuccess"])(res, "".concat(req.user.userType, " profile retrieved successfully"), responseData);
    } catch (error) {
        console.error('Get detailed profile error:', error);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Failed to retrieve profile', null, 500);
    }
};
const deleteProfile = async (req, res)=>{
    try {
        const ProfileModel = getProfileModel(req.user.userType);
        if (ProfileModel) {
            await ProfileModel.findOneAndDelete({
                userId: req.user._id
            });
        }
        req.user.isProfileCompleted = false;
        await req.user.save();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendSuccess"])(res, 'Profile deleted successfully');
    } catch (error) {
        console.error('Delete profile error:', error);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Failed to delete profile', null, 500);
    }
};
const users = async (req, res)=>{
    try {
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$models$2f$User$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].find();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendSuccess"])(res, 'Users retrieved successfully', {
            users
        });
    } catch (error) {
        console.error('Get users error:', error);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$utils$2f$responseHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendError"])(res, 'Failed to retrieve users', null, 500);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$backend$2f$src$2f$controllers$2f$profileController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/backend/src/controllers/profileController.js [app-client] (ecmascript)");
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
;
;
const Signup = ()=>{
    _s();
    // initialize router
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 1. Initialize sate for form data
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: ""
    });
    // 2. Initialize state for validation/submission status
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [emailExists, setEmailExists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // 3. Handle input changes
    const changeHandler = (e)=>{
        const { name, value } = e.target;
        setUserData((prevState)=>({
                ...prevState,
                [name]: value
            }));
        // Clear error for the field as the user types
        if (errors[name]) {
            setErrors((prevState)=>({
                    ...prevState,
                    [name]: null
                }));
        }
    };
    // 4. Validation logic
    const validate = (e)=>{
        let newErrors = {};
        const data = new FormData(e.currentTarget);
        const email = data.get("email");
        if (!userData.username) newErrors.username = 'Username is required';
        if (!userData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!result.data.error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                onClose: ()=>{
                    router.push('/Login');
                }
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.data.message, {
                position: "top-right",
                autoClose: 5000
            });
        }
        // if(emailExists){
        //   toast.error('Email already exists. Please use a different email.', { position: "top-right", autoClose: 5000 })
        //   newErrors.email = 'Email already exists. Please use a different email.';
        // }
        if (!userData.password) {
            newErrors.password = 'Password is required.';
        } else if (userData.password.length < 6) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Password must be at least 6 characters', {
                position: "top-right",
                autoClose: 5000
            });
            newErrors.password = 'Password must be at least 6 characters.';
        }
        if (userData.password !== userData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Passwords do not match', {
                position: "top-right",
                autoClose: 5000
            });
            console.log('Password and Confirm Password do not match');
        }
        if (!userData.userType) {
            newErrors.userType = 'Please select a user type.';
        }
        return newErrors;
    };
    // 5. Handle form submission
    const submitHandler = async (e)=>{
        e.preventDefault();
        // Collect form values safely using FormData
        const data = new FormData(e.currentTarget);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
        const confirmPassword = data.get("confirmPassword");
        const userType = data.get("userType"); // e.g. "Recruiter" or "Candidate"
        // Optional client-side validation before sending request
        if (password !== confirmPassword) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Password and Confirm Password do not match", {
                position: "top-right",
                autoClose: 5000
            });
            return; // stop if mismatch
        }
        const url = "http://localhost:5000/api/auth/register";
        try {
            const res1 = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(url, {
                username,
                email,
                password,
                confirmPassword,
                userType
            });
            // Success
            if (!res1.data.error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res1.data.message || "Registration successful!", {
                    position: "top-right",
                    autoClose: 5000,
                    onClose: ()=>{
                        router.push("/Login");
                    }
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res1.data.message || "Registration failed", {
                    position: "top-right",
                    autoClose: 5000
                });
            }
        } catch (error) {
            // Axios error handling (just like your other handler)
            if (error.response) {
                console.log("Error response data:", error.response.data.error[0].message);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("".concat(error.response.data.error[0].message), {
                    position: "top-right",
                    autoClose: 5000
                });
            } else if (error.request) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Network error: Server did not respond", {
                    position: "top-right",
                    autoClose: 5000
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error: ".concat(error.message), {
                    position: "top-right",
                    autoClose: 5000
                });
            }
        }
    };
    // Tailwind CSS classes for error styling (conditional class application)
    const getErrorClass = (fieldName)=>errors[fieldName] ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Signup.useEffect": ()=>{
            // Any side effects or data fetching can go here
            setLoading(false);
        }
    }["Signup.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading Registration..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                lineNumber: 178,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
            lineNumber: 177,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center min-h-screen p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md bg-white p-6 px-8 rounded-xl bg-shadow shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-gray-900 text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-400",
                                    children: "Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 191,
                                    columnNumber: 86
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-green-700 mt-2 m-auto lg:w-70"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 192,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                            lineNumber: 191,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: submitHandler,
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        margin: "normal",
                                        required: true,
                                        fullWidth: true,
                                        id: "username",
                                        label: "Username",
                                        name: "username",
                                        autoComplete: "username",
                                        autoFocus: true,
                                        value: userData.username,
                                        onChange: changeHandler
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 202,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        margin: "normal",
                                        required: true,
                                        fullWidth: true,
                                        id: "email",
                                        label: "Email Address",
                                        name: "email",
                                        autoComplete: "email",
                                        autoFocus: true,
                                        value: userData.email,
                                        onChange: changeHandler
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 218,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 217,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        margin: "normal",
                                        required: true,
                                        fullWidth: true,
                                        id: "password",
                                        label: "Password",
                                        name: "password",
                                        type: "password",
                                        autoComplete: "current-password",
                                        value: userData.password,
                                        onChange: changeHandler
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 233,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 232,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        margin: "normal",
                                        required: true,
                                        fullWidth: true,
                                        id: "confirmPassword",
                                        label: "Confirm Password",
                                        name: "confirmPassword",
                                        autoComplete: "current-password",
                                        type: "password",
                                        value: userData.confirmPassword,
                                        onChange: changeHandler
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                        lineNumber: 248,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 247,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    name: "userType",
                                    value: userData.userType,
                                    onChange: changeHandler,
                                    className: "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm transition duration-150 ease-in-out ".concat(getErrorClass('userType')),
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            children: "Select User Type"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                            lineNumber: 262,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Job Seeker",
                                            className: "default",
                                            children: "Job Seeker"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                            lineNumber: 263,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Recruiter",
                                            children: "Recruiter"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                            lineNumber: 264,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Entrepreneur",
                                            disabled: true,
                                            children: "Entreprise Coming Soon"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                            lineNumber: 265,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        errors.userType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-500",
                                            children: errors.userType
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                            lineNumber: 266,
                                            columnNumber: 43
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 261,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                errors.userType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-red-500",
                                    children: errors.userType
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 268,
                                    columnNumber: 41
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50",
                                    disabled: isSubmitting,
                                    children: [
                                        " ",
                                        isSubmitting ? 'Registering...' : 'Register',
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 270,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                            lineNumber: 199,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-center border-t pt-4 border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mb-3",
                                    children: "Already have an account?"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 274,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/Login",
                                    passHref: true,
                                    className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm bg-indigo-700 font-medium text-gray-700 hover:bg-blue-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out",
                                    children: "Go to Login"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                                    lineNumber: 275,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                            lineNumber: 273,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                    lineNumber: 190,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                lineNumber: 189,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
                lineNumber: 282,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Smart-Engine/frontend/src/app/(components)/Signup/page.jsx",
        lineNumber: 188,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Signup, "qaxN/St/clGttW7X6ZblXWbbGts=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Signup;
const __TURBOPACK__default__export__ = Signup;
var _c;
__turbopack_context__.k.register(_c, "Signup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Smart-Engine_a221ba91._.js.map