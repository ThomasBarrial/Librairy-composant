import React from "react";
import { getClasses } from "../helpers/styles";

const withStyles = (styles) => (WrapperComponent) => {
  const withStylesComponent = (props) => {
    const allProps = { ...WrappedComponent.defaultProps, ...props };

    return (
      <WrapperComponent getStyles={getClasses(styles)(allProps)} {...props} />
    );
  };

  withStylesComponent.displayName = WrapperComponent.displayName;

  return withStylesComponent;
};

export default withStyles;
