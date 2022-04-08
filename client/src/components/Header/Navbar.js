import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Nav() {
  const [links] = useState([
    { url: "/", name: 'Home' },
    { url: "/gallery", name: 'Gallery' },
    { url: "/about", name: 'About' },
    { url: "/contact", name: 'Contact' },
  ]);

  const [userLinks] = useState([
    { url: "/user", name: 'User' },
    { url: "/create", name: 'Create' },
  ])

  const [currentUrl, setCurrentUrl] = useState(links[0]);

  return (
    <nav className="nav">
      <ul className="flex-row">
        {links.map((link) => (
          <li
            key={link.name}
            className={`mx-1 ${currentUrl.name === link.name && 'navActive'}`}
            onClick={() => {
              setCurrentUrl(link)
            }}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
        {
          Auth.loggedIn() ? (
            <>
              <li
                className={`mx-1 ${currentUrl.name === "/user" && "navActive"}`}
                onClick={() => {
                  setCurrentUrl("/user")
                }}>
                <Link to="/user">User</Link>
              </li>
              <li
                className={`mx-1 ${currentUrl.name === "/create" && "navActive"}`}
                onClick={() => {
                  setCurrentUrl("/create");
                }}
              >
                <Link to="/create">Create</Link>
              </li>
              <li className={'mx-1'}>
                <a href="/" onClick={() => Auth.logout()}>Logout</a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
          )
        }
      </ul>
    </nav >
  );
}

export default Nav;