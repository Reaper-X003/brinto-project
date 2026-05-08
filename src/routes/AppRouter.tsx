import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Portfolio } from '../pages/Portfolio';
import { PortfolioDetail } from '../pages/PortfolioDetail';
import { Services } from '../pages/Services';
import { Certificates } from '../pages/Certificates';
import { Contact } from '../pages/Contact';

export const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageTransition><Home /></PageTransition>} />
      <Route path="/about" element={<PageTransition><About /></PageTransition>} />
      <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
      <Route path="/portfolio/:id" element={<PageTransition><PortfolioDetail /></PageTransition>} />
      <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
      <Route path="/certificates" element={<PageTransition><Certificates /></PageTransition>} />
      <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
    </Routes>
    </AnimatePresence>
  );
};
