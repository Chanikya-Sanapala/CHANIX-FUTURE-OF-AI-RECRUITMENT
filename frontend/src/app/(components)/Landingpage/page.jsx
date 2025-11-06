'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [loading,setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    {
      title: 'Smart Job Matching',
      description: 'Our advanced AI analyzes your skills, experience, and preferences to recommend perfectly matched job opportunities.',
      icon: '🔍'
    },
    {
      title: 'One-Click Apply',
      description: 'Apply to multiple premium companies instantly with a single click. Save time and increase your chances.',
      icon: '⚡'
    },
    {
      title: 'Real-Time Insights',
      description: 'Track application status, receive performance analytics, and get actionable insights to improve your success rate.',
      icon: '📊'
    }
  ]

  const faqs = [
    {
      question: 'How does the AI job matching work?',
      answer: 'Our sophisticated AI algorithm analyzes your resume, skills, experience, and preferences against job requirements and company culture to provide highly accurate job recommendations tailored specifically for you.'
    },
    {
      question: 'Is it completely free for job seekers?',
      answer: 'Yes, creating an account, uploading your profile, and applying to jobs is completely free for all job seekers. We believe in providing equal opportunities for everyone.'
    },
    {
      question: 'Can I update my profile and preferences?',
      answer: 'Absolutely. You can update your resume, skills, preferences, and profile information at any time through your personalized dashboard. We recommend keeping your profile current for the best matches.'
    },
    {
      question: 'How secure is my personal data?',
      answer: 'We take data security extremely seriously. Your information is encrypted, stored securely, and never shared with third parties without your explicit consent. We comply with global data protection regulations.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide comprehensive support through multiple channels including email, live chat, and detailed help documentation. Our support team is available to assist you with any questions or concerns.'
    }
  ]


  useEffect(() => {
          // Any side effects or data fetching can go here
          setLoading(false);
        }, []);
        
        if (loading) {
          return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading Landing Page...</p>
              </div>
            </div>
          );
        }

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Navigation Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="AI Job Portal - Home"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                JobPortal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="#features" 
                onClick={(e) => smoothScroll(e, 'features')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Features
              </Link>
              <Link 
                href="#faq" 
                onClick={(e) => smoothScroll(e, 'faq')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                FAQ
              </Link>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/Login" 
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-colors duration-200"
              >
                Login In
              </Link>
              <Link 
                href="/Signup" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl">
              <div className="container mx-auto px-4 py-6 space-y-4">
                <Link 
                  href="#features" 
                  onClick={(e) => smoothScroll(e, 'features')}
                  className="block text-lg text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                >
                  Features
                </Link>
                <Link 
                  href="#faq" 
                  onClick={(e) => smoothScroll(e, 'faq')}
                  className="block text-lg text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                >
                  FAQ
                </Link>
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Link 
                    href="/Login" 
                    className="block text-center text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/Signup" 
                    className="block text-center bg-blue-600 text-white rounded-lg font-medium py-3 hover:bg-blue-700 transition-colors"
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">AI-Powered Job Matching</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Dream Job with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              AI Precision
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Advanced AI algorithms match your unique skills and aspirations with top companies. 
            Apply smarter, interview confidently, and launch your dream career.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/Signup" 
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
            >
              Start Your Journey
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="#features" 
              onClick={(e) => smoothScroll(e, 'features')}
              className="group border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 inline-flex items-center"
            >
              Learn More
              <svg className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">Trusted by job seekers worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
              {['10K+', '98%', '24/7', '50+'].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat}</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                    {['Successful Hires', 'Satisfaction Rate', 'AI Support', 'Countries'][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Revolutionize Your Job Search
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powered by cutting-edge artificial intelligence to deliver unmatched results in your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our AI-powered job portal
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <summary className="list-none cursor-pointer p-6 sm:p-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <svg 
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of successful professionals who found their dream jobs through our platform.
              </p>
              <Link 
                href="/Signup" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Create Your Free Account
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <Link href="/" className="flex items-center space-x-2 justify-center lg:justify-start mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold text-white">JobPortal</span>
              </Link>
              <p className="text-gray-400 max-w-md">
                Empowering careers through intelligent AI matching and seamless job search experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
              <div>
                <h4 className="font-semibold text-white mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 AI JobPortal. All rights reserved. Designed to help you launch your dream career.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}