"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[3329],{"./src/checkbox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XZ:()=>Checkbox,nD:()=>CheckboxModule});var CheckboxState,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");!function(CheckboxState){CheckboxState[CheckboxState.Init=0]="Init",CheckboxState[CheckboxState.Indeterminate=1]="Indeterminate",CheckboxState[CheckboxState.Checked=2]="Checked",CheckboxState[CheckboxState.Unchecked=3]="Unchecked"}(CheckboxState||(CheckboxState={}));let Checkbox=class Checkbox{constructor(changeDetectorRef){this.changeDetectorRef=changeDetectorRef,this.disabled=!1,this.skeleton=!1,this.hideLabel=!1,this.id=`checkbox-${Checkbox.checkboxCount}`,this.click=new core.EventEmitter,this.checkedChange=new core.EventEmitter,this.indeterminateChange=new core.EventEmitter,this._checked=!1,this._indeterminate=!1,this.currentCheckboxState=CheckboxState.Init,this.onTouched=()=>{},this.propagateChange=_=>{},Checkbox.checkboxCount++}set indeterminate(indeterminate){indeterminate!==this._indeterminate&&(this._indeterminate=indeterminate,this._indeterminate?this.transitionCheckboxState(CheckboxState.Indeterminate):this.transitionCheckboxState(this.checked?CheckboxState.Checked:CheckboxState.Unchecked),this.inputCheckbox&&this.inputCheckbox.nativeElement&&(this.inputCheckbox.nativeElement.indeterminate=indeterminate),this.changeDetectorRef.markForCheck(),this.indeterminateChange.emit(this._indeterminate))}get indeterminate(){return this._indeterminate}set checked(checked){this.setChecked(checked,!1)}get checked(){return this._checked}toggle(){this.setChecked(!this.checked,!0)}writeValue(value){this.setChecked(!!value,!0)}registerOnChange(fn){this.propagateChange=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(isDisabled){this.disabled=isDisabled,this.changeDetectorRef.markForCheck()}focusOut(){this.onTouched()}onChange(event){event.stopPropagation()}onClick(event){if(this.click.observers.length)return event.preventDefault(),void this.click.emit();this.disabled||(this.toggle(),this.transitionCheckboxState(this._checked?CheckboxState.Checked:CheckboxState.Unchecked),this.emitChangeEvent())}transitionCheckboxState(newState){this.currentCheckboxState=newState}emitChangeEvent(){this.checkedChange.emit(this.checked),this.propagateChange(this.checked)}ngAfterViewInit(){this.indeterminate&&this.inputCheckbox&&this.inputCheckbox.nativeElement&&(this.inputCheckbox.nativeElement.indeterminate=!0)}setChecked(checked,resetIndeterminate){checked!==this._checked&&(this._checked=checked,resetIndeterminate&&this._indeterminate&&(this._indeterminate=!1,Promise.resolve().then((()=>{this.indeterminateChange.emit(this._indeterminate)}))),this.changeDetectorRef.markForCheck())}};Checkbox.checkboxCount=0,Checkbox.ctorParameters=()=>[{type:core.ChangeDetectorRef}],Checkbox.propDecorators={disabled:[{type:core.Input}],skeleton:[{type:core.Input}],hideLabel:[{type:core.Input}],name:[{type:core.Input}],id:[{type:core.Input}],required:[{type:core.Input}],value:[{type:core.Input}],ariaLabel:[{type:core.Input}],ariaLabelledby:[{type:core.Input}],indeterminate:[{type:core.Input}],checked:[{type:core.Input}],click:[{type:core.Output}],checkedChange:[{type:core.Output}],indeterminateChange:[{type:core.Output}],inputCheckbox:[{type:core.ViewChild,args:["inputCheckbox"]}],focusOut:[{type:core.HostListener,args:["focusout"]}]},Checkbox=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-checkbox, ibm-checkbox",template:'\n\t\t<div class="cds--form-item cds--checkbox-wrapper">\n\t\t\t<input\n\t\t\t\t#inputCheckbox\n\t\t\t\tclass="cds--checkbox"\n\t\t\t\ttype="checkbox"\n\t\t\t\t[id]="id + \'_input\'"\n\t\t\t\t[value]="value"\n\t\t\t\t[name]="name"\n\t\t\t\t[required]="required"\n\t\t\t\t[checked]="checked"\n\t\t\t\t[disabled]="disabled"\n\t\t\t\t[attr.aria-labelledby]="ariaLabelledby"\n\t\t\t\t(change)="onChange($event)"\n\t\t\t\t(click)="onClick($event)">\n\t\t\t<label\n\t\t\t\t[for]="id + \'_input\'"\n\t\t\t\t[attr.aria-label]="ariaLabel"\n\t\t\t\tclass="cds--checkbox-label"\n\t\t\t\t[ngClass]="{\n\t\t\t\t\t\'cds--skeleton\' : skeleton\n\t\t\t\t}">\n\t\t\t\t<span [ngClass]="{\'cds--visually-hidden\' : hideLabel}" class="cds--checkbox-label-text">\n\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t</span>\n\t\t\t</label>\n\t\t</div>\n\t',providers:[{provide:fesm2020_forms.JU,useExisting:Checkbox,multi:!0}],changeDetection:core.ChangeDetectionStrategy.OnPush})],Checkbox);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let CheckboxModule=class CheckboxModule{};CheckboxModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[Checkbox],exports:[Checkbox],imports:[common.CommonModule,fesm2020_forms.u5]})],CheckboxModule)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./src/checkbox/checkbox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithNgModel:()=>WithNgModel,WithReactiveForms:()=>WithReactiveForms,__namedExportsOrder:()=>__namedExportsOrder,default:()=>checkbox_stories});var fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),src_checkbox=__webpack_require__("./src/checkbox/index.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let ReactiveFormsStory=class ReactiveFormsStory{constructor(formBuilder){this.formBuilder=formBuilder}ngOnInit(){this.formGroup=this.formBuilder.group({disabledCheckbox:this.formBuilder.control({value:!0,disabled:!0}),checkbox:this.formBuilder.control(!1)})}toggleDisable(){const checkbox=this.formGroup.get("checkbox");null!=checkbox&&(checkbox.disabled?checkbox.enable():checkbox.disable())}};ReactiveFormsStory.ctorParameters=()=>[{type:fesm2020_forms.qu}],ReactiveFormsStory=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-reactive-forms",template:'\n\t\t<form [formGroup]="formGroup">\n\t\t\t<cds-checkbox formControlName="disabledCheckbox">\n\t\t\t\tDisabled checkbox in a reactive form\n\t\t\t</cds-checkbox>\n\t\t\t<cds-checkbox formControlName="checkbox">\n\t\t\t\tCheckbox in a reactive form\n\t\t\t</cds-checkbox>\n\t\t</form>\n\t\t<br>\n\t\t<button (click)="toggleDisable()">Toggle disabled state</button>\n\t'})],ReactiveFormsStory);const checkbox_stories={title:"Components/Checkbox",decorators:[(0,dist.moduleMetadata)({declarations:[ReactiveFormsStory],imports:[fesm2020_forms.u5,fesm2020_forms.UX,src_checkbox.nD]})],component:src_checkbox.XZ},Basic=(args=>({props:args,template:'\n        <fieldset class="cds--fieldset">\n            <legend class="cds--label">{{label}}</legend>\n            <cds-checkbox\n                [disabled]="disabled"\n                [indeterminate]="indeterminate"\n                [checked]="checked"\n                (checkedChange)="onChange($event)"\n                [hideLabel]="hideLabel"\n                (indeterminateChange)="onIndeterminateChange($event)">\n                Indeterminate checkbox\n            </cds-checkbox>\n        </fieldset>\n    '})).bind({});Basic.args={label:"Label",hideLabel:!1,indeterminate:!0,checked:!0,disabled:!1},Basic.argTypes={onChange:{action:"Changed!"},onIndeterminateChange:{action:"Indeterminate Change!"}};const WithNgModel=(args=>({props:args,template:'\n        <cds-checkbox\n            [(ngModel)]="model">\n            ngModel checkbox\n        </cds-checkbox>\n\n        <div style="display:flex; flex-direction: column; width: 150px">\n            <button (click)="model=!model">Set model</button>\n            Checked: {{ model }}\n        </div>\n    '})).bind({});WithNgModel.storyName="With NgModel",WithNgModel.args={model:!0},WithNgModel.parameters={controls:{disabled:!0}};const WithReactiveForms=(args=>({props:args,template:"\n    \x3c!--\n    app-* components are for demo purposes only.\n    You can create your own implementation by using the component source found at:\n    https://github.com/IBM/carbon-components-angular/tree/master/src/checkbox/stories/reactive-form.component.ts\n    --\x3e\n    <app-reactive-forms></app-reactive-forms>\n    "})).bind({});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <fieldset class="cds--fieldset">\n            <legend class="cds--label">{{label}}</legend>\n            <cds-checkbox\n                [disabled]="disabled"\n                [indeterminate]="indeterminate"\n                [checked]="checked"\n                (checkedChange)="onChange($event)"\n                [hideLabel]="hideLabel"\n                (indeterminateChange)="onIndeterminateChange($event)">\n                Indeterminate checkbox\n            </cds-checkbox>\n        </fieldset>\n    `\n})',...Basic.parameters?.docs?.source}}},WithNgModel.parameters={...WithNgModel.parameters,docs:{...WithNgModel.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-checkbox\n            [(ngModel)]="model">\n            ngModel checkbox\n        </cds-checkbox>\n\n        <div style="display:flex; flex-direction: column; width: 150px">\n            <button (click)="model=!model">Set model</button>\n            Checked: {{ model }}\n        </div>\n    `\n})',...WithNgModel.parameters?.docs?.source}}},WithReactiveForms.parameters={...WithReactiveForms.parameters,docs:{...WithReactiveForms.parameters?.docs,source:{originalSource:"args => ({\n  props: args,\n  template: `\n    \x3c!--\n    app-* components are for demo purposes only.\n    You can create your own implementation by using the component source found at:\n    https://github.com/IBM/carbon-components-angular/tree/master/src/checkbox/stories/reactive-form.component.ts\n    --\x3e\n    <app-reactive-forms></app-reactive-forms>\n    `\n})",...WithReactiveForms.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","WithNgModel","WithReactiveForms"]}}]);