import { motion } from 'framer-motion';

interface GalleryCardProps {
  image: string;
  title?: string;
  category?: string;
  className?: string;
  onClick?: () => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ image, title, category, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`block overflow-hidden rounded-xl group relative cursor-pointer ${className}`}
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="w-full h-full bg-soft-black"
      >
        <img 
          src={image} 
          alt={title || 'Gallery image'} 
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {(title || category) && (
          <div className="absolute inset-0 bg-deep-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
            {category && (
              <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {category}
              </span>
            )}
            {title && (
              <h3 className="text-white font-serif text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {title}
              </h3>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
