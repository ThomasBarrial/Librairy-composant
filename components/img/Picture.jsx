import React from "react";
import withStyles from "../../hook/withStyle";
import styles from "./Picture.module.css";

export const Picture = ({ src }) => {
  return (
    <div>
      <img src={src} />
    </div>
  );
};

Picture.protoTypes = {
  src: PropTypes.string.isRequired,
};

export default withStyles(styles)(Picture);
