import * as React from "react";

export type SubStateIdentifierType = string | Array<string>;
export type SubStateItemsType = Array<any>;

export type SubStateType = {
  identifier?: SubStateIdentifierType,
  items: SubStateItemsType
}

export interface StateValueInterface extends SubStateType {
  loading?: boolean
}

export type StateType = null | {
  [index: string]: StateValueInterface
};

export type ActionType = {
  type: string
  payload?: any
}

export type OnInitType = () => StateType;

export default (reducer: React.Reducer<StateType, ActionType>, onInit: OnInitType) => {
  const defaultState = onInit();
  const defaultDispatch: React.Dispatch<ActionType> = () => defaultState;

  const Context = React.createContext({
    state: defaultState,
    dispatch: defaultDispatch,
  });

  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<React.Reducer<StateType, ActionType>>(reducer, defaultState);
    return <Context.Provider value={{state, dispatch}} {...props} />;
  }

  return [Context, Provider] as const;
}
