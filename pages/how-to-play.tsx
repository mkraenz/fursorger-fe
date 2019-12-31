import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Layout from "../src/components/Layout";

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
    cardSubheader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(8, 0, 0, 0),
    },
}));

export default function HowToPlay() {
    return (
        <Layout>
            <Rules />
        </Layout>
    );
}

const NON_BREAKING_SPACE = "\u00a0";

const tiers = [
    {
        title: "Win",
        price: "Starvation Prevented",
        description: ["production is 0 or higher", "in every city"],
    },
    {
        title: "Lose",
        price: "Starvation Sets In",
        description: ["stock is below 0", "in any city"],
    },
    {
        title: "Every Move",
        price: "Consumption or Production",
        description: [
            "stocks are produced production positive",
            "stocks are consumed if production negative",
            "in every city",
        ],
    },
    {
        title: "Every Three Moves",
        price: "Build a Factory",
        description: [
            "increase production by 1",
            "in the city you are located",
            NON_BREAKING_SPACE,
        ],
    },
];

const Rules: React.FunctionComponent = () => {
    const classes = useStyles({});

    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={6} alignItems="flex-end">
                {tiers.map(tier => (
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
                                <div className={classes.cardSubheader}>
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
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Container maxWidth="sm">
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    href="/"
                    className={classes.button}
                >
                    Instant Play
                </Button>
            </Container>
        </Container>
    );
};
