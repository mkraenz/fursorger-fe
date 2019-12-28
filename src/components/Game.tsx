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
        marginTop: "15px",
        marginLeft: "22px",
    },
    loadingIndicator: {
        justifyContent: "center",
        display: "flex",
    },
}));

const Game: React.FunctionComponent = () => {
    const classes = useStyles({});
    const [loading, setLoading] = useState(true);

    const title = "Instant Play";
    return (
        <Container maxWidth="md" component="main">
            <Card>
                <CardHeader
                    title={title}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                        align: "center",
                    }}
                    className={classes.cardHeader}
                />
                <CardContent>
                    <div className={classes.loadingIndicator}>
                        <ClipLoader
                            size={150}
                            color={"#123abc"}
                            loading={loading}
                        />
                    </div>
                    <Iframe
                        url={GAME_URL}
                        height={loading ? "0" : "620"}
                        id="fursorger-phaser-game"
                        className={classes.iframe}
                        onLoad={() => setLoading(false)}
                    />
                </CardContent>
            </Card>
        </Container>
    );
};

export default Game;
