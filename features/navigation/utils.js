import styled from "styled-components";

export const StyledNavigation = styled.div`
  border-bottom: ${({theme}) => `1px solid ${theme.gray}`};
`;

export const NavigationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavigationItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  padding: 1rem 0;

  & > *:first-child {
    margin-right: 1rem;
  }
`;

export const NavigationItemWrapper = styled.div`
  padding: 1rem 0;
`;
