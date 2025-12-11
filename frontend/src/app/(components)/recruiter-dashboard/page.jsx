"use client";

import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showJobForm, setShowJobForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const [jobPosts, setJobPosts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobApplications, setJobApplications] = useState([]);
  const [isApplicationsModalOpen, setIsApplicationsModalOpen] = useState(false);
  const [isLoadingApplications, setIsLoadingApplications] = useState(false);
  const [applicationsError, setApplicationsError] = useState('');
  const [user, setUser] = useState(null);

  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    description: '',
    skillsRequired: [],
    experience: '',
    location: '',
    salary: '',
    jobType: 'Full-time',
    deadline: '',
    customQuestions: [
      { id: 'q1', question: '', isRequired: false },
      { id: 'q2', question: '', isRequired: false },
      { id: 'q3', question: '', isRequired: false }
    ]
  });
  const [currentSkill, setCurrentSkill] = useState('');
  const router = useRouter();
  const baseAuthUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '')
    .trim()
    .replace(/[;\s]+$/, '')
    .replace(/\/$/, '');

  const handleLogout = () => {
    try {
      fetch(`${baseAuthUrl}/api/logout`, { method: 'POST' }).finally(() => {
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

  const handleUpdateApplicationStatus = async (applicationId, newStatus) => {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      if (!token) {
        alert('Please login to update applications');
        return;
      }

      const response = await fetch(`${baseAuthUrl}/api/applications/${applicationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || `Failed to update application (status ${response.status})`);
      }

      setJobApplications(prev => prev.map(app =>
        (app._id === applicationId)
          ? { ...app, status: newStatus }
          : app
      ));

      alert(`Application marked as ${newStatus}`);
    } catch (error) {
      console.error('Error updating application status:', error);
      alert('Failed to update application status. Please try again.');
    }
  };

  const handleViewApplications = async (job) => {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      if (!token) {
        alert('Please login to view applications');
        return;
      }

      setSelectedJob(job);
      setIsApplicationsModalOpen(true);
      setIsLoadingApplications(true);
      setApplicationsError('');

      const response = await fetch(`${baseAuthUrl}/api/applications?jobId=${job._id || job.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success && Array.isArray(result.data)) {
        const apps = result.data;

        // Enrich with jobseeker profile data (name, email, phone, resume) from profile/get
        const applicantIds = Array.from(new Set(
          apps
            .map(a => {
              const raw = a.applicant;
              if (!raw) return null;
              if (typeof raw === 'string') return raw;
              return raw._id || raw.id || raw.userId || null;
            })
            .filter(Boolean)
        ));

        const profilesById = {};
        await Promise.all(applicantIds.map(async (id) => {
          try {
            const res = await fetch(`${baseAuthUrl}/api/profile/get`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ userId: id, userType: 'jobseeker' })
            });
            const json = await res.json().catch(() => ({}));
            if (res.ok && json?.success && json.data) {
              profilesById[String(id)] = json.data;
            }
          } catch (_) { }
        }));

        const enriched = apps.map(app => {
          const rawApplicant = app.applicant;
          const applicant = typeof rawApplicant === 'string' ? { userId: rawApplicant } : (rawApplicant || {});
          const id = applicant._id || applicant.id || applicant.userId;
          const profileData = id ? profilesById[String(id)] : null;

          if (!profileData) return app;

          const userInfo = profileData.user || {};
          const profileInfo = profileData.profile || {};

          return {
            ...app,
            applicant: {
              ...applicant,
              username: userInfo.username || app.applicant?.username || (userInfo.email ? userInfo.email.split('@')[0] : undefined),
              fullName:
                app.applicant?.fullName ||
                userInfo.fullName ||
                [userInfo.firstName, userInfo.lastName].filter(Boolean).join(' ') ||
                profileInfo.fullName ||
                [profileInfo.firstName, profileInfo.lastName].filter(Boolean).join(' '),
              firstName: app.applicant?.firstName || userInfo.firstName || profileInfo.firstName,
              lastName: app.applicant?.lastName || userInfo.lastName || profileInfo.lastName,
              email: app.applicant?.email || userInfo.email,
              phone:
                app.applicant?.phone ||
                profileInfo.phone ||
                (profileInfo.address ? profileInfo.address.phone : undefined),
              resume: profileInfo.resume || app.applicant?.resume || null,
            }
          };
        });

        setJobApplications(enriched);
      } else {
        setApplicationsError(result.message || 'Failed to load applications');
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
      setApplicationsError('Failed to load applications. Please try again.');
    } finally {
      setIsLoadingApplications(false);
    }
  };

  // Function to fetch recruiter's jobs
  const fetchRecruiterJobs = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token || !userId) return;

      const response = await fetch(`${baseAuthUrl}/api/jobs?recruiterId=${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setJobPosts(result.data);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const fetchRecruiterApplications = async () => {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      if (!token) return;

      const response = await fetch(`${baseAuthUrl}/api/applications`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result = await response.json();

      if (response.ok && result.success && Array.isArray(result.data)) {
        const apps = result.data;

        // Enrich with jobseeker profile data (name, email, phone) from profile/get
        const applicantIds = Array.from(new Set(
          apps
            .map(a => {
              const raw = a.applicant;
              if (!raw) return null;
              if (typeof raw === 'string') return raw;
              return raw._id || raw.id || raw.userId || null;
            })
            .filter(Boolean)
        ));

        const profilesById = {};
        await Promise.all(applicantIds.map(async (id) => {
          try {
            const res = await fetch(`${baseAuthUrl}/api/profile/get`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ userId: id, userType: 'jobseeker' })
            });
            const json = await res.json().catch(() => ({}));
            if (res.ok && json?.success && json.data) {
              profilesById[String(id)] = json.data;
            }
          } catch (_) { }
        }));

        const enrichedApps = apps.map(app => {
          const rawApplicant = app.applicant;
          const applicant = typeof rawApplicant === 'string' ? { userId: rawApplicant } : (rawApplicant || {});
          const id = applicant._id || applicant.id || applicant.userId;
          const profileData = id ? profilesById[String(id)] : null;

          if (!profileData) return app;

          const userInfo = profileData.user || {};
          const profileInfo = profileData.profile || {};

          return {
            ...app,
            applicant: {
              ...app.applicant,
              username: userInfo.username || app.applicant?.username || (userInfo.email ? userInfo.email.split('@')[0] : undefined),
              fullName:
                app.applicant?.fullName ||
                userInfo.fullName ||
                [userInfo.firstName, userInfo.lastName].filter(Boolean).join(' ') ||
                profileInfo.fullName ||
                [profileInfo.firstName, profileInfo.lastName].filter(Boolean).join(' '),
              firstName: app.applicant?.firstName || userInfo.firstName || profileInfo.firstName,
              lastName: app.applicant?.lastName || userInfo.lastName || profileInfo.lastName,
              email: app.applicant?.email || userInfo.email,
              phone:
                app.applicant?.phone ||
                profileInfo.phone ||
                (profileInfo.address ? profileInfo.address.phone : undefined),
              resume: profileInfo.resume || app.applicant?.resume || null,
            }
          };
        });

        setApplications(enrichedApps);
      }
    } catch (error) {
      console.error('Error fetching recruiter applications:', error);
    }
  };

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
        const userData = JSON.parse(storedUser);
        setUser(userData);
        // Fetch recruiter's jobs
        fetchRecruiterJobs(userData._id || userData.id);
        // Fetch recruiter's applications
        fetchRecruiterApplications();
      }
    } catch (_) { }
  }, [router]);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'post-job', label: 'Post New Job', icon: '➕' },
    { id: 'applications', label: 'Applications', icon: '📝' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ];

  const handleAddSkill = () => {
    if (currentSkill.trim() && !newJob.skillsRequired.includes(currentSkill.trim())) {
      setNewJob(prev => ({
        ...prev,
        skillsRequired: [...prev.skillsRequired, currentSkill.trim()]
      }));
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setNewJob(prev => ({
      ...prev,
      skillsRequired: prev.skillsRequired.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleQuestionChange = (questionId, field, value) => {
    setNewJob(prev => ({
      ...prev,
      customQuestions: prev.customQuestions.map(q =>
        q.id === questionId ? { ...q, [field]: value } : q
      )
    }));
  };

  const handlePostJob = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login to post jobs');
        return;
      }

      const recruiterId = user?._id || user?.id || user?.userId || null;
      const payload = {
        ...newJob,
        recruiterId,
      };

      const response = await fetch(`${baseAuthUrl}/api/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        // Add to local state
        setJobPosts(prev => [result.data, ...prev]);

        // Reset form
        setNewJob({
          title: '',
          company: '',
          description: '',
          skillsRequired: [],
          experience: '',
          location: '',
          salary: '',
          jobType: 'Full-time',
          deadline: '',
          customQuestions: [
            { id: 'q1', question: '', isRequired: false },
            { id: 'q2', question: '', isRequired: false },
            { id: 'q3', question: '', isRequired: false }
          ]
        });
        setShowJobForm(false);

        alert('Job posted successfully!');
      } else {
        alert(result.message || 'Failed to post job');
      }
    } catch (error) {
      console.error('Error posting job:', error);
      alert('Failed to post job. Please try again.');
    }
  };

  const handleNavigation = (item) => {
    if (item.id === 'post-job') {
      setShowJobForm(true);
    } else if (item.id === 'profile') {
      router.push('/RecruiterProfile');
    } else {
      setActiveTab(item.id);
      setShowJobForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ background: '#f9fafb', minHeight: '100vh' }}>
      <Head>
        <title>Recruiter Dashboard</title>
        <meta name="description" content="Recruiter Dashboard - Manage job posts and applications" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  /* Close Icon */
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  /* Menu Icon */
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Recruiter Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                {(() => {
                  const name = [user?.firstName, user?.lastName].filter(Boolean).join(' ')
                    || user?.username
                    || (user?.email ? user.email.split('@')[0] : '')
                    || 'Recruiter';
                  const email = user?.email ? ` (${user.email})` : '';
                  return `Welcome, ${name}${email}!`;
                })()}
              </span>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {(
                  user?.firstName?.[0] ||
                  user?.username?.[0] ||
                  user?.email?.[0] ||
                  'R'
                ).toUpperCase()}
              </div>
              <button
                onClick={handleLogout}
                className="ml-2 px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className={`
              fixed inset-0 z-40 lg:static lg:z-auto lg:block
              ${isMobileMenuOpen ? 'block' : 'hidden'}
            `}>
            {/* Mobile overlay */}
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:static lg:shadow-sm lg:block overflow-y-auto">
              {/* Mobile Header in Sidebar */}
              <div className="flex items-center justify-between px-4 py-3 border-b lg:hidden">
                <span className="text-xl font-bold text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="p-4">
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          handleNavigation(item);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${(activeTab === item.id || (item.id === 'post-job' && showJobForm))
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            {showJobForm ? (
              /* Job Posting Form */
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Post New Job</h2>
                  <p className="text-gray-600 mt-1">Fill in the details to create a new job posting</p>
                </div>

                <form onSubmit={handlePostJob} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                      <input
                        type="text"
                        required
                        value={newJob.title}
                        onChange={(e) => setNewJob(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Frontend Developer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                      <input
                        type="text"
                        required
                        value={newJob.company}
                        onChange={(e) => setNewJob(prev => ({ ...prev, company: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Description *</label>
                    <textarea
                      required
                      value={newJob.description}
                      onChange={(e) => setNewJob(prev => ({ ...prev, description: e.target.value }))}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe the job responsibilities and requirements..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skills Required *</label>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Add a skill (e.g., React)"
                      />
                      <button
                        type="button"
                        onClick={handleAddSkill}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {newJob.skillsRequired.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience Required</label>
                      <input
                        type="text"
                        value={newJob.experience}
                        onChange={(e) => setNewJob(prev => ({ ...prev, experience: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., 2-4 years"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={newJob.location}
                        onChange={(e) => setNewJob(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Remote, New York, NY"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                      <input
                        type="text"
                        value={newJob.salary}
                        onChange={(e) => setNewJob(prev => ({ ...prev, salary: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., $70,000 - $90,000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                      <select
                        value={newJob.jobType}
                        onChange={(e) => setNewJob(prev => ({ ...prev, jobType: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                      </select>
                    </div>
                  </div>

                  {/* Custom Questions Section */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Questions</h3>
                    <p className="text-sm text-gray-600 mb-6">Add up to 3 custom questions for job applicants. You can mark questions as mandatory or optional.</p>

                    <div className="space-y-4">
                      {newJob.customQuestions.map((question, index) => (
                        <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <label className="block text-sm font-medium text-gray-700">
                              Question {index + 1}
                            </label>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id={`required-${question.id}`}
                                checked={question.isRequired}
                                onChange={(e) => handleQuestionChange(question.id, 'isRequired', e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`required-${question.id}`} className="ml-2 text-sm text-gray-700">
                                Mandatory
                              </label>
                            </div>
                          </div>
                          <textarea
                            value={question.question}
                            onChange={(e) => handleQuestionChange(question.id, 'question', e.target.value)}
                            placeholder={`Enter your question here... (e.g., "Why are you interested in this position?")`}
                            rows="2"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                          {question.isRequired && (
                            <p className="text-xs text-red-600 mt-1">* This question is mandatory for applicants</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Application Deadline</label>
                    <input
                      type="date"
                      required
                      value={newJob.deadline}
                      onChange={(e) => setNewJob(prev => ({ ...prev, deadline: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="flex gap-4 pt-6 border-t flex-col-reverse sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setShowJobForm(false)}
                      className="w-full sm:w-auto px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                    >
                      Post Job
                    </button>
                  </div>
                </form>
              </div>
            ) : activeTab === 'applications' ? (
              /* Applications Tab */
              <div className="space-y-6">

                {!selectedJob ? (
                  // Level 1: List of Jobs with Application Counts
                  <>
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Applications by Job</h2>
                      <p className="text-gray-600">Select a job to view its applicants.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {jobPosts.map((job, idx) => {
                        const jobId = job._id || job.id;
                        const count = applications.filter(a => {
                          const appJobId = a.job?._id || a.job || '';
                          return String(appJobId) === String(jobId);
                        }).length;
                        return (
                          <button
                            key={jobId || idx}
                            onClick={() => setSelectedJob(job)}
                            className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow text-left"
                          >
                            <h3 className="font-bold text-lg text-gray-900 mb-2">{job.title}</h3>
                            <p className="text-gray-500 text-sm mb-4">{job.company}</p>
                            <div className="flex justify-between items-center">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {count} Applicants
                              </span>
                              <span className="text-blue-600">View &rarr;</span>
                            </div>
                          </button>
                        );
                      })}
                      {jobPosts.length === 0 && (
                        <div className="col-span-full text-center p-8 bg-white border rounded-lg text-gray-500">
                          No jobs posted yet.
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  // Level 2: List of Applicants for Selected Job
                  <>
                    <div className="bg-white rounded-lg shadow-sm border p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <button onClick={() => setSelectedJob(null)} className="text-gray-500 hover:text-gray-900 mb-2 flex items-center gap-1 text-sm">
                          &larr; Back to Jobs
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {selectedJob.title} <span className="text-gray-500 font-normal text-lg">({selectedJob.company})</span>
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {applications
                        .filter(a => {
                          const jobId = selectedJob._id || selectedJob.id;
                          const appJobId = a.job?._id || a.job || '';
                          return String(appJobId) === String(jobId);
                        })
                        .map((application, index) => {
                          const applicant = application.applicant || {};
                          const skills = applicant.skills || [];
                          const resume = applicant.resume || null;
                          let resumeUrl = '';
                          if (resume && resume.filePath) {
                            resumeUrl = resume.filePath.startsWith('http')
                              ? resume.filePath
                              : `${baseAuthUrl}${resume.filePath}`;
                          }
                          const matchScore = application.matchScore || 0;

                          // Score Color Logic
                          let scoreColor = 'text-red-500';
                          let ringColor = 'text-red-200';
                          if (matchScore >= 75) { scoreColor = 'text-green-600'; ringColor = 'text-green-200'; }
                          else if (matchScore >= 50) { scoreColor = 'text-yellow-600'; ringColor = 'text-yellow-200'; }

                          // SVGs for Circular Progress
                          const radius = 18;
                          const circumference = 2 * Math.PI * radius;
                          const offset = circumference - (matchScore / 100) * circumference;

                          const appKey = application._id || application.id || `app-${index}`;
                          const rawFullName = applicant.fullName || [applicant.firstName, applicant.lastName].filter(Boolean).join(' ');
                          const hasFullName = rawFullName && !rawFullName.toLowerCase().includes('undefined') && rawFullName.trim().length > 0;

                          // Display Logic: User preferences seems to be Username -> Full Name -> Email Prefix
                          // But typically Full Name is better. However, user specifically asked for "actual user_name" 
                          // to not be the email prefix. 
                          // Let's use Username if available, else Full Name, else Email.
                          const displayName = applicant.username || (hasFullName ? rawFullName.trim() : (applicant.email || 'Unknown'));

                          return (
                            <div key={appKey} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                {/* Score Column */}
                                <div className="flex flex-col items-center justify-center shrink-0 w-24">
                                  <div className="relative w-16 h-16">
                                    <svg className="w-full h-full transform -rotate-90">
                                      <circle
                                        cx="32" cy="32" r={radius}
                                        stroke="currentColor" strokeWidth="4" fill="transparent"
                                        className={ringColor}
                                      />
                                      <circle
                                        cx="32" cy="32" r={radius}
                                        stroke="currentColor" strokeWidth="4" fill="transparent"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={offset}
                                        strokeLinecap="round"
                                        className={scoreColor}
                                      />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <span className={`text-sm font-bold ${scoreColor}`}>{Math.round(matchScore)}%</span>
                                    </div>
                                  </div>
                                  <span className="text-xs text-gray-500 font-medium mt-1">Match Score</span>
                                </div>

                                {/* Info Column */}
                                <div className="flex-1">
                                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                    <div>
                                      <h3 className="text-lg font-bold text-gray-900">{displayName}</h3>
                                      <div className="text-sm text-gray-600 space-y-1 mt-1">
                                        <p className="flex items-center gap-2">
                                          ✉️ {applicant.email || 'No email'}
                                        </p>
                                        {applicant.phone && (
                                          <p className="flex items-center gap-2">
                                            📞 {applicant.phone}
                                          </p>
                                        )}
                                      </div>

                                      {skills.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                          {skills.map((skill, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs border">
                                              {skill}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>

                                    <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
                                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${application.status === 'Interview' ? 'bg-yellow-100 text-yellow-800' :
                                        application.status === 'Hired' ? 'bg-green-100 text-green-800' :
                                          application.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                                            'bg-blue-100 text-blue-800'
                                        }`}>
                                        {application.status}
                                      </span>
                                      <span className="text-xs text-gray-400">
                                        Applied: {application.appliedDate ? new Date(application.appliedDate).toLocaleDateString() : 'N/A'}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row gap-4 sm:items-center">
                                    {resumeUrl ? (
                                      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1">
                                        📄 View Resume
                                      </a>
                                    ) : (
                                      <span className="text-sm text-gray-400 flex items-center gap-1">📄 No Resume</span>
                                    )}

                                    <select
                                      className="w-full sm:w-auto text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                      value={application.status}
                                      onChange={(e) => handleUpdateApplicationStatus(application._id, e.target.value)}
                                    >
                                      <option value="Applied">Active</option>
                                      <option value="Interview">Interview</option>
                                      <option value="Hired">Hired</option>
                                      <option value="Rejected">Rejected</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                      {applications.filter(a => {
                        const jobId = selectedJob._id || selectedJob.id;
                        const appJobId = a.job?._id || a.job || '';
                        return String(appJobId) === String(jobId);
                      }).length === 0 && (
                          <div className="text-center p-12 bg-white border border-dashed rounded-lg">
                            <p className="text-gray-500 text-lg">No applications for this job yet.</p>
                          </div>
                        )}
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Dashboard Tab - Job Posts */
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">Your Job Posts</h2>
                      <p className="text-gray-600">Manage your active job postings</p>
                    </div>
                    <button
                      onClick={() => setShowJobForm(true)}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium whitespace-nowrap"
                    >
                      + Post New Job
                    </button>
                  </div>
                </div>

                {jobPosts.map((job) => (
                  <div key={job._id || job.id} className="bg-white rounded-lg shadow-sm border">
                    <div className="p-6 border-b">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                          <p className="text-gray-600 mt-1">{job.company} • {job.location} • {job.jobType}</p>
                          <p className="text-gray-700 mt-2">{job.description}</p>

                          <div className="flex flex-wrap gap-2 mt-3">
                            {job.skillsRequired?.map((skill, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                            <span>💰 {job.salary}</span>
                            <span>⏳ {job.experience}</span>
                            <span>📅 Apply by: {new Date(job.deadline).toLocaleDateString()}</span>
                            <span>👥 {job.applicants} applicants</span>
                          </div>
                        </div>
                        <div className="text-right flex flex-col items-end gap-3">
                          <span className={`text-sm font-medium px-3 py-1 rounded-full ${job.status === 'Active' ? 'bg-green-100 text-green-800' :
                            job.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                            {job.status}
                          </span>
                          <p className="text-sm text-gray-500">
                            Posted: {new Date(job.createdAt || job.postedDate).toLocaleDateString()}
                          </p>
                          <button
                            onClick={() => {
                              setSelectedJob(job);
                              setActiveTab('applications');
                            }}
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                          >
                            View Applicants &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}