/****************************************************************************************************
 * PARTIAL FILE: component_host_binding_slots.js
 ****************************************************************************************************/
import { Component, HostBinding, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.myStyle = { width: '100px' };
this.myClass = { bar: false };
this.id = 'some id';
this.title = 'some title';
this.name = '';
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", inputs: { name: "name" }, host: { attributes: { "title": "foo title" }, properties: { "style": "this.myStyle", "class": "this.myClass", "id": "this.id", "title": "this.title" }, styleAttribute: "width:200px; height:500px", classAttribute: "foo baz" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: '',
host: { 'style': 'width:200px; height:500px', 'class': 'foo baz', 'title': 'foo title' }
}]
}], propDecorators: { myStyle: [{
type: HostBinding,
args: ['style']
}], myClass: [{
type: HostBinding,
args: ['class']
}], id: [{
type: HostBinding,
args: ['id']
}], title: [{
type: HostBinding,
args: ['title']
}], name: [{
type: Input,
args: ['name']
}] } });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });};
id: string;
title: string;
name: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, { "name": { "alias": "name"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: directive_host_binding_slots.js
 import * as i0 from "@angular/core";
export class WidthDirective {
cthis.myFooClass = true;
this.id = 'some id';
t}
WidthDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: WidthDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
Wtype: Directive,
args: [{ selector: '[myWidthDir]' }]
}args: ['style.width']
}], myFooClass: [{
type: HostBinding,
args: ['class.foo']
}], id: [{
type: HostBinding,
args: ['id']
}], title: [{
type: HostBinding,
args: ['title']
}] } });/****************************************************************************************************
 * PARTIAL FILE: directive_host_binding_slots.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export dmyFooClass: boolean;
id: string;
title: string;
static ɵfac: i0.ɵɵFactoryDeclaration<WidthDirective, never>;
static ɵ * PARTIAL FILE: host_binding_slots.js
 ****************************************************************************************************/
import { Component, Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export cthis._animValue = null;
this._animParam1 = null;
this._animParam2 = null;
}
}type: Directive,
args: [{
selector: '[my-dir]',
host: {
'[title]  params: {
param1: _animParam1,
param2: _animParam2
  }
}`
}}] });
export class MyAppComp {
}
MyAppComp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyAppComp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyAppComp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyAppComp, selector: "my-app", ngImport: i0, template: `
<div my-dir></div>
 type: Component,
args: [{
selector: 'my-app',
template: `
<div my-dir></div>
  `
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyAppComp, MyDir] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyAppComp, MyDir] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: host_binding_slots.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyDir {
title: string;
foo: boolean;
_animValue: null;
_animPstatic ɵfac: i0.ɵɵFactoryDeclaration<MyDir, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<MyDir, "[my-dir]", never, {}, {}, never, never, false, never>;
}
export declare class MyAppComp {
static ɵfac: i0.ɵɵFactoryDeclaration<MyAppComp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyAppComp, "my-app", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
staticstatic ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}