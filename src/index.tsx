import createStateBuilderContext from './context'
import createStateBuilderReducer from './reducer'

export type OnInitType = () => Promise<StateType>;
export type OnLoadType = (action: ActionType) => Promise<any>;
export type ContextOptions = {
  onInit: OnInitType
  onLoad?: OnLoadType
}

export type ActionType = {
  type: string
  payload?: any
  bulk?: boolean
}

export type StateType = {
  [index: string]: SubStateWithLoadingType
}

export type SubStateType = {
  identifier?: string | Array<string>
  items: Array<any>
}

export interface SubStateWithLoadingType extends SubStateType {
  loading?: boolean
}

export function toggleLoadingState(state: StateType, type: string) {
  if (state != null && state.hasOwnProperty(type)) {
    state[type].loading = !state[type].loading;
  }
}

export default (options: ContextOptions) => createStateBuilderContext(createStateBuilderReducer, options);
