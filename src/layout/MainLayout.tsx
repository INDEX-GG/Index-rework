import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React from "react";
import { useMainLayout } from "./useMainLayout";
import CursorUI from "components/UI/CursorUI/CursorUI";
import { IMainLayoutProps } from "./types";

const MainLayout = ({ children }: IMainLayoutProps) => {
  const { handleWhell, statePage, setStatePage } = useMainLayout();

  return (
    <div id="scrollContainer" onWheel={handleWhell}>
      <Header statePage={statePage} setStatePage={setStatePage} />
      <CursorUI isLoadingNav={statePage.isLoading} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
