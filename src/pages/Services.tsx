import { SectionHeading } from '../components/SectionHeading';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';

export const Services = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-deep-black">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
        <SectionHeading title="Photography Services" subtitle="What I Do" />
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-muted leading-relaxed">
            I offer a range of professional photography services tailored to meet your unique needs. Whether it's a grand wedding, a corporate event, or a personal portrait session, I bring the same level of dedication and artistic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="bg-charcoal rounded-[28px] p-12 md:p-16 text-center border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-6">Need a custom package?</h2>
          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
            Every event is unique. If you have specific requirements or an upcoming destination project, let's discuss how we can tailor a photography package just for you.
          </p>
          <Button size="lg" onClick={() => window.location.href = '/contact'}>
            Let's Talk
          </Button>
        </div>
        
      </div>
    </div>
  );
};
