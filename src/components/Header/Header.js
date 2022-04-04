import React from "react";
import Nav from "./Navbar"


function Header() {
  return (
    <header className="flex-row">
      <h1>
        <a className="name" href="/"><span className="t">T</span><span className="dash">-</span><span className="shirt">Shirt</span> Paradise</a>
        <span><p className="titleDesc">An Enthusiast's Forum</p></span>
      </h1>
      <Nav />
    </header>
  );
}

export default Header;