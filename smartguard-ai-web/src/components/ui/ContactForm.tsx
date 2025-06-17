'use client';

import React, { useState } from 'react';
import { submitContactForm } from '@/lib/api';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  privacyAccepted: boolean;
}

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    privacyAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = (): string[] => {
    const errors: string[] = [];
    
    if (!formData.firstName.trim()) errors.push('Nome è obbligatorio');
    if (!formData.lastName.trim()) errors.push('Cognome è obbligatorio');
    if (!formData.email.trim()) errors.push('Email è obbligatoria');
    if (!formData.subject.trim()) errors.push('Oggetto è obbligatorio');
    if (!formData.message.trim()) errors.push('Messaggio è obbligatorio');
    if (!formData.privacyAccepted) errors.push('È necessario accettare la Privacy Policy');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push('Formato email non valido');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      setSubmitStatus({
        type: 'error',
        message: errors.join(', ')
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Richiesta inviata con successo!'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          privacyAccepted: false
        });
        
        if (onSuccess) onSuccess();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Errore durante l\'invio della richiesta'
        });
        
        if (onError) onError(result.error || 'Errore sconosciuto');
      }
    } catch (error) {
      const errorMessage = 'Errore di connessione. Riprova più tardi.';
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
      
      if (onError) onError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Status Message */}
      {submitStatus.type && (
        <div className={`p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          <p className="text-sm font-medium">{submitStatus.message}</p>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
            Nome *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-gray-600 rounded-lg focus:ring-2 focus:ring-navy-sofisticato focus:border-transparent dark:bg-apple-gray-800 dark:text-white transition-colors"
            placeholder="Il tuo nome"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
            Cognome *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-gray-600 rounded-lg focus:ring-2 focus:ring-navy-sofisticato focus:border-transparent dark:bg-apple-gray-800 dark:text-white transition-colors"
            placeholder="Il tuo cognome"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-gray-600 rounded-lg focus:ring-2 focus:ring-navy-sofisticato focus:border-transparent dark:bg-apple-gray-800 dark:text-white transition-colors"
          placeholder="la-tua-email@esempio.com"
        />
      </div>

      {/* Company and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
            Azienda
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-gray-600 rounded-lg focus:ring-2 focus:ring-navy-sofisticato focus:border-transparent dark:bg-apple-gray-800 dark:text-white transition-colors"
            placeholder="Nome della tua azienda"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-gray-600 rounded-lg focus:ring-2 focus:ring-navy-sofisticato focus:border-transparent dark:bg-apple-gray-800 dark:text-white transition-colors"
            placeholder="+39 123 456 7890"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
          Oggetto *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-gray-600 rounded-lg focus:ring-2 focus:ring-navy-sofisticato focus:border-transparent dark:bg-apple-gray-800 dark:text-white transition-colors"
        >
          <option value="">Seleziona un oggetto</option>
          <option value="Demo Richiesta">Richiesta Demo</option>
          <option value="Informazioni Commerciali">Informazioni Commerciali</option>
          <option value="Supporto Tecnico">Supporto Tecnico</option>
          <option value="Partnership">Partnership</option>
          <option value="Altro">Altro</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-apple-gray-700 dark:text-apple-gray-300 mb-2">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-apple-gray-300 dark:border-apple-gray-600 rounded-lg focus:ring-2 focus:ring-navy-sofisticato focus:border-transparent dark:bg-apple-gray-800 dark:text-white transition-colors resize-vertical"
          placeholder="Descrivi la tua richiesta o le tue esigenze..."
        />
      </div>

      {/* Privacy Policy */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacyAccepted"
          name="privacyAccepted"
          checked={formData.privacyAccepted}
          onChange={handleInputChange}
          required
          className="mt-1 h-4 w-4 text-navy-sofisticato focus:ring-navy-sofisticato border-apple-gray-300 rounded"
        />
        <label htmlFor="privacyAccepted" className="ml-3 text-sm text-apple-gray-600 dark:text-apple-gray-300">
          Accetto la{' '}
          <a 
            href="/privacy-policy" 
            className="text-navy-sofisticato hover:text-verde-tecnologico underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{' '}
          e autorizzo il trattamento dei miei dati personali per rispondere alla mia richiesta. *
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
            isSubmitting
              ? 'bg-apple-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-navy-sofisticato to-verde-tecnologico hover:from-navy-sofisticato/90 hover:to-verde-tecnologico/90 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Invio in corso...
            </span>
          ) : (
            'Invia Richiesta'
          )}
        </button>
      </div>
    </form>
  );
}

