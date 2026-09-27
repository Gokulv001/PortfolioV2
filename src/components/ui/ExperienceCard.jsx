import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ExperienceCard({ experience }) {
  return (
    <div className="relative pl-6 sm:pl-10 pb-8 sm:pb-12 group last:pb-0">
      {/* Timeline Line */}
      <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 group-last:hidden"></div>

      {/* Timeline Dot */}
      <div className="absolute left-0 sm:left-2 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-navy-900 border-2 border-primary-500 shadow-md shadow-primary-500/20 flex items-center justify-center z-10">
        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
      </div>

      {/* Card Content */}
      <div className="bg-white dark:bg-navy-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-primary-950/20 transition-all">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-slate-100 dark:border-slate-800/80 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {experience.company}
              </span>
              <StatusBadge status="ACTIVE EMPLOYMENT" text="Current Role" size="xs" />
            </div>
            <p className="text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-400">
              {experience.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
              <Calendar className="w-3.5 h-3.5 text-primary-500" />
              {experience.period}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
              <MapPin className="w-3.5 h-3.5 text-primary-500" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
          {experience.summary}
        </p>

        {/* Responsibilities list */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">
            Core Responsibilities & Technical Contributions
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech badges */}
        <div>
          <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
            Stack Applied
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
