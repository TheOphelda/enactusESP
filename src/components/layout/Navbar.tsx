import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Actualités', path: '/news' },
  { 
    label: 'Projets', 
    path: '/projects',
    children: [
      
      { label: 'Shery', path: '/projects/shery' },
      { label: 'Men-Nan', path: '/projects/men-nan' },
      { label: 'Aquatus', path: '/projects/aquatus' },
      { label: 'Terrasen', path: '/projects/terrasen' }
    ]
  },
  { label: 'Contact', path: '/contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  const linkClasses = `relative group font-medium transition-colors duration-300 hover:text-enactus-yellow`;
  const activeLinkClasses = `text-enactus-yellow`;
  
  return (
    <>
      <header className={navbarClasses}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <NavLink to="/" className="flex items-center">
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl font-bold text-enactus-yellow">
                  Enactus ESP
                </span>
              </div>
            </NavLink>

            {/* Menu Desktop */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <span 
                        className={`${linkClasses} flex items-center gap-1`}
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.label}
                        <ChevronDown size={16} />
                      </span>
                      <div className="absolute left-0 mt-48 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md z-50 overflow-y-auto max-h-64">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 hover:bg-gray-100 ${isActive ? activeLinkClasses : ''}`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `${linkClasses} ${isActive ? activeLinkClasses : ''}`
                      }
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-enactus-yellow transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                  )}
                </div>
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
                <div key={item.label} className="border-b border-gray-200 pb-2">
                  {item.children ? (
                    <div>
                      <div 
                        className="flex justify-between items-center cursor-pointer py-2"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span className="text-lg font-medium">{item.label}</span>
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.children.map((child) => (
                              <NavLink
                                key={child.label}
                                to={child.path}
                                className={({ isActive }) =>
                                  `block py-2 ${isActive ? 'text-enactus-yellow' : 'text-gray-600'}`
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-2 text-lg font-medium ${isActive ? 'text-enactus-yellow' : 'text-black'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Espacement pour pousser le contenu sous la navbar fixe */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;