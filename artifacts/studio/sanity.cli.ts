import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'qlzc99he',
    dataset: 'production'
  },
  /** Studio is served at https://rbplab.sanity.studio */
  studioHost: 'rbplab',

  deployment: {
    appId: 'g9z81iayvs6uhu3lnj5fnxn2',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
