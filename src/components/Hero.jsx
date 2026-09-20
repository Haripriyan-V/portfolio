import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Github, Linkedin, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import profile from '../config/profile';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient radial gradients (subtle, non-distracting) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Recruiter Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300">
                {profile.status}
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider uppercase text-cyan-400 font-mono">
                Candidate Profile
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm{' '}
                <span className="gradient-text-cyan">
                  {profile.name}
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-300">
                {profile.role}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Building intelligent applications with AI, machine learning, data science, and modern web technologies.
            </p>

            {/* Domain Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Software Development'].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-800/80 border border-slate-700/60 text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all focus:outline-hidden"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profile.resume}
                download="Haripriyan_V_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700 hover:border-slate-500 hover:text-white rounded-lg transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 hover:bg-cyan-900/40 rounded-lg transition-all"
              >
                <span>View PDF</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Haripriyan V GitHub Profile"
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Haripriyan V LinkedIn Profile"
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Haripriyan V LeetCode Profile"
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: AI / Code Technical Graphic (No stock photos) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Interactive Terminal / Neural Network Mockup Card */}
            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-400 ml-1">neural_pipeline.py</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400/80">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>CUDA: ACTIVE</span>
                </div>
              </div>

              {/* Code / Architecture Snippet */}
              <div className="space-y-3 font-mono text-xs leading-relaxed">
                <div className="text-slate-500">
                  # Haripriyan V — AI/ML &amp; Full-Stack Pipeline
                </div>
                <p className="text-slate-300">
                  <span className="text-indigo-400">from</span> core.intelligence{' '}
                  <span className="text-indigo-400">import</span> ResumeAnalyzer, SkillEngine
                </p>
                <p className="text-slate-300">
                  <span className="text-indigo-400">from</span> models.learning{' '}
                  <span className="text-indigo-400">import</span> AdaptiveRoadmap
                </p>

                {/* Model State Pill */}
                <div className="p-3 my-2 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Model Status</span>
                    </span>
                    <span className="text-slate-400">NLP &amp; ATS Ready</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-4/5 rounded-full" />
                  </div>
                </div>

                {/* Algorithmic Insights */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <p className="text-slate-400 text-[10px] uppercase font-sans">LeetCode DSA</p>
                    <p className="text-base font-bold text-white font-sans mt-0.5">200+ Solved</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <p className="text-slate-400 text-[10px] uppercase font-sans">Degree Track</p>
                    <p className="text-base font-bold text-cyan-400 font-sans mt-0.5">B.E. AI &amp; ML</p>
                  </div>
                </div>
              </div>

              {/* Decorative background grid pattern */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
