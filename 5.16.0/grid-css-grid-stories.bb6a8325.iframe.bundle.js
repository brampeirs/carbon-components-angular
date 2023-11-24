"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[384],{"./src/grid/css-grid.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,GridStart:()=>GridStart,Responsive:()=>Responsive,Subgrid:()=>Subgrid,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/grid/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Grid/CSS",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_1__.zE]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div class="css-grid-story">${story}</div>`))],component:___WEBPACK_IMPORTED_MODULE_1__.lj,subcomponents:{RowDirective:___WEBPACK_IMPORTED_MODULE_1__.vZ,ColumnDirective:___WEBPACK_IMPORTED_MODULE_1__.iK},argTypes:{useCssGrid:{control:!1}}},Basic=(args=>({props:args,template:'\n\t\t<div\n\t\t\tcdsGrid\n\t\t\t[useCssGrid]="true"\n\t\t\t[condensed]="condensed"\n\t\t\t[narrow]="narrow"\n\t\t\t[fullWidth]="fullWidth">\n\t\t\t<div cdsCol [columnNumbers]="{sm: 4}"></div>\n\t\t\t<div cdsCol [columnNumbers]="{sm: 4}"></div>\n\t\t\t<div cdsCol [columnNumbers]="{sm: 4}"></div>\n\t\t\t<div cdsCol [columnNumbers]="{sm: 4}"></div>\n\t\t</div>\n\t'})).bind({}),GridStart=(args=>({props:args,template:'\n\t\t<div\n\t\t\tcdsGrid\n\t\t\t[useCssGrid]="true"\n\t\t\t[condensed]="condensed"\n\t\t\t[narrow]="narrow"\n\t\t\t[fullWidth]="fullWidth">\n\t\t\t<div cdsCol [columnNumbers]="{\n\t\t\t\tsm: {span: 1, start: 4},\n\t\t\t\tmd: {span: 2, start: 7},\n\t\t\t\tlg: {span: 4, start: 13}\n\t\t\t}">span, start</div>\n\t\t\t<div cdsCol [columnNumbers]="{\n\t\t\t\tsm: {span: 2, end: 5},\n\t\t\t\tmd: {span: 4, end: 9},\n\t\t\t\tlg: {span: 8, end: 17}\n\t\t\t}">span, end</div>\n\t\t\t<div cdsCol [columnNumbers]="{\n\t\t\t\tsm: {start: 1, end: 4},\n\t\t\t\tmd: {start: 3, end: 7},\n\t\t\t\tlg: {start: 5, end: 17}\n\t\t\t}">start, end</div>\n\t\t</div>\n\t'})).bind({}),Responsive=(args=>({props:args,template:'\n\t\t<div\n\t\t\tcdsGrid\n\t\t\t[useCssGrid]="true"\n\t\t\t[condensed]="condensed"\n\t\t\t[narrow]="narrow"\n\t\t\t[fullWidth]="fullWidth">\n\t\t\t<div cdsCol [columnNumbers]="{sm: 2, md: 4, lg: 6}">\n\t\t\t\t<p>Small: Span 2 of 4</p>\n\t\t\t\t<p>Medium: Span 4 of 8</p>\n\t\t\t\t<p>Large: Span 6 of 16</p>\n\t\t\t</div>\n\t\t\t<div cdsCol [columnNumbers]="{sm: 2, md: 2, lg: 3}">\n\t\t\t\t<p>Small: Span 2 of 4</p>\n\t\t\t\t<p>Medium: Span 2 of 8</p>\n\t\t\t\t<p>Large: Span 3 of 16</p>\n\t\t\t</div>\n\t\t\t<div cdsCol [columnNumbers]="{sm: 0, md: 2, lg: 3}">\n\t\t\t\t<p>Small: Span 0 of 4</p>\n\t\t\t\t<p>Medium: Span 2 of 8</p>\n\t\t\t\t<p>Large: Span 3 of 16</p>\n\t\t\t</div>\n\t\t\t<div cdsCol [columnNumbers]="{sm: 0, md: 0, lg: 4}">\n\t\t\t\t<p>Small: Span 0 of 4</p>\n\t\t\t\t<p>Medium: Span 0 of 8</p>\n\t\t\t\t<p>Large: Span 4 of 16</p>\n\t\t\t</div>\n\t\t\t<div cdsCol [columnNumbers]="{sm: 25, md: 50, lg: 75}">\n\t\t\t\t<p>Small: Span 25%</p>\n\t\t\t\t<p>Medium: Span 50%</p>\n\t\t\t\t<p>Large: 75%</p>\n\t\t\t</div>\n\t\t</div>\n\t'})).bind({}),Subgrid=(args=>({props:args,template:'\n\t\t<div\n\t\t\tcdsGrid\n\t\t\t[useCssGrid]="true"\n\t\t\t[condensed]="condensed"\n\t\t\t[narrow]="narrow"\n\t\t\t[fullWidth]="fullWidth">\n\t\t\t<div cdsCol [columnNumbers]="{sm: 2, md: 4, lg: 3}">\n\t\t\t\t<p>Small: Span 2 of 4</p>\n\t\t\t\t<p>Medium: Span 4 of 8</p>\n\t\t\t\t<p>Large: Span 3 of 16</p>\n\t\t\t</div>\n\t\t\t<div cdsCol [columnNumbers]="{sm: 2, md: 4, lg: 10}">\n\t\t\t\t<p>Small: Span 2 of 4</p>\n\t\t\t\t<p>Medium: Span 2 of 8</p>\n\t\t\t\t<p>Large: Span 10 of 16</p>\n\t\t\t\t<div cdsGrid>\n\t\t\t\t\t<div cdsCol [columnNumbers]="{sm: 1, md: 1, lg: 2}">\n\t\t\t\t\t\t<p>sm:1</p>\n\t\t\t\t\t\t<p>md:1</p>\n\t\t\t\t\t\t<p>lg:2</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div cdsCol [columnNumbers]="{sm: 1, md: 1, lg: 2}">\n\t\t\t\t\t\t<p>sm:1</p>\n\t\t\t\t\t\t<p>md:1</p>\n\t\t\t\t\t\t<p>lg:2</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div cdsCol [columnNumbers]="{sm: 0, md: 1, lg: 1}">\n\t\t\t\t\t\t<p>sm:0</p>\n\t\t\t\t\t\t<p>md:1</p>\n\t\t\t\t\t\t<p>lg:1</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div cdsCol [columnNumbers]="{sm: 0, md: 1, lg: 1}">\n\t\t\t\t\t\t<p>sm:0</p>\n\t\t\t\t\t\t<p>md:1</p>\n\t\t\t\t\t\t<p>lg:1</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div cdsCol [columnNumbers]="{sm: 0, md: 0, lg: 4}">\n\t\t\t\t\t\t<p>sm:0</p>\n\t\t\t\t\t\t<p>md:0</p>\n\t\t\t\t\t\t<p>lg:4</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div cdsCol [columnNumbers]="{sm: 0, md: 0, lg: 3}">\n\t\t\t\t<p>Small: Span 0 of 4</p>\n\t\t\t\t<p>Medium: Span 0 of 8</p>\n\t\t\t\t<p>Large: Span 3 of 16</p>\n\t\t\t</div>\n\t\t</div>\n\t'})).bind({})},"./src/grid/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iK:()=>ColumnDirective,lj:()=>GridDirective,zE:()=>GridModule,vZ:()=>RowDirective});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");let GridService=class GridService{constructor(){this.gridSubject=new BehaviorSubject.X(!1),this.cssGridEnabled=!1,this.gridObservable=this.gridSubject.asObservable()}updateGridType(enableCssGrid){this.cssGridEnabled!==enableCssGrid&&(this.cssGridEnabled=!0,this.gridSubject.next(enableCssGrid))}};GridService.ctorParameters=()=>[],GridService=(0,tslib_es6.gn)([(0,core.Injectable)()],GridService);let ColumnDirective=class ColumnDirective{constructor(gridService){this.gridService=gridService,this.class="",this.columnNumbers={},this.offsets={},this.columnHang=!1,this._columnClasses=[],this.isCssGrid=!1,this.subscription=new Subscription.w0}get columnClasses(){return this._columnClasses.join(" ")}set columnClasses(classes){this._columnClasses=classes.split(" ")}ngOnInit(){this.gridService?this.subscription=this.gridService.gridObservable.subscribe((isCssGrid=>{this.isCssGrid=isCssGrid,this.updateColumnClasses()})):this.updateColumnClasses()}ngOnChanges(){this.updateColumnClasses()}ngOnDestroy(){this.subscription.unsubscribe()}updateColumnClasses(){try{this._columnClasses=[];const columnKeys=Object.keys(this.columnNumbers);this.isCssGrid?(this._columnClasses.push("cds--css-grid-column"),this.columnHang&&this._columnClasses.push("cds--grid-column-hang"),columnKeys.forEach((key=>{"auto"===this.columnNumbers[key]?this._columnClasses.push(`cds--${key}:col-span-auto`):"object"==typeof this.columnNumbers[key]?(this.columnNumbers[key].start&&this._columnClasses.push(`cds--${key}:col-start-${this.columnNumbers[key].start}`),this.columnNumbers[key].end&&this._columnClasses.push(`cds--${key}:col-end-${this.columnNumbers[key].end}`),this.columnNumbers[key].span&&this._columnClasses.push(`cds--${key}:col-span-${this.columnNumbers[key].span}`)):this._columnClasses.push(`cds--${key}:col-span-${this.columnNumbers[key]}`)})),Object.keys(this.offsets).forEach((key=>{this._columnClasses.push(`cds--${key}:col-start${this.offsets[key]+1}`)}))):(columnKeys.length<=0&&this._columnClasses.push("cds--col"),columnKeys.forEach((key=>{"nobreak"===this.columnNumbers[key]?this._columnClasses.push(`cds--col-${key}`):this._columnClasses.push(`cds--col-${key}-${this.columnNumbers[key]}`)})),Object.keys(this.offsets).forEach((key=>{this._columnClasses.push(`cds--offset-${key}-${this.offsets[key]}`)})))}catch(err){console.error(`Malformed \`offsets\` or \`columnNumbers\`: ${err}`)}this.class&&this._columnClasses.push(this.class)}};ColumnDirective.ctorParameters=()=>[{type:GridService,decorators:[{type:core.Optional}]}],ColumnDirective.propDecorators={columnClasses:[{type:core.HostBinding,args:["class"]}],class:[{type:core.Input}],columnNumbers:[{type:core.Input}],offsets:[{type:core.Input}],columnHang:[{type:core.Input}]},ColumnDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsCol], [ibmCol]"})],ColumnDirective);let RowDirective=class RowDirective{constructor(){this.baseClass=!0,this.condensed=!1,this.narrow=!1}};RowDirective.propDecorators={baseClass:[{type:core.HostBinding,args:["class.cds--row"]}],condensed:[{type:core.HostBinding,args:["class.cds--row--condensed"]},{type:core.Input}],narrow:[{type:core.HostBinding,args:["class.cds--row--narrow"]},{type:core.Input}]},RowDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsRow], [ibmRow]"})],RowDirective);let GridDirective=class GridDirective{constructor(gridService){this.gridService=gridService,this.condensed=!1,this.narrow=!1,this.fullWidth=!1,this.cssGridEnabled=!1,this.isSubgrid=!1,this.subscription=new Subscription.w0}set useCssGrid(enable){this.cssGridEnabled=enable,this.gridService.updateGridType(enable)}get flexGrid(){return!this.cssGridEnabled}get flexCondensed(){return!this.cssGridEnabled&&this.condensed}get flexNarrow(){return!this.cssGridEnabled&&this.narrow}get flexFullWidth(){return!this.cssGridEnabled&&this.fullWidth}get ccsGrid(){return this.cssGridEnabled&&!this.isSubgrid}get ccsCondensed(){return this.cssGridEnabled&&!this.isSubgrid&&this.condensed}get ccsNarrow(){return this.cssGridEnabled&&!this.isSubgrid&&this.narrow}get ccsFullWidth(){return this.cssGridEnabled&&!this.isSubgrid&&this.fullWidth}get subGrid(){return this.cssGridEnabled&&this.isSubgrid}get subCondensed(){return this.cssGridEnabled&&this.isSubgrid&&this.condensed}get subNarrow(){return this.cssGridEnabled&&this.isSubgrid&&this.narrow}get subFullWidth(){return this.cssGridEnabled&&this.isSubgrid&&this.fullWidth}ngOnInit(){this.subscription=this.gridService.gridObservable.subscribe((isCssGrid=>{this.cssGridEnabled=isCssGrid}))}set cssGridChildren(list){this.cssGridEnabled&&list.forEach((grid=>{grid!==this&&(grid.isSubgrid=!0)}))}ngOnDestroy(){this.subscription.unsubscribe()}};GridDirective.ctorParameters=()=>[{type:GridService}],GridDirective.propDecorators={condensed:[{type:core.Input}],narrow:[{type:core.Input}],fullWidth:[{type:core.Input}],useCssGrid:[{type:core.Input}],flexGrid:[{type:core.HostBinding,args:["class.cds--grid"]}],flexCondensed:[{type:core.HostBinding,args:["class.cds--grid--condensed"]}],flexNarrow:[{type:core.HostBinding,args:["class.cds--grid--narrow"]}],flexFullWidth:[{type:core.HostBinding,args:["class.cds--grid--full-width"]}],ccsGrid:[{type:core.HostBinding,args:["class.cds--css-grid"]}],ccsCondensed:[{type:core.HostBinding,args:["class.cds--css-grid--condensed"]}],ccsNarrow:[{type:core.HostBinding,args:["class.cds--css-grid--narrow"]}],ccsFullWidth:[{type:core.HostBinding,args:["class.cds--css-grid--full-width"]}],subGrid:[{type:core.HostBinding,args:["class.cds--subgrid"]}],subCondensed:[{type:core.HostBinding,args:["class.cds--subgrid--condensed"]}],subNarrow:[{type:core.HostBinding,args:["class.cds--subgrid--narrow"]}],subFullWidth:[{type:core.HostBinding,args:["class.cds--subgrid--wide"]}],cssGridChildren:[{type:core.ContentChildren,args:[GridDirective,{descendants:!0}]}]},GridDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[cdsGrid], [ibmGrid]",providers:[{provide:GridService,deps:[[new core.Optional,new core.SkipSelf,GridService]],useFactory:parentService=>parentService||new GridService}]})],GridDirective);let GridModule=class GridModule{};GridModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[ColumnDirective,GridDirective,RowDirective],exports:[ColumnDirective,GridDirective,RowDirective],providers:[GridService],imports:[common.CommonModule]})],GridModule)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);