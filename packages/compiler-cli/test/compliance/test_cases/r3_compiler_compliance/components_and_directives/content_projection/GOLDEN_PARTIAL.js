/****************************************************************************************************
 * PARTIAL FILE: root_template.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class SimpleComponent {
}
SimpleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SimpleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SimpleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SimpleComponent, selector: "simple", ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SimpleComponent, decorators: [{
type: Component,
args: [{ selector: 'simple', template: '<div><ng-content></ng-content></div>' }]
}] });
export class ComplexComponent {
}
ComplexComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ComplexComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ComplexComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ComplexComponent, selector: "complex", ngImport: i0, template: `
<div id="first"><ng-content select="span[title=toFirst]"></ng-content></div>
<div id="second"><ng-content SELECT="span[title=toSecond]"></ng-content></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ComplexComponent, decorators: [{
type: Component,
args: [{
selector: 'complex',
template: `
<div id="first"><ng-content select="span[title=toFirst]"></ng-content></div>
<div id="second"><ng-content SELECT="span[title=toSecond]"></ng-content></div>`
}]
}] });
export class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: '<simple>content</simple> <complex></complex>', isInline: true, dependencies: [{ kind: "component", type: SimpleComponent, selector: "simple" }, { kind: "component", type: ComplexComponent, selector: "complex" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{ selector: 'my-app', template: '<simple>content</simple> <complex></complex>' }]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [SimpleComponent, ComplexComponent, MyApp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [SimpleComponent, ComplexComponent, MyApp] }]
}] });export declare class ComplexComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<ComplexComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ComplexComponent, "complex", never, {}, {}, never, ["span[title=toFirst]", "span[title=toSecond]"], false, never>;
}
export declare class MyApp {
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof SimpleComponent, typeof ComplexComponent, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: multiple_wildcards.js
 import * as i0 from "@angular/core";
class Cmp {
}Cmp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: Cmp, selector: "ng-component", ngImport: i0, template: `
<ng-content></ng-content>
<  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Cmp, decorators: [{
ttemplate: `
<ng-content></ng-content>
<ng-content select="[spacer]"></ng-content>
<ng-content></ng-content>
  `,
}]
}] });
class Module {
}
Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, declarations: [Cmp] });
Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, decorators: [{
type: NgModule,
args: [{ declarations: [Cmp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: multiple_wildcards.d.ts
 ****************************************************************************************************/
export {};/****************************************************************************************************
 * PARimport { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
class Cmp {
}Cmp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: Cmp, selector: "ng-component", ngImport: i0, template: `
<div i</div>
<div id="third" *ngIf="visible">
  No ng-content, no instructions generated.
</div>  '*' selector: <ng-content></ng-content>
</ng-ti0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Cmp, decorators: [{
type: Component,
args: [{
template:   <ng-content SELECT="span[title=toFirst]"></ng-content>
</div>  No ng-content, no instructions generated.
</div>
<ng-template>
  '*' sele  `,
}]
}] });
class Module {
}
Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, declarations: [Cmp] });
Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, decorators: [{
type: NgModule,
args: [{ declarations: [Cmp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: nested_template.d.ts
 ****************************************************************************************************/
export {};/****************************************************************************************************
 * PARTIAL FILE: root_and_nested.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
class Cmp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Cmp, deps: [], target: i0.ɵɵFactoryTarget.Component });
Cmp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: Cmp, selector: "ng-component", ngImport: i0, template: `
<ng-content select="[id=toMainBefore]"></ng-content>
<ng-templa  <ng-template>
<ng-content select="[id=toNestedTemplate]"></ng-content>
  </ng-template>
</ng-template>
<ng-template>
  '*' <ng-content select="[id=toMainAfter]"></ng-content>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Cmp, decorators: [{
type: Comptemplate: `
<ng-content select="[id=toMainBefore]"></ng-content>
<ng-template>
  <ng-content select="[id=toTemplate]"></ng-content>
  <ng-template>
<ng-co</ng-template>
<ng-template>
  '*' selector in a template: <ng-content></ng-content>
</ng-templ  `,
}]
}] });
class Module {
}
ModuleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, decorators: [{
type: NgModule,
args: [{ d * PARTIAL FILE: root_and_nested.d.ts
 ****************************************************************************************************/
export {};/****************************************************************************************************
 * PARTIAL FILE: ng_project_as_selector.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class SimpleComponent {
}
SimpleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SimpleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SimpleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SimpleComponent, selector: "simple", ngImport: i0, template: '<div><ng-content select="[title]"></ng-content></div>', isInline: true });
i0.ɵɵnargs: [{ selector: 'simple', template: '<div><ng-content select="[title]"></ng-content></div>' }]
}] });
export class MyApp {
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: '<simple><h1 ngProjectAs="[title]"></h1></simple>', isInline: true, dependencies: [{ kind: "component", type: SimpleComponent, selector: "simple" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{ selector: 'my-app', template: '<simple><h1 ngProjectAs="[title]"></h1></simple>' }]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyApp, SimpleComponent] });
MyModutype: NgModule,
args: [{ declarations: [MyApp, SimpleComponent] }]
}] });/****************************************************************************************************
 * PARTIALimport * as i0 from "@angular/core";
export declare class SimpleComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<SimpleComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<SimpleComponent, "simple", never, {}, {}, never, ["[title]"], false, never>;
}
export declare class MyApp {
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
exportstatic ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyApp, typeof SimpleComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/**** ****************************************************************************************************/
import { Cexport class SimpleComponent {
}
SimpleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SimpleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SimpleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SimpleComponent, selector: "simple", ngImport: i0, template: '<div><ng-content select="[title]"></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SimpleComponent, decorators: [{
type: Component,
args: [{ selector: 'simple', template: '<div><ng-content select="[title]"></ng-content></div>' }]
}] });
export class MyApp {
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: '<simple><h1 ngProjectAs="[title],[header]"></h1></simple>', isInline: true, dependencies: [{ kind: "component", type: SimpleComponent, selector: "simple" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
t}] })}
MyModule.ɵMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [SimpleComponent, MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: ng_project_as_compound_selector.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class SimpleComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<SimpleComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<SimpleComponent, "simple", never, {}, {}, never, ["[title]"], false, never>;
}
export declare class MyApp {
s}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof SimpleComponent, typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: ng_project_as_attribute.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
importconstructor() {
this.show = true;
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: '<div *ngIf="show" ngProjectAs=".someclass"></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{ selector: 'my-app', template: '<div *ngIf="show" ngProjectAs=".someclass"></div>' }]
} ****export declare class MyApp {
show: boolean;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
s * PARTIAL FILE: ng_content_with_structural_dir.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
exportSimpleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SimpleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SimpleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SimpleComponent, selector: "simple", ngImport: i0, template: '<ng-content *ngIf="showContent"></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SimpleComponent, decorators: [{
type: Component,
args: [{ selector: 'simple', template: '<ng-content *ngIf="showContent"></ng-content>' }]
}] });/****************************************************************************************************
 * PARTIAL FILE: ng_content_with_structural_dir.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
e