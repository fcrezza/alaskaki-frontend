import * as React from "react";
import {useRouter} from "next/router";
import {MdClose} from "react-icons/md";
import styled from "styled-components";

import Link from "components/Link";
import Divider from "components/Divider";
import {InputGroup, Input, InputRightElement} from "components/Input";
import {Logo} from "components/Icon";
import {Button, IconButton} from "components/Button";
import CategoryItems from "./CategoryItems";
import Cart from "./Cart";

const StyledNavigation = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background: ${({theme}) => theme.white};
`;

const NavigationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const NavigationItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const AuthButtonGroup = styled.div`
  display: flex;
  padding: 1rem 0;

  & > *:first-child {
    margin-right: 1rem;
  }
`;

function Navigation() {
  const router = useRouter();
  const isLoginPage = router.pathname.startsWith("/login");
  const isSignupPage = router.pathname.startsWith("/signup");
  const isAuthenticated = false; // TODO: change this

  return (
    <StyledNavigation>
      <NavigationContainer>
        <NavigationItemsContainer>
          <Link href="/">
            <Logo width={46} height={46} />
          </Link>
          {/*
          // should we hide other items in navigation when in login and signup page?
          {!isLoginPage && !isSignupPage ? (
            <>
              <CategoryItems />
              <SearchInput />
              <Cart />
              <Divider orientation="vertical" />
            </>
          ) : null} */}
          <CategoryItems />
          <SearchInput />
          <Cart />
          <Divider orientation="vertical" />
          {!isAuthenticated ? (
            <AuthButtonGroup>
              {isSignupPage || (!isSignupPage && !isLoginPage) ? (
                <Button onClick={() => router.push("/login")}>Masuk</Button>
              ) : null}
              {isLoginPage || (!isSignupPage && !isLoginPage) ? (
                <Button
                  variant="outline"
                  onClick={() => router.push("/signup")}
                >
                  Daftar
                </Button>
              ) : null}
            </AuthButtonGroup>
          ) : (
            // TODO: implement authenticated component
            <p>authenticated!</p>
          )}
        </NavigationItemsContainer>
      </NavigationContainer>
      <Divider />
    </StyledNavigation>
  );
}

function SearchInput() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <InputGroup>
      <Input
        placeholder="Mau Cari Sepatu Apa?"
        value={searchValue}
        onChange={({target}) => setSearchValue(target.value)}
      />
      {searchValue.length > 0 ? (
        <InputRightElement>
          <IconButton onClick={() => setSearchValue("")}>
            <MdClose fontSize="1.3rem" />
          </IconButton>
        </InputRightElement>
      ) : null}
    </InputGroup>
  );
}

export default Navigation;
