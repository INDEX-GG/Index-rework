import React from "react";
import VkIcon from "assets/icon/vk/VkIcon";
import { useFooterStyles } from "./style";
import WorkspaceIcon from "assets/icon/workspace/WorkspaceIcon";
import BehanceIcon from "assets/icon/behance/BehanceIcon";
import TelegramIcon from "assets/icon/telegram/TelegramIcon";
import VcIcon from "assets/icon/vc/VcIcon";

const Footer = () => {
  return (
    <footer>
      <FooterWrapperSC>
        <FooterBlockTextSC>Introduction Digital Experience</FooterBlockTextSC>
        <FooterBlockIconsSC>
          <VcIcon />
          <BehanceIcon />
          <TelegramIcon />
          <WorkspaceIcon />
          <VkIcon />
        </FooterBlockIconsSC>
      </FooterWrapperSC>
    </footer>
  );
};

const { FooterWrapperSC, FooterBlockTextSC, FooterBlockIconsSC } =
  useFooterStyles();

export default React.memo(Footer);
