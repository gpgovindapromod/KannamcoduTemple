/**
 * Application Helper Utilities
 */

import { TEMPLE_INFO } from './constants';

/**
 * Creates an authorized WhatsApp click-to-chat URL with safely escaped message body.
 * @param {string} message 
 * @param {string} phone 
 * @returns {string}
 */
export function buildWhatsAppLink(message, phone = TEMPLE_INFO.whatsapp.raw) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message || '');
  return `https://wa.me/${cleanPhone}${encodedText ? `?text=${encodedText}` : ''}`;
}

/**
 * Normalizes and formats telephone links
 * @param {string} phone 
 * @returns {string}
 */
export function buildTelLink(phone) {
  if (!phone) return '#';
  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  return `tel:${cleanPhone}`;
}

/**
 * Safe local/session storage wrapper with error handling for private browsing / blocked cookies
 */
export const safeStorage = {
  get: (key, fallback = null, isSession = true) => {
    try {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      const item = storage.getItem(key);
      return item !== null ? item : fallback;
    } catch {
      return fallback;
    }
  },
  set: (key, value, isSession = true) => {
    try {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      storage.setItem(key, String(value));
    } catch {
      // Ignore storage quota or permission errors silently
    }
  },
  remove: (key, isSession = true) => {
    try {
      const storage = isSession ? window.sessionStorage : window.localStorage;
      storage.removeItem(key);
    } catch {
      // Ignore
    }
  }
};
