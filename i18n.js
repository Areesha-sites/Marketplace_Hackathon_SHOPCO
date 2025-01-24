import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define your translations (you'll likely have this in separate files)
const resources = {
  en: {
    translation: {
      "hello": "hello world" 
    }
  },
  es: {
    translation: {
      "hello": "hola mundo" 
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;