import mongoose from 'mongoose';

const jobSeekerProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },

  phone: {
    type: String,
    trim: true,
    match: [/^[0-9]{10}$/, 'Phone number must be 10 digits']
  },

  dateOfBirth: {
    type: Date
  },

  gender: {
    type: String,
    enum: ['male', 'female', 'other', 'prefer-not-to-say']
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
    maxlength: [1000, 'Summary cannot exceed 1000 characters']
  },

  experience: [{
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
    endDate: {
      type: Date
    },
    isCurrentJob: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    },
    location: {
      type: String
    }
  }],

  competitiveExams: [mongoose.Schema.Types.Mixed],
  academicAchievements: [mongoose.Schema.Types.Mixed],

  education: [{
    degree: {
      type: String,
      required: true
    },
    institution: {
      type: String,
      required: true
    },
    fieldOfStudy: {
      type: String
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    grade: {
      type: String
    },
    description: {
      type: String
    }
  }],

  skills: [{
    skillName: {
      type: String,
      required: true
    },
    proficiencyLevel: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'expert'],
      default: 'intermediate'
    }
  }],

  certifications: [{
    name: {
      type: String,
      required: true
    },
    issuingOrganization: {
      type: String,
      required: true
    },
    issueDate: {
      type: Date
    },
    expiryDate: {
      type: Date
    },
    credentialId: {
      type: String
    },
    credentialUrl: {
      type: String
    }
  }],

  languages: [{
    language: {
      type: String,
      required: true
    },
    proficiency: {
      type: String,
      enum: ['basic', 'conversational', 'fluent', 'native'],
      default: 'conversational'
    }
  }],

  projects: [{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    technologies: [String],
    projectUrl: {
      type: String
    },
    githubUrl: {
      type: String
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    }
  }],

  socialProfiles: {
    linkedin: {
      type: String
    },
    github: {
      type: String
    },
    portfolio: {
      type: String
    },
    twitter: {
      type: String
    }
  },

  preferences: {
    jobTypes: [{
      type: String,
      enum: ['full-time', 'part-time', 'contract', 'internship', 'freelance']
    }],
    workModes: [{
      type: String,
      enum: ['remote', 'on-site', 'hybrid']
    }],
    preferredLocations: [String],
    expectedSalary: {
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      currency: {
        type: String,
        default: 'INR'
      }
    },
    availabilityDate: {
      type: Date
    },
    willingToRelocate: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

// Virtual computed field for total years of experience (rounded to 1 decimal)
jobSeekerProfileSchema.virtual('experienceYears').get(function () {
  if (!this.experience || this.experience.length === 0) return 0;

  let totalMonths = 0;
  this.experience.forEach(exp => {
    if (!exp || !exp.startDate) return;

    const startDate = new Date(exp.startDate);
    const endDate = exp.isCurrentJob
      ? new Date()
      : (exp.endDate ? new Date(exp.endDate) : new Date());

    const monthsDiff =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    if (Number.isFinite(monthsDiff)) {
      totalMonths += Math.max(0, monthsDiff);
    }
  });

  return Math.round((totalMonths / 12) * 10) / 10;
});

export default mongoose.models.JobSeekerProfile
  || mongoose.model('JobSeekerProfile', jobSeekerProfileSchema);