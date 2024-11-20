import React from 'react';
import './MiniCamera.css';


export default function MiniCamera({name, image}) {
    return (
        <section className = "mini-cam">
            <section className = "cam-visual">
                <img src = {image} alt = {name}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width={14} height={10} x={5} y={11} fill="white" rx={2}></rect><path fill="white" fillRule="evenodd" d="M9.5 6.75a.25.25 0 0 0-.25.25v5h-1.5V7c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v5h-1.5V7a.25.25 0 0 0-.25-.25z" clipRule="evenodd"></path></svg>
            </section>
            <p>{name}</p>

        </section>
    )
}