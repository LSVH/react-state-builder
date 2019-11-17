import {setLoadingState} from "./helpers";
import {ActionType, StateType, SubStateType, BEFORE_ON_LOAD, ON_INIT, ON_LOAD} from "./typings";

function isPayloadAlreadyLoaded(payload: any, sub: SubStateType): boolean {
  switch (sub.identifier != null ? sub.identifier.constructor.name : null) {
    case 'Array':
      return isPayloadFoundInSubItemsByArrayIdentifier(payload, sub);
    case 'String':
      return isPayloadFoundInSubItemsByStringIdentifier(payload, sub);
    default:
      return isPayloadEqualToASubItem(payload, sub);
  }
}

function isPayloadFoundInSubItemsByArrayIdentifier(payload: any, sub: SubStateType) {
  const ids = sub.identifier != null && Array.isArray(sub.identifier) ? sub.identifier : [];
  return sub.items != null && sub.items.find(i =>
    ids.filter(id =>
      i.hasOwnProperty(id) && payload.hasOwnProperty(id) && i[id] === payload[id]
    ).length === ids.length
  ) != null;
}

function isPayloadFoundInSubItemsByStringIdentifier(payload: any, sub: SubStateType) {
  const id = sub.identifier != null && !Array.isArray(sub.identifier) ? sub.identifier : '';
  const value = payload != null && payload.hasOwnProperty(id) ? payload[id] : payload;
  return sub.items != null && sub.items.find(i => i.hasOwnProperty(id) && i[id] === value) != null;
}

function isPayloadEqualToASubItem(payload: any, sub: SubStateType) {
  return sub.items != null && sub.items.find(i => JSON.stringify(i) === JSON.stringify(payload)) != null;
}

export default (state: StateType, {type, property, payload, bulk = false}: ActionType) => {
  switch (type) {
    case ON_INIT:
      state = payload;
      break;

    case ON_LOAD:
      const subState = property != null && state.hasOwnProperty(property) ? state[property] : null;
      if (subState != null && !isPayloadAlreadyLoaded(payload, subState)) {
        const currentItems = subState.items != null ? subState.items : [];
        subState.items = bulk ? [...currentItems, ...payload] : [...currentItems, payload];
      }
      setLoadingState(state, property!, false);
      break;

    case BEFORE_ON_LOAD:
      setLoadingState(state, property!, true);
      break;
  }
  return Object.assign({}, state);
}
