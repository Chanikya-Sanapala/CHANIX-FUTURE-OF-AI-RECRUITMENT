"use client";

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProfilePage from '../../../components/ProfilePage';
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
  FiLogOut
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
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState({});
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
  const [applyingJobId, setApplyingJobId] = useState(null);
  // Match Modal State
  const [matchModalState, setMatchModalState] = useState({ show: false, type: 'success', score: 0, suggestions: [], message: '' });
  const profileDataLoaded = useRef(false);
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

    const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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

  // Load jobs from backend with filters and pagination
  const loadJobs = async (page = 1) => {
    try {
      setJobsLoading(true);
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (!token) return;

        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
    // Fetch applied jobs from backend for the logged-in user
    const fetchAppliedJobs = async () => {
      if (!user) return;
      try {
        const token = localStorage.getItem('token');
        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const apiUrl = baseUrl ? `${baseUrl}/api/applications` : '/api/applications';
        const res = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          cache: 'no-store'
        });
        const json = await res.json();
        if (json?.success && Array.isArray(json.data)) {
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
          setAppliedJobs(apps);
          const userId = user._id || user.id || user.email || 'default';
          localStorage.setItem(`appliedJobs_${userId}`, JSON.stringify(apps));
        }
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      }
    };
    fetchAppliedJobs();
    // Interviews, assessments, events, and competitions should come only from backend APIs
    setInterviews([]);
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
    if (!user || !user._id || profileDataLoaded.current) return;

    let isMounted = true;
    profileDataLoaded.current = true;

    // Load applications for this user from backend
    const loadApplications = async () => {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (!token) return;

        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const apiUrl = baseUrl ? `${baseUrl}/api/applications` : '/api/applications';

        const res = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          cache: 'no-store'
        });

        const json = await res.json();
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
          setAppliedJobs(apps);
          const userId = user._id || user.id || user.email || 'default';
          localStorage.setItem(`appliedJobs_${userId}`, JSON.stringify(apps));
        }
      } catch (_) { }
    };

    // Load events and competitions (only once)
    const loadEventsAndCompetitions = async () => {
      try {
        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const evRes = await fetch(`${baseUrl}/api/events?userId=${encodeURIComponent(user._id || user.id)}`, { cache: 'no-store' });
        const evJson = await evRes.json();
        if (isMounted && evJson?.success && Array.isArray(evJson.data)) setEvents(evJson.data);
      } catch (_) { }
      try {
        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const cmpRes = await fetch(`${baseUrl}/api/competitions?userId=${encodeURIComponent(user._id || user.id)}`, { cache: 'no-store' });
        const cmpJson = await cmpRes.json();
        if (isMounted && cmpJson?.success && Array.isArray(cmpJson.data)) setCompetitions(cmpJson.data);
      } catch (_) { }
    };

    // Load profile data (only once)
    const loadProfileData = async () => {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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

    // Execute all loads once
    loadApplications();
    loadEventsAndCompetitions();
    loadProfileData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [user?._id]); // Only depend on user ID

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
        const applied = [{ id: jobId, at }, ...appliedJobs];
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

          // REPLACE ALERT WITH MODAL
          setMatchModalState({
            show: true,
            type: 'error',
            score: score,
            suggestions: suggestions,
            message: `Application Blocked: Match Score Too Low`
          });
        } else {
          alert('Failed to submit application: ' + (json.message || 'Unknown error'));
        }
      }
    } catch (error) {
      console.error('Application submission error:', error);
      alert('Failed to submit application. Please try again.');
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
      alert('Please answer this required question before proceeding.');
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
    { id: 'job-profiles', label: 'Find Jobs', icon: FiBriefcase },
    { id: 'applied-jobs', label: 'Applied Jobs', icon: FiCheck },
    { id: 'my-profile', label: 'My Profile', icon: FiUser, path: '/JobseekerProfile' },
    { id: 'interviews', label: 'Interviews', icon: FiCalendar },
    { id: 'assessments', label: 'Assessments', icon: FiBook }, // Changed icon to distinguish
    { id: 'events', label: 'Events', icon: FiAward },
    { id: 'competitions', label: 'Competitions', icon: FiBook }
  ];

  const handleNavigation = (item) => {
    if (item.path) {
      router.push(item.path);
      setIsMobileMenuOpen(false);
      return;
    }
    setActiveTab(item.id);
    setIsMobileMenuOpen(false);
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
              <div className="relative mr-3">
                <button
                  onClick={() => setShowDesktopMenu(prev => !prev)}
                  className="p-2 rounded-lg hover:bg-gray-100 text-black"
                  aria-label="Open menu"
                  aria-expanded={showDesktopMenu}
                  aria-controls="header-menu-dropdown"
                >
                  <FiMenu className="w-6 h-6" />
                </button>
                {showDesktopMenu && (
                  <nav id="header-menu-dropdown" className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
                    <ul className="py-2">
                      {navigationItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <li key={item.id}>
                            <button
                              onClick={() => { handleNavigation(item); setShowDesktopMenu(false); }}
                              className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 ${activeTab === item.id ? 'text-blue-700' : 'text-black'}`}
                            >
                              <IconComponent className="w-5 h-5" />
                              <span className="font-medium">{item.label}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                )}
              </div>
              <h1 className="text-2xl font-bold text-black">Career Portal</h1>
            </div>

            {/* Right: notifications + profile + logout */}
            <div className="flex items-center">
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg z-50" onClick={(e) => e.stopPropagation()}>
                {/* Sidebar Navigation - Mobile */}
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-black">Menu</h2>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg text-black hover:text-gray-900 hover:bg-gray-100"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <nav className="p-4">
                  <ul className="space-y-2">
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => handleNavigation(item)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === item.id
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'text-black hover:bg-gray-50'
                              }`}
                          >
                            <IconComponent className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          )}

          {/* Desktop sidebar toast removed; header menu used instead */}

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'home' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20">
                        <svg viewBox="0 0 36 36" className="w-20 h-20">
                          <path d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                          <path d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831" fill="none"
                            stroke="#2563EB" strokeWidth="3" strokeDasharray={`${Math.max(0, Math.min(100, profileCompletion))}, 100`} />
                        </svg>
                        <button
                          type="button"
                          onClick={() => document.getElementById('dash-avatar-input')?.click()}
                          className="absolute inset-1 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ring-2 ring-transparent hover:ring-blue-200 transition"
                          title="Click to upload photo"
                        >
                          {avatarPreview ? (
                            <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-black">User</span>
                          )}
                        </button>
                        <input
                          id="dash-avatar-input"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const reader = new FileReader();
                            reader.onload = (ev) => setAvatarPreview(ev.target.result);
                            reader.readAsDataURL(file);
                            try {
                              const r = await uploadAvatar(file);
                              if (r?.url) setAvatarPreview(r.url);
                              if (typeof window !== 'undefined') window.dispatchEvent(new Event('focus'));
                            } catch (_) {
                              alert('Failed to upload photo. Please try again.');
                            }
                          }}
                        />
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-semibold px-1.5 py-0.5 rounded-full border">
                          {profileLoading ? '...' : `${Math.max(0, Math.min(100, profileCompletion))}%`}
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-black">
                          {user?.user_name || [user?.firstName, user?.lastName].filter(Boolean).join(' ') || user?.username || user?.name || (user?.email ? user.email.split('@')[0] : 'User')}
                        </div>
                        <div className="text-sm text-black mt-1">Profile completion</div>
                      </div>
                    </div>
                    <Link href="/JobseekerProfile" className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700">Complete profile</Link>
                  </div>
                </div>
                {/* Jobs Filters */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                    <input
                      value={jobFilters.q}
                      onChange={(e) => setJobFilters(v => ({ ...v, q: e.target.value }))}
                      className="px-3 py-2 border rounded-lg text-gray-900"
                      placeholder="Search jobs"
                    />
                    <input
                      value={jobFilters.location}
                      onChange={(e) => setJobFilters(v => ({ ...v, location: e.target.value }))}
                      className="px-3 py-2 border rounded-lg text-gray-900"
                      placeholder="Location"
                    />
                    <select
                      value={jobFilters.jobType}
                      onChange={(e) => setJobFilters(v => ({ ...v, jobType: e.target.value }))}
                      className="px-3 py-2 border rounded-lg text-gray-900"
                    >
                      <option value="">Any Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Freelance">Freelance</option>
                    </select>
                    <input
                      value={jobFilters.minSalary}
                      onChange={(e) => setJobFilters(v => ({ ...v, minSalary: e.target.value }))}
                      type="number"
                      className="px-3 py-2 border rounded-lg text-gray-900"
                      placeholder="Min Salary"
                    />
                    <input
                      value={jobFilters.maxSalary}
                      onChange={(e) => setJobFilters(v => ({ ...v, maxSalary: e.target.value }))}
                      type="number"
                      className="px-3 py-2 border rounded-lg text-gray-900"
                      placeholder="Max Salary"
                    />
                    <select
                      value={jobFilters.sort}
                      onChange={(e) => setJobFilters(v => ({ ...v, sort: e.target.value }))}
                      className="px-3 py-2 border rounded-lg text-gray-900"
                    >
                      <option value="newest">Newest</option>
                      <option value="relevance">Relevance</option>
                      <option value="salary">Salary</option>
                    </select>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <button onClick={() => { setJobsPage(1); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Apply</button>
                    <button onClick={() => setJobFilters({ q: '', location: '', jobType: '', minSalary: '', maxSalary: '', sort: 'newest' })} className="px-4 py-2 border rounded-lg text-gray-900 hover:bg-gray-50">Clear</button>
                    {jobsLoading && <span className="text-sm text-gray-500">Loading jobs...</span>}
                  </div>
                </div>
                {jobPosts.map((job) => (
                  <div
                    key={job.id}
                    id={`job-${job.id}`}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="p-6 border-b">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                              Open for applications
                            </span>

                            {job.featured && (
                              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <h2 className="text-xl font-semibold text-gray-900">
                            {job.title} - {job.company}
                          </h2>
                          <p className="text-gray-600 mt-1 flex flex-wrap gap-2">
                            <span className="flex items-center space-x-1">
                              <FiBriefcase className="w-4 h-4" />
                              <span>{job.location}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <FiCalendar className="w-4 h-4" />
                              <span>{job.jobType}</span>
                            </span>
                            <span className="flex items-center space-x-1">

                              <span className="font-semibold text-green-600">{job.salary}</span>
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center gap-3 mt-4 sm:mt-0">
                          <button
                            onClick={() => toggleSaveJob(job.id)}
                            className={`px-4 py-2 rounded-lg font-medium border ${savedJobs.includes(job.id) ? 'bg-blue-50 text-blue-700 border-blue-200' : 'text-gray-700 hover:bg-gray-50 border-gray-300'}`}
                          >
                            {savedJobs.includes(job.id) ? 'Saved' : 'Save'}
                          </button>
                          <button
                            onClick={() => handleApplyJob(job.id)}
                            disabled={appliedJobs.some(j => j.id === job.id) || applyingJobId === job.id}
                            className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${appliedJobs.some(j => j.id === job.id) || applyingJobId === job.id
                              ? 'opacity-60 cursor-not-allowed'
                              : 'hover:bg-blue-700'
                              }`}
                          >
                            {applyingJobId === job.id ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Applying...</span>
                              </>
                            ) : (
                              <>
                                <FiBriefcase className="w-4 h-4" />
                                <span>{appliedJobs.some(j => j.id === job.id) ? 'Applied' : 'Apply Now'}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>

                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <FiAward className="w-5 h-5" />
                          <span>Skills Required</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {job.skillsRequired.map((skill, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm flex items-center space-x-1">
                              <FiCheck className="w-3 h-3" />
                              <span>{skill}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <FiUser className="w-4 h-4" />
                          <span><strong>Experience:</strong> {job.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiCalendar className="w-4 h-4" />
                          <span><strong>Deadline:</strong> {job.deadline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {jobPosts.length === 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <FiBriefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs available</h3>
                    <p className="text-gray-600">Check back later for new job opportunities</p>
                  </div>
                )}

                {/* Pagination */}
                <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4">
                  <div className="text-sm text-gray-600">Page {jobsPage} of {Math.max(1, Math.ceil((jobsTotal || 0) / (jobsLimit || 10)))}</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setJobsPage(p => Math.max(1, p - 1))}
                      disabled={jobsPage <= 1}
                      className={`px-3 py-2 rounded-lg ${jobsPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                    >Previous</button>
                    <button
                      onClick={() => setJobsPage(p => (p * (jobsLimit || 10) < (jobsTotal || 0) ? p + 1 : p))}
                      disabled={jobsPage * (jobsLimit || 10) >= (jobsTotal || 0)}
                      className={`px-3 py-2 border rounded-lg ${jobsPage * (jobsLimit || 10) >= (jobsTotal || 0) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                    >Next</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'job-profiles' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Saved Jobs</h2>
                  {savedJobs.length === 0 ? (
                    <p className="text-gray-600">No saved jobs yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {jobPosts.filter(j => savedJobs.includes(j.id)).map(job => (
                        <div key={job.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-gray-900">{job.title}</h3>
                              <p className="text-gray-600">{job.company} - {job.location}</p>
                            </div>
                            <button onClick={() => toggleSaveJob(job.id)} className="text-blue-600 hover:text-blue-800">Unsave</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Applied Jobs</h2>
                  {appliedJobs.length === 0 ? (
                    <p className="text-gray-600">You haven't applied to any jobs yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {appliedJobs.map(app => {
                        const job = jobPosts.find(j => j.id === app.id);
                        if (!job) return null;
                        return (
                          <div key={app.id} className="border rounded-lg p-4 flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900">{job.title}</h3>
                              <p className="text-gray-600">{job.company} - Applied on {new Date(app.at).toLocaleDateString()}</p>
                            </div>
                            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">Submitted</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'interviews' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Interviews</h2>
                  {interviews.length === 0 ? (
                    <p className="text-gray-600">No interviews scheduled.</p>
                  ) : (
                    <div className="space-y-3">
                      {interviews.map(itv => (
                        <div key={itv.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900">{itv.title}</h3>
                              <p className="text-gray-600">{itv.date} - {itv.time}</p>
                            </div>
                            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{itv.status}</span>
                          </div>
                          <div className="mt-3 flex items-center gap-2">
                            <button onClick={() => handleUpdateInterviewStatus(itv.id, 'Completed')} className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">Mark as Done</button>
                            <button onClick={() => handleUpdateInterviewStatus(itv.id, 'Cancelled')} className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">Cancel</button>
                            {itv.link && (
                              <a href={itv.link} target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">Join</a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'assessments' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Assessments</h2>
                  <div className="space-y-3">
                    {assessments.map(asmt => (
                      <div key={asmt.id} className="border rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{asmt.name}</h3>
                          <p className="text-gray-600">Status: {asmt.status}{typeof asmt.score === 'number' ? ` - Score: ${asmt.score}` : ''}</p>
                        </div>
                        {asmt.status === 'Completed' ? (
                          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Review</button>
                        ) : asmt.status === 'In Progress' ? (
                          <button onClick={() => handleSubmitAssessment(asmt.id, 85)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
                        ) : (
                          <button onClick={() => handleStartAssessment(asmt.id)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Start</button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Events</h2>
                  {events.length === 0 ? (
                    <p className="text-gray-600">No events scheduled for you at the moment.</p>
                  ) : (
                    <div className="space-y-3">
                      {events.map(evt => (
                        <div key={evt.id} className="border rounded-lg p-4 flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{evt.name || evt.title}</h3>
                            <p className="text-gray-600">{evt.date} - {evt.location || evt.link}</p>
                          </div>
                          <button
                            className={`px-4 py-2 rounded-lg border ${evt.registered ? 'bg-blue-50 text-blue-700 border-blue-200' : 'hover:bg-gray-50'}`}
                            onClick={() => handleRegisterEvent(evt._id || evt.id, !!evt.registered)}
                          >
                            {evt.registered ? 'Unregister' : 'Register'}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'competitions' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Competitions</h2>
                  {competitions.length === 0 ? (
                    <p className="text-gray-600">No active competitions.</p>
                  ) : (
                    <div className="space-y-3">
                      {competitions.map(cmp => (
                        <div key={cmp.id} className="border rounded-lg p-4 flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{cmp.name}</h3>
                            <p className="text-gray-600">Deadline: {cmp.deadline} - Prize: {cmp.prize}</p>
                          </div>
                          <button
                            onClick={() => handleParticipateCompetition(cmp._id || cmp.id)}
                            disabled={!!cmp.participated}
                            className={`px-4 py-2 rounded-lg text-white ${cmp.participated ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                          >
                            {cmp.participated ? 'Participated' : 'Participate'}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}


            {/* Launchpad Section */}
            {activeTab === 'home' && (
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-lg text-white p-4 md:p-8 mt-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <div className="flex items-center mb-4">
                      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-3">
                        New
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold">Launchpad is now LIVE</h2>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">
                      Upskill, Practice & Crack a Job
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-2 bg-white/10 rounded-lg sm:bg-transparent sm:p-0">
                        <div className="text-2xl font-bold">{launchpadStats.opportunities}</div>
                        <div className="text-sm opacity-90">Job Opportunities</div>
                      </div>
                      <div className="text-center p-2 bg-white/10 rounded-lg sm:bg-transparent sm:p-0">
                        <div className="text-2xl font-bold">{launchpadStats.tests}</div>
                        <div className="text-sm opacity-90">Practice Tests</div>
                      </div>
                      <div className="text-center p-2 bg-white/10 rounded-lg sm:bg-transparent sm:p-0">
                        <div className="text-2xl font-bold">{launchpadStats.courses}</div>
                        <div className="text-sm opacity-90">Free Certificate Course</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-lg font-semibold">All for Free</span>
                      <p className="opacity-90">and let your career take flight</p>
                    </div>

                    <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                      <FiAward className="w-5 h-5" />
                      <span>Visit Launchpad Now</span>
                    </button>
                  </div>

                  <div className="lg:w-2/5 flex justify-center w-full">
                    <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm w-full max-w-xs sm:max-w-sm">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FiAward className="w-10 h-10 text-white" />
                        </div>
                        <p className="font-semibold">Start Your Journey Today!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Question Modal */}
      {showQuestionModal && currentJob && currentJob.customQuestions && (
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
      )}

      {/* Profile Panel */}
      {showProfilePanel && (
        <div>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={closeProfilePanel}></div>
          <div className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-96 bg-white shadow-2xl border-l border-gray-200">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">My Profile</h3>
              <button onClick={closeProfilePanel} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <div className="overflow-y-auto p-4" style={{ height: 'calc(100vh - 56px)' }}>
              {profileEditMode ? (
                <JobSeekerProfileForm user={user} />
              ) : (
                <div>
                  {/* Profile summary view */}
                  <div className="mb-4 p-4 bg-gray-50 rounded shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                        {user?.firstName?.[0]?.toUpperCase() || user?.username?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U'}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-black">{user?.username || user?.firstName || 'User'}</div>
                        <div className="text-sm text-gray-600">Jobseeker</div>
                        <div className="text-sm text-gray-600">{user?.email}</div>
                        <button
                          className="text-blue-600 underline text-xs mt-1"
                          onClick={() => router.push('/JobseekerProfile')}
                        >
                          View & Update Profile
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Profile Information Card */}
                  <div className="mb-4 p-4 bg-white rounded shadow">
                    <div className="font-semibold mb-2 text-gray-900">Profile Information</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><span className="font-medium">Phone</span><br />{user?.phone || 'Not provided'}</div>
                      <div><span className="font-medium">Date of Birth</span><br />{user?.dob || 'Not provided'}</div>
                      <div><span className="font-medium">Gender</span><br />{user?.gender || 'Not provided'}</div>
                      <div><span className="font-medium">Address</span><br />{user?.address || 'Not provided'}</div>
                      <div><span className="font-medium">Summary</span><br />{user?.summary || 'Not provided'}</div>
                      <div><span className="font-medium">Skills</span><br />{user?.skills?.join(', ') || 'Not provided'}</div>
                    </div>
                  </div>

                  {/* Settings / FAQs / Logout Card */}
                  <div className="mb-4 bg-white rounded shadow divide-y">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-900 hover:bg-gray-50"
                    >
                      <span className="flex items-center gap-2">
                        <FiSettings className="w-4 h-4 text-gray-500" />
                        <span>Settings</span>
                      </span>
                      <span className="text-gray-400">›</span>
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-900 hover:bg-gray-50"
                    >
                      <span className="flex items-center gap-2">
                        <FiHelpCircle className="w-4 h-4 text-gray-500" />
                        <span>FAQs</span>
                      </span>
                      <span className="text-gray-400">›</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                    >
                      <span className="flex items-center gap-2">
                        <FiLogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </span>
                    </button>
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Match Feedback Modal */}
      {matchModalState.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all scale-100 border border-gray-100">

            {/* Header / Banner */}
            <div className={`h-32 flex items-center justify-center ${matchModalState.type === 'success' ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-red-500 to-pink-600'}`}>
              <div className="text-white text-center">
                <div className="mb-2">
                  {matchModalState.type === 'success' ? (
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-md">
                      <FiCheck className="w-8 h-8 text-white" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-md">
                      <FiX className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {matchModalState.type === 'success' ? 'Application Sent' : 'Application Blocked'}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-8">
              <div className="flex flex-col items-center -mt-16 mb-4">
                {/* Score Circle */}
                <div className="relative w-24 h-24 bg-white rounded-full p-2 shadow-lg flex items-center justify-center">
                  <div className={`w-full h-full rounded-full border-4 flex items-center justify-center ${matchModalState.type === 'success' ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600'}`}>
                    <span className="text-2xl font-bold">{matchModalState.score}%</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 font-medium uppercase mt-2 tracking-wider">Match Score</span>
              </div>

              <p className="text-center text-gray-700 font-medium mb-6">
                {matchModalState.message}
              </p>

              {matchModalState.suggestions && matchModalState.suggestions.length > 0 && (
                <div className="bg-orange-50 rounded-xl p-4 mb-6 border border-orange-100">
                  <h4 className="text-sm font-bold text-orange-800 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    Improvement Suggestions
                  </h4>
                  <ul className="space-y-2">
                    {matchModalState.suggestions.slice(0, 3).map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 shrink-0"></span>
                        {s}
                      </li>
                    ))}
                    {matchModalState.suggestions.length > 3 && (
                      <li className="text-xs text-gray-500 italic pl-3">
                        + {matchModalState.suggestions.length - 3} more suggestions...
                      </li>
                    )}
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
                {matchModalState.type === 'error' && (
                  <Link href="/JobseekerProfile" className="flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-center shadow-lg hover:shadow-xl">
                    Update Profile
                  </Link>
                )}
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
      )}
    </div>
  );
}