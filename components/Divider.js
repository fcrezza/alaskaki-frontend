import styled from "styled-components";

const StyledDivider = styled.div`
  align-self: stretch;
  width: ${({orientation}) => (orientation === "vertical" ? "1px" : "100%")};
  min-height: ${({orientation}) =>
    orientation === "vertical" ? "100%" : "1px"};
  background-color: ${({theme}) => theme.gray};
  margin: ${({orientation, size}) =>
    orientation === "vertical" ? `0 ${size}` : `${size} 0`};
`;

function Divider({orientation, size}) {
  return <StyledDivider orientation={orientation} size={size} />;
}

export default Divider;
