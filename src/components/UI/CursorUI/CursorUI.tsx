import React from "react";
import { useCursorStyles } from "./style";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useCursorUI } from "./useCursorUI";

type CursorUIPropsType = {
  isLoadingNav: boolean;
};

const CursorUI: React.FC<CursorUIPropsType> = ({ isLoadingNav }) => {
  const { cursorRef, progress, moveMouseStyle, pathTransition } =
    useCursorUI(isLoadingNav);
  return (
    <CursorSC ref={cursorRef} style={moveMouseStyle}>
      <CursorIconSC />
      <div style={{ position: "absolute", top: "0" }}>
        <CircularProgressbar
          value={progress}
          strokeWidth={2}
          styles={buildStyles({
            pathColor: "white",
            trailColor: "grey",
            pathTransition: pathTransition,
          })}
        />
      </div>
    </CursorSC>
  );
};

const { CursorIconSC, CursorSC } = useCursorStyles();

export default React.memo(CursorUI);
