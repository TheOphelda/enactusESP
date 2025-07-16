import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Globe, Target, ChevronRight, Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Témoignages fictifs
const testimonials = [
  {
    name: 'Mariama Diop',
    role: 'Membre',
    text: "Enactus m'a permis de développer mon leadership et d'avoir un impact concret dans ma communauté !",
    image: '/IMG_8167.jpg',
  },
  {
    name: 'Anna Sarr',
    role: 'Partenaire',
    text: "Une équipe dynamique et engagée, toujours à la recherche de solutions innovantes.",
    image: '/victoire25.jpg',
  },
  {
    name: 'Mme Dhiediou',
    role: 'Bénéficiaire',
    text: "Grâce à Enactus, j'ai pu bénéficier d'une activité qui a changé ma vie.",
    image: '/femmes maeva.jpg',
  },
];

// Hook pour compteurs animés
function useCountUp(end: number, duration = 2) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    let frame = 0;
    function animate() {
      frame++;
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    // eslint-disable-next-line
  }, [end]);
  return count;
}

import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';

import { projects } from '../data/projects';
import { aboutData } from '../data/about';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  // Slider témoignages
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Helper to clean numbers (remove spaces, handle string/number)
  const cleanNumber = (val: string | number) => {
    if (typeof val === 'string') {
      return Number(val.replace(/\s/g, ''));
    }
    return val;
  };

  return (
    <PageTransition>
      {/* Hero Section - Améliorée et plus vivante */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a1931] via-[#FFD800]/80 to-[#ffb300] text-white">
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ y }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: "url('/cover.png')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1931]/80 via-transparent to-[#FFD800]/30"></div>
        </motion.div>
        {/* Dégradé blanc en bas pour transition douce */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-20" />
        <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-semibold rounded-full text-sm mb-6 shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Student Entrepreneurs
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-[0_2px_8px_rgba(255,216,0,0.15)]">
                Entrepreneurial Action <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD800] via-[#ffb300] to-[#0a1931] animate-gradient-move">
                  for a Better World
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto font-semibold text-[#0a1931] tracking-wide">
                Empowering our society is our priority.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/projects">
                  <Button size="lg" className="group bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold shadow-xl hover:from-[#ffb300] hover:to-[#FFD800] transition-all duration-200">
                    Nos projets
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-[#FFD800] text-[#FFD800] bg-transparent hover:bg-[#FFD800] hover:text-[#0a1931] font-bold shadow transition-all duration-200">
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
      <section className="py-24 bg-white text-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-2xl"
              >
                <SectionHeader 
                  title="Notre Mission & Vision"
                  subtitle="Créer de l'impact positif à travers l'action entrepreneuriale"
                />
                <div className="space-y-10 mt-10">
                  <motion.div 
                    className="border-l-4 border-enactus-yellow pl-7 py-6 bg-white hover:bg-neutral-50 transition-colors rounded-xl shadow-sm"
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-enactus-yellow tracking-tight">Notre mission</h3>
                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-normal">{aboutData.mission}</p>
                  </motion.div>
                  <motion.div 
                    className="border-l-4 border-enactus-yellow pl-7 py-6 bg-white hover:bg-neutral-50 transition-colors rounded-xl shadow-sm"
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-enactus-yellow tracking-tight">Notre vision</h3>
                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-normal">{aboutData.vision}</p>
                  </motion.div>
                </div>
                <div className="mt-12">
                  <Link to="/contact" className="inline-flex items-center text-enactus-yellow hover:text-amber-400 font-semibold text-lg transition-colors group">
                    Rejoins notre mission 
                    <ArrowRight size={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

            {/* Nos Valeurs Section */}
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Nos Valeurs"
            subtitle="Les valeurs qui animent notre équipe et guident nos actions"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {aboutData.values && aboutData.values.length > 0 ? (
              aboutData.values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-enactus-yellow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-semibold text-enactus-yellow mb-2">{value.title}</h3>
                  <p className="text-sm text-neutral-700">{value.description}</p>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-neutral-400">Aucune valeur renseignée pour l'équipe.</div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Stats Section - Animée */}
      <section className="py-24 bg-gradient-to-br from-[#FFD800] via-[#ffb300]/80 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/cover.png')] opacity-10"></div>
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
                { icon: Globe, value: aboutData.impact.distanceParcourue, label: "Distance parcourue", count: aboutData.impact.distanceParcourue },
                { icon: Briefcase, value: aboutData.impact.emploisCréés, label: "Emplois Créés", count: aboutData.impact.emploisCréés },
                { icon: Users, value: aboutData.impact.viesTouchées, label: "Vies impactées", count: aboutData.impact.viesTouchées },
                { icon: Target, value: aboutData.impact.projets, label: "Projets", count: aboutData.impact.projets }
              ].map((stat, index) => {
                const animated = useCountUp(cleanNumber(stat.count));
                return (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300 border-b-4 border-[#FFD800] hover:border-[#0a1931]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-center mb-6">
                      <stat.icon className="h-12 w-12 text-[#FFD800] group-hover:text-[#0a1931] transition-colors" aria-label={stat.label} />
                    </div>
                    <div className="text-4xl font-extrabold mb-2 text-[#0a1931]" aria-live="polite">{animated.toLocaleString()}</div>
                    <div className="text-[#0a1931] font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-[#FFD800]/90 to-[#ffb300]/90 p-8 rounded-xl inline-block shadow-xl border-2 border-[#FFD800]">
                <p className="text-2xl font-semibold mb-3 text-[#0a1931]">Revenus générés:</p>
                <p className="text-5xl font-extrabold text-[#0a1931]">{aboutData.impact.revenus}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section Témoignages - Slider automatique */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Ils parlent de nous"
            subtitle="Témoignages de membres, partenaires et bénéficiaires"
            centered
          />
          <div className="max-w-2xl mx-auto mt-12">
            <motion.div
              key={testimonialIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center relative"
              aria-live="polite"
            >
              <Quote className="w-10 h-10 text-enactus-yellow mb-4" />
              <p className="text-lg italic text-neutral-700 mb-6">"{testimonials[testimonialIdx].text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonials[testimonialIdx].image} alt={testimonials[testimonialIdx].name} className="w-14 h-14 rounded-full object-cover border-2 border-enactus-yellow" />
                <div className="text-left">
                  <div className="font-bold text-neutral-900">{testimonials[testimonialIdx].name}</div>
                  <div className="text-sm text-neutral-500">{testimonials[testimonialIdx].role}</div>
                </div>
              </div>
            </motion.div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIdx(idx)}
                  className={`w-3 h-3 rounded-full ${idx === testimonialIdx ? 'bg-enactus-yellow' : 'bg-neutral-300'} focus:outline-none`}
                  aria-label={`Témoignage ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase - Améliorée */}
      <section className="py-24 bg-white">
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
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <img 
              src={sdg.image} 
              alt={`ODD ${sdg.number}`} 
              className="w-20 h-20 object-contain rounded-md shadow-md"
            />
            <span className="text-center text-sm text-white font-medium">
              {sdg.title}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section - Améliorée */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-enactus-yellow text-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/cover.png')] opacity-10"></div>
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
                  Stay tuned!
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