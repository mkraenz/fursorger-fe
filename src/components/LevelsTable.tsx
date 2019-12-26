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
import React from "react";
import { connect } from "react-redux";
import { fetchLevelMetadata } from "../redux/action-creators/fetchLevelMetadata";
import { ILevelMetadata } from "../redux/store/ILevelMetadataState";
import { IState } from "../redux/store/IState";
import LevelsTableHead from "./LevelsTableHead";
import LevelsTableRow from "./LevelsTableRow";
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
        this.props.fetchLevelMetadata();
    }

    render() {
        return (
            <Container maxWidth="md" className={this.props.classes.container}>
                <Title>Levels</Title>
                <Table size="small">
                    <LevelsTableHead />
                    <TableBody>
                        {this.props.levelMetadata.map(row => (
                            <LevelsTableRow levelMetadata={row} />
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
