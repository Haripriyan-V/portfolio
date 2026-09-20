import { motion } from 'framer-motion';
import { FileDown, ArrowRight, ShieldCheck } from 'lucide-react';
import profile from '../config/profile';

export default function ResumeCTA() {
  return (
    <section className="py-16 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 shadow-2xl text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-8"
        >
          {/* Text details */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Engineering Profile</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Want to know more about my experience?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Download my resume to explore my skills, projects, internships, certifications, and achievements in a concise, recruiter-ready format.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="shrink-0 flex flex-wrap items-center justify-center sm:justify-end gap-3">
            <a
              href={profile.resume}
              download="Haripriyan_V_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-950/50"
            >
              <FileDown className="w-5 h-5" />
              <span>Download Resume</span>
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:text-white transition-colors"
            >
              <span>View Resume</span>
            </a>
          </div>

          {/* Ambient Glow */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
