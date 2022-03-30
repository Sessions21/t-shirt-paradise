import React from "react";
import Nav from "./Navbar"


function Header() {
  return (
    <header className="flex-row">
      <h1>
        <a className="name" href="/">T-Shirt Paradise</a>
        <span><p>The T-Shrit Enthusiast Forum</p></span>
      </h1>
      <Nav />
    </header>
  );
}

export default Header;