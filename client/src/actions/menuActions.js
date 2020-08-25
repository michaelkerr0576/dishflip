import { GET_MENU } from "./actionTypes";

export const getMenu = () => (dispatch) => {
  fetch(
    "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json"
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_MENU,
        payload: res,
      });
    })
    .catch((error) => {
      console.log("ERROR fetching data");
    });
};
