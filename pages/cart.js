import styled from "styled-components";

import Divider from "components/Divider";
import Layout from "components/Layout";
import {Button} from "components/Button";
import {useCart} from "utils/cart";

import {
  CheckboxInput,
  CheckboxInputContainer,
  CheckboxInputLabel
} from "components/Checkbox";
import CartItem from "features/cart/CartItem";

const CartContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const CartItemsListContainer = styled.div`
  flex: 1;
  margin-right: 3rem;
  background-color: ${({theme}) => theme["white"]};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

const AllOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartSummaryContainer = styled.div`
  width: 400px;
  align-self: flex-start;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({theme}) => theme["white"]};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

const CartSummaryTitle = styled.h2`
  font-size: 1.2rem;
  color: ${({theme}) => theme["black.100"]};
  margin: 0 0 1.5rem;
`;

const CartSummaryText = styled.p`
  font-size: 0.9rem;
  color: ${({theme}) => theme["black.50"]};
  margin: 0 0 8px;
  display: flex;
  justify-content: space-between;
`;

const CartTotalPrice = styled.h2`
  font-size: 1.2rem;
  color: ${({theme}) => theme["black.100"]};
  margin: 0 0 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export default function Cart() {
  const {items} = useCart();

  return (
    <Layout>
      <CartContainer>
        <CartItemsListContainer>
          <AllOptionContainer>
            <CheckboxInputContainer>
              <CheckboxInput id="all" />
              <CheckboxInputLabel id="all" label="Pilih Semua" />
            </CheckboxInputContainer>
            <Button variant="ghost" size="small">
              Hapus
            </Button>
          </AllOptionContainer>
          <Divider size="1rem" />
          {items.map(item => (
            <CartItem
              key={item.id}
              productId={item.id}
              productBrand={item.brand}
              productName={item.name}
              productPrice={item.price}
              productTumbnail={item.image}
              productQuantity={item.quantity}
              productDiscount={0.15}
            />
          ))}
        </CartItemsListContainer>
        <CartSummaryContainer>
          <CartSummaryTitle>Ringkasan</CartSummaryTitle>
          <CartSummaryText>
            <span>Total Harga (2 barang)</span>
            <span>Rp. 1.000.000</span>
          </CartSummaryText>
          <CartSummaryText>
            <span>Total Diskon</span>
            <span>-Rp. 30.000</span>
          </CartSummaryText>
          <Divider size="1.5rem" />
          <CartTotalPrice>
            <span>Total Harga</span>
            <span>Rp. 970.000</span>
          </CartTotalPrice>
          <Button block>Checkout (3)</Button>
        </CartSummaryContainer>
      </CartContainer>
    </Layout>
  );
}
