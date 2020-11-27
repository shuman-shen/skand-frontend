import api from './api';

const tokenKey = 'skandToken';

const signIn = (auth) => api.post('/users/token', auth);
// try {
//   const res = await fetch('/api/v2/users/tokens', {
//     method: 'post',
//     body: JSON.stringify(auth),
//   });
//   if (res.status === 'ok') {
//     localStorage.setItem(tokenKey, res.headers.map.authorization);
//     return;
//   }
//   return {
//     type: 'warning',
//     message: 'Email does not match the password',
//   };
// } catch (error) {
//   return {
//     type: 'error',
//     message: error.message,
//   };
// }

export default {
  signIn,
};
