import mongoose from 'mongoose';

const jobSeekerProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
<<<<<<< HEAD

=======
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
  phone: {
    type: String,
    trim: true,
    match: [/^[0-9]{10}$/, 'Phone number must be 10 digits']
  },
<<<<<<< HEAD

  dateOfBirth: {
    type: Date
  },

=======
  dateOfBirth: {
    type: Date
  },
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
  gender: {
    type: String,
    enum: ['male', 'female', 'other', 'prefer-not-to-say']
  },
<<<<<<< HEAD

=======
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String
  },
<<<<<<< HEAD

  profilePicture: {
    type: String
  },

=======
  profilePicture: {
    type: String
  },
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
  resume: {
    fileName: String,
    filePath: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  },
<<<<<<< HEAD

=======
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
  summary: {
    type: String,
    maxlength: [1000, 'Summary cannot exceed 1000 characters']
  },
<<<<<<< HEAD

=======
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
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
<<<<<<< HEAD
    endDate: {
      type: Date
    },
=======
    endDate: Date,
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
    isCurrentJob: {
      type: Boolean,
      default: false
    },
<<<<<<< HEAD
    description: {
      type: String
    },
    location: {
      type: String
    }
  }],

  competitiveExams: [mongoose.Schema.Types.Mixed],
  academicAchievements: [mongoose.Schema.Types.Mixed],

=======
    description: String,
    location: String
  }],
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
  education: [{
    degree: {
      type: String,
      required: true
    },
    institution: {
      type: String,
      required: true
    },
<<<<<<< HEAD
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

=======
    fieldOfStudy: String,
    startDate: Date,
    endDate: Date,
    grade: String,
    description: String
  }],
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
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
<<<<<<< HEAD

=======
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
  certifications: [{
    name: {
      type: String,
      required: true
    },
    issuingOrganization: {
      type: String,
      required: true
    },
<<<<<<< HEAD
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

=======
    issueDate: Date,
    expiryDate: Date,
    credentialId: String,
    credentialUrl: String
  }],
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
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
<<<<<<< HEAD

=======
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
  projects: [{
    title: {
      type: String,
      required: true
    },
<<<<<<< HEAD
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

=======
    description: String,
    technologies: [String],
    projectUrl: String,
    githubUrl: String,
    startDate: Date,
    endDate: Date
  }],
  socialProfiles: {
    linkedin: String,
    github: String,
    portfolio: String,
    twitter: String
  },
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
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
<<<<<<< HEAD
      min: {
        type: Number
      },
      max: {
        type: Number
      },
=======
      min: Number,
      max: Number,
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
      currency: {
        type: String,
        default: 'INR'
      }
    },
<<<<<<< HEAD
    availabilityDate: {
      type: Date
    },
=======
    availabilityDate: Date,
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
    willingToRelocate: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

<<<<<<< HEAD
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
=======
jobSeekerProfileSchema.virtual('experienceYears').get(function() {
  if (!this.experience || this.experience.length === 0) return 0;
  
  let totalMonths = 0;
  this.experience.forEach(exp => {
    const startDate = new Date(exp.startDate);
    const endDate = exp.isCurrentJob ? new Date() : new Date(exp.endDate);
    const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    totalMonths += monthsDiff;
  });
  
  return Math.round(totalMonths / 12 * 10) / 10;
});

export default mongoose.model('JobSeekerProfile', jobSeekerProfileSchema);
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
