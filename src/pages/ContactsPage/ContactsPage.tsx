import MainLayout from "layout/MainLayout";
import React from "react";

const ContactsPage = () => {
  return (
    <MainLayout headerTitle="КОНТАКТЫ">
      <div>contacts</div>
    </MainLayout>
  );
};

export default React.memo(ContactsPage);
