import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Layers, Wrench, Check, BarChart3, Database, Cpu } from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2,
  BrainCircuit,
  BarChart3,
  Layers,
  Database,
  Cpu,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Capabilities &amp; Tooling
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Categorized technical stack focused on machine learning algorithms, full-stack software development, and core engineering fundamentals.
          </p>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.iconName] || Code2;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-xl border bg-gradient-to-br ${category.accentColor}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/70">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        skill.highlight
                          ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <Check className="w-3 h-3 text-cyan-400 opacity-75" />
                      <span>{skill.name}</span>
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
