import mode from './config/mode';
import head from './config/head';
import loading from './config/loading';
import css from './config/css';
import plugins from './config/plugins';
import buildModules from './config/build_modules';
import modules from './config/modules';
import build from './config/build';
// import env from './config/env';
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
  // env,
  tailwindcss,
  sitemap: {
    hostname: 'https://yusufcanyilmaz.com',
    gzip: true,
  },
};
