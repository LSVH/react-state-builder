import * as React from "react";
import {beforeOnLoadAction, onInitAction, onLoadAction} from "./functions";
import {ActionType, ContextOptions, OnLoadActionType, StateType} from "./types";

type ProviderDataProps = {
  initiated: boolean,
  loaded: boolean,
  payload?: any,
}

type PureProviderProps = {
  data: ProviderDataProps,
  setData: React.Dispatch<ProviderDataProps>
};

export default (reducer: React.Reducer<StateType, ActionType>, {onInit, onLoad}: ContextOptions) => {
  const defaultState: StateType = {};
  const defaultDispatch: React.Dispatch<ActionType> = () => defaultState;

  const context = React.createContext({
    state: defaultState,
    dispatch: defaultDispatch,
  });

  function PureProvider({children, data, setData}: React.PropsWithChildren<PureProviderProps>) {
    const [state, dispatch] = React.useReducer<React.Reducer<StateType, ActionType>>(reducer, defaultState);

    React.useEffect(() => {
      if (!data.initiated && !data.loaded) {
        onInit().then(result => setData({...data, loaded: true, payload: result}));
      }

      if (!data.initiated && data.loaded) {
        dispatch(onInitAction(data.payload));
        setData({...data, initiated: true});
      }
    });

    const middleware = onLoad != null ? React.useCallback(async (action: OnLoadActionType) => {
      dispatch(beforeOnLoadAction(action.property));
      dispatch(onLoadAction(action.property, await onLoad(action), action.bulk));
    }, []) : dispatch;

    return <context.Provider value={{state, dispatch: middleware}}>{children}</context.Provider>;
  }

  function Provider({children}: React.PropsWithChildren<{}>) {
    const [data, setData] = React.useState<ProviderDataProps>({
      initiated: false,
      loaded: false,
      payload: null,
    });

    return <PureProvider {...{data , setData}}>{children}</PureProvider>
  }

  return [context, Provider] as const;
}
