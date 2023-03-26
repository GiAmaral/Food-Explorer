import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue = null) {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(key);

    if (localData) {
      return JSON.parse(localData);
    }

    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
