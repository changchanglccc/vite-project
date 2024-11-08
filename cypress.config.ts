import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";
import cypressOnFix from "cypress-on-fix";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      on = cypressOnFix(on);
      // implement node event listeners here
      allureCypress(on, config, {
        resultsDir: './allure-results'
      });

      return config;
    }
  },
  // // default
  // viewportWidth: 1000,
  // viewportHeight: 660,

  // // iphone 14 pro max
  // viewportWidth: 430,
  // viewportHeight: 932
});
