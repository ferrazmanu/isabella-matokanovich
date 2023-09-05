import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
})
