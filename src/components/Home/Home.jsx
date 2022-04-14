import React from "react";
import ScrollToTop from "react-scroll-to-top";

import Banner from "./Bannner/Banner";
import Council from "./Council/Council";
import Footer from "./Footer/Footer";
import OurStory from "./OurStory/OurStory";
import Roadmap from "./Roadmap/Roadmap";
import TheGods from "./TheGods/TheGods";
import "../../Media.css";
const Home = () => {
  return (
    <>
      <ScrollToTop smooth />
      <Banner />
      <TheGods />
      <Roadmap />
      <OurStory />
      <Council />
      <Footer />
    </>
  );
};

export default Home;
