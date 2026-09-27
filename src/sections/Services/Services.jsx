import React from 'react';
import { services } from '../../data/services';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ServiceCard from '../../components/ui/ServiceCard';

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 transition-colors">
      <Container>
        <SectionTitle
          eyebrow="CLIENT & PRODUCT CAPABILITIES"
          title="Professional Services"
          subtitle="Specialized development offerings covering the entire lifecycle from UI design systems to production APIs and native mobile apps."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
