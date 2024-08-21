// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
// Создайте объект с переводами для всех языков
const resources = {
  en: {
    translation: enTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru", // Язык по умолчанию
  fallbackLng: "ru", // Язык по умолчанию, если перевод для выбранного языка не найден
  interpolation: {
    escapeValue: false, // Не экранировать значения для React
  },
});

export default i18n;
