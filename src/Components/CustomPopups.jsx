import React from "react";
// import { toast } from "sonner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SnackbarProvider, useSnackbar } from "notistack";
import Swal from "sweetalert2";

const Notistack = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = () => {
    enqueueSnackbar("Login Successfully!");
  };
  return (
    <button
      className="bg-black text-white font-bold py-2 px-4 w-1/12 rounded hover:bg-black ml-4"
      onClick={handleClick}
    >
      Notistack Toast
    </button>
  );
};

const CustomPopups = () => {
  const sonnerToast = () => {
    toast.success("Login Successfully!");
  };

  const notify = () => {
    toast("Login Successfully!");
  };

  const triggerSwal = () => {
    Swal.fire({
      title: "Custom alert!",
      text: "Do you want to continue",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, continue",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Notistack />
      </SnackbarProvider>

      <button
        className="bg-green-700 text-white font-bold py-2 px-4 w-1/12 rounded hover:bg-green-600 ml-4"
        onClick={sonnerToast}
      >
        Sonner Toast
      </button>

      <button
        className="bg-red-700 text-white font-bold py-2 px-4 w-1/12 rounded hover:bg-red-600 ml-4"
        onClick={triggerSwal}
      >
        Sweet Alert 2!
      </button>

      <button
        className="bg-blue-700 text-white font-bold py-2 px-4 w-1/12 rounded hover:bg-blue-600 ml-4"
        onClick={notify}
      >
        React Toastify!
      </button>
      <ToastContainer />
    </>
  );
};

export default CustomPopups;
