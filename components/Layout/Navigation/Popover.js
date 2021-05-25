/* TODO: - Popover should close when lose focus
         - Trap focus when navigate using keyboard
*/
import * as React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const StyledNavigationPopover = styled.div`
  padding: 1rem 0;
`;

const StyledPopoverOverlay = styled.div`
  position: fixed;
  top: ${({topOverlay}) => topOverlay};
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 998;
`;

const StyledNavigationPopoverContent = styled.div`
  position: fixed;
  top: ${({y}) => y};
  left: ${({x}) => x};
  border-radius: 10px;
  background: ${({theme}) => theme.white};
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 8px 0px;
  z-index: 999;
`;

const PopoverContext = React.createContext();

export function NavigationPopover(props) {
  const {
    onClose,
    onOpen,
    isOpen,
    contentXPosition,
    contentYPosition,
    topOverlay,
    children
  } = props;

  return (
    <PopoverContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        contentXPosition,
        contentYPosition,
        topOverlay
      }}
    >
      <StyledNavigationPopover onMouseLeave={onClose}>
        {children}
      </StyledNavigationPopover>
    </PopoverContext.Provider>
  );
}

export function NavigationPopoverTrigger({children}) {
  const context = React.useContext(PopoverContext);

  if (!context) {
    throw new Error("Please provide NavigationPopover component as a parent");
  }

  return React.cloneElement(children, {
    onFocus: context.onOpen,
    onMouseEnter: context.onOpen
  });
}

export function NavigationPopoverContent({children}) {
  const context = React.useContext(PopoverContext);

  if (!context) {
    throw new Error("Please provide NavigationPopover component as a parent");
  }

  if (context.isOpen) {
    return ReactDOM.createPortal(
      <StyledNavigationPopoverContent
        x={context.contentXPosition}
        y={context.contentYPosition}
      >
        {children}
      </StyledNavigationPopoverContent>,
      document.body
    );
  }

  return null;
}

export function NavigationPopoverOverlay() {
  const context = React.useContext(PopoverContext);

  if (!context) {
    throw new Error("Please provide NavigationPopover component as a parent");
  }

  if (context.isOpen) {
    return (
      <StyledPopoverOverlay
        topOverlay={context.topOverlay}
        onMouseEnter={context.onClose}
      />
    );
  }

  return null;
}
