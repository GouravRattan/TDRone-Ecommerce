import React, { useEffect, useState, useRef } from "react";

const UserProfileCard = () => {
  const [userData, setUserData] = useState({});
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/100"
  );

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

  const fetchUserCalled = useRef(false);

  useEffect(() => {
    if (!fetchUserCalled.current) {
      fetchUser();
      fetchUserCalled.current = true;
    }
  }, []);

  var userId = sessionStorage.getItem("UserId");

  console.log(userId);

  const fetchUser = async () => {
    const requestData = {
      eventID: "1002",
      addInfo: {
        UserId: "",
        Email: userId,
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
        setProfilePic(
          data.rData.ProfilePic || "https://via.placeholder.com/100"
        );
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

  sessionStorage.getItem("UserId");
  var UserId = sessionStorage.getItem("UserId");

  const handleUpdatePic = async () => {
    const requestData = {
      eventID: "1004",
      addInfo: {
        Email: UserId,
        ProfilePic: profilePic,
      },
    };
    console.log(requestData, "requestData");
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
      console.log(data, "API response data eddit pic");

      if (data.rData && data.rData.rCode === 0) {
        setUserData(data.rData);
        setProfilePic(
          data.rData.ProfilePic || "https://via.placeholder.com/100"
        );
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

  var uuUserId = sessionStorage.getItem("UserId");
  console.log("uuid for 1005", uuUserId);

  const handleDeletePic = async () => {
    const requestData = {
      eventID: "1005",
      addInfo: {
        Email: uuUserId,
        ProfilePic: profilePic,
      },
    };
    console.log(requestData, "requestData");
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
      console.log(data, "API response data eddit pic");

      if (data.rData && data.rData.rCode === 0) {
        setUserData(data.rData);
        setProfilePic(
          data.rData.ProfilePic || "https://via.placeholder.com/100"
        );
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

  return (
    <div className="w-full h-auto flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full mx-auto"
        />
        {Object.keys(userData).length > 0 ? (
          <>
            <div>
              <p>
                <strong>Username:</strong> {userData.UserName}
              </p>
              <p>
                <strong>Email:</strong> {userData.Email}
              </p>
            </div>
          </>
        ) : (
          <p>No user data available.</p>
        )}
        <div className=" flex justify-center items-center text-center">
          <input
            type="file"
            accept="image/*"
            className="m-5"
            onChange={handleFileChange}
          />
        </div>

        <div className=" flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleUpdatePic}
          >
            Save Photo
          </button>

          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={handleDeletePic}
          >
            Remove Photo
          </button>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg px-8 py-6 mt-6 max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <div className="flex flex-col gap-4">
          {Object.keys(userData).length > 0 ? (
            <>
              <div>
                <p>
                  <strong>Email:</strong> {userData.Email}
                </p>
                <p>
                  <strong>Username:</strong> {userData.UserName}
                </p>
                <p>
                  <strong>Phone:</strong> {userData.Phone}
                </p>
                <p>
                  <strong>Address:</strong> {userData.Address}
                </p>
                {/* <p>
                  <strong>Registration Date:</strong>{" "}
                  {userData.RegistrationDate}
                </p> */}
                {/* <p>
                  <strong>Role:</strong> {userData.Role}
                </p> */}
                {/* {userData.ProfilePic && (
                  <p>
                    <strong>Profile Image:</strong>
                    <img
                      src={userData.ProfilePic}
                      alt="Profile"
                      className="w-16 h-16 mt-2 object-cover"
                    />
                  </p>
                )} */}
              </div>
            </>
          ) : (
            <p>No user data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
