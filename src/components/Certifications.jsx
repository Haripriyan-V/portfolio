import { motion } from 'framer-motion';
import { Award, BookOpen, Database, Brain, Sparkles, Cloud } from 'lucide-react';
import { certifications } from '../data/certifications';

const iconMap = {
  Database: Database,
  Brain: Brain,
  Sparkles: Sparkles,
  Cloud: Cloud,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Accreditation &amp; Upskilling
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; Learning
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Verified coursework completed with leading engineering academic platforms and industry organizations.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4"
              >
                {/* Top Info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                        {cert.provider}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800 text-slate-400 border border-slate-700/60 shrink-0">
                    {cert.domain}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/50 text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
