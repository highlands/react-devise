import React from 'react';
import { currentUser, initialState } from './';
import { useReducer } from 'reinspect';

export const UserContext = React.createContext();

export function UserContextProvider(props) {
  const [state, dispatch] = useReducer(currentUser, initialState, state => state, 'REACT-DEVISE');
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}

export function connect(mapStateToProps, mapDispatchToProps) {
  const {state, dispatch} = React.useContext(UserContext)
  return function (Component) {
    return function () {
      const stateToProps = mapStateToProps(state)
      const dispatchToProps = mapDispatchToProps(dispatch)
      const props = {...props, ...stateToProps, ...dispatchToProps}
      return (
        <Component {...props} />
      )
    }
  }
}
