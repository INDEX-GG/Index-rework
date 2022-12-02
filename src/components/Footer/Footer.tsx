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
        <FooterBlockTextSC>Integration of Digital Experience</FooterBlockTextSC>
        <FooterBlockIconsSC>
          <a
            href="https://workspace.ru/contractors/digital-studiya-index/"
            target="_blank"
            rel="noreferrer">
            <WorkspaceIcon />
          </a>
          <a
            href="https://www.behance.net/INDEX-STUDIO"
            target="_blank"
            rel="noreferrer">
            <BehanceIcon />
          </a>
          <a
            href="https://vc.ru/u/1268124-index/entries"
            target="_blank"
            rel="noreferrer">
            <VcIcon />
          </a>
          <a href="https://t.me/INDEX_RU" target="_blank" rel="noreferrer">
            <TelegramIcon />
          </a>
          <a href="https://vk.com/index_ds" target="_blank" rel="noreferrer">
            <VkIcon />
          </a>
        </FooterBlockIconsSC>
      </FooterWrapperSC>
    </footer>
  );
};

const { FooterWrapperSC, FooterBlockTextSC, FooterBlockIconsSC } =
  useFooterStyles();

export default React.memo(Footer);
