import { useAuth } from "@hooks/auth";
import { AdminTag, Container, LogoName, Polygon } from "./styles";

function Logo() {
  const { user } = useAuth();

  return (
    <Container to="/">
      <Polygon />

      <LogoName>foodexplorer</LogoName>
      {user?.isAdmin ? <AdminTag>admin</AdminTag> : null}
    </Container>
  );
}

export default Logo;
