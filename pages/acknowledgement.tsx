import Container from "@material-ui/core/Container";
import React from "react";
import Layout from "../src/components/Layout";

export default () => {
    return (
        <Layout>
            <Acknowledgement />
        </Layout>
    );
};

const Acknowledgement: React.FunctionComponent = () => {
    return (
        <Container maxWidth="md" component="main">
            <h1>Acknowledgement</h1>
            <p>TODO</p>
        </Container>
    );
};
