/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import useLocalStore from '../hooks/authLocalStore';

const DataContext = createContext();

const initialData = {
  stored: false,
  data: {
    profileData: {},
    repos: [{}],
  },
};

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [storedData, setStoredData] = useLocalStore('profile', initialData);

  const setData = inputData => {
    setStoredData({ stored: true, data: inputData });
  };

  const deleteData = () => {
    setStoredData({
      stored: false,
      data: {},
    });
  };
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { ...storedData, setData, deleteData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export { DataContext, DataProvider };
