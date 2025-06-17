import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';

interface Feature {
  id: number;
  title: string;
  shortDescription: string;
  iconUrl?: string;
}

interface FeaturesHighlightProps {
  features: Feature[];
}

const FeaturesHighlight: React.FC<FeaturesHighlightProps> = ({ features }) => {
  return (
    <section className="py-20 bg-white dark:bg-apple-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-sofisticato dark:text-white mb-6 animate-fade-in-up">
            Sicurezza Intelligente
          </h2>
          <p className="text-lg md:text-xl text-apple-gray-600 dark:text-apple-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Scopri come SmartGuard AI rivoluziona la protezione digitale con tecnologie all'avanguardia
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="animate-fade-in-up"
              style={{animationDelay: `${0.1 * (index + 1)}s`}}
            >
              <FeatureCard
                title={feature.title}
                description={feature.shortDescription}
                iconUrl={feature.iconUrl}
                iconAlt={`Icona ${feature.title}`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <a
            href="/features"
            className="inline-flex items-center text-navy-sofisticato dark:text-verde-tecnologico hover:text-verde-tecnologico dark:hover:text-white font-medium text-lg transition-colors duration-200 group"
          >
            Esplora tutte le funzionalità
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;

