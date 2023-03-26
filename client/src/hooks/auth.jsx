import { createContext, useContext } from "react";
import useLocalStorage from "./localStorage";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("@foodexplorer:user");
  const [token, setToken] = useLocalStorage("@foodexplorer:token");

  const storeUser = ({ user: sessionUser, token: sessionToken }) => {
    setUser(sessionUser);
    setToken(sessionToken);
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ storeUser, signOut, user, token }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext, useAuth };
export default AuthProvider;
