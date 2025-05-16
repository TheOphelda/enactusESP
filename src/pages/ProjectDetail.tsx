import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

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
          <p className="text-lg">Projet en chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white min-h-[50vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${project.image}')`,
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center text-white hover:text-enactus-yellow transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Revenir aux Projets
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-neutral-300 mb-6">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.sdgs.map(sdg => (
                <SDGBadge key={sdg.number} sdg={sdg} showTitle />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <SectionHeader title="About the Project" />
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700">
                  {project.fullDescription}
                </p>
                
                <SectionHeader title="Objectifs du Projet" />
                <ul className="space-y-2 mb-8">
                  {project.goals.map((goal, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-enactus-yellow flex items-center justify-center text-black font-bold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span>{goal}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <SectionHeader title="Impact" />
                <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-enactus-yellow mb-8">
                  <p className="text-neutral-800">{project.impact}</p>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-neutral-50 rounded-lg p-6 shadow-sm sticky top-20">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users size={20} className="mr-2 text-enactus-yellow" />
                  Membres du Projet
                </h3>
                <ul className="space-y-4 mb-8">
                  {project.team.map((member, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-700 font-medium mr-3">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-neutral-500">{member.role}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target size={20} className="mr-2 text-enactus-yellow" />
                  ODDs Touchés
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-8">
                  {project.sdgs.map(sdg => (
                    <SDGBadge key={sdg.number} sdg={sdg} size="sm" />
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award size={20} className="mr-2 text-enactus-yellow" />
                  Engagez-vous
                </h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  Souhaitez-vous soutenir ce projet ? De nombreuses façons de contribuer sont possibles, du bénévolat à la mise à disposition de ressources..
                </p>
                <Button fullWidth>
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Autres Projets" 
            subtitle="Explorez plus de nos initiatives"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((p, index) => (
                <motion.div
                  key={p.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => navigate(`/projects/${p.id}`)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-neutral-600 mb-4 line-clamp-2">{p.shortDescription}</p>
                    <button 
                      onClick={() => navigate(`/projects/${p.id}`)}
                      className="text-enactus-yellow hover:text-amber-600 font-medium transition-colors inline-flex items-center"
                    >
                      En savoir plus
                      <ArrowLeft size={16} className="ml-1 transform rotate-180" />
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectDetail;