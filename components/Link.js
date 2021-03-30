import NextLink from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.blue};
  display: inline-block;
  outline: none;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

function Link({children, isExternal, color, href}) {
  if (isExternal) {
    return (
      <StyledLink href={href} color={color} rel="noopener noreferrer">
        {children}
      </StyledLink>
    );
  }

  return (
    <NextLink href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
}

export default Link;
