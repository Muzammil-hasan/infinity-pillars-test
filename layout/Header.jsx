import React from "react";
import Nav from "../components/Nav";

const Header = () => {
	return (
		<header className='header'>
			<Nav />

			<div className='header__ctas'>
				<a href='/' className='portfolio_button--secondary portfolio_button--small'>
					Resume
				</a>
				<a href='/' className='portfolio_button--primary portfolio_button--small'>
					Let's talk
				</a>
			</div>
		</header>
	);
};

export default Header;
