import React, { useState } from "react";

import './Mint.css';

const Mint = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < 20000) {
            setCount(count + 1);
        }
        return
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
        return
    }

    // const mint = () => {}

	return (
		<div id="mint" className="container">
			<div className="mint-container">
                <div className="mint-count">0/20,000</div>
                <div className="mint-function">
                    <button className="btn" onClick={decrement}>-</button>
                    <div className="number">{count}</div>
                    <button className="btn" onClick={increment}>+</button>
                </div>
                <button className="btn bold">MINT</button>
            </div>
		</div>
	);
};

export default Mint;
