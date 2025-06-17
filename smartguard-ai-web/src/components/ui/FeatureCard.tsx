import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  iconUrl?: string;
  iconAlt?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconUrl,
  iconAlt = 'Feature icon',
}) => {
  return (
    <div className="bg-white dark:bg-apple-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-apple-gray-200 dark:border-apple-gray-700">
      {iconUrl && (
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-navy-sofisticato to-verde-tecnologico rounded-xl flex items-center justify-center">
            <Image
              src={iconUrl}
              alt={iconAlt}
              width={32}
              height={32}
              className="filter brightness-0 invert"
            />
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-navy-sofisticato dark:text-white mb-4 text-center">
        {title}
      </h3>
      
      <p className="text-apple-gray-600 dark:text-apple-gray-300 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;

