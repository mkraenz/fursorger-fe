import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import GetAppIcon from "@material-ui/icons/GetApp";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import React from "react";
import { ILevelMetadata } from "../redux/store/ILevelMetadataState";

interface Props {
    levelMetadata: ILevelMetadata;
}

const LevelsTableRow: React.FunctionComponent<Props> = (props: Props) => {
    const metadata = props.levelMetadata;
    return (
        <TableRow key={metadata.id}>
            <TableCell>{metadata.levelName}</TableCell>
            <TableCell>{metadata.likes}</TableCell>
            <TableCell>{metadata.downloads}</TableCell>
            <TableCell>{metadata.uploader}</TableCell>
            <TableCell>{metadata.uploadDate}</TableCell>
            <TableCell>{metadata.version}</TableCell>
            <TableCell>{metadata.gameVersion}</TableCell>
            <TableCell>
                <GetAppIcon
                    onClick={() => {
                        handleDownloadClicked(metadata.id, metadata);
                    }}
                />
            </TableCell>
            <TableCell>
                <ThumbUpAltOutlinedIcon
                    onClick={() => handleLikeClicked(metadata.id, metadata)}
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
    );
};

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

export default LevelsTableRow;
