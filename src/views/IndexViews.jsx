import React from "react";
import Layout from "./layout/Layout";
import HomeIndex from "../pages/home/HomeIndex";
import PortfolioIndex from "../pages/portfolio/PortfolioIndex";
import AboutMeIndex from "../pages/aboutme/AboutMeIndex";
import FeedBackIndex from "../pages/feedback/FeedBackIndex";
import ContactMeIndex from "../pages/contact/ContactMeIndex";
import FooterIndex from "../pages/footer/FooterIndex";

const IndexViews = () => {
  return (
    <>
      <Layout>
        <HomeIndex />
        <PortfolioIndex />
        <AboutMeIndex />
        <FeedBackIndex />
        <ContactMeIndex />
        <FooterIndex />
      </Layout>
    </>
  );
};

export default IndexViews;
