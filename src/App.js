import './App.css';
import { React, useState, useEffect } from 'react';
// import NavBar from "/Users/lucyhan/Desktop/verkada/verkada/src/components/navbar/NavBar"
// Importing all of the images.
import MockImage1 from "./assets/mock.webp";
import MockImage2 from "./assets/pig.jpg";
import DadImage from "./assets/daddy.jpeg";
import GabImage from "./assets/gab.jpeg";
import IlyasImage from "./assets/ilyas.jpeg";
import KaylaImage from "./assets/kayla.jpeg";
import MomImage from "./assets/mommy.jpeg";
import NhiImage from "./assets/nhi.JPG";

// Data for displaying the camera component.
const cameraData = [
  {
    id: 1,
    image: MockImage1,
    name: "Mailroom Inside Left CD51 (VX52)",
  },
  {
    id: 2,
    image: MockImage2,
    name: "Mailroom Scan Camera CD51 (VX52)",
  },
  {
    id: 3,
    image: MockImage2,
    name: "Mailroom Fart (VX52)",
  }
];



function App() {
  return (
    <div className="app">
      <div className="title">
        <div> <b> Mailroom </b></div>
        <div> Mailroom demo </div>
      </div>
      <div className="left" />
      <div className="cameras">
        {cameraData.map((cam) => {
          return (
            <div className="image-wrapper">
              <img src={cam.image} alt={cam.name} />
              <div className="status">
                <div className="spot"></div>
                <div> {cam.name} </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className = "border">
        <hr />
        Arrived Wed, Jun 7 2023
      </div>
    </div>

  )
}

export default App;
