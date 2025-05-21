import { useRef, useState, useEffect } from "react";

export const useTooltipPosition = (dependency, triggerRef) => {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [side, setSide] = useState("right");

  useEffect(() => {
    if (triggerRef?.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const isOutOfBounds =
        triggerRect.right + tooltipRect.width > window.innerWidth;

      setSide(isOutOfBounds ? "left" : "right");

      setPosition({
        top: triggerRect.top + window.scrollY,
        left:
          triggerRect.left +
          (isOutOfBounds ? -tooltipRect.width : triggerRect.width) +
          window.scrollX,
      });
    }
  }, [dependency, triggerRef]);

  return { tooltipRef, position, side };
};
