import {
  BeforeOnLoadActionType, BEFORE_ON_LOAD,
  OnInitActionType, ON_INIT,
  OnLoadActionType, ON_LOAD,
  StateType
} from "./typings";

export function onInitAction(payload: any): OnInitActionType {
  return {type: ON_INIT, payload};
}

export function onLoadAction(property: string, payload?: any, bulk: boolean = false): OnLoadActionType {
  return {type: ON_LOAD, property, payload, bulk};
}

export function beforeOnLoadAction(property: string): BeforeOnLoadActionType {
  return {type: BEFORE_ON_LOAD, property};
}

export function setLoadingState(state: StateType, property: string, value: boolean = false) {
  if (state != null && state.hasOwnProperty(property)) {
    state[property].loading = value;
  }
}
