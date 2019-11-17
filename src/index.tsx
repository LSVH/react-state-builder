import createStateBuilderContext from './context'
import createStateBuilderReducer from './reducer'
import {ContextOptions} from "./typings";

export * from './helpers';
export * from './typings';

export default (options: ContextOptions) => createStateBuilderContext(createStateBuilderReducer, options);
