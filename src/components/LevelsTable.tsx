import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import GetAppIcon from "@material-ui/icons/GetApp";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import React from "react";
import { connect } from "react-redux";
import { testme } from "../redux/action-creators/testme";
import { IState } from "../redux/store/IState";
import { levelRows } from "./levels.data";
import Title from "./Title";

function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    container: {
        marginTop: theme.spacing(15),
    },
}));

interface Props {
    testme: () => void;
}

const LevelsTable: React.FunctionComponent<Props> = (props: Props) => {
    const classes = useStyles({});
    console.log(testme);
    props.testme();

    return (
        <Container maxWidth="md" className={classes.container}>
            <Title>Levels</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Likes</TableCell>
                        <TableCell>Downloads</TableCell>
                        <TableCell>Creator</TableCell>
                        <TableCell>Uploaded</TableCell>
                        <TableCell>Version</TableCell>
                        <TableCell>Game version</TableCell>
                        <TableCell>Get</TableCell>
                        <TableCell>Like</TableCell>
                        <TableCell>Play now</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {levelRows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.levelName}</TableCell>
                            <TableCell>{row.likes}</TableCell>
                            <TableCell>{row.downloads}</TableCell>
                            <TableCell>{row.uploader}</TableCell>
                            <TableCell>{row.uploadDate}</TableCell>
                            <TableCell>{row.version}</TableCell>
                            <TableCell>{row.gameVersion}</TableCell>
                            <TableCell>
                                <GetAppIcon
                                    onClick={() => {
                                        props.testme();
                                        handleDownloadClicked(row.id);
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <ThumbUpAltOutlinedIcon
                                    onClick={() => handleLikeClicked(row.id)}
                                />
                            </TableCell>
                            <TableCell>
                                <PlayCircleOutlineIcon
                                    onClick={() =>
                                        alert(
                                            "Instant play is not implemented yet. Thanks for your interest in this feature."
                                        )
                                    }
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more levels
                </Link>
            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleUploadClicked}
            >
                Share Level
            </Button>
        </Container>
    );
};

const handleDownloadClicked = (levelId: number) => {
    alert(`Starting download of level "${levelRows[levelId].levelName}"`);
    // fetch level id from server
    // start download of .json file
};

const handleLikeClicked = (levelId: number) => {
    alert(`Glad you like level "${levelRows[levelId].levelName}"`);
    // send like to server
};

const handleUploadClicked = () => {
    alert("Awesome. Thanks for sharing.");
};

const mapStateToProps = (state: IState) => state;

const mapDispatchToProps: Pick<Props, "testme"> = {
    testme,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LevelsTable);
