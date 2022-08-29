import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client'


const httpLink = createHttpLink({
    // uri: `${process.env.strapi_url}/graphql`
    // uri: `https://ghobj-backend.herokuapp.com/graphql`
    uri: `http://localhost:1337/graphql`
})

export const client = new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: httpLink,
    cache: new InMemoryCache()
})
