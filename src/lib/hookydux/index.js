import applyMiddleware from "./middleware";
import Provider, { connect, Store } from "./Provider";
import createStore, { ActionTypes } from "./createStore";
import {
  combineReducers,
  routerReducer,
  stateTransformer,
  stateSelector,
  LOCATION_CHANGE
} from "./immutable";
import ducks, {
  bindActionCreators,
  createReducer,
  bindFnMapTypes
} from "../lib/lodash/reduxUtils";
import history from "./history";
import { compose } from "./utils";
import { useSort, useFetch } from "./enhancements";
const { REPLACE, INIT } = ActionTypes;

export default {
  TYPES: {
    REDUX_INIT: INIT,
    REDUX_REPLACE: REPLACE,
    LOCATION_CHANGE
  },
  bindActionCreators,
  history,
  createStore,
  combineReducers,
  routerReducer,
  stateTransformer,
  stateSelector,
  createReducer,
  bindFnMapTypes,
  connect,
  Store,
  Provider,
  applyMiddleware,
  ducks,
  compose,
  useSort,
  useFetch
};
