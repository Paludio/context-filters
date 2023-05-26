import users from '../data/users';
import phones from '../data/phones';

const TIME_OUT = 2000;

const simulaRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIME_OUT);
};

export const compareUser = (userState) => new Promise((resolve) => {
  const find = users.find((user) => user.password === userState.password);
  if (find) {
    const { password: _, ...data } = find;
    simulaRequest(data)(resolve);
    localStorage.setItem('user', JSON.stringify(data));
  } else {
    simulaRequest('FAIL')(resolve);
  }
});

export const getPhones = () => new Promise((resolve) => {
  simulaRequest(phones)(resolve);
});
