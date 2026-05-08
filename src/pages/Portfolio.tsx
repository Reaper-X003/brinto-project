import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useAnimationFrame, useMotionValue, AnimatePresence } from 'framer-motion';
import { portfolioData, categories } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { GalleryCard } from '../components/GalleryCard';
import { X } from 'lucide-react';

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const setRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);

  const filteredImages = useMemo(() => {
    if (filter === 'All') {
      const allImages = portfolioData.flatMap(p => p.gallery);
      // Shuffle array randomly
      for (let i = allImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
      }
      return allImages;
    }
    const project = portfolioData.find(p => p.category === filter);
    return project ? project.gallery : [];
  }, [filter]);

  useEffect(() => {
    const measure = () => {
      if (setRef.current) {
        setContentWidth(setRef.current.offsetWidth);
      }
    };
    measure();
    // Use a small timeout to ensure layout is complete before measuring
    setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [filteredImages]);

  // Reset x position when filter changes
  useEffect(() => {
    x.set(0);
  }, [filter, x]);

  useAnimationFrame((_, delta) => {
    let currentX = x.get();
    
    // Move left slowly if not interacting
    if (!isHovered && !isDragging && contentWidth > 0) {
      let moveBy = 0.5 * (delta / 16); 
      currentX -= moveBy;
    }
    
    // Seamless infinite wrap
    if (contentWidth > 0) {
      let wrapped = currentX % contentWidth;
      if (wrapped > 0) {
        wrapped -= contentWidth;
      }
      x.set(wrapped);
    }
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-deep-black overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
        <SectionHeading title="Selected Work" subtitle="Portfolio" />
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'gold-gradient-bg text-deep-black border border-transparent shadow-lg shadow-gold/20' 
                  : 'bg-transparent text-white border border-white/20 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Marquee */}
      <div 
        className="w-full cursor-grab active:cursor-grabbing pb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <motion.div
          style={{ x }}
          drag="x"
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          dragElastic={0}
          dragMomentum={false}
          className="flex w-max"
        >
          {/* Duplicate the sets enough times to ensure it fills any screen and allows seamless wrapping */}
          {[...Array(6)].map((_, setIndex) => (
            <div 
              key={setIndex}
              ref={setIndex === 0 ? setRef : null}
              className="flex gap-6 md:gap-8 pr-6 md:pr-8 shrink-0"
            >
              {filteredImages.map((image, idx) => (
                <div
                  key={`${setIndex}-${idx}`}
                  className="w-[320px] md:w-[400px] lg:w-[500px] aspect-square shrink-0 select-none"
                >
                  <GalleryCard
                    image={image}
                    className="w-full h-full"
                    onClick={() => {
                      if (!isDragging) {
                        setLightboxImage(image);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black/95 backdrop-blur-sm p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
              onClick={() => setLightboxImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightboxImage}
              alt="Lightbox View"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
