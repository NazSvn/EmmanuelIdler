import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [atTop, setAtTop] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isShown,
        setIsShown,
        atTop,
        setAtTop,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};
