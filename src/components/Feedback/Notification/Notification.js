import React from 'react';
import './Notification.css';

const Notification = ({ message }) => {
  return (
    <li className="notification">
      <p className="notification__text">{message}</p>
    </li>
  );
};

export default Notification;
