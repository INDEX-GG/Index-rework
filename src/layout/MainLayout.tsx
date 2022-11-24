import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { ReactNode } from "react";
import { useMainLayout } from "./useMainLayout";

interface IMainLayoutProps {
  children: ReactNode;
  headerTitle: string;
}

const MainLayout = ({ children, headerTitle }: IMainLayoutProps) => {
  const { handleWhell } = useMainLayout();

  return (
    <div id="scrollContainer" onWheel={handleWhell}>
      <Header headerTitle={headerTitle} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
