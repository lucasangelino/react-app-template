import { types } from "../../types/types";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case types.LOGOUT:
      console.log("terminate session");
      return {
        uid: "",
        user: {},
      };

    default:
      return state;
  }
};
