import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [test, setTest] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GlobalContext.Provider value={{ test, setTest, isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalState.propTypes = {
  children: PropTypes.element,
};
