import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Monitor, CheckCircle, ExternalLink, Github } from 'lucide-react';
import StatusBadge from './StatusBadge';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project }) {
  const isDev = project.status === 'IN DEVELOPMENT';

  return (
    <article className="group flex flex-col bg-white dark:bg-navy-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-primary-950/40 hover:border-primary-500/40 dark:hover:border-primary-500/30 transition-all duration-300">
      {/* Project Visual / Mockup Preview */}
      <div className="relative overflow-hidden bg-slate-900">
        <ProjectVisual projectId={project.id} />
        
        {/* Platform overlay tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-20">
          {project.platforms?.map((platform) => (
            <span
              key={platform}
              className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur px-2 py-0.5 rounded-md border border-slate-700/60"
            >
              {platform === 'Mobile' ? (
                <Smartphone className="w-3 h-3 text-purple-400" />
              ) : (
                <Monitor className="w-3 h-3 text-blue-400" />
              )}
              {platform}
            </span>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Status / Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <StatusBadge status={project.status} size="xs" />
          {project.badges?.map((badge, idx) => {
            if (badge === 'CURRENTLY DEVELOPING' || badge === 'CURRENT DEVELOPMENT') return null;
            return <StatusBadge key={idx} text={badge} size="xs" />;
          })}
        </div>

        {/* Project Title & Subtitle */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            <Link to={`/project/${project.id}`} className="hover:underline focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs font-medium text-primary-600 dark:text-primary-400 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Key Features Preview */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Key Features
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.features.slice(0, 4).map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                >
                  <CheckCircle className="w-3 h-3 text-primary-500 shrink-0" />
                  {feature}
                </span>
              ))}
              {project.features.length > 4 && (
                <span className="text-xs text-slate-500 dark:text-slate-400 self-center pl-1">
                  +{project.features.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono text-slate-500 self-center">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between gap-3">
            <Link
              to={`/project/${project.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 focus:outline-none group/btn"
              aria-label={`View details for ${project.title}`}
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>

            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  title="View Live Application"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
