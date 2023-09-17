/****************************************************************************************************
 * PARTIAL FILE: directives.js
 ****************************************************************************************************/
import { Component, Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class ChildComponent {
}
ChildComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ChildComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChildComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ChildComponent, selector: "child", ngImport: i0, template: 'child-view', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ChildComponent, decorators: [{
type: Component,
args: [{ selector: 'child', template: 'child-view' }]
}] });
export class SomeDirective {
}
SomeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
SomeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeDirective, selector: "[some-directive]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, decorators: [{
type: Directive,
args: [{ selector: '[some-directive]' }]
}] });
export class MyComponent {
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: '<child some-directive></child>!', isInline: true, dependencies: [{ kind: "component", type: ChildComponent, selector: "child" }, { kind: "directive", type: SomeDirective, selector: "[some-directive]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{ selector: 'my-component', template: '<child some-directive></child>!' }]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [ChildComponent, SomeDirective, MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [ChildComponent, SomeDirective, MyComponent] }]
}] });export declare class SomeDirective {
static ɵfac: i0.ɵɵFactoryDeclaration<SomeDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<SomeDirective, "[some-directive]", never, {}, {}, never, never, false, never>;
}
export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof ChildComponent, typeof SomeDirective, typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: complex_selectors.js
 import * as i0 from "@angular/core";
export class SomeDirective {
}SomeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeDirective, selector: "div.foo[some-directive]:not([title]):not(.baz)", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeDirective, decorators: [{
t}] });
export class OtherDirective {
}OtherDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: OtherDirective, selector: ":not(span[title]):not(.baz)", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: OtherDirective, decorators: [{
type: Directive,
args: [{ selector: ':not(span[title]):not(.baz)' }]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [SomeDirective, OtherDirective] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [SomeDirective, OtherDirective] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: complex_selectors.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportstatic ɵdir: i0.ɵɵDirectiveDeclaration<SomeDirective, "div.foo[some-directive]:not([title]):not(.baz)", never, {}, {}, never, never, false, never>;
}
export declare class OtherDirective {
static ɵfac: i0.ɵɵFactoryDeclaration<OtherDirective, never>;
staticexport declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof SomeDirective, typeof OtherDirective], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/**** ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class SomeComponent {
}SomeCtype: Component,
args: [{ selector: '#my-app', template: '' }]
}] });
export class MyModule {
}MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [SomeComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [SomeComponent] }]
}] });/****************************************************************************************************
 import * as i0 from "@angular/core";
export declare class SomeComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<SomeComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<SomeComponent, "#my-app", never, {}, {}, never, never, false, never>;
}
exportstatic ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof SomeComponent], never, never>;
s * PARTIAL FILE: no_selector.js
 ****************************************************************************************************/
import { Component, Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class RouterOutlet {
}RouterOutlet.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: RouterOutlet, selector: "router-outlet", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: RouterOutlet, decorators: [{
t}] });
export class EmptyOutletComponent {
}
EmptyOutletComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EmptyOutletComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyOutletComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: EmptyOutletComponent, selector: "ng-component", ngImport: i0, template: '<router-outlet></router-outlet>', isInline: true, dependencies: [{ kind: "directive", type: RouterOutlet, selector: "router-outlet" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EmptyOutletComponent, decorators: [{
type: }] });
export class MyModule {
}MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [EmptyOutletComponent, RouterOutlet] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [EmptyOutletComponent, RouterOutlet] }]
}] });/****************************************************************************************************
 * PARimport * as i0 from "@angular/core";
export declare class RouterOutlet {
s}
export declare class EmptyOutletComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<EmptyOutletComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<EmptyOutletComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
exportstatic ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof EmptyOutletComponent, typeof RouterOutlet], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: view_tokens_di.js
 ****************************************************************************************************/
iexport class MyComponent {
constructor(el, vcr, cdr) {
this.el = el;
this.vcr = vcr;
this.cdr = cdr;
}MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: '', isInline: true });
iargs: [{ selector: 'my-component', template: '' }]
}], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }]; } });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] }); ****************************************************************************************************/
import { ChangeDetectorRef, ElementRef, ViewContainerRef } from '@angular/core';
iel: ElementRef;
vcr: ViewContainerRef;
cdr: ChangeDetectorRef;
constructor(el: ElementRef, vcr: ViewContainerRef, cdr: ChangeDetectorRef);
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
staticimport { Component, Directive, NgModule, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
e}
IfDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: IfDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
IfDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: IfDirective, selector: "[if]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: IfDirective, decorators: [{
type: Directive,
args: [{ selector: '[if]' }]
}], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
export class MyComponent {
constructor() {
this.salutation = 'Hello';
}i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{ selector: 'my-component', template: '<ul #foo><li *if>{{salutation}} {{foo}}</li></ul>' }]
}] });
eMyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [IfDirective, MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [IfDirective, MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: structural_directives.d.ts
 ****************************************************************************************************/
import { TemplateRef } from '@angular/core';
importstatic ɵdir: i0.ɵɵDirectiveDeclaration<IfDirective, "[if]", never, {}, {}, never, never, false, never>;
}
export declare class MyComponent {
salutation: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof IfDirective, typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARimport { Component, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComp {
}
MyComp  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComp, decorators: [{
type: Component,
args: [{
selector: 'my-comp',
template: `
<p>{{ names[0] }}</p>
<p>{{ names[1] }}</p>
  `
}]
}], propDecorators: { names: [{
texport class MyApp {
constr}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
  <my-comp [names]="['Nancy', customName]"></my-comp>
`type: Component,
args: [{
selector: 'my-app',
template: `
  <my-comp [names]="['Nancy', customName]"></my-comp>
`
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComp, MyApp] });
Mtype: NgModule,
args:  * PARTIAL FILE: array_literals.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComp {
names: string[];
static ɵfac: i0.ɵɵFactoryDeclaration<MyComp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComp, "my-comp", never, { "names": { "alias": "names"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class MyApp {
customName: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComp, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: array_literals_many.js
 import * as i0 from "@angular/core";
export{{ names[0] }}
{{ names[1] }}
{{ names[3] }}
{{ names[4] }}
{{ names[5] }}
{{ names[6] }}
{{ names[7] }}
{{ names[8] }}
{{ names[9] }}
{{ names[10] }}
{{ names[11] }}
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComp, decorators: [{
type: Component,
args: [{
selector: 'my-comp',
template: `
{{{ names[3] }}
{{ names[4] }}
{{{ names[7] }}
{{ names[8] }}
{{ nam{{ names[11] }}
  `
}]
}], propDecorators: { names: [{
type: Input
}] } });
export class MyApp {
constructor() {
this.n0 = 'a';
this.n1 = 'b';
this.n2 = 'c';
this.n3 = 'd';
this.n4 = 'e';
this.n5 = 'f';
this.n6 = 'g';
this.n7 = 'h';
this.n8 = 'i';
}
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
  <my-comp [names]="['start-', n0, n1, n2, n3, n4, '-middle-', n5, n6, n7, n8, '-end']">
  </my-comp>
`, isInline: true, dependencies: [{ kind: "component", type: MyComp, selector: "my-comp", inputs: ["names"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: template: `
  <my-comp [names]="['start-', n0, n1, n2, n3, n4, '-middle-', n5, n6, n7, n8, '-end']">
  </my-comp>
`
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComp, MyApp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComp, MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: array_literals_many.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
estatic ɵfac: i0.ɵɵFactoryDeclaration<MyComp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComp, "my-comp", never, { "names": { "alias": "names"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class MyApp {
n0: string;
n1: string;
n2: stn4: string;
n5: string;
n6: string;
n7: string;
n8: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComp, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: object_literals.js
 *****import * as i0 from "@angular/core";
export class ObjectComp {
}
ObjectComp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ObjectComp, deps: [], target: i0.ɵɵFactoryTarget.Component });
O<p> {{ config.animation }} </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ObjectComp, decorators: [{
type: Component,
args: [{
selector: 'object-comp',
template: `
<p> {{ config['duration'] }} </p>
<p> {{ config.animation }} </p>
  `
}]
}], propDecorators: { config: [{
type: Input
}] } });
export class MyApp {
constructor() {
this.name = 'slide';
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
M`, isInline: true, dependencies: [{ kind: "component", type: ObjectComp, selector: "object-comp", inputs: ["config"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: selector: 'my-app',
template: `
  <object-comp [config]="{'duration': 500, animation: name}"></object-comp>
`
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [ObjectComp, MyApp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [ObjectComp, MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: object_literals.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class ObjectComp {
config: {
[key: string]: any;
};
static ɵfac: i0.ɵɵFactoryDeclaration<ObjectComp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ObjectComp, "object-comp", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class MyApp {
nstatic ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
exportstatic ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof ObjectComp, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: literal_nested_expression.js
 ****************************************************************************************************/
import { Component, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class NestedComp {
}
NestedComp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NestedComp, deps: [], target: i0.ɵɵFactoryTarget.Component });
NestedComp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: NestedComp, selector: "nested-comp", inputs: { config: "config" }, ngImport: i0, template: `
<p> {{ config.animation }} </p>
<p> {{config.actions[0].opacity }} </p>
<p> {{config.actions[1].duration }} </p>
  `, itype: Component,
args: [{
selector: 'nested-comp',
template: `
<p> {{ config.animation }} </p>
<p> {{config.actions[0].opacity }} </p>
<p> {{config.actions[1].duration }} </p>
  `
}]
}], propDecorators: { config: [{
type: Input
}] } });
ethis.name = 'slide';
this.duration = 100;
}MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
 `, isInline: true, dependencies: [{ kind: "component", type: NestedComp, selector: "nested-comp", inputs: ["config"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
selector: 'my-app',
template: `
  <nested-comp [config]="{animation: name, actions: [{ opacity: 0, duration: 0}, {opacity: 1, duration: duration }]}">
  </nested-comp>
`
}]
}] });
export class MyModule {
}MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [NestedComp, MyApp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [NestedComp, MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: literal_nested_expression.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class NestedComp {
config: {
[key: string]: any;
}static ɵcmp: i0.ɵɵComponentDeclaration<NestedComp, "nested-comp", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class MyApp {
name: string;
duration: number;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
sexport declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof NestedComp, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: number_separator.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.multiplier = 5;
}MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
<div>Total: \${{ 1_000_000 * multiplier }}</div>
<span>Remaining: \${{ 123_456.78_9 / 2 }}</span>
  `, isInline: true });
i0.ɵɵnargs: [{
selector: 'my-app',
template: `
<div>Total: \${{ 1_000_000 * multiplier }}</div>
<span>Remaining: \${{ 123_456.78_9 / 2 }}</span>
  `
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyApp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
a * PARTIAL FILE: number_separator.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
mstatic ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}