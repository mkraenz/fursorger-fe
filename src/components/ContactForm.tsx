import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import * as emailjs from "emailjs-com";
import React, { useState } from "react";
import { CONFIG, IEmailJSTemplate } from "../api/config";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ContactForm = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <TextField
                        multiline
                        variant="outlined"
                        required
                        margin="normal"
                        fullWidth
                        id="message"
                        label="Message"
                        rows="4"
                        autoComplete="off"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={event =>
                            sendEmail(event, name, email, message)
                        }
                    >
                        Send
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default ContactForm;

const sendEmail = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string,
    email: string,
    message: string
) => {
    event.preventDefault();
    const serviceId = CONFIG.emailJs.serviceId;
    const templateId = CONFIG.emailJs.templateId;
    const userId = CONFIG.emailJs.userId;
    const templateParams: IEmailJSTemplate = { name, email, message };
    await emailjs.init(userId);

    await emailjs.send(serviceId, templateId, templateParams).then(
        function(response: any) {
            console.log(
                "email sending success",
                response.status,
                response.text
            );
        },
        function(err: Error) {
            console.log("email sending failed", err, err.message);
        }
    );
    alert(`Email sending successful! Thanks for your email, ${name}.`);
};
