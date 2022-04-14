import React from "react";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { FaTwitter } from "react-icons/fa";
// , FaInstagram, FaDiscord, FaTiktok

import PFP from "../../../assets/images/CouncilPFP.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Council.css";

const Council = () => {
  const councilData = [
    {
      img: PFP,
      name: "Councilman | Dylan",
      link: "https://twitter.com/dylanr36?s=21",
    },
    {
      img: PFP,
      name: "Councilman | Wattson",
      link: "",
    },
    {
      img: PFP,
      name: "Councilman | Justin",
      link: "https://twitter.com/justintime4sol?s=21",
    },
    {
      img: PFP,
      name: "Councilman | Lizzard",
      link: "",
    },
    {
      img: PFP,
      name: "Councilman | Giff",
      link: "",
    },
    {
      img: PFP,
      name: "Councilman | Carlos",
      link: "",
    },
    {
      img: PFP,
      name: "Councilman | Munor",
      link: "",
    },
  ];
  return (
    <section className="councilsContainer" id="team">
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
          p: "4rem 0 8rem 0",
        }}
      >
        <h2 className="roadmapTitle godSectionTitle">The Council</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1050: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1384: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {councilData.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="councilContentContainer">
                <div className="councilImgContainer">
                  <img
                    src={item.img}
                    className="councilImg"
                    alt="Councilman PFP"
                  />
                </div>
                <div className="councilContent__name">{item.name}</div>
                <a
                  className="councilContent__link"
                  target="_blank"
                  href={item.link}
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </section>
  );
};

export default Council;
