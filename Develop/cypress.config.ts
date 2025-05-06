import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    specPattern: 'cypress/component/**/*.spec.tsx',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  e2e: {
    baseUrl: 'http://127.0.0.1:3001/',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: false,
  },
})
