import React from 'react';
import { projectFilters } from '../../data/projects';

export default function ProjectFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {projectFilters.map((filter) => {
        const isActive = activeFilter === filter.id;
        return (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none border focus:outline-none focus:ring-2 focus:ring-primary-500/50 ${
              isActive
                ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-600/25'
                : 'bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-primary-400 dark:hover:border-primary-600 hover:bg-slate-50 dark:hover:bg-slate-800/60'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
