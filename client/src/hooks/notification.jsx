import React, { createContext, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext();

export function useNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotification deve ser usade dentro de NotificationProvider"
    );
  }

  return context;
}

function NotificationsProvider({ children }) {
  const [options, setOptions] = useState({});

  const notify = (type, message, notificationOptions = {}) => {
    setOptions(notificationOptions);

    if (type === "success") {
      toast.success(message, {
        toastId: "success",
      });
    } else if (type === "error") {
      toast.error(message, {
        toastId: "error",
      });
    }
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        {...options}
      />
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationsProvider;
