import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://niouzapp.com/api",
    cache: new InMemoryCache(),
});

export default client;

// 29545d92-4226-4a37-86c7-c1772cbbc5cd
