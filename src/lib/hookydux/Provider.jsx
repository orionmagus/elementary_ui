import React, {
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useReducer,
  useLayoutEffect
} from "react";
import ld from "./lodashy";
import createStore from "./createStore";
export const Store = React.createContext(),
  ProvideCreate = ({ children, reducer, initialState, ...props }) => {
    const store = createStore(reducer, initialState);
    return <Store.Provider value={store}>{children}</Store.Provider>;
  };
ProvideCreate.defaultProps = {
  reducer: (state, action) => state,
  initialState: undefined
};
export const Provider = ({ children, store, ...props }) => (
  <Store.Provider value={store}>{children}</Store.Provider>
);
Provider.defaultProps = {
  store: undefined
};
export const connect = (
  mapStateToProps = () => {},
  mapDispatchToProps = () => {}
) => WrappedComponent => props => {
  const { state, dispatch } = useContext(Store),
    nprops = {
      ...mapStateToProps(state, props),
      ...mapStateToProps(state, props),
      dispatch
    };
  return <WrappedComponent {...nprops} />;
};
export default Provider;
