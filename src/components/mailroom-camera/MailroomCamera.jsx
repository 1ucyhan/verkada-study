import React from 'react';
import './MailroomCamera.css';


export default function MiniCamera({name, image}) {
    return (
        <div className = "mini-cam">
            <div className = "cam-visual">
                <img src = {image} alt = {name}/>
                <div className = "status">
                    <div className = ""> {name} </div>
                </div>
            </div>
            <p>{name}</p>
        </div>
    )
}