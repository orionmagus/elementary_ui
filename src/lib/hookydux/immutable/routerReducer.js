import Immutable from "seamless-immutable";
import { LOCATION_CHANGE } from "react-router-redux";
import { fromJS, createReducer } from "../../lodash/reduxUtils";

// Initial routing state
export const initialState = Immutable({
    location: null,
    previousLocation: null,
    locationBeforeTransitions: null
  }),
  fnMap = {
    [LOCATION_CHANGE]: (state, payload) =>
      state
        .merge({ location: payload })
        .set("locationBeforeTransitions", payload)
  };
export { LOCATION_CHANGE };
export default createReducer(initialState, fnMap);
