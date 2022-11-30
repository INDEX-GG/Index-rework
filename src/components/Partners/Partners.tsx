import React from "react";
import CsuIcon from "assets/icon/csu/CsuIcon";
import MidisIcon from "assets/icon/midis/MidisIcon";
import SusuIcon from "assets/icon/susu/SusuIcon";
import TopIcon from "assets/icon/top/TopIcon";
import { usePartnersStyle } from "./style";

const Partners = () => {
  return (
    <PartnersContainerSC>
      <PartnersListSC>
        <PartnersElemSC>
          <SusuIcon />
          <PartnersTextSC>ЮУрГУ</PartnersTextSC>
        </PartnersElemSC>
        <PartnersElemSC>
          <TopIcon />
          <PartnersTextSC>TOP</PartnersTextSC>
        </PartnersElemSC>
        <PartnersElemSC>
          <CsuIcon />
          <PartnersTextSC>ЧелГУ</PartnersTextSC>
        </PartnersElemSC>
        <PartnersElemSC>
          <MidisIcon />
          <PartnersTextSC>МИДИС</PartnersTextSC>
        </PartnersElemSC>
      </PartnersListSC>
    </PartnersContainerSC>
  );
};

const { PartnersContainerSC, PartnersListSC, PartnersElemSC, PartnersTextSC } =
  usePartnersStyle();

export default React.memo(Partners);
