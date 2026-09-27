import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  Sparkles,
  Clock
} from 'lucide-react';
import { projects } from '../../data/projects';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import StatusBadge from '../../components/ui/StatusBadge';
import ProjectVisual from '../../components/ui/ProjectVisual';
import Button from '../../components/common/Button';

export default function CurrentlyDeveloping() {
  const activeProjects = projects.filter(p => p.status === 'IN DEVELOPMENT');

  return (
    <section id="currently-developing" className="py-20 sm:py-28 relative overflow-hidden transition-colors">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <Container>
        <SectionTitle
          eyebrow="ACTIVE ENGINEERING"
          title="Currently Developing"
          subtitle="Projects actively under architecture and iterative development at Softye Technologies, spanning full-stack web and mobile apps."
        />

        <div className={`grid gap-8 lg:gap-10 ${activeProjects.length === 1 ? 'max-w-3xl mx-auto grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {activeProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-navy-900 rounded-2xl border-2 border-slate-200/90 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-amber-500/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Visual Mockup Header */}
              <div className="relative overflow-hidden bg-slate-900">
                <ProjectVisual projectId={project.id} />
                
                {/* Status bar */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-amber-400 border border-amber-500/30 backdrop-blur shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>In Active Development</span>
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Title & Platforms */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-primary-600 dark:text-primary-400">
                    {project.subtitle}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                      <Monitor className="w-3 h-3" />
                      Web
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-900/50">
                      <Smartphone className="w-3 h-3" />
                      Mobile
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  <Link to={`/project/${project.id}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {project.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Web & Mobile Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200/80 dark:border-slate-800/80 mb-6">
                  {project.webDetails && (
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white mb-2">
                        <Monitor className="w-3.5 h-3.5 text-blue-500" />
                        <span>Web Application</span>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                        {project.webDetails.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-primary-500 font-bold">•</span>
                            <span className="line-clamp-2">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.mobileDetails && (
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white mb-2">
                        <Smartphone className="w-3.5 h-3.5 text-purple-500" />
                        <span>Mobile Application</span>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                        {project.mobileDetails.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-purple-500 font-bold">•</span>
                            <span className="line-clamp-2">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 group/link"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
