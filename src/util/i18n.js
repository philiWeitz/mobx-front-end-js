
import _ from 'lodash';
import moment from 'moment';
import i18next from 'i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

import config from '../config';

const en = require('../../localization/en');

// parse the languages from a comma separated string
const supportedLang = config.SUPPORTED_LANG;

// require all supported languages
const allResources = {
  en,
};

// pick only those resources which are defined
const resources = _.pick(allResources, supportedLang);

// the default language is the one defined first
const fallbackLanguage = supportedLang[0] || 'en';


const initI18n = (callback) => {
  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: fallbackLanguage,

      resources,
      debug: config.DEBUG,
      defaultNS: 'common',
      fallbackNS: 'common',
    }, () => {
      moment.locale(i18next.language);
      if (callback) {
        callback();
      }
    });
};

const t = (key, params = {}, namespace = null) => {
  const nameSpaceKey = namespace
    ? `${namespace}:${key.toLowerCase()}` : key.toLowerCase();
  return i18next.t(nameSpaceKey, params);
};

const transNameSpace = (namespace) => {
  return (key, params) => {
    return t(key, params, namespace);
  };
};

const changeLanguage = (lang) => {
  return new Promise((resolve) => {
    i18next.changeLanguage(lang, () => {
      resolve();
    });
    moment.locale(lang);
  });
};

module.exports = {
  t,
  initI18n,
  transNameSpace,
  changeLanguage,
  supportedLang,
};
