import React from "react";
import profilePicture from "../images/profile_logo.png";
import emailIcon from '../images/envelope-solid.svg';
import linkedInIcon from '../images/linkedin.svg';

export default function Info(){
    return(
        <div className="info">
            <img src={profilePicture} className='profile-picture'></img>
            <h3 className='name'>Ipsita Pati</h3>
            <h4 className='job'>Software Developer</h4>
            <a className='website' href='https://github.com/Ipsita07p' target='_blank' rel='noreferrer'>https://github.com/Ipsita07p</a>
            <div className='social-buttons'>
                <a href='mailto:ipsita.pati2000@gmail.com' target='_blank' rel='noreferrer'>
                    <button className="email-button">
                        <img src={emailIcon} className='emailIcon' />
                        Email
                    </button>
                </a>
                <a herf='https://www.linkedin.com/in/ipsita708/'>
                    <button className="linkedIn-button">
                        <img src={linkedInIcon} className="linkedInIcon" />
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}