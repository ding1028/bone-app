import * as ACTION_TYPES from '../actions/ActionTypes';

const INITIAL_STATE = {
  isLoading: false,
  success: false,
  error: null,
  newUsers: [],
  users: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_NEARBY_USERS:
      return { ...state, isLoading: true, error: null };
    case ACTION_TYPES.GET_NEARBY_USERS_SUCCESS:
      return { ...state, isLoading: false, success: true, error: null, users: action.data.data.users };
    case ACTION_TYPES.GET_NEARBY_USERS_FAILURE:
      return { ...state, isLoading: false, error: 'An error occured', success: false };

    case ACTION_TYPES.GET_NEW_USERS:
      return { ...state, isLoading: true, error: null };
    case ACTION_TYPES.GET_NEW_USERS_SUCCESS:
      return { ...state, isLoading: false, success: true, error: null, newUsers: action.data.data.users };
    case ACTION_TYPES.GET_NEW_USERS_FAILURE:
        return { ...state, isLoading: false, error: 'An error occured', success: false};

    case ACTION_TYPES.GET_WATCHLIST_USERS:
      return { ...state, isLoading: true, error: null };
    case ACTION_TYPES.GET_WATCHLIST_USERS_SUCCESS:
      return { ...state, isLoading: false, success: true, error: null, users: action.data.data.users };
    case ACTION_TYPES.GET_WATCHLIST_USERS_FAILURE:
        return { ...state, isLoading: false, error: 'An error occured', success: false};

    case ACTION_TYPES.GET_FILTER_USERS:
      return { ...state, isLoading: true, error: null };
    case ACTION_TYPES.GET_FILTER_USERS_SUCCESS:
      return { ...state, isLoading: false, success: true, error: null, users: action.data.data.users  };
    case ACTION_TYPES.GET_FILTER_USERS_FAILURE:
        return { ...state, isLoading: false, error: 'An error occured', success: false};
    default:
      return state;
  }
};