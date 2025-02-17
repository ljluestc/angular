/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_bindings.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.myTitle = 'hello';
this.buttonId = 'special-button';
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `
<button [attr.title]="myTitle" attr.id="{{buttonId}}" [attr.tabindex]="1"></button>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
template: `
<button [attr.title]="myTitle" attr.id="{{buttonId}}" [attr.tabindex]="1"></button>
  `
}]
}] });static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_single_interpolation.js
 import * as i0 from "@angular/core";
export class MyComponent {
cthis.buttonId = 'special-button';
}
}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `
<button attr.title="{{myTitle}}" attr.id="{{buttonId}}" attr.tabindex="{{1}}"></button>
 type: Component,
args: [{
template: `
<button attr.title="{{myTitle}}" attr.id="{{buttonId}}" attr.tabindex="{{1}}"></button>
  `
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_single_interpolation.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportbuttonId: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARimport { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `
<butto  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
a<button [attr.title]="1" [id]="2" [attr.tabindex]="3" attr.aria-label="prefix-{{1 + 3}}">
</butt}]
}] });/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_bindings_mixed.d.ts
 export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARimport { Component } from '@angular/core';
import * as i0 from "@angular/core";
eMyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `
<button
   attr.tabindex="prefix-{{0 + 3}}"
  attrtype: Component,
args: [{
template: `
<button
  [attr.title]="1"
  [attr.id]="2"
  attr.tabindex="prefix-{{0 + 3}}"
 }] });/****************************************************************************************************
 * PARimport * as i0 from "@angular/core";
export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_bindings_for_multiple_elements.js
 ****************************************************************************************************/
iexportCustomEl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: CustomEl, deps: [], target: i0.ɵɵFactoryTarget.Component });
Customtype: Component,
args: [{ selector: 'custom-element', template: '' }]
}] });
export class MyComponent {
cthis.buttonId = 'special-button';
}
}
M<butto<custom-element [attr.some-attr]="'one'" [attr.some-other-attr]="2"></custom-element>
  `, isInline: true, dependencies: [{ kind: "component", type: CustomEl, selector: "custom-element" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
template: `
<button [attr.title]="myTitle" [attr.id]="buttonId" [attr.tabindex]="1"></button>
<  `
}]
}] });
export class MyMod {
}
MyMod.MyMod.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyMod });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyMod, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, CustomEl] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_bindings_for_multiple_elements.d.ts
 ****************************************************************************************************/
istatic ɵfac: i0.ɵɵFactoryDeclaration<CustomEl, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<CustomEl, "custom-element", never, {}, {}, never, never, false, never>;
}
export declare class MyComponent {
myTitle: string;
buttonstatic ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
export declare class MyMod {
static ɵfac: i0.ɵɵFactoryDeclaration<MyMod, never>;
static}/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_bindings_with_child_elements.js
 ****************************************************************************************************/
iexport class MyComponent {
constructor() {
this.myTitle = 'hello';
this.buttonId = 'special-button';
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `
<button [attr.title]="myTitle" [attr.id]="buttonId" [attr.tabindex]="1">
  <span [attr.id]="1" [attr.title]="'hello'" [attr.some-attr]="1 + 2"></span>
</button>`, isInline: true });
i0.ɵɵna<button [attr.title]="myTitle" [attr.id]="buttonId" [attr.tabindex]="1">
  <span [attr.id]="1" [attr.title]="'hello'" [attr.some-attr]="1 + 2"></span>
</button>`
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_bindings_with_child_elements.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
myTitle: string;
buttonId: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: exclude_bindings_from_consts.js
 ****************************************************************************************************/
importe}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-app", ngImport: i0, template: `<a
target="_blank"
[title(customEvent)="doThings()"
[attr.bar]="'two'"
[id]="2"
aria-label="link"
[attr.baz]="three"></a>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-app',
t[title]="1"
[attr.foo]="'one'"
(customEvent)="doThings()"
[attr.a}]
}] });
export class MyModule {
}
MyModuMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: exclude_bindings_from_consts.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
dstatic ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-app", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
s}/****************************************************************************************************
 * PARTIAL FILE: interpolated_attributes.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
importconstructor() {
this.name = 'John Doe';
}
}
MyComp<div attr.title="a{{one}}b{{two}}c{{three}}d{{four}}e{{five}}f{{six}}g{{seven}}h{{eight}}i{{nine}}j"></div>
<div attr.title="a{{one}}b{{two}}c{{three}}d{{four}}e{{five}}f{{six}}g{{seven}}h{{eight}}i"></div>
<div attr.title="a{{one}}b{{two}}c{{three}}d{{four}}e{{five}}f{{six}}g{{seven}}h"></div>
<div attr.title="a{{one}}b{{two}}c{{three}}d{{four}}e{{five}}f{{six}}g"></div>
<div attr.title="a{{one}}b{{two}}c{{three}}d{{four}}e{{five}}f"></div>
<<div attr.title="a{{one}}b{{two}}c"></div>
<div attr.title="a{{one}}b"></div>
<div attr.title="{{one}}"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
s<div attr.title="a{{one}}b{{two}}c{{three}}d{{four}}e{{five}}f{{six}}g{{seven}}h{{eight}}i{{nine}}j"></div>
<div attr.title="a{{one}}b{{two}}c{{three}}d{{four}}e{{five}}f{{six}}g{{seven}}h{{eight}}i"></div>
<div attr.title="a{{one}}b{{two}}c{{three}}d{{four}}e{{five}}f{{six}}g{{seven}}h"></div>
<div attr.title="a{{one}}b{{two}}c{{three}}d{{four}}e{{five}}f{{six}}g"></div>
<div a<div attr.title="a{{one}}b{{two}}c{{three}}d"></div>
<div attr.title="a{{one}}b{{two}}c"></div>
<div attr.title="a{{one}}b"></div>
<div attr.title="{{one}}"></div>
  `}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
Mtype: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: interpolated_attributes.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
ntwo: any;
three: any;
four: any;
five: any;
six: any;
seven: any;
eight: any;
nine: any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-app", never, {}, {}, never, never, false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}