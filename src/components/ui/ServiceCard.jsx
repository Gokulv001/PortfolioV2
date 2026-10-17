import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  Code2, 
  TabletSmartphone, 
  Server, 
  Workflow, 
  LayoutDashboard, 
  Cloud, 
  Receipt 
} from 'lucide-react';

export default function ServiceCard({ service, index }) {
  const iconMap = {
    Globe,
    Smartphone,
    Layers,
    Code2,
    TabletSmartphone,
    Server,
    Workflow,
    LayoutDashboard,
    Cloud,
    Receipt
  };

  const Icon = iconMap[service.icon] || Code2;

  return (
    <div className="group relative bg-white dark:bg-navy-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-sm hover:shadow-xl dark:hover:shadow-primary-950/30 hover:border-primary-500/40 dark:hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 mb-5">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
        <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-500">
          Service #{String(index + 1).padStart(2, '0')}
        </span>
        <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
      </div>
    </div>
  );
}
