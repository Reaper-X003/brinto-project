import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
const Instagram = (props: any) => <svg viewBox='0 0 24 24' width='24' height='24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' {...props}><rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path><line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line></svg>;
const Facebook = (props: any) => <svg viewBox='0 0 24 24' width='24' height='24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' {...props}><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path></svg>;
import { images } from '../data/images';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={images.logo} alt="Washiou Brinto" className="w-10 h-10 object-contain grayscale opacity-80" />
              <span className="text-white font-serif font-semibold text-xl">Washiou Brinto</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Capturing timeless stories through light, emotion, and detail. Professional photography for weddings, events, and commercial brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-semibold text-lg mb-6">Explore</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-muted hover:text-gold transition-colors text-sm">About Me</Link></li>
              <li><Link to="/portfolio" className="text-muted hover:text-gold transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/services" className="text-muted hover:text-gold transition-colors text-sm">Services</Link></li>
              <li><Link to="/certificates" className="text-muted hover:text-gold transition-colors text-sm">Certificates</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif font-semibold text-lg mb-6">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:01864070100" className="text-muted hover:text-gold transition-colors text-sm flex items-center gap-2">
                  <Phone size={14} /> 01864070100
                </a>
              </li>
              <li>
                <a href="mailto:washiour@gmail.com" className="text-muted hover:text-gold transition-colors text-sm flex items-center gap-2">
                  <Mail size={14} /> washiour@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-serif font-semibold text-lg mb-6">Follow</h4>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/washiourahmanbrinto?igsh=MWs2NXFmcDFvdDF2dQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-soft-black flex items-center justify-center text-muted hover:text-deep-black hover:bg-gold transition-colors border border-white/10 hover:border-gold">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/share/1J6BLzX46P/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-soft-black flex items-center justify-center text-muted hover:text-deep-black hover:bg-gold transition-colors border border-white/10 hover:border-gold">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            &copy; {currentYear} Washiou Brinto. All rights reserved.
          </p>
          <p className="text-muted text-sm flex items-center gap-1">
            Designed for <span className="text-gold">Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
