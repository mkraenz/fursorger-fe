import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
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
import React from "react";
import { connect } from "react-redux";
import { fetchLevelMetadata } from "../../redux/action-creators/fetchLevelMetadata";
import { selectLevelMetadata } from "../../redux/selectors/selectLevelMetadata";
import { ILevelMetadata } from "../../redux/store/ILevelMetadataState";
import { IState } from "../../redux/store/IState";
import LevelsTableHead from "./LevelsTableHead";
import LevelsTableRow from "./LevelsTableRow";

function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault();
}

const styles = (theme: Theme) =>
    createStyles({
        cardHeader: {
            backgroundColor:
                theme.palette.type === "dark"
                    ? theme.palette.grey[700]
                    : theme.palette.grey[200],
        },
        container: {
            marginTop: theme.spacing(15),
        },
        seeMore: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(2),
        },
        uploadLevel: {
            margin: theme.spacing(3, 0, 2),
        },
    });

interface Props extends WithStyles<typeof styles> {
    levelMetadata: ILevelMetadata[];
    fetchLevelMetadata: () => void;
}

class LevelsTable extends React.Component<Props, { onXs: boolean }> {
    constructor(props: Props) {
        super(props);
        this.state = { onXs: false };
    }

    componentDidMount() {
        this.props.fetchLevelMetadata();
        window.addEventListener("resize", () => this.resize());
        this.resize();
    }

    resize() {
        this.setState({ onXs: window.innerWidth <= 760 });
    }

    render() {
        return (
            <Container maxWidth="md" className={this.props.classes.container}>
                <Card>
                    <CardHeader
                        title="Levels"
                        titleTypographyProps={{ align: "center" }}
                        className={this.props.classes.cardHeader}
                    />
                    <CardContent
                        style={{
                            marginLeft: "0px",
                            paddingLeft: "0px",
                            paddingRight: "0px",
                        }}
                    >
                        <Table size="small">
                            <LevelsTableHead onXs={this.state.onXs} />
                            <TableBody>
                                {this.props.levelMetadata.map(row => (
                                    <LevelsTableRow
                                        levelMetadata={row}
                                        onXs={this.state.onXs}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                        <div className={this.props.classes.seeMore}>
                            <Link
                                color="primary"
                                href="#"
                                onClick={preventDefault}
                            >
                                See more levels
                            </Link>
                        </div>
                        <Container maxWidth="xs">
                            <Button
                                variant="contained"
                                fullWidth
                                color="primary"
                                onClick={handleUploadClicked}
                                className={this.props.classes.uploadLevel}
                            >
                                Share your own Level
                            </Button>
                        </Container>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

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
