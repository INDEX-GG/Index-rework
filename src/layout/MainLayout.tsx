import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
