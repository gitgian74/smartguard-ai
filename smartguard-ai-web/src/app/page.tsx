import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesHighlight from '@/components/sections/FeaturesHighlight';
import Button from '@/components/ui/Button';
import { fetchHomepageData, fetchFeaturesPreview, fetchSiteSettings } from '@/lib/api';

interface Feature {
  id: number;
  title: string;
  shortDescription: string;
  iconUrl?: string;
}

interface HomepageData {
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  problemSectionTitle: string;
  problemSectionContent: string;
  solutionSectionTitle: string;
  solutionSectionContent: string;
}

// Async Server Component
export default async function HomePage() {
  // Fetch data on the server
  let homepageContent: HomepageData;
  let features: Feature[];
  let settings;

  try {
    const [homepageResult, featuresResult, settingsResult] = await Promise.all([
      fetchHomepageData(),
      fetchFeaturesPreview(3),
      fetchSiteSettings()
    ]);

    homepageContent = homepageResult || {
      heroTitle: 'SmartGuard AI: Protezione Intelligente. Semplificata.',
      heroSubtitle: 'La prossima generazione di sicurezza, alimentata dall\'intelligenza artificiale per anticipare e neutralizzare le minacce prima che colpiscano.',
      heroCtaText: 'Richiedi una Demo',
      problemSectionTitle: 'Il Problema della Sicurezza Tradizionale',
      problemSectionContent: 'Le soluzioni di sicurezza tradizionali reagiscono alle minacce dopo che si sono già manifestate.',
      solutionSectionTitle: 'La Soluzione SmartGuard AI',
      solutionSectionContent: 'SmartGuard AI trasforma l\'approccio alla sicurezza digitale con l\'intelligenza artificiale.'
    };

    features = featuresResult || [
      {
        id: 1,
        title: 'Rilevamento Proattivo',
        shortDescription: 'L\'AI analizza pattern anomali per identificare minacce in tempo reale.',
        iconUrl: '/icons/eye-circuit.png'
      },
      {
        id: 2,
        title: 'Difesa Adattiva',
        shortDescription: 'Il sistema apprende e si adatta costantemente a nuove vulnerabilità.',
        iconUrl: '/icons/shield-network.png'
      },
      {
        id: 3,
        title: 'Privacy by Design',
        shortDescription: 'Sicurezza senza compromessi sulla privacy dei tuoi dati.',
        iconUrl: '/icons/privacy-lock.png'
      }
    ];
    settings = settingsResult;
  } catch (error) {
    console.error('Error fetching data:', error);
    
    // Fallback data
    homepageContent = {
      heroTitle: 'SmartGuard AI: Protezione Intelligente. Semplificata.',
      heroSubtitle: 'La prossima generazione di sicurezza, alimentata dall\'intelligenza artificiale per anticipare e neutralizzare le minacce prima che colpiscano.',
      heroCtaText: 'Richiedi una Demo',
      problemSectionTitle: 'Il Problema della Sicurezza Tradizionale',
      problemSectionContent: 'Le soluzioni di sicurezza tradizionali reagiscono alle minacce dopo che si sono già manifestate.',
      solutionSectionTitle: 'La Soluzione SmartGuard AI',
      solutionSectionContent: 'SmartGuard AI trasforma l\'approccio alla sicurezza digitale con l\'intelligenza artificiale.'
    };

    features = [
      {
        id: 1,
        title: 'Rilevamento Proattivo',
        shortDescription: 'L\'AI analizza pattern anomali per identificare minacce in tempo reale.',
        iconUrl: '/icons/eye-circuit.png'
      },
      {
        id: 2,
        title: 'Difesa Adattiva',
        shortDescription: 'Il sistema apprende e si adatta costantemente a nuove vulnerabilità.',
        iconUrl: '/icons/shield-network.png'
      },
      {
        id: 3,
        title: 'Privacy by Design',
        shortDescription: 'Sicurezza senza compromessi sulla privacy dei tuoi dati.',
        iconUrl: '/icons/privacy-lock.png'
      }
    ];
    settings = {
      primary_bg: '#181A20',
      primary_text: '#FFFFFF',
      hero_bg_image: '/static/hero-dark.jpg',
    };
  }

  return (
    <Layout
      title="SmartGuard AI - Sicurezza Intelligente"
      description="Protezione avanzata con intelligenza artificiale per anticipare e neutralizzare le minacce digitali prima che colpiscano."
      keywords="sicurezza, intelligenza artificiale, cybersecurity, protezione, AI, SmartGuard, rilevamento proattivo"
    >
      {/* Hero Section */}
      <HeroSection
        title={homepageContent.heroTitle}
        subtitle={homepageContent.heroSubtitle}
        ctaText={homepageContent.heroCtaText}
        logoSrc="/logos/smartguard_ai_minimal_1.png"
        heroBgImage={settings.hero_bg_image}
        primaryBg={settings.primary_bg}
        primaryText={settings.primary_text}
      />

      {/* Features Highlight */}
      <FeaturesHighlight features={features} />

      {/* Problem Section */}
      <section className="py-20 bg-apple-gray-50 dark:bg-apple-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-sofisticato dark:text-white mb-6">
                {homepageContent.problemSectionTitle}
              </h2>
              <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 mb-6 leading-relaxed">
                {homepageContent.problemSectionContent}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-apple-gray-600 dark:text-apple-gray-300">
                    <strong>Rilevamento tardivo:</strong> Le minacce vengono identificate solo dopo aver causato danni
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-apple-gray-600 dark:text-apple-gray-300">
                    <strong>Falsi positivi:</strong> Sistemi che generano troppi allarmi inutili
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-apple-gray-600 dark:text-apple-gray-300">
                    <strong>Complessità gestionale:</strong> Interfacce complicate e difficili da utilizzare
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-red-200 dark:border-red-800">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-300 mb-2">
                    Costi Nascosti della Sicurezza Reattiva
                  </h3>
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    Le aziende spendono in media il 60% in più per rimediare agli attacchi 
                    rispetto a quanto investirebbero in prevenzione proattiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white dark:bg-apple-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-verde-tecnologico/10 to-navy-sofisticato/10 p-8 rounded-2xl border border-verde-tecnologico/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-sofisticato to-verde-tecnologico rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-sofisticato dark:text-verde-tecnologico mb-2">
                    Prevenzione Intelligente
                  </h3>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300 text-sm">
                    SmartGuard AI riduce i costi di sicurezza del 40% attraverso 
                    la prevenzione proattiva e l'automazione intelligente.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-sofisticato dark:text-white mb-6">
                {homepageContent.solutionSectionTitle}
              </h2>
              <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 mb-6 leading-relaxed">
                {homepageContent.solutionSectionContent}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-verde-tecnologico rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-apple-gray-600 dark:text-apple-gray-300">
                    <strong>Prevenzione proattiva:</strong> Identifica e blocca le minacce prima che si manifestino
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-verde-tecnologico rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-apple-gray-600 dark:text-apple-gray-300">
                    <strong>Precisione elevata:</strong> Riduce i falsi positivi del 90% grazie all'AI avanzata
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-verde-tecnologico rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-apple-gray-600 dark:text-apple-gray-300">
                    <strong>Semplicità d'uso:</strong> Interfaccia intuitiva che non richiede expertise tecnica
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why SmartGuard AI Section */}
      <section className="py-20 bg-gradient-to-br from-navy-sofisticato via-blue-800 to-verde-tecnologico text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Perché Scegliere SmartGuard AI
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              La combinazione perfetta di innovazione, sicurezza e semplicità
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Precisione",
                description: "AI avanzata per rilevamenti accurati"
              },
              {
                icon: "🔒",
                title: "Privacy",
                description: "Protezione totale dei tuoi dati"
              },
              {
                icon: "⚡",
                title: "Velocità",
                description: "Risposta in tempo reale alle minacce"
              },
              {
                icon: "🎨",
                title: "Semplicità",
                description: "Interfaccia intuitiva e user-friendly"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white dark:bg-apple-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-sofisticato dark:text-white mb-6 animate-fade-in-up">
            Pronto a Trasformare la Tua Sicurezza?
          </h2>
          <p className="text-xl text-apple-gray-600 dark:text-apple-gray-300 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Unisciti alle aziende che hanno già scelto SmartGuard AI per proteggere il loro futuro digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              href="/contact" 
              variant="primary" 
              size="large"
              className="btn-hover-lift shadow-xl"
            >
              Inizia Ora - Demo Gratuita
            </Button>
            <Button 
              href="/features" 
              variant="secondary" 
              size="large"
              className="btn-hover-lift"
            >
              Esplora le Funzionalità
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

