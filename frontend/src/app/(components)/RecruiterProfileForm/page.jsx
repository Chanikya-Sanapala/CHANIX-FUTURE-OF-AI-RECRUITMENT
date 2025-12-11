"use client";
import { useState } from 'react';

const RecruiterProfileForm = ({ user, onComplete, onSkip }) => {
  const [formData, setFormData] = useState({
    phone: '',
    company: {
      name: '',
      industry: '',
      size: '',
      website: '',
      description: ''
    },
    position: '',
    department: '',
    bio: '',
    specializations: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const companySizes = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '501-1000', label: '501-1000 employees' },
    { value: '1000+', label: '1000+ employees' }
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Consulting',
    'Media & Entertainment',
    'Real Estate',
    'Transportation',
    'Energy',
    'Government',
    'Non-profit',
    'Other'
  ];

  const specializations = [
    'software-development',
    'data-science',
    'marketing',
    'sales',
    'finance',
    'human-resources',
    'operations',
    'design',
    'product-management',
    'consulting',
    'healthcare',
    'education',
    'other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSpecializationChange = (specialization) => {
    setFormData(prev => ({
      ...prev,
      specializations: prev.specializations.includes(specialization)
        ? prev.specializations.filter(spec => spec !== specialization)
        : [...prev.specializations, specialization]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/[;\s]+$/, '').replace(/\/$/, '');
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

      const response = await fetch(`${baseUrl}/api/profile/recruiter`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          phone: formData.phone,
          company: formData.company,
          position: formData.position,
          department: formData.department,
          bio: formData.bio,
          specializations: formData.specializations
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        onComplete();
      } else {
        alert('Error updating profile: ' + data.message);
      }
    } catch (error) {
      console.error('Profile update error:', error);
      alert('Error updating profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Company Profile</h2>
        <p className="text-gray-600">Help us understand your company and recruitment needs</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your 10-digit phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            name="company.name"
            value={formData.company.name}
            onChange={handleInputChange}
            placeholder="Enter your company name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          />
        </div>

        {/* Company Industry */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Industry *
          </label>
          <select
            name="company.industry"
            value={formData.company.industry}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          >
            <option value="">Select Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Company Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Size *
          </label>
          <select
            name="company.size"
            value={formData.company.size}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          >
            <option value="">Select Company Size</option>
            {companySizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>

        {/* Company Website */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Website
          </label>
          <input
            type="url"
            name="company.website"
            value={formData.company.website}
            onChange={handleInputChange}
            placeholder="https://www.yourcompany.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Company Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Description
          </label>
          <textarea
            name="company.description"
            value={formData.company.description}
            onChange={handleInputChange}
            placeholder="Brief description of your company"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Position *
          </label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="e.g., HR Manager, Talent Acquisition Specialist"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department *
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="e.g., Human Resources, Engineering, Sales"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio *
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Tell us about your role and experience in recruitment"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          />
        </div>

        {/* Specializations */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specializations *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {specializations.map((spec) => (
              <label key={spec} className="flex items-center text-gray-900">
                <input
                  type="checkbox"
                  checked={formData.specializations.includes(spec)}
                  onChange={() => handleSpecializationChange(spec)}
                  className="mr-2"
                />
                {spec.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Complete Profile'}
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
          >
            Skip for Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecruiterProfileForm;
