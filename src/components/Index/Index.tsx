import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useIndexStyles } from "./style";
import "react-circular-progressbar/dist/styles.css";

const Index = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevState) => {
        if (prevState >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prevState + 1;
      });
    }, 5);
    return () => clearInterval(progressInterval);
  }, []);

  return (
    <IndexContainerSC>
      <IndexWrapperSC>
        <IndexBlockLoaderSC>
          <CircularProgressbar
            value={progress}
            strokeWidth={1}
            styles={buildStyles({
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
