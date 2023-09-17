/****************************************************************************************************
 * PARTIAL FILE: for_of.js
 ****************************************************************************************************/
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class ForOfDirective {
constructor(view, template) {
this.view = view;
this.template = template;
}
ngOnChanges(simpleChanges) { }
}
ForOfDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ForOfDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
ForOfDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ForOfDirective, selector: "[forOf]", inputs: { forOf: "forOf" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ForOfDirective, decorators: [{
type: Directive,
args: [{ selector: '[forOf]' }]
}], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { forOf: [{
type: Input
}] } });even: boolean;
odd: boolean;
}
export declare class ForOfDirective {
private view;
private template;
private previous;
constructor(view: ViewContainerRef, template: TemplateRef<any>);
forOf: any[];
ngOnChanges(simpleChanges: SimpleChanges): void;
static ɵfac: i0.ɵɵFactoryDeclaration<ForOfDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<ForOfDirective, "[forOf]", never, { "forOf": { "alias": "forOf"; "required": false; }; }, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: svg_embedded_view.js
 import { ForOfDirective } from './for_of';
import * as i0 from "@angular/core";
ethis.items = [{ data: 42 }, { data: 42 }];
}
}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<svg><g *for="let item of items"><circle></circle></g></svg>`, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return ForOfDirective; }), selector: "[forOf]", inputs: ["forOf"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
tselector: 'my-component',
template: `<svg><g *for="let item of items"><circle></circle></g></svg>`
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent, ForOfDirective] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, ForOfDirective] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: svg_embedded_view.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
importitems: {
data: number;
}[];
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
staticexport declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent, typeof i1.ForOfDirective], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/**** ****************************************************************************************************/
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class ForOfDirective {
cthis.ngOnChanges(simpleChanges) { }
}
ForOfDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ForOfDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
ForOfDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ForOfDirective, selector: "[forOf]", inputs: { forOf: "forOf" }, usesOnChanges: true, ngImport: i0 });
iargs: [{ selector: '[forOf]' }]
}], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { forOf: [{
type: Input
}] } });/****************************************************************************************************
 * PARTIAL FILE: for_of.d.ts
 ****************************************************************************************************/
iexport interface ForOfContext {
$implicit: any;
index: number;
even: bo}
export declare class ForOfDirective {
private view;
pconstructor(view: ViewContainerRef, template: TemplateRef<any>);
forOf: any[];
ngOnChanges(simpleChanges: SimpleChanges): void;
static ɵ}/****************************************************************************************************
 * PARTIAL FILE: let_variable_and_reference.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import { ForOfDirective } from './for_of';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.ite}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<ul><li *for="let item of items">{{item.name}}</li></ul>`, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return ForOfDirective; }), selector: "[forOf]", inputs: ["forOf"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: `<ul><li *for="let item of items">{{item.name}}</li></ul>`
}]
}] });
export cMMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, ForOfDirective] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: let_variable_and_reference.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
import * as i1 from "./for_of";
export declare class MyComponent {
i}[];
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
exportstatic ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent, typeof i1.ForOfDirective], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: for_of.js
 ****************************************************************************************************/
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
iconstructor(view, template) {
this.view = view;
this.template = template;
}
ngOnChForOfDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ForOfDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
ForOfDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ForOfDirective, selector: "[forOf]", inputs: { forOf: "forOf" }, usesOnChanges: true, ngImport: i0 });
iargs: [{ selector: '[forOf]' }]
}], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { forOf: [{
type: Input
}] } });/****************************************************************************************************
 * PARTIAL FILE: for_of.d.ts
 ****************************************************************************************************/
import { SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export interface ForOfContext {
$implicit: any;
index:odd: boolean;
}
eprivate template;
private previous;
constructor(view: ViewContainerRef, template: TemplateRef<any>);
forOf: astatic ɵfac: i0.ɵɵFactoryDeclaration<ForOfDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<ForOfDirective, "[forOf]", never, { "forOf": { "alias": "forOf"; "required": false; }; }, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: parent_template_variable.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import { ForOfDirective } from './for_of';
importconstructor() {
this.items = [
{];
}
}
MyCompon  <ul>
<li *for="let item of items">
 <li *for="let info of item.infos">
  {{item.name}}: {{info.description}}
</li>
  </ul>
</li>
  </ul>`, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return ForOfDirective; }), selector: "[forOf]", inputs: ["forOf"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
s  <ul>
<li *for="let item of items">
  <div>{{item.name}}</div>
  <ul>  {{item.name}}: {{info.description}}
</li>
   </ul>`
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent, ForOfDirective] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, ForOfDirective] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: parent_template_variable.d.ts
 ****************************************************************************************************/
import *export declare class MyComponent {
items: {
ndescription: string;
}[];
}[];
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent, typeof i1.ForOfDirective], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARimport { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class ForOfDirective {
constructor(view, template) {
this.view = view;
this.template = template;
}
nForOfDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ForOfDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
ForOfDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ForOfDirective, selector: "[forOf]", inputs: { forOf: "forOf" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ForOfDirective, decorators: [{
type: Directive,
args: [{ selector: '[forOf]' }]
}], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { forOf: [{
type: Input
}] } });/****************************************************************************************************
 * PARTIAL FILE: for_of.d.ts
 ****************************************************************************************************/
iexport interface ForOfContext {
$implieven: boolean;
odd: boolean;
}
export declare class ForOfDirective {
private view;
private template;
private previous;
constructor(view: ViewContainerRef, template: TemplateRef<any>);
forOf: any[];
ngOnChanges(simpleChanges: SimpleChanges): void;
static ɵfac: i0.ɵɵFactoryDeclaration<ForOfDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<ForOfDirective, "[forOf]", never, { "forOf": { "alias": "forOf"; "required": false; }; }, {}, never, never, false, never>;
}