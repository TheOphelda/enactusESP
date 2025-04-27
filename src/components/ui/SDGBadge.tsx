import React from 'react';
import { SDG } from '../../types';

interface SDGBadgeProps {
  sdg: SDG;
  size?: 'sm' | 'md' | 'lg';
  showTitle?: boolean;
}

const SDGBadge: React.FC<SDGBadgeProps> = ({ 
  sdg, 
  size = 'md',
  showTitle = false
}) => {
  const getSizeClass = () => {
    switch(size) {
      case 'sm':
        return 'w-8 h-8 text-xs';
      case 'md':
        return 'w-12 h-12 text-sm';
      case 'lg':
        return 'w-16 h-16 text-base';
      default:
        return 'w-12 h-12 text-sm';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className={`${getSizeClass()} rounded-full flex items-center justify-center font-bold text-white`}
        style={{ backgroundColor: sdg.color }}
      >
        {sdg.number}
      </div>
      {showTitle && (
        <span className="mt-2 text-xs text-center">{sdg.title}</span>
      )}
    </div>
  );
};

export default SDGBadge;