"use client";

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import ProfilePage from '../../../components/ProfilePage';


const SmartMatch = dynamic(() => import('./SmartMatch'), { ssr: false });
const MockInterview = dynamic(() => import('./MockInterview'), { ssr: false });
const JobSwipe = dynamic(() => import('./JobSwipe'), { ssr: false });
const GameZone = dynamic(() => import('./GameZone'), { ssr: false });
import {
  FiHome,
  FiBriefcase,
  FiUser,
  FiCalendar,
  FiAward,
  FiBook,
  FiMenu,
  FiX,
  FiBell,
  FiCheck,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiPhone,
  FiMail,
  FiMapPin,
  FiFileText,
  FiSearch,
  FiBookmark,
  FiActivity,
  FiZap,
  FiTrendingUp,
  FiCheckCircle,
  FiLock,
  FiUnlock,
  FiChevronRight,
  FiCpu,
  FiVideo,
  FiLayers,
  FiDownload,
  FiPlay
} from 'react-icons/fi';

// Utility function to safely parse JSON
const safeJsonParse = (str, defaultValue = null) => {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error('JSON parse error:', error);
    return defaultValue;
  }
};

export default function JobseekerDashboard() {

  const [activeTab, setActiveTab] = useState('home');
  const [profileEditMode, setProfileEditMode] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);
  const [jobFilters, setJobFilters] = useState({ q: '', location: '', jobType: '', minSalary: '', maxSalary: '', sort: 'newest' });
  const [jobsPage, setJobsPage] = useState(1);
  const [jobsTotal, setJobsTotal] = useState(0);
  const [jobsLimit, setJobsLimit] = useState(10);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [activeSmartMatchJobId, setActiveSmartMatchJobId] = useState(null);
  const [isSwipeMode, setIsSwipeMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [user, setUser] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [events, setEvents] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [profileData, setProfileData] = useState(null);
  const [profileCompletion, setProfileCompletion] = useState(0);
  const [profileLoading, setProfileLoading] = useState(false);
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Unified sidebar state
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState({});
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
  const [applyingJobId, setApplyingJobId] = useState(null);
  // Match Modal State
  const [matchModalState, setMatchModalState] = useState({ show: false, type: 'success', score: 0, suggestions: [], message: '' });
  const [streak, setStreak] = useState(0);
  const [jobOfTheDay, setJobOfTheDay] = useState(null);
  const [profileBoosterTask, setProfileBoosterTask] = useState(null);
  const profileDataLoaded = useRef(false);

  // Settings toggles
  const [jobAlerts, setJobAlerts] = useState(true);
  const [emailDigest, setEmailDigest] = useState(true);

  // Eagerly compute booster task from localStorage on mount (client-side only) to prevent hydration mismatch
  useEffect(() => {
    try {
      const stored = localStorage.getItem('user');
      if (!stored) return;
      const u = JSON.parse(stored);
      let task = null;
      if (!u.summary || u.summary === 'Not provided') task = { id: 'summary', title: 'Add a Profile Summary', desc: 'Tell recruiters about yourself in a few sentences.' };
      else if (!u.skills || u.skills.length < 3) task = { id: 'skills', title: 'Add More Skills', desc: 'List at least 3 skills to get better job matches.' };
      else if (!u.profileImage) task = { id: 'photo', title: 'Upload Profile Photo', desc: 'Profiles with photos get 40% more views.' };
      else if (!u.resume) task = { id: 'resume', title: 'Upload Resume', desc: 'Upload your CV to apply to jobs instantly.' };
      else task = { title: 'All Caught Up!', desc: 'Your profile is looking great!', completed: true };

      setProfileBoosterTask(task);
    } catch { }
  }, []);

  const [interviewReminders, setInterviewReminders] = useState(true);
  const [profileVisible, setProfileVisible] = useState(true);
  const [showResume, setShowResume] = useState(true);

  // Profile Summary Modal
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [summaryText, setSummaryText] = useState('');
  const [summaryLoading, setSummaryLoading] = useState(false);

  // Add Skills Modal
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [skillsList, setSkillsList] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [skillProficiency, setSkillProficiency] = useState('Intermediate');
  const [skillsLoading, setSkillsLoading] = useState(false);

  // Resume Upload Modal
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeLoading, setResumeLoading] = useState(false);


  const router = useRouter();

  const uploadAvatar = async (file) => {
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Please upload only image files (JPEG, PNG, GIF, WebP).');
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new Error('File too large. Maximum size is 5MB.');
    }

    const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
    const uploadUrl = baseUrl ? `${baseUrl}/api/profile/upload-photo` : `/api/profile/upload-photo`;
    const token = localStorage.getItem('token');

    const fd = new FormData();
    fd.append('file', file);
    if (user?._id || user?.id) fd.append('userId', user._id || user.id);
    fd.append('userType', 'jobseeker');

    const res = await fetch(uploadUrl, {
      method: 'POST',
      body: fd,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Upload failed');
    }

    const result = await res.json().catch(() => ({}));
    const url = result?.data?.url || result?.url || result?.path || '';

    if (url) {
      // Ensure the URL is complete (add backend URL if it's a relative path)
      const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
      // Store locally for instant preview, scoped per user
      if (typeof window !== 'undefined') {
        const userId = user?._id || user?.id || user?.email || 'default';
        localStorage.setItem(`profileImageUrl_${userId}`, fullUrl);
      }
      return fullUrl;
    }

    throw new Error('No URL returned from upload');
  };

  // Build query string for jobs
  const buildJobsQuery = (page = 1) => {
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



  // Daily Streak Logic
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastLogin = localStorage.getItem('lastLoginDate');
    let currentStreak = parseInt(localStorage.getItem('streakCount') || '0');

    if (lastLogin !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (lastLogin === yesterdayStr) {
        currentStreak += 1;
      } else {
        currentStreak = 1;
      }
      localStorage.setItem('lastLoginDate', today);
      localStorage.setItem('streakCount', currentStreak.toString());
    }
    setStreak(currentStreak);
  }, []);

  // Profile Booster Logic
  useEffect(() => {
    if (!user) return;
    const tasks = [
      { id: 'summary', check: (u) => !u.summary || u.summary === 'Not provided', title: 'Add a Profile Summary', desc: 'Tell recruiters about yourself in a few sentences.' },
      { id: 'skills', check: (u) => !u.skills || u.skills.length < 3, title: 'Add More Skills', desc: 'List at least 3 skills to get better job matches.' },
      { id: 'photo', check: (u) => !u.profileImage && !avatarPreview, title: 'Upload Profile Photo', desc: 'Profiles with photos get 40% more views.' },
      { id: 'resume', check: (u) => !u.resume, title: 'Upload Resume', desc: 'Upload your CV to apply to jobs instantly.' }
    ];
    const nextTask = tasks.find(t => t.check(user));
    setProfileBoosterTask(nextTask || { title: 'All Caught Up!', desc: 'Your profile is looking great!', completed: true });
  }, [user, avatarPreview]);

  // Save Profile Summary to backend
  const handleSaveSummary = async () => {
    if (!summaryText.trim()) return;
    setSummaryLoading(true);
    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const token = localStorage.getItem('token');
      const res = await fetch(`${baseUrl}/api/profile/jobseeker`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ summary: summaryText.trim() }),
        credentials: 'include'
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        // Update local user state so booster task refreshes
        const updatedUser = { ...user, summary: summaryText.trim() };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        toast.success('Profile summary saved!');
        setShowSummaryModal(false);
      } else {
        toast.error(data?.message || 'Failed to save summary.');
      }
    } catch (e) {
      toast.error('Failed to save summary. Please try again.');
    } finally {
      setSummaryLoading(false);
    }
  };

  // Save Skills to backend
  const handleSaveSkills = async () => {
    if (skillsList.length === 0) return;
    setSkillsLoading(true);
    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const token = localStorage.getItem('token');
      const skills = skillsList.map(s => ({
        skillName: s.name,
        proficiencyLevel: s.proficiency.toLowerCase()
      }));
      const res = await fetch(`${baseUrl}/api/profile/jobseeker`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ skills }),
        credentials: 'include'
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        const updatedUser = { ...user, skills: skillsList };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        toast.success('Skills saved!');
        setShowSkillsModal(false);
        setSkillsList([]);
        setSkillInput('');
      } else {
        toast.error(data?.message || 'Failed to save skills.');
      }
    } catch (e) {
      toast.error('Failed to save skills. Please try again.');
    } finally {
      setSkillsLoading(false);
    }
  };

  // Upload Resume to backend
  const handleUploadResume = async () => {
    if (!resumeFile) return;
    setResumeLoading(true);
    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const token = localStorage.getItem('token');
      const fd = new FormData();
      fd.append('file', resumeFile);
      if (user?._id || user?.id) fd.append('userId', user._id || user.id);
      fd.append('userType', 'jobseeker');

      const res = await fetch(`${baseUrl}/api/profile/upload-resume`, {
        method: 'POST',
        headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: fd,
        credentials: 'include'
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        const resumeUrl = data?.data?.url || data?.url || data?.path || resumeFile.name;
        const updatedUser = { ...user, resume: resumeUrl };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        toast.success('Resume uploaded successfully!');
        setShowResumeModal(false);
        setResumeFile(null);
      } else {
        toast.error(data?.message || 'Failed to upload resume.');
      }
    } catch (e) {
      toast.error('Failed to upload resume. Please try again.');
    } finally {
      setResumeLoading(false);
    }
  };

  // Load jobs from backend with filters and pagination

  const loadJobs = async (page = 1) => {
    try {
      setJobsLoading(true);
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const apiUrl = baseUrl ? `${baseUrl}/api/jobs?${buildJobsQuery(page)}` : `/api/jobs?${buildJobsQuery(page)}`;
      const res = await fetch(apiUrl, { cache: 'no-store' });
      const json = await res.json();
      if (json?.success && Array.isArray(json.data)) {
        const items = json.data.map(j => ({
          id: j._id || j.id,
          title: j.title,
          company: j.company,
          description: j.description,
          skillsRequired: j.skillsRequired || [],
          experience: j.experience || '',
          location: j.location || '',
          jobType: j.jobType || 'Full-time',
          salary: j.salary || (j.maxSalary ? `Rs.${j.maxSalary}` : ''),
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
    } finally {
      setJobsLoading(false);
    }
  };

  // Job of the Day Logic (runs when jobs are loaded)
  useEffect(() => {
    if (jobPosts.length > 0 && !jobOfTheDay) {
      // Pick a random high-paying or featured job, or just the first one for now
      const featured = jobPosts.find(j => j.featured) || jobPosts[0];
      setJobOfTheDay(featured);
    }
  }, [jobPosts]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (!token) return;

        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const apiUrl = baseUrl ? `${baseUrl}/api/notifications` : '/api/notifications';

        const res = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          cache: 'no-store'
        });

        const json = await res.json().catch(() => ({}));
        if (res.ok && json?.success && Array.isArray(json.data)) {
          const serverNotifications = json.data.map(n => ({
            id: n._id,
            type: n.type || 'application',
            title: n.title || 'Notification',
            message: n.message || '',
            timestamp: new Date(n.createdAt || Date.now()).toLocaleString('en-IN'),
            read: !!n.read
          }));

          setNotifications(prev => {
            const existingIds = new Set(prev.map(p => String(p.id)));
            const merged = [
              ...serverNotifications.filter(n => !existingIds.has(String(n.id))),
              ...prev
            ];
            return merged;
          });
        }
      } catch (_) {
        // Ignore notification load errors to avoid breaking dashboard
      }
    };

    loadNotifications();
  }, []);

  useEffect(() => {
    try {
      const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
      const u = params ? params.get('u') : null;
      if (u) {
        try {
          const decoded = JSON.parse(atob(decodeURIComponent(u)));
          if (decoded?.user) {
            localStorage.setItem('user', JSON.stringify(decoded.user));
          }
          setUser(decoded?.user || null);
          if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.delete('u');
            window.history.replaceState({}, '', url.toString());
          }
        } catch (error) {
          console.error('Error parsing URL parameter:', error);
          // Clear the invalid parameter
          if (typeof window !== 'undefined') {
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
          const img = localStorage.getItem(`profileImageUrl_${userId}`);
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
    } catch (_) { }

    // Fetch latest profile to ensure avatar and details are up to date
    const refreshProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        let currentUserId = null;

        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          currentUserId = parsed._id || parsed.id;
        }

        if (token && currentUserId) {
          const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
          const res = await fetch(`${baseUrl}/api/profile/get`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: currentUserId, userType: 'jobseeker' })
          });
          const json = await res.json();
          if (json?.success && json?.data?.profile) {
            const p = json.data.profile;
            // Update avatar
            if (p.profilePicture) {
              const apiImg = p.profilePicture;
              const fullImg = apiImg.startsWith('http') ? apiImg : `${baseUrl}${apiImg.startsWith('/') ? '' : '/'}${apiImg}`;
              setAvatarPreview(fullImg);
              localStorage.setItem(`profileImageUrl_${currentUserId}`, fullImg);

              // Update user state if missing image
              // Update user state if missing image
              setUser(prev => prev ? ({
                ...prev,
                profileImage: fullImg,
                // Sync missing fields from profile
                phone: p.contactDetails?.phone || p.phone || prev.phone,
                gender: p.personalDetails?.gender || p.gender || prev.gender,
                dob: (p.personalDetails?.dateOfBirth || p.dateOfBirth) ? new Date(p.personalDetails?.dateOfBirth || p.dateOfBirth).toISOString().split('T')[0] : prev.dob,
                address: (p.contactDetails?.address && typeof p.contactDetails.address === 'string' ? p.contactDetails.address : p.contactDetails?.address?.street) || (typeof p.address === 'string' ? p.address : p.address?.street) || prev.address,
                summary: p.profileSummary || p.summary || prev.summary,
                skills: (p.skills && p.skills.length > 0) ? p.skills.map(s => s.skill || s.skillName || s) : (p.keySkills && p.keySkills.length > 0 ? p.keySkills : prev.skills)
              }) : prev);
            } else {
              // Update details even if no image change
              setUser(prev => prev ? ({
                ...prev,
                // Sync missing fields from profile
                phone: p.contactDetails?.phone || p.phone || prev.phone,
                gender: p.personalDetails?.gender || p.gender || prev.gender,
                dob: (p.personalDetails?.dateOfBirth || p.dateOfBirth) ? new Date(p.personalDetails?.dateOfBirth || p.dateOfBirth).toISOString().split('T')[0] : prev.dob,
                address: (p.contactDetails?.address && typeof p.contactDetails.address === 'string' ? p.contactDetails.address : p.contactDetails?.address?.street) || (typeof p.address === 'string' ? p.address : p.address?.street) || prev.address,
                summary: p.profileSummary || p.summary || prev.summary,
                skills: (p.skills && p.skills.length > 0) ? p.skills.map(s => s.skill || s.skillName || s) : (p.keySkills && p.keySkills.length > 0 ? p.keySkills : prev.skills)
              }) : prev);
            }
          }
        }
      } catch (e) { console.error('Profile refresh error', e); }
    };
    refreshProfile();
  }, []);

  const handleUpdateInterviewStatus = async (id, newStatus) => {
    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const res = await fetch(`${baseUrl}/api/interviews`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      if (res.ok) {
        setInterviews(prev => prev.map(i => (i.id === id || i._id === id) ? { ...i, status: newStatus } : i));
      }
    } catch (_) { }
  };

  // Assessments start/submit
  const handleStartAssessment = async (assessmentId) => {
    if (!user) return;
    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const res = await fetch(`${baseUrl}/api/assessments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'start', userId: user._id || user.id, assessmentId })
      });
      if (res.ok) {
        setAssessments(prev => prev.map(a => (String(a.id) === String(assessmentId)) ? { ...a, status: 'In Progress' } : a));
      }
    } catch (_) { }
  };

  const handleSubmitAssessment = async (assessmentId, score = 0) => {
    if (!user) return;
    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const res = await fetch(`${baseUrl}/api/assessments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'submit', userId: user._id || user.id, assessmentId, score })
      });
      if (res.ok) {
        setAssessments(prev => prev.map(a => (String(a.id) === String(assessmentId)) ? { ...a, status: 'Completed', score } : a));
      }
    } catch (_) { }
  };

  // Event register/unregister
  const handleRegisterEvent = async (eventId, registered) => {
    if (!user) return;
    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const res = await fetch(`${baseUrl}/api/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: registered ? 'unregister' : 'register', userId: user._id || user.id, eventId })
      });
      const ok = res.ok;
      if (ok) {
        setEvents(prev => prev.map(ev => ev._id === eventId ? { ...ev, registered: !registered } : ev));
      }
    } catch (_) { }
  };

  // Competition participate
  const handleParticipateCompetition = async (competitionId) => {
    if (!user) return;
    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const res = await fetch(`${baseUrl}/api/competitions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user._id || user.id, competitionId })
      });
      if (res.ok) {
        setCompetitions(prev => prev.map(c => c._id === competitionId ? { ...c, participated: true } : c));
      }
    } catch (_) { }
  };

  useEffect(() => {
    loadJobs(1);
    // Load saved and sample content for other tabs (appliedJobs now comes from backend per user)

    try {
      setSavedJobs(JSON.parse(localStorage.getItem('savedJobs') || '[]'));
    } catch (error) {
      console.error('Error parsing savedJobs:', error);
      setSavedJobs([]);
    }
    // Interviews, assessments, events, and competitions should come only from backend APIs
    // Fetch interviews (Job Seeker's own interviews)
    // Interviews are fetched in the user-dependent effect below

    setAssessments([]);
    setEvents([]);
    setCompetitions([]);

    // Listen for storage changes (new job posts)
    const handleStorageChange = () => {
      loadJobs();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);



  useEffect(() => {
    // Check if user exists and has some identifier
    if (!user || (!user._id && !user.id && !user.email)) return;

    // If we already loaded data for THIS user, skip.
    // We can use a ref to track the loaded user ID to be more precise than a boolean
    if (profileDataLoaded.current === (user._id || user.id || user.email)) return;

    let isMounted = true;
    profileDataLoaded.current = user._id || user.id || user.email;

    // Load applications for this user from backend
    const loadApplications = async () => {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (!token) return;

        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        // FIX: Add applicantId to query to ensure we fetch correctly
        const userId = user._id || user.id || user.email;
        const apiUrl = baseUrl ? `${baseUrl}/api/applications?applicantId=${encodeURIComponent(userId)}` : `/api/applications?applicantId=${encodeURIComponent(userId)}`;

        console.log('[Dashboard] Fetching applications from:', apiUrl);

        const res = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          cache: 'no-store'
        });

        const json = await res.json();
        console.log('[Dashboard] fetchApplications response:', json);

        if (isMounted && json?.success && Array.isArray(json.data)) {
          // Store full application details
          const apps = json.data.map(a => ({
            _id: a._id,
            jobId: a.job?._id || a.job?.id || a.job,
            jobTitle: a.job?.title || 'Unknown Job',
            company: a.job?.company || 'Unknown Company',
            status: a.status || 'Applied',
            matchScore: a.matchScore || 0,
            appliedDate: a.appliedDate || a.createdAt || new Date().toISOString()
          }));

          console.log('[Dashboard] Setting appliedJobs:', apps.length, apps);
          setAppliedJobs(apps);
          const currentUserId = user._id || user.id || user.email || 'default';
          localStorage.setItem(`appliedJobs_${currentUserId}`, JSON.stringify(apps));
        } else {
          console.warn('[Dashboard] fetchApplications failed or no data:', json);
        }
      } catch (error) {
        console.error('[Dashboard] Error loading applications:', error);
      }
    };

    // Load events and competitions (only once)
    const loadEventsAndCompetitions = async () => {
      try {
        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const evRes = await fetch(`${baseUrl}/api/events?userId=${encodeURIComponent(user._id || user.id)}`, { cache: 'no-store' });
        const evJson = await evRes.json();
        if (isMounted && evJson?.success && Array.isArray(evJson.data)) setEvents(evJson.data);
      } catch (_) { }
      try {
        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const cmpRes = await fetch(`${baseUrl}/api/competitions?userId=${encodeURIComponent(user._id || user.id)}`, { cache: 'no-store' });
        const cmpJson = await cmpRes.json();
        if (isMounted && cmpJson?.success && Array.isArray(cmpJson.data)) setCompetitions(cmpJson.data);
      } catch (_) { }
    };

    // Load profile data (only once)
    const loadProfileData = async () => {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      try {
        setProfileLoading(true);
        const getReq = await fetch(`${baseUrl}/api/profile/get`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user._id || user.id, userType: 'jobseeker' })
        });
        const getRes = await getReq.json().catch(() => ({}));
        if (isMounted && getRes && getRes.success) {
          setProfileData(getRes.data);

          const u = getRes.data.user || {};
          const p = getRes.data.profile || {};
          const userId = u._id || u.id || u.email || user?._id || user?.id || user?.email || 'default';

          const apiImg = p.profilePicture || p.profileImage || p.avatar || p.avatarUrl || p.imageUrl || p.profilePhoto || '';
          const localImg = (typeof window !== 'undefined') ? localStorage.getItem(`profileImageUrl_${userId}`) : null;

          if (apiImg) {
            const fullImageUrl = apiImg.startsWith('http') ? apiImg : (baseUrl ? `${baseUrl}${apiImg}` : apiImg);
            setAvatarPreview(fullImageUrl);
            if (typeof window !== 'undefined') localStorage.setItem(`profileImageUrl_${userId}`, fullImageUrl);
          } else if (localImg) {
            setAvatarPreview(localImg);
          }
        }
      } catch (_) { }
      try {
        const chkReq = await fetch(`${baseUrl}/api/profile/check-completion`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user._id || user.id, userType: 'jobseeker' })
        });
        const chkRes = await chkReq.json().catch(() => ({}));
        if (isMounted && chkRes && chkRes.success) {
          const v = chkRes.data;
          const pct = typeof v === 'number' ? v : (typeof v?.percentage === 'number' ? v.percentage : (typeof v?.completion === 'number' ? v.completion : 0));
          setProfileCompletion(Number.isFinite(pct) ? Math.max(0, Math.min(100, Math.round(pct))) : 0);
        }
      } catch (_) { }
      finally {
        if (isMounted) setProfileLoading(false);
      }
    };

    // Load interviews
    const loadInterviews = async () => {
      try {
        const token = localStorage.getItem('token');
        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const res = await fetch(`${baseUrl}/api/interviews/my-interviews`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const json = await res.json();
        if (isMounted && json.success) {
          setInterviews(json.data.map(i => ({
            id: i._id,
            title: i.jobId?.title || 'General Interview',
            company: i.jobId?.company || '',
            date: new Date(i.createdAt).toLocaleDateString(),
            time: new Date(i.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: i.status === 'pending' ? 'Pending' : (i.status === 'completed' ? 'Completed' : i.status),
            token: i.uniqueToken,
            link: i.uniqueToken ? `/interview/${i.uniqueToken}` : '#'
          })));
        }
      } catch (err) { console.error("Error fetching interviews:", err); }
    };

    // Execute all loads once
    loadApplications();
    loadEventsAndCompetitions();
    loadProfileData();
    loadInterviews();

    // Cleanup function

  }, [user?._id, user?.id, user?.email]); // Depend on any user identifier

  // Open profile drawer if query parameter is present
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('panel') === 'profile') setShowProfilePanel(true);
  }, []);

  const openProfilePanel = () => {
    setShowProfilePanel(true);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('panel', 'profile');
      window.history.replaceState({}, '', url.toString());
    }
  };

  const closeProfilePanel = () => {
    setShowProfilePanel(false);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('panel');
      window.history.replaceState({}, '', url.toString());
    }
  };

  const submitApplication = async (jobId, customAnswers = []) => {
    const job = jobPosts.find(j => j.id === jobId);
    if (!job || !user) return;

    try {
      setIsSubmittingApplication(true);
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');

      const res = await fetch(`${baseUrl}/api/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          jobId,
          applicantId: user?._id || user?.id || user?.userId,
          customAnswers,
          coverLetter: '',
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (json?.success) {
        // ... (Success code unchanged) ...
        const at = json?.data?.appliedDate || new Date().toISOString();
        const successApp = {
          _id: json.data._id,
          jobTitle: job.title,
          company: job.company,
          status: json.data.status || 'Applied',
          matchScore: json.data.matchScore,
          appliedDate: at
        };
        const applied = [successApp, ...appliedJobs];
        setAppliedJobs(applied);
        const userId = user._id || user.id || user.email || 'default';
        if (typeof window !== 'undefined') {
          localStorage.setItem(`appliedJobs_${userId}`, JSON.stringify(applied));
        }

        const scoreMsg = json?.data?.matchScore ? `\nMatch Score: ${json.data.matchScore}%` : '';
        // REPLACE ALERT WITH MODAL
        // alert(`Application submitted for ${job.title} at ${job.company}!${scoreMsg}\n\nWe will contact you soon for further process.`);
        setMatchModalState({
          show: true,
          type: 'success',
          score: json?.data?.matchScore || 0,
          suggestions: [],
          message: `Application submitted for ${job.title} at ${job.company}!`
        });

        // ... (Notification code unchanged) ...
        const applicationNotification = {
          id: Date.now(),
          type: 'application',
          title: 'Application Submitted!',
          message: `You applied for ${job.title}`,
          timestamp: new Date().toLocaleTimeString('en-IN'),
          read: false,
        };
        setNotifications(prev => [applicationNotification, ...prev]);

        setShowQuestionModal(false);
        setCurrentJob(null);
        setQuestionAnswers({});
        setCurrentQuestionIndex(0);
      } else {
        // Handle Blocked Application due to low score
        if (json?.data?.blocksApplication) {
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
            setAppliedJobs(prev => [rejectionApp, ...prev]);
            // Update localStorage too if needed, but simplistic is fine for now
          }

          // REPLACE ALERT WITH MODAL
          setMatchModalState({
            show: true,
            type: 'error',
            score: score,
            suggestions: suggestions,
            message: `Match Score Too Low`
          });
        } else {
          toast.error('Failed to submit application: ' + (json.message || 'Unknown error'));
        }
      }
    } catch (error) {
      console.error('Application submission error:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmittingApplication(false);
      setApplyingJobId(null);
    }
  };

  const handleApplyJob = async (jobId) => {
    const job = jobPosts.find(j => j.id === jobId);
    if (!job || !user) return;
    if (appliedJobs.some(j => j.id === jobId)) return;
    if (applyingJobId === jobId) return; // Prevent multiple clicks

    setApplyingJobId(jobId); // Set loading state for this specific job

    try {
      // First, fetch the job details to check for custom questions
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const jobRes = await fetch(`${baseUrl}/api/jobs/${jobId}`, { cache: 'no-store' });
      const jobData = await jobRes.json();

      if (jobData?.success && jobData.data?.customQuestions && jobData.data.customQuestions.length > 0) {
        // Job has custom questions, show modal
        setCurrentJob({ ...job, customQuestions: jobData.data.customQuestions });
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
    } finally {
      // Ensure loading state is cleared if not handled by submitApplication
      if (applyingJobId === jobId && !showQuestionModal) {
        setApplyingJobId(null);
      }
    }
  };

  const handleQuestionAnswer = (questionId, answer) => {
    setQuestionAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNextQuestion = () => {
    if (!currentJob?.customQuestions) return;

    const currentQuestion = currentJob.customQuestions[currentQuestionIndex];
    if (currentQuestion?.isRequired && !questionAnswers[currentQuestion.id]?.trim()) {
      toast.warning('Please answer this required question before proceeding.');
      return;
    }

    if (currentQuestionIndex < currentJob.customQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // All questions answered, submit application
      const customAnswers = currentJob.customQuestions.map(q => ({
        questionId: q.id,
        answer: questionAnswers[q.id] || ''
      })).filter(a => a.answer.trim());

      submitApplication(currentJob.id, customAnswers);
    }
  };

  const handleSkipQuestion = () => {
    if (!currentJob?.customQuestions) return;

    if (currentQuestionIndex < currentJob.customQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Last question, submit with current answers
      const customAnswers = currentJob.customQuestions.map(q => ({
        questionId: q.id,
        answer: questionAnswers[q.id] || ''
      })).filter(a => a.answer.trim());

      submitApplication(currentJob.id, customAnswers);
    }
  };

  const handleCloseQuestionModal = () => {
    setShowQuestionModal(false);
    setCurrentJob(null);
    setQuestionAnswers({});
    setCurrentQuestionIndex(0);
  };

  const toggleSaveJob = (jobId) => {
    const isSaved = savedJobs.includes(jobId);
    const updated = isSaved ? savedJobs.filter(id => id !== jobId) : [jobId, ...savedJobs];
    setSavedJobs(updated);
    localStorage.setItem('savedJobs', JSON.stringify(updated));
  };

  const clearNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'find-jobs', label: 'Find Jobs', icon: FiSearch },
    { id: 'applied-jobs', label: 'Applied Jobs', icon: FiCheck },
    { id: 'saved-jobs', label: 'Saved Jobs', icon: FiBookmark },
    { id: 'my-profile', label: 'My Profile', icon: FiUser },
    { id: 'interviews', label: 'Interviews', icon: FiCalendar },
    { id: 'assessments', label: 'Assessments', icon: FiBook },
    { id: 'events', label: 'Events', icon: FiAward },
    { id: 'competitions', label: 'Competitions', icon: FiAward }
  ];

  const handleNavigation = (item) => {
    // Always close sidebar on navigation
    setIsSidebarOpen(false);
    setIsMobileMenuOpen(false);
    if (item.id === 'my-profile') {
      // Open the profile panel instead of navigating away
      openProfilePanel();
      return;
    }
    if (item.path) {
      router.push(item.path);
      return;
    }
    setActiveTab(item.id);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const launchpadStats = {
    opportunities: '1700+',
    tests: '50+',
    courses: '1000+'
  };

  const handleLogout = () => {
    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      fetch(`${baseUrl}/api/logout`, { method: 'POST', credentials: 'include' }).finally(() => {
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

  return (
    <div className="min-h-screen bg-gray-50" style={{ background: '#f9fafb', minHeight: '100vh' }}>
      <Head>
        <title>Jobseeker Dashboard</title>
        <meta name="description" content="Jobseeker Dashboard - Find your dream job" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: menu icon and title */}
            <div className="flex items-center">
              <div className="mr-3">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 text-black transition-colors"
                  aria-label="Open menu"
                >
                  <FiMenu className="w-6 h-6" />
                </button>
              </div>
              <h1 className="text-2xl font-bold text-black">Career Portal</h1>
            </div>

            {/* Right: notifications + profile + logout */}
            <div className="flex items-center gap-4">
              {/* Streak Counter */}
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-full border border-orange-100 animate-pulse hover:bg-orange-100 transition-colors cursor-help" title="Your Daily Login Streak">
                <FiZap className="w-4 h-4 fill-orange-500" />
                <span className="text-sm font-bold">{streak} Day Streak</span>
              </div>

              <div className="relative">
                <button
                  onClick={toggleNotifications}
                  className="p-2 rounded-lg text-black hover:text-gray-900 hover:bg-gray-100 relative"
                >
                  <FiBell className="w-6 h-6" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications.length}
                    </span>
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-black">Notifications</h3>
                        {notifications.length > 0 && (
                          <button onClick={clearAllNotifications} className="text-sm text-blue-600 hover:text-blue-800">Clear All</button>
                        )}
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <div key={notification.id} className="p-4 border-b hover:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-semibold text-black text-sm">{notification.title}</h4>
                                <p className="text-black text-sm mt-1">{notification.message}</p>
                                <p className="text-xs text-black mt-2">{notification.timestamp}</p>
                              </div>
                              <button onClick={() => clearNotification(notification.id)} className="ml-2 text-black hover:text-gray-600">
                                <FiX className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center">
                          <FiBell className="w-12 h-12 text-black mx-auto mb-4" />
                          <p className="text-black">No notifications yet</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <button onClick={openProfilePanel} className="ml-2 flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold overflow-hidden">
                  {(user?.profileImage || avatarPreview) ? (
                    <img
                      src={user?.profileImage || avatarPreview}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <span
                    className={`${(user?.profileImage || avatarPreview) ? 'hidden' : 'flex'} w-full h-full items-center justify-center`}
                  >
                    {(
                      user?.user_name?.[0] ||
                      user?.firstName?.[0] ||
                      user?.username?.[0] ||
                      user?.name?.[0] ||
                      user?.email?.[0] ||
                      'U'
                    ).toUpperCase()}
                  </span>
                </div>
                <span className="hidden sm:block">My Profile</span>
              </button>
              <button onClick={handleLogout} className="ml-2 px-3 py-2 text-sm border border-gray-300 rounded-lg text-black hover:bg-gray-50">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className={`flex flex-col lg:flex-row transition-all duration-300 ${isSidebarOpen ? 'gap-8' : 'gap-0'}`}>

          {/* Animated Sidenav Overlay */}

          {/* Backdrop */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidenav Panel */}
          <aside
            className={`
              fixed lg:sticky lg:top-24 inset-y-0 left-0 z-50 bg-white shadow-xl lg:shadow-none lg:border-r border-gray-100 
              transform transition-all duration-300 ease-in-out 
              ${isSidebarOpen ? 'translate-x-0 w-64 opacity-100' : '-translate-x-full w-0 lg:w-0 opacity-0 pointer-events-none'}
              h-full lg:h-[calc(100vh-8rem)] flex flex-col lg:rounded-2xl no-scrollbar
            `}
          >
            <div className="flex items-center justify-between p-4 border-b lg:hidden">
              <h2 className="text-xl font-bold text-gray-800">Menu</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto no-scrollbar">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'}`} />
                    <span>{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                    )}
                  </button>
                );
              })}

              <button
                onClick={() => { setActiveTab('my-jobs'); setIsMobileMenuOpen(false); if (typeof window !== 'undefined' && window.innerWidth < 1024) setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeTab === 'my-jobs' ? 'bg-black text-white shadow-lg shadow-gray-200' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <FiBriefcase className={`w-5 h-5 ${activeTab === 'my-jobs' ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`} />
                <span className="font-medium">My Jobs</span>
              </button>

              <button
                onClick={() => { setActiveTab('game-zone'); setIsMobileMenuOpen(false); if (typeof window !== 'undefined' && window.innerWidth < 1024) setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeTab === 'game-zone' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'}`}
              >
                <FiCpu className={`w-5 h-5 ${activeTab === 'game-zone' ? 'text-white' : 'text-gray-400 group-hover:text-indigo-600'}`} />
                <span className="font-medium">Game Zone</span>
                <span className="ml-auto bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">New</span>
              </button>

              <button
                onClick={() => { setActiveTab('interviews'); setIsMobileMenuOpen(false); if (typeof window !== 'undefined' && window.innerWidth < 1024) setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeTab === 'interviews' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <FiCalendar className={`w-5 h-5 ${activeTab === 'interviews' ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'}`} />
                <span>Interviews</span>
                {activeTab === 'interviews' && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                )}
              </button>
            </nav>

            {/* Sidenav Footer */}
            <div className="p-4 border-t bg-gray-50 lg:bg-transparent lg:border-gray-100">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
              >
                <FiLogOut className="w-5 h-5" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </aside>

          <main className="flex-1 transition-all duration-300">
            {activeTab === 'home' && (
              <div className="space-y-8">
                {/* Welcome Card */}
                <div className="ios-card p-6 md:p-8 bg-gradient-to-br from-white to-blue-50/30">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
                          {(user?.profileImage || avatarPreview) ? (
                            <img src={user?.profileImage || avatarPreview} alt="Profile" className="w-full h-full object-cover" />
                          ) : (
                            <span>{(user?.firstName?.[0] || user?.username?.[0] || 'U').toUpperCase()}</span>
                          )}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                          Hello, {user?.firstName || user?.username || user?.name || 'there'} 👋
                        </h1>
                        <p className="text-gray-500 mt-0.5">Ready for new opportunities</p>
                        {user?.address && (
                          <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                            <FiMapPin className="w-3 h-3" /> {user.address}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="md:ml-auto">
                      <button
                        onClick={() => router.push('/JobseekerProfile')}
                        className="ios-btn px-6 py-3 bg-black text-white text-sm font-semibold hover:bg-gray-800 shadow-lg"
                      >
                        Complete Profile
                      </button>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
                    {[
                      { label: 'APPLIED', value: appliedJobs.length, color: 'text-blue-600' },
                      { label: 'SAVED', value: savedJobs.length, color: 'text-purple-600' },
                      { label: 'INTERVIEWS', value: interviews.length, color: 'text-pink-600' },
                      { label: 'OFFERS', value: 0, color: 'text-green-600' },
                    ].map(stat => (
                      <div key={stat.label} className="text-center p-3 rounded-2xl bg-white/60 border border-white/80 shadow-sm">
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="text-[10px] font-bold text-gray-400 tracking-widest mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>





                {/* Daily Brain Workout Notification */}
                {user && (!user.gameScores || !user.gameScores.some(g => new Date(g.playedAt).toDateString() === new Date().toDateString())) && (
                  <div
                    onClick={() => setActiveTab('game-zone')}
                    className="ios-card p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer text-white mb-8"
                    style={{ background: 'linear-gradient(to right, #6366f1, #9333ea)' }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Daily Goal</span>
                          <span className="text-xs font-medium opacity-90">1 Level / Day</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">Time for your Brain Workout! 🧠</h3>
                        <p className="text-white/80 text-sm">Complete today's challenge to keep your streak alive.</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <FiPlay className="w-6 h-6 fill-current" />
                      </div>
                    </div>
                  </div>
                )}



                {/* Recommended for you heading + Swipe toggle */}
                <div className="flex items-center justify-between px-1">
                  <h2 className="text-xl font-bold text-gray-900">Recommended for you</h2>
                  <button
                    onClick={() => setIsSwipeMode(v => !v)}
                    className={`ios-btn flex items-center gap-2 px-4 py-2 text-sm font-semibold border transition-all ${isSwipeMode ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
                  >
                    <FiLayers className="w-4 h-4" />
                    {isSwipeMode ? 'List View' : 'Swipe Mode'}
                  </button>
                </div>

                {isSwipeMode ? (
                  <div className="py-8 animate-fade-in">
                    <JobSwipe
                      jobs={jobPosts}
                      onApply={handleApplyJob}
                      onSkip={(id) => {
                        console.log('Skipped', id);
                      }}
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {jobPosts.length === 0 ? (
                      <div className="ios-card p-12 text-center text-gray-400">
                        <FiSearch className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No jobs found matching your criteria.</p>
                      </div>
                    ) : (
                      jobPosts.map((job) => (
                        <div
                          key={job.id}
                          id={`job-${job.id}`}
                          className="ios-card p-6 md:p-8 hover:transform hover:scale-[1.01] transition-all duration-300"
                        >
                          <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                {job.featured && (
                                  <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                                    Featured
                                  </span>
                                )}
                                <span className="text-xs font-medium text-gray-400">{job.postedDate ? new Date(job.postedDate).toLocaleDateString() : 'Recently'}</span>
                              </div>
                              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                                {job.title}
                              </h2>
                              <div className="text-lg font-medium text-gray-500 mt-1">{job.company}</div>
                              <div className="flex flex-wrap gap-3 mt-4">
                                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
                                  <FiMapPin className="w-3.5 h-3.5" /> {job.location}
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
                                  <FiBriefcase className="w-3.5 h-3.5" /> {job.jobType}
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                                  {job.salary}
                                </span>
                              </div>
                              <div className="mt-6 pt-6 border-t border-gray-100">
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                                  {job.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {job.skillsRequired.slice(0, 5).map((skill, index) => (
                                    <span key={index} className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-500 text-xs font-medium border border-gray-100">
                                      {skill}
                                    </span>
                                  ))}
                                  {job.skillsRequired.length > 5 && (
                                    <span className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-400 text-xs font-medium">+ {job.skillsRequired.length - 5} more</span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-row md:flex-col gap-3 shrink-0">
                              <button
                                onClick={() => handleApplyJob(job.id)}
                                disabled={appliedJobs.some(j => j.id === job.id) || applyingJobId === job.id || new Date(job.deadline) < new Date()}
                                className={`ios-btn px-6 py-3 min-w-[120px] flex items-center justify-center gap-2 text-sm text-white shadow-lg shadow-blue-200 ${appliedJobs.some(j => j.id === job.id) || applyingJobId === job.id || new Date(job.deadline) < new Date()
                                  ? 'bg-gray-300 cursor-not-allowed shadow-none'
                                  : 'bg-blue-600 hover:bg-blue-700'
                                  }`}
                              >
                                {applyingJobId === job.id ? (
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                  <span>
                                    {appliedJobs.some(j => j.id === job.id)
                                      ? 'Applied'
                                      : new Date(job.deadline) < new Date()
                                        ? 'Expired'
                                        : 'Apply'}
                                  </span>
                                )}
                              </button>
                              <button
                                onClick={() => toggleSaveJob(job.id)}
                                className={`ios-btn px-6 py-3 flex items-center justify-center gap-2 text-sm border font-medium ${savedJobs.includes(job.id) ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                              >
                                {savedJobs.includes(job.id) ? <FiBookmark className="fill-current" /> : <FiBookmark />}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* Pagination (iOS Style) */}
                <div className="ios-card px-6 py-4 flex items-center justify-between" >
                  <div className="text-sm font-medium text-gray-500">Page {jobsPage} of {Math.max(1, Math.ceil((jobsTotal || 0) / (jobsLimit || 10)))}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setJobsPage(p => Math.max(1, p - 1))}
                      disabled={jobsPage <= 1}
                      className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors ${jobsPage <= 1 ? 'opacity-50' : 'hover:bg-gray-200'}`}
                    >
                      <FiChevronRight className="w-5 h-5 transform rotate-180" />
                    </button>
                    <button
                      onClick={() => setJobsPage(p => (p * (jobsLimit || 10) < (jobsTotal || 0) ? p + 1 : p))}
                      disabled={jobsPage * (jobsLimit || 10) >= (jobsTotal || 0)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full bg-black text-white transition-colors ${jobsPage * (jobsLimit || 10) >= (jobsTotal || 0) ? 'opacity-50' : 'hover:bg-gray-800'}`}
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>
            )}

            {activeTab === 'game-zone' && (
              <GameZone
                user={user}
                streak={streak}
                onGameComplete={(score) => {
                  const newScore = Math.min((user.cognitiveScore || 0) + Math.round(score / 100), 100);
                  setUser({ ...user, cognitiveScore: newScore });
                }}
              />
            )}

            {activeTab === 'my-jobs' && (
              <div className="ios-card p-12 text-center text-gray-400">
                <FiBriefcase className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Track your job applications here.</p>
              </div>
            )}

            {
              activeTab === 'applied-jobs' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 px-2">Applications</h2>
                  {appliedJobs.length === 0 ? (
                    <div className="ios-card p-12 text-center">
                      <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiCheck className="w-8 h-8 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">No applications yet</h3>
                      <p className="text-gray-500 mt-2 mb-8">Your applied jobs will appear here.</p>
                      <button onClick={() => setActiveTab('home')} className="ios-btn bg-black text-white px-8 py-3">Start Applying</button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {appliedJobs.map(app => (
                        <div key={app._id} className="ios-card p-6 flex flex-col md:flex-row items-center gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-lg font-bold text-gray-900">{app.jobTitle}</h3>
                              {app.matchScore > 80 && <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">High Match</span>}
                            </div>
                            <p className="text-gray-500 font-medium">{app.company}</p>
                            <div className="text-xs text-gray-400 mt-2">Applied on {new Date(app.appliedDate).toLocaleDateString()}</div>
                          </div>
                          <div className="ios-btn px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold capitalize">
                            {app.status || 'Applied'}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            {
              activeTab === 'saved-jobs' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 px-2">Saved Jobs</h2>
                  {savedJobs.length === 0 ? (
                    <div className="ios-card p-12 text-center">
                      <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiBookmark className="w-8 h-8 text-indigo-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">No saved jobs</h3>
                      <p className="text-gray-500 mt-2 mb-8">Jobs you save will appear here.</p>
                      <button onClick={() => setActiveTab('home')} className="ios-btn bg-black text-white px-8 py-3">Find Jobs</button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {jobPosts.filter(j => savedJobs.includes(j.id)).map(job => (
                        <div key={job.id} className="ios-card p-6 flex flex-col justify-between h-full">
                          <div>
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="font-bold text-gray-900 text-lg leading-tight">{job.title}</h3>
                                <p className="text-gray-500 text-sm mt-1">{job.company}</p>
                              </div>
                              <button onClick={() => toggleSaveJob(job.id)} className="text-indigo-600 hover:text-indigo-800">
                                <FiBookmark className="w-6 h-6 fill-current" />
                              </button>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-6">
                              <FiMapPin /> {job.location} • {job.jobType}
                            </div>
                          </div>
                          <button
                            onClick={() => handleApplyJob(job.id)}
                            disabled={new Date(job.deadline) < new Date()}
                            className="ios-btn w-full py-3 bg-black text-white text-sm hover:bg-gray-800 shadow-lg shadow-gray-200"
                          >
                            {new Date(job.deadline) < new Date() ? 'Expired' : 'Apply Now'}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            {
              activeTab === 'interviews' && (
                <div className="space-y-6">
                  {/* AI Mock Interview Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                        <FiCpu />
                      </span>
                      AI Mock Interview Simulator
                    </h3>
                    <MockInterview />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 px-2">My Interviews</h2>
                  {interviews.length === 0 ? (
                    <div className="ios-card p-12 text-center">
                      <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiCalendar className="w-8 h-8 text-purple-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">No interviews yet</h3>
                      <p className="text-gray-500 mt-2">When you're shortlisted, interviews will appear here.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {interviews.map(itv => (
                        <div key={itv.id} className="ios-card p-6 flex flex-col md:flex-row items-center gap-6">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900">{itv.title}</h3>
                            <p className="text-gray-500 font-medium">{itv.company}</p>
                            <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                              <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-lg">
                                <FiCalendar /> {itv.date}
                              </span>
                              <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-lg">
                                <FiCheck /> {itv.time}
                              </span>
                            </div>
                          </div>
                          {itv.status === 'Pending' ? (
                            <Link href={`/interview/${itv.token}`} className="ios-btn px-6 py-3 bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 font-medium">
                              Start Interview
                            </Link>
                          ) : (
                            <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">
                              {itv.status}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            {/* Same structure for Assessments, Events, Competitions but using ios-card */}
            {
              activeTab === 'assessments' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 px-2">Assessments</h2>
                  <div className="ios-card p-6">
                    <div className="space-y-4">
                      {assessments.length === 0 ? <p className="text-gray-500 text-center py-6">No pending assessments.</p> : assessments.map(asmt => (
                        <div key={asmt.id} className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-gray-900">{asmt.name}</h3>
                            <p className="text-gray-500 text-sm">{asmt.status}</p>
                          </div>
                          <button className="ios-btn px-5 py-2 bg-black text-white text-sm">Action</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            {
              activeTab === 'events' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 px-2">Events</h2>
                  <div className="ios-card p-6">
                    {events.length === 0 ? <p className="text-gray-500 text-center py-6">No events found.</p> : (
                      <div className="space-y-4">
                        {events.map(evt => (
                          <div key={evt.id} className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-gray-900">{evt.name || evt.title}</h3>
                              <p className="text-gray-500 text-sm">{evt.date}</p>
                            </div>
                            <button className={`ios-btn px-5 py-2 text-sm ${evt.registered ? 'bg-red-50 text-red-600' : 'bg-black text-white'}`}>
                              {evt.registered ? 'Unregister' : 'Register'}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            }
            {
              activeTab === 'competitions' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 px-2">Competitions</h2>
                  <div className="ios-card p-6">
                    {competitions.length === 0 ? <p className="text-gray-500 text-center py-6">No active competitions.</p> : (
                      <div className="space-y-4">
                        {competitions.map(cmp => (
                          <div key={cmp.id} className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-gray-900">{cmp.name}</h3>
                              <p className="text-gray-500 text-sm">{cmp.prize}</p>
                            </div>
                            <button className="ios-btn px-5 py-2 bg-blue-600 text-white text-sm">Participate</button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            }
          </main >
        </div >
      </div >

      {/* Question Modal */}
      {
        showQuestionModal && currentJob && currentJob.customQuestions && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100"
              style={{
                maxHeight: '90vh',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Job Application</h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {currentJob.title} • {currentJob.company}
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="flex items-center text-sm text-blue-600">
                        <span className="font-medium">
                          Question {currentQuestionIndex + 1} of {currentJob.customQuestions.length}
                        </span>
                        <div className="ml-4 w-32 bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${((currentQuestionIndex + 1) / currentJob.customQuestions.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseQuestionModal}
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {(currentJob.customQuestions && currentJob.customQuestions[currentQuestionIndex]) && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <label className="block text-base font-medium text-gray-800 mb-3">
                        {currentJob.customQuestions[currentQuestionIndex].question}
                        {currentJob.customQuestions[currentQuestionIndex].isRequired && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>
                      <textarea
                        value={questionAnswers[currentJob.customQuestions[currentQuestionIndex].id] || ''}
                        onChange={(e) => handleQuestionAnswer(currentJob.customQuestions[currentQuestionIndex].id, e.target.value)}
                        placeholder="Type your answer here..."
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-200"
                        style={{
                          minHeight: '120px',
                          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                        }}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-4">
                      {!currentJob.customQuestions[currentQuestionIndex].isRequired && (
                        <button
                          onClick={handleSkipQuestion}
                          className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          Skip this question
                        </button>
                      )}

                      <div className="w-full sm:w-auto flex-1 flex justify-end">
                        <button
                          onClick={handleNextQuestion}
                          disabled={isSubmittingApplication || (currentJob.customQuestions[currentQuestionIndex].isRequired && !questionAnswers[currentJob.customQuestions[currentQuestionIndex].id]?.trim())}
                          className={`w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ${isSubmittingApplication || (currentJob.customQuestions[currentQuestionIndex].isRequired && !questionAnswers[currentJob.customQuestions[currentQuestionIndex].id]?.trim())
                            ? 'bg-blue-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                            }`}
                        >
                          {isSubmittingApplication ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <span className="flex items-center">
                              {currentQuestionIndex === currentJob.customQuestions.length - 1 ? (
                                'Submit Application'
                              ) : (
                                <div>
                                  Next Question
                                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </div>
                              )}
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      }

      {/* Profile Panel */}
      {/* Profile Panel (Redesigned) */}
      {
        showProfilePanel && (
          <div>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity" onClick={closeProfilePanel}></div>
            <div className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[480px] bg-white/90 backdrop-blur-2xl shadow-2xl border-l border-white/50 transform transition-transform duration-300 ios-bg">
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100/50 bg-white/50 backdrop-blur-md sticky top-0 z-10">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">My Profile</h3>
                <button
                  onClick={closeProfilePanel}
                  className="p-2 rounded-full hover:bg-gray-100/50 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto h-[calc(100vh-80px)] scrollbar-hide">
                {profileEditMode ? (
                  <ProfilePage user={user} />
                ) : (
                  <div className="flex flex-col min-h-full">

                    {/* Content */}
                    <div className="flex-1 px-4 pt-6 space-y-4 pb-8">

                      {/* Avatar + Name */}
                      <div className="flex flex-col items-center text-center gap-2 pb-2">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full ring-4 ring-gray-100 shadow-md overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            {(user?.profileImage || avatarPreview) ? (
                              <img src={user?.profileImage || avatarPreview} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-3xl font-bold text-gray-500">
                                {(user?.firstName?.[0] || user?.username?.[0] || 'U').toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-gray-900">{user?.firstName || user?.username || user?.name || 'User'}</p>
                          <p className="text-xs text-gray-400">{user?.email}</p>
                        </div>
                      </div>

                      {/* Edit Profile CTA */}
                      <button
                        onClick={() => router.push('/JobseekerProfile')}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white text-blue-600 font-bold text-sm shadow-xl shadow-blue-200/50 hover:bg-blue-50 active:scale-[0.98] transition-all"
                      >
                        <FiUser className="w-4 h-4" />
                        View & Update Full Profile
                      </button>

                      {/* Contact Info Card */}
                      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg overflow-hidden">
                        <div className="px-5 pt-4 pb-1">
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Contact</p>
                        </div>
                        {[
                          { icon: <FiPhone className="w-4 h-4" />, color: 'bg-green-500', label: 'Phone', value: user?.phone },
                          { icon: <FiMail className="w-4 h-4" />, color: 'bg-blue-500', label: 'Email', value: user?.email },
                          { icon: <FiMapPin className="w-4 h-4" />, color: 'bg-red-500', label: 'Location', value: user?.address },
                        ].map((row, i, arr) => (
                          <div key={row.label} className={`flex items-center gap-4 px-5 py-3.5 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                            <div className={`w-9 h-9 rounded-xl ${row.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
                              {row.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] text-gray-400 font-medium">{row.label}</p>
                              <p className="text-sm font-semibold text-gray-900 truncate">{row.value || <span className="text-gray-400 font-normal italic">Not provided</span>}</p>
                            </div>
                            <FiChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
                          </div>
                        ))}
                      </div>

                      {/* Personal Details Card */}
                      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg overflow-hidden">
                        <div className="px-5 pt-4 pb-1">
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Personal</p>
                        </div>
                        {[
                          { icon: <FiCalendar className="w-4 h-4" />, color: 'bg-orange-500', label: 'Date of Birth', value: user?.dob ? String(user.dob).split('T')[0] : null },
                          { icon: <FiUser className="w-4 h-4" />, color: 'bg-teal-500', label: 'Gender', value: user?.gender },
                        ].map((row, i, arr) => (
                          <div key={row.label} className={`flex items-center gap-4 px-5 py-3.5 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                            <div className={`w-9 h-9 rounded-xl ${row.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
                              {row.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] text-gray-400 font-medium">{row.label}</p>
                              <p className="text-sm font-semibold text-gray-900 capitalize">{row.value || <span className="text-gray-400 font-normal italic">Not provided</span>}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Skills Card */}
                      {user?.skills && user.skills.length > 0 && (
                        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-sm">
                              <FiCpu className="w-4 h-4" />
                            </div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Skills</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {user.skills.map((skill, i) => (
                              <span key={i} className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Summary Card */}
                      {user?.summary && user.summary !== 'Not provided' && (
                        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-sm">
                              <FiFileText className="w-4 h-4" />
                            </div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">About</p>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{user.summary}</p>
                        </div>
                      )}

                      {/* Settings — Notifications */}
                      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg overflow-hidden">
                        <div className="px-5 pt-4 pb-1">
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Notifications</p>
                        </div>
                        {[
                          { icon: <FiBell className="w-4 h-4" />, color: 'bg-red-500', label: 'Job Alerts', checked: jobAlerts, onChange: () => setJobAlerts(v => !v) },
                          { icon: <FiMail className="w-4 h-4" />, color: 'bg-blue-500', label: 'Email Digest', checked: emailDigest, onChange: () => setEmailDigest(v => !v) },
                          { icon: <FiCalendar className="w-4 h-4" />, color: 'bg-purple-500', label: 'Interview Reminders', checked: interviewReminders, onChange: () => setInterviewReminders(v => !v) },
                        ].map((row, i, arr) => (
                          <div key={row.label} className={`flex items-center gap-4 px-5 py-3.5 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                            <div className={`w-9 h-9 rounded-xl ${row.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
                              {row.icon}
                            </div>
                            <span className="flex-1 text-sm font-semibold text-gray-800">{row.label}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" checked={row.checked} onChange={row.onChange} className="sr-only peer" />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                          </div>
                        ))}
                      </div>

                      {/* Settings — Privacy */}
                      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg overflow-hidden">
                        <div className="px-5 pt-4 pb-1">
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Privacy</p>
                        </div>
                        {[
                          { icon: <FiUnlock className="w-4 h-4" />, color: 'bg-green-500', label: 'Profile Visible to Recruiters', checked: profileVisible, onChange: () => setProfileVisible(v => !v) },
                          { icon: <FiFileText className="w-4 h-4" />, color: 'bg-orange-500', label: 'Show Resume to Employers', checked: showResume, onChange: () => setShowResume(v => !v) },
                        ].map((row, i, arr) => (
                          <div key={row.label} className={`flex items-center gap-4 px-5 py-3.5 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                            <div className={`w-9 h-9 rounded-xl ${row.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
                              {row.icon}
                            </div>
                            <span className="flex-1 text-sm font-semibold text-gray-800">{row.label}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" checked={row.checked} onChange={row.onChange} className="sr-only peer" />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                            </label>
                          </div>
                        ))}
                      </div>

                      {/* Settings — Account */}
                      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg overflow-hidden">
                        <div className="px-5 pt-4 pb-1">
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Account</p>
                        </div>
                        {[
                          { icon: <FiLock className="w-4 h-4" />, color: 'bg-gray-600', label: 'Change Password', danger: false },
                          { icon: <FiHelpCircle className="w-4 h-4" />, color: 'bg-blue-400', label: 'Help & Support', danger: false },
                        ].map((row, i, arr) => (
                          <button
                            key={row.label}
                            className={`w-full flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}
                          >
                            <div className={`w-9 h-9 rounded-xl ${row.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
                              {row.icon}
                            </div>
                            <span className={`flex-1 text-sm font-semibold ${row.danger ? 'text-red-600' : 'text-gray-800'}`}>{row.label}</span>
                            <FiChevronRight className="w-4 h-4 text-gray-300" />
                          </button>
                        ))}
                      </div>

                      {/* App Info */}
                      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg overflow-hidden">
                        <div className="flex items-center gap-4 px-5 py-3.5 border-b border-gray-100">
                          <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-sm shrink-0">
                            <FiActivity className="w-4 h-4" />
                          </div>
                          <span className="flex-1 text-sm font-semibold text-gray-800">Privacy Policy</span>
                          <FiChevronRight className="w-4 h-4 text-gray-300" />
                        </div>
                        <div className="flex items-center gap-4 px-5 py-3.5">
                          <div className="w-9 h-9 rounded-xl bg-gray-400 flex items-center justify-center text-white shadow-sm shrink-0">
                            <FiLayers className="w-4 h-4" />
                          </div>
                          <span className="flex-1 text-sm font-semibold text-gray-800">App Version</span>
                          <span className="text-xs text-gray-400 font-medium">v1.0.0</span>
                        </div>
                      </div>


                      {/* Sign Out */}
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-red-50 border border-red-100 text-red-600 font-bold text-sm shadow-sm hover:bg-red-100 active:scale-[0.98] transition-all"
                      >
                        <FiLogOut className="w-4 h-4" />
                        Sign Out
                      </button>

                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      }

      {/* Add Skills Modal */}
      {
        showSkillsModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Add Skills</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Add at least 3 skills to boost your profile</p>
                </div>
                <button
                  onClick={() => setShowSkillsModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5 space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Input row */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && skillInput.trim()) {
                        setSkillsList(prev => [...prev, { name: skillInput.trim(), proficiency: skillProficiency }]);
                        setSkillInput('');
                      }
                    }}
                    placeholder="e.g. React, Python, Excel..."
                    className="flex-1 px-4 py-2.5 rounded-2xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                  <select
                    value={skillProficiency}
                    onChange={(e) => setSkillProficiency(e.target.value)}
                    className="px-3 py-2.5 rounded-2xl border border-gray-200 bg-gray-50 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Expert</option>
                  </select>
                  <button
                    onClick={() => {
                      if (skillInput.trim()) {
                        setSkillsList(prev => [...prev, { name: skillInput.trim(), proficiency: skillProficiency }]);
                        setSkillInput('');
                      }
                    }}
                    className="px-4 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition-colors"
                  >
                    Add
                  </button>
                </div>

                {/* Skills chips */}
                {skillsList.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {skillsList.map((skill, i) => (
                      <div key={i} className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                        <span>{skill.name}</span>
                        <span className="text-indigo-400">· {skill.proficiency}</span>
                        <button
                          onClick={() => setSkillsList(prev => prev.filter((_, idx) => idx !== i))}
                          className="ml-1 text-indigo-300 hover:text-red-500 transition-colors"
                        >
                          <FiX className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 text-center py-4">No skills added yet. Type a skill and press Add.</p>
                )}

                {skillsList.length > 0 && skillsList.length < 3 && (
                  <p className="text-xs text-amber-600 font-medium">Add {3 - skillsList.length} more skill{3 - skillsList.length > 1 ? 's' : ''} to complete this task</p>
                )}
              </div>

              {/* Footer */}
              <div className="flex gap-3 px-6 pb-6 pt-2">
                <button
                  onClick={() => setShowSkillsModal(false)}
                  className="flex-1 py-3 rounded-2xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSkills}
                  disabled={skillsList.length === 0 || skillsLoading}
                  className="flex-1 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  {skillsLoading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <FiCheck className="w-4 h-4" />
                  )}
                  {skillsLoading ? 'Saving...' : `Save ${skillsList.length > 0 ? `(${skillsList.length})` : ''} Skills`}
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* Resume Upload Modal */}
      {
        showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-scale-in">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Upload Resume</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Upload your CV (PDF/DOCX)</p>
                </div>
                <button
                  onClick={() => { setShowResumeModal(false); setResumeFile(null); }}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={resumeLoading}
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:bg-gray-50 transition-colors group">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResumeFile(e.target.files[0])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={resumeLoading}
                  />
                  <div className="flex flex-col items-center gap-3">
                    <div className={`p-4 rounded-full ${resumeFile ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-500'} transition-colors`}>
                      <FiDownload className="w-6 h-6" />
                    </div>
                    {resumeFile ? (
                      <div>
                        <p className="text-sm font-bold text-gray-900 break-all">{resumeFile.name}</p>
                        <p className="text-xs text-green-500 font-medium mt-1">Ready to upload</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">PDF, DOCX up to 5MB</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex gap-3 px-6 pb-6">
                <button
                  onClick={() => { setShowResumeModal(false); setResumeFile(null); }}
                  className="flex-1 py-3 rounded-2xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors"
                  disabled={resumeLoading}
                >
                  Cancel
                </button>
                <button
                  onClick={handleUploadResume}
                  disabled={!resumeFile || resumeLoading}
                  className="flex-1 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  {resumeLoading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <FiCheck className="w-4 h-4" />
                  )}
                  {resumeLoading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* Profile Summary Modal */}
      {
        showSummaryModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Profile Summary</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Tell recruiters about yourself</p>
                </div>
                <button
                  onClick={() => setShowSummaryModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <textarea
                  value={summaryText}
                  onChange={(e) => setSummaryText(e.target.value)}
                  placeholder="Write a short bio about yourself — your skills, experience, and what kind of role you're looking for..."
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent resize-none transition-all"
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-400">{summaryText.length}/500 characters</p>
                  {summaryText.length > 0 && (
                    <button
                      onClick={() => setSummaryText('')}
                      className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex gap-3 px-6 pb-6">
                <button
                  onClick={() => setShowSummaryModal(false)}
                  className="flex-1 py-3 rounded-2xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSummary}
                  disabled={!summaryText.trim() || summaryLoading}
                  className="flex-1 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  {summaryLoading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <FiCheck className="w-4 h-4" />
                  )}
                  {summaryLoading ? 'Saving...' : 'Save Summary'}
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* Match Feedback Modal */}
      {
        matchModalState.show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden transform transition-all scale-100 border border-gray-100">

              {/* Header / Banner */}
              <div className={`h-28 flex flex-col justify-start pt-4 items-center ${matchModalState.type === 'success' ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-red-500 to-pink-600'}`}>
                <div className="text-white text-center">
                  <div className="mb-1">
                    {matchModalState.type === 'success' && (
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-md">
                        <FiCheck className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {matchModalState.type === 'success' ? 'Application Sent' : 'Application'}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">


                <p className="text-center text-gray-700 font-medium mb-4 text-sm">
                  {matchModalState.message}
                </p>

                {matchModalState.suggestions && matchModalState.suggestions.length > 0 && (
                  <div className="bg-orange-50 rounded-xl p-3 mb-4 border border-orange-100">
                    <h4 className="text-xs font-bold text-orange-800 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      Improvement Suggestions
                    </h4>
                    <ul className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                      {matchModalState.suggestions.map((s, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="mt-1 w-1 h-1 rounded-full bg-gray-400 shrink-0"></span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => setMatchModalState({ ...matchModalState, show: false })}
                    className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                  {matchModalState.type === 'success' && (
                    <button
                      onClick={() => setMatchModalState({ ...matchModalState, show: false })}
                      className="flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      Done
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}

