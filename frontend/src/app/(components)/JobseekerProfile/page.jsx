"use client";

import { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function JobseekerProfile() {
  const [activeSection, setActiveSection] = useState('basic');
  const [profileImage, setProfileImage] = useState(null);
  const [user, setUser] = useState(null);

  const [sectionsData, setSectionsData] = useState({
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
    preferences: { desiredJobType: '', preferredLocation: '', availability: '' },
    summary: ''
  });

  const [basicDetails, setBasicDetails] = useState({
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    dob: ''
  });
  const [newSkill, setNewSkill] = useState({ name: '', proficiency: 'Beginner' });
  const [newLanguage, setNewLanguage] = useState({ name: '', proficiency: 'Basic' });
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '', tech: '', start: '', end: '', role: '', achievements: '' });
  const [newEducation, setNewEducation] = useState({ institute: '', degree: '', field: '', start: '', end: '' });
  const [newInternship, setNewInternship] = useState({ company: '', role: '', start: '', end: '', summary: '' });
  const [newCompetitiveExam, setNewCompetitiveExam] = useState({ examName: '', year: '', score: '', rank: '' });
  const [newAcademicAchievement, setNewAcademicAchievement] = useState({ title: '', year: '', description: '' });
  const [newGeneric, setNewGeneric] = useState({ title: '', description: '', date: '', organization: '', role: '', start: '', end: '', issuer: '', certificateLink: '' });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeInfo, setResumeInfo] = useState({ name: '', url: '', uploadDate: null, size: null });
  const router = useRouter();
  const [mode, setMode] = useState('overview'); // 'overview' | 'edit'

  // Completion calculation
  const completion = useMemo(() => {
    let total = 0; let filled = 0;
    const add = (isFilled) => { total += 1; if (isFilled) filled += 1; };
    // Basic
    add(!!basicDetails.fullName?.trim());
    add(!!basicDetails.email?.trim());
    add(!!basicDetails.phone?.trim());
    add(!!basicDetails.address?.trim());
    add(!!basicDetails.gender?.trim());
    add(!!basicDetails.dob?.trim());
    add(!!profileImage);
    // Preferences
    add(!!sectionsData.preferences.desiredJobType?.trim());
    add(!!sectionsData.preferences.preferredLocation?.trim());
    add(!!sectionsData.preferences.availability?.trim());
    // Lists
    add((sectionsData.education || []).length > 0);
    add((sectionsData.skills || []).length > 0);
    add((sectionsData.languages || []).length > 0);
    add((sectionsData.internship || []).length > 0);
    add((sectionsData.projects || []).length > 0);
    add((sectionsData.competitiveExams || []).length > 0);
    add((sectionsData.academicAchievements || []).length > 0);
    // Summary
    add(!!sectionsData.summary?.trim());
    // Resume
    add(!!resumeInfo.name?.trim());
    const pct = total ? Math.round((filled / total) * 100) : 0;
    return { pct, missing: Math.max(0, total - filled) };
  }, [basicDetails, profileImage, sectionsData, resumeInfo]);

  useEffect(() => {
    try {
      const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;

      const u = params ? params.get('u') : null;
      if (u) {
        try {
          const decoded = JSON.parse(atob(decodeURIComponent(u)));
          if (decoded?.user) localStorage.setItem('user', JSON.stringify(decoded.user));
          if (decoded?.token) localStorage.setItem('token', decoded.token);
          if (decoded?.userType) localStorage.setItem('userType', decoded.userType);
          setUser(decoded?.user || null);
          if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.delete('u');
            window.history.replaceState({}, '', url.toString());
          }
        } catch (_) { }
      }
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const u = JSON.parse(storedUser);
        setUser(u);
        const fullName = [u?.firstName, u?.lastName].filter(Boolean).join(' ') || u?.username || (u?.email ? u.email.split('@')[0] : '');
        setBasicDetails(prev => ({
          ...prev,
          fullName,
          email: u?.email || ''
        }));
        const userId = u._id || u.id || u.email || 'default';
        const img = localStorage.getItem(`profileImageUrl_${userId}`);
        if (img) setProfileImage(img);
      }
    } catch (_) { }
  }, [router]);

  // Load existing profile from backend when user is available
  useEffect(() => {
    if (!user) return;
    const load = async () => {
      try {
        const base = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const url = base ? `${base}/api/profile/get` : `/api/profile/get`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user._id || user.id, userType: 'jobseeker' }),
          credentials: 'include'
        });
        const json = await res.json().catch(() => ({}));
        if (json?.success && json.data) {
          const u = json.data.user || {};
          const p = json.data.profile || {};

          // Basic details (combine User and JobSeekerProfile fields)
          const fullName =
            u.fullName ||
            [u.firstName, u.lastName].filter(Boolean).join(' ') ||
            u.username ||
            (u.email ? u.email.split('@')[0] : '') ||
            basicDetails.fullName;

          setBasicDetails(prev => ({
            ...prev,
            fullName: fullName || prev.fullName || '',
            email: u.email || prev.email || '',
            phone: p.phone || prev.phone || '',
            address: (typeof p.address === 'string' ? p.address : (p.address?.street || '')) || prev.address || '',
            gender: p.gender || prev.gender || '',
            dob: (p.dateOfBirth ? String(p.dateOfBirth).slice(0, 10) : '') || prev.dob || ''
          }));

          // Profile image with fallbacks (use profilePicture from JobSeekerProfile)
          const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
          const apiImg = p.profilePicture || p.profileImage || p.avatar || p.avatarUrl || p.imageUrl || p.profilePhoto || '';
          const userId = u._id || u.id || u.email || 'default';
          if (apiImg) {
            const fullImg = apiImg.startsWith('http') ? apiImg : (baseUrl ? `${baseUrl}${apiImg}` : apiImg);
            setProfileImage(fullImg);
            if (typeof window !== 'undefined') localStorage.setItem(`profileImageUrl_${userId}`, fullImg);
          } else if (typeof window !== 'undefined') {
            const localImg = localStorage.getItem(`profileImageUrl_${userId}`);
            if (localImg) setProfileImage(localImg);
          }

          // Load resume info
          const resumeData = p.resume;
          if (resumeData && resumeData.filepath) { // Schema uses filePath or resume.path? Backend schema says resume: { fileName, filePath }
            const path = resumeData.filePath || resumeData.path;
            if (path) {
              const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
              const resumeUrl = path.startsWith('http') ? path : `${baseUrl}${path}`;
              setResumeInfo({
                name: resumeData.fileName || resumeData.originalName || '',
                url: resumeUrl,
                uploadDate: resumeData.uploadedAt || resumeData.uploadDate,
                size: resumeData.size // Schema doesn't have size, might be missing
              });
            }
          }

          // Helper to format YYYY-MM
          const fmtDate = (d) => d ? new Date(d).toISOString().slice(0, 7) : '';

          setSectionsData({
            education: Array.isArray(p.education) ? p.education.map(e => ({
              id: e._id || Date.now(),
              institute: e.institution,
              degree: e.degree,
              field: e.fieldOfStudy,
              start: fmtDate(e.startDate),
              end: fmtDate(e.endDate)
            })) : [],
            skills: Array.isArray(p.skills) ? p.skills.map(s => ({
              id: s._id || Date.now(),
              title: s.skillName,
              name: s.skillName,
              proficiency: s.proficiencyLevel ? (s.proficiencyLevel.charAt(0).toUpperCase() + s.proficiencyLevel.slice(1)) : 'Intermediate',
              description: `Proficiency: ${s.proficiencyLevel ? (s.proficiencyLevel.charAt(0).toUpperCase() + s.proficiencyLevel.slice(1)) : 'Intermediate'}`
            })) : [],
            internship: Array.isArray(p.experience) ? p.experience.map(exp => ({
              id: exp._id || Date.now(),
              company: exp.company,
              role: exp.jobTitle,
              start: fmtDate(exp.startDate),
              end: fmtDate(exp.endDate),
              summary: exp.description
            })) : [],
            projects: Array.isArray(p.projects) ? p.projects.map(proj => ({
              id: proj._id || Date.now(),
              title: proj.title,
              description: proj.description,
              tech: Array.isArray(proj.technologies) ? proj.technologies.join(', ') : '',
              link: proj.projectUrl,
              start: fmtDate(proj.startDate),
              end: fmtDate(proj.endDate)
              // Note: role and achievements not in backend schema for projects
            })) : [],
            languages: Array.isArray(p.languages) ? p.languages.map(l => ({
              id: l._id || Date.now(),
              title: l.language,
              name: l.language,
              proficiency: l.proficiency ? (l.proficiency.charAt(0).toUpperCase() + l.proficiency.slice(1)) : 'Conversational',
              description: `Proficiency: ${l.proficiency ? (l.proficiency.charAt(0).toUpperCase() + l.proficiency.slice(1)) : 'Conversational'}`
            })) : [],
            competitiveExams: Array.isArray(p.competitiveExams) ? p.competitiveExams : [],
            academicAchievements: Array.isArray(p.academicAchievements) ? p.academicAchievements : [],
            accomplishments: Array.isArray(p.accomplishments) ? p.accomplishments : [], // Not in schema, fallback
            position: Array.isArray(p.position) ? p.position : [], // Not in schema, fallback
            volunteering: Array.isArray(p.volunteering) ? p.volunteering : [], // Not in schema, fallback
            extraCurricular: Array.isArray(p.extraCurricular) ? p.extraCurricular : [], // Not in schema, fallback

            preferences: {
              desiredJobType: p.preferences?.jobTypes?.[0] || '',
              preferredLocation: p.preferences?.preferredLocations?.join(', ') || '',
              availability: '', // Complex to map back date to "15 days" etc without logic, leaving empty for now or could calculate diff
              expectedSalary: p.preferences?.expectedSalary?.min || '',
              remote: p.preferences?.workModes?.includes('remote') ? 'remote' : (p.preferences?.workModes?.includes('hybrid') ? 'hybrid' : (p.preferences?.workModes?.includes('on-site') ? 'onsite' : '')),
              desiredRoles: '', // Not in schema under preferences directly? Schema has preferences.jobTypes, but not desiredRoles string list.
              industries: '' // Not in schema
            },
            summary: p.summary || ''
          });
        }
      } catch (_) { console.error(_); }
    };
    load();
  }, [user]);

  const profileSections = [
    { id: 'basic', label: 'Basic Details' },
    { id: 'preferences', label: 'Career Preferences' },
    { id: 'education', label: 'Education Details' },
    { id: 'internship', label: 'Internship & Work Ex' },
    { id: 'skills', label: 'Skills, Subjects & Languages' },
    { id: 'languages', label: 'Languages' },
    { id: 'position', label: 'Position of Responsibilities' },
    { id: 'projects', label: 'Projects' },
    { id: 'accomplishments', label: 'Accomplishments' },
    { id: 'volunteering', label: 'Volunteering' },
    { id: 'extra-curricular', label: 'Extra-curricular Activities' },
    { id: 'competitive-exams', label: 'Competitive Exams' },
    { id: 'academic-achievements', label: 'Academic Achievements' },
    { id: 'profile-summary', label: 'Profile Summary' },
    { id: 'resume', label: 'Resume' }
  ];

  const goToEdit = (sectionId) => {
    setActiveSection(sectionId);
    setMode('edit');
    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => {
        const el = document.getElementById('editor-root');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const uploadAvatar = async (file) => {
    const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');

    const url = baseUrl ? `${baseUrl}/api/profile/upload-photo` : `/api/profile/upload-photo`;
    const fd = new FormData();
    fd.append('file', file);
    if (user?._id || user?.id) fd.append('userId', user._id || user.id);
    fd.append('userType', 'jobseeker');

    const token = localStorage.getItem('token');
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(url, {
      method: 'POST',
      body: fd,
      headers: headers
    });
    if (!res.ok) throw new Error('upload failed');
    return res.json().catch(() => ({}));
  };

  const handleImageChange = async (event) => {

    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImage(e.target.result);

    };
    reader.readAsDataURL(file);
    try {
      const result = await uploadAvatar(file);
      const url = result?.data?.url || result?.url || result?.path || null;
      if (url) {
        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const fullUrl = url.startsWith('http') ? url : (baseUrl ? `${baseUrl}${url}` : url);
        setProfileImage(fullUrl);
        if (typeof window !== 'undefined') {
          const storedUser = localStorage.getItem('user');
          let userId = 'default';
          if (storedUser) {
            try {
              const u = JSON.parse(storedUser);
              userId = u._id || u.id || u.email || userId;
            } catch (_) { }
          }
          localStorage.setItem(`profileImageUrl_${userId}`, fullUrl);
        }
      }

    } catch (_) {
      alert('Failed to upload photo. Please try again.');
    }
  };

  // Resume upload functions
  const handleResumeChange = (event) => {
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

  const uploadResume = async () => {
    if (!resumeFile || !user) return null;

    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const token = localStorage.getItem('token');

      const fd = new FormData();
      fd.append('file', resumeFile);
      fd.append('userId', user._id || user.id);

      const res = await fetch(`${baseUrl}/api/profile/upload-resume`, {
        method: 'POST',
        body: fd,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result = await res.json();
      if (result.success) {
        const resumeData = result.data.resume;
        const resumeUrl = resumeData.path.startsWith('http') ? resumeData.path : `${baseUrl}${resumeData.path}`;

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

  const handleRemoveResume = async () => {
    if (!user || !resumeInfo.name) return;

    if (!confirm('Are you sure you want to remove your resume?')) return;

    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const token = localStorage.getItem('token');

      const res = await fetch(`${baseUrl}/api/profile/remove-resume`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          userId: user._id || user.id
        })
      });

      const json = await res.json();
      if (json?.success) {
        setResumeInfo({ name: '', url: '', uploadDate: null, size: null });
        setResumeFile(null);
        alert('Resume removed successfully!');
      } else {
        alert(json?.message || 'Failed to remove resume. Please try again.');
      }
    } catch (error) {
      console.error('Resume removal error:', error);
      alert('Failed to remove resume. Please try again.');
    }
  };

  const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '')
    .trim()
    .replace(/[;\s]+$/, '')
    .replace(/\/$/, '');
  const profileSavePath = process.env.NEXT_PUBLIC_PROFILE_SAVE_PATH || '/api/profile/jobseeker';
  const normalizedProfilePath = profileSavePath.startsWith('/') ? profileSavePath : `/${profileSavePath}`;

  const handleSave = async () => {
    try {
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

      const token = (typeof window !== 'undefined' && localStorage.getItem('token')) || '';

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
      const allowedGenders = ['', 'male', 'female', 'other', 'prefer-not-to-say'];
      if (!allowedGenders.includes(normalizedGender)) {
        alert('Please select a valid gender option.');
        return;
      }

      // Calculate availability date
      let availabilityDate = undefined;
      const avail = sectionsData.preferences?.availability;
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
      const experience = (sectionsData.internship || []).map(item => ({
        jobTitle: item.role,
        company: item.company,
        startDate: item.start ? new Date(item.start) : undefined,
        endDate: item.end ? new Date(item.end) : undefined,
        description: item.summary,
        isCurrentJob: false // Default/Assumption
      }));

      // Map Education
      const education = (sectionsData.education || []).map(item => ({
        degree: item.degree,
        institution: item.institute,
        fieldOfStudy: item.field,
        startDate: item.start ? new Date(item.start) : undefined,
        endDate: item.end ? new Date(item.end) : undefined,
        grade: '', // Not in UI
        description: '' // Not in UI
      }));

      // Map Skills
      const skills = (sectionsData.skills || []).map(item => ({
        skillName: item.name || item.title, // Fallback to title if name is missing
        proficiencyLevel: (item.proficiency || 'Intermediate').toLowerCase()
      }));

      // Map Projects
      const projects = (sectionsData.projects || []).map(item => ({
        title: item.title,
        description: item.description,
        technologies: item.tech ? (typeof item.tech === 'string' ? item.tech.split(',') : []) : [], // Handle possible non-string
        projectUrl: item.link,
        startDate: item.start ? new Date(item.start) : undefined,
        endDate: item.end ? new Date(item.end) : undefined,
      }));

      // Map Languages
      const languages = (sectionsData.languages || []).map(item => ({
        language: item.name || item.title, // Fallback to title
        proficiency: (item.proficiency || 'Conversational').toLowerCase()
      }));

      // Flatten payload to match backend JobSeekerProfile schema
      const payload = {
        phone: normalizedPhone || undefined,
        dateOfBirth: basicDetails.dob,
        gender: normalizedGender || undefined,
        address: basicDetails.address
          ? { street: basicDetails.address }
          : undefined,
        profilePicture: profileImage,
        summary: sectionsData.summary,
        preferences: {
          jobTypes: sectionsData.preferences?.desiredJobType
            ? [String(sectionsData.preferences.desiredJobType).toLowerCase()]
            : [],
          preferredLocations: sectionsData.preferences?.preferredLocation
            ? [sectionsData.preferences.preferredLocation]
            : [],
          availabilityDate: availabilityDate,
          expectedSalary: sectionsData.preferences?.expectedSalary
            ? { min: Number(sectionsData.preferences.expectedSalary) || undefined }
            : undefined,
          // Adding missing preference fields that might be useful
          workModes: sectionsData.preferences?.remote ? [sectionsData.preferences.remote] : []
        },
        experience: experience, // Mapped from internships
        education: education,
        skills: skills,
        projects: projects,
        languages: languages,
        competitiveExams: sectionsData.competitiveExams || [],
        academicAchievements: sectionsData.academicAchievements || [],
        ...(resumeData && { resume: resumeData })
      };
      const requestUrl = baseUrl ? `${baseUrl}${normalizedProfilePath}` : `${normalizedProfilePath}`;
      const res = await fetch(requestUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify(payload),

        credentials: 'include'
      });
      const contentType = res.headers.get('content-type') || '';
      if (!res.ok) {
        const errText = await res.text().catch(() => '');
        alert(`Save failed (${res.status}). ${errText || 'No error body returned.'}`);
        return;
      }
      const data = contentType.includes('application/json') ? await res.json().catch(() => ({})) : {};
      alert(data?.message || 'Profile saved successfully.');
    } catch (e) {
      alert(`Unable to save profile. ${e?.message || ''}`.trim());
    }
  };

  const handleBackToDashboard = () => {
    router.push('/jobseeker-dashboard');
  };

  const handleAddItem = (section) => {
    const newItem = {
      id: Date.now(),
      title: `New ${section.label}`,
      description: 'Description goes here...',
      date: new Date().toISOString().split('T')[0]
    };

    setSectionsData(prev => ({
      ...prev,
      [section.id]: [...prev[section.id], newItem]
    }));
  };

  const handleRemoveItem = (section, itemId) => {
    setSectionsData(prev => ({
      ...prev,
      [section.id]: prev[section.id].filter(item => item.id !== itemId)
    }));
  };

  const sectionKey = (id) => {
    if (id === 'extra-curricular') return 'extraCurricular';
    if (id === 'competitive-exams') return 'competitiveExams';
    if (id === 'academic-achievements') return 'academicAchievements';
    return id;
  };

  const updateItem = (sectionId, itemId, patch) => {
    const key = sectionKey(sectionId);
    setSectionsData(prev => ({
      ...prev,
      [key]: (prev[key] || []).map(it => it.id === itemId ? { ...it, ...patch } : it)
    }));
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'preferences':
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-900 mb-2">Career Preferences</h4>
              <p className="text-indigo-700 text-sm">Tell us what roles and locations you prefer. This helps surface better matches.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Desired Job Type</label>
                <select
                  value={sectionsData.preferences.desiredJobType}
                  onChange={(e) => setSectionsData(prev => ({ ...prev, preferences: { ...prev.preferences, desiredJobType: e.target.value } }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                >
                  <option value="">Select</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Freelance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Preferred Location</label>
                <input
                  value={sectionsData.preferences.preferredLocation}
                  onChange={(e) => setSectionsData(prev => ({ ...prev, preferences: { ...prev.preferences, preferredLocation: e.target.value } }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="e.g., Bangalore, Remote"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Availability</label>
                <select
                  value={sectionsData.preferences.availability}
                  onChange={(e) => setSectionsData(prev => ({ ...prev, preferences: { ...prev.preferences, availability: e.target.value } }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                >
                  <option value="">Select</option>
                  <option>Immediate</option>
                  <option>15 days</option>
                  <option>30 days</option>
                  <option>60 days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Expected Salary (₹ per annum)</label>
                <input
                  type="number"
                  value={sectionsData.preferences.expectedSalary || ''}
                  onChange={(e) => setSectionsData(prev => ({ ...prev, preferences: { ...prev.preferences, expectedSalary: e.target.value } }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="e.g., 600000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Remote Preference</label>
                <select
                  value={sectionsData.preferences.remote || ''}
                  onChange={(e) => setSectionsData(prev => ({ ...prev, preferences: { ...prev.preferences, remote: e.target.value } }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                >
                  <option value="">No preference</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">Onsite</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Desired Roles (comma-separated)</label>
                <input
                  value={sectionsData.preferences.desiredRoles || ''}
                  onChange={(e) => setSectionsData(prev => ({ ...prev, preferences: { ...prev.preferences, desiredRoles: e.target.value } }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="e.g., Frontend Developer, UI Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Industries of Interest (comma-separated)</label>
                <input
                  value={sectionsData.preferences.industries || ''}
                  onChange={(e) => setSectionsData(prev => ({ ...prev, preferences: { ...prev.preferences, industries: e.target.value } }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="e.g., FinTech, SaaS, E-commerce"
                />
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-900 mb-2">Projects</h4>
              <p className="text-orange-700 text-sm">Add academic or personal projects with responsibilities and outcomes.</p>
            </div>
            {sectionsData.projects?.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-black text-lg">Your Projects</h4>
                {sectionsData.projects.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-black mb-1">Title</label>
                          <input value={item.title || ''} onChange={(e) => updateItem('projects', item.id, { title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                          <label className="block text-xs text-black mb-1">Link</label>
                          <input value={item.link || ''} onChange={(e) => updateItem('projects', item.id, { link: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                          <label className="block text-xs text-black mb-1">Technologies</label>
                          <input value={item.tech || ''} onChange={(e) => updateItem('projects', item.id, { tech: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-black mb-1">Start</label>
                            <input type="month" value={item.start || ''} onChange={(e) => updateItem('projects', item.id, { start: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                          </div>
                          <div>
                            <label className="block text-xs text-black mb-1">End</label>
                            <input type="month" value={item.end || ''} onChange={(e) => updateItem('projects', item.id, { end: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs text-black mb-1">Role</label>
                          <input value={item.role || ''} onChange={(e) => updateItem('projects', item.id, { role: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs text-black mb-1">Description</label>
                          <textarea value={item.description || ''} onChange={(e) => updateItem('projects', item.id, { description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" rows="2" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs text-black mb-1">Achievements</label>
                          <textarea value={item.achievements || ''} onChange={(e) => updateItem('projects', item.id, { achievements: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" rows="2" />
                        </div>
                      </div>
                      <button onClick={() => setSectionsData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== item.id) }))} className="text-red-600 hover:text-red-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Project Title</label>
                <input value={newProject.title} onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Smart Attendance System" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Project Link</label>
                <input value={newProject.link} onChange={(e) => setNewProject(prev => ({ ...prev, link: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="GitHub/Live URL" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Technologies</label>
                <input value={newProject.tech} onChange={(e) => setNewProject(prev => ({ ...prev, tech: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., React, Node.js, MongoDB" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Start</label>
                  <input type="month" value={newProject.start} onChange={(e) => setNewProject(prev => ({ ...prev, start: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">End</label>
                  <input type="month" value={newProject.end} onChange={(e) => setNewProject(prev => ({ ...prev, end: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Role</label>
                <input value={newProject.role} onChange={(e) => setNewProject(prev => ({ ...prev, role: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Frontend Developer" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">Description</label>
                <textarea value={newProject.description} onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Brief project summary and scope" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">Key Achievements</label>
                <textarea value={newProject.achievements} onChange={(e) => setNewProject(prev => ({ ...prev, achievements: e.target.value }))} rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Improved performance by 30%" />
              </div>
              <div className="md:col-span-2">
                <button
                  onClick={() => {
                    if (!newProject.title.trim()) return;
                    const item = { id: Date.now(), ...newProject, title: newProject.title.trim() };
                    setSectionsData(prev => ({ ...prev, projects: [item, ...(prev.projects || [])] }));
                    setNewProject({ title: '', description: '', link: '', tech: '', start: '', end: '', role: '', achievements: '' });
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  + Add Project
                </button>
              </div>
            </div>
          </div>
        );
      case 'basic':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border border-gray-300">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-semibold text-gray-600">
                      {basicDetails.fullName?.trim()?.[0]?.toUpperCase() || 'U'}
                    </span>
                  )}
                </div>
                <label
                  htmlFor="profile-photo-input"
                  className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs cursor-pointer border border-white shadow"
                >
                  &#128247;
                </label>
                <input
                  id="profile-photo-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              <div>
                <p className="text-sm text-black font-medium">Profile Photo</p>
                <p className="text-xs text-black">Upload a clear headshot. This will appear in your dashboard and profile.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your full name"
                  value={basicDetails.fullName}
                  onChange={(e) => setBasicDetails(prev => ({ ...prev, fullName: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Student ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your student ID"
                  value={basicDetails.studentId}
                  onChange={(e) => setBasicDetails(prev => ({ ...prev, studentId: e.target.value }))}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your email"
                  value={basicDetails.email}
                  onChange={(e) => setBasicDetails(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your phone number"
                  value={basicDetails.phone}
                  onChange={(e) => setBasicDetails(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Gender</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  value={basicDetails.gender}
                  onChange={(e) => setBasicDetails(prev => ({ ...prev, gender: e.target.value }))}
                >
                  <option value="">Select</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Birthday</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  value={basicDetails.dob}
                  onChange={(e) => setBasicDetails(prev => ({ ...prev, dob: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Address</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                rows="3"
                placeholder="Enter your address"
                value={basicDetails.address}
                onChange={(e) => setBasicDetails(prev => ({ ...prev, address: e.target.value }))}
              />
            </div>
          </div>
        );

      case 'languages':
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Languages</h4>
              <p className="text-yellow-700 text-sm">Add languages you can speak or write with proficiency.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Language</label>
                <input value={newLanguage.name} onChange={(e) => setNewLanguage(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., English" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Proficiency</label>
                <select value={newLanguage.proficiency} onChange={(e) => setNewLanguage(prev => ({ ...prev, proficiency: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black">
                  <option>Basic</option>
                  <option>Conversational</option>
                  <option>Fluent</option>
                  <option>Native</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    if (!newLanguage.name.trim()) return;
                    const item = {
                      id: Date.now(),
                      title: newLanguage.name.trim(),
                      description: `Proficiency: ${newLanguage.proficiency}`,
                      name: newLanguage.name.trim(), // Store raw name
                      proficiency: newLanguage.proficiency // Store raw proficiency
                    };
                    setSectionsData(prev => ({ ...prev, languages: [item, ...(prev.languages || [])] }));
                    setNewLanguage({ name: '', proficiency: 'Basic' });
                  }}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  + Add Language
                </button>
              </div>
            </div>
            {sectionsData.languages?.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-black text-lg">Your Languages</h4>
                {sectionsData.languages.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium text-black">{item.title}</h5>
                        <p className="text-black mt-1">{item.description}</p>
                      </div>
                      <button onClick={() => setSectionsData(prev => ({ ...prev, languages: prev.languages.filter(l => l.id !== item.id) }))} className="text-red-600 hover:text-red-800">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'profile-summary':
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-black mb-2">Profile Summary</h4>
              <p className="text-black text-sm">Write a concise summary to highlight your strengths.</p>
            </div>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              rows="6"
              placeholder="e.g., Final year CS student with strong JS/React skills..."
              value={sectionsData.summary}
              onChange={(e) => setSectionsData(prev => ({ ...prev, summary: e.target.value }))}
            />
          </div>
        );

      case 'resume':
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-900 mb-2">Resume Upload</h4>
              <p className="text-indigo-700 text-sm">Upload your resume to showcase your qualifications to employers.</p>
            </div>

            {/* Current Resume Display */}
            {resumeInfo.name && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">PDF</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">{resumeInfo.name}</h4>
                      {resumeInfo.uploadDate && (
                        <p className="text-sm text-black">
                          Uploaded {new Date(resumeInfo.uploadDate).toLocaleDateString()}
                        </p>
                      )}
                      {resumeInfo.size && (
                        <p className="text-sm text-black">
                          Size: {(resumeInfo.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    {resumeInfo.url && (
                      <a
                        href={resumeInfo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 font-medium"
                      >
                        View Resume
                      </a>
                    )}
                    <button
                      onClick={handleRemoveResume}
                      className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Upload New Resume */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
              <div className="text-center">
                <input
                  type="file"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="hidden"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">
                    {resumeInfo.name ? 'Replace Resume' : 'Upload Resume'}
                  </h3>
                  <p className="text-black mb-4">
                    Click to browse or drag and drop your resume
                  </p>
                  <p className="text-sm text-black">
                    Supported formats: PDF, DOC, DOCX (Max 10MB)
                  </p>
                </label>
              </div>
            </div>

            {/* Selected File Preview */}
            {resumeFile && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">NEW</span>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">{resumeFile.name}</p>
                      <p className="text-sm text-blue-700">
                        Ready to upload • {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setResumeFile(null);
                      setResumeInfo(prev => ({ ...prev, name: prev.url ? prev.name : '', uploadDate: prev.url ? prev.uploadDate : null, size: prev.url ? prev.size : null }));
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Add Your Educational Qualifications</h4>
              <p className="text-blue-700 text-sm">Include your degrees, certifications, and academic achievements.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Institute</label>
                <input value={newEducation.institute} onChange={(e) => setNewEducation(prev => ({ ...prev, institute: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., ABC University" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Degree</label>
                <input value={newEducation.degree} onChange={(e) => setNewEducation(prev => ({ ...prev, degree: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., B.Tech" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Field of Study</label>
                <input value={newEducation.field} onChange={(e) => setNewEducation(prev => ({ ...prev, field: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Computer Science" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Start</label>
                  <input type="month" value={newEducation.start} onChange={(e) => setNewEducation(prev => ({ ...prev, start: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">End</label>
                  <input type="month" value={newEducation.end} onChange={(e) => setNewEducation(prev => ({ ...prev, end: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
              </div>
              <div className="md:col-span-2">
                <button
                  onClick={() => {
                    if (!newEducation.institute.trim() || !newEducation.degree.trim()) return;
                    const item = { id: Date.now(), institute: newEducation.institute.trim(), degree: newEducation.degree.trim(), field: newEducation.field.trim(), start: newEducation.start, end: newEducation.end };
                    setSectionsData(prev => ({ ...prev, education: [item, ...prev.education] }));
                    setNewEducation({ institute: '', degree: '', field: '', start: '', end: '' });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  + Add Education
                </button>
              </div>
            </div>

            {sectionsData.education.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-black text-lg">Your Education</h4>
                {sectionsData.education.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-black mb-1">Institute</label>
                          <input value={item.institute || ''} onChange={(e) => updateItem('education', item.id, { institute: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                          <label className="block text-xs text-black mb-1">Degree</label>
                          <input value={item.degree || ''} onChange={(e) => updateItem('education', item.id, { degree: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                          <label className="block text-xs text-black mb-1">Field</label>
                          <input value={item.field || ''} onChange={(e) => updateItem('education', item.id, { field: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-black mb-1">Start</label>
                            <input type="month" value={item.start || ''} onChange={(e) => updateItem('education', item.id, { start: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                          </div>
                          <div>
                            <label className="block text-xs text-black mb-1">End</label>
                            <input type="month" value={item.end || ''} onChange={(e) => updateItem('education', item.id, { end: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                          </div>
                        </div>
                      </div>
                      <button onClick={() => handleRemoveItem({ id: 'education' }, item.id)} className="text-red-600 hover:text-red-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Skills & Languages</h4>
              <p className="text-green-700 text-sm">List your technical skills, subjects expertise, and language proficiencies.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Skill</label>
                <input value={newSkill.name} onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., React" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Proficiency</label>
                <select value={newSkill.proficiency} onChange={(e) => setNewSkill(prev => ({ ...prev, proficiency: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Expert</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    if (!newSkill.name.trim()) return;
                    const item = {
                      id: Date.now(),
                      title: newSkill.name.trim(),
                      description: `Proficiency: ${newSkill.proficiency}`,
                      name: newSkill.name.trim(), // Store raw name for saving
                      proficiency: newSkill.proficiency // Store raw proficiency for saving
                    };
                    setSectionsData(prev => ({ ...prev, skills: [item, ...prev.skills] }));
                    setNewSkill({ name: '', proficiency: 'Beginner' });
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  + Add Skill
                </button>
              </div>
            </div>

            {/* Display Added Skills Items */}
            {sectionsData.skills.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-black text-lg">Your Skills</h4>
                {sectionsData.skills.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium text-black">{item.title}</h5>
                        <p className="text-black mt-1">{item.description}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem({ id: 'skills' }, item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'internship':
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">Internship & Work Experience</h4>
              <p className="text-purple-700 text-sm">Add your professional work experience and internships.</p>
            </div>

            {sectionsData.internship.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-black text-lg">Your Experience</h4>
                {sectionsData.internship.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-black mb-1">Company</label>
                          <input value={item.company || ''} onChange={(e) => updateItem('internship', item.id, { company: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                          <label className="block text-xs text-black mb-1">Role</label>
                          <input value={item.role || ''} onChange={(e) => updateItem('internship', item.id, { role: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-black mb-1">Start</label>
                            <input type="month" value={item.start || ''} onChange={(e) => updateItem('internship', item.id, { start: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                          </div>
                          <div>
                            <label className="block text-xs text-black mb-1">End</label>
                            <input type="month" value={item.end || ''} onChange={(e) => updateItem('internship', item.id, { end: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs text-black mb-1">Summary</label>
                          <textarea value={item.summary || ''} onChange={(e) => updateItem('internship', item.id, { summary: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" rows="2" />
                        </div>
                      </div>
                      <button onClick={() => handleRemoveItem({ id: 'internship' }, item.id)} className="text-red-600 hover:text-red-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Company</label>
                <input value={newInternship.company} onChange={(e) => setNewInternship(prev => ({ ...prev, company: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Tech Solutions" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Role</label>
                <input value={newInternship.role} onChange={(e) => setNewInternship(prev => ({ ...prev, role: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Frontend Intern" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Start</label>
                  <input type="month" value={newInternship.start} onChange={(e) => setNewInternship(prev => ({ ...prev, start: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">End</label>
                  <input type="month" value={newInternship.end} onChange={(e) => setNewInternship(prev => ({ ...prev, end: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">Summary</label>
                <textarea value={newInternship.summary} onChange={(e) => setNewInternship(prev => ({ ...prev, summary: e.target.value }))} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Describe your responsibilities and achievements" />
              </div>
              <div className="md:col-span-2">
                <button
                  onClick={() => {
                    if (!newInternship.company.trim() || !newInternship.role.trim()) return;
                    const item = { id: Date.now(), company: newInternship.company.trim(), role: newInternship.role.trim(), start: newInternship.start, end: newInternship.end, summary: newInternship.summary };
                    setSectionsData(prev => ({ ...prev, internship: [item, ...prev.internship] }));
                    setNewInternship({ company: '', role: '', start: '', end: '', summary: '' });
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  + Add Experience
                </button>
              </div>
            </div>
          </div>
        );

      default:
        const currentSection = profileSections.find(s => s.id === activeSection);
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-black mb-2">{currentSection?.label}</h4>
              <p className="text-black text-sm">This section is available for you to update with your relevant information.</p>
            </div>

            case 'competitive-exams':
            return (
            <div className="space-y-6">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-900 mb-2">Competitive Exams</h4>
                <p className="text-teal-700 text-sm">Add details of exams like GATE, GRE, CAT, etc.</p>
              </div>

              {sectionsData.competitiveExams?.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-black text-lg">Added Exams</h4>
                  {sectionsData.competitiveExams.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h5 className="font-bold text-black">{item.examName}</h5>
                          <p className="text-sm text-gray-600">Year: {item.year} | Score: {item.score} | Rank: {item.rank}</p>
                        </div>
                        <button onClick={() => setSectionsData(prev => ({ ...prev, competitiveExams: prev.competitiveExams.filter(i => i.id !== item.id) }))} className="text-red-600 hover:text-red-800">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Exam Name</label>
                  <input value={newCompetitiveExam.examName} onChange={(e) => setNewCompetitiveExam(prev => ({ ...prev, examName: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., GATE" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Year</label>
                  <input type="number" value={newCompetitiveExam.year} onChange={(e) => setNewCompetitiveExam(prev => ({ ...prev, year: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., 2024" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Score</label>
                  <input value={newCompetitiveExam.score} onChange={(e) => setNewCompetitiveExam(prev => ({ ...prev, score: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., 750/1000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Rank</label>
                  <input value={newCompetitiveExam.rank} onChange={(e) => setNewCompetitiveExam(prev => ({ ...prev, rank: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., 150" />
                </div>
                <div className="md:col-span-2">
                  <button
                    onClick={() => {
                      if (!newCompetitiveExam.examName.trim()) return;
                      const item = { id: Date.now(), ...newCompetitiveExam };
                      setSectionsData(prev => ({ ...prev, competitiveExams: [item, ...(prev.competitiveExams || [])] }));
                      setNewCompetitiveExam({ examName: '', year: '', score: '', rank: '' });
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    + Add Exam
                  </button>
                </div>
              </div>
            </div>
            );

            case 'academic-achievements':
            return (
            <div className="space-y-6">
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h4 className="font-semibold text-pink-900 mb-2">Academic Achievements</h4>
                <p className="text-pink-700 text-sm">Highlight awards, scholarships, or academic recognitions.</p>
              </div>

              {sectionsData.academicAchievements?.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-black text-lg">Your Achievements</h4>
                  {sectionsData.academicAchievements.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h5 className="font-bold text-black">{item.title}</h5>
                          <p className="text-sm text-gray-600">{item.year ? `Year: ${item.year}` : ''}</p>
                          <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                        </div>
                        <button onClick={() => setSectionsData(prev => ({ ...prev, academicAchievements: prev.academicAchievements.filter(i => i.id !== item.id) }))} className="text-red-600 hover:text-red-800">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black mb-2">Title</label>
                  <input value={newAcademicAchievement.title} onChange={(e) => setNewAcademicAchievement(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., University Gold Medalist" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Year</label>
                  <input type="number" value={newAcademicAchievement.year} onChange={(e) => setNewAcademicAchievement(prev => ({ ...prev, year: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., 2023" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black mb-2">Description</label>
                  <textarea value={newAcademicAchievement.description} onChange={(e) => setNewAcademicAchievement(prev => ({ ...prev, description: e.target.value }))} rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Brief details about the achievement" />
                </div>
                <div className="md:col-span-2">
                  <button
                    onClick={() => {
                      if (!newAcademicAchievement.title.trim()) return;
                      const item = { id: Date.now(), ...newAcademicAchievement };
                      setSectionsData(prev => ({ ...prev, academicAchievements: [item, ...(prev.academicAchievements || [])] }));
                      setNewAcademicAchievement({ title: '', year: '', description: '' });
                    }}
                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    + Add Achievement
                  </button>
                </div>
              </div>
            </div>
            );

            {/* Generic add form for simple sections (enhanced) */}
            {['position', 'accomplishments', 'volunteering', 'extra-curricular'].includes(activeSection) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Title</label>
                  <input value={newGeneric.title} onChange={(e) => setNewGeneric(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Club Lead" />
                </div>
                {activeSection === 'accomplishments' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Issuer</label>
                      <input value={newGeneric.issuer} onChange={(e) => setNewGeneric(prev => ({ ...prev, issuer: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Coursera, AWS" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Certificate Link</label>
                      <input value={newGeneric.certificateLink} onChange={(e) => setNewGeneric(prev => ({ ...prev, certificateLink: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="URL to credential" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Date</label>
                      <input type="date" value={newGeneric.date} onChange={(e) => setNewGeneric(prev => ({ ...prev, date: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Organization</label>
                      <input value={newGeneric.organization} onChange={(e) => setNewGeneric(prev => ({ ...prev, organization: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Coding Club" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Role</label>
                      <input value={newGeneric.role} onChange={(e) => setNewGeneric(prev => ({ ...prev, role: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="e.g., Lead Organizer" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Start</label>
                        <input type="month" value={newGeneric.start} onChange={(e) => setNewGeneric(prev => ({ ...prev, start: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">End</label>
                        <input type="month" value={newGeneric.end} onChange={(e) => setNewGeneric(prev => ({ ...prev, end: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Date</label>
                      <input type="date" value={newGeneric.date} onChange={(e) => setNewGeneric(prev => ({ ...prev, date: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" />
                    </div>
                  </>
                )}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black mb-2">Description</label>
                  <textarea value={newGeneric.description} onChange={(e) => setNewGeneric(prev => ({ ...prev, description: e.target.value }))} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Describe your responsibilities, achievements or details" />
                </div>
                <div className="md:col-span-2">
                  <button
                    onClick={() => {
                      if (!newGeneric.title.trim()) return;
                      const item = activeSection === 'accomplishments'
                        ? { id: Date.now(), title: newGeneric.title.trim(), description: newGeneric.description || '', date: newGeneric.date || '', issuer: newGeneric.issuer || '', certificateLink: newGeneric.certificateLink || '' }
                        : { id: Date.now(), title: newGeneric.title.trim(), description: newGeneric.description || '', organization: newGeneric.organization || '', role: newGeneric.role || '', start: newGeneric.start || '', end: newGeneric.end || '', date: newGeneric.date || '' };
                      setSectionsData(prev => ({ ...prev, [activeSection === 'extra-curricular' ? 'extraCurricular' : activeSection]: [item, ...(prev[activeSection === 'extra-curricular' ? 'extraCurricular' : activeSection] || [])] }));
                      setNewGeneric({ title: '', description: '', date: '', organization: '', role: '', start: '', end: '', issuer: '', certificateLink: '' });
                    }}
                    className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    + Add {currentSection?.label}
                  </button>
                </div>
              </div>
            )}

            {/* Display Added Items for Current Section (enhanced) */}
            {sectionsData[sectionKey(activeSection)]?.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-black text-lg">Your {currentSection?.label}</h4>
                {sectionsData[sectionKey(activeSection)].map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-black mb-1">Title</label>
                          <input value={item.title || ''} onChange={(e) => updateItem(activeSection, item.id, { title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                        </div>
                        {activeSection === 'accomplishments' ? (
                          <>
                            <div>
                              <label className="block text-xs text-black mb-1">Issuer</label>
                              <input value={item.issuer || ''} onChange={(e) => updateItem(activeSection, item.id, { issuer: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                              <label className="block text-xs text-black mb-1">Certificate Link</label>
                              <input value={item.certificateLink || ''} onChange={(e) => updateItem(activeSection, item.id, { certificateLink: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                              <label className="block text-xs text-black mb-1">Date</label>
                              <input type="date" value={item.date || ''} onChange={(e) => updateItem(activeSection, item.id, { date: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <label className="block text-xs text-black mb-1">Organization</label>
                              <input value={item.organization || ''} onChange={(e) => updateItem(activeSection, item.id, { organization: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                              <label className="block text-xs text-black mb-1">Role</label>
                              <input value={item.role || ''} onChange={(e) => updateItem(activeSection, item.id, { role: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-xs text-black mb-1">Start</label>
                                <input type="month" value={item.start || ''} onChange={(e) => updateItem(activeSection, item.id, { start: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                              </div>
                              <div>
                                <label className="block text-xs text-black mb-1">End</label>
                                <input type="month" value={item.end || ''} onChange={(e) => updateItem(activeSection, item.id, { end: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs text-black mb-1">Date</label>
                              <input type="date" value={item.date || ''} onChange={(e) => updateItem(activeSection, item.id, { date: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" />
                            </div>
                          </>
                        )}
                        <div className="md:col-span-2">
                          <label className="block text-xs text-black mb-1">Description</label>
                          <textarea value={item.description || ''} onChange={(e) => updateItem(activeSection, item.id, { description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded" rows="2" />
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem({ id: activeSection }, item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', background: '#f9fafb', minHeight: '100vh' }}>
      <Head>
        <title>Jobseeker Profile</title>
        <meta name="description" content="Jobseeker Profile Management" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={handleBackToDashboard}
                className="flex items-center text-black hover:text-gray-700 mr-6"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Dashboard
              </button>
              <h1 className="text-2xl font-bold text-black">Career Portal</h1>
            </div>
            <nav className="flex space-x-8">
              <Link href="/jobseeker-dashboard" className="text-black hover:text-gray-700 font-medium">
                Dashboard
              </Link>
              <Link href="/profiles/jobseeker-profile" className="text-blue-600 font-medium border-b-2 border-blue-600">
                My Profile
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Profile Header with completion */}
          <div className="p-6">
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Avatar + Completion ring (click to upload) */}
              <div className="relative w-28 h-28">
                <svg viewBox="0 0 36 36" className="absolute inset-0 w-28 h-28 rotate-[-90deg]">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F1F5F9" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#22C55E" strokeWidth="3" strokeDasharray={`${Math.max(0, Math.min(100, completion.pct))}, 100`} />
                </svg>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('profile-image');
                    if (el) el.click();
                  }}
                  className="w-24 h-24 bg-gray-200 rounded-full mx-auto mt-2 flex items-center justify-center overflow-hidden ring-2 ring-transparent hover:ring-blue-200 transition cursor-pointer"
                  title="Click to upload photo"
                >
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl text-black">👤</span>
                  )}
                </button>
                <input
                  id="profile-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full border">{completion.pct}%</div>
              </div>

              {/* Middle content */}
              <div className="flex-1 w-full">
                <h1 className="text-2xl font-bold text-black">{[user?.firstName, user?.lastName].filter(Boolean).join(' ') || user?.username || (user?.email ? user.email.split('@')[0] : 'User')}</h1>
                <p className="text-black mt-1">{basicDetails.address || 'Add address / city'}</p>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-black">📍</span>
                    <span className="text-black">{basicDetails.address?.split(',')[1]?.trim() || 'Chennai'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-black">📞</span>
                    <span className="text-black">{basicDetails.phone || 'Add phone'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-black">✉️</span>
                    <span className="text-black">{basicDetails.email || 'Add email'}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-6 text-sm">
                  <button className="text-blue-600" onClick={() => goToEdit('basic')}>{basicDetails.gender ? `Gender: ${basicDetails.gender}` : 'Add Gender'}</button>
                  <button className="text-blue-600" onClick={() => goToEdit('basic')}>{basicDetails.dob ? `Birthday: ${basicDetails.dob}` : 'Add birthday'}</button>
                </div>
              </div>
              {/* Suggestions card removed as per request */}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">

            {/* Sidebar Navigation - Desktop */}
            <div className="hidden lg:block lg:w-64 border-r shrink-0">
              <nav className="p-4 sticky top-6">
                {/* Quick Links Card */}
                <div className="mb-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="px-4 py-3 border-b font-semibold text-black text-lg">Quick links</div>
                  <div className="py-1">
                    {[
                      { label: 'Preference', target: 'preferences' },
                      { label: 'Education', target: 'education' },
                      { label: 'Key skills', target: 'skills' },
                      { label: 'Languages', target: 'languages' },
                      { label: 'Internships', target: 'internship' },
                      { label: 'Projects', target: 'projects' },
                      { label: 'Profile summary', target: 'profile-summary' },
                      { label: 'Accomplishments', target: 'accomplishments' },
                      { label: 'Competitive exams', target: 'competitive-exams' },
                      { label: 'Employment', target: 'internship' },
                      { label: 'Academic achievements', target: 'academic-achievements' },
                      { label: 'Resume', target: 'resume' }
                    ].map(item => (
                      <button
                        key={item.target + item.label}
                        onClick={() => goToEdit(item.target)}
                        className={`w-full text-left px-4 py-3 text-base transition-colors ${activeSection === item.target
                          ? 'bg-white text-blue-700 font-semibold border-l-4 border-blue-600'
                          : 'text-black hover:bg-white hover:text-blue-700'
                          }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className="lg:hidden mb-6">
              <label htmlFor="mobile-nav" className="block text-sm font-medium text-gray-700 mb-2">Navigate to Section</label>
              <select
                id="mobile-nav"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base text-black bg-white"
                value={activeSection}
                onChange={(e) => goToEdit(e.target.value)}
              >
                {[
                  { label: 'Basic Details', target: 'basic' },
                  { label: 'Preference', target: 'preferences' },
                  { label: 'Education', target: 'education' },
                  { label: 'Key skills', target: 'skills' },
                  { label: 'Languages', target: 'languages' },
                  { label: 'Internships', target: 'internship' },
                  { label: 'Projects', target: 'projects' },
                  { label: 'Profile summary', target: 'profile-summary' },
                  { label: 'Accomplishments', target: 'accomplishments' },
                  { label: 'Competitive exams', target: 'competitive-exams' },
                  { label: 'Academic achievements', target: 'academic-achievements' },
                  { label: 'Resume', target: 'resume' }
                ].map((item) => (
                  <option key={item.target} value={item.target}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {/* Header */}
              <div className="border-b pb-3 mb-6">
                <h2 className="text-xl font-semibold text-black">View & Edit</h2>
              </div>

              {mode === 'overview' ? (
                <div className="space-y-4">
                  {/* Preferences Card */}
                  <div className="bg-white rounded-2xl p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-black">Your career preferences</h3>
                      <button className="text-blue-600" onClick={() => goToEdit('preferences')}>Add</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                      <div>
                        <div className="text-black">Preferred job type</div>
                        <button className="text-blue-600" onClick={() => goToEdit('preferences')}>{sectionsData.preferences.desiredJobType ? sectionsData.preferences.desiredJobType : 'Add desired job type'}</button>
                      </div>
                      <div>
                        <div className="text-black">Availability to work</div>
                        <button className="text-blue-600" onClick={() => goToEdit('preferences')}>{sectionsData.preferences.availability ? sectionsData.preferences.availability : 'Add work availability'}</button>
                      </div>
                      <div>
                        <div className="text-black">Preferred location</div>
                        <button className="text-blue-600" onClick={() => goToEdit('preferences')}>{sectionsData.preferences.preferredLocation ? sectionsData.preferences.preferredLocation : 'Add preferred work location'}</button>
                      </div>
                    </div>
                  </div>

                  {/* Education Card */}
                  <div className="bg-white rounded-2xl p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-black">Education</h3>
                      <button className="text-blue-600" onClick={() => goToEdit('education')}>Add</button>
                    </div>
                    {sectionsData.education.length > 0 ? (
                      <ul className="space-y-2 text-base text-black">
                        {sectionsData.education.slice(0, 2).map(e => (
                          <li key={e.id} className="flex items-center gap-2"><span className="font-medium">{e.degree}</span> <span className="text-black">{e.institute}</span></li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-black text-base">Add your degree details</p>
                    )}
                  </div>

                  {/* Key skills Card */}
                  <div className="bg-white rounded-2xl p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-black">Key skills</h3>
                      <button className="text-blue-600" onClick={() => goToEdit('skills')}>Add</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(sectionsData.skills || []).slice(0, 8).map(s => (
                        <span key={s.id} className="px-3 py-1.5 rounded-full bg-gray-100 text-black text-base">{s.title}</span>
                      ))}
                      {sectionsData.skills.length === 0 && <p className="text-black text-base">Add your key skills</p>}
                    </div>
                  </div>

                  {/* Languages Card */}
                  <div className="bg-white rounded-2xl p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-black">Languages</h3>
                      <button className="text-blue-600" onClick={() => goToEdit('languages')}>Add</button>
                    </div>
                    {sectionsData.languages?.length ? (
                      <ul className="text-base text-black list-disc list-inside">
                        {sectionsData.languages.map(l => <li key={l.id}>{l.title} • {l.description}</li>)}
                      </ul>
                    ) : <p className="text-black text-base">Add languages you know</p>}
                  </div>

                  {/* Internships Card */}
                  <div className="bg-white rounded-2xl p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-black">Internships</h3>
                      <button className="text-blue-600" onClick={() => goToEdit('internship')}>Add</button>
                    </div>
                    {sectionsData.internship?.length ? (
                      <ul className="text-base text-black list-disc list-inside">
                        {sectionsData.internship.slice(0, 2).map(i => <li key={i.id}>{i.role} @ {i.company}</li>)}
                      </ul>
                    ) : <p className="text-black text-base">Add internship or work experience</p>}
                  </div>

                  {/* Projects Card */}
                  <div className="bg-white rounded-2xl p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-black">Projects</h3>
                      <button className="text-blue-600" onClick={() => goToEdit('projects')}>Add</button>
                    </div>
                    {sectionsData.projects?.length ? (
                      <ul className="text-base text-black list-disc list-inside">
                        {sectionsData.projects.slice(0, 2).map(p => <li key={p.id}>{p.title}</li>)}
                      </ul>
                    ) : <p className="text-black text-base">Add your projects</p>}
                  </div>

                  {/* Profile Summary Card */}
                  <div className="bg-white rounded-2xl p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-black">Profile summary</h3>
                      <button className="text-blue-600" onClick={() => goToEdit('profile-summary')}>Add</button>
                    </div>
                    <p className="text-base text-black">{sectionsData.summary || 'Write a concise summary to highlight your strengths'}</p>
                  </div>

                  {/* Resume Card */}
                  <div className="bg-white rounded-2xl p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-black">Resume</h3>
                      <button className="text-blue-600" onClick={() => goToEdit('resume')}>
                        {resumeInfo.name ? 'Update' : 'Add'}
                      </button>
                    </div>
                    {resumeInfo.name ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-red-600 font-semibold text-xs">PDF</span>
                        </div>
                        <div>
                          <p className="font-medium text-black">{resumeInfo.name}</p>
                          {resumeInfo.uploadDate && (
                            <p className="text-sm text-black">
                              Uploaded {new Date(resumeInfo.uploadDate).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <p className="text-black text-base">Upload your resume to showcase your qualifications</p>
                    )}
                  </div>
                </div>
              ) : (
                <div id="editor-root">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-black mb-2">
                      {profileSections.find(s => s.id === activeSection)?.label}
                    </h2>
                    <p className="text-black">
                      Manage your {profileSections.find(s => s.id === activeSection)?.label.toLowerCase()}
                    </p>
                  </div>

                  {renderSectionContent()}

                  <div className="mt-8 pt-6 border-t flex justify-end items-center">
                    <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}