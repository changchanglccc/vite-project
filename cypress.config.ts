import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on) {
      // implement node event listeners here
      allureCypress(on, {
        resultsDir: './allure-results'
      });
    }
  },
  // // default
  // viewportWidth: 1000,
  // viewportHeight: 660,

  // // iphone 14 pro max
  // viewportWidth: 430,
  // viewportHeight: 932
});
