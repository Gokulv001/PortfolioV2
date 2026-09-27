import React from 'react';

export default function StatCard({ label, value, subtext, icon: Icon }) {
  return (
    <div className="bg-white dark:bg-navy-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-sm flex items-center gap-4">
      {Icon && (
        <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-900/40 shrink-0">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {value}
        </div>
        <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
          {label}
        </div>
        {subtext && (
          <div className="text-[11px] text-primary-600 dark:text-primary-400 mt-0.5">
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
}
