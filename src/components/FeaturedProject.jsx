import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, CheckCircle2, Bot, FileSearch, Compass, BarChart3 } from 'lucide-react';
import { featuredProject } from '../data/projects';

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <p className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Portfolio Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured AI Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            My primary full-stack production application integrating natural language processing, ATS resume evaluation, and adaptive career intelligence.
          </p>
        </div>

        {/* Highlighted Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-2xl overflow-hidden"
        >
          {/* Subtle Glow Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Project Details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{featuredProject.badge}</span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-sm sm:text-base text-cyan-300/90 font-medium">
                  {featuredProject.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Key Features Grid */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Core Module Capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {featuredProject.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>View GitHub Repo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: High-Fidelity UI / Architecture Dashboard Mockup */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-5 space-y-4 shadow-xl">
                {/* Mockup Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-slate-200">Disha AI System Live</span>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400">Deployed on Vercel</span>
                </div>

                {/* Simulated Platform Metric Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400">
                      <FileSearch className="w-3.5 h-3.5" />
                      <span className="font-medium">ATS Analyzer</span>
                    </div>
                    <p className="text-xl font-bold text-white">93 / 100</p>
                    <p className="text-[11px] text-slate-400">Deterministic Rubric</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span className="font-medium">Skill Gap Engine</span>
                    </div>
                    <p className="text-xl font-bold text-white">5 Tiers</p>
                    <p className="text-[11px] text-slate-400">Benchmark Radar</p>
                  </div>
                </div>

                {/* Simulated Chatbot / AI Interface preview */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    <span>360° AI Learning Assistant</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono">
                    "Analyzed student profile for Target Role: Full-Stack Engineer. Generated 4-phase adaptive learning roadmap with Python &amp; Django milestones."
                  </p>
                </div>

                {/* Architecture Pipeline Tags */}
                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-900">
                  <span>BACKEND: Django REST API</span>
                  <span>DATABASE: PostgreSQL</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
