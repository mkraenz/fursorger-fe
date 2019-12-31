import React from "react";
import Contact from "../src/components/Contact";
import Game from "../src/components/Game";
import Layout from "../src/components/Layout";
import LevelsTable from "../src/components/levels-table/LevelsTable";

export default function Index() {
    return (
        <Layout>
            <Game />
            <LevelsTable />
            <Contact />
        </Layout>
    );
}
