export type OnInitType = () => Promise<StateType>;
export type OnLoadType = (action: OnLoadActionType) => Promise<any>;
export type ContextOptions = {
  onInit: OnInitType
  onLoad?: OnLoadType
}
export type ActionType = {
  type: string
  property?: string
  payload?: any
  bulk?: boolean
}
export const ON_INIT = 'onInit';
export type OnInitActionType = {
  type: 'onInit'
  payload: StateType
} & ActionType;
export const ON_LOAD = 'onLoad';
export type OnLoadActionType = {
  type: 'onLoad'
  property: string
  payload: any
  bulk?: boolean
} & ActionType;
export const BEFORE_ON_LOAD = 'beforeOnLoad';
export type BeforeOnLoadActionType = {
  type: 'beforeOnLoad'
  property: string
} & ActionType;
export type StateType = {
  [index: string]: SubStateWithLoadingType
}
export type SubStateType = {
  identifier?: string | Array<string>
  items: Array<any>
}
export type SubStateWithLoadingType = {
  loading?: boolean
} & SubStateType;
