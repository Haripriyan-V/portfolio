import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Calendar, School, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'B.E. Computer Science & Engineering (AI & ML)',
      institution: 'V.S.B Engineering College, Karur',
      period: 'Currently Pursuing — III-Year (Expected Graduation: 2028)',
      score: 'CGPA: 8.20',
      status: 'Undergraduate Degree',
      highlights: [
        'Specialization in Artificial Intelligence & Machine Learning',
        'Strong academic standing with active focus on Data Science, DSA, and Web Engineering',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (HSC) & SSLC',
      institution: 'King Universe Matriculation Higher Secondary School',
      period: '2022 – 2024',
      score: 'Percentage: 85%',
      status: 'Secondary & Higher Secondary Education',
      highlights: [
        'Rigorous foundation in Mathematics, Physics, and Computer Science',
      ],
    },
  ];

  const leadershipList = [
    {
      role: 'Student Ambassador',
      organization: 'Gidy.ai',
      badge: 'AI & Learning Community',
      description:
        'Promoted AI-focused learning initiatives, workshops, and webinars, supporting community engagement with emerging technologies.',
    },
    {
      role: 'Student Partner',
      organization: 'Internshala (ISP)',
      badge: 'Campus Leadership',
      description:
        'Represented Internshala on campus, promoting internships, training programs, and career development opportunities.',
    },
  ];

  return (
    <section id="education" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Academic Background &amp; Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Community
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Verified academic qualification in Computer Science (AI &amp; ML) alongside campus leadership and ambassador programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Cards (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-1">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Formal Education
              </h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400">
                        {edu.status}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-0.5">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-slate-300 font-medium mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="self-start sm:self-end text-left sm:text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-slate-400">
                    {edu.period}
                  </p>

                  <div className="space-y-1.5 pt-1 border-t border-slate-800/70">
                    {edu.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership & Community Involvement (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-1">
              <Users className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Leadership &amp; Community
              </h3>
            </div>

            <div className="space-y-4">
              {leadershipList.map((lead, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-400">
                        {lead.badge}
                      </span>
                      <h4 className="text-base font-bold text-white mt-0.5">
                        {lead.role}
                      </h4>
                      <p className="text-sm text-slate-300 font-medium">
                        {lead.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {lead.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
