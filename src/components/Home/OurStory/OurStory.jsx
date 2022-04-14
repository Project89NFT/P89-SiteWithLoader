import React from "react";

import secondBg from "../../../assets/images/WebsiteSecond.png";

import "./OurStory.css";
const OurStory = () => {
  return (
    <section className="outStoryContainer">
      <div className="outStory__content_container">
        <div className="outStory__content">
          <h2 className="outStory__title">Our Story</h2>
          <p className="outStory__text">
            Project 89 was initially united in an effort to provide an NFT
            project that put the community first. We came together with the
            resolve that in the forming of project 89 we intend to create
            something new and innovative in this space, with help to remember
            the driving factor of it's core, the community.
          </p>
        </div>
        <div className="outStory__img">
          <img src={secondBg} className="storyBg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
