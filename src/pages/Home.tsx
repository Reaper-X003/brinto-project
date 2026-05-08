import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../data/images';
import { portfolioData } from '../data/portfolio';
import { services } from '../data/services';
import { clients } from '../data/clients';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { AnimatedText } from '../components/AnimatedText';

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={images.hero} 
            alt="Cinematic Photography" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/40 to-deep-black"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 md:px-8 lg:px-16 text-center md:text-left pt-20 flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl relative z-10"
          >
            <span className="font-westeria text-gold text-4xl md:text-5xl font-normal mb-6 block relative z-10">Professional Photographer</span>
            <AnimatedText 
              text="Capturing timeless stories through light, emotion, and detail." 
              className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.1] tracking-tight mb-8 relative z-10"
              delay={0.4}
            />
            <motion.div 
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 mb-10 relative z-10"
            >
              {['Wedding', 'Events', 'Portrait', 'Commercial'].map((category, index) => (
                <motion.span
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-white/10 hover:border-gold/50 bg-black/30 hover:bg-gold/10 backdrop-blur-md text-xs md:text-sm text-gray-300 hover:text-gold uppercase tracking-widest font-bold cursor-pointer transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  {category}
                </motion.span>
              ))}
            </motion.div>
            <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-6 relative z-10">
              <Button size="lg" onClick={() => window.location.href = '/portfolio'}>
                View Portfolio
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/contact'}>
                Book a Shoot
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 bg-deep-black">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[28px] overflow-hidden aspect-[4/5] lg:aspect-square"
            >
              <img src={images.about} alt="Washiou Brinto" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-white/10 rounded-[28px]"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="The Eye Behind the Lens" subtitle="About Me" align="left" />
              <div className="text-lg text-muted space-y-6 mb-12">
                <p>
                  I am a photographer focused on documenting real moments, emotional stories, and meaningful events. From weddings and portraits to organizational programs and brand shoots, my work is built around natural storytelling, clean composition, and attention to detail.
                </p>
                <p>
                  Every frame tells a story worth remembering.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="bg-soft-black border border-white/5 rounded-2xl p-6 text-center">
                  <span className="block text-3xl font-serif text-gold mb-2">5+</span>
                  <span className="text-sm text-muted uppercase tracking-wider">Years Exp.</span>
                </div>
                <div className="bg-soft-black border border-white/5 rounded-2xl p-6 text-center">
                  <span className="block text-3xl font-serif text-gold mb-2">100+</span>
                  <span className="text-sm text-muted uppercase tracking-wider">Events</span>
                </div>
                <div className="bg-soft-black border border-white/5 rounded-2xl p-6 text-center">
                  <span className="block text-3xl font-serif text-gold mb-2">50+</span>
                  <span className="text-sm text-muted uppercase tracking-wider">Clients</span>
                </div>
              </div>
              <Button variant="outline" onClick={() => window.location.href = '/about'}>Learn More</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <SectionHeading title="Featured Stories" subtitle="Selected Work" />
          
          <div className="space-y-24">
            {portfolioData.slice(0, 3).map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-3/5 rounded-2xl overflow-hidden"
                >
                  <img src={project.coverImage} alt={project.title} className="w-full h-[60vh] object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="w-full lg:w-2/5"
                >
                  <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
                    {project.location} &bull; {project.date}
                  </span>
                  <h3 className="text-4xl font-serif text-white mb-6">{project.title}</h3>
                  <p className="text-muted text-lg mb-8">{project.description}</p>
                  <Link to={`/portfolio/${project.id}`} className="inline-flex items-center text-gold font-semibold hover:text-white transition-colors">
                    View Story <span className="ml-2">&rarr;</span>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/portfolio'}>
              View All Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 bg-deep-black">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <SectionHeading title="Photography Services" subtitle="What I Do" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="ghost" onClick={() => window.location.href = '/services'}>
              View All Services &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 bg-charcoal border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 text-center">
          <SectionHeading title="Trusted by brands, communities, and creative teams" />
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 items-center opacity-70">
            {clients.map((client, i) => (
              <motion.div 
                key={i}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
