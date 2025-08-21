import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Enactus ESP",
      links: [
        { label: "À propos", path: "/" },
        { label: "Notre équipe", path: "/" },
        { label: "Nos valeurs", path: "/" },
        { label: "Carrières", path: "/contact" }
      ]
    },
    {
      title: "Projets",
      links: [
        { label: "Tous nos projets", path: "/projects" },
        { label: "Impact social", path: "/projects" },
        { label: "Innovation", path: "/projects" },
        { label: "Durabilité", path: "/projects" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { label: "Actualités", path: "/news" },
        { label: "Rapports", path: "/" },
        { label: "Publications", path: "/" },
        { label: "Médias", path: "/" }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/enactus.esp", 
      label: "Facebook",
      color: "hover:bg-blue-600",
      description: "Suivez nos actualités et événements"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/enactus_esp", 
      label: "Instagram",
      color: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600",
      description: "Photos et stories de nos projets"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/enactus-esp", 
      label: "LinkedIn",
      color: "hover:bg-blue-700",
      description: "Réseau professionnel et partenariats"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/enactus_esp", 
      label: "Twitter",
      color: "hover:bg-blue-400",
      description: "Mises à jour en temps réel"
    },
    { 
      icon: Youtube, 
      href: "https://www.youtube.com/@enactusesp", 
      label: "YouTube",
      color: "hover:bg-red-600",
      description: "Vidéos de nos projets"
    },
    { 
      icon: Globe, 
      href: "https://enactus.org", 
      label: "Site officiel",
      color: "hover:bg-green-600",
      description: "Site international Enactus"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0a1931] via-[#0a1931]/95 to-[#0a1931] text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#FFD800]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#ffb300]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        {/* Section principale */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <img src="/logo.jpg" alt="Enactus ESP Logo" className="h-16 w-16 rounded-full mr-4 shadow-lg" />
                <div>
                  <h3 className="text-2xl font-black text-[#FFD800]">Enactus ESP</h3>
                  <p className="text-sm text-white/70">Entrepreneurial Action</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Nous créons un impact positif durable à travers l'action entrepreneuriale, en formant des leaders qui changent le monde.
              </p>
              
              {/* Réseaux sociaux */}
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.slice(0, 6).map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#FFD800] hover:text-black transition-all duration-300 group ${social.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    title={`${social.label} - ${social.description}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Liens de navigation */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h4 className="text-lg font-bold text-[#FFD800] mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-[#FFD800] transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Section des réseaux sociaux détaillée */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-2xl font-bold text-[#FFD800] mb-8 text-center">Suivez-nous sur les réseaux sociaux</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon size={24} className="text-black" />
                </div>
                <div>
                  <h5 className="font-semibold text-white group-hover:text-[#FFD800] transition-colors duration-300">
                    {social.label}
                  </h5>
                  <p className="text-sm text-white/60">{social.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Section contact */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-[#FFD800] mb-6">Contactez-nous</h4>
              <div className="space-y-4">
                <div className="flex items-center text-white/80">
                  <Mail size={20} className="mr-3 text-[#FFD800]" />
                  <span>contact@enactus-esp.sn</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Phone size={20} className="mr-3 text-[#FFD800]" />
                  <span>+221 77 123 45 67</span>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPin size={20} className="mr-3 text-[#FFD800]" />
                  <span>École Supérieure Polytechnique, Dakar, Sénégal</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-[#FFD800] mb-6">Newsletter</h4>
              <p className="text-white/70 mb-4">
                Restez informé de nos dernières actualités et projets.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFD800] transition-all duration-300"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  S'abonner
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-white/60 mb-4 md:mb-0">
            <p className="flex items-center justify-center md:justify-start">
              © {currentYear} Enactus ESP. Tous droits réservés.
              <Heart size={16} className="mx-2 text-red-400 animate-pulse" />
              Made with passion
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm text-white/60">
            <Link to="/" className="hover:text-[#FFD800] transition-colors duration-300">
              Politique de confidentialité
            </Link>
            <Link to="/" className="hover:text-[#FFD800] transition-colors duration-300">
              Conditions d'utilisation
            </Link>
            <Link to="/" className="hover:text-[#FFD800] transition-colors duration-300">
              Mentions légales
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;