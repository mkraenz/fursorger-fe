import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/StarBorder";
import React from "react";
import Iframe from "react-iframe";

const tiers = [
    {
        title: "Play Now",
        price: "0",
        description: [
            "10 users included",
            "2 GB of storage",
            "Help center access",
            "Email support",
        ],
        buttonText: "Sign up for free",
        buttonVariant: "outlined",
    },
    {
        title: "Pro",
        subheader: "Most popular",
        price: "15",
        description: [
            "20 users included",
            "10 GB of storage",
            "Help center access",
            "Priority email support",
        ],
        buttonText: "Get started",
        buttonVariant: "contained",
    },
    {
        title: "Enterprise",
        price: "30",
        description: [
            "50 users included",
            "30 GB of storage",
            "Help center access",
            "Phone & email support",
        ],
        buttonText: "Contact us",
        buttonVariant: "outlined",
    },
];

const useStyles = makeStyles(theme => ({
    cardHeader: {
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[700]
                : theme.palette.grey[200],
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
    },
    iframe: {
        border: "none",
    },
}));

const Game: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" component="main">
            <Grid item key={tiers[0].title} xs={12}>
                <Card>
                    <CardHeader
                        title={tiers[0].title}
                        subheader={tiers[0].subheader}
                        titleTypographyProps={{ align: "center" }}
                        subheaderTypographyProps={{
                            align: "center",
                        }}
                        action={tiers[0].title === "Pro" ? <StarIcon /> : null}
                        className={classes.cardHeader}
                    />
                    <CardContent>
                        <Iframe
                            url="https://fursorger-game.herokuapp.com/"
                            width="100%"
                            height="800"
                            id="fursorger-phaser-game"
                            className={classes.iframe}
                        />
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
};

export default Game;
