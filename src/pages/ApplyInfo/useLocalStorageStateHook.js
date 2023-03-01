import { useState, useCallback } from 'react';

export const useLocalStorageState = ({ key, value }) => {
  const parsedLocalStorage = JSON.parse(localStorage.getItem(key) || '{}');
  const initialValue = Object.keys(parsedLocalStorage).length > 0 ? parsedLocalStorage : value;

  const [localStorageState, setLocalStorageState] = useState(initialValue);

  const handleUpdateLocalStorageState = useCallback(
    values => {
      setLocalStorageState(values);
      localStorage.setItem(key, JSON.stringify(values));
    },
    [key],
  );

  return [localStorageState, handleUpdateLocalStorageState];
};
