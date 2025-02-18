import { cloneElement, useId, useState } from "react";
import PropTypes from "prop-types";

const Tooltip = ({ text, children, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId();

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  let timeOutId;

  const handleMouseEnter = (icon) => {
    timeOutId = setTimeout(() => {
      setIsVisible(icon);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setIsVisible(null);
    clearTimeout(timeOutId);
  };

  const childWithProps = cloneElement(children, {
    "aria-describedby": isVisible ? tooltipId : undefined,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  });

  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {childWithProps}
      </div>

      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`absolute z-10 whitespace-nowrap rounded-lg bg-gray-700 px-2 py-1 text-xs text-white ${positions[position]} `}
        >
          {text}
          {/* Triangle pointer */}
          <div
            className={`absolute h-2 w-2 rotate-45 transform bg-gray-700 ${position === "top" ? "left-1/2 top-full -translate-x-1/2 -translate-y-1" : ""} ${position === "bottom" ? "bottom-full left-1/2 -translate-x-1/2 translate-y-1" : ""} ${position === "left" ? "left-full top-1/2 -translate-x-1 -translate-y-1/2" : ""} ${position === "right" ? "right-full top-1/2 -translate-y-1/2 translate-x-1" : ""} `}
          />
        </div>
      )}
    </>
  );
};

export default Tooltip;

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
};
