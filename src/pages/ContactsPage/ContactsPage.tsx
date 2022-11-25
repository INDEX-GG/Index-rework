import Contacts from "components/Contacts/Contacts";
import MainLayout from "layout/MainLayout";
import React from "react";

const ContactsPage = () => {
  return (
    <MainLayout>
      <Contacts />
    </MainLayout>
  );
};

export default React.memo(ContactsPage);
