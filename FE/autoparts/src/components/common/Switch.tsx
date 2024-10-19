import React from "react";
import { caseProps, switchProps, defaultProps } from "../../interfaces";

const Switch: React.FunctionComponent<switchProps> = ({ value, children }) => {
  return React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child) && child.props.case === value) {
      return child;
    }
    return null;
  });
};

const Case: React.FunctionComponent<caseProps> = ({ children }) => children;

const Default: React.FunctionComponent<defaultProps> = ({ children }) =>
  children;

export { Switch, Case, Default };
