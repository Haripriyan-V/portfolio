import { motion } from 'framer-motion';
import { GraduationCap, Calendar, School, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import profile from '../config/profile';

export default function About() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const infoCards = [
    {
      label: 'Degree & Specialization',
      value: 'B.E. Computer Science & Engineering (AI & ML)',
      icon: GraduationCap,
      accent: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
    },
    {
      label: 'Academic Standing',
      value: 'Third Year • CGPA: 8.20 (Batch 2024–2028)',
      icon: Calendar,
      accent: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
    },
    {
      label: 'Institution',
      value: 'V.S.B. Engineering College, Karur',
      icon: School,
      accent: 'text-indigo-400 bg-indigo-950/40 border-indigo-500/30',
    },
    {
      label: 'Primary Focus Areas',
      value: 'AI/ML • Data Science • NLP • Full-Stack Software',
      icon: Compass,
      accent: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
    },
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Background &amp; Profile
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="text-lg font-medium text-white leading-relaxed">
                {profile.aboutMeText}
              </p>
              <p className="text-slate-400">
                My work focuses on bridging practical machine learning and user-facing software. Through real-world internship experience at FlyRank.ai and full-scale personal projects, I develop data preprocessing pipelines, integrate NLP models, and architect scalable RESTful APIs.
              </p>
              <p className="text-slate-400">
                I am deeply committed to algorithmic discipline and continuous learning, having solved over 200 DSA problems on LeetCode while maintaining a strong academic foundation in Computer Science and Engineering.
              </p>
            </div>

            {/* Value Points */}
            <div className="space-y-2.5 pt-2">
              {[
                'Practical implementation over theoretical fluff',
                'Full-stack execution from model training to React UI',
                'Strong problem-solving foundation in Data Structures & Algorithms',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-xs"
              >
                <span>Let's Build Something</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${card.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {card.label}
                    </p>
                    <p className="text-sm font-semibold text-white mt-1 leading-snug">
                      {card.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
