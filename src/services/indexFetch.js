import {baseURL, tokenKey} from './api'

const token =localStorage.getItem(tokenKey);

export const getUserIndexRequest = () => {
  const result = fetch(`${baseURL}/users`, {
    method: 'get',
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) {
        throw Error(json.message);
      } else {
        return json.users;
      }
    });

  return result;
};



export const postNewUserRequest = (user) => {
  const result = fetch(`${baseURL}/users`, {
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) {
        throw Error(json.message);
      } else {
        return json.users;
      }
    });
  return result;
};



export const patchUserRequest = (user) => {
  const result = fetch(`${baseURL}/users/${user.id}`, {
    method: 'patch',
    body: JSON.stringify(user),
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) {
        throw Error(json.message);
      } else {
        return json.users;
      }
    });
  return result;
};



export const deleteUserRequest = (user) => {
  const result = fetch(`${baseURL}/users/${user.id}`, {
    method: 'delete',
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) throw Error(json.message);
      return json;
    });
  return result;
};


export const getUserByIdRequest = (id) => {
  const result = fetch(`${baseURL}/users/${id}`, {
    method: 'get',
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.message) {
        throw Error(json.message);
      } else {
        return json;
      }
    });

  return result;
};



