import {ProductCard, ProductList} from "components/Product";
import styled from "styled-components";

const NewProductsContainer = styled.div`
  margin-top: 5rem;
`;

function NewProducts() {
  return (
    <NewProductsContainer>
      <ProductList title="Keluaran Terbaru" seeMoreLink="/products/new">
        {Array.from(Array(6)).map((_, idx) => (
          <ProductCard
            key={idx}
            productId={1}
            brand="Jaguar"
            title="Casual Jaguar Reborn Brown White [Women]"
            price={1510000}
            imageURL="/assets/images/product1.png"
            isNew
          />
        ))}
      </ProductList>
    </NewProductsContainer>
  );
}

export default NewProducts;
