import * as React from "react";
import {useRouter} from "next/router";
import {MdClose} from "react-icons/md";

import Link from "components/Link";
import {InputGroup, Input, InputRightElement} from "components/Input";
import {Logo, Cart} from "components/Icon";
import {Button, IconButton} from "components/Button";
import {
  StyledNavigation,
  NavigationContainer,
  NavigationItemContainer,
  AuthButtonGroup,
  Divider
} from "./utils";

function Navigation() {
  const router = useRouter();
  const isLoginPage = router.pathname.startsWith("/login");
  const isSignupPage = router.pathname.startsWith("/signup");
  const isAuthenticated = false;

  return (
    <StyledNavigation>
      <NavigationContainer>
        <NavigationItemContainer>
          <IconButton onClick={() => router.push("/")}>
            <Logo width={46} height={46} />
          </IconButton>
          {!isLoginPage && !isSignupPage ? (
            <>
              <Link href="/category">Kategori</Link>
              <SearchInput />
              <IconButton onClick={() => router.push("/cart")}>
                <Cart width={32} height={32} />
              </IconButton>
              <Divider />
            </>
          ) : null}
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
            <p>authenticated!</p>
          )}
        </NavigationItemContainer>
      </NavigationContainer>
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
