import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Iframe from "react-iframe";
import Copyright from "../src/components/Copyright";
import LevelsTable from "../src/components/LevelsTable";
import Link from "../src/Link";
import ProTip from "../src/ProTip";

export default function Index() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <style jsx global>{`
                iframe {
                    border: none;
                }
            `}</style>
            <Box my={4}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    gutterBottom
                >
                    Fürsorger
                </Typography>
                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    align="center"
                >
                    Can you save mankind?
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
                <ProTip />
                <Iframe
                    url="https://fursorger-game.herokuapp.com/"
                    width="100%"
                    height="800"
                    id="fursorger-phaser-game"
                    className={classes.iframe}
                />
                <LevelsTable />
                <Copyright />
            </Box>
        </Container>
    );
}

const useStyles = makeStyles({
    iframe: {
        border: "none",
    },
});
