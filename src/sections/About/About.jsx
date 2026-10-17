import React from 'react';
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  Smartphone, 
  Globe, 
  Database,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { scrollToSection } from '../../utils/helpers';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';

export default function About() {
  const highlights = [
    "PG Management Systems",
    "Billing & POS / Inventory",
    "Payroll & Statutory Workflows",
    "Race & Slot Booking Engines",
    "Restaurant Management & POS",
    "Matrimony & Community Apps",
    "Quality Checking (QChecker)",
    "School Management Systems",
    "Global Finance & Ledgers",
    "Role-Based Access Control (RBAC)",
    "AWS S3 Cloud Storage & Uploads",
    "RESTful APIs & Postman Testing"
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50/50 dark:bg-navy-900/40 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <Container>
        <SectionTitle
          eyebrow="BACKGROUND & SPECIALIZATION"
          title="About Me"
          subtitle="Passionate Full Stack Developer building responsive and scalable web and mobile applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="flex items-center gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-lg shadow-blue-500/10 shrink-0 bg-slate-900">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile/gokulraj.jpg`}
                  alt="Gokulraj V"
                  className="w-full h-full object-cover object-[50%_15%]"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Gokulraj V</h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Full Stack Developer • Softye Technologies
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Erode, Tamil Nadu, India • Jan 2025 – Oct 2026</p>
              </div>
            </div>

            <p className="font-medium text-slate-900 dark:text-white">
              Gokulraj V is a Full Stack Developer with hands-on experience building responsive and scalable web and mobile applications using the <span className="text-blue-600 dark:text-blue-400 font-bold">MERN stack and React Native</span>.
            </p>

            <p>
              He possesses strong core capabilities across React.js, Node.js, Express.js, MongoDB, REST API development, JWT authentication, database design, CRUD operations, role-based access control (RBAC), third-party integrations, and AWS S3 cloud storage.
            </p>

            <p>
              Having engineered real-world Admin Panels, PG Management Systems, Billing/POS, Payroll SaaS, Restaurant Management, Matrimony, Finance, School Management, and Race Booking platforms, his focus is writing clean, scalable code that delivers measurable business impact.
            </p>

            {/* Quick Metadata Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
              <div className="bg-white dark:bg-navy-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary-500" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </div>
              </div>

              <div className="bg-white dark:bg-navy-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-0.5">
                  <Briefcase className="w-3.5 h-3.5 text-primary-500" />
                  <span>Experience</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Jan 2025 – Oct 2026
                </div>
              </div>

              <div className="bg-white dark:bg-navy-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-0.5">
                  <Building2 className="w-3.5 h-3.5 text-primary-500" />
                  <span>Platforms</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Web & Mobile (Expo)
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Let's Work Together
              </Button>
            </div>
          </div>

          {/* Right Column: Focus Areas & Systems Built */}
          <div className="lg:col-span-5 bg-white dark:bg-navy-900 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Domain & Application Expertise
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Practical industry experience delivering tailored business systems:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Stat Banner */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Core Philosophy</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Clean Code & Scalable Architecture
                </span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
