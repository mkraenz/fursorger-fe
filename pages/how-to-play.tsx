import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HeroUnit from "../src/components/HeroUnit";

const useStyles = makeStyles(theme => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: "none",
        },
    },
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
    button: {
        margin: theme.spacing(3, 8),
    },
}));

export default function HowToPlay() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <HeroUnit />
            <Rules />
            <Footer />
        </React.Fragment>
    );
}

const tiers = [
    {
        title: "Win",
        price: "Starvation prevented",
        description: ["production is 0 or higher", "in every city"],
        buttonText: "Sign up for free",
    },
    {
        title: "Lose",
        price: "Starvation set in",
        description: ["stock is below 0", "in any city"],
        buttonText: "Sign up for free",
    },
];

const Rules: React.FunctionComponent = () => {
    const classes = useStyles({});

    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {tiers.map(tier => (
                    // Enterprise card is full width at sm breakpoint
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === "Enterprise" ? 12 : 6}
                        md={6}
                    >
                        <Card>
                            <CardHeader
                                title={tier.title}
                                titleTypographyProps={{ align: "center" }}
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <div className={classes.cardPricing}>
                                    <Typography
                                        component="h5"
                                        variant="h6"
                                        color="textPrimary"
                                    >
                                        {tier.price}
                                    </Typography>
                                </div>
                                <ul>
                                    {tier.description.map(line => (
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            key={line}
                                        >
                                            {line}
                                        </Typography>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    href="/"
                                    className={classes.button}
                                >
                                    Instant Play
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
