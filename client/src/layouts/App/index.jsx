import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@hooks/auth";
import { CartProvider } from "@hooks/cart";
import Header from "@components/Header";
import Footer from "@components/Footer";

import { Content } from "./styles";

function App() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <CartProvider>
      <Content>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </Content>
    </CartProvider>
  );
}

export default App;
