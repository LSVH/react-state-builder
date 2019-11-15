import {toggleLoadingState, ActionType, StateType, SubStateType} from "./index";

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

export default (state: StateType, {type, payload, bulk = false}: ActionType) => {
  if (type === '*') {
    return Object.assign({}, payload);
  } else {
    if (state != null && state.hasOwnProperty(type) && !isPayloadAlreadyLoaded(payload, state[type])) {
      toggleLoadingState(state, type);
      const currentItems = state[type].items != null ? state[type].items! : [];
      state[type].items = bulk ? [...currentItems, ...payload] : [...currentItems, payload];
      return Object.assign({}, state);
    }
  }
  return state;
}
