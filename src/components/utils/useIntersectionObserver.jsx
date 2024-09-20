// useIntersectionObserver.js
import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false); // New state to track initial intersection
  const [scrollDirection, setScrollDirection] = useState("down");
  const ref = useRef(null);
  const prevScrollY = useRef(window.scrollY);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection("up");
      }

      prevScrollY.current = currentScrollY; // Update previous scroll position
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  useEffect(() => {
    if (isVisible) return; // Prevents re-observing once it has intersected

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // Update state to indicate intersection happened
        observer.unobserve(entry.target); // Stop observing after the first intersection
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, isVisible]); // Include isVisible in the dependency array to prevent re-triggering

  return [ref, isVisible, scrollDirection];
};

export default useIntersectionObserver;
