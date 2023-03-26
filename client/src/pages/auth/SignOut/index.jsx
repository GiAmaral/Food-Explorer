import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";

function SignOut() {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, []);

  return <Navigate to="/sign-in" replace />;
}

export default SignOut;
