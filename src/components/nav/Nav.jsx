import React, { useState } from "react";
import "./Nav.css";

import twitter from "../../assets/images/twitter.png";
import discord from "../../assets/images/discord.png";
import telegram from "../../assets/images/telegram.png";

const Nav = () => {
    const [navIsActive, setNavIsActive] = useState(false)

    const toggleNav = () => {
        setNavIsActive(!navIsActive);
    }

	return (
		<nav className="nav">
			<div className="nav-logo">LOGO</div>
			<div className={`nav-items ${navIsActive ? "active" : "" }`}>
				<div className="nav-item">
					<a href="#about" onClick={toggleNav}>About</a>
				</div>
				<div className="nav-item">
					<a href="#mint" onClick={toggleNav}>Mint</a>
				</div>
				<div className="nav-item">
					<a href="#community" onClick={toggleNav}>Community</a>
				</div>
			</div>
			<div className="nav-cta">
				<div className="socials">
					<span className="social"><a href="https://"><img src={discord} alt="" /></a></span>
					<span className="social"><a href="https://"><img src={twitter} alt="" /></a></span>
					<span className="social"><a href="https://"><img src={telegram} alt="" /></a></span>
				</div>
				<span class="material-icons-sharp menu" onClick={toggleNav}>menu</span>
				<button className="btn">Connect Wallet</button>
			</div>
		</nav>
	);
};

export default Nav;
