import React from "react";
import { LanguageVariant } from "typescript";


import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const UpeerButton = (props) => (
  <Button
    variant="contained"
    color={props.color}
    disabled={props.disabled}
    onClick={props.onClick}
    size="large"
  >
    {props.content}
  </Button>
);

UpeerButton.propTypes = {
  content: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

UpeerButton.defaultProps = {
  disabled: false
};

export default UpeerButton;