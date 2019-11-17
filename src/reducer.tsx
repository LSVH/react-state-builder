import {defaultCanAddPayload, setLoadingState} from "./functions";
import {ActionType, StateType, BEFORE_ON_LOAD, ON_INIT, ON_LOAD, ReducerOptions, OnLoadActionType} from "./types";

function instanceOfOnLoadActionType(object: any): object is OnLoadActionType {
  return object.type === ON_LOAD;
}

export default (options: ReducerOptions) => (state: StateType, action: ActionType) => {
  const {canAddPayload = defaultCanAddPayload} = options;
  const {type, property, payload, bulk = false} = action;
  switch (type) {
    case ON_INIT:
      state = payload;
      break;

    case BEFORE_ON_LOAD:
      setLoadingState(state, property!, true);
      break;

    case ON_LOAD:
      const subState = property != null && state.hasOwnProperty(property) ? state[property] : null;
      if (subState != null && instanceOfOnLoadActionType(action) && canAddPayload(state, action)) {
        const currentItems = subState.items != null ? subState.items : [];
        subState.items = bulk ? [...currentItems, ...payload] : [...currentItems, payload];
      }
      setLoadingState(state, property!, false);
      break;
  }
  return Object.assign({}, state);
}
