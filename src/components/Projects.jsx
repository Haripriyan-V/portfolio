import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Brain, BarChart3, Code2, Keyboard } from 'lucide-react';
import { otherProjects } from '../data/projects';

const projectIcons = {
  'smartquiz-ai': Brain,
  'grade-prediction': BarChart3,
  'dsa-problem-solving': Code2,
  'typing-speed-tester': Keyboard,
};

export default function Projects() {
  return (
    <section className="py-12 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Other Technical &amp; Engineering Projects
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Specialized engineering projects across intelligent quiz engines, machine learning analytics, algorithmic problem solving, and desktop software.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => {
            const Icon = projectIcons[project.id] || FolderGit2;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/50">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Section: Technologies & Action Buttons */}
                <div className="space-y-4 pt-4 border-t border-slate-800/70">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/50 text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons (Hidden if URL is null per recruiter guidelines) */}
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="flex items-center gap-3 pt-1">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
