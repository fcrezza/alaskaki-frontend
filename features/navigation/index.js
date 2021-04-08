import * as React from "react";
import {useRouter} from "next/router";
import {MdClose} from "react-icons/md";
import styled, {useTheme} from "styled-components";
import ReactDOM from "react-dom";

import Link from "components/Link";
import {InputGroup, Input, InputRightElement} from "components/Input";
import {Logo, Cart} from "components/Icon";
import {Button, IconButton} from "components/Button";
import {
  StyledNavigation,
  NavigationContainer,
  NavigationItemsContainer,
  AuthButtonGroup,
  Divider,
  NavigationItemWrapper
} from "./utils";

function Navigation() {
  const router = useRouter();
  const isLoginPage = router.pathname.startsWith("/login");
  const isSignupPage = router.pathname.startsWith("/signup");
  const isAuthenticated = false;
  const theme = useTheme();
  const [cardVisible, setCardVisible] = React.useState("none");
  const cardPosition = React.useRef();

  const handleCategoryFocus = ({target}) => {
    cardPosition.current = {
      top: `${target.getBoundingClientRect().bottom + 20}px`,
      left: `${target.getBoundingClientRect().left}px`
    };
    setCardVisible("category");
  };

  const handleCartFocus = ({target}) => {
    cardPosition.current = {
      top: `${target.getBoundingClientRect().bottom + 20}px`,
      left: `${
        target.getBoundingClientRect().right -
        target.getBoundingClientRect().width / 2 -
        150
      }px`
    };
    setCardVisible("cart");
  };

  return (
    <StyledNavigation>
      <NavigationContainer>
        <NavigationItemsContainer>
          <Link href="/">
            <Logo width={46} height={46} />
          </Link>
          {!isLoginPage && !isSignupPage ? (
            <>
              <NavigationItemWrapper
                onBlur={() => setCardVisible("none")}
                onMouseLeave={() => setCardVisible("none")}
                onMouseOver={({target}) => console.log(target)}
              >
                <Button
                  onClick={() => router.push("/category")}
                  variant="ghost"
                  size="small"
                  onFocus={handleCategoryFocus}
                  onMouseEnter={handleCategoryFocus}
                >
                  Kategori
                </Button>
                <NavigationCard
                  isOpen={cardVisible === "category"}
                  position={cardPosition.current}
                >
                  <div style={{padding: "1rem"}}>
                    visible!<Button>Click here</Button>
                  </div>
                </NavigationCard>
              </NavigationItemWrapper>
              <SearchInput />
              <NavigationItemWrapper
                onBlur={() => setCardVisible("none")}
                onMouseLeave={() => setCardVisible("none")}
              >
                <IconButton
                  onClick={() => router.push("/cart")}
                  onFocus={handleCartFocus}
                  onMouseEnter={handleCartFocus}
                >
                  <Cart width={28} height={28} color={theme["black.50"]} />
                </IconButton>
                <NavigationCard
                  isOpen={cardVisible === "cart"}
                  position={cardPosition.current}
                >
                  <CartItems />
                </NavigationCard>
              </NavigationItemWrapper>
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

const NavigationCardContainer = styled.div`
  position: fixed;
  top: ${({position}) => position.top};
  left: ${({position}) => position.left};
  right: ${({position}) => position.right};
  width: 300px;
  height: auto;
  border-radius: 10px;
  background: ${({theme}) => theme.white};
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 8px 0px;
`;

function NavigationCard(props) {
  const {children, position, isOpen} = props;

  if (isOpen) {
    return ReactDOM.createPortal(
      <NavigationCardContainer position={position}>
        {children}
      </NavigationCardContainer>,
      document.body
    );
  }

  return null;
}

function CartItems() {
  return (
    <div style={{padding: "1rem", textAlign: "center"}}>
      <p>Tidak ada apa-apa disini</p>
    </div>
  );
}

export default Navigation;
