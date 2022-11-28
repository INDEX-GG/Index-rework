import { useState, useEffect, useRef } from "react";

type StyleStateType = {
  opacity: number;
  left: string;
  top: string;
};

export const useCursorUI = (isLoadingNav: boolean) => {
  const [moveMouseStyle, setMoveMouseStyle] = useState<StyleStateType>({
    opacity: 0,
    left: "0px",
    top: "0px",
  });
  const cursorRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: any) => {
    const circle = cursorRef.current;
    if (circle) {
      const coordinatesX = e.pageX - 24 + "px";
      const coordinatesY = e.pageY - 24 + "px";

      sessionStorage.setItem("@mouseX", coordinatesX);
      sessionStorage.setItem("@mouseY", coordinatesY);

      setMoveMouseStyle(() => ({
        opacity: 1,
        left: coordinatesX,
        top: coordinatesY,
      }));
    }
  };

  useEffect(() => {
    const mountedY = sessionStorage.getItem("@mouseY");
    const mountedX = sessionStorage.getItem("@mouseX");

    if (mountedX && mountedY) {
      setMoveMouseStyle({
        opacity: 1,
        top: mountedY,
        left: mountedX,
      });
    }

    document.addEventListener("mousemove", onMouseMove);
    return () => removeEventListener("mousemove", onMouseMove);
  }, []);

  const [progress, setProgress] = useState<number>(0);

  const [pathTransition, setPathTransition] = useState("none");

  useEffect(() => {
    if (isLoadingNav === false) {
      setPathTransition("none");
      setProgress(0);
    }
    if (isLoadingNav) {
      setPathTransition("stroke-dashoffset 2s ease 0s");
      setProgress(100);
    }
  }, [isLoadingNav]);

  return {
    cursorRef,
    progress,
    moveMouseStyle,
    pathTransition,
  };
};
