import {Button} from "components/Button";
import {
  StyledBanner,
  BannerContainer,
  BannerContentContainer,
  BannerContentHeading,
  BannerContentDescription
} from "./utils";

function Banner() {
  return (
    <StyledBanner>
      <BannerContainer>
        <BannerContentContainer>
          <BannerContentHeading>
            Selangkah lebih percaya diri dengan sepatu baru.
          </BannerContentHeading>
          <BannerContentDescription>
            cari dan termukan Sepatu terbaik produksi anak negeri
          </BannerContentDescription>
          <Button>mulai jelajahi</Button>
        </BannerContentContainer>
      </BannerContainer>
    </StyledBanner>
  );
}

export default Banner;
