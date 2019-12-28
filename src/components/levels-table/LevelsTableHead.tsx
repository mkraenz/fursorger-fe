import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

interface Props { onXs: boolean }

const LevelsTableHead: React.FunctionComponent<Props> = (props: Props) => {
    if (props.onXs) {
        return (
            <TableHead>
                <TableRow key="header">
                    <TableCell>Name</TableCell>
                    <TableCell>Likes</TableCell>
                    <TableCell>Downloads</TableCell>
                </TableRow>
            </TableHead>
        );
    }
    return (
        <TableHead>
            <TableRow key="header">
                <TableCell>Name</TableCell>
                <TableCell>Likes</TableCell>
                <TableCell>Downloads</TableCell>
                <TableCell>Creator</TableCell>
                <TableCell>Uploaded</TableCell>
                <TableCell>Game version</TableCell>
                <TableCell>Play now</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default LevelsTableHead;
