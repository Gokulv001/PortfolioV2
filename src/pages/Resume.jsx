import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  MapPin, 
  Mail, 
  Briefcase, 
  CheckCircle2, 
  Code2, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import { experiences } from '../data/experience';
import { skillCategories } from '../data/skills';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

export default function Resume() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="pt-28 pb-20 transition-colors">
      <Container>
        {/* Navigation & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <Button
              onClick={handlePrint}
              variant="outline"
              size="sm"
              icon={Printer}
              className="hidden sm:inline-flex"
            >
              Print
            </Button>

            <Button
              href={personalInfo.resumeUrl}
              target="_blank"
              download="Gokulraj-V-Resume.pdf"
              variant="primary"
              size="sm"
              icon={Download}
            >
              Download PDF
            </Button>
          </div>
        </div>

        {/* Paper Container */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-navy-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-8 sm:p-12">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              GOKULRAJ V
            </h1>
            <p className="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400 mt-1">
              Full Stack MERN Developer | Web & Mobile App Developer
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary-500" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-primary-500" />
                {personalInfo.contact.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-primary-500" />
                Softye Technologies (1+ Year)
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Full Stack Developer specializing in modern web and mobile application development using React, React Native, TypeScript, Node.js, Express.js and MongoDB. Experienced across the full software lifecycle at Softye Technologies, architecting scalable SaaS solutions, automated invoice & billing systems, PG management ecosystems, and responsive admin consoles.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Work Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-slate-50 dark:bg-navy-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-navy-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {exp.summary}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-2">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="text-xs px-2 py-0.5 rounded bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-mono">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Deliveries */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Key Production Applications
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <strong className="text-sm text-slate-900 dark:text-white">SoftyeOne Business Platform</strong>
                  <span className="text-[11px] text-primary-600 font-mono">Web + Mobile</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Enterprise business management platform with automated GST/IGST calculations, customer accounts, and mobile operations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <strong className="text-sm text-slate-900 dark:text-white">Softye PG Management System</strong>
                  <span className="text-[11px] text-primary-600 font-mono">Web + Mobile</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Full-cycle PG and co-living platform featuring property room allocation matrix, automated monthly rent cycles, resident meal preferences, and mobile companion app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
