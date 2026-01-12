// src/components/LanguageSwitcher.tsx
import { useStore } from '@nanostores/react';
import { currentLanguage, setLanguage, type Language } from '../stores/languageStore';

export default function LanguageSwitcher() {
  const lang = useStore(currentLanguage);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  return (
    <div className="language-switcher" role="group" aria-label="Language selector">
      <button
        className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('es')}
        aria-pressed={lang === 'es'}
        aria-label="Español"
      >
        ES
      </button>
      <span className="lang-separator" aria-hidden="true">|</span>
      <button
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

// Estilos CSS en archivo separado: src/styles/components/language-switcher.css