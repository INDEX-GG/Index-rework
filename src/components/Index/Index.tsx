import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useIndexStyles } from "./style";
import "react-circular-progressbar/dist/styles.css";

const Index = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <IndexContainerSC>
      <IndexWrapperSC>
        <IndexBlockLoaderSC>
          <CircularProgressbar
            value={progress}
            strokeWidth={1}
            styles={buildStyles({
              pathTransition: "stroke-dashoffset 2s ease 0s",
              pathColor: "white",
              trailColor: "grey",
            })}
          />
        </IndexBlockLoaderSC>
        <IndexBlockTextSC>INDEX</IndexBlockTextSC>
      </IndexWrapperSC>
    </IndexContainerSC>
  );
};

const {
  IndexBlockLoaderSC,
  IndexBlockTextSC,
  IndexContainerSC,
  IndexWrapperSC,
} = useIndexStyles();

export default React.memo(Index);
