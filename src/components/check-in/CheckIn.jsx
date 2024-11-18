import React from 'react';
import './CheckIn.css';

export default function CheckIn({ firstName, lastName, hostName, type, time, personImage, hostImage, signOut }) {
    return (
        <section className="check-in">
            <section className="check-in-profiles">
                {/* Displaying the images */}
                <section className="check-in-pics">
                    <img src={personImage} alt = {firstName}/>
                    <img src={hostImage} alt = {firstName}/>
                </section>
                {/* Getting the names of each guest. */}
                <section className="check-in-names">
                    <p> {firstName} <span style={{ fontWeight: 'bold' }}>{lastName}</span></p>
                    <p> Host: {hostName} </p>
                </section>
            </section>
            <p>{type}</p>
            <section className="check-in-logistics">
                {/* Displaying the time. */}
                <p>{time}</p>
                {/* Displaying the sign out button. */}
                <button onClick={signOut}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="black" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path></svg>
                    Sign Out
                </button>
            </section>
            {/* Displaying a random icon I saw on the wireframe hehe */}
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#d3d3d3" d="m10.95 13.43l-1.784-1.784q-.147-.146-.345-.155t-.363.155t-.166.357t.166.357l1.927 1.932q.242.243.565.243t.566-.243l4.038-4.038q.146-.146.156-.347t-.156-.366t-.357-.166t-.356.166zM12 20.843q-.136 0-.286-.025t-.281-.075Q8.48 19.617 6.74 16.926T5 11.1V6.817q0-.51.295-.923t.755-.6l5.385-2q.292-.106.565-.106t.566.106l5.384 2q.46.187.755.6t.295.923V11.1q0 3.135-1.74 5.826t-4.693 3.816q-.13.05-.28.075t-.287.025m0-.942q2.6-.825 4.3-3.3t1.7-5.5V6.798q0-.192-.106-.346q-.105-.154-.298-.23l-5.384-2q-.096-.04-.212-.04t-.212.04l-5.384 2q-.193.076-.298.23Q6 6.606 6 6.798V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.861"></path></svg>

        </section>
    )
}