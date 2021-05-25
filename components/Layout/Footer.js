import Divider from "components/Divider";
import {Email, PhoneCall} from "components/Icon";
import Link from "components/Link";
import {lighten} from "polished";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: ${({theme}) => lighten(0.1, theme["gray"])};
  border-top: 8px solid ${({theme}) => theme.blue};
  margin-top: auto;
`;

const FooterInnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
`;

const CopyrightContainer = styled.div`
  padding: 2rem 0 1rem;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({theme}) => theme["black.100"]};
`;

const FooterContentItemContainer = styled.div``;

const FooterContentContainer = styled.div`
  display: flex;
  padding: 2rem 0;

  & > ${FooterContentItemContainer} {
    flex: 1;
  }

  & > ${FooterContentItemContainer}:first-child {
    flex: 3;
    width: 100%;
  }

  & > ${FooterContentItemContainer}:not(:first-child) {
    margin-left: 2.5rem;
  }
`;

const FooterContentItemTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({theme}) => theme["black.100"]};
  margin: 0 0 1rem;
`;

const AboutText = styled.p`
  line-height: 1.5;
  margin: 0;
  font-size: 1rem;
  color: ${({theme}) => theme["black.50"]};
`;

const ListLink = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkItem = styled.li`
  &:not(:first-child) {
    margin-top: 0.8rem;
  }
`;

const ContactInfoContainer = styled.div`
  margin-top: 2rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-bottom: 8px;
  }
`;
const ContactInfoIcon = styled.div`
  margin-right: 10px;
`;
const ContactInfoDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({theme}) => theme["black.50"]};
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterContentContainer>
          <FooterContentItem title="Tentang Alas Kaki">
            <AboutText>
              Alas Kaki adalah marketplace brand sepatu lokal Indonesia yang
              diproduksi oleh para kreator sepatu tanah air dan telah melayani
              lebih dari jutaan customer di seluruh Indonesia.
            </AboutText>
            <ContactInfoContainer>
              <ContactInfoItem>
                <ContactInfoIcon>
                  <PhoneCall width="26" height="26" />
                </ContactInfoIcon>
                <ContactInfoDescription>+6281234567890</ContactInfoDescription>
              </ContactInfoItem>
              <ContactInfoItem>
                <ContactInfoIcon>
                  <Email width="26" height="26" />
                </ContactInfoIcon>
                <ContactInfoDescription>
                  customer.service@alaskaki.com
                </ContactInfoDescription>
              </ContactInfoItem>
            </ContactInfoContainer>
          </FooterContentItem>
          <FooterContentItem title="Eksplor Produk">
            <ListLink>
              <LinkItem>
                <Link href="/products/formal">Sepatu Formal</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/products/kasual">Sepatu Kasual</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/products/olahraga">Sepatu Olahraga</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/products/boots">Sepatu Boots</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/products/sendal">Sepatu Sendal</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/products/sneakers">Sepatu Sneakers</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/products/brand">Berdasarkan Brand</Link>
              </LinkItem>
            </ListLink>
          </FooterContentItem>
          <FooterContentItem title="Bantuan">
            <ListLink>
              <LinkItem>
                <Link href="/help">Pembayaran</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/help">Pengiriman</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/help">Status Pesanan</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/help">Pengembalian Produk</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/help">Cara Berbelanja</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/help">Hubungi Kami</Link>
              </LinkItem>
            </ListLink>
          </FooterContentItem>
          <FooterContentItem title="Ikuti Kami">
            <ListLink>
              <LinkItem>
                <Link href="https://facebook.com" isExternal>
                  Facebook
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://twitter.com" isExternal>
                  Twitter
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://youtube.com" isExternal>
                  Youtube
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://instagram.com" isExternal>
                  Instagram
                </Link>
              </LinkItem>
            </ListLink>
          </FooterContentItem>
        </FooterContentContainer>
        <Divider />
        <CopyrightContainer>
          <CopyrightText>
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/">Alas Kaki</Link>. All right reserved.
          </CopyrightText>
        </CopyrightContainer>
      </FooterInnerContainer>
    </FooterContainer>
  );
}

function FooterContentItem({title, children}) {
  return (
    <FooterContentItemContainer>
      <FooterContentItemTitle>{title}</FooterContentItemTitle>
      {children}
    </FooterContentItemContainer>
  );
}

export default Footer;
