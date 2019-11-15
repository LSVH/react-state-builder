(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},__generator=function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}},__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};function isPayloadAlreadyLoaded(payload,sub){switch(null!=sub.identifier?sub.identifier.constructor.name:null){case"Array":return function isPayloadFoundInSubItemsByArrayIdentifier(payload,sub){var ids=null!=sub.identifier&&Array.isArray(sub.identifier)?sub.identifier:[];return null!=sub.items&&null!=sub.items.find((function(i){return ids.filter((function(id){return i.hasOwnProperty(id)&&payload.hasOwnProperty(id)&&i[id]===payload[id]})).length===ids.length}))}(payload,sub);case"String":return function isPayloadFoundInSubItemsByStringIdentifier(payload,sub){var id=null==sub.identifier||Array.isArray(sub.identifier)?"":sub.identifier,value=null!=payload&&payload.hasOwnProperty(id)?payload[id]:payload;return null!=sub.items&&null!=sub.items.find((function(i){return i.hasOwnProperty(id)&&i[id]===value}))}(payload,sub);default:return function isPayloadEqualToASubItem(payload,sub){return null!=sub.items&&null!=sub.items.find((function(i){return JSON.stringify(i)===JSON.stringify(payload)}))}(payload,sub)}}var src_reducer=function(state,_a){var type=_a.type,payload=_a.payload,_b=_a.bulk,bulk=void 0!==_b&&_b;if("*"===type)return Object.assign({},payload);if(null!=state&&state.hasOwnProperty(type)&&!isPayloadAlreadyLoaded(payload,state[type])){toggleLoadingState(state,type);var currentItems=null!=state[type].items?state[type].items:[];return state[type].items=__spreadArrays(currentItems,bulk?payload:[payload]),Object.assign({},state)}return state};function toggleLoadingState(state,type){null!=state&&state.hasOwnProperty(type)&&(state[type].loading=!state[type].loading)}__webpack_require__.d(__webpack_exports__,"b",(function(){return toggleLoadingState}));__webpack_exports__.a=function(options){return function(reducer,_a){var onInit=_a.onInit,onLoad=_a.onLoad,defaultState={},context=react.createContext({state:defaultState,dispatch:function(){return defaultState}});function PureProvider(_a){var _this=this,children=_a.children,data=_a.data,setData=_a.setData,_b=react.useReducer(reducer,defaultState),state=_b[0],dispatch=_b[1];react.useEffect((function(){data.initiated||null!=data.payload||onInit().then((function(result){return setData(__assign(__assign({},data),{payload:result}))})),data.initiated||null==data.payload||(dispatch({type:"*",payload:data.payload}),setData(__assign(__assign({},data),{initiated:!0})))}));var middleware=null!=onLoad?react.useCallback((function(action){return __awaiter(_this,void 0,void 0,(function(){var _a,_b;return __generator(this,(function(_c){switch(_c.label){case 0:return toggleLoadingState(state,action.type),_a=dispatch,_b={type:action.type,bulk:action.bulk},[4,onLoad(action)];case 1:return _a.apply(void 0,[(_b.payload=_c.sent(),_b)]),[2]}}))}))}),[]):dispatch;return react.createElement(context.Provider,{value:{state:state,dispatch:middleware}},children)}return[context,function Provider(_a){var children=_a.children,_b=react.useState({initiated:!1,payload:null}),data=_b[0],setData=_b[1];return react.createElement(PureProvider,__assign({},{data:data,setData:setData}),children)}]}(src_reducer,options)};try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}},357:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MDXContent}));__webpack_require__(3),__webpack_require__(9),__webpack_require__(6),__webpack_require__(4),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(91);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},MDXLayout="wrapper",_ref2=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h1",null,"API"),_ref3=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"This documentation contains information about the exports of the 'react-state-builder' module."),_ref4=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h2",null,"Functions"),_ref5=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Below a table what serves as the legend for the information in the tables in this chapter."),_ref6=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"td"},"default"),_ref7=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"The following table contains a list of all available function exports of the 'react-state-builder' module."),_ref8=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"td"},"default"),_ref9=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"td"},"context"),_ref10=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"td"},"Provider"),_ref11=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref12=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"(options: "),_ref13=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"a"},"ContextOptions"),_ref14=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},") => [React.Context, JSX.Element]"),_ref15=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"td"},"loading"),_ref16=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref17=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"(state: "),_ref18=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"a"},"StateType"),_ref19=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},", type: string) => void"),_ref20=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h2",null,"Types"),_ref21=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Below a table what serves as the legend for the information in the tables in this chapter."),_ref22=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"td"},"*"),_ref23=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"The following chapters will describe the types/interfaces created by the module."),_ref24=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",null,"ContextOptions ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{id:"type-ContextOptions"})),_ref25=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"td"},"*"),_ref26=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref27=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"() => Promise<"),_ref28=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"a"},"StateType"),_ref29=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},">"),_ref30=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref31=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"(action: "),_ref32=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"a"},"ActionType"),_ref33=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},") => Promise<any>"),_ref34=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",null,"ActionType ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{id:"type-ActionType"})),_ref35=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"td"},"*"),_ref36=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"td"},"*"),_ref37=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"td"},"payload"),_ref38=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref39=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"string")),_ref40=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref41=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"any")),_ref42=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"td"},"false"),_ref43=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"td"},"true"),_ref44=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"td"},"items"),_ref45=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref46=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"boolean")),_ref47=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",null,"StateType ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{id:"type-StateType"})),_ref48=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref49=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"a"},"SubStateWithLoadingType"),_ref50=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",null,"SubStateWithLoadingType ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{id:"type-SubStateWithLoadingType"})),_ref51=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"a"},"SubStateType"),_ref52=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"td"},"true"),_ref53=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref54=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"boolean")),_ref55=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",null,"SubStateType ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{id:"type-SubStateType"})),_ref56=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"td"},"*"),_ref57=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref58=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"Array<any>")),_ref59=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("br",null),_ref60=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"string")," or ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"em"},"Array<string>")),_ref61=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h2",null,"Examples"),_ref62=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"In order to fully understand the code examples in this chapter, please make sure you read the code in the chapter Basic."),_ref63=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",null,"Basic"),_ref64=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"The following example shows a basic practice of how you can use this module."),_ref65=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Story,{id:"default--basic",mdxType:"Story"})),_ref66=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h3",null,"Using onLoad"),_ref67=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"To load async data based on the action send with the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"dispatch")," call you will have to use the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"onLoad")," option as shown\nin the example shown below."),_ref68=Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Story,{id:"default--using-onload",mdxType:"Story"}));function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(MDXLayout,_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),_ref2,_ref3,_ref4,_ref5,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Indicator"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Meaning"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref6),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"the function what is exported as the default of the module.")))),_ref7,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Function"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Description"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref8),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"Setup a ",_ref9," and ",_ref10," to start building a state with. ",_ref11," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},_ref12,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",_extends({parentName:"em"},{href:"#type-ContextOptions"}),_ref13),_ref14))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"toggleLoadingState"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"Toggle the value of the ",_ref15," property of a certain sub state. ",_ref16," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},_ref17,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",_extends({parentName:"em"},{href:"#type-StateType"}),_ref18),_ref19))))),_ref20,_ref21,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Indicator"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Meaning"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref22),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"the property is required.")))),_ref23,_ref24,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Property"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Description"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref25," onInit"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"Determine the structure of the state and store the initial data into it. ",_ref26," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},_ref27,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",_extends({parentName:"em"},{href:"#type-StateType"}),_ref28),_ref29))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"onLoad"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"Handle dispatch action data before adding it to the state. ",_ref30," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},_ref31,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",_extends({parentName:"em"},{href:"#type-ActionType"}),_ref32),_ref33))))),_ref34,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Property"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Description"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref35," type"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"The property name of the sub state, however with ",_ref36," the ",_ref37," will override the complete state.  ",_ref38," ",_ref39)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"payload"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"The data to load into the state or the arguments for the data to help determine what to load into the state. ",_ref40," ",_ref41)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"bulk"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"By default this will be ",_ref42,", when ",_ref43," the payload will be spread into the ",_ref44," collection.  ",_ref45," ",_ref46)))),_ref47,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Property"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Description"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"[index: string]"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"An object with a string index. ",_ref48," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("em",{parentName:"td"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",_extends({parentName:"em"},{href:"#type-SubStateWithLoadingType"}),_ref49)))))),_ref50,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"This type extends ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",_extends({parentName:"p"},{href:"#type-SubStateType"}),_ref51),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Property"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Description"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"loading"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"Turns ",_ref52," when there are items being loaded for the sub state. ",_ref53," ",_ref54)))),_ref55,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Property"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("th",_extends({parentName:"tr"},{align:null}),"Description"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),_ref56," items"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"A collection of the data. ",_ref57," ",_ref58)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"identifier"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("td",_extends({parentName:"tr"},{align:null}),"The property or properties to check of a payload whenever it's about to get added to the state. When no identifier is specified the whole payload will be stringified and compared to each single item. ",_ref59," ",_ref60)))),_ref61,_ref62,_ref63,_ref64,_ref65,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("code",_extends({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react'\nimport createStateBuilder from 'react-state-builder';\n\nfunction ChildWhatAccessesState() {\n  const {state} = React.useContext(context);\n  const count = state != null && state.hasOwnProperty('posts') && state['posts'].items != null\n    ? state['posts'].items.length : 0;\n  return <p>Number of posts in state: {count}</p>\n}\n\nfunction ChildWhatAddsToState() {\n  const {dispatch} = React.useContext(context);\n  const onClickSingle = () => dispatch({type: 'posts', payload: ['foo']});\n  const onClickMultiple = () => dispatch({type: 'posts', payload: ['foo', 'bar'], bulk: true});\n  return (\n    <>\n      <button onClick={onClickSingle}>Add a single post</button>\n      <button onClick={onClickMultiple}>Add multiple posts</button>\n    </>\n  );\n\n}\n\nasync function onInit() {\n  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')\n    .then(r => r.json());\n  return {\n    posts: {\n      identifier: 'id',\n      items: posts\n    },\n  }\n}\n\nconst [context, Provider] = createStateBuilder({onInit});\n\nexport default () => (\n  <Provider>\n    <ChildWhatAccessesState/>\n    <ChildWhatAddsToState/>\n  </Provider>\n);\n")),_ref66,_ref67,_ref68,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("code",_extends({parentName:"pre"},{className:"language-jsx"}),"function ChildWhatAddsToState() {\n  const {dispatch} = React.useContext(context);\n  const onClickSingle = () => dispatch({type: 'posts', payload: 11});\n  const onClickMultiple = () => dispatch({type: 'posts', bulk: true});\n  return (\n    <>\n      <button onClick={onClickSingle}>Add a single post</button>\n      <button onClick={onClickMultiple}>Add multiple posts</button>\n    </>\n  );\n}\n\nasync function onLoad({type, payload, bulk}: ActionType) {\n  if (type === 'posts') {\n    const id = payload != null && payload.hasOwnProperty('id') ? payload['id'] : payload;\n    if (bulk) {\n      return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=2`)\n        .then(r => r.json());\n    } else {\n      return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)\n        .then(r => r.json());\n    }\n  }\n}\n\nconst [context, Provider] = createStateBuilder({onInit, onLoad});\n")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0,MDXContent.__docgenInfo={description:"",methods:[],displayName:"MDXContent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["books/index.mdx"]={name:"MDXContent",docgenInfo:MDXContent.__docgenInfo,path:"books/index.mdx"})},358:function(module,exports,__webpack_require__){__webpack_require__(359),__webpack_require__(472),__webpack_require__(473),module.exports=__webpack_require__(778)},380:function(module,exports){},778:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(90),_books_index_mdx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(357);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({docs:{page:_books_index_mdx__WEBPACK_IMPORTED_MODULE_1__.a}});var req=__webpack_require__(779);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(req,module)}.call(this,__webpack_require__(349)(module))},779:function(module,exports,__webpack_require__){var map={"./index.story.tsx":780};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=779},780:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(90),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(221),__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},__generator=function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}};function onInit(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(_a){switch(_a.label){case 0:return[4,fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((function(r){return r.json()}))];case 1:return[2,{posts:{identifier:"id",items:_a.sent()}}]}}))}))}function onLoad(_a){var type=_a.type,payload=_a.payload,bulk=_a.bulk;return __awaiter(this,void 0,void 0,(function(){var id;return __generator(this,(function(_b){switch(_b.label){case 0:return"posts"!==type?[3,4]:(id=null!=payload&&payload.hasOwnProperty("id")?payload.id:payload,bulk?[4,fetch("https://jsonplaceholder.typicode.com/posts?userId=2").then((function(r){return r.json()}))]:[3,2]);case 1:return[2,_b.sent()];case 2:return[4,fetch("https://jsonplaceholder.typicode.com/posts/"+id).then((function(r){return r.json()}))];case 3:return[2,_b.sent()];case 4:return[2]}}))}))}function DisplayStateCount(context){return function(){var state=react__WEBPACK_IMPORTED_MODULE_0__.useContext(context).state,count=null!=state&&state.hasOwnProperty("posts")&&null!=state.posts.items?state.posts.items.length:0;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Number of posts in state: ",count)}}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("default",module).add("basic",(function(){var _a=Object(_src__WEBPACK_IMPORTED_MODULE_2__.a)({onInit:onInit}),context=_a[0],Provider=_a[1],ChildWhatAccessesState=DisplayStateCount(context);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Provider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChildWhatAccessesState,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement((function ChildWhatAddsToState(){var dispatch=react__WEBPACK_IMPORTED_MODULE_0__.useContext(context).dispatch;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return dispatch({type:"posts",payload:["foo"]})}},"Add a single post"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return dispatch({type:"posts",payload:["foo","bar"],bulk:!0})}},"Add multiple posts"))}),null))})).add("using onLoad",(function(){var _a=Object(_src__WEBPACK_IMPORTED_MODULE_2__.a)({onInit:onInit,onLoad:onLoad}),context=_a[0],Provider=_a[1],ChildWhatAccessesState=DisplayStateCount(context);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Provider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChildWhatAccessesState,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement((function ChildWhatAddsToState(){var dispatch=react__WEBPACK_IMPORTED_MODULE_0__.useContext(context).dispatch;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return dispatch({type:"posts",payload:11})}},"Add a single post"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return dispatch({type:"posts",bulk:!0})}},"Add multiple posts"))}),null))}))}.call(this,__webpack_require__(349)(module))}},[[358,1,2]]]);
//# sourceMappingURL=main.28ef264389c3d0ec108d.bundle.js.map