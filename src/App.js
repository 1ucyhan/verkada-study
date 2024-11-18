import './App.css';
import NavBar from './components/navbar/NavBar';
import LeftNavBar from './components/left-navbar/LeftNavBar';
import RightNavBar from './components/right-navbar/RightNavBar';
import Camera from './components/camera/Camera';
import CheckIn from './components/check-in/CheckIn';
import MockImage1 from "./assets/mock.webp";
import MockImage2 from "./assets/pig.jpg";
import DadImage from "./assets/daddy.jpeg";
import GabImage from "./assets/gab.jpeg";
import IlyasImage from "./assets/ilyas.jpeg";
import KaylaImage from "./assets/kayla.jpeg";
import MomImage from "./assets/mommy.jpeg";
import NhiImage from "./assets/nhi.JPG";
import {React, useState} from 'react';

export const cameraData = [
  {
    id: 1,
    image: MockImage1,
    name: "Guest Demo Lobby CD51 (VX52)",
  },
  {
    id: 2,
    image: MockImage2,
    name: "Guest Demo Lobby Outside",
  }
];

export const checkInData = [
  {
    firstName: "Gabriel",
    lastName: "Ong",
    hostName: "Lucy Han",
    type: "Pookie",
    time: "11:11 PM",
    personImage: GabImage,
    hostImage: MockImage2
  },
  {
    firstName: "Kayla",
    lastName: "Bui",
    hostName: "Lucy Han",
    type: "Guest",
    time: "9:22 PM",
    personImage: KaylaImage,
    hostImage: MockImage2
  },
  {
    firstName: "Nhi",
    lastName: "Quach",
    hostName: "Lucy Han",
    type: "Guest",
    time: "3:21 PM",
    personImage: NhiImage,
    hostImage: MockImage2
  },
  {
    firstName: "Lucy",
    lastName: "Han",
    hostName: "Ilyas Kose",
    type: "Guest",
    time: "1:12 PM",
    personImage: MockImage2,
    hostImage: IlyasImage
  },
  {
    firstName: "Yu",
    lastName: "Han",
    hostName: "Lucy Han",
    type: "Family",
    time: "12:11 PM",
    personImage: DadImage,
    hostImage: MockImage2
  },
  {
    firstName: "Min",
    lastName: "Shi",
    hostName: "Lucy Han",
    type: "Family",
    time: "12:12 PM",
    personImage: MomImage,
    hostImage: MockImage2
  },
];

function App() {
  // Call use state for display the correct type of guests.
  const [selection, setSelection] = useState(() => ["Pookie", "Guest", "Family"])

  // Need to create a new list to display only the filtered guys.
  const filteredGuests = checkInData.filter((person) => {
    return person.type == selection
  })

  return (
    <div className="App">
      {/* Left side bar. Will probably not implement LMAO */}
      <LeftNavBar></LeftNavBar>
      {/* The actual content. Should contain the cameras and guests. */}
      <section class="content">
        {/* Navigation bar. */}
        <NavBar props={setSelection}></NavBar>
        {/* Cameras. */}
        {/* Information is from cameraData. */}
        <section className="cameras">
          {cameraData.map((camera) => {
            return (
              <Camera
                key={camera.id}
                image={camera.image}
                name={camera.name}
              />
            )
          })}
        </section>
        <section className="check-ins">
          {filteredGuests.map((person) => {
            return (
              <CheckIn
                firstName={person.firstName}
                lastName={person.lastName}
                hostName={person.hostName}
                type={person.type}
                time={person.time}
                personImage = {person.personImage}
                hostImage = {person.hostImage}
              />
            )
          })}
        </section>
        <RightNavBar></RightNavBar>

      </section>


    </div>
  );
}

export default App;
