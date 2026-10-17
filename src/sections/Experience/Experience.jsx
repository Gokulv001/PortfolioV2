import React from 'react';
import { experiences } from '../../data/experience';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ExperienceCard from '../../components/ui/ExperienceCard';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-50/50 dark:bg-navy-900/40 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <Container>
        <SectionTitle
          eyebrow="CAREER PATH & IMPACT"
          title="Work Experience"
          subtitle="Hands-on engineering contributions, real-world SaaS products, and continuous delivery at Softye Technologies."
        />

        {/* Timeline wrapper */}
        <div className="max-w-4xl mx-auto mt-10">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </Container>
    </section>
  );
}
