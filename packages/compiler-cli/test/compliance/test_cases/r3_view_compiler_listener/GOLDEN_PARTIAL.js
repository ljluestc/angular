/****************************************************************************************************
 * PARTIAL FILE: element_listener.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
onClick(event) { }
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<div (click)="onClick($event); 1 == 1"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{ selector: 'my-component', template: `<div (click)="onClick($event); 1 == 1"></div>` }]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: component_listener.js
 import * as i0 from "@angular/core";
export class MyApp {
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `<div>My App</div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
t}] });
export class MyComponent {
oMyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<my-app (click)="onClick($event);"></my-app>`, isInline: true, dependencies: [{ kind: "component", type: MyApp, selector: "my-app" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{ selector: 'my-component', template: `<my-app (click)="onClick($event);"></my-app>` }]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent, MyApp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: component_listener.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportstatic ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
export declare class MyComponent {
onClick(event: any): void;
static}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent, typeof MyApp], never, never>;
static * PARTIAL FILE: shared_snapshot_listeners.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
exportMyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
<div *ngIf="showing">
  <div (click)="onClick(foo)"></div>
  <button (click)="onClick2(bar)"></button>
<i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: `
<div *ngIf="showing">
 </div>
  `
}]
}] });
export class MyModule {
}
MMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: shared_snapshot_listeners.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
onClick(name: any): void;
onClick2(name: any): void;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
staticexport declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: local_ref_before_listener.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
importonClick(v) { }
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
<  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
select<button (click)="onClick(user.value)">Save</button>
<input #user>
  `
}]
}}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵnargs: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: local_ref_before_listener.d.ts
 ****************************************************************************************************/
ionClick(v: any): void;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static * PARTIAL FILE: same_element_chained_listeners.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
iclick() { }
change() { }
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<div (click)="click()" (change)="change()"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: }] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: same_element_chained_listeners.d.ts
 ****************************************************************************************************/
importstatic ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: cross_element_chained_listeners.js
 *****import * as i0 from "@angular/core";
export class SomeComp {
constructor() {
this.uSomeComp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeComp, deps: [], target: i0.ɵɵFactoryTarget.Component });
SomeComp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SomeComp, selector: "some-comp", outputs: { update: "update", delete: "delete" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeComp, decorators: [{
type: Component,
args: [{
selector: 'some-comp',
template: '',
}type: Output
}], delete: [{
type: export class MyComponent {
click() { }
change() { }
delete() { }
uMyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div (click)="click()" (change)="change()"></div>
  <some-comp (update)="update()" (delete)="delete()"></some-comp>
`, isInline: true, dependencies: [{ kind: "component", type: SomeComp, selector: "some-comp", outputs: ["update", "delete"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
s  <div (click)="click()" (change)="change()"></div>
  <some-comp (update)="update()" (delete)="delete()"></some-comp>
`}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent, SomeComp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, SomeComp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: cross_element_chained_listeners.d.ts
 ****************************************************************************************************/
import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
edelete: EventEmitter<any>;
static ɵfac: i0.ɵɵFactoryDeclaration<SomeComp, never>;
staticexport declare class MyComponent {
click(): void;
change(): void;
delete(): void;
update(): void;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
staticstatic ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: template_chained_listeners.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
i}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<ng-template (click)="click()" (change)="change()"></ng-template>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: `<ng-template (click)="click()" (change)="change()"></ng-template>`
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModui0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
t}] });/****************************************************************************************************
 * PARTIAL FILE: template_chained_listeners.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: no_event_arg_listener.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
onClick() { }
}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `<div (click)="onClick();"></div>`, isInline: true });
iargs:  * PARTIAL FILE: no_event_arg_listener.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
onClick(): void;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: no_event_arg_host_listener.js
 ****************************************************************************************************/
import { Component, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
eclick() {
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", host: { listeners: { "mousedown": "mousedown()", "click": "click()" } }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: host: {
'}]}] } });/****************************************************************************************************
 * PARTIAL FILE: no_event_arg_host_listener.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
mousedown(): void;
click(): void;
s}/****************************************************************************************************
 * PARTIAL FILE: has_event_arg_host_listener.js
 ****************************************************************************************************/
import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
e}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MyComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, host: { listeners: { "click": "click($event.target)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Directive
}], propDecorators: { click: [{
type: HostListener,
args: ['click', ['$event.target']]
}] } });/****************************************************************************************************
 importstatic ɵ * PARTIAL FILE: event_arg_listener_implicit_meaning.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
class Comp {
c(event) { }
}
Ciargs: [{ template: '<div (click)="c($event)"></div>' }]
}] });/****************************************************************************************************
 * PARTIAL FILE: event_arg_listener_implicit_meaning.d.ts
 ****************************************************************************************************/
export {};/****************************************************************************************************
 import { Component } from '@angular/core';
import * as i0 from "@angular/core";
class Comp {
constructor() {
this.$event = {};
}
c(value) { }
}
Comp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Comp, deps: [], target: i0.ɵɵFactoryTarget.Component });
Comp.ɵcmtype: Component,
args: [{ template: '<div (click)="c(this.$event)"></div>' }]
}] });/****************************************************************************************************
 * PAR *******}
DivDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DivDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DivDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: DivDir, selector: "div", inputs: { event: "event" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DivDir, decorators: [{
type: Directive,
args: [{ selector: 'div' }]
}], propDecorators: { event: [{
tcthis.$event = 1;
}Comp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Comp, deps: [], target: i0.ɵɵFactoryTarget.Component });
Comp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: Comp, selector: "ng-component", ngImport: i0, template: '<div [event]="$event"></div>', isInline: true, dependencies: [{ kind: "directive", type: DivDir, selector: "div", inputs: ["event"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Comp, decorators: [{
type: Comp}] });
eMyMod.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyMod, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyMod.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyMod, declarations: [Comp, DivDir] });
MyMod.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyMod });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyMod, decorators: [{
type: NgModule,
args: [{ declarations: [Comp, DivDir] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: event_in_property_binding.d.ts
 ****************************************************************************************************/
import *event: any;
static ɵfac: i0.ɵɵFactoryDeclaration<DivDir, never>;
staticexport declare class MyMod {
static ɵfac: i0.ɵɵFactoryDeclaration<MyMod, never>;
static ****************************************************************************************************/
import {}
Dir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Dir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
Dir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: Dir, host: { listeners: { "click": "c($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Dir, decorators: [{
type: Directive,
args: [{ host: { '(click)': 'c($event)' } }]
}] });/****************************************************************************************************
 e ****************************************************************************************************/
importclass Dir {
constructor() {
this.$event = {};
}}
Dir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Dir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
Dir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: Dir, host: { listeners: { "click": "c(this.$event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Dir, decorators: [{
type: Directive,
args: [{
host: {
'(click)': 'c(this.$event)',
}
}] * PARTIAL FILE: event_host_explicit_access.d.ts
 ****************************************************************************************************/
export {};/****************************************************************************************************
 * PARTIimport { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
exportthis.message = '';
}
}
MyComponen</ng-template>
  `, isInline: true });
i0.ɵɵngDtemplate: `
<ng-template #template>
  <button (click)="this['mes' + 'sage'] = 'hello'">Click me</button>
</ng-template>
  `
}]
}] });}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
M}] });/****************************************************************************************************
 * PARimport * as i0 from "@angular/core";
export declare class MyComponent {
message: string;
static ɵfa}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: embedded_view_listener_context.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
importMyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
<ng-template let-obj>
  <button   `, isInline: true });
i0.ɵɵngDargs: [{
selector: 'my-component',
templa  <button (click)="obj.value = 1">Change</button>
</ng-template>
  `
}]MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
iargs: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: embedded_view_listener_context.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
staticexport declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵin