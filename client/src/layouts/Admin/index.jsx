import { json, Outlet } from "react-router-dom";
import { useAuth } from "@hooks/auth";

function Admin() {
  const { user } = useAuth();

  if (user && !user.isAdmin) {
    throw json("Not found", { status: 404 });
  }

  return <Outlet />;
}

export default Admin;
