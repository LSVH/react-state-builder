import {
  BeforeOnLoadActionType, BEFORE_ON_LOAD,
  OnInitActionType, ON_INIT,
  OnLoadActionType, ON_LOAD,
  StateType
} from "./types";

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

export function defaultCanAddPayload(state: StateType, {property, payload, bulk}: OnLoadActionType): boolean {
  const subState = state != null && state.hasOwnProperty(property) ? state[property] : null;
  if (subState != null && payload != null) {
    return subState.items.find(subStateItem => {
      if (bulk) {
        return payload.find((payloadItem: any) =>
          isEqualToIdentifier(payloadItem, subStateItem, subState.identifier)) != null;
      } else {
        return isEqualToIdentifier(payload, subStateItem, subState.identifier);
      }
    }) == null;
  }
  return false;
}

export function isEqualToStringIdentifier(a: any, b: any, identifier?: string | Array<string>): boolean {
  const stringIdentifier = identifier != null && !Array.isArray(identifier) && identifier;
  const propA = a != null && stringIdentifier && a.hasOwnProperty(stringIdentifier) && a[stringIdentifier];
  const propB = b != null && stringIdentifier && b.hasOwnProperty(stringIdentifier) && b[stringIdentifier];
  return propA === propB;
}

export function isEqualToNullIdentifier(a: any, b: any, identifier?: string | Array<string>): boolean {
  return identifier == null && a != null && b != null && JSON.stringify(a) === JSON.stringify(b);
}

export function isInArrayIdentifier(a: any, b: any, identifier?: string | Array<string>): boolean {
  const arrayIdentifier = identifier != null && Array.isArray(identifier) && identifier;
  return arrayIdentifier && arrayIdentifier.find(id => isEqualToIdentifier(a, b, id)) != null;
}

export function isEqualToIdentifier(a: any, b: any, identifier?: string | Array<string>): boolean {
  return isEqualToStringIdentifier(a, b, identifier)
    || isEqualToNullIdentifier(a, b, identifier)
    || isInArrayIdentifier(a, b, identifier);
}
