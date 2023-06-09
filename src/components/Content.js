import React, { useState, useEffect } from "react";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Receive from "./Receive";
import Bitcoin from "../images/bitcoin.png";
import eth from "../images/eth.png"
import binance from "../images/binance.png"

export default function Content() {

    const [isLocked, setIsLocked] = useState(false);


    const handleLockButtonClick = () => {
        setIsLocked(!isLocked);
    };


    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        function handleClickOutside(event) {
            const popup = document.getElementById("popup");
            if (popup && !popup.contains(event.target)) {
                setSelectedOption(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (
        <div className="content_parent">

            <div
                className="content_child"
            >

                <span
                    className="content_span"
                >
                    Synchronized
                </span>

                <div>

                    <button onClick={handleLockButtonClick} className="lock">
                        {isLocked ? <LockOpenIcon /> : <LockIcon />}
                    </button>

                    <button><DarkModeIcon /></button>

                </div>
            </div>

            <br /> <br />


            <div
                className="content_child_2"
            >

                <span className="wallet_span">Wallet 1</span>

                <button
                    className="add_coin"
                >
                    <span style={{ marginRight: "5px" }}>+</span>Add Coin
                </button>
            </div>


            <div
                className="count_coint">

                <div className="sort">

                    <span className="sort-title">
                        Total Coin-6
                    </span>


                    <form className="drop">
                        <select id="my-select" name="my-select">

                            <option value="option1">Amount High-Low</option>

                            <option value="option2">Amount Low-High</option>

                            <option value="option3">Arrange A-Z</option>

                            <option value="option4">Arrange Z-A</option>

                        </select>
                    </form>
                </div>
            </div>


            <div className="list-coin">

                <Receive
                    image={Bitcoin}
                    title="BITCOIN"
                    val="BTC 0.0025600"
                    price="USD 0.5268"
                />


                <Receive
                    image={eth}
                    title="ETHEREUM"
                    val="ETH 0.0025600"
                    price="USD 0.5268"
                />

                <Receive
                    image={binance}
                    title="BINANCE COIN"
                    val="ETH 0.0025600"
                    price="USD 0.5268"
                />

                <Receive
                    image={Bitcoin}
                    title="BITCOIN"
                    val="BTC 0.0025600"
                    price="USD 0.5268"
                />


                <Receive
                    image={eth}
                    title="ETHEREUM"
                    val="ETH 0.0025600"
                    price="USD 0.5268"
                />
            </div>
        </div>
    );
}
