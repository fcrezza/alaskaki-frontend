import styled from "styled-components";

import Divider from "components/Divider";
import {lighten} from "polished";
import {Input} from "components/Input";
import {IconButton} from "components/Button";
import {Add, Subtract, Trash} from "components/Icon";
import Checkbox from "components/Checkbox";

const CartItemOldPriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CartItemOldPriceText = styled.div`
  color: ${({theme}) => theme["black.50"]};
  font-size: 0.7rem;
  text-decoration: line-through;
  margin: 0 0 0 1rem;
`;

const CartItemPrice = styled.h3`
  font-weight: 700;
  color: ${({theme}) => theme["black.100"]};
  font-size: 1rem;
  margin: 0;
`;

const CartItemDiscountContainer = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: ${({theme}) => lighten(0.25, theme["red.50"])};
`;

const CartItemDiscountText = styled.p`
  margin: 0;
  font-size: 0.7rem;
  color: ${({theme}) => theme["red.50"]};
  font-weight: 700;
`;

const CartItemActionContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

const CartItemQuantityContainer = styled.div`
  display: flex;
  width: 140px;

  & > * {
    margin-left: 0.4rem;
  }
`;

const CartItemCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const CartItemContainer = styled.div`
  text-decoration: none;
  display: block;
  display: flex;
  border-radius: 5px;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    border-bottom: ${({theme}) => `1px solid ${theme["gray"]}`};
  }
`;

const CartItemImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  align-self: flex-start;
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

const CartItemProductName = styled.a`
  margin: 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  color: ${({theme}) => theme["black.100"]};
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-block;

  &:focus,
  &:hover {
    color: ${({theme}) => theme.blue};
  }
`;

export default function CartItem(props) {
  const {
    productTumbnail,
    productName,
    productQuantity,
    productPrice,
    productBrand,
    productDiscount,
    productId
  } = props;
  const finalPrice = productDiscount
    ? productPrice - productPrice * productDiscount
    : productPrice;
  return (
    <CartItemContainer>
      <CartItemCheckboxContainer>
        <Checkbox id={productId} onChange={() => {}} />
      </CartItemCheckboxContainer>
      <CartItemImageContainer>
        <CartItemImage
          src={productTumbnail}
          alt={productName}
          width="60"
          height="60"
        />
      </CartItemImageContainer>
      <CartItemProductDetail>
        <CartItemProductName href={`/product/${productBrand}/${productId}`}>
          {productName}
        </CartItemProductName>
        {productDiscount ? (
          <CartItemOldPriceContainer>
            <CartItemDiscountContainer>
              <CartItemDiscountText>
                -{(productDiscount * 100).toFixed(0)}%
              </CartItemDiscountText>
            </CartItemDiscountContainer>
            <CartItemOldPriceText>
              Rp. {productPrice.toLocaleString("ID-id")}
            </CartItemOldPriceText>
          </CartItemOldPriceContainer>
        ) : null}
        <CartItemPrice>Rp. {finalPrice.toLocaleString("ID-id")}</CartItemPrice>
      </CartItemProductDetail>
      <CartItemActionContainer>
        <IconButton>
          <Trash width="24" height="24" />
        </IconButton>
        <Divider orientation="vertical" size="1rem" />
        <CartItemQuantityContainer>
          <IconButton color="white" backgroundColor="blue" disabled>
            <Subtract width="24" height="3" />
          </IconButton>
          <Input size="small" value={productQuantity} onChange={() => {}} />
          <IconButton color="white" backgroundColor="blue">
            <Add width="24" height="12" />
          </IconButton>
        </CartItemQuantityContainer>
      </CartItemActionContainer>
    </CartItemContainer>
  );
}
