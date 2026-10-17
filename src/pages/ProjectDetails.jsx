import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Monitor, 
  Smartphone, 
  CheckCircle2, 
  Cpu, 
  AlertTriangle, 
  Wrench, 
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { projects } from '../data/projects';
import Container from '../components/common/Container';
import StatusBadge from '../components/ui/StatusBadge';
import ProjectVisual from '../components/ui/ProjectVisual';
import Button from '../components/common/Button';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <main className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <Container className="text-center">
          <div className="max-w-md mx-auto bg-white dark:bg-navy-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Project Not Found</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              The project case study you are looking for does not exist or may have been moved.
            </p>
            <Button to="/#projects" icon={ArrowLeft}>
              Back to All Projects
            </Button>
          </div>
        </Container>
      </main>
    );
  }

  const isDev = project.status === 'IN DEVELOPMENT';

  return (
    <main className="pt-28 pb-20 transition-colors">
      <Container>
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects Overview</span>
          </Link>
        </div>

        {/* Project Hero Banner */}
        <div className="relative rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg overflow-hidden mb-12">
          {/* Subtle gradient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <StatusBadge status={project.status} size="md" />
              {project.badges?.map((badge, idx) => (
                <StatusBadge key={idx} text={badge} size="xs" />
              ))}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              {project.subtitle}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {project.overview || project.description}
            </p>

            {/* Quick Meta Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                  My Engineering Role
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                  Target Platforms
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {project.platforms?.join(' & ')}
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                  Current Status
                </span>
                <span className={`text-sm font-bold ${isDev ? 'text-amber-500' : 'text-emerald-500'}`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Links if available (Never show fake URLs) */}
            {(project.github || project.liveDemo) && (
              <div className="flex flex-wrap items-center gap-3 mt-6">
                {project.github && (
                  <Button
                    href={project.github}
                    target="_blank"
                    icon={Github}
                    variant="secondary"
                    size="sm"
                  >
                    View Code Repository
                  </Button>
                )}
                {project.liveDemo && (
                  <Button
                    href={project.liveDemo}
                    target="_blank"
                    icon={ExternalLink}
                    variant="primary"
                    size="sm"
                  >
                    Launch Live System
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Visual Mockups Showcase */}
        <div className="mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-primary-500" />
            <span>Interactive Application Preview</span>
          </h2>
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900">
            <ProjectVisual projectId={project.id} className="min-h-[300px] sm:min-h-[380px]" />
          </div>
        </div>

        {/* Web Application vs Mobile Application Breakdown */}
        {(project.webDetails || project.mobileDetails) && (
          <div className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Platform Architecture Breakdown
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.webDetails && (
                <div className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                    <Monitor className="w-5 h-5" />
                    <h3>{project.webDetails.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.webDetails.description}
                  </p>

                  <h4 className="text-xs uppercase font-bold text-slate-400 mb-2">Key Functional Highlights</h4>
                  <ul className="space-y-2">
                    {project.webDetails.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.mobileDetails && (
                <div className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-400 font-bold text-lg mb-3">
                    <Smartphone className="w-5 h-5" />
                    <h3>{project.mobileDetails.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.mobileDetails.description}
                  </p>

                  <h4 className="text-xs uppercase font-bold text-slate-400 mb-2">Key Functional Highlights</h4>
                  <ul className="space-y-2">
                    {project.mobileDetails.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Key Features Matrix */}
        <div className="mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Implemented Features & Modules
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Implementation & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-lg mb-3">
              <AlertTriangle className="w-5 h-5" />
              <h3>Engineering Challenges</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.challenges || "Solving performance bottlenecks, synchronizing cross-platform state across devices, and maintaining rock-solid schema validation."}
            </p>
          </div>

          <div className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-3">
              <Wrench className="w-5 h-5" />
              <h3>Implementation & Strategy</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.implementation || "Implemented modular component structures with clean separation of concerns, defensive API error handling, and optimized database indexing."}
            </p>
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="bg-slate-50 dark:bg-navy-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
          <h3 className="text-base font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
            Technologies Applied in this Project
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-medium bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-8">
          <Button to="/#projects" variant="outline" icon={ArrowLeft}>
            Back to All Projects
          </Button>

          <Button to="/#contact" variant="primary">
            Discuss a Similar Project
          </Button>
        </div>
      </Container>
    </main>
  );
}
