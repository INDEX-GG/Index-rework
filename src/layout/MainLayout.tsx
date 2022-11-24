import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { ReactNode, useEffect, useState, WheelEvent } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import { mainRoutes } from "routes/mainRoutes";
import { router } from "routes/router";

interface IMainLayoutProps {
  children: ReactNode;
  // headerTitle: string;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const pathArr: string[] = mainRoutes.map((item) => item.path || "");
  const navigate = useNavigate();
  const { pathname } = useLocation() || { pathname: "/" };
  const currentIndexPage = pathArr.indexOf(pathname);
  console.log(currentIndexPage);

  const handleWhell = (e: WheelEvent<HTMLDivElement>) => {
    const scorllValue = e.deltaY;
    if (scorllValue > 0) {
      const nextPath = pathArr[currentIndexPage + 1];
      if (nextPath) {
        navigate(nextPath);
      }
    } else {
      const prevPath = pathArr[currentIndexPage - 1];
      if (prevPath) {
        navigate(prevPath);
      }
    }
  };

  return (
    <div id="scrollContainer" onWheel={handleWhell}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
