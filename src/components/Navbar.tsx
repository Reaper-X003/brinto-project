import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { images } from '../data/images';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${
          isScrolled ? 'top-4 px-4' : 'top-0 px-0'
        }`}
      >
        <div 
          className={`transition-all duration-500 ease-in-out flex items-center justify-between w-full ${
            isScrolled 
              ? 'max-w-[1000px] backdrop-blur-[16px] border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-[64px] px-6 lg:px-8' 
              : 'max-w-[1280px] h-[88px] px-5 md:px-8 lg:px-16 border-b border-transparent rounded-none'
          }`}
          style={{
            backgroundColor: isScrolled
              ? 'rgba(5, 5, 5, 0.75)'
              : 'rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <img 
              src={images.logo} 
              alt="Washiou Brinto" 
              className={`object-contain transition-all duration-500 ${
                isScrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`} 
            />
            <span 
              className={`text-white font-serif font-semibold transition-all duration-500 hidden sm:block ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}
            >
              Washiou Brinto
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <ul className={`flex items-center transition-all duration-500 ${
              isScrolled ? 'gap-4 lg:gap-6' : 'gap-6 lg:gap-8'
            }`}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`text-sm font-medium transition-colors hover:text-[#E6C46A] ${
                      location.pathname === link.path ? 'text-[#C89B3C]' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <div className={`transition-all duration-500 ${isScrolled ? 'ml-6' : 'ml-10'}`}>
              <Link 
                to="/contact" 
                className={`inline-flex items-center justify-center font-medium transition-all duration-500 text-black hover:opacity-90 ${
                  isScrolled 
                    ? 'px-5 py-1.5 text-sm rounded-full' 
                    : 'px-7 py-2.5 text-base rounded-full'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #C89B3C, #E6C46A, #B68A2E)'
                }}
              >
                Book Now
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-50 hover:text-[#C89B3C] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center pt-20"
          >
            <ul className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-serif transition-colors hover:text-[#E6C46A] ${
                      location.pathname === link.path ? 'text-[#C89B3C]' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link 
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-black rounded-full hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg, #C89B3C, #E6C46A, #B68A2E)'
                  }}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
