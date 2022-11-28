const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://dev.starboardhq.com/incorporation/servicepteltd/setup',
    defaultCommandTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
