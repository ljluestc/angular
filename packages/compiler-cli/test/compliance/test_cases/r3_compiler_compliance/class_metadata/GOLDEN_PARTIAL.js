/****************************************************************************************************
 * PARTIAL FILE: custom.js
 ****************************************************************************************************/
export function CustomClassDecorator() {
return (clazz) => clazz;
}
export function CustomPropDecorator() {
return () => { };
}
export function CustomParamDecorator() {
return () => { };
}if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ?};
import { Component, Injectable } from '@angular/core';
import { CustomClassDecorator } from './custom';export class BasicInjectable {
}
BasicInjectable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACi0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: BasicInjectable, decorators: [{
type: Injectable
}] });
export class RootInjectable {
}
RootInjectable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: RootInjectable, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RootInjectable.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: RootInjectable, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: RootInjectable, decorators: [{
type: Injectable,
args: [{ providedIn: 'root' }]
}] });
let CustomInjectable = class CustomInjectable {
};
CustomInjectable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: CustomInjectable, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustomInjectable.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: CustomInjectable });
CustomInjectable = __decorate([
CustomClassDecorator()
], CustomInjectable);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: CustomInjectable, decorators: [{
type: Injectable
}] });
export class ComponentWithExternalResource {
}
ComponentWithExternalResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ComponentWithExternalResource, deps: [], target: i0.ɵɵFactoryTarget.Component });
ComponentWithExternalResource.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: ComponentWithExternalResource, selector: "test-cmp", ngImport: i0, template: "<span>Test template</span>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ComponentWithExternalResource, decorators: [{
type: Component,
args: [{ selector: 'test-cmp', template: "<span>Test template</span>\n" }]
}] });/****************************************************************************************************
 * PARTIAL FILE: class_decorators.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportstatic ɵprov: i0.ɵɵInjectableDeclaration<BasicInjectable>;
}
export declare class RootInjectable {
static ɵfac: i0.ɵɵFactoryDeclaration<RootInjectable, never>;
staticexport declare class ComponentWithExternalResource {
static ɵfac: i0.ɵɵFactoryDeclaration<ComponentWithExternalResource, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<ComponentWithExternalResource, "test-cmp", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARexport function CustomClassDecorator() {
return (clazz) => clazz;
}
e}
export}/****************************************************************************************************
 * PARTIAL FILE: custom.d.ts
 ****************************************************************************************************/
eexport declare function CustomParamDecorator(): (target: Object, ...rest: any[]) => void;/****************************************************************************************************
 * PARTIAL FILE: property_decorators.js
 ****************************************************************************************************/
vif (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
}if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflectimport { Directive, Input, Output } from '@angular/core';
import { CustomPropDecorator } from './custom';
import * as i0 from "@angular/core";
eMyDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MyDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyDir, inputs: { foo: "foo", bar: ["baz", "bar"], mixed: "mixed" }, outputs: { mixed: "mixed" }, ngImport: i0 });
__decorate([
C], MyDir.prototype, "custom", void 0);CustomPropDecorator(),
__metadata("design:type", String)
], MyDir.prototype, "mixed", void 0);
i}], propDecorators: { foo: [{
type: Input
}], bar: [{
type: Input,
args: ['baz']
}], custom: [], mixed: [{}, {
type: Output
}] } });/****************************************************************************************************
 import * as i0 from "@angular/core";
export declare class MyDir {
foo: string;
bar: string;
custom: string;
mixed: string;static ɵfac: i0.ɵɵFactoryDeclaration<MyDir, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<MyDir, never, never, { "foo": { "alias": "foo"; "required": false; }; "bar": { "alias": "baz"; "required": false; }; "mixed": { "alias": "mixed"; "required": false; }; }, { "mixed": "mixed"; }, never, never, false, never>;
}/****** ****************************************************************************************************/
export function CustomClassDecorator() {
return (clazz) => clazz;
}
export function CustomPropDecorator() {
return () => { };
}
export function CustomParamDecorator() {
return () => { };
}/****************************************************************************************************
 * PARTIAL FILE: custom.d.ts
 ****************************************************************************************************/
eexport  ****************************************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable, InjectionToken, SkipSelf } from '@angular/core';
iexport constructor(service, token, custom, mixed) { }
};
ParameterizedInjectable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ParameterizedInjectable, deps: [{ token: Service }, { token: TOKEN }, { token: Service }, { token: TOKEN, skipSelf: true }], target: i0.ɵɵFactoryTarget.Injectable });
ParameterizedInjectable.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ParameterizedInjectable });
ParameterizedInjectable = __decorate([
__param(2, CustomParamDecorator()),
__param(3, CustomParamDecorator()),
__metadata("design:paramtypes", [Service, String, Service, String])
], ParameterizedInjectable);
etype: Injectable
}], ctorParameters: function () { return [{ type: Service }, { type: undefined, decorators: [{
type: Inject,
atype: I}] }]; } });
export class NoCtor {
}
NoCtor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NoCtor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NoCtor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NoCtor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NoCtor, decorators: [{
type: Injectable
}] });
export class EmptyCtor {
cEmptyCtor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EmptyCtor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EmptyCtor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EmptyCtor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EmptyCtor, decorators: [{
texport class NoDecorators {}
NoDecorators.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NoDecorators, deps: [{ token: Service }], target: i0.ɵɵFactoryTarget.Injectable });
NoDecorators.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NoDecorators });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NoDecorators, decorators: [{
type: Injectable
}], ctorParameters: function () { return [{ type: Service }]; } });
let CustomInjectable = class CustomInjectable {
constructor(service) { }
};
CustomInjectable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: CustomInjectable, deps: [{ token: Service }], target: i0.ɵɵFactoryTarget.Injectable });
CustomInjectable.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: CustomInjectable });
C__metadata("design:paramtypes", [Service])
], CustomInjectable);
export { CustomInjectable };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: CustomInjectable, decorators: [{
type: Injectable
}], ctorParameters: function () { return [{ type: Service, decorators: [] }]; } });}
DerivedInjectable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DerivedInjectable, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
DerivedInjectable.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DerivedInjectable });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DerivedInjectable, decorators: [{
type: Injectable
}] });
export class DerivedInjectableWithCtor extends ParameterizedInjectable {
constructor() {
super(null, '', null, '');
}
}
DerivedInjectableWithCtor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DerivedInjectableWithCtor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DerivedInjectableWithCtor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DerivedInjectableWithCtor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DerivedInjectableWithCtor, decorators: [{
type: Injectable
}], ctorParameters: function () { return []; } });/****************************************************************************************************
 * PARTIAL FILE: parameter_decorators.d.ts
 ****************************************************************************************************/
import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export declare const TOKEN: InjectionToken<string>;
declare class Service {
}
export declare class ParameterizedInjectable {
constructor(service: Service, token: string, custom: Service, mixed: string);
static ɵfac: i0.ɵɵFactoryDeclaration<ParameterizedInjectable, [null, null, null, { skipSelf: true; }]>;
static ɵprov: i0.ɵɵInjectableDeclaration<ParameterizedInjectable>;
}
export declare class NoCtor {
static ɵfac: i0.ɵɵFactoryDeclaration<NoCtor, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<NoCtor>;
}
export declare class EmptyCtor {
constructor();
static ɵfac: i0.ɵɵFactoryDeclaration<EmptyCtor, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<EmptyCtorexport declare class NoDecorators {
constructor(service: Service);
static ɵfac: i0.ɵɵFactoryDeclaration<NoDecorators, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<NoDecorators>;
}
export declare class CustomInjectable {
constructor(service: Service);
static ɵfac: i0.ɵɵFactoryDeclaration<CustomInjectable, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<CustomInjectable>;
}
export declare class DerivedInjectable extends ParameterizedInjectable {
static ɵfac: i0.ɵɵFactoryDeclaration<DerivedInjectable, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<DerivedInjectable>;
}
export declare class DerivedInjectableWithCtor extends ParameterizedInjectable {
constructor();
static ɵfac: i0.ɵɵFactoryDeclaration<DerivedInjectableWithCtor, never>;
static ɵprov: i0.ɵɵInjectableDeclaration<DerivedInjectableWithCtor>;
}
export {};