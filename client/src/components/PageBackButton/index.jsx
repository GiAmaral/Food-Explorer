import { LeftArrow } from "@components/Icons";

import { BackLink } from "./styles";

function PageBackButton({ to = "/", ...rest }) {
  return (
    <nav {...rest}>
      <BackLink to={to}>
        <LeftArrow />
        voltar
      </BackLink>
    </nav>
  );
}

export default PageBackButton;
