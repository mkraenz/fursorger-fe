import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const LevelsTableHead: React.FunctionComponent = () => (
    <TableHead>
        <TableRow>
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

export default LevelsTableHead;
