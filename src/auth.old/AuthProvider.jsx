import { createContext } from "react";
import { useLocalStorage } from "../Hooks";

const AuthContext = createContext();
// const initialData = {
//   user: false,
//   user: {},
// };

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useLocalStorage("user", null);
  const login = async (data) => {
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
  //   const value = useMemo(
  //     () => ({
  //       user,
  //       login,
  //       logout,
  //     }),
  //     [user]
  //   );
  //   const value = { user, login, logout };
  //   const value = () => ({
  //     ...user,
  //     login,
  //     logout,
  //   });
  const value = {
    ...authData,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
