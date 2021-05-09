import * as React from "react";
import {useRouter} from "next/router";
import {MdClose} from "react-icons/md";
import styled, {useTheme} from "styled-components";

import Link from "components/Link";
import {InputGroup, Input, InputRightElement} from "components/Input";
import {Logo, Cart} from "components/Icon";
import {Button, IconButton} from "components/Button";
import {
  NavigationPopover,
  NavigationPopoverContent,
  NavigationPopoverOverlay,
  NavigationPopoverTrigger
} from "./Popover";

const StyledNavigation = styled.div`
  border-bottom: ${({theme}) => `1px solid ${theme.gray}`};
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

const Divider = styled.div`
  align-self: stretch;
  width: 1px;
  min-height: 100%;
  background-color: ${({theme}) => theme.gray};
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
  const theme = useTheme();
  const [cardVisible, setCardVisible] = React.useState("none");
  const popoverTogglePosition = React.useRef();
  const navigationPosition = React.useRef();

  const handleCategoryPopoverOpen = ({target}) => {
    popoverTogglePosition.current = {
      y: target.getBoundingClientRect().bottom,
      x: target.getBoundingClientRect().left
    };
    setCardVisible("category");
  };

  const handleCartPopoverOpen = ({target}) => {
    popoverTogglePosition.current = {
      y: target.getBoundingClientRect().bottom,
      x:
        target.getBoundingClientRect().right -
        target.getBoundingClientRect().width / 2 -
        150
    };
    setCardVisible("cart");
  };

  return (
    <StyledNavigation ref={navigationPosition}>
      <NavigationContainer>
        <NavigationItemsContainer>
          <Link href="/">
            <Logo width={46} height={46} />
          </Link>
          {!isLoginPage && !isSignupPage ? (
            <>
              <NavigationPopover
                isOpen={cardVisible === "category"}
                onOpen={handleCategoryPopoverOpen}
                onClose={() => setCardVisible("none")}
                contentXPosition={`${popoverTogglePosition.current?.x}px`}
                contentYPosition={`${popoverTogglePosition.current?.y + 16}px`}
                topOverlay={`${navigationPosition.current?.offsetHeight}px`}
              >
                <NavigationPopoverTrigger>
                  <Button
                    onClick={() => router.push("/category")}
                    variant="ghost"
                    size="small"
                  >
                    Kategori
                  </Button>
                </NavigationPopoverTrigger>
                <NavigationPopoverContent>
                  <div style={{padding: "1rem"}}>
                    visible! <Button>Click here</Button>
                  </div>
                </NavigationPopoverContent>
                <NavigationPopoverOverlay />
              </NavigationPopover>
              <SearchInput />
              <NavigationPopover
                isOpen={cardVisible === "cart"}
                onOpen={handleCartPopoverOpen}
                onClose={() => setCardVisible("none")}
                contentXPosition={`${popoverTogglePosition.current?.x}px`}
                contentYPosition={`${popoverTogglePosition.current?.y + 16}px`}
                topOverlay={`${popoverTogglePosition.current?.y + 22}px`}
              >
                <NavigationPopoverTrigger>
                  <IconButton onClick={() => router.push("/cart")}>
                    <Cart width={28} height={28} color={theme["black.50"]} />
                  </IconButton>
                </NavigationPopoverTrigger>
                <NavigationPopoverContent>
                  <CartItems />
                </NavigationPopoverContent>
                <NavigationPopoverOverlay />
              </NavigationPopover>
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
        </NavigationItemsContainer>
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

function CartItems() {
  return (
    <div style={{padding: "1rem", textAlign: "center"}}>
      <p>Tidak ada apa-apa disini</p>
    </div>
  );
}

export default Navigation;
