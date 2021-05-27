import styled, {useTheme} from "styled-components";
import {lighten} from "polished";
import {useRouter} from "next/router";

import Divider from "components/Divider";
import {Button, IconButton} from "components/Button";
import {
  NavigationPopover,
  NavigationPopoverContent,
  NavigationPopoverOverlay,
  NavigationPopoverTrigger
} from "./Popover";
import {Cart} from "components/Icon";
import {usePopoverPosition} from "./utils";
import {useCart} from "utils/cart";

const CartItemsTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TotalCartItemText = styled.h2`
  font-size: 1.1rem;
  margin: 0;
`;

const CartItemsContainer = styled.div`
  padding: 1rem;
  width: 430px;
`;

const CartItemsEmptyText = styled.p`
  color: ${({theme}) => theme["black.50"]};
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0;
`;

const CartItemsListContainer = styled.div`
  margin-top: 10px;
  overflow-y: auto;
  height: 350px;
`;

const CartItemContainer = styled.a`
  text-decoration: none;
  display: block;
  display: flex;
  border-radius: 5px;
  padding: 10px;

  &:hover,
  &:focus {
    background: ${({theme}) => lighten(0.05, theme.gray)};
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const CartItemImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

const CartItemImage = styled.img`
  min-width: 100%;
  height: auto;
  display: block;
`;

const CartItemProductDetail = styled.div`
  margin-left: 1rem;
  overflow: hidden;
`;

const CartItemProductName = styled.h3`
  margin: 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme}) => theme["black.100"]};
  font-size: 0.9rem;
`;

const CartItemProductQuantity = styled.p`
  margin: 0 0 10px;
  font-size: 0.8rem;
  color: ${({theme}) => theme["black.50"]};
`;

const CartItemProductPrice = styled.p`
  margin: 0;
  color: ${({theme}) => theme.blue};
  font-weight: 700;
  font-size: 0.9rem;
`;

const IconContainer = styled.div`
  position: relative;
`;

const TotalItemIndicatorContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.red};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TotalItemIndicatorText = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 0.7rem;
  color: ${({theme}) => theme.white};
`;

export default function CartItems() {
  const theme = useTheme();
  const router = useRouter();
  const {isOpen, onOpen, onClose, position} = usePopoverPosition();
  const {items} = useCart();

  const contentXPosition = position
    ? `${position.right - position.width / 2 - 215}px`
    : 0;
  const contentYPosition = position ? `${position?.bottom + 16}px` : 0;

  return (
    <NavigationPopover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      contentXPosition={contentXPosition}
      contentYPosition={contentYPosition}
      topOverlay={`${position?.bottom + 22}px`}
    >
      <NavigationPopoverTrigger>
        <IconButton onClick={() => router.push("/cart")}>
          <IconContainer>
            <Cart width={28} height={28} color={theme["black.50"]} />
            {items.length > 0 ? (
              <TotalItemIndicatorContainer>
                <TotalItemIndicatorText>{items.length}</TotalItemIndicatorText>
              </TotalItemIndicatorContainer>
            ) : null}
          </IconContainer>
        </IconButton>
      </NavigationPopoverTrigger>
      <NavigationPopoverContent>
        <CartItemsContainer>
          {items.length > 0 ? (
            <>
              <CartItemsTopContainer>
                <TotalCartItemText>
                  Keranjang ({items.length})
                </TotalCartItemText>
                <Button variant="ghost" size="small">
                  Lihat Semua
                </Button>
              </CartItemsTopContainer>
              <Divider />
              <CartItemsListContainer>
                {items.map(item => (
                  <CartItem
                    key={item.id}
                    productId={item.id}
                    productBrand={item.brand}
                    productName={item.name}
                    productPrice={item.price}
                    productTumbnail={item.image}
                    productQuantity={item.quantity}
                  />
                ))}
              </CartItemsListContainer>
            </>
          ) : (
            <CartItemsEmptyText>Keranjang kamu masih kosong</CartItemsEmptyText>
          )}
        </CartItemsContainer>
      </NavigationPopoverContent>
      <NavigationPopoverOverlay />
    </NavigationPopover>
  );
}

function CartItem(props) {
  const {
    productTumbnail,
    productName,
    productQuantity,
    productPrice,
    productBrand,
    productId
  } = props;
  return (
    <CartItemContainer href={`/product/${productBrand}/${productId}`}>
      <CartItemImageContainer>
        <CartItemImage
          src={productTumbnail}
          alt={productName}
          width="40"
          height="40"
        />
      </CartItemImageContainer>
      <CartItemProductDetail>
        <CartItemProductName>{productName}</CartItemProductName>
        <CartItemProductQuantity>
          Jumlah: {productQuantity}
        </CartItemProductQuantity>
        <CartItemProductPrice>
          Rp. {productPrice.toLocaleString("ID-id")}
        </CartItemProductPrice>
      </CartItemProductDetail>
    </CartItemContainer>
  );
}
