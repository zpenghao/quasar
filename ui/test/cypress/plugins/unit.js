/* eslint-env node */
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import { injectDevServer } from '@quasar/quasar-app-extension-testing-e2e-cypress/cct-dev-server'

module.exports = async (on, config) => {
  if (config.testingType === 'component') {
    await injectDevServer(on, config)
  }

  return config
}
