import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(8, 0, 8),
    },
}));

const HeroUnit: React.FunctionComponent = () => {
    const classes = useStyles({});
    return (
        <Container
            maxWidth="sm"
            component="main"
            className={classes.heroContent}
        >
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
            >
                Der Fursorger
            </Typography>
            <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
            >
                This world is dying. Can you save us?
            </Typography>
        </Container>
    );
};

export default HeroUnit;
