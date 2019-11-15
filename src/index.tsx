import createStateBuilderContext, {ContextOptions, ActionType, StateType, SubStateWithLoadingType, SubStateType} from './context'
import createStateBuilderReducer from './reducer'

export {ActionType, StateType, SubStateWithLoadingType, SubStateType, ContextOptions};

export function toggleLoadingState(state: StateType, type: string) {
  if (state != null && state.hasOwnProperty(type)) {
    state[type].loading = !state[type].loading;
  }
}

export default (options: ContextOptions) => createStateBuilderContext(createStateBuilderReducer, options);
