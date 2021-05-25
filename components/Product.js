import styled from "styled-components";
import {lighten} from "polished";
import {useRouter} from "next/router";

import {Button} from "components/Button";

const ProductCardContainer = styled.a`
  text-decoration: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  max-width: 180px;
  position: relative;

  &:hover,
  &:focus {
    box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04),
      0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),
      0px 0px 1px rgba(0, 0, 0, 0.04);
  }
`;

const ProductCardImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductCardNewTagContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const ProductCardContentContainer = styled.div`
  padding: 1rem 1rem 1.5rem;
`;

const ProductCardTitle = styled.p`
  color: ${({theme}) => theme["black.100"]};
  margin: 0 0 0.9rem;
  font-size: 0.85rem;
  line-height: 1.5;
  font-weight: 500;
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  word-break: break-word;
  text-overflow: ellipsis;
`;

const ProductCardDiscountContainer = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: ${({theme}) => lighten(0.25, theme["red.50"])};
`;

const ProductCardDiscountText = styled.p`
  margin: 0;
  font-size: 0.7rem;
  color: ${({theme}) => theme["red.50"]};
  font-weight: 700;
`;

const ProductCardOldPriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProductCardOldPriceText = styled.div`
  color: ${({theme}) => theme["black.50"]};
  font-size: 0.7rem;
  text-decoration: line-through;
  margin: 0 0 0 1rem;
`;

const ProductCardPrice = styled.h3`
  font-weight: 700;
  color: ${({theme}) => theme["black.100"]};
  font-size: 1rem;
  margin: 0;
`;

const ProductListContainer = styled.div``;

const ProductListTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

const ProductListTitle = styled.h2`
  color: ${({theme}) => theme["black.100"]};
  margin: 0;
  font-size: 1.6rem;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.15rem;
`;

export function ProductCard(props) {
  const {brand, productId, title, price, discount, imageURL, isNew} = props;
  const finalPrice = discount ? price - price * discount : price;

  return (
    <ProductCardContainer href={`/product/${brand}/${productId}`}>
      {isNew ? (
        <ProductCardNewTagContainer>
          <NewTag width="48" height="48" />
        </ProductCardNewTagContainer>
      ) : null}
      <ProductCardImage src={imageURL} alt={title} width={180} height={180} />
      <ProductCardContentContainer>
        <ProductCardTitle>{title}</ProductCardTitle>
        {discount ? (
          <ProductCardOldPriceContainer>
            <ProductCardDiscountContainer>
              <ProductCardDiscountText>
                -{(discount * 100).toFixed(0)}%
              </ProductCardDiscountText>
            </ProductCardDiscountContainer>
            <ProductCardOldPriceText>
              Rp. {price.toLocaleString("ID-id")}
            </ProductCardOldPriceText>
          </ProductCardOldPriceContainer>
        ) : null}
        <ProductCardPrice>
          Rp. {finalPrice.toLocaleString("ID-id")}
        </ProductCardPrice>
      </ProductCardContentContainer>
    </ProductCardContainer>
  );
}

export function ProductList({seeMoreLink, title, children}) {
  const router = useRouter();

  return (
    <ProductListContainer>
      <ProductListTopSection>
        <ProductListTitle>{title}</ProductListTitle>
        <Button onClick={() => router.push(seeMoreLink)} variant="ghost">
          Lihat Semua
        </Button>
      </ProductListTopSection>
      <ListContainer>{children}</ListContainer>
    </ProductListContainer>
  );
}

function NewTag({width, height}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.2902 18.5449C38.602 15.9288 42.398 15.9288 42.7098 18.5449C42.9646 20.6838 45.8063 21.249 46.8603 19.3705C48.1495 17.0728 51.6566 18.5255 50.9434 21.0618C50.3604 23.1353 52.7695 24.745 54.4621 23.4128C56.5324 21.7834 59.2166 24.4676 57.5872 26.5379C56.255 28.2305 57.8647 30.6396 59.9382 30.0566C62.4745 29.3434 63.9272 32.8505 61.6295 34.1397C59.751 35.1937 60.3162 38.0354 62.4551 38.2902C65.0712 38.602 65.0712 42.398 62.4551 42.7098C60.3162 42.9646 59.751 45.8063 61.6295 46.8603C63.9272 48.1495 62.4745 51.6566 59.9382 50.9434C57.8647 50.3604 56.255 52.7695 57.5872 54.4621C59.2166 56.5324 56.5324 59.2166 54.4621 57.5872C52.7695 56.255 50.3604 57.8647 50.9434 59.9382C51.6566 62.4745 48.1495 63.9272 46.8603 61.6295C45.8063 59.751 42.9646 60.3162 42.7098 62.4551C42.398 65.0712 38.602 65.0712 38.2902 62.4551C38.0354 60.3162 35.1937 59.751 34.1397 61.6295C32.8505 63.9272 29.3434 62.4745 30.0566 59.9382C30.6396 57.8647 28.2305 56.255 26.5379 57.5872C24.4676 59.2166 21.7834 56.5324 23.4128 54.4621C24.745 52.7695 23.1353 50.3604 21.0618 50.9434C18.5255 51.6566 17.0728 48.1495 19.3705 46.8603C21.249 45.8063 20.6838 42.9646 18.5449 42.7098C15.9288 42.398 15.9288 38.602 18.5449 38.2902C20.6838 38.0354 21.249 35.1937 19.3705 34.1397C17.0728 32.8505 18.5255 29.3434 21.0618 30.0566C23.1353 30.6396 24.745 28.2305 23.4128 26.5379C21.7834 24.4676 24.4676 21.7834 26.5379 23.4128C28.2305 24.745 30.6396 23.1353 30.0566 21.0618C29.3434 18.5255 32.8505 17.0728 34.1397 19.3705C35.1937 21.249 38.0354 20.6838 38.2902 18.5449Z"
        fill="#3D5AF1"
      />
      <path
        d="M35.28 44H33.228L29.796 38.804V44H27.744V35.576H29.796L33.228 40.796V35.576H35.28V44ZM43.0794 40.544C43.0794 40.736 43.0674 40.936 43.0434 41.144H38.3994C38.4314 41.56 38.5634 41.88 38.7954 42.104C39.0354 42.32 39.3274 42.428 39.6714 42.428C40.1834 42.428 40.5394 42.212 40.7394 41.78H42.9234C42.8114 42.22 42.6074 42.616 42.3114 42.968C42.0234 43.32 41.6594 43.596 41.2194 43.796C40.7794 43.996 40.2874 44.096 39.7434 44.096C39.0874 44.096 38.5034 43.956 37.9914 43.676C37.4794 43.396 37.0794 42.996 36.7914 42.476C36.5034 41.956 36.3594 41.348 36.3594 40.652C36.3594 39.956 36.4994 39.348 36.7794 38.828C37.0674 38.308 37.4674 37.908 37.9794 37.628C38.4914 37.348 39.0794 37.208 39.7434 37.208C40.3914 37.208 40.9674 37.344 41.4714 37.616C41.9754 37.888 42.3674 38.276 42.6474 38.78C42.9354 39.284 43.0794 39.872 43.0794 40.544ZM40.9794 40.004C40.9794 39.652 40.8594 39.372 40.6194 39.164C40.3794 38.956 40.0794 38.852 39.7194 38.852C39.3754 38.852 39.0834 38.952 38.8434 39.152C38.6114 39.352 38.4674 39.636 38.4114 40.004H40.9794ZM53.774 37.304L51.962 44H49.694L48.638 39.656L47.546 44H45.29L43.466 37.304H45.518L46.466 42.092L47.594 37.304H49.766L50.906 42.068L51.842 37.304H53.774Z"
        fill="white"
      />
    </svg>
  );
}

export default ProductCard;
