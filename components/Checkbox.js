import styled from "styled-components";

const StyledCheckboxInput = styled.input`
  position: absolute;
  border: 0;
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0px, 0px, 0px, 0px);
`;

const StyledCheckboxInputLabel = styled.label`
  position: relative;
  padding: 0 0 0 2rem;
  color: ${({theme}) => theme["black.100"]};
  cursor: pointer;
`;

const StyledCheckboxInputContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${StyledCheckboxInput} + ${StyledCheckboxInputLabel}::before {
    position: absolute;
    top: 0rem;
    left: 0;
    width: 26px;
    height: 26px;
    line-height: 26px;
    overflow: hidden;
    margin: -2px 0 0;
    padding: 0;
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAANElEQVR42mP4TyfAMGoR1SwqLCykCibKIkrBqEWjFo1aNGrRqEWjFlHDIrpUfKONk0FnEQAcTRTfX8LFVAAAAABJRU5ErkJggg==);
  }

  ${StyledCheckboxInput}:checked + ${StyledCheckboxInputLabel}::before {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEX///8mXsIoVsMpVMMpVMMpVMMsTMQtScQtScQtScQtScQtScQtR8UuRsUuRsUuRsUuRsUuRsUtRsUuRsUtR8UuRsUuRsUuRsUuRsUtR8UtR8UtR8UtRsUtScQuRsUuRsUuRsUuRsUtR8VofMvz9ftbb8YtR8UtScQpVMMuRsUuRsUtSMVWbsX7/f7y9PstR8UtScQuRsUuRsUuRsUuRsUuRsUtSMVEX8X4+/38/f5bccctR8UtScQtScQtRsUtR8U8VMctR8UuRsUuRsUtSMU1VMfm7Pf+/v9tgc0tR8UtRsUtScR2h8/9/v+GltUtSMUtSMUvT8XP2fD///+ClNQtSMUuRsXn6/f+/v92i9ErTsS1xeeZq90tScUtRsUuRsVFXsXz9vv8/f66y+myw+YsS8QtR8UuRsUtR8VQaMP4+v3M2O4vT8UtSMUuRsVXb8X5+/3i6fY0U8ctSMUuRsUuRsUuRsUtSMVgdcjr7/hDXsUtSMUuRsUuRsUuRsUtR8UtR8UtR8UuRsUtRsXAa8pUAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UGARchE6zpU5wAAAEiSURBVCjPY2CgM2BkYmZhhQMWZiZGuBQTGzsHJwRwcXFxs7MxwaWY2Xl4+cCAX0BQSFiEnRkuxcLBKyoGBuISklLSMrIscClWTj4xOSCQV1BUUlZRVVPXQJGSl5eT19TS1tFl0NM3QJLiMjQyNhHVNDUzt2CwtLK2QZKytbN3cHRydnF1Y3D38PTyZoVLaair+fj6+QcEBjEEh4SGhXEhSRnohzNEREZFMzDExMbF83MiSdlYJyQyJCUzMKSkphmn8yFJsXp7ZWRmARnZObl5omIoUlxhYaH5BQyFRcUlmvKoUpz8pWXlFZVV1UAZORQpYEDV1NbVNzQ2lQIDS5SXAxFQoOAFBmyzoAA/MIh5eZCCFxwpXCAAihcO5EjBE5V0AgC1qi2/zqDGmgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNi0wMVQyMDozMzoxOSswMzowMPA8a7wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDYtMDFUMjA6MzM6MTkrMDM6MDCBYdMAAAAAAElFTkSuQmCC);
  }
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

export default function Checkbox({id, onChange, label, isChecked}) {
  return (
    <StyledCheckboxInputContainer>
      <StyledCheckboxInput
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={isChecked}
      />
      <StyledCheckboxInputLabel htmlFor={id}>{label}</StyledCheckboxInputLabel>
    </StyledCheckboxInputContainer>
  );
}
