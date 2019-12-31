import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import withRedux from "next-redux-wrapper";
import App from "next/app";
import Head from "next/head";
import React from "react";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import { initHotjar } from "../src/api/hotjar";
import { isProductionBrowser } from "../src/isProductionBrowser";
import { makeStore } from "../src/redux/store";
import theme from "../src/theme";

class MyApp extends App<{ store: ReturnType<typeof makeStore> }> {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
        initGoogleAnalytics();
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>Fursorger Game</title>
                    {process.browser && (
                        <script type="text/javascript" id="hotjar">
                            {initHotjar() as any}
                        </script>
                    )}
                </Head>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

export default withRedux(makeStore as any)(MyApp);

const initGoogleAnalytics = () => {
    if (isProductionBrowser) {
        ReactGA.set({ anonymizeIp: true });
        ReactGA.initialize("UA-145441270-2");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
};
