import React from 'react';
import { NotificationDescr } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationDescr>{message}</NotificationDescr>;
};
