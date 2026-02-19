"use client";

import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";
// REMOVED STATIC IMPORT: import BIRDS from "vanta/dist/vanta.birds.min";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow hover:bg-white/20">
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

import { HiMenu, HiX } from "react-icons/hi";

function LandingNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Recruiters", href: "#recruiters" },
    { name: "Candidates", href: "#candidates" },
  ];

  return (
    <header className="absolute top-0 z-[60] w-full pt-6">
      <div className="flex justify-between items-center w-full px-6 sm:px-12 max-w-[1920px] mx-auto">
        {/* Logo */}
        <div className="text-2xl sm:text-4xl font-black tracking-tighter text-white uppercase relative z-[70]">
          CHANIX
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm sm:text-base font-medium text-white/90">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white hover:underline decoration-2 underline-offset-8 transition-all">
              {link.name}
            </a>
          ))}
          <Link href="/Signup" className="bg-white text-[#000080] px-6 py-2 rounded-full font-bold hover:bg-white/90 transition-all active:scale-95 shadow-lg">
            Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2 relative z-[70] bg-white/10 rounded-xl backdrop-blur-md border border-white/20"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Sidebar */}
        <div className={`
          fixed inset-0 bg-[#000080]/95 backdrop-blur-xl z-[65] lg:hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
          <div className="flex flex-col items-center gap-8 text-2xl font-black tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-orange-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/Signup"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-white text-[#000080] px-10 py-4 rounded-2xl shadow-2xl"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Landing() {
  const [mounted, setMounted] = useState(false);
  const [activeRecruiterTab, setActiveRecruiterTab] = useState('automate');
  const [activeCandidateTab, setActiveCandidateTab] = useState('showcase');
  const [currentReview, setCurrentReview] = useState(0);

  const vantaRef = useRef(null);

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

    let vantaEffect = null;

    const loadVanta = async () => {
      if (!vantaRef.current) return;
      try {
        // Dynamically import Vanta (client-side only)
        const BIRDS = (await import("vanta/dist/vanta.birds.min")).default;

        vantaEffect = BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x000080, // Navy Blue
          color1: 0xff8c00, // Dark Orange
          color2: 0xff4500, // Orange Red
          birdSize: 1.50,
          wingSpan: 30.00,
          speedLimit: 5.00,
          separation: 20.00,
          alignment: 20.00,
          cohesion: 20.00,
          quantity: 5.00
        });
      } catch (error) {
        console.error("Vanta load error:", error);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <>
      <main className="w-full min-h-screen text-white bg-[#000080] transition-all duration-1000 ease-out">
        <LandingNavBar />
        {/* HERO */}
        <section
          ref={vantaRef}
          className={`relative min-h-screen flex flex-col justify-center pb-0 overflow-hidden transition-all duration-1000 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}
          id="about"
        >

          {/* Background Texture/Gradient Overlay (Optional) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none z-10"></div>

          {/* Main Content Container */}
          <div className="relative w-full h-full flex flex-col justify-center items-center max-w-[1920px] mx-auto px-6 sm:px-12 z-20 pt-20">

            {/* Combined Text Layer */}
            <div className="relative flex flex-col items-center justify-center w-full">

              {/* Big Text Layer - Background */}
              <h1 className="leading-[0.85] font-black text-white/20 mix-blend-overlay opacity-30 select-none pointer-events-none
                                 text-[20vw] lg:text-[15vw]
                                 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 animate-pulse-slow">
                CHANIX
              </h1>

              {/* Big Text Layer - Foreground */}
              <h1 className="relative leading-[0.8] font-black text-white tracking-tighter uppercase
                                 text-[18vw] lg:text-[13.5vw]
                                 w-full text-center mix-blend-lighten pointer-events-none animate-cinematic">
                CHANIX
              </h1>

              {/* Subtitle */}
              <div className="mt-6 lg:mt-8 flex flex-col items-center gap-1 lg:gap-2 z-20">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-[0.3em] text-white underline decoration-orange-500 decoration-4 underline-offset-8 uppercase text-center">
                  FUTURE OF AI
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-[0.3em] text-white uppercase text-center">
                  RECRUITMENT
                </p>
              </div>
            </div>

            <div className="mt-12 lg:mt-16 relative z-30">
              <button className="bg-white text-[#000080] font-black px-10 py-5 rounded-22xl text-lg hover:scale-105 transition-all shadow-2xl uppercase tracking-widest shadow-white/5">
                Experience it
              </button>
            </div>

          </div>
        </section>

        {/* INTERVIEWS VALUE PROPS */}
        <section className={`mx-auto max-w-6xl px-6 py-20 lg:py-32 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} id="recruiters">
          <div className="text-center text-xs sm:text-sm font-black tracking-[0.5em] uppercase text-orange-500 mb-4">Interviews</div>
          <h2 className="text-balance text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.85]">
            Voice-enabled AI
            <br className="hidden md:block" /> interviews at scale
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base sm:text-lg text-neutral-300 font-medium leading-relaxed">
            Structured conversations that reveal what matters. No scripts. No bias. Just raw skill and potential.
          </p>

          <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Conduct structured unbiased interviews",
                desc: "Run first-round interviews consistently across every candidate without fatigue or favoritism."
              },
              {
                title: "Save recruiter time and consistency",
                desc: "Eliminate hours spent on screening. Let AI handle the heavy lifting while you focus on connection."
              },
              {
                title: "Capture responses for deeper insights",
                desc: "Real-time analysis of every answer. See patterns. Understand capability. Make confident decisions."
              }
            ].map((prop, i) => (
              <div key={i} className={`flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 text-orange-500 font-black text-xl">
                  0{i + 1}
                </div>
                <h3 className="text-xl lg:text-2xl font-black tracking-tighter uppercase leading-none text-white mb-4">
                  {prop.title}
                </h3>
                <p className="text-sm font-medium text-white/60 leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* JOB CARDS */}
        <section className={`py-20 lg:py-32 bg-white/5 transition-all duration-700 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center md:text-left mb-12">
              <div className="text-xs sm:text-sm font-black tracking-[0.5em] uppercase text-orange-500 mb-4 text-center md:text-left">Opportunities</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-none text-white mb-6">
                Featured <span className="text-white/40">Openings</span>
              </h2>
              <p className="max-w-xl text-base text-neutral-400 font-medium">
                Explore top positions from industry leaders. Your journey to excellence begins here.
              </p>
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden group">
            <div className="flex animate-slide-left space-x-6 px-6">
              {[...jobCards, ...jobCards].map((job, index) => (
                <article
                  key={`${job.title}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[350px] rounded-[2rem] border-2 border-white/5 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${job.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl">
                        {job.company.charAt(0)}
                      </div>
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/10 text-white border border-white/10">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white tracking-tight leading-tight mb-1">
                      {job.title}
                    </h3>
                    <p className="text-sm text-neutral-500 font-bold mb-6">{job.company}</p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-xs font-bold text-neutral-300">
                        <span className="flex items-center gap-2">💰 {job.salary}</span>
                        <span className="flex items-center gap-2">⏱️ {job.experience}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {job.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-white/5 text-neutral-300 border border-white/5"
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
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#000080] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#000080] to-transparent z-10 pointer-events-none"></div>
          </div>

          <div className="mt-16 text-center">
            <button className="group relative inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-black text-[#000080] transition-all hover:scale-105 active:scale-95 shadow-2xl">
              EXPLORE ALL JOBS
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </section>

        {/* CAPABILITIES CARDS */}
        <section className={`mx-auto max-w-6xl px-6 py-20 lg:py-32 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="text-center mb-16">
            <div className="text-xs sm:text-sm font-black tracking-[0.5em] uppercase text-orange-500 mb-4">Capabilities</div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.85]">
              Why <span className="text-white/40">Chanix</span> stands out
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                label: "Skills",
                title: "Skill-based matching",
                body: "Evaluate real capability. Not credentials. Not connections. What candidates can actually do.",
                icon: "⚡"
              },
              {
                label: "Speed",
                title: "AI-powered shortlisting",
                body: "Reduce hiring cycles by up to 80%. Move fast without cutting corners on quality.",
                icon: "🚀"
              },
              {
                label: "Access",
                title: "Inclusive talent discovery",
                body: "Unlock potential in every corner of the world. Talent lives everywhere.",
                icon: "🌐"
              },
              {
                label: "Trust",
                title: "Ethical and transparent AI",
                body: "Every decision is explainable. Every choice is bias-aware. You stay in control.",
                icon: "🛡️"
              }
            ].map((c, i) => (
              <article
                key={i}
                className={`group rounded-[2rem] border-2 border-white/5 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:bg-white/10 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-6">{c.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-2">{c.label}</div>
                <h3 className="text-xl lg:text-2xl font-black leading-tight text-white mb-4 uppercase tracking-tighter">{c.title}</h3>
                <p className="text-sm font-medium text-neutral-400 leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* RECRUITERS SECTION */}
        <section className={`mx-auto max-w-6xl px-6 py-20 lg:py-32 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs sm:text-sm font-black tracking-[0.5em] uppercase text-orange-500 mb-4">Recruiters</div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.85] mb-8">
                Built for <br /> your <span className="text-white/40">workflow</span>
              </h2>
              <p className="text-lg text-neutral-400 font-medium leading-relaxed mb-12">
                Automate the work that slows you down. Keep the work that matters. Hire smarter, not harder.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { id: 'automate', label: 'Automate First', icon: '🤖' },
                  { id: 'focus', label: 'Focus on Top', icon: '🎯' },
                  { id: 'diverse', label: 'Build Diverse', icon: '🌈' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveRecruiterTab(tab.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${activeRecruiterTab === tab.id
                      ? 'bg-white border-white text-[#000080]'
                      : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                      }`}
                  >
                    <span className="text-2xl">{tab.icon}</span>
                    <span className="font-black uppercase tracking-widest text-sm">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-[3rem] blur-3xl pointer-events-none"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl border-2 border-white/10 rounded-[3rem] p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-center">
                {activeRecruiterTab === 'automate' && (
                  <div className="animate-fade-in">
                    <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-4">Phase One</div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                      Automate interviews with AI
                    </h3>
                    <p className="text-neutral-400 font-medium leading-relaxed">
                      Let the system handle screening. Structured questions. Consistent evaluation. Real-time scoring. You
                      get the best candidates ready for conversation.
                    </p>
                  </div>
                )}
                {activeRecruiterTab === 'focus' && (
                  <div className="animate-fade-in">
                    <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-4">Phase Two</div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                      Precision in Ranking
                    </h3>
                    <p className="text-neutral-400 font-medium leading-relaxed">
                      AI-powered ranking identifies the best matches instantly. Save time on screening. Connect with candidates
                      who have the right skills and potential for success.
                    </p>
                  </div>
                )}
                {activeRecruiterTab === 'diverse' && (
                  <div className="animate-fade-in">
                    <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-4">Phase Three</div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                      Hire Bias-Free
                    </h3>
                    <p className="text-neutral-400 font-medium leading-relaxed mb-8">
                      Reduce unconscious bias. Expand your talent pool. Hire the best people, not the most familiar ones.
                    </p>
                    <button className="inline-flex items-center gap-3 bg-white text-[#000080] font-black py-4 px-8 rounded-2xl uppercase tracking-widest text-xs hover:scale-105 transition-all">
                      Read Case Study <ArrowRight />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* THE SMARTENGINE PROMISE */}
        <section className={`mx-auto max-w-6xl px-6 py-20 lg:py-32 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="text-center mb-16">
            <div className="text-xs sm:text-sm font-black tracking-[0.5em] uppercase text-orange-500 mb-4 text-center">Promise</div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.85] text-center">
              The <span className="text-white/40">Chanix</span> promise
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-400 font-medium">
              We're committed to making hiring better for everyone. Here's our baseline for excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                label: "Faster",
                title: "Months to weeks",
                desc: "Move at the speed of talent. Automated screening means qualified candidates reach you faster. No waiting. No bottlenecks.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                label: "Fairer",
                title: "Level Playing Field",
                desc: "Remove bias from the hiring process. Focus on skills, not background. Give everyone a fair shot at success where talent is the only currency.",
                color: "from-orange-500 to-pink-500"
              }
            ].map((p, i) => (
              <article key={i} className={`group relative rounded-[3rem] border-2 border-white/5 bg-white/5 backdrop-blur-md p-10 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:bg-white/10 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.color} opacity-10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:opacity-20 transition-opacity`}></div>
                <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-6">{p.label}</div>
                <h3 className="text-3xl lg:text-4xl font-black leading-none text-white mb-6 uppercase tracking-tighter">
                  {p.title}
                </h3>
                <p className="text-neutral-400 font-medium leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CANDIDATES SECTION */}
        <section className={`mx-auto max-w-6xl px-6 py-20 lg:py-32 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} id="candidates">
          <div className="bg-gradient-to-br from-white/10 to-transparent p-1 sm:p-2 rounded-[3rem] border-2 border-white/10">
            <div className="bg-[#000080]/80 backdrop-blur-3xl rounded-[2.5rem] p-8 sm:p-16 text-center">
              <div className="text-xs sm:text-sm font-black tracking-[0.5em] uppercase text-orange-500 mb-6">Candidates</div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.85] mb-8">
                Show what you <br /> <span className="text-white/40">can do</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-300 font-medium mb-12">
                Your skills matter more than your background. Prove it. Get matched to roles that fit your real potential.
              </p>

              <div className="flex flex-wrap justify-center gap-4 border-b border-white/10 mb-12 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'showcase', label: 'Showcase Skills' },
                  { id: 'matched', label: 'Get Matched' },
                  { id: 'access', label: 'Global Access' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCandidateTab(tab.id)}
                    className={`whitespace-nowrap px-6 py-4 text-xs font-black uppercase tracking-widest border-b-4 transition-all ${activeCandidateTab === tab.id
                      ? 'border-orange-500 text-white'
                      : 'border-transparent text-white/40 hover:text-white'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="max-w-3xl mx-auto min-h-[200px] flex flex-col justify-center animate-fade-in">
                {activeCandidateTab === 'showcase' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Structured Interviews</h3>
                    <p className="text-neutral-400 font-medium pb-4">No trick questions. No guessing games. Just a fair chance to demonstrate what you know and what you can do.</p>
                    <button className="bg-white text-[#000080] font-black py-4 px-10 rounded-2xl uppercase tracking-widest text-xs hover:scale-105 transition-all">Get Started</button>
                  </div>
                )}
                {activeCandidateTab === 'matched' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Precision Matching</h3>
                    <p className="text-neutral-400 font-medium pb-4">Our AI understands your capabilities beyond your resume. Find roles where you'll truly thrive and make an impact.</p>
                    <button className="bg-white text-[#000080] font-black py-4 px-10 rounded-2xl uppercase tracking-widest text-xs hover:scale-105 transition-all">Find Matches</button>
                  </div>
                )}
                {activeCandidateTab === 'access' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Access Everywhere</h3>
                    <p className="text-neutral-400 font-medium">Break geographical barriers. Connect with companies that value skills over location.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* QUESTIONS + TESTIMONIALS HEADER */}
        <section className={`mx-auto max-w-6xl px-6 py-10 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl text-white">Still have questions?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-300">
            Reach out to our team for a detailed conversation.
          </p>
          <div className="mt-5 flex items-center justify-center">
            <Pill>Contact</Pill>
          </div>
        </section>

        {/* RESULTS / TESTIMONIAL */}
        <section className={`mx-auto max-w-6xl px-6 py-20 lg:py-32 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs sm:text-sm font-black tracking-[0.5em] uppercase text-orange-500 mb-6">Results</div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.85] mb-8">
                The <span className="text-white/40">Real</span> Impact
              </h2>
              <p className="text-lg text-neutral-400 font-medium leading-relaxed">
                Hear from the recruiters and candidates who've experience the seismic shift in hiring with Chanix.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-white/10 rounded-[3rem] blur-2xl group-hover:bg-white/15 transition-all"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl border-2 border-white/10 rounded-[3rem] p-10 shadow-2xl overflow-hidden min-h-[350px] flex flex-col justify-center">
                <div className="flex gap-1 text-orange-500 mb-8">
                  {'★'.repeat(reviews[currentReview].rating)}
                </div>
                <p className="text-xl sm:text-2xl font-black text-white italic tracking-tight leading-snug mb-10">
                  "{reviews[currentReview].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl shadow-inner">
                    {reviews[currentReview].avatar}
                  </div>
                  <div>
                    <div className="font-black text-white uppercase tracking-wider text-sm">{reviews[currentReview].author}</div>
                    <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mt-1">{reviews[currentReview].role}</div>
                  </div>
                </div>

                <div className="mt-12 flex gap-3">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`h-1.5 rounded-full transition-all ${index === currentReview ? 'w-12 bg-orange-500' : 'w-3 bg-white/10 hover:bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={`mx-auto max-w-6xl px-6 py-20 lg:py-32 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="relative rounded-[4rem] bg-white overflow-hidden p-12 sm:p-24 text-center group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-[#000080] uppercase leading-[0.85] mb-8">
                Join the <br /> <span className="text-orange-500">movement</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg sm:text-xl text-[#000080]/60 font-bold mb-12">
                Chanix – where skills meet opportunity. Start hiring smarter today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/Signup" className="w-full sm:w-auto bg-[#000080] text-white font-black py-6 px-12 rounded-3xl uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                  GET STARTED NOW
                </Link>
                <button className="w-full sm:w-auto border-4 border-[#000080] text-[#000080] font-black py-5 px-12 rounded-3xl uppercase tracking-widest hover:bg-[#000080]/5 transition-all">
                  BOOK A DEMO
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-white/5 text-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
              {/* Company Info */}
              <div className="space-y-6">
                <div className="text-3xl font-black tracking-tighter uppercase">Chanix</div>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                  Smarter interviews. Faster hiring. Fairer outcomes. The future of AI recruitment is here.
                </p>
              </div>

              {/* Links Sections */}
              {[
                {
                  title: "Product",
                  links: ["AI Interviews", "Matching", "Analytics", "API", "Integrations"]
                },
                {
                  title: "Company",
                  links: ["About Us", "Careers", "Blog", "Press", "Contact"]
                },
                {
                  title: "Resources",
                  links: ["Documentation", "Help Center", "Community", "Privacy", "Terms"]
                }
              ].map((group) => (
                <div key={group.title} className="space-y-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">{group.title}</h3>
                  <ul className="space-y-4">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-neutral-400 hover:text-white font-medium transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="border-t border-white/5 pt-12">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">Stay updated</h3>
                  <p className="text-sm text-neutral-400 font-medium">Get the latest updates on AI recruitment trends.</p>
                </div>
                <div className="flex w-full lg:w-auto gap-3">
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="flex-1 lg:w-80 rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-orange-500 transition-all"
                  />
                  <button className="bg-white text-[#000080] font-black px-8 py-4 rounded-2xl text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                    READY
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                © 2024 Chanix. All rights reserved.
              </p>
              <div className="flex gap-8">
                {["Privacy", "Terms", "Cookies"].map((link) => (
                  <a key={link} href="#" className="text-xs font-bold text-neutral-500 hover:text-white uppercase tracking-widest transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
