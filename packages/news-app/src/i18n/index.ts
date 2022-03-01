import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'

import enUS from './locales/en-US/translation.json'
import ptBR from './locales/pt-BR/translation.json'
import ptPT from './locales/pt-PT/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    'en-US': {
      translation: enUS,
    },
    'pt-BR': {
      translation: ptBR,
    },
    'pt-PT': {
      translation: ptPT,
    },
  },
  fallbackLng: 'en-US',
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
})

export { i18n, I18nextProvider }
