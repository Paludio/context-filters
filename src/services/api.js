import users from '../data/users';

const TIME_OUT = 2000;
const SUCCESS_STATUS = 'OK';

const simulaRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIME_OUT);
};

export const compareUser = (userState) => new Promise((resolve) => {
  const find = users.find((user) => user.password === userState.password);
  console.log(find);
  const findUser = find || 'FAIL';
  simulaRequest(findUser)(resolve);
});

export const createUser = (user) => new Promise((resolve) => {
  console.log(user);
  simulaRequest(SUCCESS_STATUS)(resolve);
});
