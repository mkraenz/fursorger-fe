import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <MuiLink color="inherit" href="https://material-ui.com/">
                Fursorger Game
            </MuiLink>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
