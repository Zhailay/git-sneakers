<<<<<<< HEAD
import React from "react"
import logoSvg from "../assets/img/sneaker-logo.png"
import { Link } from "react-router-dom"
import Search from "./Search"

const Header = () => {
  return(
    <div className="header">
    <div className="container">
      <Link to="/">
      <div className="header__logo">
        <img width="80px" src={logoSvg} alt="sneaker logo" />
        <div>
          <h1>Best Sneakers</h1>
          <p>Air Jordan, adidas, Nike, Yeezy and more!</p>
        </div>
      </div>
      </Link>
      <Search />
    </div>
  </div>
  )
}

export default Header
=======
import React from "react";
import logoSvg from "../assets/img/sneaker-logo.png";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="80px" src={logoSvg} alt="sneaker logo" />
            <div>
              <h1>Best Sneakers</h1>
              <p>Air Jordan, adidas, Nike, Yeezy and more!</p>
            </div>
          </div>
        </Link>
        {isHomePage && <Search />}
      </div>
    </div>
  );
};

export default Header;
>>>>>>> 64891dd (Add Sneaker page)
