import { useState } from 'react';

const useLocalStore = (key, defaultValue) => {
  const [data, setData] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });
  const setValue = newValue => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      setData(newValue);
    }
  };
  return [data, setValue];
};
export default useLocalStore;
