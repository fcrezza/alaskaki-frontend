import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 3rem auto 0;
  width: 400px;

  & > *:not(:last-child, h1) {
    margin-bottom: 1.5rem;
  }
`;

export const StyledForm = styled.form`
  & > *:not(label, button) {
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h1`
  color: ${({theme}) => theme["black.100"]};
  font-size: 2rem;
  margin: 0 0 2.5rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({theme}) => theme.gray};
`;

export const ForgotPassword = styled.p`
  color: ${({theme}) => theme["black.50"]};
  font-size: 1rem;
  margin: 0;
`;

export const GoogleButtonContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoogleButtonText = styled.span`
  margin-left: 0.5rem;
`;
