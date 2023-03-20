import React from "react";
import PropTypes from "prop-types";
import { options } from "./constant";
import classNames from "classnames";

import styles from "./Card.module.css";

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  children,
  color = "primary",
  size = "sm",
  isClickable,
  isDragable,
}) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
        [styles["is-clickable"]]: isClickable,
        [styles["is-dragable"]]: isDragable,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDragable: PropTypes.bool,
};

export default Card;
