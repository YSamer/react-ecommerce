import i18n from "./i18n";

/**
 * Global translation function
 * @param {string} key - The key for the translation string
 * @param {object} options - Optional parameters for interpolation
 * @returns {string} - Translated text
 */
const tr = (key, options = {}) => {
  return i18n.t(key, options);
};

// Attach the function to the global window object
if (typeof window !== "undefined") {
  window.tr = tr;
}
