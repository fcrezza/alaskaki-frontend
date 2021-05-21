import NextLink from "next/link";
import styled from "styled-components";
import {darken} from "polished";

const InlineLink = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.blue};
  display: inline-block;
  outline: none;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

const BlockLink = styled.a`
  padding: 8px;
  border-radius: 5px;
  display: block;
  font-size: 1rem;
  outline: none;
  text-decoration: none;
  color: ${({theme}) => theme["black.50"]};

  &:hover,
  &:focus {
    background: ${({theme}) => darken(0.098, theme.white)};
  }
`;

function Link({children, isExternal, color, href, variant, ...props}) {
  if (isExternal) {
    return variant === "block" ? (
      <BlockLink
        href={href}
        target="_blank"
        color={color}
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </BlockLink>
    ) : (
      <InlineLink
        href={href}
        target="_blank"
        color={color}
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </InlineLink>
    );
  }

  return (
    <NextLink href={href} passHref>
      {variant === "block" ? (
        <BlockLink {...props}>{children}</BlockLink>
      ) : (
        <InlineLink {...props}>{children}</InlineLink>
      )}
    </NextLink>
  );
}

export default Link;
