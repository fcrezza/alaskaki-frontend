import styled from "styled-components";

const StyledCheckboxInput = styled.input``;

const StyledCheckboxInputLabel = styled.label`
  margin-left: 10px;
  font-size: 1rem;
  color: ${({theme}) => theme["black.50"]};
`;

const StyledCheckboxInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export function CheckboxInput({id, onChange}) {
  return <StyledCheckboxInput type="checkbox" id={id} onChange={onChange} />;
}

export function CheckboxInputLabel({id, label}) {
  return (
    <StyledCheckboxInputLabel htmlFor={id}>{label}</StyledCheckboxInputLabel>
  );
}

export function CheckboxInputContainer({children}) {
  return (
    <StyledCheckboxInputContainer>{children}</StyledCheckboxInputContainer>
  );
}
