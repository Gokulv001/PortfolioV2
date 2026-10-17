import React, { useState, useMemo } from 'react';
import { projects } from '../../data/projects';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/ui/ProjectCard';
import ProjectFilters from './ProjectFilters';
import FeaturedProjects from './FeaturedProjects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => {
      if (activeFilter === 'web') {
        return project.category.includes('web');
      }
      if (activeFilter === 'mobile') {
        return project.category.includes('mobile');
      }
      if (activeFilter === 'fullstack') {
        return project.category.includes('fullstack');
      }
      if (activeFilter === 'in-development') {
        return project.status === 'IN DEVELOPMENT';
      }
      return true;
    });
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50/50 dark:bg-navy-900/30 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <Container>
        <SectionTitle
          eyebrow="PROVEN WORK & DELIVERIES"
          title="Featured Projects"
          subtitle="Explore business management platforms, billing engines, PG systems, and responsive applications engineered for production."
        />

        {/* Top Flagship Feature */}
        {activeFilter === 'all' && <FeaturedProjects />}

        {/* Dynamic Category Filters */}
        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state if any filter has 0 results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-slate-600 dark:text-slate-400">
              No projects found in this category.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-3 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
            >
              Reset to All Projects
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
