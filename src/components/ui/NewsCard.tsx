import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight, Clock, User } from 'lucide-react';
import { NewsItem } from '../../types';
import { motion } from 'framer-motion';

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, index }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const getCategoryColor = (category: string): string => {
    switch(category) {
      case 'Événements':
        return '#4CAF50';
      case 'Financement':
        return '#2196F3';
      case 'Partenariats':
        return '#9C27B0';
      case 'Projets':
        return '#FF9800';
      default:
        return '#607D8B';
    }
  };

  const getCategoryIcon = (category: string): string => {
    switch(category) {
      case 'Événements':
        return '🎉';
      case 'Financement':
        return '💰';
      case 'Partenariats':
        return '🤝';
      case 'Projets':
        return '🚀';
      default:
        return '📰';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Image avec overlay */}
      <div className="relative h-56 overflow-hidden">
        <motion.img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Badge de catégorie */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
            <span className="text-lg">{getCategoryIcon(news.category)}</span>
            <span 
              className="text-xs font-bold text-white px-2 py-1 rounded-full"
              style={{ backgroundColor: getCategoryColor(news.category) }}
            >
              {news.category}
            </span>
          </div>
        </div>

        {/* Bouton d'action flottant */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Link 
            to={`/news/${news.id}`}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
          >
            <ArrowRight size={20} className="text-[#0a1931] group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      
      {/* Contenu de la carte */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Métadonnées */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-[#FFD800]" />
            <span>{formatDate(news.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>5 min de lecture</span>
          </div>
        </div>
        
        {/* Titre */}
        <h3 className="text-xl font-bold mb-3 text-[#0a1931] group-hover:text-[#FFD800] transition-colors duration-300 line-clamp-2 leading-tight">
          {news.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
          {news.summary}
        </p>
        
        {/* Auteur et bouton */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <User size={16} className="text-[#FFD800]" />
            <span>Équipe Enactus ESP</span>
          </div>
          
          <Link 
            to={`/news/${news.id}`}
            className="inline-flex items-center text-[#FFD800] hover:text-[#ffb300] font-semibold transition-colors group"
          >
            Lire la suite 
            <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default NewsCard;