import { toast } from 'react-toastify';

export const notifySuccess = (message) => toast.success(message, {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  icon: '💛',
});

export const notifyError = (message) => toast.error(message, {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  icon: '😬',
});
