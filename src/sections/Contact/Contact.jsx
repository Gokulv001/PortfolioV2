import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone,
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden bg-[#0c0e14] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="GET IN TOUCH"
          title="Contact Me"
          subtitle="Have a project in mind, seeking a Full Stack developer, or want to discuss a business idea? Reach out directly below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-10">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141822]/90 backdrop-blur-md rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Let's Start a Conversation
              </h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Available for full-time roles, contract work, and freelance opportunities in MERN stack web and React Native mobile applications.
              </p>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#181c28] border border-slate-800/80">
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Location</span>
                    <span className="text-sm font-bold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#181c28] border border-slate-800/80 hover:border-blue-500/50 hover:bg-[#1a2030] transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Email Address</span>
                    <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      {personalInfo.contact.email}
                    </span>
                  </div>
                </a>

                {/* GitHub & LinkedIn Profiles */}
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Verified Profiles
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/Gokulv001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#181c28] border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500 transition-colors"
                    >
                      <Github className="w-4 h-4 text-blue-400" />
                      <span>github.com/Gokulv001</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/gokul-v-952552408/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#181c28] border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-slate-300">
                <strong>Response time:</strong> Typically within 24 hours.
              </span>
            </div>
          </div>

          {/* Right Column: Sleek Message Form */}
          <div className="lg:col-span-7 bg-[#141822]/90 backdrop-blur-md rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <span>Send a Message</span>
            </h3>

            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, Gokulraj will review your inquiry and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-3 inline-block text-xs font-bold text-blue-400 underline hover:no-underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[#181c28] border ${
                        errors.name ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                      } text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#181c28] border ${
                        errors.email ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                      } text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#181c28] border border-slate-800 focus:border-blue-500 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project / Role Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-[#181c28] border ${
                        errors.subject ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                      } text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1">{errors.subject}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#181c28] border ${
                      errors.message ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                    } text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
