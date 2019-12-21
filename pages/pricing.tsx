import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Footer from "../src/components/Footer";
import Game from "../src/components/Game";
import Header from "../src/components/Header";
import HeroUnit from "../src/components/HeroUnit";
import LevelsTable from "../src/components/LevelsTable";

export default function Pricing() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <HeroUnit />
            <Game />
            <LevelsTable />
            <Footer />
        </React.Fragment>
    );
}
