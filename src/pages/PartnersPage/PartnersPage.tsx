import Partners from "components/Partners/Partners";
import MainLayout from "layout/MainLayout";
import React from "react";

const PartnersPage = () => {
  return (
    <MainLayout>
      <Partners />
    </MainLayout>
  );
};

export default React.memo(PartnersPage);
