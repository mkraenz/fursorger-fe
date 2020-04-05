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
import { assertBasicLevelStructure } from "../api/upload-level-with-metadata-helpers";
import { toggleLevelUploadDialog } from "../redux/action-creators/toggleLevelUploadDialog";
import { IState } from "../redux/store/IState";

const useStyles = makeStyles(theme => ({
    textField: {
        margin: theme.spacing(1, 0, 2),
    },
    submit: {
        margin: theme.spacing(0, 1, 0, 0),
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

    const handleCancel = props.toggleLevelUploadDialog;
    return (
        <Dialog open={props.open} onClose={handleCancel}>
            <DialogTitle id="form-dialog-title">
                Share your own level
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
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
                        required
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
                        required
                        className={classes.input}
                        id="upload-level-json-input"
                        multiple
                        type="file"
                        onChange={event => {
                            const cb = (content: string, filePath: string) => {
                                try {
                                    assertBasicLevelStructure(content);
                                    setFileContent(content);
                                    setFilepath(filePath);
                                } catch (error) {
                                    alert(error.message);
                                }
                            };
                            handleFileSelect(event, cb);
                        }}
                    />
                    <label htmlFor="upload-level-json-input">
                        <Button
                            component="span"
                            className={classes.button}
                            variant="outlined"
                        >
                            Upload file
                        </Button>
                    </label>
                    <TextField
                        id="file-name"
                        disabled
                        label="Selected file"
                        className={classes.textField}
                        value={
                            getSelectedFileName(filepath) ||
                            "Please select a .json file."
                        }
                    />
                </Grid>
            </DialogContent>
            <DialogActions className={classes.submit}>
                <Button onClick={handleCancel} color="primary">
                    Cancel
                </Button>
                <Button
                    onClick={() =>
                        handleSubmit(
                            levelName,
                            username,
                            fileContent,
                            props.toggleLevelUploadDialog
                        )
                    }
                    color="primary"
                >
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

function handleFileSelect(
    event: any,
    cb: (content: string, event: any) => void
) {
    const files = event.target.files; // FileList object
    const reader = new FileReader();
    const fullFilePath = event.target.value; // save for putting into closure
    reader.onload = file => {
        try {
            const content = file.target!.result as string;
            cb(content, fullFilePath);
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

const handleSubmit = async (
    levelName: string,
    username: string,
    fileContent: string,
    toggleLevelUploadDialog: () => void
) => {
    if (levelName && username && fileContent) {
        try {
            await uploadLevelWithMetadata(
                levelName,
                username,
                JSON.parse(fileContent) // works because we assert parsability on file selection
            );
            toggleLevelUploadDialog();
        } catch (e) {
            const error: Error = e;
            if (error.message.match(/^Conflict/)) {
                alert(error.message);
                return;
            }

            const payload: {
                property: string;
                constraints?: {}[];
                children?: {}[];
            }[] = JSON.parse(error.message);
            let message = `Error for '${serverKeysToTextfieldTitle(
                payload[0].property
            )}'. Constraint not satisfied:\n${replaceServerKeysByTextfieldTitle(
                payload[0].property,
                payload[0].constraints
                    ? payload[0]
                    : JSON.stringify(payload[0].children)
            )}`;
            alert(
                payload.length >= 2
                    ? `${message}\nplus ${payload.length - 1} other error${
                          payload.length >= 3 ? "s" : ""
                      }.`
                    : message
            );
        }
    }
};

const serverKeysToTextfieldTitle = (key: string) => {
    if (key === "name") {
        return "Level name";
    }
    if (key === "uploader") {
        return "Username";
    }
    return key;
};

const replaceServerKeysByTextfieldTitle = (key: string, obj: {}) => {
    const str = JSON.stringify(obj);
    const re = new RegExp(key, "g");
    return str.replace(re, serverKeysToTextfieldTitle(key));
};
