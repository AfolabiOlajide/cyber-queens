import React, { useState } from "react";
import "./Nav.css";

import twitter from "../../assets/images/twitter.png";
import discord from "../../assets/images/discord.png";
import telegram from "../../assets/images/telegram.png";

const Nav = ( { accounts, setAccounts, setIsConnected } ) => {
	const [navIsActive, setNavIsActive] = useState(false);

	const toggleNav = () => {
		setNavIsActive(!navIsActive);
	};

	const isConnect = Boolean(accounts[0]);
	console.log(accounts);

	async function loginWithMetaMask() {
		if (window.ethereum.chainId !== "0x89") {
			try {
				await window.ethereum.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: "0x89" }],
				});
			} catch (switchError) {
				// This error code indicates that the chain has not been added to MetaMask.
				if (switchError.code === 4902) {
					try {
						await window.ethereum.request({
							method: "wallet_addEthereumChain",
							params: [
								{
									chainId: "0x89",
									blockExplorerUrls: [
										"https://polygonscan.com/",
									],
									chainName: "Matic Mainnet",
									iconUrls: "",
									nativeCurrency: {
										name: "MATIC",
										symbol: "MATIC",
										decimals: 18,
									},
									rpcUrls: ["https://polygon-rpc.com/"],
								},
							],
						});
					} catch (addError) {
						// handle "add" error
					}
				}
				// handle other "switch" errors
			}
			// ------------------------------
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			setAccounts(accounts);
			setIsConnected(true);
			// checkOwner(accounts);
		} else {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});

			setAccounts(accounts);
			setIsConnected(true);
			// checkOwner(accounts);
		}
		// window.userWalletAddress = accounts[0];
	}

	const connect = () => {
		if (!window.ethereum) {
			alert("MetaMask is not installed!");
		} else {
			loginWithMetaMask();
		}
	};

	return (
		<nav className="nav">
			<div className="nav-logo">LOGO</div>
			<div className={`nav-items ${navIsActive ? "active" : ""}`}>
				<div className="nav-item">
					<a href="#about" onClick={toggleNav}>
						About
					</a>
				</div>
				<div className="nav-item">
					<a href="#mint" onClick={toggleNav}>
						Mint
					</a>
				</div>
				<div className="nav-item">
					<a href="#community" onClick={toggleNav}>
						Community
					</a>
				</div>
			</div>
			<div className="nav-cta">
				<div className="socials">
					<span className="social">
						<a href="https://">
							<img src={discord} alt="" />
						</a>
					</span>
					<span className="social">
						<a href="https://">
							<img src={twitter} alt="" />
						</a>
					</span>
					<span className="social">
						<a href="https://">
							<img src={telegram} alt="" />
						</a>
					</span>
				</div>
				<span className="material-icons-sharp menu" onClick={toggleNav}>
					menu
				</span>
				{ isConnect ? <button className="btn">{accounts[0].split("", 4)}...{accounts[0].split("", 6)}</button> : <button onClick={connect} className="btn">Connect Wallet</button> }
			</div>
		</nav>
	);
};

export default Nav;
