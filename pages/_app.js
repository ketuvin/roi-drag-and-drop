import Head from 'next/head'
import store, { wrapper } from "../redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import FrontendLayout from "../components/frontend/Layout";

import theme from '../utils/theme';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <ReduxProvider store={store}>
            <ChakraProvider theme={theme}>
                <Head>
                    <link rel="shortcut icon" href="/images/icons/favicon.svg" />
                </Head>
                <FrontendLayout {...{ props: pageProps }}>
                    <Component {...pageProps} />
                </FrontendLayout>
            </ChakraProvider>
        </ReduxProvider>
    );
}

export default wrapper.withRedux(MyApp);
