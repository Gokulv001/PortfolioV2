import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink,
  Monitor, 
  Smartphone, 
  Receipt, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { projects } from '../../data/projects';
import StatusBadge from '../../components/ui/StatusBadge';
import ProjectVisual from '../../components/ui/ProjectVisual';
import Button from '../../components/common/Button';

export default function FeaturedProjects() {
  const mainProject = projects.find(p => p.id === 'softyeone');
  if (!mainProject) return null;

  return (
    <div className="mb-16">
      <div className="relative rounded-3xl bg-gradient-to-b from-white to-slate-50 dark:from-navy-900 dark:to-navy-950 border-2 border-primary-500/30 dark:border-primary-500/20 shadow-xl overflow-hidden p-6 sm:p-10">
        {/* Flagship Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Flagship Platform</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <Monitor className="w-3.5 h-3.5" />
              WEB APPLICATION
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              <Smartphone className="w-3.5 h-3.5" />
              MOBILE APPLICATION
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Info Side */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {mainProject.title}
              </h3>
              <p className="text-base sm:text-lg font-bold text-primary-600 dark:text-primary-400 mt-1">
                {mainProject.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {mainProject.description}
            </p>

            {/* Core Feature Matrix */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Integrated Business Modules
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {mainProject.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 p-2 rounded-lg border border-slate-200/80 dark:border-slate-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                    <span className="truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {mainProject.technologies.map(tech => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  to={`/project/${mainProject.id}`}
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Explore SoftyeOne Case Study
                </Button>

                {mainProject.liveDemo && (
                  <Button
                    href={mainProject.liveDemo}
                    target="_blank"
                    size="md"
                    variant="outline"
                    icon={ExternalLink}
                  >
                    Visit SoftyeOne.com
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Visual Showcase Side */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
              <ProjectVisual projectId="softyeone" className="min-h-[280px] sm:min-h-[340px]" />
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-900 dark:text-white">SoftyeOne Web</div>
                <div className="text-[11px] text-slate-500">React Admin & GST Billing</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-900 dark:text-white">SoftyeOne Mobile</div>
                <div className="text-[11px] text-slate-500">React Native Field Billing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
