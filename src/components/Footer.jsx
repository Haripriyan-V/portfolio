import { Github, Linkedin, Code2, Mail, Heart } from 'lucide-react';
import profile from '../config/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Info */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sm font-semibold text-white">
              {profile.name}
            </p>
            <p className="text-xs text-slate-400">
              © {year} {profile.name}. All rights reserved. • Built with React &amp; Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
