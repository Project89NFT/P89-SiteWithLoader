import { Box } from "@mui/system";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../../../assets/images/logo-png.png";

import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("home");
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <Box
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: "90%",
            lg: "90%",
            xl: "90%",
          },
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="header__content">
          <div className="header__logo__container">
            <Link to="/">
              <img className="header__logo" src={logo} alt="" />
            </Link>
          </div>
          <nav
            className={
              open ? "header__menu header__menu__active" : "header__menu"
            }
          >
            <IoMdClose
              className="header__menu__close"
              onClick={() => {
                toggleMenu();
              }}
            />
            <HashLink
              className={
                active === "home"
                  ? "menu__item menuItemActive"
                  : "menu__item menuItemNotActive"
              }
              smooth
              to="/#home"
              onClick={() => {
                toggleMenu();
                setActive("home");
              }}
            >
              Home
            </HashLink>
            <HashLink
              className={
                active === "roadMap"
                  ? "menu__item menuItemActive"
                  : "menu__item menuItemNotActive"
              }
              smooth
              to="/#roadmap"
              onClick={() => {
                toggleMenu();
                setActive("roadMap");
              }}
            >
              Roadmap
            </HashLink>
            <HashLink
              className={
                active === "team"
                  ? "menu__item menuItemActive"
                  : "menu__item menuItemNotActive"
              }
              smooth
              to="/#team"
              onClick={() => {
                toggleMenu();
                setActive("team");
              }}
            >
              Team
            </HashLink>
            <HashLink
              className={
                active === "marketPlace"
                  ? "menu__item menuItemActive"
                  : "menu__item menuItemNotActive"
              }
              smooth
              to="/marketplace"
              onClick={() => {
                toggleMenu();
                setActive("marketPlace");
              }}
            >
              Marketplace
            </HashLink>
          </nav>
        </div>
        <div className="mint__cotainer">
          <Link
            className={
              active === "mint"
                ? "menu__item_mint mint__btn mint__btnActive"
                : "menu__item_mint mint__btn"
            }
            to="/mint"
            onClick={() => {
              setActive("mint");
            }}
          >
            Mint Here
          </Link>
          <GiHamburgerMenu
            className="mint__btn__toggle"
            onClick={() => {
              toggleMenu();
            }}
          />
        </div>
      </Box>
    </header>
  );
};

export default Header;
