import React from "react";
import Twitter from "../images/square-twitter.svg";
import Instagram from "../images/square-instagram.svg";
import Github from "../images/square-github.svg"

export default function Footer() {
    return(
        <div className="footer">
            <ul className="footer-list">
                <li>
                    <a href="#">
                    <img src={Twitter} />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/_.pihu_ss._?igshid=NzZlODBkYWE4Ng==">
                        <img src={Instagram} />
                    </a> 
                </li>
                <li>
                    <a href="https://github.com/Ipsita07p">
                        <img src={Github} />
                    </a>
                </li>
            </ul>
        </div>
    );
}