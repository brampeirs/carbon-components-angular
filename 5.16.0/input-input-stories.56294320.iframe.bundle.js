"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[6943],{"./src/input/input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Skeleton:()=>Skeleton,TextArea:()=>TextArea,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/input/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Input",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_1__.gP]})]},Basic=(args=>({props:args,template:'\n\t\t<cds-label\n\t\t[helperText]="helperText"\n\t\t[invalid]="invalid"\n\t\t[invalidText]="invalidText"\n\t\t[warn]="warn"\n\t\t[disabled]="disabled"\n\t\t[warnText]="warnText">\n\t\t{{label}}\n\t\t<input\n\t\t\tcdsText\n\t\t\t[size]="size"\n\t\t\t[invalid]="invalid"\n\t\t\t[warn]="warn"\n\t\t\t[disabled]="disabled"\n\t\t\t[theme]="theme"\n\t\t\t[placeholder]="placeholder"\n\t\t\t[autocomplete]="autocomplete">\n\t\t</cds-label>\n\t'})).bind({});Basic.args={disabled:!1,invalid:!1,invalidText:"Invalid entry",warn:!1,warnText:"This is a warning!",label:"Text input label",helperText:"Optional helper text",placeholder:"Placeholder"},Basic.argTypes={autocomplete:{options:["on","off"],defaultValue:"on",control:"radio"},theme:{options:["light","dark"],defaultValue:"dark",control:"radio"},size:{options:["sm","md","lg"],defaultValue:"md",contorl:"select"},component:___WEBPACK_IMPORTED_MODULE_1__.__};const TextArea=(args=>({props:args,template:'\n\t\t<cds-label\n\t\t[helperText]="helperText"\n\t\t[invalid]="invalid"\n\t\t[disabled]="disabled"\n\t\t[invalidText]="invalidText">\n\t\t{{label}}\n\t\t<textarea\n\t\t\tcdsTextArea\n\t\t\t[placeholder]="placeholder"\n\t\t\t[invalid]="invalid"\n\t\t\t[disabled]="disabled"\n\t\t\t[theme]="theme"\n\t\t\t[rows]="rows"\n\t\t\t[cols]="cols"\n\t\t\taria-label="textarea"></textarea>\n\t\t</cds-label>\n\t'})).bind({});TextArea.args={...Basic.args,cols:50,rows:4},TextArea.argTypes={...Basic.argTypes};const Skeleton=(args=>({props:args,template:'\n\t\t<cds-label skeleton="true">\n\t\t\t<input cdsText skeleton="true">\n\t\t</cds-label>\n\t\t<br>\n\t\t<input cdsText skeleton="true">\n\t\t<br><br>\n\t\t<cds-label skeleton="true">\n\t\t\t<div cdsTextArea skeleton="true"></div>\n\t\t</cds-label>\n\t'})).bind({})}}]);