import { useCallback, useState } from "react";

const useToggle = (initialValue) => {
  const [booleanValue, setBooleanValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setBooleanValue((value) => !value);
  }, []);

  return [booleanValue, toggle];
};

export default useToggle;
