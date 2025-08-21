import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';
import { Project } from '../../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="project-card group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Image avec overlay */}
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Badge de catégorie */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black text-xs font-bold rounded-full shadow-lg">
            {project.category}
          </span>
        </div>
        
        {/* Badges SDG */}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {project.sdgs.slice(0, 3).map((sdg) => (
            <motion.div 
              key={sdg.number}
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
              style={{ backgroundColor: sdg.color }}
              title={sdg.title}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {sdg.number}
            </motion.div>
          ))}
        </div>
        
        {/* Bouton d'action flottant */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Link 
            to={`/projects/${project.id}`}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
          >
            <ArrowRight size={20} className="text-[#0a1931] group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      
      {/* Contenu de la carte */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Titre */}
        <h3 className="text-xl font-bold mb-3 text-[#0a1931] group-hover:text-[#FFD800] transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>
        
        {/* Métadonnées du projet */}
        <div className="space-y-3 mb-6">
          {/* Localisation */}
          <div className="flex items-center text-sm text-gray-500">
            <MapPin size={16} className="mr-2 text-[#FFD800]" />
            <span>{project.location || 'Sénégal'}</span>
          </div>
          
          {/* Bénéficiaires */}
          <div className="flex items-center text-sm text-gray-500">
            <Users size={16} className="mr-2 text-[#FFD800]" />
            <span>{project.beneficiaries || 'Communauté locale'}</span>
          </div>
          
          {/* Statut */}
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-2 text-[#FFD800]" />
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
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
        
        {/* Bouton d'action principal */}
        <Link 
          to={`/projects/${project.id}`}
          className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold rounded-xl shadow-lg hover:from-[#ffb300] hover:to-[#FFD800] transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl"
        >
          Découvrir le projet
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
      
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;