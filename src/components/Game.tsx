import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Iframe from "react-iframe";
import ClipLoader from "react-spinners/ClipLoader";

const GAME_URL = "https://fursorger-game.herokuapp.com/";

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
        iframeHeight = Math.min(window.innerHeight, window.innerWidth);
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
                        url={GAME_URL}
                        height={loading ? "0" : iframeHeight.toString()}
                        id="fursorger-phaser-game"
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
