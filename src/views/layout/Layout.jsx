import React from "react";
import TopBar from "../../components/sidebar/TopBar";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <section className="w-full">{children}</section>
    </>
  );
};

export default Layout;
