import axios from 'axios';
import Notification from '../classes/Notification';

const notification = new Notification('', '');

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
  timeout: 3000
});

export const sendAuthentication = async credentials => {
  return axiosInstance
    .post('/auth', credentials)
    .then(response => response.data)
    .catch(error => {
      notification.setNotificationData('error', error);
      notification.showNotification();
    });
};

export const signOut = async () => {
  return axiosInstance
    .post('/signOut')
    .then(response => response.data)
    .catch(error => {
      notification.setNotificationData('error', error);
      notification.showNotification();
    });
};
