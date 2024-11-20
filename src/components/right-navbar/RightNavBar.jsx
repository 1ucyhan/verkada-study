import React from 'react';
import './RightNavBar.css';
import MiniCamera from '../mini-camera/MiniCamera.jsx'
import PigImage from "../../assets/pig.jpg";

export default function RightNavBar({numGuests, numDisplayed}) {
    return (
        <div className = "right">
            <section className = "cam-display">
                <MiniCamera name= {"Lobby"} image= {PigImage}/>
                <MiniCamera name= {"Lobby"} image= {PigImage}/>
                <MiniCamera name= {"Lobby"} image= {PigImage}/>
            </section>
            <hr />
            <div className = "count">
                <p className = "guest-count">
                    <span style={{fontWeight: '800'}}>{numGuests} </span>guests ({numDisplayed} displayed)
                </p>
                <p className = "invite-count"><span style={{fontWeight: '800'}}>0 </span>invited</p>
            </div>
        </div>
    )
}
