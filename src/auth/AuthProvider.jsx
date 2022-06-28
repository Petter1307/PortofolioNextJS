import { createContext } from "react";
import authLocalStore from "../hooks/authLocalStore";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = authLocalStore("user", null);
  const login = async (data) => {
    setAuthData({
      authed: true,
      userData: data,
    });
  };
  const logout = async () => {
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
