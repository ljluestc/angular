/****************************************************************************************************
 * PARTIAL FILE: component_factory.js
 ****************************************************************************************************/
import { Attribute, Component, Host, Injectable, NgModule, Optional, Self, SkipSelf } from '@angular/core';
import * as i0 from "@angular/core";
export class MyService {
}
MyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, decorators: [{
type: Injectable
}] });
function dynamicAttrName() {
return 'the-attr';
}
export class MyComponent {
constructor(name, other, s1, s2, s4, s3, s5, s6) { }
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [{ token: 'name', attribute: true }, { token: dynamicAttrName(), attribute: true }, { token: MyService }, { token: MyService, host: true }, { token: MyService, self: true }, { token: MyService, skipSelf: true }, { token: MyService, optional: true }, { token: MyService, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{ selector: 'my-component', template: `` }]
}], ctorParameters: function () { return [{ type: undefined, decorators: [{
type: Attribute,
args: ['name']
}] }, { type: undefined, decorators: [{
type: Attribute,
args: [dynamicAttrName()]
}] }, { type: MyService }, { type: MyService, decorators: [{
type: Host
}] }, { type: MyService, decorators: [{
type: Self
}] }, { type: MyService, decorators: [{
type: SkipSelf
}] }, { type: MyService, decorators: [{
type: Optional
}] }, { type: MyService, decorators: [{
type: Self
}, {
type: Optional
}] }]; } });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, providers: [MyService] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent], providers: [MyService] }]
}] });static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, [{ attribute: "name"; }, { attribute: unknown; }, null, { host: true; }, { self: true; }, { skipSelf: true; }, { optional: true; }, { optional: true; self: true; }]>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: injectable_factory.js
 import * as i0 from "@angular/core";
class MyDependency {
}constructor(dep) { }
}
Mi0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, decorators: [{
type: Injectable
} ****************************************************************************************************/
import * as i0 from "@angular/core";
dstatic ɵfac: i0.ɵɵFactoryDeclaration<MyService, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<MyService>;
} * PARTIAL FILE: ctor_overload.js
 ****************************************************************************************************/
import { Injectable, Optional } from '@angular/core';
import * as i0 from "@angular/core";
class MyDependency {export class MyService {
constructor(dep, optionalDep) { }
}
MyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, deps: [{ token: MyDependency }, { token: MyOptionalDependency, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
MyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", versitype: Optional
}] }]; } });/****************************************************************************************************
 * PARTIAL FILE: ctor_overload.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";constructor(dep: MyDependency);
static ɵfac:}
export {};/****************************************************************************************************
 * PARTIAL FILE: usefactory_without_deps.js
 ****************************************************************************************************/
import { Iclass MyAlternateService {
}
function alt}
export claMyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, providedIn: 'root', useFactory: alternateFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, decorators: [{
type: Inje}] });/****************************************************************************************************
 * PARTIAL FILE: usefactory_without_deps.d.ts
 ***********export declare class MyService {
static ɵfa}/****************************************************************************************************
 * PARTIAL FILE: usefactory_with_deps.js
 ****************************************************************************************************/
import { Injectable, Optional } from '@angular/core';
import * as i0 from "@angular/core";
class class MyAlternateService {
constructor(dep, optional) { }
}}
MyService.iargs: [{
providedIn: 'root',
useFactory: (dep, optional) => new MyAlternateService(dep, optional),
deps: [SomeDep, [new Optional(), SomeDep]]
}]
}] }); ****************************************************************************************************/
import * as i0 from "@angular/core";
export declastatic ɵprov: i0.ɵɵInjectableDeclaration<MyService>;
}/******** import * as i0 from "@angular/core";
class MyAlternateService {
}
MyAlternateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyAlternateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyAlternateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyAlternateService });
i0.ɵɵn}
MyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, providedIn: 'root', useClass: MyAlternateService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, decorators: [{
type: Injectable,
a * PARTIAistatic ɵfac: i0.ɵɵFactoryDeclaration<MyService, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<MyService>;
}/****************************************************************************************************
 * PARTIAL FILE: useclass_with_deps.js
 ****************************************************************************************************/
importclass MyAlternateService {
}
MyAlternateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyAlternateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyAlternateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyAlternateService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyAlternateService, decorators: [{
tMyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyService, providedIn: 'root', useClass: MyAlternateService, deps: [{ token: SomeDep }] });
iargs: [{ providedIn: 'root', useClass: MyAlternateService, deps: [SomeDep] }]
}] });/****************************************************************************************************
 import * as i0 from "@angular/core";
export declare class MyService {
static ɵfac: i0.ɵɵFactoryDeclaration<MyService, never>;
staticimport { forwardRef, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
class SomeProvider {
}
SomeProvider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeProvider, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
S}] });
class SomeProviderImpl extends SomeProvider {
}SomeProviderImpl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeProviderImpl });
i0.ɵɵn}] });/****************************************************************************************************
 export {};/****************************************************************************************************
 * PARTIAL FILE: providedin_forwardref.js
 ****************************************************************************************************/
importDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Dep, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Dep.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Dep });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Dep, decorators: [{
type: Injectable
}] });
export class Service {
constructor(dep) { }
}type: Injectable,
args: [{ providedIn: forwardRef(() => Mod) }]
}], ctorParameters: function () { return [{ type: Dep }]; } });
export class Mod {
}
Mod.ɵfMod.ɵitype: NgModule
} *********export declare class Dep {
static ɵfac: i0.ɵɵFactoryDeclaration<Dep, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<Dep>;
}static ɵprov: i0.ɵɵInjectableDeclaration<Service>;
}
export declare class Mod {
static ɵfac: i0.ɵɵFactoryDeclaration<Mod, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<Mod, never, never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<Mod>;
}/****************************************************************************************************
 class Service {
}
Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Service });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Service, decorators: [{
type: exporttransform(value, ...args) {
rMyPipe.ɵpii0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyPipe, decorators: [{
type: Injectable
}, {
type: Pipe,
aexport class MyOtherPipe {
constructor(service) { }
transform(value, ...args) {
return value;
}
}
MyOtherPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyOtherPipe, deps: [{ token: Service }], target: i0.ɵɵFactoryTarget.Pipe });
Mi0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyOtherPipe, decorators: [{
type: Pipe,
args: type: Injectable
}], ctorParameters: function () { return [{ type: Service }]; } });
export class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "my-app", ngImport: i0, template: '{{0 | myPipe | myOtherPipe}}', isInline: true, dependencies: [{ kind: "pipe", type: MyPipe, name: "myPipe" }, { kind: "pipe", type: MyOtherPipe, name: "myOtherPipe" }] });
i0.ɵɵnargs: export class MyModule {
}i0.ɵɵngDecargs: [{ declarations: [MyPipe, MyOtherPipe, MyApp], providers: [Service] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: pipe_and_injectable.d.ts
 ****************************************************************************************************/
ideclare class Service {
static ɵfac: i0.ɵɵFactoryDeclaration<Service, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<Service>;
}
export declare class MyPipe implements PipeTransform {
constructor(service: Service);
transform(value: any, ...args: any[]): any;
sstatic ɵprov: i0.ɵɵInjectableDeclaration<MyPipe>;
}
export declare class MyOtherPipe implements PipeTransform {
constructor(service: Service);
transform(value: any, ...args: any[]): any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyOtherPipe, never>;
static ɵpipe: i0.ɵɵPipeDeclaration<MyOtherPipe, "myOtherPipe", false>;
static ɵprov: i0.ɵɵInjectableDeclaration<MyOtherPipe>;
}
export declare class MyApp {
static}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static}
export {};