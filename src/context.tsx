import * as React from "react";
import {toggleLoadingState, ContextOptions, ActionType, StateType} from "./index";

type ProviderDataProps = {
  initiated: boolean,
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
      if (!data.initiated && data.payload == null) {
        onInit().then(result => setData({...data, payload: result}));
      }

      if (!data.initiated && data.payload != null) {
        dispatch({type: '*', payload: data.payload});
        setData({...data, initiated: true});
      }
    });

    const middleware = onLoad != null ? React.useCallback(async (action: ActionType) => {
      toggleLoadingState(state, action.type);

      dispatch({
        type: action.type,
        bulk: action.bulk,
        payload: await onLoad(action)
      });
    }, []) : dispatch;

    return <context.Provider value={{state, dispatch: middleware}}>{children}</context.Provider>;
  }

  function Provider({children}: React.PropsWithChildren<{}>) {
    const [data, setData] = React.useState<ProviderDataProps>({
      initiated: false,
      payload: null,
    });

    return <PureProvider {...{data , setData}}>{children}</PureProvider>
  }

  return [context, Provider] as const;
}
