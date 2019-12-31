import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import Layout from "../src/components/Layout";

export default function StoryPage() {
    return (
        <Layout>
            <Story />
        </Layout>
    );
}

const Story: React.FunctionComponent = () => {
    return (
        <Container maxWidth="md" component="main">
            <Typography align="center" />
            {"To be written. @Matze I guess you would like this job =)"}
        </Container>
    );
};
