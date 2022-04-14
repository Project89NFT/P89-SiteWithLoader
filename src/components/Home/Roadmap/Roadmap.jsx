import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import WP from "../../../assets/images/P89WP-v1.2.pdf";
import loader from "../../../assets/images/DualRing-1s-200px.svg";

import "./Roadmap.css";
import { Box } from "@mui/system";
const Roadmap = () => {
  return (
    <section className="roadmapContainer" id="roadmap">
      <Box
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: "80%",
            lg: "80%",
            xl: "80%",
          },
          mx: "auto",
          p: "2rem 0 10rem 0",
        }}
      >
        <h2 className="roadmapTitle godSectionTitle">Roadmap</h2>
        <a href={WP} target="_blank" rel="noreferrer" className="whitepaper">
          <h4>(Click to view our Whitepaper)</h4>
        </a>
        <Swiper
          slidesPerView={1}
          navigation={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1324: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="roadMapContenContainer">
              <div className="roadmapContent__title">Phase 1</div>
              <div className="roadmapContent_p">
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Build Discord
                  Community
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Garner Social
                  Media Attention
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Release Art
                  Teasers
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Set Storyline
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Announce Mint
                  Pass Date
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Community
                  Shilling
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Launch Website
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="roadMapContenContainer">
              <div className="roadmapContent__title">Phase 2</div>
              <div className="roadmapContent_p">
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Complete
                  Whitelisting
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Development Of
                  Secondary Market
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Community
                  Games/Puzzles
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Launch Mint
                  Pass
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Launch First
                  Major Giveaway
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> List On
                  Upcoming Mint Websites
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="roadMapContenContainer">
              <div className="roadmapContent__title">Phase 3</div>
              <div className="roadmapContent_p">
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Release Mint
                  Date
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Launch Season 1
                  Mint
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> List On
                  Secondary Markets
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> First Major
                  Quest
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Launch
                  Development Of P2E Game
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Release Season
                  1 Extension Series
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="roadMapContenContainer">
              <div className="roadmapContent__title">Phase 4</div>
              <div className="roadmapContent_p">
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Release P2E
                  Game Mechanics Teaser
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Launch Token
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Begin Narrative
                  For Season 2 Collection
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Augmented
                  Reality
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Season 2
                  Redesign
                </p>
                <p className="roadmapItem">
                  <img className="loader" src={loader} alt="" /> Staking
                  Implentation
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="roadMapContenContainer">
              <div className="roadmapContent__title">Phase 5</div>
              <h2 className="roadmapContent__tba">T.B.A.</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>
    </section>
  );
};

export default Roadmap;
