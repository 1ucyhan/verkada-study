import React from 'react';
import './NavBar.css';

export default function NavBar({props: filterGuest}) {
    const updateDropdown = (event) => {
        console.log("dropdown clicked")
        const value = event.target.value;
        console.log("got hte value ", value);
        if (value == "All") {
            filterGuest(null)
        } else {
            filterGuest(value)
        }
    }

    return (
        <section className = "nav">
            <section className = "nav-text">
                <h1> Guest </h1>
                <section className = "vertical-line" ></section>
                <h3 className = "nav-lobby"> Guest Demo Lobby</h3>
            </section>
            <select className = "dropdown" onChange={updateDropdown}>
                <option value = "All"> All Guest Types</option>
                <option value = "Pookie"> Pookie </option>
                <option value = "Guest"> Guest </option>
                <option value = "Family"> Family </option>
            </select>
            {/* <h4> Notifications off </h4>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label> */}

        </section>
    )

}

