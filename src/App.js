import './App.css';
import NavBar from './components/navbar/NavBar';
import LeftNavBar from './components/left-navbar/LeftNavBar';
import RightNavBar from './components/right-navbar/RightNavBar';
import Camera from './components/camera/Camera';
import CheckIn from './components/check-in/CheckIn';
import MockImage1 from "./assets/mock.webp";
import MockImage2 from "./assets/pig.jpg";

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
    time: "11:11 PM"
  },
  {
    firstName: "Kayla",
    lastName: "Bui",
    hostName: "Lucy Han",
    type: "Guest",
    time: "9:22 PM"
  },
  {
    firstName: "Nhi",
    lastName: "Quach",
    hostName: "Lucy Han",
    type: "Guest",
    time: "3:21 PM"
  },
  {
    firstName: "Lucy",
    lastName: "Han",
    hostName: "Ilyas Kose",
    type: "Guest",
    time: "1:12 PM"
  },
  {
    firstName: "Yu",
    lastName: "Han",
    hostName: "Lucy Han",
    type: "Family",
    time: "12:11 PM"
  },
  {
    firstName: "Min",
    lastName: "Shi",
    hostName: "Lucy Han",
    type: "Family",
    time: "12:12 PM"
  },
];

function App() {
  return (
    <div className="App">
      {/* Left side bar. Will probably not implement LMAO */}
      <LeftNavBar></LeftNavBar>
      {/* The actual content. Should contain the cameras and guests. */}
      <section class="content">
        {/* Navigation bar. */}
        <NavBar></NavBar>
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
          {checkInData.map((person) => {
            return (
              <CheckIn
                firstName={person.firstName}
                lastName={person.lastName}
                hostName={person.hostName}
                type={person.type}
                time={person.time}
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
