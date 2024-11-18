import React from 'react';
import './Camera.css'

export default function Camera({image, name}) {
    return (
        <section className = "cam-shot">
            <img src = {image} alt = {name}/>
            <section>
                <h3 className = "cam-name">
                    <section className = "circles"></section>
                    {name}
                </h3>
            </section>
            
        </section>
        
    )
}