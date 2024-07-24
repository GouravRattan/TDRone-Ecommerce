import React, { useEffect, useState } from "react";

const UserProfileCard = () => {
  const [userData, setUserData] = useState({});
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/100");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const requestData = {
      eventID: "1002",
      addInfo: {
        UserId: "3",
        Email: "akash581999@gmail.com",
      },
    };

    try {
      const response = await fetch("http://localhost:2005/users", {
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
        setUserData(data.rData);
        setProfilePic(data.rData.ProfilePic || "https://via.placeholder.com/100");
      } else {
        setUserData({});
        alert("Failed to get user details!!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to fetch user details.");
      setUserData({});
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
        // Optionally, you can add code here to upload the image to the server
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setProfilePic("https://via.placeholder.com/100");
    // Optionally, you can add code here to remove the image from the server
  };

  return (
    <>
      <div className="w-full h-auto text-2xl">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-full mx-2"
          />
          <h2 className="mt-4 text-xl font-semibold">
            UserName: {userData.UserName || "N/A"}
          </h2>
          <p className="text-gray-600">Full Stack Developer</p>
          <p className="text-gray-600">Bay Area, San Francisco, CA</p>
          <div className="mt-4">
            <input type="file" accept="image/*" className="mb-2" onChange={handleFileChange} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleFileChange}>
              Edit Photo
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded" onClick={handleRemovePhoto}>
              Remove Photo
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg px-16 py-10 mt-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <div className="mt-10 flex flex-col gap-4">
          {Object.keys(userData).length > 0 ? (
            <>
              <div>
                <h1>Email: {userData.Email}</h1>
                <p>Username: {userData.UserName}</p>
                <p>Phone: {userData.Phone}</p>
                <p>Address: {userData.Address}</p>
                <p>Registration Date: {userData.RegistrationDate}</p>
                <p>Role: {userData.Role}</p>
                 <p> image:  <img src={userData.ProfilePic} alt="" />   </p>
              </div>
            </>
          ) : (
            <p>No user data available.</p>
          )}
        </div>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={handleRemovePhoto}>
              Remove Photo
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleFileChange}>
              Edit Photo
            </button>
      </div>
    </>
  );
};

export default UserProfileCard;
