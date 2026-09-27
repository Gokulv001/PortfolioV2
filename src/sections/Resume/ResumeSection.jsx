import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Eye, CheckCircle2, Briefcase, GraduationCap, Award, X } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';

export default function ResumeSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="py-20 sm:py-28 bg-slate-50/60 dark:bg-navy-900/50 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <Container>
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-8 sm:p-12 text-center">
          {/* Background subtle gradient */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 mb-6 border border-primary-100 dark:border-primary-900 shadow-sm">
            <FileText className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Want to know more about my experience?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            View or download my resume to learn more about my skills, experience and projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => setShowModal(true)}
              variant="outline"
              size="lg"
              icon={Eye}
            >
              View Resume
            </Button>

            <Button
              href={personalInfo.resumeUrl}
              target="_blank"
              download="Gokulraj-V-Resume.pdf"
              variant="primary"
              size="lg"
              icon={Download}
            >
              Download Resume
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>FORMAT: PDF (Verified)</span>
            <span>•</span>
            <span>LAST UPDATED: 2025</span>
            <span>•</span>
            <span>MERN & MOBILE SPECIALIST</span>
          </div>
        </div>
      </Container>

      {/* Interactive Resume Modal Viewer */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-950">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Gokulraj V - Professional Resume
                </h3>
                <p className="text-xs text-primary-600 dark:text-primary-400">
                  Full Stack MERN Developer | Web & Mobile App Developer
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  download="Gokulraj-V-Resume.pdf"
                  size="sm"
                  variant="primary"
                  icon={Download}
                >
                  Download PDF
                </Button>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content - Structured Resume Details */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {/* Header section */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">GOKULRAJ V</h2>
                <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mt-1">
                  Full Stack MERN Developer • Web & Mobile Application Developer
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Erode, Tamil Nadu | Softye Technologies | {personalInfo.contact.email}
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  Executive Summary
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Full Stack Developer specializing in modern web and mobile application development using React, React Native, TypeScript, Node.js, Express.js and MongoDB. Experienced in building enterprise SaaS platforms, automated invoice & billing engines, and PG management ecosystems at Softye Technologies.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  Professional Experience
                </h4>
                <div className="bg-slate-50 dark:bg-navy-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>Softye Technologies — MERN Stack Developer</span>
                    <span className="text-xs text-primary-600 font-mono">Jan 2025 – Present</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <li>Full-stack web application development with React, Node.js, Express.js & MongoDB</li>
                    <li>Cross-platform mobile application engineering using React Native and Expo</li>
                    <li>Engineered business applications: SoftyeOne and Softye PG Management</li>
                    <li>Built secure RESTful APIs, Postman automated test suites, and MongoDB data pipelines</li>
                    <li>Agile/Scrum workflows with Git version control and Azure DevOps boards</li>
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  Technical Expertise
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-50 dark:bg-navy-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">Web & Frontend</strong>
                    <span>React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5, CSS3</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">Mobile Development</strong>
                    <span>React Native, Expo, Android Application Development, Responsive UI</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">Backend & Database</strong>
                    <span>Node.js, Express.js, REST APIs, MongoDB, Mongoose ODM, JWT Auth</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">Tools & Workflow</strong>
                    <span>Git, GitHub, Postman API Testing, Azure DevOps, Agile / Scrum</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-950 flex justify-end gap-3">
              <Button onClick={() => setShowModal(false)} variant="secondary" size="sm">
                Close
              </Button>
              <Button
                href={personalInfo.resumeUrl}
                target="_blank"
                download="Gokulraj-V-Resume.pdf"
                size="sm"
                icon={Download}
              >
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
