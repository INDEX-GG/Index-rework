import CursorIcon from "assets/icon/cursor/CursorIcon";
import { MutableRefObject } from "react";
import styled from "styled-components";

const CursorSC = styled.div`
  position: absolute;
  pointer-events: none;
`;

const CursorIconSC = styled(CursorIcon)`
  height: 40px;
  width: 40px;
  position: absolute;
  transition: all;
  will-change: left top;
`;

export const useCursorStyles = () => ({
  CursorSC,
  CursorIconSC,
});
