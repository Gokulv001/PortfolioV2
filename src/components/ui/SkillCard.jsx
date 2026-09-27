import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Server, 
  Database, 
  Wrench,
  Check
} from 'lucide-react';

export default function SkillCard({ category }) {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-purple-500" />;
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'database':
        return <Database className="w-5 h-5 text-amber-500" />;
      case 'tools':
      default:
        return <Wrench className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-navy-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full">
      {/* Category Header */}
      <div className="flex items-start gap-3.5 mb-4">
        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 shrink-0">
          {getCategoryIcon(category.id)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {category.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skill Pills (no fake percentage ratings) */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200/90 dark:border-slate-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:bg-primary-50/50 dark:hover:bg-primary-950/30 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-125 transition-transform"></span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              {skill.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 pl-1 border-l border-slate-200 dark:border-slate-800">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
