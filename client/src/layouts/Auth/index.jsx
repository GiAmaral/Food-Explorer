import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { PageWrapper } from "./styles";

function Auth() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageWrapper>
      <Logo />

      <Outlet />
    </PageWrapper>
  );
}

export default Auth;
