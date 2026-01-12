// src/stores/languageStore.ts

import { atom } from 'nanostores';

export type Language = 'es' | 'en';

// Estado global del idioma
export const currentLanguage = atom<Language>('es');

// Función helper para cambiar el idioma
export function setLanguage(lang: Language) {
  currentLanguage.set(lang);
  
  // Guardar preferencia en localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', lang);
  }
}

// Función para inicializar el idioma desde localStorage
export function initLanguage() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved && (saved === 'es' || saved === 'en')) {
      currentLanguage.set(saved);
    }
  }
}

// Helper para obtener el texto traducido
export function t(translations: { es: string; en: string }, lang: Language): string {
  return translations[lang];
}