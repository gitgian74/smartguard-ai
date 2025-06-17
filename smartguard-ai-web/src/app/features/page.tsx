import React from 'react';
import Layout from '@/components/layout/Layout';

export default function FeaturesPage() {
  const features = [
    {
      id: 1,
      title: "Rilevamento Proattivo con AI",
      description: "Il nostro sistema di intelligenza artificiale analizza continuamente i pattern di comportamento per identificare minacce potenziali prima che si manifestino. Utilizzando algoritmi di machine learning avanzati, SmartGuard AI può riconoscere anomalie sottili che sfuggirebbero ai sistemi tradizionali.",
      benefits: [
        "Identificazione precoce delle minacce",
        "Riduzione dei falsi positivi del 90%",
        "Analisi comportamentale in tempo reale",
        "Apprendimento continuo dai nuovi pattern"
      ],
      icon: "🔍"
    },
    {
      id: 2,
      title: "Protezione Completa e Integrata",
      description: "Una soluzione unificata che protegge tutti i punti di accesso della tua infrastruttura digitale. Dalla rete ai dispositivi endpoint, SmartGuard AI offre una copertura completa con un'unica interfaccia di gestione.",
      benefits: [
        "Protezione multi-livello",
        "Gestione centralizzata",
        "Integrazione con sistemi esistenti",
        "Scalabilità automatica"
      ],
      icon: "🛡️"
    },
    {
      id: 3,
      title: "Apprendimento Continuo",
      description: "Il sistema evolve costantemente, adattandosi alle nuove minacce e migliorando le proprie capacità di difesa. Ogni interazione contribuisce a rendere la protezione più efficace per tutti gli utenti della rete SmartGuard AI.",
      benefits: [
        "Aggiornamenti automatici delle difese",
        "Condivisione intelligente delle minacce",
        "Miglioramento continuo delle performance",
        "Adattamento alle nuove vulnerabilità"
      ],
      icon: "🧠"
    },
    {
      id: 4,
      title: "Privacy by Design",
      description: "La privacy non è un'aggiunta, ma il fondamento su cui è costruito SmartGuard AI. Tutti i dati vengono processati localmente quando possibile, e le comunicazioni sono crittografate end-to-end.",
      benefits: [
        "Crittografia end-to-end",
        "Processamento locale dei dati",
        "Conformità GDPR completa",
        "Controllo totale sui propri dati"
      ],
      icon: "🔒"
    },
    {
      id: 5,
      title: "Interfaccia Intuitiva",
      description: "Un'esperienza utente progettata per essere semplice ma potente. Dashboard chiare, notifiche intelligenti e controlli granulari rendono la gestione della sicurezza accessibile a tutti.",
      benefits: [
        "Dashboard personalizzabili",
        "Notifiche intelligenti",
        "Controlli granulari",
        "Interfaccia responsive"
      ],
      icon: "📱"
    },
    {
      id: 6,
      title: "Tecnologia Avanzata",
      description: "Basato sulle più recenti innovazioni in campo di intelligenza artificiale, machine learning e cybersecurity. SmartGuard AI utilizza reti neurali profonde e algoritmi di analisi predittiva.",
      benefits: [
        "Reti neurali profonde",
        "Analisi predittiva",
        "Elaborazione in tempo reale",
        "Architettura cloud-native"
      ],
      icon: "⚡"
    }
  ];

  return (
    <Layout
      title="Funzionalità - SmartGuard AI"
      description="Scopri tutte le funzionalità avanzate di SmartGuard AI: rilevamento proattivo, protezione integrata, apprendimento continuo e privacy by design."
      keywords="funzionalità, AI, sicurezza, rilevamento proattivo, protezione, privacy, machine learning"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-sofisticato via-blue-800 to-verde-tecnologico text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Funzionalità Avanzate
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Scopri come SmartGuard AI rivoluziona la sicurezza digitale con tecnologie all'avanguardia
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-apple-gray-50 dark:bg-apple-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="bg-white dark:bg-apple-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{feature.icon}</div>
                  <h2 className="text-2xl font-bold text-navy-sofisticato dark:text-white">
                    {feature.title}
                  </h2>
                </div>
                
                <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-navy-sofisticato dark:text-white mb-3">
                    Vantaggi principali:
                  </h3>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-apple-gray-600 dark:text-apple-gray-300">
                        <svg className="w-5 h-5 text-verde-tecnologico mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-apple-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-sofisticato dark:text-white mb-6">
            Pronto a Rivoluzionare la Tua Sicurezza?
          </h2>
          <p className="text-xl text-apple-gray-600 dark:text-apple-gray-300 mb-8">
            Scopri come SmartGuard AI può proteggere la tua organizzazione con una demo personalizzata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-navy-sofisticato text-white hover:bg-blue-800 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl btn-hover-lift"
            >
              Richiedi una Demo
            </a>
            <a
              href="/contact"
              className="border-2 border-navy-sofisticato text-navy-sofisticato hover:bg-navy-sofisticato hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200"
            >
              Contatta il Team
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

