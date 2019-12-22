import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Link from "../src/Link";
import ProTip from "../src/ProTip";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <MuiLink color="inherit" href="https://material-ui.com/">
                Your Website
            </MuiLink>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function About() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Created from Next.js with TypeScript example
                </Typography>
                <Link href="/">Go to the main page</Link>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    );
}
