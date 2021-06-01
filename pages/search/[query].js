import Checkbox from "components/Checkbox";
import {Input, InputLabel} from "components/Input";
import Layout from "components/Layout";
import {ProductCard} from "components/Product";
import SelectV2 from "components/Select";
import Accordion from "features/search/Accordion";
import Pagination from "features/search/Pagination";
import {useRouter} from "next/router";
import React from "react";
import styled from "styled-components";

const SearchResultContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
`;

const LeftPanel = styled.div`
  border-radius: 10px;
  margin-right: 3rem;
  width: 250px;
  height: auto;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

const RightPanel = styled.div`
  flex: 1;
`;

const SearchResultTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

const SearchQueryText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({theme}) => theme["black.50"]};
`;

const SearchQueryKeyword = styled.strong`
  color: ${({theme}) => theme["black.100"]};
  font-size: 1rem;
`;

const ResultListContainer = styled.div``;

const ResultList = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.15rem;
`;

const PriceAccordionContentContainer = styled.div``;

const PriceAccordionInputContainer = styled.div`
  &:first-child {
    margin-bottom: 1.5rem;
  }
`;

export default function Search() {
  const router = useRouter();
  const [isChecked, setIsChecked] = React.useState(false);
  const onChangeSort = value => console.log(value);

  return (
    <Layout>
      <SearchResultContainer>
        <LeftPanel>
          <Accordion title="Kategori">
            <Checkbox
              id={1}
              label="Sepatu Formal"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Checkbox
              id={2}
              label="Sepatu Olahraga"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Checkbox
              id={3}
              label="Sepatu Boots"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Checkbox
              id={4}
              label="Sepatu Kasual"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Checkbox
              id={5}
              label="Sepatu Sendal"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Checkbox
              id={6}
              label="Sepatu Sneakers"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
          </Accordion>
          <Accordion title="Harga">
            <PriceAccordionContentContainer>
              <PriceAccordionInputContainer>
                <InputLabel id="minprice">Minimum</InputLabel>
                <Input id="minprice" name="minprice" />
              </PriceAccordionInputContainer>
              <PriceAccordionInputContainer>
                <InputLabel id="maxprice">Maksimum</InputLabel>
                <Input id="maxprice" name="maxprice" />
              </PriceAccordionInputContainer>
            </PriceAccordionContentContainer>
          </Accordion>
          <Accordion title="Brand">
            <Checkbox
              id={1}
              label="Brand 1"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Checkbox
              id={2}
              label="Brand 2"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Checkbox
              id={3}
              label="Brand 3"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Checkbox
              id={4}
              label="Brand 4"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
          </Accordion>
          <Accordion title="Jenis Kelamin">
            <Checkbox
              id={5}
              label="Laki-laki"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Checkbox
              id={6}
              label="Perempuan"
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
          </Accordion>
        </LeftPanel>
        <RightPanel>
          <SearchResultTopContainer>
            <SearchQueryText>
              Menampilkan hasil untuk{" "}
              <SearchQueryKeyword>
                &quot;{router.query.query}&quot;
              </SearchQueryKeyword>
            </SearchQueryText>
            <div
              style={{
                width: "310px"
              }}
            >
              <SelectV2
                label="Urutkan"
                direction="horizontal"
                onChange={onChangeSort}
                items={[
                  {
                    id: 1,
                    name: "Terlaris"
                  },
                  {
                    id: 2,
                    name: "Terbaru"
                  },
                  {
                    id: 3,
                    name: "Harga Termurah"
                  },
                  {
                    id: 4,
                    name: "Harga Termahal"
                  }
                ]}
              />
            </div>
          </SearchResultTopContainer>
          <ResultListContainer>
            <ResultList>
              {Array.from(Array(10)).map((_, idx) => (
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
            </ResultList>
            <Pagination />
          </ResultListContainer>
        </RightPanel>
      </SearchResultContainer>
    </Layout>
  );
}
