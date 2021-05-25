import styled from "styled-components";

import Layout from "components/Layout";
import {Button} from "components/Button";
import {useRouter} from "next/router";

const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const NotFoundMessage = styled.p`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme}) => theme["black.50"]};
  margin: 0 0 1.8rem;
`;

function NotFound() {
  const router = useRouter();

  return (
    <Layout>
      <NotFoundContainer>
        <NotFoundMessage>Halaman Tidak Dapat Ditemukan</NotFoundMessage>
        <Button onClick={() => router.push("/")}>
          Kembali ke halaman utama
        </Button>
      </NotFoundContainer>
    </Layout>
  );
}

export default NotFound;
