
const config = {

  // general configuration
  NODE_ENV: process.env.NODE_ENV || 'development',
  DEBUG: (process.env.NODE_ENV !== 'production'),

  // API configuration
  API_ROOT: process.env.API_ROOT || 'http://localhost:3001',

  // LOCALIZATION
  SUPPORTED_LANG: process.env.SUPPORTED_LANG || 'fi,en',
};

export default config;
