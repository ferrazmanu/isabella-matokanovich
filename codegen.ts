import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema:
    'https://api-sa-east-1.graphcms.com/v2/cl4vro6t81smo01un1qha7iw3/master',
  documents: './src/graphql/**/*.graphql',
  generates: {
    './graphql/generated.ts': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: false,
        withComponent: false
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
