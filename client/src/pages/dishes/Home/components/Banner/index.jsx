// import macarons from "../../../../assets/img/macarons.png";
import macarons from "@assets/img/macarons.png";
import macaronsDesktop from "@assets/img/macarons-desktop.png";
import {
  BannerContent,
  BannerSubtitle,
  BannerTitle,
  BannerWrapper,
  Picture,
} from "./styles";

function Banner() {
  return (
    <BannerWrapper>
      <Picture>
        <source srcSet={macaronsDesktop} media="(min-width: 1024px)" />
        <img
          src={macarons}
          alt="Macarons e mirtilos caindo em fundo transparente"
        />
      </Picture>

      <BannerContent>
        <BannerTitle>Sabores inigualáveis</BannerTitle>
        <BannerSubtitle>
          Sinta o cuidado do preparo com ingredientes selecionados
        </BannerSubtitle>
      </BannerContent>
    </BannerWrapper>
  );
}

export default Banner;
