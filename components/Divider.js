import styled from "styled-components";

const StyledDivider = styled.div`
  align-self: stretch;
  width: ${({orientation}) => (orientation === "vertical" ? "1px" : "100%")};
  min-height: ${({orientation}) =>
    orientation === "vertical" ? "100%" : "1px"};
  background-color: ${({theme}) => theme.gray};
`;

function Divider({orientation}) {
  return <StyledDivider orientation={orientation} />;
}

export default Divider;
