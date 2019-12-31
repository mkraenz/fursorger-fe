import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
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
import { toggleLevelUploadDialog } from "../../redux/action-creators/toggleLevelUploadDialog";
import { selectLevelMetadata } from "../../redux/selectors/selectLevelMetadata";
import { ILevelMetadata } from "../../redux/store/ILevelMetadataState";
import { IState } from "../../redux/store/IState";
import UploadLevelFormDialog from "../UploadLevelFormDialog";
import LevelsTableHead from "./LevelsTableHead";
import LevelsTableRow from "./LevelsTableRow";

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
        levelUpload: {
            margin: theme.spacing(3, 0, 2),
        },
    });

interface Props extends WithStyles<typeof styles> {
    levelMetadata: ILevelMetadata[];
    fetchLevelMetadata: () => void;
    toggleLevelUploadDialog: () => void;
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
                        <Container maxWidth="xs">
                            <Button
                                variant="contained"
                                fullWidth
                                color="primary"
                                onClick={this.props.toggleLevelUploadDialog}
                                className={this.props.classes.levelUpload}
                            >
                                Share your own Level
                            </Button>
                        </Container>
                    </CardContent>
                </Card>
                <UploadLevelFormDialog />
            </Container>
        );
    }
}

const mapStateToProps = (state: IState): Pick<Props, "levelMetadata"> => ({
    levelMetadata: selectLevelMetadata(state),
});

const mapDispatchToProps: Pick<
    Props,
    "fetchLevelMetadata" | "toggleLevelUploadDialog"
> = {
    fetchLevelMetadata,
    toggleLevelUploadDialog,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, { withTheme: true })(LevelsTable));
