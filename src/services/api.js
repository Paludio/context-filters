const TIME_OUT = 2000;
const SUCCESS_STATUS = 'OK';

const simulaRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIME_OUT);
};

export const compareUser = (user) => new Promise((resolve) => {
  // lógica para comparar usuário
  console.log(user);
  const findUser = 'alguma coisa';
  simulaRequest(findUser)(resolve);
});

export const createUser = (user) => new Promise((resolve) => {
  console.log(user);
  simulaRequest(SUCCESS_STATUS)(resolve);
});
