import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { saveAs } from "file-saver";
import React from "react";
import { connect } from "react-redux";
import { sendUpdateLevelMetadata } from "../../redux/action-creators/sendUpdateLevel";
import { ILevelMetadata } from "../../redux/store/ILevelMetadataState";
import DownloadButton from "./DownloadButton";
import LikeButton from "./LikeButton";

interface Props {
    levelMetadata: ILevelMetadata;
    onXs: boolean;
    sendLikeLevel: (levelId: number) => void;
    sendDownloadLevel: (levelId: number) => void;
}

const LevelsTableRow: React.FunctionComponent<Props> = (props: Props) => {
    const metadata = props.levelMetadata;

    if (props.onXs) {
        return (
            <TableRow key={metadata.id}>
                <TableCell>{metadata.name}</TableCell>
                <TableCell>
                    <LikeButton
                        likes={metadata.likes}
                        onClick={() => props.sendLikeLevel(metadata.id)}
                    />
                </TableCell>
                <TableCell>
                    <DownloadButton
                        downloads={metadata.downloads}
                        onClick={() => {
                            props.sendDownloadLevel(metadata.id);
                            saveToFile(metadata);
                        }}
                    />
                </TableCell>
            </TableRow>
        );
    }

    return (
        <TableRow key={metadata.id}>
            <TableCell>{metadata.name}</TableCell>
            <TableCell>
                <LikeButton
                    likes={metadata.likes}
                    onClick={() => props.sendLikeLevel(metadata.id)}
                />
            </TableCell>
            <TableCell>
                <DownloadButton
                    downloads={metadata.downloads}
                    onClick={() => {
                        props.sendDownloadLevel(metadata.id);
                        saveToFile(metadata);
                    }}
                />
            </TableCell>
            <TableCell>{metadata.uploader}</TableCell>
            <TableCell>{metadata.uploadDate}</TableCell>
            <TableCell>{metadata.gameVersion}</TableCell>
            <TableCell>
                <IconButton
                    onClick={() =>
                        alert(
                            "Instant play is not implemented yet. Thanks for your interest in this feature."
                        )
                    }
                >
                    <PlayCircleOutlineIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

const saveToFile = (metadata: Pick<ILevelMetadata, "level" | "name">) => {
    const data = JSON.stringify(metadata.level, null, 4);
    const blob = new Blob([data], {
        type: "application/json",
    });
    saveAs(blob, `${metadata.name}.fursorger.json`);
};

const mapDispatchToProps: Pick<Props, "sendLikeLevel" | "sendDownloadLevel"> = {
    sendLikeLevel: sendUpdateLevelMetadata({ like: true }),
    sendDownloadLevel: sendUpdateLevelMetadata({ download: true }),
};

export default connect(
    null,
    mapDispatchToProps
)(LevelsTableRow);
