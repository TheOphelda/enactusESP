import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Actualités', path: '/news' },
  { label: 'Projets', path: '/projects' }, // version simplifiée
  { label: 'Contact', path: '/contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = `relative group font-medium transition-colors duration-300 hover:text-enactus-yellow`;
  const activeLinkClasses = `text-enactus-yellow`;

  return (
    <>
      <header className={navbarClasses}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <NavLink to="/" className="flex items-center">
              <img src="/logo.jpg" alt="Enactus ESP Logo" className="h-10 md:h-12 w-auto mr-3" />
              <span className="text-2xl md:text-3xl font-bold text-enactus-yellow">Enactus ESP</span>
            </NavLink>

            {/* Menu Desktop */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeLinkClasses : ''}`
                  }
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-enactus-yellow transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </nav>

            {/* Bouton Menu Mobile */}
            <button
              className="md:hidden text-black focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-16"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-2 text-lg font-medium ${isActive ? 'text-enactus-yellow' : 'text-black'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Espacement pour le contenu sous navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
