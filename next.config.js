const withPWA = require('next-pwa')
const Dotenv = require("dotenv-webpack");

module.exports = withPWA({
  pwa: {
    dest: 'public',
    importScripts: [
      '/worker.js'
    ]
  },
  webpack: (config) => {

    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  env: {
    API_URL: process.env.API_URL,
    MARVEL_API_PUBLIC_KEY: process.env.MARVEL_API_PUBLIC_KEY,
    MARVEL_API_PRIVATE_KEY: process.env.MARVEL_API_PRIVATE_KEY,
    MARVEL_API_TS: process.env.MARVEL_API_TS,
  },
})