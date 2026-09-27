import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export default function SocialLinks({ className = '', iconSize = 'w-5 h-5', variant = 'default' }) {
  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail
  };

  const getStyle = () => {
    if (variant === 'pill') {
      return "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-primary-500 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors";
    }
    return "w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-navy-900/80 hover:bg-primary-50 dark:hover:bg-primary-950/40 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-200 shadow-sm";
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {personalInfo.socials.map((social) => {
        const IconComponent = iconMap[social.icon] || Mail;
        return (
          <a
            key={social.name}
            href={social.url}
            target={social.name === 'Email' ? undefined : '_blank'}
            rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
            aria-label={social.label}
            title={social.label}
            className={getStyle()}
          >
            <IconComponent className={iconSize} />
            {variant === 'pill' && <span>{social.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
