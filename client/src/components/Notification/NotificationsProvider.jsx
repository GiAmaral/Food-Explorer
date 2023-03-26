import React, { createContext, useState, useContext } from "react";
import Notification from "./Notification";

const NotificationContext = createContext();

export function useNotificationsContext() {
  return useContext(NotificationContext);
}

function NotificationsProvider({ children }) {
  const [type, setType] = useState();
  const [message, setMessage] = useState();
  const [options, setOptions] = useState({});

  const notify = (
    notificationType,
    notificationMessage,
    notificationOptions = {}
  ) => {
    setType(notificationType);
    setMessage(notificationMessage);
    setOptions(notificationOptions);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {message ? (
        <Notification type={type} {...options}>
          {message}
        </Notification>
      ) : null}
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationsProvider;
