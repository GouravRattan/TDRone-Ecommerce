import React, { useState, useEffect } from 'react';

const DroneData = () => {
  const [DronesRecord, setDronesRecord] = useState([]);

  useEffect(() => {
    fetchDronesRecord();
  }, []);

  const fetchDronesRecord = async () => {
    const requestData = {
      eventID: "1099",
      addInfo: {
        DroneId: "",
        Name: "",
        Price: "",
        ImageUrl: "",
        ImageThumbnailUrl: "",
      },
    };
    try {
      const response = await fetch("http://localhost:2005/alldrones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, "API response data");

      if (data.rData && data.rData.rCode === 0) {
        setDronesRecord(data.rData.Drones || []);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch Drones: ${error}`);
      setDronesRecord([]);
    }
  };

  return (
    <div>
      {DronesRecord.map((item, index) => (
        <div key={index}>
          <h1>Price: {item.price}</h1>
          <p>Name: {item.name}</p>
          <img src={item.imageUrl} alt={item.Name} />
        </div>
      ))}
    </div>
  );
}

export default DroneData;
