import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notification({ type, children, ...props }) {
  if (type === "success") {
    toast.success(children, {
      toastId: "success",
    });
  } else if (type === "error") {
    toast.error(children, {
      toastId: "error",
    });
  }

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      {...props}
    />
  );
}

export default Notification;
