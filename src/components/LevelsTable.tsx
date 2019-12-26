import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import {
    createStyles,
    Theme,
    WithStyles,
    withStyles,
} from "@material-ui/core/styles";
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
import { fetchLevelMetadata } from "../redux/action-creators/fetchLevelMetadata";
import { ILevelMetadata } from "../redux/store/ILevelMetadataState";
import { IState } from "../redux/store/IState";
import { selectLevelMetadata } from "./selectors/selectLevelMetadata";
import Title from "./Title";

function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault();
}

const styles = (theme: Theme) =>
    createStyles({
        seeMore: {
            marginTop: theme.spacing(3),
        },
        container: {
            marginTop: theme.spacing(15),
        },
    });

interface Props extends WithStyles<typeof styles> {
    levelMetadata: ILevelMetadata[];
    fetchLevelMetadata: () => void;
}

class LevelsTable extends React.Component<Props> {
    componentDidMount() {
        // this.props.succeedFetchLevelMetadata();
        this.props.fetchLevelMetadata();
    }

    render() {
        return (
            <Container maxWidth="md" className={this.props.classes.container}>
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
                        {this.props.levelMetadata.map(row => (
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
                                            handleDownloadClicked(
                                                row.id,
                                                this.props.levelMetadata[row.id]
                                            );
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <ThumbUpAltOutlinedIcon
                                        onClick={() =>
                                            handleLikeClicked(
                                                row.id,
                                                this.props.levelMetadata[row.id]
                                            )
                                        }
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
                <div className={this.props.classes.seeMore}>
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
    }
}

const handleDownloadClicked = (
    levelId: number,
    metadata: { levelName: string }
) => {
    alert(
        `Starting download of level "${metadata.levelName}" with id ${levelId}`
    );
    // fetch level id from server
    // start download of .json file
};

const handleLikeClicked = (
    levelId: number,
    metadata: { levelName: string }
) => {
    alert(`Glad you like level "${metadata.levelName}" with id ${levelId}`);
    // send like to server
};

const handleUploadClicked = () => {
    alert("Awesome. Thanks for sharing.");
};

const mapStateToProps = (state: IState): Pick<Props, "levelMetadata"> => ({
    levelMetadata: selectLevelMetadata(state),
});

const mapDispatchToProps: Pick<Props, "fetchLevelMetadata"> = {
    fetchLevelMetadata,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, { withTheme: true })(LevelsTable));
