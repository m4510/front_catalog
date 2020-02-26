import { toast } from 'react-toastify';

class Notification {
  constructor(type = '', message = '') {
    this.type = type;
    this.message = message;
  }

  setNotificationData(type, message) {
    this.type = type;
    this.message = message;
  }

  showNotification() {
    switch (this.type) {
      case 'success':
        toast.success(this.message, {
          position: toast.POSITION.TOP_RIGHT
        });
        break;

      case 'error':
        toast.error(this.message, {
          position: toast.POSITION.TOP_RIGHT
        });
        break;

      case 'warning':
        toast.warn(this.message, {
          position: toast.POSITION.TOP_RIGHT
        });

        break;

      default:
        break;
    }
  }
}

export default Notification;
