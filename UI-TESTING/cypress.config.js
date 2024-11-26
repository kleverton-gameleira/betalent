const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.saucedemo.com/'
  },
  video:false,
  viewportHeight:1080,
  viewportWidth:1920
});
