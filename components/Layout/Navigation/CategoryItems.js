import * as React from "react";
import styled from "styled-components";

import Link from "components/Link";
import Divider from "components/Divider";
import {
  NavigationPopover,
  NavigationPopoverContent,
  NavigationPopoverOverlay,
  NavigationPopoverTrigger
} from "./Popover";
import {usePopoverPosition} from "./utils";
import {Button} from "components/Button";

const CategoryItemsContainer = styled.div`
  display: flex;
`;

const ListItem = styled.div`
  width: 220px;
  padding: 1rem;

  & > a:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const CategoryDetailContainer = styled.div`
  padding: 1rem;
  width: 450px;
`;

const CategoryDetailTitle = styled.h2`
  font-size: 1.3rem;
  color: ${({theme}) => theme["black.100"]};
  margin: 0 0 8px;
`;

const CategoryDetailContent = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const CategoryToggler = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 1rem;
  color: ${({theme}) => theme.blue};
`;

// TODO: change item url path
function CategoryItems() {
  const {isOpen, onOpen, onClose, position} = usePopoverPosition();
  const [categoryDetail, setCategoryDetail] = React.useState(null);

  return (
    <NavigationPopover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      contentXPosition={`${position?.left}px`}
      contentYPosition={`${position?.bottom + 16}px`}
      topOverlay={`${position?.bottom + 32}px`}
    >
      <NavigationPopoverTrigger>
        <CategoryToggler>Kategori</CategoryToggler>
      </NavigationPopoverTrigger>
      <NavigationPopoverContent>
        <CategoryItemsContainer>
          <ListItem>
            <Link
              href="/"
              variant="block"
              onMouseEnter={() => setCategoryDetail("man")}
              onFocus={() => setCategoryDetail("man")}
            >
              Sepatu Pria
            </Link>
            <Link
              href="/"
              variant="block"
              onMouseEnter={() => setCategoryDetail("woman")}
              onFocus={() => setCategoryDetail("woman")}
            >
              Sepatu Wanita
            </Link>
            <Link
              href="/"
              variant="block"
              onMouseEnter={() => setCategoryDetail("kid")}
              onFocus={() => setCategoryDetail("kid")}
            >
              Sepatu Anak
            </Link>
            <Link
              href="/"
              variant="block"
              onMouseEnter={() => setCategoryDetail("brand")}
              onFocus={() => setCategoryDetail("brand")}
            >
              Brand
            </Link>
          </ListItem>
          <CategoryDetail isOpen={categoryDetail === "man"} title="Sepatu Pria">
            <Link href="/">Sepatu Formal Pria</Link>
            <Link href="/">Sepatu Kasual Pria</Link>
            <Link href="/">Sepatu Olahraga Pria</Link>
            <Link href="/">Sepatu Sandal Pria</Link>
            <Link href="/">Sepatu Boots Pria</Link>
            <Link href="/">Sepatu Sneakers Pria</Link>
          </CategoryDetail>
          <CategoryDetail
            isOpen={categoryDetail === "woman"}
            title="Sepatu Wanita"
          >
            <Link href="/">Sepatu Formal Wanita</Link>
            <Link href="/">Sepatu Kasual Wanita</Link>
            <Link href="/">Sepatu Olahraga Wanita</Link>
            <Link href="/">Sepatu Sandal Wanita</Link>
            <Link href="/">Sepatu Boots Wanita</Link>
            <Link href="/">Sepatu Sneakers Wanita</Link>
          </CategoryDetail>
          <CategoryDetail isOpen={categoryDetail === "kid"} title="Sepatu Anak">
            <Link href="/">Sepatu Formal Anak</Link>
            <Link href="/">Sepatu Kasual Anak</Link>
            <Link href="/">Sepatu Olahraga Anak</Link>
            <Link href="/">Sepatu Sandal Anak</Link>
            <Link href="/">Sepatu Boots Anak</Link>
            <Link href="/">Sepatu Sneakers Anak</Link>
          </CategoryDetail>
          <CategoryDetail
            isOpen={categoryDetail === "brand"}
            title="Brand Sepatu"
          >
            <Link href="/">Brand Sepatu 1</Link>
            <Link href="/">Brand Sepatu 2</Link>
            <Link href="/">Brand Sepatu 3</Link>
            <Link href="/">Brand Sepatu 4</Link>
            <Link href="/">Brand Sepatu 5</Link>
          </CategoryDetail>
        </CategoryItemsContainer>
      </NavigationPopoverContent>
      <NavigationPopoverOverlay />
    </NavigationPopover>
  );
}

function CategoryDetail({isOpen, children, title}) {
  if (isOpen) {
    return (
      <>
        <Divider orientation="vertical" />
        <CategoryDetailContainer>
          <CategoryDetailTitle>{title}</CategoryDetailTitle>
          <Divider />
          <CategoryDetailContent>{children}</CategoryDetailContent>
        </CategoryDetailContainer>
      </>
    );
  }

  return null;
}

export default CategoryItems;
