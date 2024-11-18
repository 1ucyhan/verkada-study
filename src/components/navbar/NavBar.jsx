import React from 'react';
import './NavBar.css';

export default function NavBar () {
    return (
        <section className = "nav">
            <section className = "nav-text">
                <h1> Guest </h1>
                <section className = "vertical-line"></section>
                <h3 className = "nav-lobby"> Guest Demo Lobby</h3>
            </section>
            <select className = "dropdown">
                <option value = "pookie"> Pookie </option>
                <option value = "guest"> Guest </option>
                <option value = "parent"> Parent </option>
            </select>
            {/* <h4> Notifications off </h4>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label> */}

        </section>
    )

}

