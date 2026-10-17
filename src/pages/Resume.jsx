import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  MapPin, 
  Mail, 
  Phone,
  Briefcase, 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Star,
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import { experiences } from '../data/experience';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';
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
              FULL STACK DEVELOPER
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary-500" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <a 
                href={`tel:${personalInfo.contact.rawPhone}`} 
                className="flex items-center gap-1.5 hover:text-primary-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-500" />
                {personalInfo.contact.phone}
              </a>
              <span>•</span>
              <a 
                href={`mailto:${personalInfo.contact.email}`} 
                className="flex items-center gap-1.5 hover:text-primary-500 transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-500" />
                {personalInfo.contact.email}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Professional Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-slate-50 dark:bg-navy-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.company} — <span className="font-semibold text-primary-600 dark:text-primary-400">{exp.role}</span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-navy-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {exp.summary}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
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
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-2">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-mono">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Key Projects
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-1.5">
                    <strong className="text-sm font-bold text-slate-900 dark:text-white">
                      {proj.title} <span className="font-normal text-slate-500 dark:text-slate-400">— {proj.subtitle}</span>
                    </strong>
                    <div className="flex items-center gap-1.5">
                      {proj.platforms.map((p) => (
                        <span key={p} className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 5).map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary-500" />
                <span>Education</span>
              </h2>
              <div className="space-y-3">
                {personalInfo.education.map((edu, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold mt-0.5">
                      {edu.field}
                    </p>
                    <div className="flex justify-between items-center text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono">
                      <span>{edu.period}</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-primary-500" />
                <span>Training & Certifications</span>
              </h2>
              <div className="space-y-3">
                {personalInfo.certifications.map((cert, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Strengths */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-primary-500" />
              <span>Additional Strengths</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {personalInfo.strengths.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  • {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
