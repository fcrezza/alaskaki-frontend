import styled from "styled-components";

export const StyledNavigation = styled.div``;

export const NavigationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavigationItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  & > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const Divider = styled.div`
  align-self: stretch;
  width: 1px;
  min-height: 100%;
  background-color: ${({theme}) => theme.gray};
`;

export const AuthButtonGroup = styled.div`
  display: flex;

  & > *:first-child {
    margin-right: 1rem;
  }
`;
