import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import ClipLoader from "react-spinners/ClipLoader";
import { CONFIG } from "../api/config";

const useStyles = makeStyles(theme => ({
    cardHeader: {
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[700]
                : theme.palette.grey[200],
    },
    iframe: {
        border: "none",
        width: "100%",
        marginTop: theme.spacing(1, 0),
    },
    loadingIndicator: {
        justifyContent: "center",
        display: "flex",
    },
    cardContent: {
        padding: 0,
        margin: 0,
    },
}));

const Game: React.FunctionComponent = () => {
    const classes = useStyles({});
    const [loading, setLoading] = useState(true);
    let iframeHeight = 600;
    if (process.browser) {
        iframeHeight = getResponsiveIframeHeight();
    }
    if (process.browser) {
        useEffect(() => {
            // https://help.hotjar.com/hc/en-us/articles/115011624347-Can-I-Track-iframes-in-Recordings
            const iframe = document.getElementById("fursorger-phaser-game-iframe");
            iframe?.setAttribute("data-hj-allow-iframe", "")
        }, []);
    }

    return (
        <Container maxWidth="md" component="main">
            <Card>
                <CardHeader
                    title="Instant Play"
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                        align: "center",
                    }}
                    className={classes.cardHeader}
                />
                <CardContent className={classes.cardContent}>
                    <div className={classes.loadingIndicator}>
                        <ClipLoader
                            size={150}
                            color={"#123abc"}
                            loading={loading}
                        />
                    </div>
                    <Iframe
                        url={CONFIG.gameUrl}
                        height={loading ? "0" : iframeHeight.toString()}
                        id="fursorger-phaser-game-iframe"
                        className={classes.iframe}
                        onLoad={() => setLoading(false)}
                        scrolling="no"
                    />
                </CardContent>
            </Card>
        </Container>
    );
};

export default Game;

const getResponsiveIframeHeight = () => {
    const materialUIMdBreakpoint = 1280;
    const defaultGameHeight = 600;
    const shortestEdge = Math.min(window.innerHeight, window.innerWidth);
    const baseHeight = Math.min(defaultGameHeight, shortestEdge);
    const aspectRatio =
        Math.min(window.innerWidth, materialUIMdBreakpoint) /
        window.innerHeight;
    return window.innerWidth > window.innerHeight
        ? baseHeight + 84 * aspectRatio
        : baseHeight - 50 / aspectRatio;
};
