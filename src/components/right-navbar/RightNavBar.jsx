import React from 'react';
import './RightNavBar.css';

export default function RightNavBar({numGuests, numDisplayed}) {
    return (
        
        <div className = "right">
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
