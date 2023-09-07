import React, { useEffect, useState } from "react";
import { CONSTANTS } from "../constants";

const useLocalStorage = (key: string, initValue?: any) => {
  const prefixedKey = CONSTANTS.localStoragePrefix + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof initValue === "function") {
      return initValue();
    } else {
      return initValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [value, prefixedKey]);

  return [value, setValue];
};

export default useLocalStorage;
