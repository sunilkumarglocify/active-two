
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./locales/en/translation.json";
import cnTranslation from "./locales/cn/translation.json";

const savedLanguage = localStorage.getItem("language");
console.log("saved language: " + savedLanguage)


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    cn: { translation: cnTranslation },
  },
  lng: savedLanguage || "en",
  interpolation: {
    escapeValue: false,
  },
});
