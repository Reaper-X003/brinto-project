import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
const Instagram = (props: any) => <svg viewBox='0 0 24 24' width='24' height='24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' {...props}><rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path><line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line></svg>;
const Facebook = (props: any) => <svg viewBox='0 0 24 24' width='24' height='24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' {...props}><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path></svg>;
import { SectionHeading } from '../components/SectionHeading';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-deep-black flex flex-col justify-center relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8 lg:px-16 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Let's Create Something Beautiful" subtitle="Book a Session" />
          
          <div className="text-center mb-16">
            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Ready to capture your story? Connect with me directly through any of the channels below. No forms to fill out—just reach out and let's start planning your shoot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            
            {/* Primary CTA: WhatsApp */}
            <motion.a 
              href="https://wa.me/8801864070100" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="col-span-1 md:col-span-2 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] rounded-2xl p-8 flex items-center justify-center gap-4 transition-colors duration-300 group"
            >
              <div className="bg-[#25D366] text-white p-4 rounded-full group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <div className="text-left">
                <span className="block text-white font-serif text-2xl mb-1">Message on WhatsApp</span>
                <span className="text-muted text-sm uppercase tracking-wider">01864070100</span>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a 
              href="tel:01864070100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-charcoal border border-white/10 hover:border-gold/50 rounded-2xl p-8 flex flex-col items-center text-center transition-colors duration-300 group"
            >
              <Phone className="text-gold mb-4 group-hover:scale-110 transition-transform" size={32} />
              <span className="text-white font-serif text-xl mb-1">Direct Call</span>
              <span className="text-muted">01864070100</span>
            </motion.a>

            {/* Email */}
            <motion.a 
              href="mailto:washiour@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-charcoal border border-white/10 hover:border-gold/50 rounded-2xl p-8 flex flex-col items-center text-center transition-colors duration-300 group"
            >
              <Mail className="text-gold mb-4 group-hover:scale-110 transition-transform" size={32} />
              <span className="text-white font-serif text-xl mb-1">Email Me</span>
              <span className="text-muted text-sm">washiour@gmail.com<br/>bwashiou@gmail.com</span>
            </motion.a>

          </div>

          {/* Socials */}
          <div className="mt-20 text-center">
            <h4 className="text-white font-serif text-xl mb-6">Follow my recent work</h4>
            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://www.instagram.com/washiourahmanbrinto?igsh=MWs2NXFmcDFvdDF2dQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-soft-black flex items-center justify-center text-white border border-white/10 group-hover:bg-gold group-hover:text-deep-black group-hover:border-gold transition-all duration-300">
                  <Instagram size={24} />
                </div>
                <span className="text-muted text-sm group-hover:text-gold transition-colors">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/share/1J6BLzX46P/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-soft-black flex items-center justify-center text-white border border-white/10 group-hover:bg-gold group-hover:text-deep-black group-hover:border-gold transition-all duration-300">
                  <Facebook size={24} />
                </div>
                <span className="text-muted text-sm group-hover:text-gold transition-colors">Facebook</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
