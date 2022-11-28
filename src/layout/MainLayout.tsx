import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { ReactNode, useEffect, useRef } from "react";
import { useMainLayout } from "./useMainLayout";
import { pageNameRU } from "../routes/mainRoutes";
import CursorUI from "components/UI/CursorUI/CursorUI";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const { handleWhell, isChangePage } = useMainLayout();

  return (
    <div id="scrollContainer" onWheel={handleWhell}>
      <Header headerTitle={pageNameRU[isChangePage.page]} />
      {isChangePage.isLoading && <div>loading</div>}
      <CursorUI />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
