import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HeroUnit from "../src/components/HeroUnit";
import Link from "../src/Link";
import ProTip from "../src/ProTip";

export default function About() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <HeroUnit />
            <Container maxWidth="sm">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Created from Next.js with TypeScript example
                    </Typography>
                    <Link href="/">Go to the main page</Link>
                    <ProTip />
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
