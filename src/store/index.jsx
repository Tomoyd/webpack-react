import { createContext, useReducer } from "react";

export const storeContext = createContext({
  state: null,
  dispatch: (action) => {}
});

const storeReducer = (state, action) => {
  const { type = "", value = {} } = action || {};
  switch (type) {
    case "UPDATE":
      return { ...state, ...value };
    default:
      return {};
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, {});
  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
