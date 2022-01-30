import React from "react";
import { links } from "@context/nav";

const Nav = () => {
	return (
		<nav className='header__nav'>
			<ul className='header__nav__list'>
				{Object.keys(links).map((link) => {
					return (
						<li key={link} className='header__nav__list-item'>
							<a href={link} className={`header__nav__list-item-${link}`}>
								{links[link]}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
