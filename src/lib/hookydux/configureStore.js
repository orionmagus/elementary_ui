/**
 * Create the store with dynamic reducers
 */

import {
  createStore,
  applyMiddleware,
  bindActionCreators,
  compose
} from "redux";
import { fromJS } from "seamless-immutable";
import {
  connectRouter,
  routerMiddleware
} from "connected-react-router/immutable";
// import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { typeToActionCreator } from "Utils/reduxUtils";
import createReducer from "./reducers";
import { BehaviorSubject } from "rxjs";
// import {composeWithDevTools} from 'remote-redux-devtools';
import { epicOptions, rootEpic, allEpics } from "../epics";
import { ACTION_CALLBACK } from "../actions";
import { from } from "rxjs/observable/from";
import { injectReducer } from "./index";
export var EPIC_END = "@@redux-observable/EPIC_END";
const epicMiddleware = createEpicMiddleware(epicOptions),
  ENVPRODUCTION = process.env.NODE_ENV !== "production",
  ISWIN = typeof window === "object",
  REDDEV = ISWIN && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
  createRootReducers = (history, reducer) =>
    connectRouter(history)(reducer || createReducer()),
  composeEnhancers = () =>
    ENVPRODUCTION && REDDEV ? REDDEV({ shouldHotReload: false }) : compose,
  createMiddleware = (...middlewares) =>
    composeEnhancers(...[applyMiddleware(...middlewares)]);
const type_ac = type => {};
export default function configureStore(
  initialState = {},
  history,
  rootReducer
) {
  let store;
  function create() {
    let rootReducerMain = createRootReducers(history, rootReducer);
    // alert(typeof rootReducerMain )
    let _store = createStore(
      rootReducerMain,
      fromJS(initialState),
      createMiddleware(epicMiddleware, routerMiddleware(history))
    );
    _store.dispatch({ type: "INIT_APP" });
    const epic$ = new BehaviorSubject(combineEpics(...allEpics));
    const hotReloadingEpic$ = (action$, ...rest) =>
      epic$.mergeMap(epic =>
        epic(action$, ...rest).takeUntil(action$.ofType(EPIC_END))
      );

    epicMiddleware.replaceEpic = asyncEpic => {
      _store.dispatch({ type: EPIC_END, payload: {} });
      epic$.next(asyncEpic);
    };
    // Extensions
    _store.actions = bindActionCreators(ACTION_CALLBACK, _store.dispatch);
    _store.asyncReducers = {}; // Reducer registry
    _store.asyncEpics = [...allEpics]; // Epic registry
    _store.injectEpic = epic => {
      _store.asyncEpics.push(epic);
      const newRootEpic = combineEpics(...store.asyncEpics);
      epicMiddleware.replaceEpic(newRootEpic);
    };
    _store.injectReducer = (key, asyncReducer) =>
      injectReducer(_store, key, asyncReducer);
    _store.addActionCreator = type => {
      if (!(type in _store.actions)) {
        _store.actions = {
          ..._store.actions,
          ...bindActionCreators(typeToActionCreator(type), _store.dispatch)
        };
      }
    };
    epicMiddleware.run(hotReloadingEpic$);
    return _store;
  }

  return {
    init: () => {
      if (!store) {
        store = create();
      }
      return store;
    }
  };
}
// const state$ = from(store)
