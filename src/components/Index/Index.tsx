import React from "react";
import { useIndexStyles } from "./style";

const Index = () => {
  return (
    <IndexContainerSC>
      <IndexWrapperSC>
        <IndexBlockLoaderSC />
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
