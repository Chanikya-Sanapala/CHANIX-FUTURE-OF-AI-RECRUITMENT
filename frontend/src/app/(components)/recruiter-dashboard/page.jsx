"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { FiMenu, FiX, FiPieChart, FiUser, FiPlusSquare, FiFileText, FiLogOut, FiUsers } from 'react-icons/fi';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile Sidebar State

  // ... (Keep existing Job Management State)
  const [newJob, setNewJob] = useState({
    title: '', company: '', description: '', skillsRequired: [],
    experience: '', location: '', salary: '', jobType: 'Full-time', deadline: '', customQuestions: []
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
        const anaRes = await fetch(`${baseAuthUrl}/api/analytics/recruiter/stats`, {
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
            companySize: p.company?.size || '1-10'
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
  }, []);

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
          size: profileForm.companySize || '1-10'
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
        location: newJob.location, salary: newJob.salary, jobType: newJob.jobType, deadline: newJob.deadline
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
        <title>Recruiter Dashboard | Smart Engine</title>
      </Head>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed md:sticky top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-blue-50/50">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SmartRecruit</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500">
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button
            onClick={() => { setActiveTab('dashboard'); setShowJobForm(false); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                  ${activeTab === 'dashboard' && !showJobForm ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
          >
            <FiPieChart className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => { setActiveTab('applications'); setShowJobForm(false); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                  ${activeTab === 'applications' && !showJobForm ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
          >
            <FiFileText className="w-5 h-5" />
            <span className="font-medium">Applications</span>
          </button>

          <button
            onClick={() => { setActiveTab('profile'); setShowJobForm(false); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                  ${activeTab === 'profile' ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
          >
            <FiUser className="w-5 h-5" />
            <span className="font-medium">My Profile</span>
          </button>

          <button
            onClick={() => { setActiveTab('network'); setShowJobForm(false); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                  ${activeTab === 'network' ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
          >
            <FiUsers className="w-5 h-5" />
            <span className="font-medium">My Network</span>
            {networkRequests.length > 0 && <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{networkRequests.length}</span>}
          </button>

          <div className="pt-4 mt-4 border-t border-gray-100">
            <button
              onClick={() => { setShowJobForm(true); setIsSidebarOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg`}
            >
              <FiPlusSquare className="w-5 h-5" />
              <span className="font-medium">Post a Job</span>
            </button>
          </div>

          <div className="pt-6 mt-4 border-t border-gray-100">
            <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">You might know</h3>
            <div className="space-y-3 px-2">
              {suggestions.slice(0, 3).map((sug, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 group">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
                    {sug.profilePicture ? (
                      <img src={sug.profilePicture} alt={sug.firstName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs font-bold text-gray-500">{sug.firstName?.[0]}</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-900 truncate">{sug.firstName} {sug.lastName}</p>
                    <p className="text-[10px] text-gray-500 truncate">{sug.headline || 'Recruiter'}</p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 text-blue-600 hover:text-blue-800 transition"
                    onClick={() => handleConnect(sug._id, sug.firstName)}
                    title="Connect">
                    <FiPlusSquare className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {suggestions.length === 0 && <p className="px-2 text-xs text-gray-400 font-style: italic">No suggestions.</p>}

              <button className="w-full text-xs text-blue-600 font-medium py-2 hover:bg-blue-50 rounded text-center mt-1">
                View All Connections
              </button>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <button onClick={handleLogout} className="flex items-center space-x-3 text-red-600 px-4 py-2 hover:bg-red-50 rounded-lg w-full transition font-medium">
            <FiLogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full md:ml-0">
        {/* Header */}
        <header className="bg-white px-6 py-4 shadow-sm flex justify-between items-center sticky top-0 z-10 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-gray-800 hidden sm:block">
              {showJobForm ? 'Post New Job' : activeTab === 'applications' ? 'Applications' : activeTab === 'profile' ? 'My Profile' : activeTab === 'network' ? 'My Network' : 'Dashboard Overview'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900">{user?.firstName} {user?.lastName}</p>
              <p className="text-xs text-gray-500">Recruiter</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
              {user?.firstName?.[0]}
            </div>
          </div>
        </header>

        <div className="p-8 max-w-[1600px] mx-auto">
          {/* Main Content Area */}
          <div className="space-y-8">
            {showJobForm ? (
              <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-bold mb-6">{editingJob ? 'Edit Job Posting' : 'Create Job Posting'}</h3>
                <form onSubmit={editingJob ? handleUpdateJob : handlePostJob} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                      <input required type="text" value={newJob.title} onChange={e => setNewJob({ ...newJob, title: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Senior React Developer" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input required type="text" value={newJob.company} onChange={e => setNewJob({ ...newJob, company: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                    <textarea required value={newJob.description} onChange={e => setNewJob({ ...newJob, description: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" rows="5"></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input required type="text" value={newJob.location} onChange={e => setNewJob({ ...newJob, location: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. New York, Remote" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                      <input type="text" value={newJob.salary} onChange={e => setNewJob({ ...newJob, salary: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. $100k - $120k" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                      <select value={newJob.jobType} onChange={e => setNewJob({ ...newJob, jobType: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" style={{ backgroundColor: 'white' }}>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
                      <input type="date" required value={newJob.deadline} min={new Date().toISOString().split('T')[0]} onChange={e => setNewJob({ ...newJob, deadline: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                      <p className="text-xs text-gray-500 mt-1">Applications will close after this date.</p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 pt-4">
                    <button type="button" onClick={() => { setShowJobForm(false); setEditingJob(null); }} className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm">{editingJob ? 'Update Job' : 'Post Job'}</button>
                  </div>
                </form>
              </div>
            ) : activeTab === 'profile' ? (
              <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">My Profile</h3>
                  <button onClick={() => setIsEditingProfile(!isEditingProfile)} className="text-blue-600 font-medium hover:underline">
                    {isEditingProfile ? 'Cancel' : 'Edit'}
                  </button>
                </div>
                {isEditingProfile ? (
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" value={profileForm.firstName} onChange={e => setProfileForm({ ...profileForm, firstName: e.target.value })} className="border p-2 rounded" placeholder="First Name" />
                      <input type="text" value={profileForm.lastName} onChange={e => setProfileForm({ ...profileForm, lastName: e.target.value })} className="border p-2 rounded" placeholder="Last Name" />
                      <input type="text" value={profileForm.phone} onChange={e => setProfileForm({ ...profileForm, phone: e.target.value })} className="border p-2 rounded" placeholder="Phone" />
                      <input type="text" value={profileForm.position} onChange={e => setProfileForm({ ...profileForm, position: e.target.value })} className="border p-2 rounded" placeholder="Position" />
                    </div>
                    <textarea value={profileForm.bio} onChange={e => setProfileForm({ ...profileForm, bio: e.target.value })} className="w-full border p-2 rounded" rows="3" placeholder="Bio"></textarea>
                    <h4 className="font-bold border-t pt-4">Company Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" value={profileForm.companyName} onChange={e => setProfileForm({ ...profileForm, companyName: e.target.value })} className="border p-2 rounded" placeholder="Company Name" />
                      <input type="text" value={profileForm.companyWebsite} onChange={e => setProfileForm({ ...profileForm, companyWebsite: e.target.value })} className="border p-2 rounded" placeholder="Website" />

                      <input type="text" value={profileForm.companyIndustry} onChange={e => setProfileForm({ ...profileForm, companyIndustry: e.target.value })} className="border p-2 rounded" placeholder="Industry (e.g. IT, Healthcare)" />
                      <input type="text" value={profileForm.companyLocation} onChange={e => setProfileForm({ ...profileForm, companyLocation: e.target.value })} className="border p-2 rounded" placeholder="Location" />
                      <select value={profileForm.companySize} onChange={e => setProfileForm({ ...profileForm, companySize: e.target.value })} className="border p-2 rounded">
                        <option value="1-10">1-10 Employees</option>
                        <option value="11-50">11-50 Employees</option>
                        <option value="51-200">51-200 Employees</option>
                        <option value="201-500">201-500 Employees</option>
                        <option value="501-1000">501-1000 Employees</option>
                        <option value="1000+">1000+ Employees</option>
                      </select>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Save</button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">{user?.firstName?.[0]}</div>
                      <div>
                        <h2 className="text-2xl font-bold">{user?.firstName} {user?.lastName}</h2>
                        <p className="text-gray-600">{profile?.profile?.position || 'Recruiter'}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <p><strong>Email:</strong> {user?.email}</p>
                      <p><strong>Phone:</strong> {profile?.profile?.phone || 'N/A'}</p>
                      <p><strong>Company:</strong> {profile?.profile?.company?.name || 'N/A'}</p>
                      <p><strong>Location:</strong> {profile?.profile?.company?.address || 'N/A'}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : activeTab === 'network' ? (
              <div className="space-y-8">
                {/* Incoming Requests */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    Incoming Requests
                    {networkRequests.length > 0 && <span className="text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{networkRequests.length}</span>}
                  </h3>
                  {networkRequests.length === 0 ? (
                    <p className="text-gray-500 italic">No pending connection requests.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {networkRequests.map((req, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                          <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 overflow-hidden">
                            {req.requester?.profilePicture ? (
                              <img src={req.requester.profilePicture} alt={req.requester.firstName} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">{req.requester?.firstName?.[0]}</div>
                            )}
                          </div>
                          <h4 className="font-bold text-gray-900">{req.requester?.firstName} {req.requester?.lastName}</h4>
                          <p className="text-sm text-gray-500 mb-4">{req.requester?.headline || 'Recruiter'}</p>
                          <div className="flex gap-2 w-full">
                            <button onClick={() => handleRespondToRequest(req._id, 'accepted')} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Accept</button>
                            <button onClick={() => handleRespondToRequest(req._id, 'rejected')} className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">Reject</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* My Connections */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">My Connections</h3>
                  {myConnections.filter(c => c.status === 'accepted').length === 0 ? (
                    <p className="text-gray-500 italic">No connections yet. Go to Dashboard to find people!</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {myConnections.filter(c => c.status === 'accepted').map((conn, i) => (
                        // Note: myConnections return structure is { connectionId, otherUserId, status, isRequester }. 
                        // We might need to fetch user details for these. Ideally the backend 'my-connections' endpoint should populate user details.
                        // Let's check backend implementation.. 
                        // Ah, backend 'getMyConnections' currently only returns IDs. We need to update backend or fetch user details here.
                        // For now, let's display ID to confirm it works, then I'll fix backend to populate.
                        <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                            <FiUser />
                          </div>
                          <div>
                            <p className="font-bold text-sm">User ID: {conn.otherUserId}</p>
                            <p className="text-xs text-green-600">Connected</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
            ) : (
              // Default Dashboard (Enhanced V2)
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Column (Stats & Matches) */}
                <div className="flex-1 space-y-8">
                  {/* Stats Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Active Jobs (Hotlist) */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <span className="text-sm font-medium text-gray-400">Total</span>
                      </div>
                      <h3 className="text-gray-500 font-medium mb-1">My Hotlist (Jobs)</h3>
                      <div className="flex items-end gap-2">
                        <h2 className="text-3xl font-bold text-gray-900">{jobPosts.length}</h2>
                        <span className="text-blue-600 text-sm font-medium mb-1 cursor-pointer hover:underline" onClick={() => setActiveTab('applications')}>View Details ›</span>
                      </div>
                    </div>

                    {/* Card 2: Submissions (Applications) */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </div>
                        <span className="text-sm font-medium text-gray-400">Total</span>
                      </div>
                      <h3 className="text-gray-500 font-medium mb-1">My Submissions</h3>
                      <div className="flex items-end gap-2">
                        <h2 className="text-3xl font-bold text-gray-900">{applications.length}</h2>
                        <span className="text-purple-600 text-sm font-medium mb-1 cursor-pointer hover:underline" onClick={() => setActiveTab('applications')}>View Details ›</span>
                      </div>
                    </div>

                    {/* Card 3: Time Spent - Redesigned Activity Hub */}
                    <div className="bg-white p-0 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition overflow-hidden">
                      {/* Header */}
                      <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          Time Activity
                        </h3>
                        <div className="flex bg-gray-100 rounded-lg p-0.5">
                          {['week', 'month', 'year'].map((range) => (
                            <button
                              key={range}
                              onClick={() => fetchActivityStats(range)}
                              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activityStats.range === range ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                              {range.charAt(0).toUpperCase() + range.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row gap-8 items-center">
                          {/* Left: Radial Progress */}
                          <div className="relative w-32 h-32 flex-shrink-0">
                            <svg className="w-full h-full transform -rotate-90">
                              {/* Background Circle */}
                              <circle
                                cx="64"
                                cy="64"
                                r="56"
                                className="stroke-gray-100"
                                strokeWidth="8"
                                fill="none"
                              />
                              {/* Progress Circle */}
                              <circle
                                cx="64"
                                cy="64"
                                r="56"
                                className="stroke-blue-500 transition-all duration-1000 ease-out"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={2 * Math.PI * 56}
                                strokeDashoffset={2 * Math.PI * 56 * (1 - Math.min((activityStats.totalMinutes / (activityStats.range === 'week' ? 2400 : 9600)), 1))}
                                fill="none"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-2xl font-bold text-gray-900">{Math.floor(activityStats.totalMinutes / 60)}h</span>
                              <span className="text-xs text-gray-500">{activityStats.totalMinutes % 60}m</span>
                            </div>
                          </div>

                          {/* Right: Stats Grid */}
                          <div className="flex-1 w-full">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-blue-50/50 p-3 rounded-lg">
                                <p className="text-xs text-blue-600 font-medium mb-1">Daily Average</p>
                                <p className="text-lg font-bold text-gray-800">
                                  {Math.round(activityStats.totalMinutes / (activityStats.data.filter(d => d > 0).length || 1) / 60 * 10) / 10}h
                                </p>
                              </div>
                              <div className="bg-purple-50/50 p-3 rounded-lg">
                                <p className="text-xs text-purple-600 font-medium mb-1">Most Active</p>
                                <p className="text-lg font-bold text-gray-800">
                                  {/* Find index of max value, map to label */}
                                  {activityStats.data.length > 0
                                    ? activityStats.labels[activityStats.data.indexOf(Math.max(...activityStats.data))]?.slice(0, 3) || 'N/A'
                                    : '--'}
                                </p>
                              </div>
                            </div>

                            {/* Mini Bar Chart */}
                            <div className="mt-4 h-12 flex items-end gap-1 justify-between">
                              {activityStats.data.length > 0 ? activityStats.data.slice(-7).map((val, i) => {
                                const max = Math.max(...activityStats.data, 1);
                                const height = (val / max) * 100;
                                return (
                                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                                    <div className="w-full bg-blue-100 rounded-t-sm h-full relative overflow-hidden">
                                      <div
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-cyan-400 transition-all duration-500"
                                        style={{ height: `${Math.max(height, 5)}%` }}
                                      ></div>
                                    </div>
                                    {/* Tooltip */}
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                                      {Math.floor(val / 60)}h {val % 60}m
                                    </div>
                                  </div>
                                );
                              }) : (
                                <div className="w-full text-center text-xs text-gray-400 self-center">No activity yet</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Job Match Center - AI Driven */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">Job Match Center</h3>
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide">AI Driven</span>
                      </div>
                      <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1" onClick={() => setActiveTab('applications')}>
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
                          <div key={i} className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition cursor-pointer" onClick={() => handleViewCandidate(app)}>
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg mr-4 shrink-0">
                              {app.applicant?.fullName?.[0] || 'A'}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 truncate">{app.applicant?.fullName || 'Candidate'}</h4>
                              <p className="text-sm text-gray-500 truncate">{app.job?.title || 'Unknown Job'}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2 ml-4">
                              <span className={`px-2 py-0.5 rounded text-xs font-bold text-white
                              ${(app.matchScore || 0) >= 50 ? 'bg-green-500' : 'bg-red-500'}
                            `}>
                                {(app.matchScore || 0) >= 85 ? 'Excellent Fit' : (app.matchScore || 0) >= 50 ? 'Good Fit' : 'Nutural'}
                              </span>
                              <button className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100 font-medium">View</button>
                            </div>
                          </div>
                        ))
                      }
                      {applications.filter(app => (app.matchScore || 0) >= 70).length === 0 && (
                        <div className="col-span-2 text-center py-8 text-gray-500 italic">
                          No high-match candidates found yet. Post more jobs or wait for applicants!
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Recent Jobs List (Preserved) */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Your Active Job Postings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {jobPosts.length === 0 ? (
                        <div className="text-gray-500 italic">No jobs posted yet.</div>
                      ) : (
                        jobPosts.slice(0, 4).map((job, i) => (
                          <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${job.status === 'Closed' ? 'opacity-75' : ''}`}>
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-900 text-lg">{job.title}</h4>
                              <span className={`px-2 py-1 rounded text-xs font-medium ${job.status === 'Closed' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                {job.status}
                              </span>
                            </div>
                            <p className="text-gray-500 text-sm mb-4">{job.company} • {job.location}</p>
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
                </div>

              </div>
            )}
          </div>

        </div>

        {/* Candidate Detail Modal */}
        {
          showCandidateModal && selectedApplication && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">Candidate Details</h3>
                  <button onClick={() => setShowCandidateModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                      {selectedApplication.applicant?.fullName?.[0] || 'U'}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedApplication.applicant?.fullName}</h2>
                      <p className="text-gray-600">{selectedApplication.applicant?.email}</p>
                      <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        {selectedApplication.applicant?.phone || 'No phone provided'}
                      </p>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-sm text-gray-500">Match Score</div>
                      <div className="text-2xl font-bold text-blue-600">{selectedApplication.matchScore || 0}%</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase">Applying For</span>
                      <span className="font-medium">{selectedApplication.job?.title}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase">Status</span>
                      <span className="font-medium">{selectedApplication.status}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase">Experience</span>
                      <span className="font-medium">{selectedApplication.applicant?.experience || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase">Skills</span>
                      <span className="font-medium">{selectedApplication.applicant?.skills || 'N/A'}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Resume</h4>
                    {selectedApplication.applicant?.resume?.filePath ? (
                      <a
                        href={selectedApplication.applicant.resume.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
                      >
                        📄 View Resume
                      </a>
                    ) : (
                      <p className="text-gray-500 italic">No resume uploaded.</p>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4 border-t">
                    <button
                      className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg font-medium"
                      onClick={() => setShowCandidateModal(false)}
                    >
                      Close
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
