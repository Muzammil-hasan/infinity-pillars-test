import Link from "next/link";
import React from "react";
import { links } from "../context/nav";

const Nav = () => {
  return (
    <>
      <div className="header_nav__hamburger">
        <svg viewBox="0 0 24 24">
          <path
            fill="#6563ff"
            d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
          />
        </svg>
      </div>

      <nav className="header_nav">
        <ul className="header_nav__list">
          {Object.keys(links).map((link) => {
            return (
              <li key={link} className="header_nav__list-item">
                <Link href={link}>
                  <a className={`header_nav__list-item-${link}`}>
                    {links[link]}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
