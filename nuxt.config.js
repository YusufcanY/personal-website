import mode from './config/mode';
import head from './config/head';
import loading from './config/loading';
import css from './config/css';
import plugins from './config/plugins';
import buildModules from './config/build_modules';
import modules from './config/modules';
import build from './config/build';
import tailwindcss from './config/tailwind';

export default {
  mode,
  head,
  loading,
  css,
  plugins,
  buildModules,
  modules,
  build,
  tailwindcss,
  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      version: 2,
      size: 'normal',
      siteKey: '6LfSnCUeAAAAAOQbA5hmKrjHoRud49oAhQIODP0Z',
    },
  },
  sitemap: {
    hostname: 'https://yusufcanyilmaz.com',
    gzip: true,
  },
  robots: {
    UserAgent: '*',
    Sitemap: 'https://yusufcanyilmaz.com/sitemap.xml',
  },
};
