const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
