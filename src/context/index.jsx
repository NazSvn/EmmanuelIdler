import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [test, setTest] = useState("");
  return (
    <GlobalContext.Provider value={{ test, setTest }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalState.propTypes = {
  children: PropTypes.element,
};
