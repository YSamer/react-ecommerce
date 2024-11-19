import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations
const resources = {
  en: {
    translation: {
      saleText:
        "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
      shopNow: "Shop Now",
      en: "English",
      ar: "Arabic",
    },
  },
  ar: {
    translation: {
      saleText:
        "تخفيضات الصيف لجميع ملابس السباحة والتوصيل السريع مجانًا - خصم 50٪!",
      shopNow: "تسوق الآن",
      en: "انجليزي",
      ar: "العربية",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
