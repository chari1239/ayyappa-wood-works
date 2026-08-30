export const CONFIG = {
  SANITY_PROJECT_ID: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  SANITY_DATASET: import.meta.env.VITE_SANITY_DATASET || 'production',
  SANITY_API_VERSION: import.meta.env.VITE_SANITY_API_VERSION || '2026-08-23',
  BUSINESS_PHONE: import.meta.env.VITE_BUSINESS_PHONE || '919989356819',
  WHATSAPP_NUMBER: import.meta.env.VITE_WHATSAPP_NUMBER || '+91 9533235113',
  BUSINESS_LOCATION_URL: import.meta.env.VITE_BUSINESS_LOCATION_URL || 'https://maps.app.goo.gl/iwwGT4W2nbigiAvw6',
};

export const HAS_SANITY_CONFIG = Boolean(CONFIG.SANITY_PROJECT_ID && CONFIG.SANITY_DATASET);

export const DEFAULT_WHATSAPP_MESSAGE = 'Hello, I am interested in your wooden door designs.';

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  const number = CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
