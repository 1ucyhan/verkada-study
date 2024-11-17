import './App.css';
import NavBar from './components/navbar/NavBar';
import LeftNavBar from './components/left-navbar/LeftNavBar';
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

function App() {
  return (
    <div className="App">
      {/* Left side bar. Will probably not implement LMAO */}
      <LeftNavBar></LeftNavBar>
      {/* The actual content. Should contain the cameras and guests. */}
      <section class = "content">
        {/* Navigation bar. */}
        <NavBar></NavBar>
        {/* Cameras. */}
        {/* Information is from cameraData. */}
        <section className = "cameras">
          {cameraData.map((camera) => {
            return (
              <Camera 
                key = {camera.id}
                image = {camera.image}
                name = {camera.name}
              />
            )
          })}
        </section>
        <section className = "check-ins">
          <CheckIn 
            name = ""
            hostName = ""
            type = ""
            time = ""
          />
          
        </section>

      </section>

      
    </div>
  );
}

export default App;
