import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface CertificateCardProps {
  quote: string;
  name: string;
  role: string;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ quote, name, role }) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-[#111111] rounded-2xl p-8 flex flex-col justify-between min-h-[300px] border border-white/5 hover:border-gold/30 transition-all duration-300 shadow-xl"
    >
      <div>
        <Quote className="text-gold mb-6 w-10 h-10 transform -scale-x-100" />
        <p className="text-gray-300 font-serif text-lg md:text-xl italic leading-relaxed mb-8">
          {quote}
        </p>
      </div>
      <div>
        <h4 className="text-gold font-bold text-sm tracking-widest uppercase mb-2">
          {name}
        </h4>
        <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider block">
          {role}
        </span>
      </div>
    </motion.div>
  );
};


