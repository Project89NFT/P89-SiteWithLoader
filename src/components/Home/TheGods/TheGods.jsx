import { Box } from "@mui/material";
import React from "react";
import "./TheGods.css";
const TheGods = () => {
  return (
    <section className="theGodsSectionContainer">
      <Box
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: "90%",
            lg: "80%",
            xl: "80%",
          },
          mx: "auto",
        }}
      >
        <div className="godSectionContentContainer">
          <h2 className="godSectionTitle">The Gods Await..</h2>
          <p className="godSectionDes">
            After centuries of silence, the gods have awoken. Many followers
            have come and gone and the army of the gods has disbanded. Without
            an army, plans cannot be carried out how the gods intend. Upon their
            awakening they began searching through multiple realms to form a
            body of 13 members, which is now known as the council. They've
            tasked the council with creating a simulation of past warriors to
            resurrect the acting army of gods. Within this simulation the
            council is to pit the warriors against one another, to bring forth
            the strongest warriors to ever exist.
          </p>
        </div>
      </Box>
    </section>
  );
};

export default TheGods;
