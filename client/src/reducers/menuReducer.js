import { GET_MENU } from "../actions/actionTypes";

const initialState = {
  menu: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENU:
      return {
        ...state,
        menu: action.payload.MenuSections,
        loading: false,
      };
    default:
      return state;
  }
}
