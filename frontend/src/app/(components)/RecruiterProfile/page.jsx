"use client";

import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FiUpload, FiSave, FiEdit, FiX, FiBriefcase, FiMail, FiPhone, FiMapPin, FiGlobe } from 'react-icons/fi';

export default function RecruiterProfile() {
  const [activeSection, setActiveSection] = useState('basic');
  const [profileImage, setProfileImage] = useState(null);
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('overview'); // 'overview' | 'edit'
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const [basicDetails, setBasicDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    bio: ''
  });

  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    website: '',
    industry: '',
    size: '',
    description: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: 'India',
      zipCode: ''
    },
    founded: '',
    logo: ''
  });

  const [specializations, setSpecializations] = useState([]);
  const [newSpecialization, setNewSpecialization] = useState('');
  const [experienceInRecruitment, setExperienceInRecruitment] = useState(0);
  const [socialProfiles, setSocialProfiles] = useState({
    linkedin: '',
    twitter: ''
  });

  // Completion calculation
  const completion = useMemo(() => {
    let total = 0;
    let filled = 0;
    const add = (isFilled) => {
      total += 1;
      if (isFilled) filled += 1;
    };

    // Basic
    add(!!basicDetails.firstName?.trim());
    add(!!basicDetails.lastName?.trim());
    add(!!basicDetails.email?.trim());
    add(!!basicDetails.phone?.trim());
    add(!!basicDetails.position?.trim());
    add(!!profileImage);

    // Company
    add(!!companyDetails.name?.trim());
    add(!!companyDetails.industry?.trim());
    add(!!companyDetails.size?.trim());
    add(!!companyDetails.description?.trim());
    add(!!companyDetails.address.city?.trim());
    add(!!companyDetails.address.country?.trim());

    // Other
    add(specializations.length > 0);
    add(experienceInRecruitment > 0);

    const pct = total ? Math.round((filled / total) * 100) : 0;
    return { pct, missing: Math.max(0, total - filled) };
  }, [basicDetails, profileImage, companyDetails, specializations, experienceInRecruitment]);

  // Load user data
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
        setBasicDetails(prev => ({
          ...prev,
          firstName: userData?.firstName || '',
          lastName: userData?.lastName || '',
          email: userData?.email || ''
        }));

        const userId = userData._id || userData.id || userData.email || 'default';
        const img = localStorage.getItem(`profileImageUrl_${userId}`);
        if (img) setProfileImage(img);
      }
    } catch (_) { }
  }, []);

  // Load existing profile from backend
  useEffect(() => {
    if (!user) return;

    const loadProfile = async () => {
      try {
        const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
        const url = baseUrl ? `${baseUrl}/api/profile/get` : `/api/profile/get`;

        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user._id || user.id, userType: 'recruiter' }),
          credentials: 'include'
        });

        const json = await res.json().catch(() => ({}));

        if (json?.success && json.data) {
          const u = json.data.user || {};
          const p = json.data.profile || {};

          // Update basic details
          setBasicDetails(prev => ({
            ...prev,
            firstName: u.firstName || prev.firstName || '',
            lastName: u.lastName || prev.lastName || '',
            email: u.email || prev.email || '',
            phone: p.phone || prev.phone || '',
            position: p.position || prev.position || '',
            department: p.department || prev.department || '',
            bio: p.bio || prev.bio || ''
          }));

          // Update company details
          if (p.company) {
            setCompanyDetails(prev => ({
              ...prev,
              name: p.company.name || prev.name || '',
              website: p.company.website || prev.website || '',
              industry: p.company.industry || prev.industry || '',
              size: p.company.size || prev.size || '',
              description: p.company.description || prev.description || '',
              address: {
                street: p.company.address?.street || prev.address.street || '',
                city: p.company.address?.city || prev.address.city || '',
                state: p.company.address?.state || prev.address.state || '',
                country: p.company.address?.country || prev.address.country || 'India',
                zipCode: p.company.address?.zipCode || prev.address.zipCode || ''
              },
              founded: p.company.founded ? String(p.company.founded).slice(0, 10) : prev.founded || '',
              logo: p.company.logo || prev.logo || ''
            }));
          }

          // Update other fields
          if (p.specializations) setSpecializations(p.specializations || []);
          if (p.experienceInRecruitment) setExperienceInRecruitment(p.experienceInRecruitment || 0);
          if (p.socialProfiles) setSocialProfiles(p.socialProfiles || { linkedin: '', twitter: '' });

          // Load profile image
          const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
          const apiImg = p.profilePicture || p.profileImage || p.avatar || '';
          const userId = u._id || u.id || u.email || 'default';

          if (apiImg) {
            const fullImg = apiImg.startsWith('http') ? apiImg : (baseUrl ? `${baseUrl}${apiImg}` : apiImg);
            setProfileImage(fullImg);
            if (typeof window !== 'undefined') localStorage.setItem(`profileImageUrl_${userId}`, fullImg);
          } else if (typeof window !== 'undefined') {
            const localImg = localStorage.getItem(`profileImageUrl_${userId}`);
            if (localImg) setProfileImage(localImg);
          }
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      }
    };

    loadProfile();
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSpecialization = () => {
    if (newSpecialization.trim() && !specializations.includes(newSpecialization)) {
      setSpecializations([...specializations, newSpecialization]);
      setNewSpecialization('');
    }
  };

  const handleRemoveSpecialization = (spec) => {
    setSpecializations(specializations.filter(s => s !== spec));
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login to save profile');
        return;
      }

      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const url = baseUrl ? `${baseUrl}/api/profile/recruiter` : `/api/profile/recruiter`;

      const payload = {
        firstName: basicDetails.firstName,
        lastName: basicDetails.lastName,
        phone: basicDetails.phone,
        position: basicDetails.position,
        department: basicDetails.department,
        bio: basicDetails.bio,
        company: {
          name: companyDetails.name,
          website: companyDetails.website,
          industry: companyDetails.industry,
          size: companyDetails.size,
          description: companyDetails.description,
          address: companyDetails.address,
          founded: companyDetails.founded ? new Date(companyDetails.founded) : null,
          logo: companyDetails.logo
        },
        specializations,
        experienceInRecruitment: parseInt(experienceInRecruitment) || 0,
        socialProfiles
      };

      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const json = await res.json().catch(() => ({}));

      if (json?.success) {
        // Update user data in localStorage with firstName and lastName
        if (json.data?.user) {
          const updatedUser = {
            ...user,
            firstName: json.data.user.firstName || basicDetails.firstName,
            lastName: json.data.user.lastName || basicDetails.lastName
          };
          localStorage.setItem('user', JSON.stringify(updatedUser));
          setUser(updatedUser);
        }

        // Handle profile image upload if changed
        if (profileImage && profileImage.startsWith('data:')) {
          const formData = new FormData();
          const canvas = document.createElement('canvas');
          const img = new Image();
          img.onload = async () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(async (blob) => {
              formData.append('file', blob, 'profile.jpg');
              formData.append('userId', user._id || user.id);
              formData.append('userType', 'recruiter');

              try {
                const uploadRes = await fetch(`${baseUrl}/api/profile/upload-photo`, {
                  method: 'POST',
                  headers: { 'Authorization': `Bearer ${token}` },
                  body: formData
                });

                const uploadJson = await uploadRes.json().catch(() => ({}));
                if (uploadJson?.success) {
                  const userId = user._id || user.id || user.email || 'default';
                  const imageUrl = uploadJson.data?.url || uploadJson.url || '';
                  if (imageUrl) {
                    const fullUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;
                    setProfileImage(fullUrl);
                    localStorage.setItem(`profileImageUrl_${userId}`, fullUrl);
                  }
                }
              } catch (err) {
                console.error('Image upload error:', err);
              }
            });
          };
          img.src = profileImage;
        }

        alert('Profile saved successfully!');
        setMode('overview');
      } else {
        alert(json?.message || 'Failed to save profile');
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Loading...</p>
          <button
            onClick={() => router.push('/login')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Recruiter Profile</h1>
            <p className="text-gray-600 mt-2">
              Profile Completion: <span className="font-semibold text-blue-600">{completion.pct}%</span>
            </p>
          </div>
          <button
            onClick={() => router.push('/recruiter-dashboard')}
            className="px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 bg-white rounded-lg shadow p-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completion.pct}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {completion.missing > 0 ? `${completion.missing} fields to complete` : 'Profile complete!'}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block bg-white rounded-lg shadow p-4 sticky top-4">
              <nav className="space-y-2">
                {['basic', 'company', 'specializations', 'social'].map(section => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`w-full text-left px-4 py-2 rounded transition-colors ${activeSection === section
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className="lg:hidden mb-6">
              <label htmlFor="mobile-nav" className="block text-sm font-medium text-gray-700 mb-2">Navigate to Section</label>
              <select
                id="mobile-nav"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base text-gray-900 bg-white"
                value={activeSection}
                onChange={(e) => setActiveSection(e.target.value)}
              >
                {['basic', 'company', 'specializations', 'social'].map(section => (
                  <option key={section} value={section}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              {/* Header with Edit/Save buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {activeSection === 'basic' && 'Basic Information'}
                  {activeSection === 'company' && 'Company Details'}
                  {activeSection === 'specializations' && 'Specializations'}
                  {activeSection === 'social' && 'Social Profiles'}
                </h2>
                {mode === 'overview' ? (
                  <button
                    onClick={() => setMode('edit')}
                    className="w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <FiEdit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                    <button
                      onClick={handleSaveProfile}
                      disabled={isLoading}
                      className="w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                    >
                      <FiSave className="mr-2 h-4 w-4" />
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      onClick={() => setMode('overview')}
                      className="w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      <FiX className="mr-2 h-4 w-4" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Basic Information Section */}
                {activeSection === 'basic' && (
                  <div className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                          {profileImage ? (
                            <img src={profileImage} alt="Profile" className="h-full w-full object-cover" />
                          ) : (
                            <FiBriefcase className="h-12 w-12 text-gray-400" />
                          )}
                        </div>
                        {mode === 'edit' && (
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                          >
                            <FiUpload className="h-4 w-4" />
                          </button>
                        )}
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Profile Picture</p>
                        <p className="text-sm text-gray-600">JPG, PNG or GIF (Max 5MB)</p>
                      </div>
                    </div>

                    {/* Basic Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        {mode === 'edit' ? (
                          <input
                            type="text"
                            value={basicDetails.firstName}
                            onChange={(e) => setBasicDetails({ ...basicDetails, firstName: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-gray-900">{basicDetails.firstName || '-'}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        {mode === 'edit' ? (
                          <input
                            type="text"
                            value={basicDetails.lastName}
                            onChange={(e) => setBasicDetails({ ...basicDetails, lastName: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-gray-900">{basicDetails.lastName || '-'}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <p className="text-gray-900 flex items-center">
                          <FiMail className="mr-2 h-4 w-4" />
                          {basicDetails.email}
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        {mode === 'edit' ? (
                          <input
                            type="tel"
                            value={basicDetails.phone}
                            onChange={(e) => setBasicDetails({ ...basicDetails, phone: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-gray-900 flex items-center">
                            <FiPhone className="mr-2 h-4 w-4" />
                            {basicDetails.phone || '-'}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                        {mode === 'edit' ? (
                          <input
                            type="text"
                            value={basicDetails.position}
                            onChange={(e) => setBasicDetails({ ...basicDetails, position: e.target.value })}
                            placeholder="e.g., Senior Recruiter"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-gray-900">{basicDetails.position || '-'}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                        {mode === 'edit' ? (
                          <input
                            type="text"
                            value={basicDetails.department}
                            onChange={(e) => setBasicDetails({ ...basicDetails, department: e.target.value })}
                            placeholder="e.g., Human Resources"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-gray-900">{basicDetails.department || '-'}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      {mode === 'edit' ? (
                        <textarea
                          value={basicDetails.bio}
                          onChange={(e) => setBasicDetails({ ...basicDetails, bio: e.target.value })}
                          rows={4}
                          placeholder="Tell us about yourself..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                        />
                      ) : (
                        <p className="text-gray-900 whitespace-pre-line">{basicDetails.bio || '-'}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Company Details Section */}
                {activeSection === 'company' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                        {mode === 'edit' ? (
                          <input
                            type="text"
                            value={companyDetails.name}
                            onChange={(e) => setCompanyDetails({ ...companyDetails, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-gray-900 flex items-center">
                            <FiBriefcase className="mr-2 h-4 w-4" />
                            {companyDetails.name || '-'}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
                        {mode === 'edit' ? (
                          <select
                            value={companyDetails.industry}
                            onChange={(e) => setCompanyDetails({ ...companyDetails, industry: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          >
                            <option value="">Select Industry</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Finance">Finance</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Retail">Retail</option>
                            <option value="Other">Other</option>
                          </select>
                        ) : (
                          <p className="text-gray-900">{companyDetails.industry || '-'}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Size *</label>
                        {mode === 'edit' ? (
                          <select
                            value={companyDetails.size}
                            onChange={(e) => setCompanyDetails({ ...companyDetails, size: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          >
                            <option value="">Select Size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="501-1000">501-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                          </select>
                        ) : (
                          <p className="text-gray-900">{companyDetails.size || '-'}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                        {mode === 'edit' ? (
                          <input
                            type="url"
                            value={companyDetails.website}
                            onChange={(e) => setCompanyDetails({ ...companyDetails, website: e.target.value })}
                            placeholder="https://example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          />
                        ) : companyDetails.website ? (
                          <p className="text-blue-600 flex items-center hover:underline">
                            <FiGlobe className="mr-2 h-4 w-4" />
                            <a href={companyDetails.website} target="_blank" rel="noopener noreferrer">
                              {companyDetails.website}
                            </a>
                          </p>
                        ) : (
                          <p className="text-gray-900">-</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Founded</label>
                        {mode === 'edit' ? (
                          <input
                            type="date"
                            value={companyDetails.founded}
                            onChange={(e) => setCompanyDetails({ ...companyDetails, founded: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-gray-900">{companyDetails.founded || '-'}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Description</label>
                      {mode === 'edit' ? (
                        <textarea
                          value={companyDetails.description}
                          onChange={(e) => setCompanyDetails({ ...companyDetails, description: e.target.value })}
                          rows={4}
                          placeholder="Tell us about your company..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                        />
                      ) : (
                        <p className="text-gray-900 whitespace-pre-line">{companyDetails.description || '-'}</p>
                      )}
                    </div>

                    {/* Address */}
                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-gray-900 mb-4">Address</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                          {mode === 'edit' ? (
                            <input
                              type="text"
                              value={companyDetails.address.street}
                              onChange={(e) => setCompanyDetails({
                                ...companyDetails,
                                address: { ...companyDetails.address, street: e.target.value }
                              })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                            />
                          ) : (
                            <p className="text-gray-900">{companyDetails.address.street || '-'}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                          {mode === 'edit' ? (
                            <input
                              type="text"
                              value={companyDetails.address.city}
                              onChange={(e) => setCompanyDetails({
                                ...companyDetails,
                                address: { ...companyDetails.address, city: e.target.value }
                              })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                            />
                          ) : (
                            <p className="text-gray-900">{companyDetails.address.city || '-'}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                          {mode === 'edit' ? (
                            <input
                              type="text"
                              value={companyDetails.address.state}
                              onChange={(e) => setCompanyDetails({
                                ...companyDetails,
                                address: { ...companyDetails.address, state: e.target.value }
                              })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                            />
                          ) : (
                            <p className="text-gray-900">{companyDetails.address.state || '-'}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code</label>
                          {mode === 'edit' ? (
                            <input
                              type="text"
                              value={companyDetails.address.zipCode}
                              onChange={(e) => setCompanyDetails({
                                ...companyDetails,
                                address: { ...companyDetails.address, zipCode: e.target.value }
                              })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                            />
                          ) : (
                            <p className="text-gray-900">{companyDetails.address.zipCode || '-'}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                          {mode === 'edit' ? (
                            <select
                              value={companyDetails.address.country}
                              onChange={(e) => setCompanyDetails({
                                ...companyDetails,
                                address: { ...companyDetails.address, country: e.target.value }
                              })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                            >
                              <option value="India">India</option>
                              <option value="United States">United States</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>
                              <option value="Other">Other</option>
                            </select>
                          ) : (
                            <p className="text-gray-900">{companyDetails.address.country || '-'}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Specializations Section */}
                {activeSection === 'specializations' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience in Recruitment</label>
                      {mode === 'edit' ? (
                        <input
                          type="number"
                          min="0"
                          max="50"
                          value={experienceInRecruitment}
                          onChange={(e) => setExperienceInRecruitment(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                        />
                      ) : (
                        <p className="text-gray-900">{experienceInRecruitment} years</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specializations</label>
                      {mode === 'edit' ? (
                        <div className="space-y-3">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={newSpecialization}
                              onChange={(e) => setNewSpecialization(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleAddSpecialization()}
                              placeholder="e.g., IT Recruitment, Executive Search"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                            />
                            <button
                              onClick={handleAddSpecialization}
                              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                              Add
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {specializations.map((spec, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                              >
                                <span>{spec}</span>
                                <button
                                  onClick={() => handleRemoveSpecialization(spec)}
                                  className="text-blue-700 hover:text-blue-900"
                                >
                                  <FiX className="h-4 w-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {specializations.length > 0 ? (
                            specializations.map((spec, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {spec}
                              </span>
                            ))
                          ) : (
                            <p className="text-gray-600">No specializations added</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Social Profiles Section */}
                {activeSection === 'social' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                      {mode === 'edit' ? (
                        <input
                          type="url"
                          value={socialProfiles.linkedin}
                          onChange={(e) => setSocialProfiles({ ...socialProfiles, linkedin: e.target.value })}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                        />
                      ) : socialProfiles.linkedin ? (
                        <a
                          href={socialProfiles.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {socialProfiles.linkedin}
                        </a>
                      ) : (
                        <p className="text-gray-600">-</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Twitter Profile</label>
                      {mode === 'edit' ? (
                        <input
                          type="url"
                          value={socialProfiles.twitter}
                          onChange={(e) => setSocialProfiles({ ...socialProfiles, twitter: e.target.value })}
                          placeholder="https://twitter.com/yourprofile"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                        />
                      ) : socialProfiles.twitter ? (
                        <a
                          href={socialProfiles.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {socialProfiles.twitter}
                        </a>
                      ) : (
                        <p className="text-gray-600">-</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
