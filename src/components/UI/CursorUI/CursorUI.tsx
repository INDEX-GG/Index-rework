import React, { MutableRefObject, MouseEvent, useState } from "react";
import { useCursorStyles } from "./style";
import { useEffect, useRef } from "react";

type StyleStateType = {
  opacity: number;
  left: string;
  top: string;
};

const CursorUI = () => {
  const [style, setStyle] = useState<StyleStateType>({
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

      setStyle(() => ({
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
      setStyle({
        opacity: 1,
        top: mountedY,
        left: mountedX,
      });
    }

    document.addEventListener("mousemove", onMouseMove);
    return () => removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <CursorSC ref={cursorRef} style={style}>
      <CursorIconSC />
    </CursorSC>
  );
};

const { CursorIconSC, CursorSC } = useCursorStyles();

export default React.memo(CursorUI);
