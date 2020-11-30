import {baseURL, tokenKey, userKey} from './api'

export const postSignInRequest = (user) => {
  const result = fetch(`${baseURL}/users/tokens`, {
    method: 'post',
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) {
        localStorage.setItem(tokenKey, res.headers.map.authorization);

        return res;
      }
      return res.json();
    })
    .then((json) => {
      if (json.message) throw Error(json.message);
    });
  return result;
};


export const signOutRequest = () => {
  const result = fetch(`${baseURL}/users/tokens`, {
    method: 'delete',
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) throw Error(json.message);
      localStorage.removeItem(tokenKey);
      localStorage.removeItem(userKey);
      return json;
    });
  return result;
};




