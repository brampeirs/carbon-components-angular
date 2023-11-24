"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[9325],{"./src/tiles/tile-group.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multiselect:()=>Multiselect,Selectable:()=>Selectable,WithLayers:()=>WithLayers,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_layer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/layer/index.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tiles/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tiles/Grouped",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_2__.i$,_layer__WEBPACK_IMPORTED_MODULE_1__.D]})],argTypes:{multiple:{control:!1}},component:___WEBPACK_IMPORTED_MODULE_2__.B4,subcomponents:{TileGroup:___WEBPACK_IMPORTED_MODULE_2__.B4,SelectionTile:___WEBPACK_IMPORTED_MODULE_2__.G9}},Selectable=(args=>({props:args,template:'\n\t\t<cds-tile-group (selected)="selected($event)" [multiple]="false">\n\t\t\t<cds-selection-tile value="tile1" [selected]="true">Selectable Tile</cds-selection-tile>\n\t\t\t<cds-selection-tile value="tile2">Selectable Tile</cds-selection-tile>\n\t\t\t<cds-selection-tile value="tile3">Selectable Tile</cds-selection-tile>\n\t\t</cds-tile-group>\n\t'})).bind({});Selectable.argTypes={selected:{action:"Tile selected!"}};const Multiselect=(args=>({props:args,template:'\n\t\t<cds-tile-group (selected)="selected($event)" [multiple]="true">\n\t\t\t<cds-selection-tile value="tile1" [selected]="true">Selectable Tile</cds-selection-tile>\n\t\t\t<cds-selection-tile value="tile2">Selectable Tile</cds-selection-tile>\n\t\t\t<cds-selection-tile value="tile3">Selectable Tile</cds-selection-tile>\n\t\t</cds-tile-group>\n\t'})).bind({});Multiselect.argTypes={selected:{action:"Tile selected!"}};const WithLayers=(args=>({props:args,template:'\n\t\t<cds-tile-group (selected)="selected($event)" [multiple]="false">\n\t\t\t<cds-selection-tile value="tile1" [selected]="true">First Layer</cds-selection-tile>\n\t\t\t<cds-selection-tile value="tile2">First Layer</cds-selection-tile>\n\t\t</cds-tile-group>\n\t\t<div cdsLayer>\n\t\t\t<cds-tile-group (selected)="selected($event)" [multiple]="false">\n\t\t\t\t<cds-selection-tile value="tile1" [selected]="true">Second Layer</cds-selection-tile>\n\t\t\t\t<cds-selection-tile value="tile2">Second Layer</cds-selection-tile>\n\t\t\t</cds-tile-group>\n\t\t\t<div cdsLayer>\n\t\t\t\t<cds-tile-group (selected)="selected($event)" [multiple]="false">\n\t\t\t\t\t<cds-selection-tile value="tile1" [selected]="true">Third Layer</cds-selection-tile>\n\t\t\t\t\t<cds-selection-tile value="tile2">Third Layer</cds-selection-tile>\n\t\t\t\t</cds-tile-group>\n\t\t\t</div>\n\t\t</div>\n\t'})).bind({})}}]);