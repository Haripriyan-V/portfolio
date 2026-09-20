import { motion } from 'framer-motion';
import { Trophy, Code2, ExternalLink, Flame, CheckCircle, BrainCircuit } from 'lucide-react';
import profile from '../config/profile';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Milestones &amp; Dedication
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements &amp; Problem Solving
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Demonstrated commitment to algorithmic thinking, foundational computer science concepts, and continuous coding practice.
          </p>
        </div>

        {/* Highlighted Problem Solving Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900/90 to-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all shadow-xl space-y-6"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
                    Competitive Coding &amp; DSA
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    200+ LeetCode Problems Solved
                  </h3>
                </div>
              </div>

              {/* View LeetCode Button */}
              {profile.leetcode && (
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs"
                >
                  <span>View LeetCode</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Content text */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Consistently practicing Data Structures and Algorithms to strengthen problem-solving skills, optimize algorithmic time and space complexity, and build strong computer science fundamentals.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <p className="text-xs font-mono text-slate-400 uppercase">Focus Areas</p>
                <p className="text-sm font-semibold text-white">Dynamic Programming &amp; Graphs</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <p className="text-xs font-mono text-slate-400 uppercase">Languages Used</p>
                <p className="text-sm font-semibold text-white">Java, Python</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <p className="text-xs font-mono text-slate-400 uppercase">Goal</p>
                <p className="text-sm font-semibold text-cyan-400">Time &amp; Space Complexity</p>
              </div>
            </div>
          </motion.div>

          {/* Right Supporting Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 rounded-3xl p-6 bg-slate-900/60 border border-slate-800 space-y-4 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">200+</p>
              <p className="text-sm font-semibold text-slate-300 mt-0.5">Algorithms Solved</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Regularly practicing Data Structures &amp; Algorithms to improve logical thinking and coding problem-solving skills.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
