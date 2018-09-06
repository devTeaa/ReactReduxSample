import axios from "axios";

export function fetchUsers() {
  return function(dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        dispatch({ type: "FETCH_USERS_FULFILLED", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_USERS_REJECTED", payload: err });
      });
  };
}

export function deleteUsers(id) {
  return function(dispatch) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        console.log(res.data.id);
        dispatch({ type: "DELETE_USERS_FULFILLED", payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "DELETE_USERS_REJECTED", payload: err });
      });
  };
}
