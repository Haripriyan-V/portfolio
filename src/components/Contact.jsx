import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import profile from '../config/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Safe mailto trigger to client mail application
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Haripriyan,\n\n${formData.message}\n\nSender: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  const contactChannels = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      subtext: 'Direct communication',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/hari-priyan-v',
      href: profile.linkedin,
      icon: Linkedin,
      subtext: 'Professional network',
    },
    {
      label: 'GitHub',
      value: 'github.com/Haripriyan-V',
      href: profile.github,
      icon: Github,
      subtext: 'Code repositories & projects',
    },
    {
      label: 'LeetCode',
      value: 'leetcode.com/u/jzBa8sTZM1',
      href: profile.leetcode,
      icon: Code2,
      subtext: '200+ Solved algorithmic problems',
    },
  ];

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Direct Reach
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            I'm open to internship opportunities, collaborative projects, hackathons, and conversations around AI, ML, Data Science, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Channels Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-semibold text-slate-200">
              Contact &amp; Profiles
            </h3>

            <div className="space-y-3">
              {contactChannels.map((channel, i) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={i}
                    href={channel.href}
                    target={channel.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {channel.label}
                      </p>
                      <p className="text-sm font-medium text-white truncate group-hover:text-cyan-400 transition-colors">
                        {channel.value}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {channel.subtext}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 space-y-6"
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the form below to reach me directly via your default email client.
                </p>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message Prepared</p>
                    <p className="text-xs text-emerald-400/90 mt-0.5">
                      Your mail client has been opened with your message. Thank you for reaching out!
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-semibold uppercase font-mono text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-hidden transition-colors ${
                      errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold uppercase font-mono text-slate-300">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-hidden transition-colors ${
                      errors.email ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase font-mono text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Discuss an internship opportunity, project collaboration, or technical inquiry..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-hidden transition-colors resize-y ${
                      errors.message ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
