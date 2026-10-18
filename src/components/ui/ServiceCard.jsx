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
import Card3DTilt from '../3d/Card3DTilt';

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
    <Card3DTilt maxTilt={12} scale={1.03} glareOpacity={0.15} className="h-full">
      <div className="group relative h-full bg-white dark:bg-navy-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-sm hover:shadow-2xl dark:hover:shadow-primary-950/40 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 flex flex-col justify-between">
        <div style={{ transform: 'translateZ(20px)' }}>
          {/* 3D Elevated Service Icon */}
          <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-115 group-hover:rotate-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 mb-5 shadow-sm">
            <Icon className="w-6 h-6 transition-transform duration-300" />
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        <div
          className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between"
          style={{ transform: 'translateZ(12px)' }}
        >
          <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-500">
            Service #{String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-primary-500 group-hover:scale-125 transition-all"></span>
        </div>
      </div>
    </Card3DTilt>
  );
}
