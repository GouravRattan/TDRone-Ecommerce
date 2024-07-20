import React from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
// import LockResetIcon from "@mui/icons-material/LockReset";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const userId = searchParams.get("id");
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newpassword = data.get("newpassword");
    const confirmpassword = data.get("confirmpassword");
    if (newpassword !== confirmpassword)
      toast.error(`New Password and Confirm Password do not match!`, {
        autoClose: 5000,
        position: "top-right",
      });
    else {
      let requestData = {
        eventID: "1001",
        addInfo: {
          Role: "User",
          UserId: userId,
          Token: token,
          NewPassword: newpassword,
          ConfirmPassword: confirmpassword,
        },
      };
      try {
        const response = await fetch("http://localhost:2005/resetPassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        const data = await response.json();
        console.log(data, "Api response data");
        // toast.loading({ data }, "Api response data");

        if (response.ok && data.rData.Token != null) {
          let token = data.rData.Token;
          console.log("This is JWT token", token);
          sessionStorage.setItem("token", token);
          alert(data.rData.rMessage || "Login Successfully!");
          //   toast.success(data.rData.rMessage, {
          //     autoClose: 5000,
          //     position: "top-right",
          //   });
          setIsLoggedIn(true);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          alert(data.rData.rMessage || "Invalid Credentials!");
          // toast.warning("Invalid Credentials!");
          //   toast.error(data.rData.rMessage, {
          //     autoClose: 5000,
          //     position: "top-right",
          //   });
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while trying to log in.");
        //   toast.error("An error occurred while trying to log in.");
        //   toast.error(data.rData.rMessage, {
        //     autoClose: 5000,
        //     position: "top-center",
        //   });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-blue-500 rounded-full p-2">
            {/* <LockResetIcon className="text-white" /> */}
          </div>
          <h1 className="text-xl font-semibold mt-2">Reset Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="newpassword"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="newpassword"
              name="newpassword"
              autoComplete
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmpassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              autoComplete
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <Link to="/LoginForm">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
