import { createContext } from 'react';
import useLocalStore from '../hooks/authLocalStore';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useLocalStore('user', null);

  const login = data => {
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
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    ...authData,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthProvider };
