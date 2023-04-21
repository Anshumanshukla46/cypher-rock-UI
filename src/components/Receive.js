import React from "react";

export default function Receive(props) {

    return (
        <div className="parent item">

            <img src={props.image} width="50px" height="50px" className="currency" />

            <div className="currency_name">{props.title}</div>

            <div className="bold">
                {props.val}
            </div>

            <div
                className="bold">
                {props.price}
            </div>

            <p className="receive">
                Receive
            </p>

            <p className="send">Send</p>

        </div>)
}