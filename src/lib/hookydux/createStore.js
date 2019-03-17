import React, {
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useReducer,
  useLayoutEffect
} from "react";
import ld from "./lodashy";
import Immutable from "seamless-immutable";
export const ActionTypes = {
  INIT:
    "@@redux/INIT" +
    Math.random()
      .toString(36)
      .substring(7)
      .split("")
      .join("."),
  REPLACE:
    "@@redux/REPLACE" +
    Math.random()
      .toString(36)
      .substring(7)
      .split("")
      .join(".")
};

export const condReduce = useReducer,
  createStore = (reducer, i, e) => {
    let [initialState, enhancer] =
      ld.isFunction(i) && ld.isUndef(e) ? [e, i] : [i, e];
    if (ld.isFunction(enhancer)) {
      return enhancer(createStore)(reducer, initialState);
    } else {
      var currentReducer = reducer,
        currentState = initialState,
        subs = [],
        [state, dispatcher] = condReduce(reducer, initialState);
      const dispatch = action => {
          const res = dispatcher(action);
          console.log(res);
          return action;
        },
        useReplaceReducer = newReducer => {
          // innerCreate
          let [obstate, newdispatch] = useReducer(newReducer, currentState);
          state = obstate;
          dispatcher = newdispatch;
          dispatch({ type: ActionTypes.REPLACE });
          return;
        };
      // subscribe = useEffect()
      return {
        state,
        dispatch,
        bindAction: type => payload => dispatch({ type: payload }),
        replaceReducer: useReplaceReducer,
        getState: () => state || currentState
      };
    }
  },
  combineReducers = (reducers, getDefaultState = Immutable.Map) => (
    inputState = getDefaultState(),
    action = {}
  ) =>
    inputState.withMutations(temporaryState =>
      Object.keys(reducers).forEach(reducerName =>
        temporaryState.set(
          reducerName,
          reducers[reducerName](temporaryState.get(reducerName), action)
        )
      )
    );
export default createStore;
