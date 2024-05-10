import {defineCliConfig} from 'sanity/cli'

const ID = process.env.projectId

export default defineCliConfig({
  api: {
    projectId: ID,
    dataset: 'production',
  },
})
