import {ProductCard, ProductList} from "components/Product";
import styled from "styled-components";

const TrendingProductsContainer = styled.div`
  margin-top: 2rem;
`;

function TrendingProducts() {
  return (
    <TrendingProductsContainer>
      <ProductList title="Sedang Trending" seeMoreLink="/products/trending">
        {Array.from(Array(6)).map((_, idx) =>
          idx < 4 ? (
            <ProductCard
              key={idx}
              productId={1}
              brand="Jaguar"
              title="Casual Jaguar Reborn Brown White [Women]"
              price={1510000}
              discount={0.14}
              imageURL="/assets/product1.png"
            />
          ) : (
            <ProductCard
              key={idx}
              productId={1}
              brand="Jaguar"
              title="Casual Jaguar Reborn Brown White [Women]"
              price={1510000}
              imageURL="/assets/product1.png"
            />
          )
        )}
      </ProductList>
    </TrendingProductsContainer>
  );
}

export default TrendingProducts;
