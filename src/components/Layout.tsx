import CssBaseline from "@material-ui/core/CssBaseline";
import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeroUnit from "./HeroUnit";

const Layout: React.FunctionComponent = props => (
    <>
        <CssBaseline />
        <Header />
        <HeroUnit />
        {props.children}
        <Footer />
    </>
);

export default Layout;
