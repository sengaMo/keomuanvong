import React from "react";
import Header from "../../components/header/Header";
import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main id="main">
        {children} <Analytics />
      </main>
    </>
  );
};

export default Layout;
