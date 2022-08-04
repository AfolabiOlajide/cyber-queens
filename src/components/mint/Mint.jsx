import React, { useState } from "react";
import { toast } from "react-toastify";
import { ethers, BigNumber } from "ethers";

import cyberqueensNFT from "../../CyberqueensNFT.json"

import "./Mint.css";

const CyberqueensAddress = "0xA7188d1460e2E4Fd6Dc0A25099bE5CC863B074c7"

const Mint = ( { accounts } ) => {
	const [mintAmount, setMintAmount] = useState(1);

	const currentAccount = accounts ? accounts[0] : "";

	async function handleMint() {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				CyberqueensAddress,
				cyberqueensNFT.abi,
				signer
			);

			try {
				const response = await contract.mint(
					currentAccount,
					BigNumber.from(mintAmount),
					{
						value: ethers.utils.parseEther(
							(88 * mintAmount).toString()
						),
					}
				);
				const afterResponse = await response.wait();
				console.log(afterResponse);
				// const totalSupply = await contract.totalSupply();
				// setTotalSupply(
				// 	String(
				// 		Math.round(
				// 			parseFloat(
				// 				ethers.utils.formatEther(totalSupply) * 10 ** 18
				// 			)
				// 		)
				// 	)
				// );
				if (afterResponse) {
					toast.success("Mint successful", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			} catch (error) {
				console.log(error);
				toast.error("Mint Unsuccessful", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		}
	}

	const increment = () => {
		if (mintAmount < 20000) {
			setMintAmount(mintAmount + 1);
		}
		return;
	};

	const decrement = () => {
		if (mintAmount > 1) {
			setMintAmount(mintAmount - 1);
		}
		return;
	};

	// const mint = () => {}

	return (
		<div id="mint" className="container">
			<div className="mint-container">
				<div className="mint-count">0/20,000</div>
				<div className="mint-function">
					<button className="btn" onClick={decrement}>
						-
					</button>
					<div className="number">{mintAmount}</div>
					<button className="btn" onClick={increment}>
						+
					</button>
				</div>
				<button className="btn bold" onClick={handleMint}>MINT</button>
			</div>
		</div>
	);
};

export default Mint;
