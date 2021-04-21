/*
 ** Headers of the page
 */

const head = {
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Yusufcan Yılmaz',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'yandex-verification', content: 'ab8fd41b5562f8ae' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || '',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
};

export default head;
