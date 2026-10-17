import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  target,
  rel,
  download,
  type = 'button',
  disabled = false,
  ariaLabel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs sm:text-sm gap-1.5 min-h-[38px]",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2 min-h-[44px]",
    lg: "px-6 py-3 text-base sm:text-lg gap-2.5 min-h-[48px]"
  };

  const variantStyles = {
    primary: "bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 focus:ring-primary-500 border border-transparent",
    secondary: "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700/60 focus:ring-slate-500",
    outline: "border border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-primary-500",
    ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 focus:ring-slate-500",
    accent: "bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-600/25 border border-transparent"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} aria-label={ariaLabel} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
