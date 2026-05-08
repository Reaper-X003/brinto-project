import { SectionHeading } from '../components/SectionHeading';
import { certificates } from '../data/certificates';
import { CertificateCard } from '../components/CertificateCard';

export const Certificates = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-deep-black">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
        <SectionHeading title="Client Reviews" subtitle="Testimonials" />
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-muted leading-relaxed">
            Over the years, I've had the privilege of collaborating with amazing organizations, brands, and communities. Here's what some of them have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert) => (
            <CertificateCard 
              key={cert.id} 
              {...cert} 
            />
          ))}
        </div>

      </div>
    </div>
  );
};
