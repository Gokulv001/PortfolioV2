import React from 'react';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import Experience from '../sections/Experience/Experience';
import CurrentlyDeveloping from '../sections/Development/CurrentlyDeveloping';
import Projects from '../sections/Projects/Projects';
import Services from '../sections/Services/Services';
import ResumeSection from '../sections/Resume/ResumeSection';
import Contact from '../sections/Contact/Contact';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CurrentlyDeveloping />
      <Projects />
      <Services />
      <ResumeSection />
      <Contact />
    </main>
  );
}
