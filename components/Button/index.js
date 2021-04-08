import React from "react";
import {StyledButton, StyledIconButton} from "./utils";

export function Button(props) {
  const {type, children, onClick, block, variant, as, ...rest} = props;

  return (
    <StyledButton
      as={as}
      type={type || "button"}
      onClick={onClick}
      variant={variant}
      block={block ? "true" : "false"}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export function IconButton({type, children, onClick, ...props}) {
  return (
    <StyledIconButton type={type || "button"} onClick={onClick} {...props}>
      {children}
    </StyledIconButton>
  );
}
