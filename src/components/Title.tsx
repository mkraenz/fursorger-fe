import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { ReactNode } from "react";

export default function Title(props: { children: ReactNode }) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node
};
