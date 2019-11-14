import createStateBuilderContext, {OnInitType} from './context'
import createStateBuilderReducer, {OnLoadType} from './reducer'

export default (onInit: OnInitType, onLoad: OnLoadType) =>
  createStateBuilderContext(createStateBuilderReducer(onLoad), onInit);
