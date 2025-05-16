import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Globe, Target, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';
import SDGBadge from '../components/ui/SDGBadge';

import { projects } from '../data/projects';
import { aboutData } from '../data/about';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <PageTransition>
      {/* Hero Section - Améliorée */}
      <section className="relative bg-neutral-900 text-white min-h-[90vh] flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ y }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/cover.png')",
              opacity: 1
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900"></div>
        </motion.div>
        <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-enactus-yellow text-black font-semibold rounded-full text-sm mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Student Entrepreneurs
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Entrepreneurial Action <br />
                <span className="text-enactus-yellow bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
                  for a Better World
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-10 leading-relaxed max-w-2xl">
                Empowering our society is our priority. Rejoignez-nous pour créer un impact durable grâce à l'action entrepreneuriale.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/projects">
                  <Button size="lg" className="group">
                    Nos projets
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 group">
                    Rejoins-nous
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Améliorée */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader 
                title="Notre Mission & Vision" 
                subtitle="Créer de l'impact positif à travers l'action entrepreneuriale" 
              />
              <div className="space-y-8">
                <motion.div 
                  className="border-l-4 border-enactus-yellow pl-6 py-4 hover:bg-neutral-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-2xl font-semibold mb-3">Notre mission</h3>
                  <p className="text-neutral-600 leading-relaxed">{aboutData.mission}</p>
                </motion.div>
                <motion.div 
                  className="border-l-4 border-enactus-yellow pl-6 py-4 hover:bg-neutral-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-2xl font-semibold mb-3">Notre vision</h3>
                  <p className="text-neutral-600 leading-relaxed">{aboutData.vision}</p>
                </motion.div>
              </div>
              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center text-enactus-yellow hover:text-amber-600 font-medium transition-colors group">
                  Join our mission 
                  <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {aboutData.values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="bg-neutral-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">{value.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section - Améliorée */}
      <section className="py-24 bg-enactus-yellow relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <SectionHeader 
                title="Notre Impact" 
                subtitle="Créer un changement durable dans les communautés urbaines et rurales" 
                centered
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Globe, value: aboutData.impact.countries, label: "Localités" },
                { icon: Briefcase, value: aboutData.impact.universities.toLocaleString(), label: "GIE" },
                { icon: Users, value: aboutData.impact.students.toLocaleString(), label: "Etudiants" },
                { icon: Target, value: aboutData.impact.projects.toLocaleString(), label: "Projets" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-6">
                    <stat.icon className="h-12 w-12 text-enactus-yellow" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-neutral-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white/90 p-8 rounded-xl inline-block shadow-lg">
                <p className="text-2xl font-semibold mb-3">Personnes touchées:</p>
                <p className="text-5xl font-bold text-enactus-yellow">{aboutData.impact.peopleImpacted}+</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Showcase - Améliorée */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Nos Projets" 
            subtitle="Des solutions innovantes répondant aux défis sociaux et environnementaux" 
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/projects">
              <Button className="group">
                Voir tous les projets
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SDGs Section - Améliorée */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Objectifs de Développement Durables" 
            subtitle="Notre travail contribue à ces ODDs" 
            centered
            dark
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-8 justify-items-center mt-12">
            {aboutData.sdgs.map((sdg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <SDGBadge sdg={sdg} showTitle={true} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Améliorée */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-enactus-yellow text-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Rejoins-nous dans la création d'impact positif
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Étudiants engagés, professionnels impliqués : rejoignez Enactus et agissons ensemble pour un monde meilleur !
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-enactus-yellow transition-colors group"
                >
                  Get Involved Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;