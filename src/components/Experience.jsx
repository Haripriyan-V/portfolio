import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, Building2 } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Work History
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Practical Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Internships focused on machine learning pipeline development, data preprocessing, and software engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-cyan-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl p-6 sm:p-7 bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-4">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-1">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {exp.badge}
                  </span>
                </div>

                {/* Core Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Detailed Highlights */}
                {exp.highlights && (
                  <div className="space-y-2 pt-1">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills Tag Cloud */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
