import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import withRedux from "next-redux-wrapper";
import App from "next/app";
import Head from "next/head";
import React from "react";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
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
                    {isProductionBrowser() && (
                        <script type="text/javascript" id="inspectletjs">
                            {initInspectlet() as any}
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

const initInspectlet = () => {
    // @ts-ignore
    const window_: any = window;
    window_.__insp = window_.__insp || [];
    // @ts-ignore
    __insp.push(["wid", 2004692989]);
    (function() {
        function __ldinsp() {
            var insp = document.createElement("script");
            insp.type = "text/javascript";
            insp.async = true;
            insp.id = "inspsync";
            insp.src =
                ("https:" == document.location.protocol ? "https" : "http") +
                "://cdn.inspectlet.com/inspectlet.js?wid=2004692989&r=" +
                Math.floor(new Date().getTime() / 3600000);
            var x: any = document.getElementsByTagName("script")[0];
            x.parentNode.insertBefore(insp, x);
        }
        document.readyState != "complete"
            ? window_.attachEvent
                ? window_.attachEvent("onload", __ldinsp)
                : window_.addEventListener("load", __ldinsp, false)
            : __ldinsp();
    })();
};

const isProductionBrowser = () =>
    process.browser && window.location.hostname !== "localhost";

const initGoogleAnalytics = () => {
    if (isProductionBrowser()) {
        ReactGA.initialize("UA-145441270-2");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
};
