"use client";

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
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
  FiLogOut,
  FiPhone,
  FiMail,
  FiMapPin,
  FiFileText,
  FiSearch,
  FiBookmark,
  FiChevronRight,
  FiCpu,
  FiVideo
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Unified sidebar state
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

    const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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

        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
          const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
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
    if (!user || !user._id || profileDataLoaded.current) return;

    let isMounted = true;
    profileDataLoaded.current = true;

    // Load applications for this user from backend
    const loadApplications = async () => {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (!token) return;

        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        // FIX: Add applicantId to query to ensure we fetch correctly
        const userId = user._id || user.id || user.email;
        const apiUrl = baseUrl ? `${baseUrl}/api/applications?applicantId=${userId}` : `/api/applications?applicantId=${userId}`;

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
          const currentUserId = user._id || user.id || user.email || 'default';
          localStorage.setItem(`appliedJobs_${currentUserId}`, JSON.stringify(apps));
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
    { id: 'my-profile', label: 'My Profile', icon: FiUser, path: '/JobseekerProfile' },
    { id: 'interviews', label: 'Interviews', icon: FiCalendar },
    { id: 'assessments', label: 'Assessments', icon: FiBook },
    { id: 'events', label: 'Events', icon: FiAward },
    { id: 'competitions', label: 'Competitions', icon: FiAward }
  ];

  const handleNavigation = (item) => {
    if (item.path) {
      router.push(item.path);
      setIsSidebarOpen(false);
      return;
    }
    setActiveTab(item.id);
    setIsSidebarOpen(false);
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
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-100 text-black transition-colors"
                  aria-label="Open menu"
                >
                  <FiMenu className="w-6 h-6" />
                </button>
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

          {/* Animated Sidenav Overlay */}

          {/* Backdrop */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidenav Panel */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">Menu</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-64px)]">
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
            </nav>

            {/* Sidenav Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
              >
                <FiLogOut className="w-5 h-5" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1">


            {(activeTab === 'home' || activeTab === 'find-jobs') && (
              <div className="space-y-6">
                {/* Enhanced Profile Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="relative group shrink-0">
                      <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-blue-500 to-indigo-600">
                        <div className="w-full h-full rounded-full bg-white p-0.5 relative overflow-hidden">
                          {(user?.profileImage || avatarPreview) ? (
                            <img src={user?.profileImage || avatarPreview} alt="Profile" className="w-full h-full object-cover rounded-full" />
                          ) : (
                            <div className="w-full h-full bg-gray-50 flex items-center justify-center text-2xl font-bold text-blue-600">
                              {(user?.firstName?.[0] || user?.name?.[0] || 'U').toUpperCase()}
                            </div>
                          )}
                          <button
                            onClick={() => document.getElementById('dash-avatar-main')?.click()}
                            className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium"
                          >
                            Change
                          </button>
                        </div>
                      </div>
                      <input id="dash-avatar-main" type="file" className="hidden" accept="image/*" onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (ev) => setAvatarPreview(ev.target.result);
                          reader.readAsDataURL(file);
                          await uploadAvatar(file);
                        }
                      }} />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm whitespace-nowrap">
                        {Math.round(profileCompletion)}% Ready
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {user?.firstName || user?.lastName
                              ? `${user?.firstName || ''} ${user?.lastName || ''}`.trim()
                              : (user?.name || user?.username || 'Job Seeker')}
                          </h2>
                          <p className="text-gray-500 font-medium">{user?.profileTitle || user?.title || 'Job Seeker'}</p>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400 mt-1">
                            <FiMapPin className="w-3.5 h-3.5" />
                            <span>{user?.address || user?.location || 'Location not set'}</span>
                          </div>
                        </div>
                        <Link href="/JobseekerProfile" className="px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                          Complete Profile
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                        <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                          <div className="text-2xl font-bold text-blue-600">{appliedJobs.length}</div>
                          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Applied</div>
                        </div>
                        <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                          <div className="text-2xl font-bold text-indigo-600">{savedJobs.length}</div>
                          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Saved</div>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                          <div className="text-2xl font-bold text-purple-600">
                            {appliedJobs.filter(job => ['interview', 'interviewing', 'scheduled'].includes((job.status || '').toLowerCase())).length}
                          </div>
                          <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Interviews</div>
                        </div>
                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                          <div className="text-2xl font-bold text-emerald-600">
                            {appliedJobs.filter(job => ['offer', 'offer_received', 'hired'].includes((job.status || '').toLowerCase())).length}
                          </div>
                          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Offers</div>
                        </div>
                      </div>
                    </div>
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
                            {new Date(job.deadline) < new Date() ? (
                              <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                                Expired
                              </span>
                            ) : (
                              <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                                Open for applications
                              </span>
                            )}

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
                            disabled={appliedJobs.some(j => j.id === job.id) || applyingJobId === job.id || new Date(job.deadline) < new Date()}
                            className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${appliedJobs.some(j => j.id === job.id) || applyingJobId === job.id || new Date(job.deadline) < new Date()
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
                                <span>
                                  {appliedJobs.some(j => j.id === job.id)
                                    ? 'Applied'
                                    : new Date(job.deadline) < new Date()
                                      ? 'Expired'
                                      : 'Apply Now'}
                                </span>
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

            {activeTab === 'applied-jobs' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Applied Jobs</h2>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">{appliedJobs.length} Applications</span>
                </div>

                {appliedJobs.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheck className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">No applications yet</h3>
                    <p className="text-gray-500 mb-6">Start applying to jobs to track them here.</p>
                    <button onClick={() => setActiveTab('home')} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700">Browse Jobs</button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {appliedJobs.map(app => (
                      <div key={app._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{app.jobTitle}</h3>
                            <p className="text-gray-600 font-medium">{app.company}</p>
                            <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                              <span className="flex items-center gap-1"><FiCalendar className="w-4 h-4" /> Applied: {new Date(app.appliedDate).toLocaleDateString()}</span>
                              {app.matchScore > 0 && <span className="flex items-center gap-1 text-emerald-600 font-medium"><FiCheck className="w-4 h-4" /> {app.matchScore}% Match</span>}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize
                                ${app.status === 'Applied' ? 'bg-blue-50 text-blue-700' :
                                app.status === 'Rejected' ? 'bg-red-50 text-red-700' :
                                  'bg-green-50 text-green-700'}`}>
                              {app.status || 'Applied'}
                            </span>
                            <button className="p-2 text-gray-400 hover:text-gray-600"><FiChevronRight className="w-5 h-5" /></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'saved-jobs' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Saved Jobs</h2>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">{savedJobs.length} Saved</span>
                </div>

                {savedJobs.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiBookmark className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">No saved jobs</h3>
                    <p className="text-gray-500 mb-6">Save jobs you're interested in to view them later.</p>
                    <button onClick={() => setActiveTab('home')} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700">Browse Jobs</button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobPosts.filter(j => savedJobs.includes(j.id)).map(job => (
                      <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow relative group">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-gray-900 line-clamp-1">{job.title}</h3>
                            <div className="flex items-center gap-2">
                              <p className="text-gray-600 text-sm">{job.company}</p>
                              {new Date(job.deadline) < new Date() && (
                                <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Expired</span>
                              )}
                            </div>
                          </div>
                          <button onClick={() => toggleSaveJob(job.id)} className="text-indigo-600 hover:text-indigo-800 p-2 bg-indigo-50 rounded-lg">
                            <FiBookmark className="w-5 h-5 fill-current" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                          <FiMapPin className="w-4 h-4" /> {job.location}
                        </div>
                        <button
                          onClick={() => handleApplyJob(job.id)}
                          disabled={new Date(job.deadline) < new Date()}
                          className={`w-full py-2.5 rounded-lg font-medium transition-colors ${new Date(job.deadline) < new Date()
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-900 text-white hover:bg-black'
                            }`}
                        >
                          {new Date(job.deadline) < new Date() ? 'Expired' : 'Apply Now'}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'interviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">My Interviews</h2>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">{interviews.length} Scheduled</span>
                </div>

                {interviews.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCalendar className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">No interviews scheduled</h3>
                    <p className="text-gray-500 mb-6">Applications that advance will have interviews appear here.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {interviews.map(itv => (
                      <div key={itv.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{itv.title}</h3>
                          <p className="text-gray-600 font-medium">{itv.company}</p>
                          <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><FiCalendar className="w-4 h-4" /> Added: {itv.date} at {itv.time}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize flex items-center gap-2
                                ${itv.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' :
                              itv.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200' :
                                'bg-gray-50 text-gray-700'}`}>
                            {itv.status === 'Pending' && <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>}
                            {itv.status === 'Completed' && <FiCheck className="w-4 h-4" />}
                            {itv.status}
                          </span>

                          {itv.status === 'Pending' && (
                            <Link
                              href={`/interview/${itv.token}`}
                              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-200 flex items-center gap-2"
                            >
                              <FiVideo className="w-4 h-4" /> Start Interview
                            </Link>
                          )}

                          {itv.status === 'Completed' && (
                            <button disabled className="px-6 py-2.5 bg-gray-100 text-gray-400 font-bold rounded-xl cursor-not-allowed">
                              Submitted
                            </button>
                            // In future, link to feedback/results
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}


            {
              activeTab === 'assessments' && (
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
              )
            }

            {
              activeTab === 'events' && (
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
              )
            }

            {
              activeTab === 'competitions' && (
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
              )
            }


            {/* Launchpad Section */}
            {
              activeTab === 'home' && (
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
            <div className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[480px] bg-white shadow-2xl border-l border-gray-100 transform transition-transform duration-300">
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">My Profile</h3>
                <button
                  onClick={closeProfilePanel}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto h-[calc(100vh-80px)]">
                {profileEditMode ? (
                  <JobSeekerProfileForm user={user} />
                ) : (
                  <div className="p-6 space-y-8">
                    {/* User Identity Card */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4 group">
                        <div className="w-24 h-24 rounded-full p-1 bg-white border-2 border-blue-100 shadow-sm mx-auto overflow-hidden">
                          {(user?.profileImage || avatarPreview) ? (
                            <img
                              src={user?.profileImage || avatarPreview}
                              alt="Profile"
                              className="w-full h-full rounded-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div className={`w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center ${(user?.profileImage || avatarPreview) ? 'hidden' : 'flex'}`}>
                            <span className="text-3xl font-bold text-blue-600">
                              {user?.firstName?.[0]?.toUpperCase() || user?.username?.[0]?.toUpperCase() || 'U'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        {user?.username || user?.firstName || 'User'}
                      </h2>
                      <p className="text-base text-gray-500 font-medium mb-1">Job Seeker</p>
                      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-5">
                        <FiMail className="w-4 h-4" />
                        <span>{user?.email}</span>
                      </div>

                      <button
                        onClick={() => router.push('/JobseekerProfile')}
                        className="inline-flex items-center justify-center px-6 py-2.5 border border-blue-600 text-blue-600 font-semibold text-sm rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all w-full sm:w-auto"
                      >
                        <span className="mr-2">View & Update Profile</span>
                        <FiUser className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Profile Details Grid */}
                    <div className="grid grid-cols-1 gap-6">
                      <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Contact Information</h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-white rounded-xl shadow-sm text-blue-600 shrink-0">
                              <FiPhone className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-400 mb-0.5">Phone</p>
                              <p className="text-base font-semibold text-gray-900 truncate">{user?.phone || <span className="text-gray-400 italic font-normal">Not provided</span>}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-white rounded-xl shadow-sm text-purple-600 shrink-0">
                              <FiMapPin className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-400 mb-0.5">Location</p>
                              <p className="text-base font-semibold text-gray-900 break-words">{user?.address || <span className="text-gray-400 italic font-normal">Not provided</span>}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Personal Details</h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-white rounded-xl shadow-sm text-pink-600 shrink-0">
                              <FiCalendar className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-400 mb-0.5">Date of Birth</p>
                              <p className="text-base font-semibold text-gray-900">{user?.dob ? String(user.dob).split('T')[0] : <span className="text-gray-400 italic font-normal">Not provided</span>}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-white rounded-xl shadow-sm text-teal-600 shrink-0">
                              <FiUser className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-400 mb-0.5">Gender</p>
                              <p className="text-base font-semibold text-gray-900">{user?.gender || <span className="text-gray-400 italic font-normal">Not provided</span>}</p>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Professional</h4>
                        <div className="space-y-4">
                          {((user?.summary && user.summary !== 'Not provided') || (user?.skills && user.skills.length > 0)) ? (
                            <>
                              {user?.summary && user.summary !== 'Not provided' && (
                                <div className="flex items-start gap-4">
                                  <div className="p-2.5 bg-white rounded-xl shadow-sm text-orange-600 shrink-0">
                                    <FiFileText className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-400 mb-0.5">Summary</p>
                                    <p className="text-sm font-medium text-gray-700 leading-relaxed line-clamp-4">{user.summary}</p>
                                  </div>
                                </div>
                              )}

                              {user?.skills && user.skills.length > 0 && (
                                <div className="flex items-start gap-4">
                                  <div className="p-2.5 bg-white rounded-xl shadow-sm text-indigo-600 shrink-0">
                                    <FiCpu className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-400 mb-0.5">Skills</p>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                      {user.skills.map((skill, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-white rounded-md text-xs font-semibold text-gray-700 border border-gray-200 shadow-sm">{skill}</span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </>
                          ) : (
                            <span className="text-gray-400 italic font-normal text-sm block text-center py-2">Add professional details to your profile to see them here.</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-gray-100 space-y-3">
                      <button className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-100 text-gray-600 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                            <FiSettings className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-gray-700">Settings</span>
                        </div>
                        <FiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                      </button>

                      <button className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-100 text-gray-600 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                            <FiHelpCircle className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-gray-700">Help & FAQs</span>
                        </div>
                        <FiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                      </button>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-between p-4 bg-red-50 hover:bg-red-100 rounded-xl border border-red-100 transition-colors group mt-2"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white text-red-500 rounded-lg shadow-sm">
                            <FiLogOut className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-red-600">Log Out</span>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
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
                <div className="flex flex-col items-center -mt-12 mb-3">
                  {/* Score Circle */}
                  <div className="relative w-20 h-20 bg-white rounded-full p-1.5 shadow-lg flex items-center justify-center">
                    <div className={`w-full h-full rounded-full border-4 flex items-center justify-center ${matchModalState.type === 'success' ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600'}`}>
                      <span className="text-xl font-bold">{matchModalState.score}%</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium uppercase mt-1 tracking-wider">Match Score</span>
                </div>

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