import createStateBuilderContext from './context'
import createStateBuilderReducer from './reducer'
import {ContextOptions, ReducerOptions} from "./types";

export * from './functions';
export * from './types';

export type StateBuilderOptions = ContextOptions & ReducerOptions;

export default (options: StateBuilderOptions) => createStateBuilderContext(createStateBuilderReducer(options), options);
