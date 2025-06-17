// API client per comunicare con il backend Flask
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
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

interface Feature {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription?: string;
  iconUrl?: string;
  benefits?: string;
  orderIndex: number;
  isActive: boolean;
}

interface ContactSubmission {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  privacyAccepted: boolean;
}

// Funzione helper per le chiamate API
async function apiCall<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// Homepage API
export async function fetchHomepageData(): Promise<HomepageData | null> {
  try {
    const response = await apiCall<HomepageData>('/homepage');
    
    if (response.success && response.data) {
      return response.data;
    }
    
    // Fallback ai dati di default se l'API fallisce
    return {
      heroTitle: 'SmartGuard AI: Protezione Intelligente. Semplificata.',
      heroSubtitle: 'La prossima generazione di sicurezza, alimentata dall\'intelligenza artificiale per anticipare e neutralizzare le minacce prima che colpiscano.',
      heroCtaText: 'Richiedi una Demo',
      problemSectionTitle: 'Il Problema della Sicurezza Tradizionale',
      problemSectionContent: 'Le soluzioni di sicurezza tradizionali reagiscono alle minacce dopo che si sono già manifestate.',
      solutionSectionTitle: 'La Soluzione SmartGuard AI',
      solutionSectionContent: 'SmartGuard AI trasforma l\'approccio alla sicurezza digitale con l\'intelligenza artificiale.'
    };
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return null;
  }
}

// Features API
export async function fetchFeaturesPreview(limit: number = 3): Promise<Feature[]> {
  try {
    const response = await apiCall<Feature[]>(`/features?limit=${limit}`);
    
    if (response.success && response.data) {
      return response.data;
    }
    
    // Fallback ai dati di default se l'API fallisce
    return [
      {
        id: 1,
        title: 'Rilevamento Proattivo',
        shortDescription: 'L\'AI analizza pattern anomali per identificare minacce in tempo reale, anticipando gli attacchi prima che possano causare danni.',
        iconUrl: '/icons/eye-circuit.png',
        orderIndex: 1,
        isActive: true
      },
      {
        id: 2,
        title: 'Difesa Adattiva',
        shortDescription: 'Il sistema apprende e si adatta costantemente a nuove vulnerabilità, migliorando continuamente le sue capacità di protezione.',
        iconUrl: '/icons/shield-network.png',
        orderIndex: 2,
        isActive: true
      },
      {
        id: 3,
        title: 'Privacy by Design',
        shortDescription: 'Sicurezza senza compromessi sulla privacy dei tuoi dati, con crittografia end-to-end e controllo totale delle informazioni.',
        iconUrl: '/icons/privacy-lock.png',
        orderIndex: 3,
        isActive: true
      }
    ];
  } catch (error) {
    console.error('Error fetching features:', error);
    return [];
  }
}

export async function fetchAllFeatures(): Promise<Feature[]> {
  try {
    const response = await apiCall<Feature[]>('/features');
    
    if (response.success && response.data) {
      return response.data;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching all features:', error);
    return [];
  }
}

// Contact API
export async function submitContactForm(data: ContactSubmission): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await apiCall('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    
    if (response.success) {
      return {
        success: true,
        message: 'Richiesta inviata con successo! Ti contatteremo presto.'
      };
    } else {
      return {
        success: false,
        error: response.error || 'Errore durante l\'invio della richiesta'
      };
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: 'Errore di connessione. Riprova più tardi.'
    };
  }
}

// Settings API
export async function fetchSiteSettings(): Promise<Record<string, string>> {
  try {
    const response = await apiCall<Record<string, string>>('/settings');
    
    if (response.success && response.data) {
      return response.data;
    }
    
    return {};
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return {};
  }
}

// Utility function per verificare se l'API è disponibile
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/homepage`);
    return response.ok;
  } catch (error) {
    console.error('API health check failed:', error);
    return false;
  }
}

