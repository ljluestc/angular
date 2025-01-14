/****************************************************************************************************
 * PARTIAL FILE: nullish_coalescing_interpolation.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.firstName = null;
this.lastName = null;
this.lastNameFallback = 'Baggins';
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
<div>Hello, {{ firstName ?? 'Frodo' }}!</div>
<span>Your last name is {{ lastName ?? lastNameFallback ?? 'unknown' }}</span>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
selector: 'my-app',
template: `
<div>Hello, {{ firstName ?? 'Frodo' }}!</div>
<span>Your last name is {{ lastName ?? lastNameFallback ?? 'unknown' }}</span>
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
args: [{ declarations: [MyApp] }]
}] });}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: nullish_coalescing_property.js
 import * as i0 from "@angular/core";
export class MyApp {
cthis.lastName = null;
this.lastNameFallback = 'Baggins';
}MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: `
<  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
tselector: 'my-app',
template: `
<div [title]="'Hello, ' + (firstName ?? 'Frodo') + '!'"></div>
<span [title]="'Your last name is ' + lastName ?? lastNameFallback ?? 'unknown'"></span>
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
args: [{ declarations: [MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: nullish_coalescing_property.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportlastName: string | null;
lastNameFallback: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARimport { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
cthis.lastName = null;
this.llogLastName(name) {
console.log(name);
}
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", host: { listeners: { "click": "logLastName(lastName ?? lastNameFallback ?? 'unknown')" }, properties: { "attr.first-name": "'Hello, ' + (firstName ?? 'Frodo') + '!'" } }, ngImport: i0, template: ``, isInline: true });
i0.ɵɵnargs: [{
selector: 'my-app',
host: {
'},
template: ``
}]
}] });
export class MyModule {
}
MMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyApp] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: nullish_coalescing_host.d.ts
 export declare class MyApp {
firstName: string | null;
lastName: string | null;
lastNameFallback: string;
logLasstatic ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "my-app", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyApp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}