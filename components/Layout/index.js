import styled from "styled-components";

import Navigation from "./Navigation";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  margin: 100px auto;
  max-width: 1200px;
  width: 100%;
  flex: 1;
`;

function Layout({children}) {
  return (
    <LayoutContainer>
      <Navigation />
      <Content>{children}</Content>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
