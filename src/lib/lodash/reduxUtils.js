import { camelCase } from "./stringUtils";
import { isFunction, isObj, isUndef } from "./checkUtils";
import { map, filter } from "./transformUtils";
import { Map, Set, fromJS } from "seamless-immutable";
import withReducer from "hof/withReducer";
export const iState = state =>
    Map.isMap(state) || Set.isSet(state) ? state : fromJS(state),
  typeToActionCreator = type => ({
    [camelCase(type)]: args => ({ type, payload: args })
  }),
  createActions = types =>
    types.reduce(
      (acc, type) => ({
        ...acc,
        [camelCase(type)]: payload => ({ type, payload })
      }),
      {}
    ),
  createActionsFromActionMap = fnMap => createActions(Object.keys(fnMap)),
  createMapActions = actions => dispatch =>
    Object.entries(actions).reduce(
      (acc, [name, callback]) => ({
        ...acc,
        [name]: payload => dispatch(callback(payload))
      }),
      {}
    ),
  createTypesFromActionMap = fnMap =>
    Object.keys(fnMap).reduce((acc, c) => ({ ...acc, [c]: c }), {}),
  createSpreadReducer = (initialState, fnMap) => (
    state = iState(initialState),
    { type, payload }
  ) => (type in fnMap ? state.mergeDeep(fnMap[type](state, payload)) : state),
  createReducer = (initialState, fnMap) => (
    state = iState(initialState),
    { type, payload }
  ) => (type in fnMap ? fnMap[type](state, payload) : state),
  withCreateReducer = ({ key, initialState, fnMap }) =>
    withReducer(key, createReducer(initialState, fnMap)),
  bindActionCreator = (actionCreator, dispatch) => () =>
    dispatch(actionCreator.apply(undefined, arguments)),
  bindActionCreators = (actionCreators, dispatch) =>
    isFunction(actionCreators)
      ? bindActionCreator(actionCreators, dispatch)
      : !isObj(actionCreators) || isUndef(actionCreators)
      ? throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (actionCreators === null ? "null" : typeof actionCreators) +
            ". " +
            'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        )
      : map(filter(actionCreators, isFunction), (v, i, c) =>
          bindActionCreator(v, dispatch)
        ),
  bindTypes = types => dispatch =>
    bindActionCreators(createActions(types), dispatch),
  bindFnMapTypes = fnMap => bindTypes(Object.keys(fnMap).slice());
