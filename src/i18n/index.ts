import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import hy from './locales/hy.json'

export const languages = ['en', 'hy'] as const
export type AppLanguage = (typeof languages)[number]

const savedLanguage = localStorage.getItem('app-language')
const initialLanguage: AppLanguage =
  savedLanguage === 'hy' || savedLanguage === 'en' ? savedLanguage : 'en'

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hy: { translation: hy },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  localStorage.setItem('app-language', lng)
})

document.documentElement.lang = i18n.language

export default i18n
