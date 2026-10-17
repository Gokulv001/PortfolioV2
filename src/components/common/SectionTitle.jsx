import React from 'react';

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800/60 shadow-sm ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
          {eyebrow}
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
