"use client";

import React, { useEffect, useState } from "react";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow">
      {children}
    </span>
  );
}

function ArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur" style={{backgroundColor: '#ffffffff'}}>
      <div className="mx-auto flex h-12 sm:h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left: Logo */}
        <div className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-black">Logo</div>

        {/* Center: Links */}
        <nav className="hidden gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm md:flex">
          <a href="#about" className="text-black transition-colors duration-200 ease-out text-xs sm:text-sm">About us</a>
          <a href="#recruiters" className="text-black transition-colors duration-200 ease-out text-xs sm:text-sm">For recruiters</a>
          <a href="#candidates" className="text-black transition-colors duration-200 ease-out text-xs sm:text-sm">For candidates</a>
          <div className="group relative">
            <button className="inline-flex items-center gap-1 text-black transition-colors duration-200 ease-out text-xs sm:text-sm">
              Resources
              <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            role="button"
            href="/Login"
            className="rounded-full border border-neutral-300 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow"
          >
            Log in
          </a>
          <a
            role="button"
            href="/Signup"
            className="rounded-full bg-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow"
          >
            Get started
          </a>
        </div>
      </div>
      {/* Bottom thin divider */}
      <div className="h-[2px] w-full bg-neutral-200" />
    </header>
  );
}

export default function Landing() {
  const [mounted, setMounted] = useState(false);
  const [activeRecruiterTab, setActiveRecruiterTab] = useState('automate');
  const [activeCandidateTab, setActiveCandidateTab] = useState('showcase');
  const [currentReview, setCurrentReview] = useState(0);
  
  const jobCards = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Google',
      salary: '₹12L - ₹18L',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      type: 'Remote',
      experience: '5-8 years',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI/ML Engineer',
      company: 'Microsoft',
      salary: '₹13L - ₹20L',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes'],
      type: 'Hybrid',
      experience: '4-7 years',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps Engineer',
      company: 'Amazon',
      salary: '₹11L - ₹16L',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      type: 'On-site',
      experience: '3-6 years',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Frontend Developer',
      company: 'Meta',
      salary: '₹10L - ₹15L',
      skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
      type: 'Remote',
      experience: '2-5 years',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Scientist',
      company: 'Netflix',
      salary: '₹12.5L - ₹17.5L',
      skills: ['Python', 'R', 'SQL', 'Machine Learning'],
      type: 'Hybrid',
      experience: '4-6 years',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Backend Engineer',
      company: 'Uber',
      salary: '₹11.5L - ₹17L',
      skills: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
      type: 'On-site',
      experience: '3-7 years',
      color: 'from-teal-500 to-cyan-500'
    }
  ];
  
  const reviews = [
    {
      rating: 5,
      text: "We cut our time-to-hire in half and found better candidates than ever before.",
      author: "Priya Sharma",
      role: "Hiring manager, TechCorp",
      avatar: "🆔"
    },
    {
      rating: 5,
      text: "The AI interviews are incredibly thorough. We're making better hiring decisions.",
      author: "Michael Chen",
      role: "CTO, StartupXYZ",
      avatar: "👨‍💼"
    },
    {
      rating: 5,
      text: "Finally, a platform that focuses on skills rather than just resumes. Game changer!",
      author: "Sarah Johnson",
      role: "HR Director, InnovateCo",
      avatar: "👩‍💼"
    },
    {
      rating: 5,
      text: "The diversity features helped us build a more inclusive team. Highly recommend.",
      author: "David Kim",
      role: "VP Engineering, DataFlow",
      avatar: "🧑‍💻"
    },
    {
      rating: 5,
      text: "Candidates love the structured interviews. Our offer acceptance rate increased by 30%.",
      author: "Emily Rodriguez",
      role: "Talent Lead, CloudTech",
      avatar: "👩‍🎓"
    }
  ];
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <>
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }
        
        .animate-slide-left:hover {
          animation-play-state: paused;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #ADD8E6 0%, #D8BFD8 100%);
        }

        .button-gradient-1 {
          background: linear-gradient(135deg, #ADD8E6 0%, #D8BFD8 100%);
        }

        .button-gradient-2 {
          background: #C8E6C9;
        }
      `}</style>
      <main className="w-full text-white" style={{backgroundColor: '#242fceff'}}>
        <NavBar />
      {/* HERO */}
      <section className={`relative isolate transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40">
          <h1 className={`mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-white transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-block transition-transform duration-300 hover:scale-105">SmartEngine</span> – the
            <br className="hidden sm:block" />
            <span className="inline-block transition-transform duration-300 hover:scale-105">future of AI</span>
            <br className="hidden sm:block" />
            <span className="inline-block transition-transform duration-300 hover:scale-105">recruitment</span>
          </h1>
          <p className={`mx-auto mt-3 sm:mt-4 lg:mt-6 max-w-xs sm:max-w-xl lg:max-w-2xl text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/90 transition-all duration-700 ease-out delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Smarter interviews. Faster hiring. Fairer outcomes. Discover talent that matters
            <br className="hidden sm:block" />
            with voice-enabled AI that works the way you do.
          </p>
          <div className={`mt-6 sm:mt-7 lg:mt-8 flex items-center justify-center gap-3 transition-all duration-700 ease-out delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="/Signup" className="group rounded-full bg-white px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 text-xs sm:text-sm md:text-base font-semibold text-purple-700 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg inline-block">
              <span className="inline-block transition-transform duration-300 group-hover:scale-105">Start now</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTERVIEWS VALUE PROPS */}
      <section className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} id="recruiters">
        <div className="text-center text-sm sm:text-base font-semibold text-neutral-900">Interviews</div>
        <h2 className="mt-2 sm:mt-3 text-balance text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Voice-enabled AI
          <br className="hidden sm:block" /> interviews at scale
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-xl sm:max-w-2xl text-center text-sm sm:text-base text-neutral-900">
          Structured conversations that reveal what matters. No scripts. No bias. Just skill.
        </p>

        <div className="mx-auto mt-8 sm:mt-12 lg:mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className={`text-center transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{transitionDelay: '100ms'}}>
            <div className="group mx-auto mb-4 sm:mb-5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-neutral-400">
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:rotate-12">🏃‍♂️</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold leading-snug transition-colors duration-300 hover:text-black">
              Conduct
              <br /> structured
              <br /> unbiased
              <br /> interviews
            </h3>
            <p className="mx-auto mt-2 sm:mt-3 max-w-xs sm:max-w-sm text-xs sm:text-sm text-neutral-900 transition-colors duration-300 hover:text-black">
              Run first-round interviews consistently across every candidate without fatigue or favoritism.
            </p>
          </div>

          <div className={`text-center transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{transitionDelay: '200ms'}}>
            <div className="group mx-auto mb-4 sm:mb-5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-neutral-400">
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:rotate-12">➿</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold leading-snug transition-colors duration-300 hover:text-black">
              Save recruiter time
              <br /> and consistency
            </h3>
            <p className="mx-auto mt-2 sm:mt-3 max-w-xs sm:max-w-sm text-xs sm:text-sm text-neutral-900 transition-colors duration-300 hover:text-black">
              Eliminate hours spent on screening. Let AI handle the heavy lifting while you focus on connection.
            </p>
          </div>

          <div className={`text-center transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{transitionDelay: '300ms'}}>
            <div className="group mx-auto mb-4 sm:mb-5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-neutral-400">
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:rotate-12">🖥️</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold leading-snug transition-colors duration-300 hover:text-black">
              Capture responses
              <br /> for deeper insights
            </h3>
            <p className="mx-auto mt-2 sm:mt-3 max-w-xs sm:max-w-sm text-xs sm:text-sm text-neutral-900 transition-colors duration-300 hover:text-black">
              Real-time analysis of every answer. See patterns. Understand capability. Make confident decisions.
            </p>
          </div>
        </div>
      </section>

      {/* JOB CARDS */}
      <section className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="text-center text-sm sm:text-base font-semibold text-neutral-900">Featured Jobs</div>
        <h2 className="mt-2 sm:mt-3 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Discover Your Next Opportunity
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-xs sm:max-w-lg lg:max-w-xl xl:max-w-2xl text-center text-xs sm:text-sm text-neutral-900">
          Explore top positions from leading companies. Find the perfect match for your skills and experience.
        </p>

        <div className="mt-6 sm:mt-8 lg:mt-10 relative overflow-hidden">
          <div className="flex animate-slide-left space-x-3 sm:space-x-4">
            {[...jobCards, ...jobCards].map((job, index) => (
              <article 
                key={`${job.title}-${index}`}
                className="flex-shrink-0 w-64 sm:w-72 lg:w-80 group rounded-lg border border-neutral-200 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-0.5 bg-neutral-300"></div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-black">
                        {job.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-900 mt-0.5">{job.company}</p>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-black">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-3 text-xs text-neutral-900">
                      <span className="flex items-center gap-1">
                        <span className="text-xs">💰</span> {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-xs">⏱️</span> {job.experience}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {job.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-50 text-neutral-900 transition-colors duration-300 group-hover:bg-neutral-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <div className="mt-8 sm:mt-10 text-center">
          <button className="group inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-purple-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg">
            View All Jobs
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* CAPABILITIES CARDS (images removed) */}
      <section className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="text-center text-sm sm:text-base font-semibold text-neutral-900">Capabilities</div>
        <h2 className="mt-2 sm:mt-3 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Why SmartEngine stands out
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-xl sm:max-w-2xl text-center text-sm sm:text-base text-neutral-900">
          Built for the way hiring should work
        </p>

        <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 gap-4 sm:gap-6 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Skills",
              title: "Skill-based matching beyond resumes",
              body:
                "Evaluate real capability. Not credentials. Not connections. What candidates can actually do.",
            },
            {
              label: "Speed",
              title: "AI-powered shortlisting cuts time",
              body:
                "Reduce hiring cycles by up to eighty percent. Move fast without cutting corners on quality.",
            },
            {
              label: "Access",
              title: "Inclusive talent discovery everywhere",
              body:
                "Unlock potential in tier one, two, three cities and beyond. Talent lives everywhere.",
            },
            {
              label: "Trust",
              title: "Ethical and transparent AI always",
              body:
                "Every decision is explainable. Every choice is bias-aware. You stay in control.",
            },
          ].map((c, i) => (
            <article 
              key={i} 
              className={`group rounded-xl sm:rounded-2xl border border-neutral-200 p-4 sm:p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{transitionDelay: `${i * 100}ms`}}
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-black">{c.label}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold leading-snug transition-colors duration-300 group-hover:text-neutral-900">{c.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-900 transition-colors duration-300 group-hover:text-black">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RECRUITERS SECTION (image removed) */}
      <section className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="text-center text-sm sm:text-base font-semibold text-neutral-900">Recruiters</div>
        <h2 className="mt-2 sm:mt-3 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Built for your workflow
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-xl sm:max-w-2xl text-center text-sm sm:text-base text-neutral-900">
          Automate the work that slows you down. Keep the work that matters. Hire smarter, not harder.
        </p>
        
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-black">
          <button 
            onClick={() => setActiveRecruiterTab('automate')}
            className={`border-b-2 pb-1 font-medium transition-colors duration-200 ease-out hover:text-black ${
              activeRecruiterTab === 'automate' ? 'border-neutral-800' : 'border-transparent'
            }`}
          >
            Automate first
          </button>
          <button 
            onClick={() => setActiveRecruiterTab('focus')}
            className={`border-b-2 pb-1 font-medium transition-colors duration-200 ease-out hover:text-black ${
              activeRecruiterTab === 'focus' ? 'border-neutral-800' : 'border-transparent'
            }`}
          >
            Focus on top
          </button>
          <button 
            onClick={() => setActiveRecruiterTab('diverse')}
            className={`border-b-2 pb-1 font-medium transition-colors duration-200 ease-out hover:text-black ${
              activeRecruiterTab === 'diverse' ? 'border-neutral-800' : 'border-transparent'
            }`}
          >
            Build diverse
          </button>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 lg:mt-14 max-w-2xl sm:max-w-3xl">
          {activeRecruiterTab === 'automate' && (
            <>
              <div className="text-sm sm:text-base font-semibold text-neutral-900">Automation</div>
              <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-extrabold leading-snug">
                Automate first-round interviews with AI
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-900">
                Let the system handle screening. Structured questions. Consistent evaluation. Real-time scoring. You
                get the best candidates ready for conversation.
              </p>
            </>
          )}
          {activeRecruiterTab === 'focus' && (
            <>
              <div className="text-sm sm:text-base font-semibold text-neutral-900">Focus</div>
              <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-extrabold leading-snug">
                Focus on top candidates with precision
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-900">
                AI-powered ranking identifies the best matches instantly. Save time on screening. Connect with candidates
                who have the right skills and potential for success.
              </p>
            </>
          )}
          {activeRecruiterTab === 'diverse' && (
            <>
              <div className="text-sm sm:text-base font-semibold text-neutral-900">Diversity</div>
              <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-extrabold leading-snug">
                Build diverse future-ready teams
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-900">
                Reduce unconscious bias. Expand your talent pool. Hire the best people, not the most familiar ones.
              </p>
              <button className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow">
                Discover
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </>
          )}
        </div>
      </section>

      {/* THE SMARTENGINE PROMISE */}
      <section className={`mx-auto max-w-6xl px-6 py-20 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="text-center text-sm font-semibold text-neutral-900">Promise</div>
        <h2 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
          The SmartEngine promise
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-900">
          We're committed to making hiring better for everyone. Here's how.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className={`group rounded-2xl border border-neutral-200 p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '100ms'}}>
            <div className="text-sm font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-black">Faster</div>
            <h3 className="mt-2 text-3xl font-extrabold leading-snug sm:text-4xl transition-colors duration-300 group-hover:text-neutral-900">
              Reduce hiring cycles from months to weeks
            </h3>
            <p className="mt-3 text-neutral-900 transition-colors duration-300 group-hover:text-black">
              Move at the speed of talent. Automated screening means qualified candidates reach you faster. No waiting. No bottlenecks.
            </p>
          </article>

          <article className={`group rounded-2xl border border-neutral-200 p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '200ms'}}>
            <div className="text-sm font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-black">Fairer</div>
            <h3 className="mt-2 text-3xl font-extrabold leading-snug sm:text-4xl transition-colors duration-300 group-hover:text-neutral-900">
              Level the playing field for all candidates
            </h3>
            <p className="mt-3 text-neutral-900 transition-colors duration-300 group-hover:text-black">
              Remove bias from the hiring process. Focus on skills, not background. Give everyone a fair shot at success.
            </p>
          </article>
        </div>
      </section>

      {/* CANDIDATES SECTION */}
      <section className={`mx-auto max-w-6xl px-6 py-20 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} id="candidates">
        <div className="text-center text-sm font-semibold text-neutral-900">Candidates</div>
        <h2 className="text-center text-4xl font-extrabold sm:text-5xl">Show what you can do</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-900">
          Your skills matter more than your background. Prove it. Get matched to roles that fit your real potential.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full button-gradient-2 px-5 py-2.5 text-sm font-medium text-black transition-colors duration-200 ease-out hover:opacity-90">
            Apply now <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-12 border-b border-neutral-200">
          <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveCandidateTab('showcase')}
              className={`whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium ${activeCandidateTab === 'showcase' ? 'border-neutral-900 text-neutral-900' : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-black'}`}
            >
              Showcase skills
            </button>
            <button
              onClick={() => setActiveCandidateTab('matched')}
              className={`whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium ${activeCandidateTab === 'matched' ? 'border-neutral-900 text-neutral-900' : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-black'}`}
            >
              Get matched right
            </button>
            <button
              onClick={() => setActiveCandidateTab('access')}
              className={`whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium ${activeCandidateTab === 'access' ? 'border-neutral-900 text-neutral-900' : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-black'}`}
            >
              Access new
            </button>
          </nav>
        </div>

        <div className="mt-10">
          {activeCandidateTab === 'showcase' && (
            <div className="max-w-3xl mx-auto">
              <Pill>Skills</Pill>
              <h3 className="mt-3 text-4xl font-extrabold">Showcase skills through structured interviews</h3>
              <p className="mt-3 text-neutral-900">
                No trick questions. No guessing games. Just a fair chance to demonstrate what you know and what you can do.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-purple-700 transition-colors duration-200 ease-out hover:opacity-90">
                Get started <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
          {activeCandidateTab === 'matched' && (
            <div className="max-w-3xl mx-auto">
              <Pill>Matching</Pill>
              <h3 className="mt-3 text-4xl font-extrabold">Get matched to the right opportunities</h3>
              <p className="mt-3 text-neutral-900">
                Our AI understands your capabilities beyond your resume. Find roles where you'll truly thrive and make an impact.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-purple-700 transition-colors duration-200 ease-out hover:opacity-90">
                Find matches <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
          {activeCandidateTab === 'access' && (
            <div className="max-w-3xl mx-auto">
              <Pill>Opportunity</Pill>
              <h3 className="mt-3 text-4xl font-extrabold">Access new opportunities everywhere</h3>
              <p className="mt-3 text-neutral-900">
                Break geographical barriers. Connect with companies that value skills over location. Your talent opens doors globally.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* QUESTIONS + TESTIMONIALS HEADER */}
      <section className={`mx-auto max-w-6xl px-6 py-10 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Still have questions?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-900">
          Reach out to our team for a detailed conversation.
        </p>
        <div className="mt-5 flex items-center justify-center">
          <Pill>Contact</Pill>
        </div>
      </section>

      {/* RESULTS / TESTIMONIAL */}
      <section className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:gap-12 md:grid-cols-[1fr_minmax(280px,400px)] lg:grid-cols-[1fr_minmax(320px,520px)]">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">Real results</h3>
            <p className="mt-2 sm:mt-3 max-w-sm sm:max-w-md text-sm sm:text-base text-neutral-900">
              Hear from recruiters and candidates who've experienced the SmartEngine difference.
            </p>
          </div>
          <div className={`rounded-xl sm:rounded-2xl border border-neutral-200 p-4 sm:p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-1 text-yellow-500">
              {'★'.repeat(reviews[currentReview].rating)}
            </div>
            <p className="mt-2 text-sm sm:text-base text-black transition-colors duration-300">
              {reviews[currentReview].text}
            </p>
            <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-900">
              <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-neutral-200 transition-transform duration-300 hover:scale-110">
                <span className="text-xs sm:text-base">{reviews[currentReview].avatar}</span>
              </div>
              <div>
                <div className="font-semibold text-black text-xs sm:text-sm">{reviews[currentReview].author}</div>
                <div className="text-xs sm:text-sm">{reviews[currentReview].role}</div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 flex items-center justify-between">
              <div className="text-neutral-400 text-xs sm:text-sm">
                {reviews.map((_, index) => (
                  <span key={index} className={`inline-block transition-all duration-300 ${index === currentReview ? 'text-black scale-110' : 'scale-100'}`}>
                    {index === currentReview ? '●' : '○'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`mx-auto max-w-6xl px-6 pb-24 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <h2 className={`text-center text-4xl font-extrabold sm:text-5xl transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Join the movement</h2>
        <p className={`mx-auto mt-2 max-w-2xl text-center text-neutral-900 transition-all duration-700 ease-out delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          SmartEngine – where skills meet opportunity. Start hiring smarter today.
        </p>
        <div className={`mt-6 flex items-center justify-center gap-3 transition-all duration-700 ease-out delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="group rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg">
            <span className="inline-block transition-transform duration-300 group-hover:scale-105">Sign up</span>
          </button>
          <Pill>Demo</Pill>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`bg-neutral-900 text-white transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-xl font-semibold tracking-tight">SmartEngine</div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Smarter interviews. Faster hiring. Fairer outcomes. The future of AI recruitment is here.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">AI Interviews</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Candidate Matching</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Analytics Dashboard</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">API Access</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Integrations</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Press</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Community</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 sm:mt-16 border-t border-neutral-800 pt-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Stay updated</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Get the latest updates on AI recruitment trends and SmartEngine features.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t border-neutral-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-400">
                © 2024 SmartEngine. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Privacy</a>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Terms</a>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
