"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { FiMenu, FiX, FiPieChart, FiUser, FiPlusSquare, FiFileText, FiLogOut, FiUsers, FiClock, FiBriefcase, FiEdit2, FiMail, FiPhone, FiCheck, FiMapPin, FiCamera, FiCheckCircle } from 'react-icons/fi';
import Leaderboard from './Analytics/Leaderboard';
import ActivityTrends from './Analytics/ActivityTrends';


const baseAuthUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log("RecruiterDashboard baseAuthUrl:", baseAuthUrl);

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [applications, setApplications] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar State

  // ... (Keep existing Job Management State)
  const [newJob, setNewJob] = useState({
    title: '', company: '', description: '', location: '', salary: '',
    jobType: 'Full-time', deadline: '', skillsRequired: [], experience: ''
  });
  const [editingJob, setEditingJob] = useState(null);

  // ... (Keep existing Filter/Sort State)
  const [appFilter, setAppFilter] = useState('All');
  const [appSort, setAppSort] = useState('date-desc');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showCandidateModal, setShowCandidateModal] = useState(false);

  // ... (Keep existing Profile State)
  const [profile, setProfile] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    firstName: '', lastName: '', phone: '', position: '', bio: '',
    linkedin: '', companyName: '', companyWebsite: '',
    companyIndustry: '', companyDescription: '', companyLocation: '', companySize: '1-10'
  });
  // ... (Keep existing Dashboard Features State)
  const [statsData, setStatsData] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [activityStats, setActivityStats] = useState({ labels: [], data: [], totalMinutes: 0, range: 'week' });
  const [timeRange, setTimeRange] = useState('week'); // This is for user activity tracking
  const [analyticsRange, setAnalyticsRange] = useState('month'); // This is for the dashboard analytics reports
  const [networkRequests, setNetworkRequests] = useState([]);
  const [myConnections, setMyConnections] = useState([]);

  // ... (Keep existing useEffects and fetch logic)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const recordTime = async () => {
      try {
        await fetch(`${baseAuthUrl}/api/analytics/activity/record`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        fetchActivityStats('week');
      } catch (e) { console.error("Time tracking error", e); }
    };

    const interval = setInterval(recordTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const fetchActivityStats = async (range = 'week') => {
    // ... (Keep logic)
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${baseAuthUrl}/api/analytics/activity/stats?range=${range}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setActivityStats(data.data);
      }
    } catch (e) { console.error("Activity stats fetch error", e); }
  };

  const handleRangeChange = (range) => {
    setTimeRange(range);
    fetchActivityStats(range);
  };

  const fetchRecruiterData = async (userId) => {
    if (!userId) return;
    const token = localStorage.getItem('token');
    try {
      fetchActivityStats('week');

      // Fetch Jobs
      const jobsRes = await fetch(`${baseAuthUrl}/api/jobs?recruiterId=${userId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const jobsData = await jobsRes.json();
      if (jobsData.success) {
        setJobPosts(jobsData.data.reverse());
      }

      // Fetch Applications
      const appsRes = await fetch(`${baseAuthUrl}/api/applications`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const appsData = await appsRes.json();
      if (appsData.success && Array.isArray(appsData.data)) {
        setApplications(appsData.data);
      }

      // Fetch Interviews
      try {
        const intRes = await fetch(`${baseAuthUrl}/api/interviews/recruiter`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const intData = await intRes.json();
        if (intData.success) setInterviews(intData.data);
      } catch (e) { console.error("Interview fetch error", e); }

      // Fetch Analytics
      try {
        const anaRes = await fetch(`${baseAuthUrl}/api/analytics/recruiter-performance?range=${analyticsRange}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const anaData = await anaRes.json();
        if (anaData.success) setStatsData(anaData.data);
      } catch (e) { console.error("Analytics fetch error", e); }

      // Fetch Suggestions
      try {
        const suggRes = await fetch(`${baseAuthUrl}/api/profile/suggestions`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const suggData = await suggRes.json();
        if (suggData.success) setSuggestions(suggData.data);
      } catch (e) { console.error("Suggestions fetch error", e); }

      // Fetch Profile
      try {
        const profileRes = await fetch(`${baseAuthUrl}/api/profile/get`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ userId: userId, userType: 'recruiter' })
        });
        const pData = await profileRes.json();
        if (pData.success && pData.data) {
          const p = pData.data.profile || {};
          const u = pData.data.user || {};
          setProfile(pData.data);
          setProfileForm({
            firstName: u.firstName || '', lastName: u.lastName || '',
            phone: p.phone || '', position: p.position || '', bio: p.bio || '',
            linkedin: p.socialProfiles?.linkedin || '',
            companyName: p.company?.name || '',
            companyWebsite: p.company?.website || '',
            companyIndustry: p.company?.industry || '',
            companyDescription: p.company?.description || '',
            companyLocation: p.company?.address || '',
            companySize: p.company?.size || '1-10',
            companyLogo: p.company?.logo || ''
          });
        }
      } catch (e) { console.error("Profile fetch error", e); }

      // Fetch Network Data (Requests & Connections)
      try {
        const reqRes = await fetch(`${baseAuthUrl}/api/connections/requests`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const reqData = await reqRes.json();
        if (Array.isArray(reqData)) setNetworkRequests(reqData);

        const connRes = await fetch(`${baseAuthUrl}/api/connections/my-connections`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const connData = await connRes.json();
        if (Array.isArray(connData)) setMyConnections(connData);
      } catch (e) { console.error("Network fetch error", e); }

    } catch (error) {
      console.error("Data fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) {
      router.push('/login');
    } else {
      const u = JSON.parse(userData);
      setUser(u);
      fetchRecruiterData(u._id || u.id);
    }
  }, [analyticsRange]);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
  };

  // ... (Keep existing Profile/Job handler functions)
  const handleConnect = async (userId, userName) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${baseAuthUrl}/api/connections/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ recipientId: userId })
      });
      const data = await res.json();
      if (res.ok) {
        alert(`Connection request sent to ${userName}!`);
        // Remove user from suggestions list
        setSuggestions(suggestions.filter(s => s._id !== userId));
      } else {
        alert(data.message || 'Failed to send request');
      }
    } catch (err) {
      console.error('Connection request error:', err);
      alert('Error sending connection request');
    }
  };

  const handleRespondToRequest = async (connectionId, status) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${baseAuthUrl}/api/connections/${connectionId}/respond`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (res.ok) {
        alert(`Connection ${status}!`);
        // Refresh network data
        const reqRes = await fetch(`${baseAuthUrl}/api/connections/requests`, { headers: { 'Authorization': `Bearer ${token}` } });
        const reqData = await reqRes.json();
        if (Array.isArray(reqData)) setNetworkRequests(reqData);

        const connRes = await fetch(`${baseAuthUrl}/api/connections/my-connections`, { headers: { 'Authorization': `Bearer ${token}` } });
        const connData = await connRes.json();
        if (Array.isArray(connData)) setMyConnections(connData);
      } else {
        alert(data.message || 'Failed to update request');
      }
    } catch (err) {
      console.error('Respond request error:', err);
      alert('Error updating request');
    }
  };

  const handleProfileUpdate = async (e) => {
    // ... keep implementation
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      // ... payload ...
      const payload = {
        firstName: profileForm.firstName, lastName: profileForm.lastName,
        phone: profileForm.phone, position: profileForm.position, bio: profileForm.bio,
        socialProfiles: { linkedin: profileForm.linkedin },
        company: {
          name: profileForm.companyName, website: profileForm.companyWebsite,
          industry: profileForm.companyIndustry, description: profileForm.companyDescription,
          address: profileForm.companyLocation,
          size: profileForm.companySize || '1-10',
          logo: profileForm.companyLogo
        }
      };

      const res = await fetch(`${baseAuthUrl}/api/profile/recruiter`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        alert('Profile updated successfully!');
        setIsEditingProfile(false);
        fetchRecruiterData(user._id || user.id);
      } else {
        alert(data.message || 'Update failed');
      }
    } catch (err) { alert('Error updating profile'); }
  };
  // ... keep handlePostJob ...
  const handlePostJob = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const payload = { ...newJob, recruiterId: user._id || user.id };
      const res = await fetch(`${baseAuthUrl}/api/jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      if (result.success) {
        setJobPosts([result.data, ...jobPosts]);
        setShowJobForm(false);
        setNewJob({
          title: '', company: '', description: '', skillsRequired: [],
          experience: '', location: '', salary: '', jobType: 'Full-time', deadline: '', customQuestions: []
        });
        alert('Job Posted Successfully!');
      } else { alert(result.message); }
    } catch (err) { console.error(err); alert('Error posting job: ' + err.message); }
  };
  // ... keep handleUpdateJob ...
  const handleUpdateJob = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      if (!editingJob?._id) return;
      const payload = {
        title: newJob.title, company: newJob.company, description: newJob.description,
        location: newJob.location, salary: newJob.salary, jobType: newJob.jobType, deadline: newJob.deadline,
        skillsRequired: newJob.skillsRequired, experience: newJob.experience
      };
      const res = await fetch(`${baseAuthUrl}/api/jobs/${editingJob._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      if (result.success) {
        setJobPosts(jobPosts.map(j => j._id === editingJob._id ? result.data : j));
        setShowJobForm(false);
        setEditingJob(null);
        setNewJob({
          title: '', company: '', description: '', skillsRequired: [],
          experience: '', location: '', salary: '', jobType: 'Full-time', deadline: '', customQuestions: []
        });
        alert('Job Updated Successfully!');
      } else { alert(result.message); }
    } catch (err) { alert('Error updating job: ' + err.message); }
  };

  // ... helper functions
  const startEditJob = (job) => {
    setEditingJob(job);
    setNewJob({
      title: job.title || '', company: job.company || '', description: job.description || '',
      skillsRequired: job.skillsRequired || [], experience: job.experience || '',
      location: job.location || '', salary: job.salary || '', jobType: job.jobType || 'Full-time',
      deadline: job.deadline ? new Date(job.deadline).toISOString().split('T')[0] : '',
      customQuestions: job.customQuestions || []
    });
    setShowJobForm(true);
  };

  const handleCloseJob = async (jobId) => {
    if (!confirm('Are you sure you want to close this job?')) return;
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${baseAuthUrl}/api/jobs/${jobId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ status: 'Closed' })
      });
      const result = await res.json();
      if (result.success) {
        setJobPosts(jobPosts.map(j => (j._id === jobId || j.id === jobId) ? { ...j, status: 'Closed' } : j));
      }
    } catch (err) { console.error(err); }
  };

  const handleScheduleInterview = async (candidateId, jobId) => {
    if (!candidateId || !jobId) return alert('Missing candidate or job info');
    if (!confirm('Schedule AI Interview for this candidate?')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${baseAuthUrl}/api/interviews/schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ candidateId, jobId })
      });
      const data = await res.json();
      if (data.success) {
        alert(`Interview Scheduled!\nLink: ${data.data.link}\n(Link also sent to candidate email)`);
      } else { alert(data.message || 'Failed to schedule'); }
    } catch (err) { console.error(err); alert('Error scheduling interview'); }
  };

  const filteredApplications = applications.filter(app => {
    if (appFilter === 'All') return true;
    return (app.status || 'Pending') === appFilter;
  }).sort((a, b) => {
    if (appSort === 'date-desc') return new Date(b.createdAt) - new Date(a.createdAt);
    if (appSort === 'match-desc') return (b.matchScore || 0) - (a.matchScore || 0);
    return 0;
  });

  const handleViewCandidate = (app) => {
    setSelectedApplication(app);
    setShowCandidateModal(true);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-800">
      <Head>
        <title>Recruiter Dashboard | Chanix</title>
      </Head>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar - iPhone Theme */}
      <aside className={`fixed md:sticky top-0 h-screen bg-white/80 backdrop-blur-xl border-r border-white/20 shadow-xl flex flex-col z-50 transition-all duration-300 transform 
          ${isSidebarOpen ? 'translate-x-0 w-72 opacity-100' : '-translate-x-full w-0 opacity-0 pointer-events-none'}`}>

        {/* Brand */}
        <div className="p-8 pb-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <FiBriefcase className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight">Chan<span className="text-blue-600">ix</span></h1>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto no-scrollbar">
          <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Menu</p>

          {[
            { id: 'dashboard', icon: FiPieChart, label: 'Overview' },
            { id: 'jobs', icon: FiBriefcase, label: 'My Jobs' },
            { id: 'applications', icon: FiUsers, label: 'Candidates' },
            { id: 'profile', icon: FiUser, label: 'Profile' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setShowJobForm(false); setIsSidebarOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-300 group
                ${activeTab === item.id && !showJobForm
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-[1.02]'
                  : 'text-gray-500 hover:bg-white hover:text-blue-600 hover:shadow-md'
                }
              `}
            >
              <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeTab === item.id ? 'text-white' : 'text-gray-400 group-hover:text-blue-500'}`} />
              <span className="font-semibold text-sm">{item.label}</span>
              {activeTab === item.id && <FiCheckCircle className="ml-auto w-4 h-4 text-white/50" />}
            </button>
          ))}

          <div className="pt-6 mt-6 border-t border-gray-100/50">
            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Actions</p>
            <button
              onClick={() => { setShowJobForm(true); setIsSidebarOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-300 bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:scale-[1.02]`}
            >
              <FiPlusSquare className="w-5 h-5" />
              <span className="font-semibold text-sm">Post New Job</span>
            </button>
          </div>
        </nav>

        {/* User Footer */}
        <div className="p-4 m-4 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-3">

            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">{user?.firstName} {user?.lastName}</p>

            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center justify-center space-x-2 text-red-500 hover:text-white bg-red-50 hover:bg-red-500 px-4 py-2.5 rounded-xl transition-all duration-300 text-xs font-bold">
            <FiLogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-0 bg-gray-50/50">

        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md px-8 py-5 flex justify-between items-center sticky top-0 z-40 border-b border-gray-100/50">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 -ml-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 hidden sm:block tracking-tight">
              {showJobForm ? 'Post New Job' : activeTab === 'applications' ? 'Candidates' : activeTab === 'profile' ? 'My Profile' : 'Overview'}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Online</span>
            </div>

            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">{user?.firstName} {user?.lastName}</p>

              </div>

            </div>
          </div>
        </header>

        <div className="p-8 max-w-[1600px] mx-auto space-y-8">
          {/* Main Content Area */}
          <div className="space-y-8">
            {showJobForm ? (
              <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden animate-fade-in-up">
                <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">{editingJob ? 'Edit Job Posting' : 'Create New Job'}</h3>
                  <button onClick={() => setShowJobForm(false)} className="p-2 hover:bg-gray-200 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={editingJob ? handleUpdateJob : handlePostJob} className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Job Title</label>
                      <input required type="text" value={newJob.title} onChange={e => setNewJob({ ...newJob, title: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" placeholder="e.g. Senior React Developer" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Company Name</label>
                      <input required type="text" value={newJob.company} onChange={e => setNewJob({ ...newJob, company: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Job Description</label>
                    <textarea required value={newJob.description} onChange={e => setNewJob({ ...newJob, description: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" rows="5"></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Skills (Comma separated)</label>
                      <input
                        type="text"
                        value={Array.isArray(newJob.skillsRequired) ? newJob.skillsRequired.join(', ') : newJob.skillsRequired || ''}
                        onChange={e => setNewJob({ ...newJob, skillsRequired: e.target.value.split(',').map(s => s.trim()) })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                        placeholder="e.g. React, Node.js, SQL"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Experience</label>
                      <input
                        type="text"
                        value={newJob.experience}
                        onChange={e => setNewJob({ ...newJob, experience: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                        placeholder="e.g. 3-5 years, Senior Level"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Location</label>
                      <input required type="text" value={newJob.location} onChange={e => setNewJob({ ...newJob, location: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" placeholder="e.g. New York, Remote" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Salary Range</label>
                      <input type="text" value={newJob.salary} onChange={e => setNewJob({ ...newJob, salary: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" placeholder="e.g. $100k - $120k" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Job Type</label>
                      <select value={newJob.jobType} onChange={e => setNewJob({ ...newJob, jobType: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Deadline</label>
                      <input type="date" required value={newJob.deadline} min={new Date().toISOString().split('T')[0]} onChange={e => setNewJob({ ...newJob, deadline: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                    <button type="button" onClick={() => { setShowJobForm(false); setEditingJob(null); }} className="px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-bold text-sm transition-colors">Cancel</button>
                    <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform hover:-translate-y-0.5">{editingJob ? 'Update Job' : 'Post Job'}</button>
                  </div>
                </form>
              </div>
            ) : activeTab === 'dashboard' ? (
              <div className="space-y-8 animate-fade-in-up">
                {/* Performance Leaderboard */}
                <section>
                  <Leaderboard data={statsData?.leaderboard} />
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Chart */}
                  <section className="lg:col-span-2">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full">
                      <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold text-gray-900">Activity Overview</h3>
                        {/* Range Selector */}
                        <div className="bg-gray-100 p-1.5 rounded-xl inline-flex">
                          {['week', 'month', 'year'].map((range) => (
                            <button
                              key={range}
                              onClick={() => setAnalyticsRange(range)}
                              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${analyticsRange === range
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                              {range.charAt(0).toUpperCase() + range.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>
                      <ActivityTrends data={statsData?.trends} range={analyticsRange} />
                    </div>
                  </section>

                </div>
              </div>
            ) : activeTab === 'profile' ? (
              <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 animate-fade-in-up">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">My Profile</h3>
                  <button onClick={() => setIsEditingProfile(!isEditingProfile)} className="text-blue-600 font-medium hover:underline">
                    {isEditingProfile ? 'Cancel' : 'Edit'}
                  </button>
                </div>
                {isEditingProfile ? (
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" value={profileForm.firstName} onChange={e => setProfileForm({ ...profileForm, firstName: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="First Name" />
                      <input type="text" value={profileForm.lastName} onChange={e => setProfileForm({ ...profileForm, lastName: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Last Name" />
                      <input type="text" value={profileForm.phone} onChange={e => setProfileForm({ ...profileForm, phone: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Phone" />
                      <input type="text" value={profileForm.position} onChange={e => setProfileForm({ ...profileForm, position: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Position" />
                    </div>
                    <textarea value={profileForm.bio} onChange={e => setProfileForm({ ...profileForm, bio: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" rows="3" placeholder="Bio"></textarea>
                    <h4 className="font-bold text-gray-900 text-lg border-t pt-6 mt-6">Company Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" value={profileForm.companyName} onChange={e => setProfileForm({ ...profileForm, companyName: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Company Name" />
                      <input type="text" value={profileForm.companyWebsite} onChange={e => setProfileForm({ ...profileForm, companyWebsite: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Website" />

                      <input type="text" value={profileForm.companyIndustry} onChange={e => setProfileForm({ ...profileForm, companyIndustry: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Industry (e.g. IT, Healthcare)" />
                      <input type="text" value={profileForm.companyLocation} onChange={e => setProfileForm({ ...profileForm, companyLocation: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Location" />
                      <input type="text" value={profileForm.companyLogo} onChange={e => setProfileForm({ ...profileForm, companyLogo: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Company Logo URL" />
                      <select value={profileForm.companySize} onChange={e => setProfileForm({ ...profileForm, companySize: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 appearance-none">
                        <option value="1-10">1-10 Employees</option>
                        <option value="11-50">11-50 Employees</option>
                        <option value="51-200">51-200 Employees</option>
                        <option value="201-500">201-500 Employees</option>
                        <option value="501-1000">501-1000 Employees</option>
                        <option value="1000+">1000+ Employees</option>
                      </select>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5">Save Changes</button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Banner */}
                    <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                      <div className="absolute inset-0 bg-white/10 pattern-grid-lg opacity-20"></div>
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        {/* Edit Button on Banner */}
                        <button onClick={(e) => { e.stopPropagation(); setIsEditingProfile(true); }} className="px-5 py-2 bg-white text-blue-600 hover:bg-gray-100 rounded-full text-sm font-bold shadow-sm transition-all flex items-center gap-2 z-10">
                          <FiEdit2 className="w-4 h-4" /> Edit Profile
                        </button>
                      </div>
                    </div>

                    <div className="px-8 pb-8 relative">
                      {/* Avatar / Company Logo */}
                      {/* Avatar / Company Logo */}
                      <div className="relative -mt-16 mb-4 flex justify-between items-end group">
                        <input
                          type="file"
                          id="logo-upload"
                          className="hidden"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = async (ev) => {
                                const base64 = ev.target.result;
                                if (isEditingProfile) {
                                  setProfileForm(prev => ({ ...prev, companyLogo: base64 }));
                                } else {
                                  // Auto-save in View Mode
                                  if (confirm("Upload this as your Company Logo?")) {
                                    const token = localStorage.getItem('token');
                                    try {
                                      // Create a temporary payload with existing data + new logo
                                      const payload = {
                                        ...profileForm, // assuming profileForm is synced, but strictly should use 'profile' data
                                        // Better to re-construct robustly, but for now let's update just the company part if possible or full update
                                        firstName: user.firstName, lastName: user.lastName, // fallback
                                        company: {
                                          ...profile?.profile?.company,
                                          logo: base64
                                        }
                                      };
                                      // Note: The backend expects full struct usually. Let's try to update using profileForm which should be populated on load
                                      const fullPayload = {
                                        firstName: profileForm.firstName, lastName: profileForm.lastName,
                                        phone: profileForm.phone, position: profileForm.position, bio: profileForm.bio,
                                        socialProfiles: { linkedin: profileForm.linkedin },
                                        company: {
                                          name: profileForm.companyName, website: profileForm.companyWebsite,
                                          industry: profileForm.companyIndustry, description: profileForm.companyDescription,
                                          address: profileForm.companyLocation,
                                          size: profileForm.companySize,
                                          logo: base64
                                        }
                                      };

                                      const res = await fetch(`${baseAuthUrl}/api/profile/recruiter`, {
                                        method: 'PUT',
                                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                        body: JSON.stringify(fullPayload)
                                      });
                                      if (res.ok) {
                                        fetchRecruiterData(user._id || user.id);
                                        alert("Logo updated!");
                                      } else { alert("Update failed"); }
                                    } catch (err) { console.error(err); alert("Error uploading logo"); }
                                  }
                                }
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />

                        <div
                          className="relative cursor-pointer group"
                          onClick={() => document.getElementById('logo-upload').click()}
                        >
                          {profile?.profile?.company?.logo ? (
                            <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white bg-white shadow-xl relative transform transition-transform group-hover:scale-105">
                              <img src={profile.profile.company.logo} alt="Company Logo" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                                <span className="text-white text-xs font-bold">Change Logo</span>
                              </div>
                            </div>
                          ) : (
                            <div className="w-32 h-32 rounded-3xl bg-gray-50 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-2 hover:bg-gray-100 transition-all shadow-lg relative text-gray-400 hover:text-gray-600 group-hover:border-blue-300">
                              <FiCamera className="w-8 h-8 mb-1 opacity-50" />
                              <span className="text-[10px] font-bold leading-tight">Upload Logo</span>
                            </div>
                          )}
                        </div>

                        {/* Quick Stats moved to header area */}
                        <div className="flex gap-8 mb-4 hidden md:flex items-end">
                          <div className="text-center px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100 min-w-[100px]">
                            <span className="block text-3xl font-bold text-gray-900">{jobPosts.length}</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Active Jobs</span>
                          </div>
                          <div className="text-center px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100 min-w-[100px]">
                            <span className="block text-3xl font-bold text-gray-900">{jobPosts.reduce((acc, job) => acc + (job.applicants || 0), 0)}</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Applicants</span>
                          </div>
                        </div>
                      </div>

                      {/* Header Info */}
                      <div className="mb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-1">{user?.firstName} {user?.lastName}</h2>
                            <p className="text-lg text-blue-600 font-medium flex items-center gap-2">
                              {profile?.profile?.position || 'Recruiter'}
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-600">{profile?.profile?.company?.name || 'Company Name'}</span>
                            </p>
                          </div>

                          {/* Verification Badge */}
                          {(profile?.profile?.verificationStatus?.isCompanyVerified || profile?.profile?.verificationStatus?.isEmailVerified) && (
                            <div className="px-5 py-2.5 bg-green-50 text-green-700 rounded-2xl border border-green-100 flex items-center gap-2 font-bold shadow-sm">
                              <FiCheck className="w-5 h-5 bg-green-200 rounded-full p-1 text-green-800" /> Verified Recruiter
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Grid Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                              <FiUser className="w-4 h-4" /> Contact Information
                            </h4>
                            <div className="space-y-3">
                              <a href={`mailto:${user?.email}`} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white transition-all group border border-transparent hover:border-gray-100 hover:shadow-sm">
                                <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <FiMail className="w-5 h-5" />
                                </span>
                                <div>
                                  <span className="block text-xs text-gray-400 font-bold uppercase tracking-wide">Email Address</span>
                                  <span className="text-sm text-gray-900 font-bold">{user?.email}</span>
                                </div>
                              </a>
                              <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white transition-all group border border-transparent hover:border-gray-100 hover:shadow-sm">
                                <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <FiPhone className="w-5 h-5" />
                                </span>
                                <div>
                                  <span className="block text-xs text-gray-400 font-bold uppercase tracking-wide">Phone Number</span>
                                  <span className="text-sm text-gray-900 font-bold">{profile?.profile?.phone || 'Not Provided'}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                              <FiMapPin className="w-4 h-4" /> Company Details
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {profile?.profile?.company?.description || 'No description provided.'}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {profile?.profile?.company?.industry && (
                                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 shadow-sm">
                                  {profile.profile.company.industry}
                                </span>
                              )}
                              {profile?.profile?.company?.size && (
                                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 shadow-sm">
                                  {profile.profile.company.size} Employees
                                </span>
                              )}
                              {profile?.profile?.company?.address && (
                                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 shadow-sm flex items-center gap-1">
                                  <FiMapPin className="w-3 h-3" /> {profile.profile.company.address}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100/50 hover:shadow-md transition-shadow h-full">
                            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                              <FiFileText className="w-4 h-4" /> Biograghy
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                              {profile?.profile?.bio || 'No biography provided yet. Click "Edit Profile" to add one.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : activeTab === 'applications' ? (
              <div className="space-y-4">
                {/* Filter and Sort Bar */}
                <div className="flex flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex gap-4 items-center">
                    <select value={appFilter} onChange={e => setAppFilter(e.target.value)} className="border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="All">All Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                    <select value={appSort} onChange={e => setAppSort(e.target.value)} className="border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="date-desc">Newest First</option>
                      <option value="match-desc">Highest Match Score</option>
                    </select>
                  </div>
                  <div className="text-sm text-gray-500">
                    Showing {filteredApplications.length} applications
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 font-semibold text-gray-600">Candidate</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Job Title</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Match</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Status</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Date</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredApplications.length === 0 ? (
                        <tr><td colSpan="6" className="px-6 py-8 text-center text-gray-500">No applications found.</td></tr>
                      ) : (
                        filteredApplications.map((app, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <button onClick={() => handleViewCandidate(app)} className="font-medium text-blue-600 hover:underline text-left">
                                {app.applicant?.fullName || 'Unknown'}
                              </button>
                            </td>
                            <td className="px-6 py-4 text-gray-600">{app.job?.title || 'Job Name'}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded text-xs font-bold ${(app.matchScore || 0) >= 80 ? 'bg-green-100 text-green-700' :
                                (app.matchScore || 0) >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                }`}>
                                {app.matchScore || 0}%
                              </span>
                            </td>
                            <td className="px-6 py-4">{app.status || 'Pending'}</td>
                            <td className="px-6 py-4 text-gray-500 text-sm">{new Date(app.createdAt).toLocaleDateString()}</td>
                            <td className="px-6 py-4 flex gap-2">
                              <button
                                onClick={() => handleViewCandidate(app)}
                                className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded text-sm transition border border-gray-200"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : activeTab === 'jobs' ? (
              // Jobs Tab
              <div id="job-postings-section" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800">Your Active Job Postings</h3>
                  <button
                    onClick={() => { setShowJobForm(true); setLoading(false); }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                  >
                    <FiPlusSquare /> Post a Job
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobPosts.length === 0 ? (
                    <div className="col-span-full text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-500 text-lg mb-4">You haven't posted any jobs yet.</p>
                      <button
                        onClick={() => { setShowJobForm(true); setLoading(false); }}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Create your first job post
                      </button>
                    </div>
                  ) : (
                    jobPosts.map((job, i) => (
                      <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition ${job.status === 'Closed' ? 'opacity-75' : ''}`}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-900 text-lg line-clamp-1">{job.title}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-medium shrink-0 ${job.status === 'Closed' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                            {job.status}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-1">{job.company} • {job.location}</p>
                        <div className="flex gap-2 border-t pt-4">
                          <button onClick={() => startEditJob(job)} className="flex-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100 font-medium">Edit</button>
                          {job.status !== 'Closed' && (
                            <button onClick={() => handleCloseJob(job._id || job.id)} className="flex-1 px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded hover:bg-red-100 font-medium">Close</button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : activeTab === 'jobs' ? (
              // Jobs Tab
              <div id="job-postings-section" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Your Active Job Postings</h3>
                  <button
                    onClick={() => { setShowJobForm(true); setLoading(false); }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200 font-medium"
                  >
                    <FiPlusSquare className="w-5 h-5" /> Post a Job
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobPosts.length === 0 ? (
                    <div className="col-span-full text-center py-16 bg-white rounded-3xl shadow-sm border border-gray-100">
                      <p className="text-gray-500 text-lg mb-6 font-medium">You haven't posted any jobs yet.</p>
                      <button
                        onClick={() => { setShowJobForm(true); setLoading(false); }}
                        className="text-blue-600 hover:text-blue-800 font-bold text-lg hover:underline"
                      >
                        Create your first job post
                      </button>
                    </div>
                  ) : (
                    jobPosts.map((job, i) => (
                      <div key={i} className={`bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 transform hover:-translate-y-1 ${job.status === 'Closed' ? 'opacity-75 grayscale' : ''}`}>
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-gray-900 text-lg line-clamp-1">{job.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide shrink-0 ${job.status === 'Closed' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                            {job.status}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mb-6 line-clamp-1 font-medium">{job.company} • {job.location}</p>
                        <div className="flex gap-3 border-t border-gray-50 pt-4">
                          <button onClick={() => startEditJob(job)} className="flex-1 px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 font-bold transition-colors">Edit</button>
                          {job.status !== 'Closed' && (
                            <button onClick={() => handleCloseJob(job._id || job.id)} className="flex-1 px-4 py-2 text-sm bg-red-50 text-red-600 rounded-xl hover:bg-red-100 font-bold transition-colors">Close</button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : (
              // Default Dashboard (Enhanced V2)
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Column (Stats & Matches) */}
                <div className="flex-1 space-y-8">
                  {/* Stats Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: No. of JD Posts */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer group" onClick={() => setActiveTab('jobs')}>
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total</span>
                      </div>
                      <h3 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-1">No. of JD Posts</h3>
                      <div className="flex items-end gap-2">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">{jobPosts.length}</h2>
                        <span className="text-blue-600 text-sm font-bold mb-1 hover:underline">View All ›</span>
                      </div>
                    </div>

                    {/* Card 2: Submissions (Applications) */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 transform group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-purple-50 rounded-2xl text-purple-600 group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total</span>
                      </div>
                      <h3 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-1">My Submissions</h3>
                      <div className="flex items-end gap-2">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">{applications.length}</h2>
                        <span className="text-purple-600 text-sm font-bold mb-1 cursor-pointer hover:underline" onClick={() => setActiveTab('applications')}>View Details ›</span>
                      </div>
                    </div>

                    {/* Card 3: Time Spent (Circular) */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col justify-between">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-green-50 rounded-xl text-green-600">
                            <FiClock className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-gray-700 text-sm">Time Spent</span>
                        </div>
                        <div className="flex bg-gray-100 rounded-lg p-1">
                          {['week', 'month', 'year'].map((range) => (
                            <button
                              key={range}
                              onClick={() => handleRangeChange(range)}
                              className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all uppercase tracking-wide ${timeRange === range ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                              {range.charAt(0)}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-center flex-1 py-4">
                        <div className="relative w-32 h-32">
                          {/* Circular Progress SVG */}
                          <svg className="w-full h-full transform -rotate-90">
                            {/* Background Circle */}
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              fill="none"
                              stroke="#f3f4f6"
                              strokeWidth="12"
                              className="opacity-50"
                            />
                            {/* Progress Circle */}
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="12"
                              strokeDasharray="351.86"
                              strokeDashoffset={351.86 - (Math.min((activityStats.totalMinutes / (timeRange === 'week' ? 2400 : timeRange === 'month' ? 9600 : 115200)) * 100, 100) / 100) * 351.86}
                              strokeLinecap="round"
                              className="transition-all duration-1000 ease-out shadow-lg drop-shadow-lg"
                            />
                          </svg>
                          {/* Center Text */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-extrabold text-gray-900 tracking-tighter">
                              {Math.floor(activityStats.totalMinutes / 60)}h
                            </span>
                            <span className="text-xs text-gray-400 font-bold uppercase tracking-wide">
                              {activityStats.totalMinutes % 60}m
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Total active time this {timeRange}</p>
                      </div>
                    </div>
                  </div>

                  {/* Job Match Center - AI Driven */}
                  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">Job Match Center</h3>
                        <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wide shadow-lg shadow-blue-200">AI Driven</span>
                      </div>
                      <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 font-bold" onClick={() => setActiveTab('applications')}>
                        View Hotlist <span>›</span>
                      </button>
                    </div>

                    {/* Match Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Top Matched Candidates */}
                      {applications
                        .filter(app => (app.matchScore || 0) >= 70)
                        .slice(0, 4)
                        .map((app, i) => (
                          <div key={i} className="flex items-center p-4 border border-gray-50 bg-gray-50/50 rounded-2xl hover:bg-white hover:shadow-lg transition-all cursor-pointer group" onClick={() => handleViewCandidate(app)}>
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-extrabold text-lg mr-4 shrink-0 shadow-inner">
                              {app.applicant?.fullName?.[0] || 'A'}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{app.applicant?.fullName || 'Candidate'}</h4>
                              <p className="text-xs text-gray-500 truncate font-medium">{app.job?.title || 'Unknown Job'}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2 ml-4">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide
                              ${(app.matchScore || 0) >= 85 ? 'bg-green-100 text-green-700' :
                                  (app.matchScore || 0) >= 50 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}
                            `}>
                                {(app.matchScore || 0) >= 85 ? 'Excellent' : (app.matchScore || 0) >= 50 ? 'Good Fit' : 'Fair'}
                              </span>
                              <button className="text-[10px] bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-50 font-bold uppercase tracking-wide shadow-sm">View</button>
                            </div>
                          </div>
                        ))
                      }
                      {applications.filter(app => (app.matchScore || 0) >= 70).length === 0 && (
                        <div className="col-span-2 text-center py-12 text-gray-400 italic font-medium bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                          No high-match candidates found yet. Post more jobs or wait for applicants!
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div >
        </div >



        {/* Candidate Detail Modal */}
        {
          showCandidateModal && selectedApplication && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/20 animate-fade-in-up">
                <div className="p-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-xl z-10 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">Candidate Details</h3>
                  <button onClick={() => setShowCandidateModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 rounded-full p-2 hover:bg-gray-100">
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-8 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-3xl font-extrabold text-blue-600 shadow-inner border border-white">
                      {selectedApplication.applicant?.fullName?.[0] || 'U'}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{selectedApplication.applicant?.fullName}</h2>
                      <p className="text-blue-600 font-medium">{selectedApplication.applicant?.email}</p>
                      <p className="text-gray-400 text-sm mt-1 flex items-center gap-2 font-medium">
                        <FiPhone className="w-4 h-4" />
                        {selectedApplication.applicant?.phone || 'No phone provided'}
                      </p>
                    </div>
                    <div className="ml-auto text-right bg-blue-50 px-4 py-3 rounded-2xl border border-blue-100">
                      <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Match Score</div>
                      <div className="text-3xl font-extrabold text-blue-600 tracking-tight">{selectedApplication.matchScore || 0}%</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Applying For</span>
                      <span className="font-bold text-gray-900 block truncate">{selectedApplication.job?.title}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</span>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wide ${selectedApplication.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                        {selectedApplication.status}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Experience</span>
                      <span className="font-bold text-gray-900">{selectedApplication.applicant?.experience || 'N/A'}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Skills</span>
                      <span className="font-bold text-gray-900 truncate">{selectedApplication.applicant?.skills || 'N/A'}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FiFileText className="w-5 h-5 text-gray-400" /> Resume
                    </h4>
                    {selectedApplication.applicant?.resume?.filePath ? (
                      <a
                        href={selectedApplication.applicant.resume.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
                      >
                        <div className="p-2 bg-gray-100 rounded-lg text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                          <FiFileText className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-700 group-hover:text-blue-700">View Resume Document</p>
                          <p className="text-xs text-gray-400">Click to open in new tab</p>
                        </div>
                      </a>
                    ) : (
                      <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-gray-400 italic font-medium">No resume uploaded by candidate.</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-gray-100">
                    <button
                      className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-bold transition-colors uppercase tracking-wide text-xs"
                      onClick={() => setShowCandidateModal(false)}
                    >
                      Close Details
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition-shadow shadow-lg shadow-blue-200 uppercase tracking-wide text-xs">
                      Contact Candidate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </main >
    </div >
  );
}
