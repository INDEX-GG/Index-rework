import Index from "components/Index/Index";
import MainLayout from "layout/MainLayout";
import React from "react";

const IndexPage = () => {
  return (
    <MainLayout>
      <Index />
    </MainLayout>
  );
};

export default React.memo(IndexPage);
