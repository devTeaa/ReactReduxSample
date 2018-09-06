export default function reducer(
  state = {
    usersReducer: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_USERS": {
      return { ...state, fetching: true };
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        usersReducer: action.payload
      };
    }
    case "FETCH_USERS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }

    case "DELETE_USERS": {
      return { ...state, fetching: true };
    }
    case "DELETE_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        // usersReducer: state.usersReducer.filter(
        //   item => item.id !== action.payload
        // )
        usersReducer: state.usersReducer.splice(0, 1)
      };
    }
    case "DELETE_USERS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
  }

  return state;
}
