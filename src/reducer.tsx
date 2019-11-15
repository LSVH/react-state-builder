import {ActionType, StateType, SubStateType} from "./context";

function isPayloadAlreadyLoaded(payload: any, sub: SubStateType): boolean {
  switch (sub.identifier != null ? sub.identifier.constructor.name : null) {
    case 'Array':
      return !isPayloadFoundInSubItemsByArrayIdentifier(payload, sub);
    case 'String':
      return !isPayloadFoundInSubItemsByStringIdentifier(payload, sub);
    default:
      return !isPayloadEqualToASubItem(payload, sub);
  }
}

function isPayloadFoundInSubItemsByArrayIdentifier(payload: any, sub: SubStateType) {
  const ids = sub.identifier != null && Array.isArray(sub.identifier) ? sub.identifier : [];
  return sub.items.find(i =>
    ids.filter(id =>
      i.hasOwnProperty(id) && payload.hasOwnProperty(id) && i[id] === payload[id]
    ).length === ids.length
  ) != null;
}

function isPayloadFoundInSubItemsByStringIdentifier(payload: any, sub: SubStateType) {
  const id = sub.identifier != null && !Array.isArray(sub.identifier) ? sub.identifier : '';
  const value = payload != null && payload.hasOwnProperty(id) ? payload[id] : payload;
  return sub.items.find(i => i.hasOwnProperty(id) && i[id] === value) != null;
}

function isPayloadEqualToASubItem(payload: any, sub: SubStateType) {
  return sub.items.find(i => JSON.stringify(i) === JSON.stringify(payload)) != null;
}

export type OnLoadType = (type: string, payload?: any) => any;

export default (onLoad: OnLoadType) => (state: StateType, {type, payload}: ActionType) => {
  if (state != null && state.hasOwnProperty(type) && isPayloadAlreadyLoaded(payload, state[type])) {
    state[type].items = [...state[type].items, onLoad(type, payload)];
    return Object.assign({}, state);
  }
  return state;
}
