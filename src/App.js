import './App.css';
import { React, useState, useEffect } from 'react';
// Data for displaying the camera component.
const data = {
  "preview": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/preview.png",
  "events": [
    {
      "title": "Person of Interest",
      "subtitle": "Filip Kaliszan",
      "site": "3rd Floor",
      "detail": "Elevator East Lobby",
      "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event1.png",
      "timestamp": 1612247209
    },
    {
      "title": "Motion",
      "subtitle": "People Detected",
      "site": "Outside",
      "detail": "Front Door",
      "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event2.png",
      "timestamp": 1612207950
    },
    {
      "title": "Crowd",
      "subtitle": "2 or more people",
      "site": "London",
      "detail": "Intersection",
      "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event3.png",
      "timestamp": 1612202420
    }
  ]
};



function App() {
  const [search, setSearch] = useState('');
  // console.log(data.events)
  const filteredData = data.events.filter((event) => event.title.toLowerCase().includes(search) || event.subtitle.toLowerCase().includes(search) || event.site.toLowerCase().includes(search) || event.detail.toLowerCase().includes(search));
  // console.log('filtered ', filteredData)
  function handleSearch(e) {
    console.log('handling serach')
    setSearch(prev => setSearch(e.target.value))
  }

  function convertTime(timestamp) {
    console.log("CONVERTING LOCAL TIME")
    var time = new Date(timestamp * 1000);
    console.log("time | ", time)
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  // useEffect(() => {
  //   return (
  //     <div>

  //     </div>

  //   )
  // }, [search])


  return (
    <div className="app">
      <div className="bg"> </div>
      <div className="preview">
        <img className="preview-img" src={data.preview} alt="Preview Camera Shot" />
        <div className="live">
          <div className="dot" />
          <div> LIVE </div>
        </div>
      </div>
      <div className="search">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" /></svg>
        <input 
          type="text" 
          placeholder="Search Events..."
          onChange={e => handleSearch(e)}
          >
        </input>
      </div>
      <div className="border" />
      <div className="events">
        {filteredData.map((event) => {
          return (
            <div className="event-row">
              <img className="event-img" src={event.image} alt={event.title} />
              <div className="dude-info">
                <div className="event-title">{event.title}</div>
                <div className="event-subtitle">{event.subtitle}</div>
              </div>
              <div> {event.site} - {event.detail} </div>
              <div className="event-time"> {convertTime(event.timestamp)} </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
