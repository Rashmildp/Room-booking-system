import React, { useState, useEffect } from "react";
import RoomItem from './RoomItem';



function EventList(props) {

  const [roomList, setromList] = useState([]);




  useEffect(() => {
    fetch('http://localhost:8080/api/v1/rooms')
      .then((response) => {
        return response.json();
      })
       .then((responseData) => {
   
      setromList(responseData);
      //   }
        
      setromList(responseData);
      });
  }, []);






return (
  <div className="container">
   
    <RoomItem posts={roomList}/>
 
  </div>
);
};


export default EventList;