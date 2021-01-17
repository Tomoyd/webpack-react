import { useContext } from "react";
import { storeContext } from "../store";
const useStore = (key) => {
  const { state = null, dispatch } = useContext(storeContext);
  const setValue = (value) => {
    return dispatch({ value: { [key]: value }, type: "UPDATE" });
  };

  return [state?.[key], setValue];
};

export default useStore;
