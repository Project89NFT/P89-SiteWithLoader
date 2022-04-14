import React from "react";
import loadingIcon from "../../assets/images/screenLoader.gif";
const Loading = () => {
  return (
    <section
      className="loadingContainer"
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
      }}
    >
      <img
        src={loadingIcon}
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </section>
  );
};

export default Loading;
