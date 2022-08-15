import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from "./styles/theme";
import {ChakraProvider} from "@chakra-ui/react";
import {client} from "./apollo/client";
import {ApolloProvider} from "@apollo/client";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </ApolloProvider>
    </React.StrictMode>
);


