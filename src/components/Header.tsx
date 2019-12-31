import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
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

const data = [
    { href: "/story", title: "Story" },
    { href: "/how-to-play", title: "How to play" },
];

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
                        <Link color="textPrimary" href="/">
                            Fursorger
                        </Link>
                    </Typography>
                    <nav>
                        {data.map(date => (
                            <Link
                                key={date.title}
                                variant="button"
                                color="textPrimary"
                                href={date.href}
                                className={classes.link}
                            >
                                {date.title}
                            </Link>
                        ))}
                    </nav>

                    <IconButton
                        href="https://github.com/proSingularity/fursorger"
                        className={classes.link}
                    >
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
