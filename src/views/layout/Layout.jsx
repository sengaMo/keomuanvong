import React from "react";
import Header from "../../components/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main id="main">{children}</main>
    </>
  );
};

export default Layout;
