import './App.css';
import { React, useState } from 'react';
// Importing all of the components.
import NavBar from './components/navbar/NavBar';
import LeftNavBar from './components/left-navbar/LeftNavBar';
import RightNavBar from './components/right-navbar/RightNavBar';
import Camera from './components/camera/Camera';
import CheckIn from './components/check-in/CheckIn';
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

// Data for displaying the guest data.
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
  // Note that setSelection is passed in as a property to nav bar.
  // Selection is only changed once the user goes on the dropdown to select something.
  const [selection, setSelection] = useState(() => null)
  console.log("selection : ", selection)
  // Setting a state to remove guests.
  const [guests, setGuests] = useState(() => checkInData);
  // Setting a state to keep track of total amount before signed in.
  const [total, setTotal] = useState(() => checkInData.length)

  // Want to be able to remove guest. Would probably use filter again?
  // Filter through all these people. I want all of them except that one guest.

  /**
   * Helper function to remove any guest on sign out.
   * Calls filter and setGuest.
   * @param {*} guest 
   */
  function removeGuest(guest) {
    console.log('remove guest called')
    // Whenever a guest is removed, then we decrement the total count.
    setTotal((t) => t - 1);
    const newGuestList = guests.filter((person) => person.firstName != guest)
    setGuests(newGuestList)
  }

  /**
   * Helper function to filter any guest.
   * Calls setSelection, setGuest, and filter.
   * @param {*} type 
   */
  function filterGuest(type) {
    console.log('filter guest called')
    const filteredGuests = type
      ? checkInData.filter((person) => person.type == type)
      : checkInData;
    setGuests(filteredGuests);
  }

  return (
    <div className="App">
      {/* Left side bar. Will probably not implement LMAO */}
      <LeftNavBar></LeftNavBar>
      {/* The actual content. Should contain the cameras and guests. */}
      <section class="content">
        {/* Navigation bar. */}
        <NavBar props={filterGuest}></NavBar>
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
        {/* Displaying all the check-ins. */}
        <section className="check-ins">
          {guests.map((person) => {
            return (
              <CheckIn
                key = {person.firstName}
                firstName={person.firstName}
                lastName={person.lastName}
                hostName={person.hostName}
                type={person.type}
                time={person.time}
                personImage={person.personImage}
                hostImage={person.hostImage}
                // Need to have this guy in a wrapper. Otherwise will be rendered each time.
                signOut={() => removeGuest(person.firstName)}
              />
            )
          })}
        </section>
        {/* Right Nav Bar for more practice. */}
        {/* the number of guests is going to be depending on the length of guests. Changing the length of guests would change everything else. */}
        <RightNavBar numGuests={total} numDisplayed = {guests.length}></RightNavBar>
      </section>
    </div>
  );
}

export default App;
