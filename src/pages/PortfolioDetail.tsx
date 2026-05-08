import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import { Button } from '../components/Button';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';

export const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const idx = portfolioData.findIndex(p => p.id === id);
    if (idx !== -1) {
      setProject(portfolioData[idx]);
      setCurrentIndex(idx);
    } else {
      navigate('/portfolio');
    }
  }, [id, navigate]);

  if (!project) return null;

  const nextProject = currentIndex < portfolioData.length - 1 ? portfolioData[currentIndex + 1] : portfolioData[0];
  const prevProject = currentIndex > 0 ? portfolioData[currentIndex - 1] : portfolioData[portfolioData.length - 1];

  return (
    <div className="bg-deep-black min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[70vh] relative pt-20">
        <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent"></div>
        <Link 
          to="/portfolio" 
          className="absolute top-24 left-5 md:left-8 lg:left-16 text-white hover:text-gold flex items-center gap-2 font-medium transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
        >
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 -mt-32 relative z-10 pb-24">
        
        {/* Details Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-charcoal p-8 md:p-12 rounded-[28px] border border-white/10 mb-16 shadow-2xl"
        >
          <span className="font-westeria text-gold text-3xl font-normal mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-8">
            {project.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div className="col-span-2">
              <h3 className="text-lg text-white font-serif mb-3">The Story</h3>
              <p className="text-muted leading-relaxed text-lg">{project.description}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted">
                <MapPin className="text-gold" size={20} />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <Calendar className="text-gold" size={20} />
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-24">
          {project.gallery.map((img: string, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl overflow-hidden ${i % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square md:aspect-[4/5]'}`}
            >
              <img src={img} alt={`${project.title} - ${i}`} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>

        {/* Navigation & CTA */}
        <div className="border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <Link to={`/portfolio/${prevProject.id}`} className="group text-left order-2 md:order-1">
            <span className="text-sm text-muted uppercase tracking-wider mb-2 block group-hover:text-gold transition-colors">Previous</span>
            <span className="text-xl font-serif text-white">{prevProject.title}</span>
          </Link>
          
          <div className="text-center order-1 md:order-2">
            <Button size="lg" onClick={() => window.location.href = '/contact'}>
              Book a similar shoot
            </Button>
          </div>

          <Link to={`/portfolio/${nextProject.id}`} className="group text-right order-3 md:order-3">
            <span className="text-sm text-muted uppercase tracking-wider mb-2 block group-hover:text-gold transition-colors">Next</span>
            <span className="text-xl font-serif text-white">{nextProject.title}</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
