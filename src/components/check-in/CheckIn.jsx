import React from 'react';
import './CheckIn.css';
import MockImage1 from "/Users/lucyhan/Desktop/verkada/verkada/src/assets/pig.jpg";

export default function CheckIn({ firstName, lastName, hostName, type, time }) {
    return (
        <section className="check-in">
            <section className="check-in-profiles">
                <section className="check-in-pics">
                    <img src={MockImage1} />
                    <img src={MockImage1} />
                </section>
                <section className="check-in-names">
                    <p> {firstName} <span style={{ fontWeight: 'bold' }}>{lastName}</span></p>
                    <p> Host: {hostName} </p>
                </section>
            </section>
            <p>{type}</p>
            <section className="check-in-logistics">
                <p>{time}</p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="black" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path></svg>
                    Sign Out
                </button>
            </section>

        </section>
    )
}