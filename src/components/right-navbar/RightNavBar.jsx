import React from 'react';
import './RightNavBar.css';
import MiniCamera from '../mini-camera/MiniCamera.jsx'
import PigImage from "../../assets/pig.jpg";
import v1 from "../../assets/v1.webp";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.webp";

const miniCameraData = [
    {
        name: "Lobby",
        image: PigImage
    },
    {
        name: "Main Entrance",
        image: PigImage
    },
    {
        name: "Side Entrance",
        image: PigImage
    },
]

export default function RightNavBar({numGuests, numDisplayed}) {
    return (
        <div className = "right">
            <section className = "cam-display">
                {miniCameraData.map((camData) => {
                    return (
                        <MiniCamera name= {camData.name} image= {camData.image}/>
                    )

                })}
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
