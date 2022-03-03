/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
  i18n: {
    locales: ['en-US', 'pt-BR', 'pt-PT'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
}
