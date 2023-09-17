/****************************************************************************************************
 * PARTIAL FILE: some.directive.js
 ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class SomeDirective {
}
SomeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SomeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeDirective, selector: "[someDir]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, decorators: [{
type: Directive,
args: [{
selector: '[someDir]',
}]
}] }); * PARTIAL FILE: view_query_for_directive.js
 import { SomeDirective } from './some.directive';
import * as i0 from "@angular/core";
eViewQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ViewQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ViewQueryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ViewQueryComponent, selector: "view-query-component", viewQueries: [{ propertyName: "someDir", first: true, predicate: SomeDirective, descendants: true }, { propertyName: "someDirs", predicate: SomeDirective, descendants: true }], ngImport: i0, template: `
<i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ViewQueryComponent, decorators: [{
type: Component,
atemplate: `
<div someDir></div>
  `
}]
}], propDecorators: { someDir: [{
type: ViewChild,
args: [SomeDirective]
}], someDirs: [{
type: ViewChildren,
args: [SomeDirective]
}] } });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [SomeDirective, ViewQueryComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [SomeDirective, ViewQueryComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: view_query_for_directive.d.ts
 ****************************************************************************************************/
import { QueryList } from '@angular/core';
importimport * as i1 from "./some.directive";
export declare class ViewQueryComponent {
someDir: SomeDirective;
someDirs: QueryList<SomeDirective>;
static}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof i1.SomeDirective, typeof ViewQueryComponent], never, never>;
static * PARTIAL FILE: view_query_forward_ref.js
 ****************************************************************************************************/
import { Component, Directive, forwardRef, NgModule, ViewChild, ViewChildren } from '@angular/core';
import * as i0 from "@angular/core";
export<div someDir></div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return SomeDirective; }), selector: "[someDir]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ViewQueryComponent, decorators: [{
type: Component,
args: [{
s<div someDir></div>
  `
}]
}], propDecorators: { someDir: [{
type: ViewChild,
args: [forwardRef(() => SomeDirective)]
}args: [forwardRef(() => SomeDirective)]
}] } });
export class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
<i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
selector: 'my-app',
template: `
<view-query-component></view-query-component>
  `
}]
}] });
export class SomeDirective {
}
SomeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SomeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeDirective, selector: "[someDir]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, decorators: [{
type: Directive,
args: [{
selector: '[someDir]',
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [SomeDirective, ViewQueryComponent, MyApp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [SomeDirective, ViewQueryComponent, MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: view_query_forward_ref.d.ts
 ****************************************************************************************************/
import { QueryList } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ViewQueryComponent {
someDir: SomeDirective;
someDirList: QueryList<SomeDirective>;
static}
export declare class MyApp {
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
export declare class SomeDirective {
static ɵfac: i0.ɵɵFactoryDeclaration<SomeDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<SomeDirective, "[someDir]", never, {}, {}, never, never, false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof SomeDirective, typeof ViewQueryComponent, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: view_query_for_local_ref.js
 ****************************************************************************************************/
import { Component, NgModule, ViewChild, ViewChildren } from '@angular/core';
import * as i0 from "@angular/core";
exportViewQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ViewQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ViewQueryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ViewQueryComponent, selector: "view-query-component", viewQueries: [{ propertyName: "myRef", first: true, predicate: ["myRef"], descendants: true }, { propertyName: "myRefs", predicate: ["myRef1, myRef2, myRef3"], descendants: true }], ngImport: i0, template: `
<div #myRef></div>
<i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ViewQueryComponent, decorators: [{
type: Component,
args: [{
selector: 'view-query-component',
template: `
<div #  `
}]
}], propDecorators: { myRef: [{
t}], myRefs: [{
type: ViewChildren,
args: ['myRef1, myRef2, myRef3']
}] } });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [ViewQueryComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
t}] });/****************************************************************************************************
 * PARTIAL FILE: view_query_for_local_ref.d.ts
 ****************************************************************************************************/
import { QueryList } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ViewQueryComponent {
myRef: any;
myRefs: QueryList<any>;
static ɵfac: i0.ɵɵFactoryDeclaration<ViewQueryComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ViewQueryComponent, "view-query-component", never, {}, {}, never, never, false, never>;
}staticstatic ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: some.directive.js
 ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class SomeDirective {
}
SomeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SomeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeDirective, selector: "[someDir]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, decorators: [{
type: Directive,
args: }]
} ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class SomeDirective {
static ɵfac: i0.ɵɵFactoryDeclaration<SomeDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<SomeDirective, "[someDir]", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: static_view_query.js
 ****************************************************************************************************/
import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { SomeDirective } from './some.directive';
import * as i0 from "@angular/core";
exportViewQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ViewQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
Vtype: Component,
args: [{
selector: 'view-query-component',
template: `
<div someDir></div>
 }], propDecorators: { someDir: [{
type: ViewChild,
args: [SomeDirective, { static: true }]
}], foo: [{
type: ViewChild,
args: ['foo']
}] } }}
Mtype: NgModule,
args: [{ declarations: [SomeDirective, ViewQueryComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: static_view_query.d.ts
 ****************************************************************************************************/
iimport * as i0 from "@angular/core";
import * as i1 from "./some.directive";
export declare class ViewQueryComponent {
someDir: SomeDirective;
foo: ElementRef;
static ɵfac: i0.ɵɵFactoryDeclaration<ViewQueryComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ViewQueryComponent, "view-query-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
s * PARTIAL FILE: some.directive.js
 ****************************************************************************************************/
importexport class SomeDirective {
}
SomeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
Stype: Directive,
args: [{
selector: '[someDir]',
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: some.directive.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class SomeDirective {
static}/****************************************************************************************************
 import { Component, ElementRef, NgModule, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { SomeDirective } from './some.directive';
import * as i0 from "@angular/core";
exportViewQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ViewQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ViewQueryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ViewQueryComponent, selector: "view-query-component", viewQueries: [{ propertyName: "myRef", first: true, predicate: ["myRef"], descendants: true, read: TemplateRef }, { propertyName: "someDir", first: true, predicate: SomeDirective, descendants: true, read: ElementRef }, { propertyName: "myRefs", predicate: ["myRef1, myRef2, myRef3"], descendants: true, read: ElementRef }, { propertyName: "someDirs", predicate: SomeDirective, descendants: true, read: TemplateRef }], ngImport: i0, template: `
<div someDir></div>
<  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ViewQueryComponent, decorators: [{
type: Component,
args: [{
select<div someDir></div>
<div #myRef></div>
<div #myRef1></div>
  `
}]
}], propDecorators: { myRef: [{
type: ViewChild,
atype: ViewChildren,
atype: ViewChild,
args: [SomeDirective, { read: ElementRef }]
}], someDirs: [{
type: }] } });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [ViewQueryComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [ViewQueryComponent] }]
}] }); ****************************************************************************************************/
import { ElementRef, QueryList, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ViewQueryComponent {
myRef: TemplateRef<unknown>;
myRefs: QueryList<ElementRef>;
someDir: ElementRef;
sstatic ɵcmp: i0.ɵɵComponentDeclaration<ViewQueryComponent, "view-query-component", never, {}, {}, never, never, false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof ViewQueryComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/**** ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class SomeDirective {
}
SomeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SomeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeDirective, selector: "[someDir]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, decorators: [{
type: Directive,
args:  * PARTIAL FILE: some.directive.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class SomeDirective {
static ɵfac: i0.ɵɵFactoryDeclaration<SomeDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<SomeDirective, "[someDir]", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 import { Component, ContentChild, ContentChildren, NgModule } from '@angular/core';
iexport class ContentQueryComponent {
}
ContentQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
C  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, decorators: [{
type: Component,
args: [{
selector: 'content-query-component',
template: `
<div><ng-content></ng-content></div>
  `
}]
}], propDecorators: { someDir: [{
type: ContentChild,
args: }
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
<content-query-component>
  <div someDir></div>
</content-query-component>
 type: Component,
atemplate: `
<content-query-component>
  <div someDir></div>
</content-query-component>
  `
}]
}}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [SomeDirective, ContentQueryComponent, MyApp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [SomeDirective, ContentQueryComponent, MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: content_query_for_directive.d.ts
 ****************************************************************************************************/
import { QueryList } from '@angular/core';
importimport * as i1 from "./some.directive";
exportsomeDirList: QueryList<SomeDirective>;
static ɵfac: i0.ɵɵFactoryDeclaration<ContentQueryComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ContentQueryComponent, "content-query-component", never, {}, {}, ["someDir", "someDirList"], ["*"], false, never>;
}
export declare class MyApp {
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof i1.SomeDirective, typeof ContentQueryComponent, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: content_query_forward_ref.js
 ****************************************************************************************************/
import { Component, ContentChild, ContentChildren, Directive, forwardRef, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class ContentQueryComponent {
}ContentQueryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ContentQueryComponent, selector: "content-query-component", queries: [{ propertyName: "someDir", first: true, predicate: i0.forwardRef(function () { return SomeDirective; }), descendants: true }, { propertyName: "someDirList", predicate: i0.forwardRef(function () { return SomeDirective; }) }], ngImport: i0, template: `
<div><ng-content></ng-content></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, decorators: [{
type: Component,
args: [{
selector: 'content-query-component',
templa  `
}]
}], propDecorators: { someDir: [{
type: ContentChild,
args: type: ContentChildren,
args: export class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
<content-query-component>
  <div someDir></div>
</content-query-component>
 type: Component,
args: [{
selector: 'my-app',
t  <div someDir></div>
</content-query-component>
  `
}]
}] });
export class SomeDirective {
}SomeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeDirective, selector: "[someDir]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, decorators: [{
type: Directive,
args: [{
selector: '[someDir]',
}]
}] });
exportMyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [SomeDirective, ContentQueryComponent, MyApp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [SomeDirective, ContentQueryComponent, MyApp] }]
}] });/****************************************************************************************************
 * PARimport { QueryList } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ContentQueryComponent {
someDir: SomeDirective;
someDirList: QueryList<SomeDirective>;
static ɵfac: i0.ɵɵFactoryDeclaration<ContentQueryComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ContentQueryComponent, "content-query-component", never, {}, {}, ["someDir", "someDirList"], ["*"], false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
estatic ɵdir: i0.ɵɵDirectiveDeclaration<SomeDirective, "[someDir]", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof SomeDirective, typeof ContentQueryComponent, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: content_query_for_local_ref.js
 ****************************************************************************************************/
import { Component, ContentChild, ContentChildren, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class ContentQueryComponent {
}
ContentQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContentQueryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ContentQueryComponent, selector: "content-query-component", queries: [{ propertyName: "myRef", first: true, predicate: ["myRef"], descendants: true }, { propertyName: "myRefs", predicate: ["myRef1, myRef2, myRef3"] }], ngImport: i0, template: `
<div #  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, decorators: [{
type: Component,
args: [{
selector: 'content-query-component',
template: `
<div #  `
}]
}], propDecorators: { myRef: [{
type: ContentChild,
args: ['myRef']
}], myRefs: [{
type: ContentChildren,
args: ['myRef1, myRef2, myRef3']
}] } });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [ContentQueryComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
t}] });/****************************************************************************************************
 * PARTIAL FILE: content_query_for_local_ref.d.ts
 ****************************************************************************************************/
import { QueryList } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ContentQueryComponent {
mstatic ɵfac: i0.ɵɵFactoryDeclaration<ContentQueryComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ContentQueryComponent, "content-query-component", never, {}, {}, ["myRef", "myRefs"], never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof ContentQueryComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: some.directive.js
 *****import * as i0 from "@angular/core";
export class SomeDirective {
}
SomeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SomeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeDirective, selector: "[someDir]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, decorators: [{
type: selector: '[someDir]',
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: some.directive.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class SomeDirective {
static ɵfac: i0.ɵɵFactoryDeclaration<SomeDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<SomeDirective, "[someDir]", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: static_content_query.js
 ****************************************************************************************************/
import { Component, ContentChild, ElementRef, NgModule } from '@angular/core';
import { SomeDirective } from './some.directive';
import * as i0 from "@angular/core";
eConten<div><ng-content></ng-content></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, decorators: [{
type: Component,
args: [{
selector: 'content-query-component',
t  `
}]
}], propDecorators: { someDir: [{
type: ContentChild,
args: [SomeDirective, { static: true }]
}], foo: [{
type: ContentChild,
aexport class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
<content-query-component>
  <div someDir></div>
</content-query-component>
  `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return SomeDirective; }), selector: "[someDir]" }, { kind: "component", type: i0.forwardRef(function () { return ContentQueryComponent; }), selector: "content-query-component" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: template: `
<content-query-component>
  <div  `
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [SomeDirective, ContentQueryComponent, MyApp] });
Mtype: NgModule,
args: [{ declarations: [SomeDirective, ContentQueryComponent, MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: static_content_query.d.ts
 ****************************************************************************************************/
import { ElementRef } from '@angular/core';
import { SomeDirective } from './some.directive';
import * as i0 from "@angular/core";
importsomeDir: SomeDirective;
foo: ElementRef;
static ɵfac: i0.ɵɵFactoryDeclaration<ContentQueryComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ContentQueryComponent, "content-query-component", never, {}, {}, ["someDir", "foo"], ["*"], false, never>;
}
export declare class MyApp {
s}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof i1.SomeDirective, typeof ContentQueryComponent, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: some.directive.js
 import * as i0 from "@angular/core";
export class SomeDirective {
}
SomeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SomeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeDirective, selector: "[someDir]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, decorators: [{
type: Directive,
args: [{
selector: '[someDir]',
}]
}] }); ****************************************************************************************************/
import * as i0 from "@angular/core";
exportstatic ɵdir: i0.ɵɵDirectiveDeclaration<SomeDirective, "[someDir]", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: content_query_read_token.js
 ****************************************************************************************************/
import { Component, ContentChild, ContentChildren, ElementRef, NgModule, TemplateRef } from '@angular/core';
import { SomeDirective } from './some.directive';
import * as i0 from "@angular/core";
eContentQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContentQueryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ContentQueryComponent, selector: "content-query-component", queries: [{ propertyName: "myRef", first: true, predicate: ["myRef"], descendants: true, read: TemplateRef }, { propertyName: "someDir", first: true, predicate: SomeDirective, descendants: true, read: ElementRef }, { propertyName: "myRefs", predicate: ["myRef1, myRef2, myRef3"], read: ElementRef }, { propertyName: "someDirs", predicate: SomeDirective, read: TemplateRef }], ngImport: i0, template: `
<div s<div #myRef1></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, decorators: [{
type: Component,
args: [{
selector: 'content-query-component',
templa<div #myRef></div>
<div #myRef1></div>
  `
}]
}], propDecorators: { myRef: [{
type: ContentChild,
atype: ContentChildren,
args: ['myRef1, myRef2, myRef3', { read: ElementRef }]
}], someDir: [{
type: ContentChild,
args: [SomeDirective, { read: ElementRef }]
}args: [SomeDirective, { read: TemplateRef }]
}] } });
eMyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [ContentQueryComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [ContentQueryComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: content_query_read_token.d.ts
 ****************************************************************************************************/
import { ElementRef, QueryList, TemplateRef } from '@angular/core';
importmyRef: TemplateRef<unknown>;
myRefs: QueryList<ElementRef>;
someDir: ElementRef;
someDirs: QueryList<TemplateRef<unknown>>;
static}
estatic ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof ContentQueryComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: some.directive.js
 ****************************************************************************************************/
import { Directive } from '@angular/core';
i}
SomeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SomeDitype: Directive,
args: [{
selector: '[someDir]',
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: some.directive.d.ts
 *****export declare class SomeDirective {
static ɵfac: i0.ɵɵFactoryDeclaration<SomeDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<SomeDirective, "[someDir]", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: query_with_emit_distinct_changes_only.js
 ****************************************************************************************************/
import { Component, ContentChildren, NgModule, ViewChildren } from '@angular/core';
import { SomeDirective } from './some.directive';
import * as i0 from "@angular/core";
export class ContentQueryComponent {
}
ContentQueryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContentQueryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ContentQueryComponent, selector: "content-query-component", queries: [{ propertyName: "myRefs", predicate: ["myRef"] }, { propertyName: "oldMyRefs", predicate: ["myRef"], emitDistinctChangesOnly: false }], viewQueries: [{ propertyName: "someDirs", predicate: SomeDirective, descendants: true }, { propertyName: "oldSomeDirs", predicate: SomeDirective, emitDistinctChangesOnly: false, descendants: true }], ngImport: i0, template: `
<  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ContentQueryComponent, decorators: [{
tselector: 'content-query-component',
template: `
<div someDir></div>
<div #myRef></div>
  `
}]
}], prargs: ['myRef', { emitDistinctChangesOnly: true }]
}], oldMyRefs: [{
type: ContentChildren,
args: ['myRef', { emitDistinctChangesOnly: false }]
}], soargs: [SomeDirective, { emitDistinctChangesOnly: true }]
}], oldSomeDirs: [{
type: ViewChildren,
args: [SomeDirective, { emitDistinctChangesOnly: false }]
}] } }}
MMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
t}] });/****************************************************************************************************
 * PARTIAL FILE: query_with_emit_distinct_changes_only.d.ts
 ****************************************************************************************************/
import { ElementRef, QueryList } from '@angular/core';
imyRefs: QueryList<ElementRef>;
oldMyRefs: QueryList<ElementRef>;
someDistatic ɵfac: i0.ɵɵFactoryDeclaration<ContentQueryComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ContentQueryComponent, "content-query-component", never, {}, {}, ["myRefs", "oldMyRefs"], never, false, never>;
}
export declare class MyModule {
staticstatic ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}