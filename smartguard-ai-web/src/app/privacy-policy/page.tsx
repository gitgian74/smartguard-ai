import React from 'react';
import Layout from '@/components/layout/Layout';

export default function PrivacyPolicyPage() {
  return (
    <Layout
      title="Privacy Policy - SmartGuard AI"
      description="Informativa sulla privacy di SmartGuard AI. Scopri come proteggiamo e trattiamo i tuoi dati personali in conformità al GDPR."
      keywords="privacy policy, GDPR, protezione dati, privacy, SmartGuard AI"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-apple-gray-800 rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-sofisticato dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-6">
              <strong>Ultimo aggiornamento:</strong> 17 Giugno 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                1. Introduzione
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4">
                SmartGuard AI ("noi", "nostro" o "la Società") si impegna a proteggere la privacy e la sicurezza dei dati personali dei nostri utenti. Questa Privacy Policy descrive come raccogliamo, utilizziamo, conserviamo e proteggiamo le informazioni personali in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) e alle leggi italiane sulla privacy.
              </p>
              <p className="text-apple-gray-600 dark:text-apple-gray-300">
                La presente informativa si applica a tutti i servizi offerti da SmartGuard AI, inclusi il nostro sito web, le applicazioni e i servizi di sicurezza informatica.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                2. Titolare del Trattamento
              </h2>
              <div className="bg-apple-gray-50 dark:bg-apple-gray-700 p-6 rounded-lg">
                <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-2">
                  <strong>SmartGuard AI S.r.l.</strong>
                </p>
                <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-2">
                  Sede legale: Via della Tecnologia, 123 - 20100 Milano (MI), Italia
                </p>
                <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-2">
                  Email: privacy@smartguard-ai.com
                </p>
                <p className="text-apple-gray-600 dark:text-apple-gray-300">
                  P.IVA: 12345678901
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                3. Dati Personali Raccolti
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4">
                Raccogliamo i seguenti tipi di dati personali:
              </p>
              
              <h3 className="text-xl font-semibold text-navy-sofisticato dark:text-white mb-3">
                3.1 Dati forniti volontariamente
              </h3>
              <ul className="list-disc pl-6 text-apple-gray-600 dark:text-apple-gray-300 mb-4 space-y-1">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Nome dell'azienda e ruolo professionale</li>
                <li>Messaggi e comunicazioni inviate tramite i nostri moduli di contatto</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-sofisticato dark:text-white mb-3">
                3.2 Dati raccolti automaticamente
              </h3>
              <ul className="list-disc pl-6 text-apple-gray-600 dark:text-apple-gray-300 mb-4 space-y-1">
                <li>Indirizzo IP e informazioni sulla connessione</li>
                <li>Tipo di browser e sistema operativo</li>
                <li>Pagine visitate e tempo di permanenza</li>
                <li>Referrer e pagine di uscita</li>
                <li>Cookie e tecnologie simili (vedi Cookie Policy)</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-sofisticato dark:text-white mb-3">
                3.3 Dati dei servizi di sicurezza
              </h3>
              <ul className="list-disc pl-6 text-apple-gray-600 dark:text-apple-gray-300 space-y-1">
                <li>Log di sicurezza e eventi di sistema</li>
                <li>Metadati delle minacce rilevate (senza contenuti sensibili)</li>
                <li>Configurazioni di sicurezza e preferenze</li>
                <li>Statistiche di utilizzo anonimizzate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                4. Finalità del Trattamento
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4">
                Utilizziamo i dati personali per le seguenti finalità:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-navy-sofisticato pl-4">
                  <h3 className="font-semibold text-navy-sofisticato dark:text-white mb-2">
                    Erogazione dei servizi
                  </h3>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300">
                    Base giuridica: Esecuzione del contratto (Art. 6.1.b GDPR)
                  </p>
                </div>
                
                <div className="border-l-4 border-verde-tecnologico pl-4">
                  <h3 className="font-semibold text-navy-sofisticato dark:text-white mb-2">
                    Comunicazioni commerciali e marketing
                  </h3>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300">
                    Base giuridica: Consenso (Art. 6.1.a GDPR)
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-navy-sofisticato dark:text-white mb-2">
                    Miglioramento dei servizi e analisi
                  </h3>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300">
                    Base giuridica: Legittimo interesse (Art. 6.1.f GDPR)
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-navy-sofisticato dark:text-white mb-2">
                    Adempimenti legali e sicurezza
                  </h3>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300">
                    Base giuridica: Obbligo legale (Art. 6.1.c GDPR)
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                5. Condivisione dei Dati
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4">
                Non vendiamo, affittiamo o condividiamo i dati personali con terze parti per scopi commerciali. Possiamo condividere i dati solo nei seguenti casi:
              </p>
              <ul className="list-disc pl-6 text-apple-gray-600 dark:text-apple-gray-300 space-y-2">
                <li><strong>Fornitori di servizi:</strong> Partner tecnologici che ci aiutano a erogare i nostri servizi, vincolati da accordi di riservatezza</li>
                <li><strong>Obblighi legali:</strong> Quando richiesto dalla legge o dalle autorità competenti</li>
                <li><strong>Protezione dei diritti:</strong> Per proteggere i nostri diritti, proprietà o sicurezza</li>
                <li><strong>Consenso esplicito:</strong> Con il tuo consenso esplicito per finalità specifiche</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                6. Sicurezza dei Dati
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4">
                Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i dati personali:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-apple-gray-50 dark:bg-apple-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-sofisticato dark:text-white mb-2">Misure Tecniche</h4>
                  <ul className="text-sm text-apple-gray-600 dark:text-apple-gray-300 space-y-1">
                    <li>• Crittografia end-to-end</li>
                    <li>• Autenticazione multi-fattore</li>
                    <li>• Monitoraggio continuo</li>
                    <li>• Backup sicuri</li>
                  </ul>
                </div>
                <div className="bg-apple-gray-50 dark:bg-apple-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-sofisticato dark:text-white mb-2">Misure Organizzative</h4>
                  <ul className="text-sm text-apple-gray-600 dark:text-apple-gray-300 space-y-1">
                    <li>• Formazione del personale</li>
                    <li>• Controlli di accesso</li>
                    <li>• Audit regolari</li>
                    <li>• Procedure di incident response</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                7. I Tuoi Diritti
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4">
                In conformità al GDPR, hai i seguenti diritti:
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-navy-sofisticato rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-sofisticato dark:text-white">Diritto di accesso</h4>
                    <p className="text-apple-gray-600 dark:text-apple-gray-300 text-sm">Ottenere informazioni sui dati che trattiamo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-navy-sofisticato rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-sofisticato dark:text-white">Diritto di rettifica</h4>
                    <p className="text-apple-gray-600 dark:text-apple-gray-300 text-sm">Correggere dati inesatti o incompleti</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-navy-sofisticato rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-sofisticato dark:text-white">Diritto di cancellazione</h4>
                    <p className="text-apple-gray-600 dark:text-apple-gray-300 text-sm">Richiedere la cancellazione dei tuoi dati</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-navy-sofisticato rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-sofisticato dark:text-white">Diritto di portabilità</h4>
                    <p className="text-apple-gray-600 dark:text-apple-gray-300 text-sm">Ottenere i tuoi dati in formato strutturato</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-verde-tecnologico/10 border border-verde-tecnologico/20 rounded-lg">
                <p className="text-apple-gray-600 dark:text-apple-gray-300">
                  <strong>Come esercitare i tuoi diritti:</strong> Invia una richiesta a{' '}
                  <a href="mailto:privacy@smartguard-ai.com" className="text-navy-sofisticato hover:underline">
                    privacy@smartguard-ai.com
                  </a>{' '}
                  specificando il diritto che intendi esercitare. Risponderemo entro 30 giorni.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                8. Conservazione dei Dati
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4">
                Conserviamo i dati personali solo per il tempo necessario alle finalità per cui sono stati raccolti:
              </p>
              <ul className="list-disc pl-6 text-apple-gray-600 dark:text-apple-gray-300 space-y-1">
                <li><strong>Dati di contatto:</strong> Fino alla revoca del consenso o per 2 anni dall'ultimo contatto</li>
                <li><strong>Dati contrattuali:</strong> Per la durata del contratto + 10 anni per obblighi fiscali</li>
                <li><strong>Log di sicurezza:</strong> 12 mesi per finalità di sicurezza</li>
                <li><strong>Dati di navigazione:</strong> 13 mesi dalla raccolta</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                9. Trasferimenti Internazionali
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300">
                I dati personali sono trattati principalmente all'interno dell'Unione Europea. Eventuali trasferimenti verso paesi terzi avvengono solo con garanzie adeguate (decisioni di adeguatezza, clausole contrattuali standard, o altre misure di salvaguardia approvate dalla Commissione Europea).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                10. Modifiche alla Privacy Policy
              </h2>
              <p className="text-apple-gray-600 dark:text-apple-gray-300">
                Ci riserviamo il diritto di modificare questa Privacy Policy. Le modifiche sostanziali saranno comunicate tramite email o avviso prominente sul sito web almeno 30 giorni prima dell'entrata in vigore.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy-sofisticato dark:text-white mb-4">
                11. Contatti
              </h2>
              <div className="bg-apple-gray-50 dark:bg-apple-gray-700 p-6 rounded-lg">
                <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4">
                  Per qualsiasi domanda relativa a questa Privacy Policy o al trattamento dei tuoi dati personali:
                </p>
                <div className="space-y-2">
                  <p className="text-apple-gray-600 dark:text-apple-gray-300">
                    <strong>Data Protection Officer:</strong> dpo@smartguard-ai.com
                  </p>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300">
                    <strong>Email generale:</strong> privacy@smartguard-ai.com
                  </p>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300">
                    <strong>Autorità di controllo:</strong> Garante per la protezione dei dati personali (www.gpdp.it)
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

