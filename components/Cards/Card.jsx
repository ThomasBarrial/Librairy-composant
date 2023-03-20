import React from "react";
import PropTypes from "prop-types";
import { options } from "./constant";
import classNames from "classnames";

import styles from "./Card.module.css";
import withStyles from "../../hook/withStyle";

/**
 * Primary UI component for user interaction
 */
export const Card = ({ getStyles, children, isClickable, isDragable }) => {
  return (
    <div
      className={classNames(
        getStyles("card", ["color", "size"], {
          "is-clickable": isClickable,
          "is-dragable": isDragable,
        })
      )}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  getStyles: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDragable: PropTypes.bool,
};

Card.defaultProps = {
  color: "primary",
  size: "sm",
};

export default withStyles(styles)(Card);

// <div
//   className={classNames(styles.card, {
//     [styles[`color-${color}`]]: color,
//     [styles[`size-${size}`]]: size,
//     [styles["is-clickable"]]: isClickable,
//     [styles["is-dragable"]]: isDragable,
//   })}
// >
//   {children}
// </div>;
