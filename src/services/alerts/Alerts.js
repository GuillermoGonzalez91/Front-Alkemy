import Swal from 'sweetalert2';

//Information Alert, argument for custom text
export const infoAlert = (text = 'Information text', title = 'Information') => {
  return Swal.fire({
    icon: 'info',
    title: title,
    text: text,
  });
};

//Error Alert
export const errorAlert = (
  text = 'Something went wrong!',
  title = 'Oops...'
) => {
  return Swal.fire(title, text, 'error');
};

//Confirmation Alert, return a Promise with true or false as appropriate
export const confirmAlert = (
  text = "You won't be able to revert this!",
  title = 'Are you sure?',
  confirmButton = 'Yes, delete it!'
) => {
  return new Promise((res, rej) => {
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButton,
    }).then(result => {
      if (result.isConfirmed) {
        res(true);
      } else {
        res(false);
      }
    });
  });
};

//Code for import:
//import {infoAlert, confirmAlert, errorAlert} from './services/alerts/Alerts';
