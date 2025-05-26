import React from 'react';
import { Link } from 'react-router-dom';
import { X, Instagram, Linkedin, Youtube, Globe, Mail, Phone } from 'lucide-react';
import {Tiktok, Snapchat } from 'lucide-react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À Propos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-enactus-yellow">Enactus ESP</h3>
            <p className="text-neutral-300 mb-4">
              "Be the change you want to see in the world"  Mahatma Gandhi.
            </p>
            <div className="flex space-x-4">
              <a href="https://tiktok.com/@enactus.esp" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-enactus-yellow transition-colors">
                <Tiktok size={20} />
              </a>
              <a href="https://x.com/EnactusEsp" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-enactus-yellow transition-colors">
                <X size={20} />
              </a>
              <a href="https://instagram.com/enact.us_polytech" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-enactus-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/enactus-esp-59899819b" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-enactus-yellow transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://snapchat.com/add/enactus_esp" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-enactus-yellow transition-colors">
                <Snapchat size={20} />
              </a>
              <a href="https://youtube.com/@enactusesp" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-enactus-yellow transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-enactus-yellow">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-enactus-yellow transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/news" className="text-neutral-300 hover:text-enactus-yellow transition-colors">Actualités</Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-300 hover:text-enactus-yellow transition-colors">Projets</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-enactus-yellow transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Nos Projets */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-enactus-yellow">Nos Projets</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects/men-nan" className="text-neutral-300 hover:text-enactus-yellow transition-colors">Men Nan</Link>
              </li>
              <li>
                <Link to="/projects/shery" className="text-neutral-300 hover:text-enactus-yellow transition-colors">Shery</Link>
              </li>
              <li>
                <Link to="/projects/aquatus" className="text-neutral-300 hover:text-enactus-yellow transition-colors">Aquatus</Link>
              </li>
              <li>
                <Link to="/projects/terrasen" className="text-neutral-300 hover:text-enactus-yellow transition-colors">Terrasen</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-enactus-yellow">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Globe size={18} className="text-neutral-400" />
                <span className="text-neutral-300">École Supérieure Polytechnique de Dakar</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-neutral-400" />
                <a href="mailto:enactus.esp@gmail.com" className="text-neutral-300 hover:text-enactus-yellow transition-colors">enactus.esp@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-neutral-400" />
                <a href="tel:+221780103050" className="text-neutral-300 hover:text-enactus-yellow transition-colors">+221 78 010 30 50</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">&copy; {new Date().getFullYear()} Enactus ESP. Tous droits réservés.</p>
             <p className="text-neutral-500 text-xs flex items-center"> Made with <Heart className="mx-1 w-3 h-3 fill-red-500" /> by Enac'coders</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <a href="#" className="text-neutral-400 hover:text-enactus-yellow transition-colors">Politique de Confidentialité</a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-enactus-yellow transition-colors">Conditions d'Utilisation</a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-enactus-yellow transition-colors">Politique des Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;