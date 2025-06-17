import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactPage() {
  return (
    <Layout
      title="Contatti - SmartGuard AI"
      description="Contatta il team di SmartGuard AI per una demo personalizzata o per ricevere informazioni sui nostri servizi di sicurezza intelligente."
      keywords="contatti, demo, SmartGuard AI, sicurezza, consulenza, supporto"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-sofisticato via-blue-800 to-verde-tecnologico text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Parliamo del Tuo Futuro Digitale
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Il nostro team di esperti è pronto ad aiutarti a trovare la soluzione 
            di sicurezza perfetta per le tue esigenze.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white dark:bg-apple-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-navy-sofisticato dark:text-white mb-6">
                Richiedi una Consulenza
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-8">
                Il nostro team di esperti è pronto ad aiutarti a trovare la soluzione 
                di sicurezza perfetta per le tue esigenze.
              </p>
              
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <h2 className="text-3xl font-bold text-navy-sofisticato dark:text-white mb-6">
                Informazioni di Contatto
              </h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-sofisticato to-verde-tecnologico rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-sofisticato dark:text-white mb-1">Email</h3>
                    <p className="text-apple-gray-600 dark:text-apple-gray-300">info@smartguard-ai.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-sofisticato to-verde-tecnologico rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-sofisticato dark:text-white mb-1">Telefono</h3>
                    <p className="text-apple-gray-600 dark:text-apple-gray-300">+39 02 1234 5678</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-sofisticato to-verde-tecnologico rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-sofisticato dark:text-white mb-1">Sede</h3>
                    <p className="text-apple-gray-600 dark:text-apple-gray-300">Milano, Italia</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gradient-to-br from-apple-gray-50 to-blue-50 dark:from-apple-gray-700 dark:to-blue-900/20 rounded-2xl">
                <h3 className="text-xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                  Tempi di Risposta
                </h3>
                <ul className="space-y-2 text-apple-gray-600 dark:text-apple-gray-300">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-verde-tecnologico mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Richieste demo: entro 2 ore lavorative
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-verde-tecnologico mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Informazioni commerciali: entro 4 ore lavorative
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-verde-tecnologico mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Supporto tecnico: entro 24 ore
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-apple-gray-50 dark:bg-apple-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-sofisticato dark:text-white mb-4">
              Domande Frequenti
            </h2>
            <p className="text-xl text-apple-gray-600 dark:text-apple-gray-300">
              Risposte alle domande più comuni sui nostri servizi
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Quanto tempo richiede l'implementazione di SmartGuard AI?",
                answer: "L'implementazione standard richiede 2-4 settimane, a seconda della complessità dell'infrastruttura esistente. Offriamo supporto completo durante tutto il processo."
              },
              {
                question: "SmartGuard AI è compatibile con i sistemi esistenti?",
                answer: "Sì, SmartGuard AI è progettato per integrarsi facilmente con la maggior parte dei sistemi di sicurezza esistenti attraverso API standard e protocolli di comunicazione comuni."
              },
              {
                question: "Che tipo di supporto offrite dopo l'implementazione?",
                answer: "Offriamo supporto 24/7, aggiornamenti automatici, monitoraggio proattivo e un team dedicato di esperti per garantire prestazioni ottimali."
              },
              {
                question: "È possibile personalizzare SmartGuard AI per esigenze specifiche?",
                answer: "Assolutamente. Offriamo soluzioni personalizzate per adattarsi alle specifiche esigenze di sicurezza e conformità della tua organizzazione."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-apple-gray-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy-sofisticato dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-apple-gray-600 dark:text-apple-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}