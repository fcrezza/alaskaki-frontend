import styled from "styled-components";

export const StyledBanner = styled.div`
  height: 450px;
`;

export const BannerContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  background-image: url("/hero.png");
  background-repeat: no-repeat;
  background-position: calc(100% + 80px) center;
`;

export const BannerContentContainer = styled.div`
  max-width: 700px;
  height: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BannerContentHeading = styled.h1`
  font-weight: 900;
  font-size: 3rem;
  line-height: 65px;
  margin: 0 0 2rem;
  color: ${({theme}) => theme["black.100"]};
  text-transform: capitalize;
`;

export const BannerContentDescription = styled.p`
  color: ${({theme}) => theme["black.50"]};
  font-size: 1.3rem;
  margin: 0 0 2rem;
  text-transform: capitalize;
`;
