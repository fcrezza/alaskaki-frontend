import React from "react";

export function usePopoverPosition() {
  const position = React.useRef();
  const [isOpen, setCardVisibility] = React.useState(false);

  const onOpen = ({target}) => {
    // TODO: handle positioning if the target element isn't the one who trigger it (aka the child ie. svg in icon button)
    position.current = {
      top: target.getBoundingClientRect().top,
      right: target.getBoundingClientRect().right,
      bottom: target.getBoundingClientRect().bottom,
      left: target.getBoundingClientRect().left,
      width: target.getBoundingClientRect().width
    };
    setCardVisibility(true);
  };

  const onClose = () => setCardVisibility(false);

  return {onOpen, onClose, isOpen, position: position.current};
}
