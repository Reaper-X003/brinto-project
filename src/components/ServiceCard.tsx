import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className="bg-soft-black border border-white/10 rounded-2xl p-8 hover:border-gold/50 transition-colors duration-300 group"
    >
      <div className="mb-6 inline-flex p-4 rounded-xl bg-charcoal text-gold group-hover:bg-gold group-hover:text-deep-black transition-colors duration-300">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-serif text-white mb-4">{title}</h3>
      <p className="text-muted leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
