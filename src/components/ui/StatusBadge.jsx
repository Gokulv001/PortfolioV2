import React from 'react';

export default function StatusBadge({ status, text, size = 'sm', className = '' }) {
  const normalized = (status || text || '').toUpperCase();

  const isDev = normalized.includes('DEV') || normalized.includes('DEVELOPING');
  const isCompleted = normalized.includes('COMPLET') || normalized.includes('PRODUCTION');
  const isWeb = normalized === 'WEB' || normalized === 'WEB APPLICATION';
  const isMobile = normalized === 'MOBILE' || normalized === 'MOBILE APPLICATION';

  let badgeStyle = "bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
  let dotColor = "bg-slate-400";
  let showDot = false;

  if (isDev) {
    badgeStyle = "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30 dark:border-amber-500/30";
    dotColor = "bg-amber-500";
    showDot = true;
  } else if (isCompleted) {
    badgeStyle = "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 dark:border-emerald-500/30";
    dotColor = "bg-emerald-500";
    showDot = true;
  } else if (isWeb) {
    badgeStyle = "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/25 dark:border-blue-500/25";
  } else if (isMobile) {
    badgeStyle = "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/25 dark:border-purple-500/25";
  }

  const sizeStyle = size === 'xs' 
    ? 'text-[10px] px-2 py-0.5' 
    : size === 'md' 
      ? 'text-xs sm:text-sm px-3 py-1 font-semibold' 
      : 'text-xs px-2.5 py-1 font-medium';

  const displayText = text || (isDev ? 'In Development' : isCompleted ? 'Completed' : normalized);

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border tracking-wide uppercase ${sizeStyle} ${badgeStyle} ${className}`}>
      {showDot && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
        </span>
      )}
      {displayText}
    </span>
  );
}
