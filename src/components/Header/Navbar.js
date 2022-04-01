import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [links] = useState([
    { url: "/", name: 'Home'},
    { url: "/login", name: 'Login'},
    { url: "/signup", name: 'Signup'},
    { url: "/create", name: 'Create'},
    { url: "/edit/:id", name: 'Edit'},
    { url: "/gallery", name: 'Gallery'},
    { url: "/user", name: 'User'},
    { url: "/about", name: 'About'},
    { url: "/contact", name: 'Contact'},
  ]);

  const [currentUrl, setCurrentUrl] = useState(links[0]);

  return (
    <nav className="nav">
      <ul className="flex-row">
        {links.map((link) => (
          <li 
            key={link.name}
            className={`mx-1 ${ currentUrl.name === link.name && 'navActive'}`}
            onClick={() => {
            setCurrentUrl(link)}}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;