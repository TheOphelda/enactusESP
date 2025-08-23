import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Target, Award, Calendar, MapPin, TrendingUp, Globe, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import BackToTop from '../components/ui/BackToTop';

import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import SDGBadge from '../components/ui/SDGBadge';

import { projects } from '../data/projects';
import { Project } from '../types';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | undefined>(undefined);
  
  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  // If project not found, redirect to projects page
  useEffect(() => {
    if (projects.length > 0 && !projects.some(p => p.id === id)) {
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Projet en chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section moderne */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-[#FFD800]/10 to-[#ffb300]/20">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('${project.image}')`,
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80"></div>
        </div>
        
        {/* Éléments décoratifs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#FFD800]/20 to-[#ffb300]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#ffb300]/15 to-[#FFD800]/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-200/30 to-blue-300/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          {/* Bouton retour */}
          <motion.button 
            onClick={() => navigate('/projects')}
            className="flex items-center text-gray-700 hover:text-[#FFD800] transition-colors mb-8 group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Revenir aux Projets
          </motion.button>
          
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge de catégorie */}
              <motion.span 
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold rounded-full text-sm mb-8 shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.category}
              </motion.span>
              
              {/* Titre principal */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-gray-900">
                {project.title}
              </h1>
              
              {/* Description courte */}
              <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl font-semibold text-gray-700">
                {project.shortDescription}
              </p>
              
              {/* Badges SDG */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.sdgs.map(sdg => (
                  <motion.div 
                    key={sdg.number}
                    className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-2xl"
                    style={{ backgroundColor: sdg.color }}
                    title={sdg.title}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {sdg.number}
                  </motion.div>
                ))}
              </div>
              
              {/* Statistiques rapides */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {[
                  { icon: Users, value: '500+', label: 'Bénéficiaires' },
                  { icon: Target, value: '15+', label: 'Communautés' },
                  { icon: TrendingUp, value: '85%', label: 'Taux de succès' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon size={32} className="text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dégradé de transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Détails du projet */}
      <section className="content-section">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contenu principal */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <SectionHeader title="À propos du Projet" />
                <div className="prose prose-lg max-w-none">
                  {/* Description complète */}
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    {project.fullDescription || project.description}
                  </p>

                  {/* Objectifs du projet */}
                  <div className="bg-gradient-to-r from-[#FFD800]/10 to-[#ffb300]/10 rounded-2xl p-8 mb-8 border-l-4 border-[#FFD800]">
                    <h3 className="text-2xl font-bold text-[#0a1931] mb-4 flex items-center">
                      <Target className="mr-3 text-[#FFD800]" size={28} />
                      Objectifs du Projet
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      {project.goals?.map((goal, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-[#FFD800] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact du projet */}
                  {project.impact && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                      <h3 className="text-2xl font-bold text-[#0a1931] mb-4 flex items-center">
                        <Award className="mr-3 text-[#FFD800]" size={28} />
                        Impact du Projet
                      </h3>
                      <p className="text-gray-700 text-lg">{project.impact}</p>
                    </div>
                  )}

                  {/* Équipe du projet */}
                  {project.team && (
                    <div className="bg-gradient-to-r from-[#FFD800]/10 to-[#ffb300]/10 rounded-2xl p-8 mb-8 border-l-4 border-[#FFD800]">
                      <h3 className="text-2xl font-bold text-[#0a1931] mb-4 flex items-center">
                        <Users className="mr-3 text-[#FFD800]" size={28} />
                        Équipe du Projet
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        {project.team.map((member, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-[#FFD800] rounded-full mr-3 flex-shrink-0"></div>
                            <span className="font-semibold">{member.name}</span>
                            <span className="ml-2 text-sm text-gray-500">{member.role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Méthodologie */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-[#0a1931] mb-6 flex items-center">
                      <Globe className="mr-3 text-[#FFD800]" size={28} />
                      Notre Approche
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { title: "Recherche & Analyse", desc: "Étude approfondie des besoins et défis locaux" },
                        { title: "Co-création", desc: "Collaboration étroite avec les communautés" },
                        { title: "Innovation", desc: "Solutions entrepreneuriales créatives et durables" },
                        { title: "Impact", desc: "Mesure et évaluation continue des résultats" }
                      ].map((item, index) => (
                        <div key={index} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-[#FFD800]/10 transition-colors duration-300">
                          <h4 className="font-bold text-[#0a1931] mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Informations du projet */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-[#0a1931] mb-6 flex items-center">
                    <Award className="mr-2 text-[#FFD800]" size={24} />
                    Informations du Projet
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-3 text-[#FFD800]" />
                      <span>{project.location || 'Sénégal'}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Users size={18} className="mr-3 text-[#FFD800]" />
                      <span>{project.beneficiaries || 'Communauté locale'}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="mr-3 text-[#FFD800]" />
                      <span>{project.duration || '12 mois'}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Heart size={18} className="mr-3 text-[#FFD800]" />
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : project.status === 'completed'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {project.status === 'active' ? 'En cours' : 
                         project.status === 'completed' ? 'Terminé' : 'En cours'}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Objectifs de développement durable */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-[#0a1931] mb-6">ODD Ciblés</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.sdgs.map(sdg => (
                      <div 
                        key={sdg.number}
                        className="text-center p-3 rounded-xl"
                        style={{ backgroundColor: `${sdg.color}20` }}
                      >
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-2"
                          style={{ backgroundColor: sdg.color }}
                        >
                          {sdg.number}
                        </div>
                        <p className="text-xs text-gray-700 font-medium">{sdg.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bouton d'action */}
                <div className="bg-gradient-to-r from-[#FFD800] to-[#ffb300] rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold text-black mb-4">Soutenez ce projet</h3>
                  <p className="text-black/80 mb-6">Voulez-vous contribuer à ce projet ou en savoir plus ?</p>
                  <Button 
                    size="lg" 
                    className="w-full bg-black text-white hover:bg-gray-800 font-bold"
                  >
                    Nous Contacter
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </PageTransition>
  );
};

export default ProjectDetail;