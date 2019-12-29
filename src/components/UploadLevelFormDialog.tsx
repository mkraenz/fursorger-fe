import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadLevelWithMetadata } from "../api/upload-level-with-metadata";
import { toggleLevelUploadDialog } from "../redux/action-creators/toggleLevelUploadDialog";
import { IState } from "../redux/store/IState";

const useStyles = makeStyles(theme => ({
    textField: {
        margin: theme.spacing(1, 0, 2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    input: { display: "none" },
    button: { marginTop: theme.spacing(3) },
}));

interface Props {
    open: boolean;
    toggleLevelUploadDialog: () => void;
}

const UploadLevelFormDialog: React.FunctionComponent<Props> = props => {
    const classes = useStyles();
    const [levelName, setLevelName] = useState("");
    const [username, setUsername] = useState("");
    const [filepath, setFilepath] = useState("");
    const [fileContent, setFileContent] = useState("");

    const handleSubmit = async () => {
        await uploadLevelWithMetadata(levelName, username, fileContent);
        // TODO
        alert(fileContent);
    };
    const handleCancel = props.toggleLevelUploadDialog;
    return (
        <Dialog
            open={props.open}
            onClose={handleCancel}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                Share your own level
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    id="level-name"
                    label="Level name"
                    fullWidth
                    className={classes.textField}
                    value={levelName}
                    onChange={event => setLevelName(event.target.value)}
                />
                <Tooltip title="Display name for column 'creator'">
                    <TextField
                        id="user-name"
                        label="Username"
                        fullWidth
                        className={classes.textField}
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </Tooltip>
                <Grid container spacing={1} justify="space-evenly">
                    <input
                        accept=".json,application/json"
                        className={classes.input}
                        id="upload-level-json-input"
                        multiple
                        type="file"
                        onChange={event => {
                            handleFileSelect(event, setFileContent);
                            setFilepath(event.target.value);
                        }}
                    />
                    <label htmlFor="upload-level-json-input">
                        <Button component="span" className={classes.button}>
                            Upload file
                        </Button>
                    </label>
                    <TextField
                        id="file-name"
                        disabled
                        label="Selected file"
                        className={classes.textField}
                        value={getSelectedFileName(filepath)}
                    />
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Share
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const mapStateToProps = (state: IState): Pick<Props, "open"> => ({
    open: state.app.levelUploadDialogOpen,
});

const mapDispatchToProps: Pick<Props, "toggleLevelUploadDialog"> = {
    toggleLevelUploadDialog,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadLevelFormDialog);

const getSelectedFileName = (filepath: string) => {
    let filename = "";
    if (filepath) {
        const startIndex =
            filepath.indexOf("\\") >= 0
                ? filepath.lastIndexOf("\\")
                : filepath.lastIndexOf("/");
        filename = filepath.substring(startIndex);
        if (filename.indexOf("\\") === 0 || filename.indexOf("/") === 0) {
            filename = filename.substring(1);
        }
    }
    return filename;
};

function handleFileSelect(event: any, cb: (content: string) => void) {
    const files = event.target.files; // FileList object
    const reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = file => {
        try {
            const content = file.target!.result as string;
            console.log(content);
            cb(content);
        } catch (err) {
            alert(
                `Error when trying to parse file as JSON. Original error: ${
                    err.message
                }`
            );
        }
    };
    reader.readAsText(files[0]);
}
