import { useState } from 'react';

function useLocalStorage(key: any, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      setStoredValue(value);

      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
}

export { useLocalStorage };
