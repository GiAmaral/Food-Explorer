import {
  Copyright,
  FooterContent,
  Footer as StyledFooter,
  FooterLogo,
} from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterLogo />
        <Copyright>© 2023 - Todos os direitos reservados.</Copyright>
      </FooterContent>
    </StyledFooter>
  );
}

export default Footer;
