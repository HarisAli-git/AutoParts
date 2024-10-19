import React from "react";
import { CaseProps, DefaultProps, SwitchProps } from "../interfaces";

const Switch: React.FunctionComponent<SwitchProps> = ({ value, children }) => {
  return React.Children.map(children, (child) => {
    if (child.props.case === value) {
      return child;
    }
    return null;
  });
};

const Case: React.FunctionComponent<CaseProps> = ({ children }) => children;

const Default: React.FunctionComponent<DefaultProps> = ({ children }) =>
  children;

export { Switch, Case, Default };
