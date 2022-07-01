import { createContext } from "react";
import authLocalStore from "../hooks/authLocalStore";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = authLocalStore("user", null);
  const login = (data) => {
    setAuthData({
      authed: true,
      userData: data,
    });
  };
  const logout = () => {
    setAuthData({
      authed: false,
      userData: {},
    });
  };
  const value = {
    ...authData,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthProvider };
