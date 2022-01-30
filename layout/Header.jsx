import React from "react";
import Nav from "@components/Nav";
import Logo from "../components/Logo";

const Header = () => {
	return (
		<header className='header'>
			<Logo />

			<Nav />

			<div className='header__cta'>
				<a href='/' className='portfolio_button--primary portfolio_button--small'>
					Contact me
				</a>
			</div>
		</header>
	);
};

export default Header;
