import React from "react";
import Logo from "../../img/rick-morty-logo.png";


const Header = () => {
  return (
      <header>
        <img src={Logo} alt="Rick & Morty logo" />
      </header>
  );
};

export default Header;
