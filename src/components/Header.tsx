import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

const Header: React.FunctionComponent = () => {
    const classes = useStyles({});
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Container maxWidth="md">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Fursorger
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="textPrimary"
                            href="#"
                            className={classes.link}
                        >
                            Features
                        </Link>
                        <Link
                            variant="button"
                            color="textPrimary"
                            href="#"
                            className={classes.link}
                        >
                            Enterprise
                        </Link>
                        <Link
                            variant="button"
                            color="textPrimary"
                            href="#"
                            className={classes.link}
                        >
                            Support
                        </Link>
                    </nav>
                    <Button
                        href="#"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                    >
                        Login
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
