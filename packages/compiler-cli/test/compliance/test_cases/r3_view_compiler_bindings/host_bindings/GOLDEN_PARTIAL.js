/****************************************************************************************************
 * PARTIAL FILE: host_bindings.js
 ****************************************************************************************************/
import { Directive, HostBinding, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class HostBindingDir {
constructor() {
this.dirId = 'some id';
}
}
HostBindingDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostBindingDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
HostBindingDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: HostBindingDir, selector: "[hostBindingDir]", host: { properties: { "id": "this.dirId" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostBindingDir, decorators: [{
type: Directive,
args: [{ selector: '[hostBindingDir]' }]
}], propDecorators: { dirId: [{
type: HostBinding,
args: ['id']
}] } });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [HostBindingDir] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [HostBindingDir] }]
}] });}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof HostBindingDir], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: host_bindings_with_temporaries.js
 import * as i0 from "@angular/core";
export class HostBindingDir {
}HostBindingDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: HostBindingDir, selector: "[hostBindingDir]", host: { properties: { "id": "getData()?.id" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostBindingDir, decorators: [{
t}] });
export class MyModule {
}MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [HostBindingDir] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [HostBindingDir] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: host_bindings_with_temporaries.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportid: number;
};
static ɵfac: i0.ɵɵFactoryDeclaration<HostBindingDir, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<HostBindingDir, "[hostBindingDir]", never, {}, {}, never, never, false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof HostBindingDir], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARimport { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class HostBindingComp {
c}
}HostBindingComp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: HostBindingComp, selector: "host-binding-comp", host: { properties: { "id": "[\"red\", id]" } }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostBindingComp, decorators: [{
type: Component,
aexport class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [HostBindingComp] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
t}] });/****************************************************************************************************
 * PARTIAL FILE: host_bindings_with_pure_functions.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class HostBindingComp {
id: string;
s}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof HostBindingComp], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: host_attribute_bindings.js
 ****************************************************************************************************/
import { Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
exportthis.required = true;
}
}
Hi0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostAttributeDir, decorators: [{
type: Directive,
args: [{ selector: '[hostAttributeDir]', host: { '[attr.required]': 'required' } }]
}] });
export class MyModule {
}MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [HostAttributeDir] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
t}] });/****************************************************************************************************
 * PARTIAL FILE: host_attribute_bindings.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class HostAttributeDir {
requirstatic ɵdir: i0.ɵɵDirectiveDeclaration<HostAttributeDir, "[hostAttributeDir]", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
sstatic * PARTIAL FILE: host_attributes.js
 ****************************************************************************************************/
import { Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class HostAttributeDir {
}
HostAttributeDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostAttributeDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
HostAttributeDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: HostAttributeDir, selector: "[hostAttributeDir]", host: { attributes: { "aria-label": "label" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostAttributeDir, decorators: [{
type: Directive,
aexportMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [HostAttributeDir] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: host_attributes.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class HostAttributeDir {
static ɵfac: i0.ɵɵFactoryDeclaration<HostAttributeDir, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<HostAttributeDir, "[hostAttributeDir]", never, {}, {}, never, never, false, never>;
}
export}/****************************************************************************************************
 * PARTIAL FILE: host_attributes_with_classes_and_styles.js
 ****************************************************************************************************/
import { Component, Directive, NgModule } from '@angular/core';
import}
HostAttributeComp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostAttributeComp, deps: [], target: i0.ɵɵFactoryTarget.Component });
HostAttributeComp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: HostAttributeComp, selector: "my-host-attribute-component", host: { attributes: { "title": "hello there from component" }, styleAttribute: "opacity:1" }, ngImport: i0, template: '...', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostAttributeComp, decorators: [{
type: Component,
args: [{
selector: 'my-host-attribute-component',
template: '...',
host: }HostAttributeDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: HostAttributeDir, selector: "[hostAttributeDir]", host: { attributes: { "title": "hello there from directive" }, properties: { "style.opacity": "true", "class.three": "true" }, styleAttribute: "width: 200px; height: 500px", classAttribute: "one two" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostAttributeDir, decorators: [{
type: Directive,
args: [{
select'style': 'width: 200px; height: 500px',
'[style.opacity]': 'true',
'class': 'one two',
'[class.three]': 'true',
'title': 'hello there from directive',
}
}]
}] });
export class MyModule {
}MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [HostAttributeComp, HostAttributeDir] });
Mtype: NgModule,
args: [{ declarations: [HostAttributeComp, HostAttributeDir] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: host_attributes_with_classes_and_styles.d.ts
 *****export declare class HostAttributeComp {
static ɵfac: i0.ɵɵFactoryDeclaration<HostAttributeComp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<HostAttributeComp, "my-host-attribute-component", never, {}, {}, never, never, false, never>;
}
export declare class HostAttributeDir {
static ɵfac: i0.ɵɵFactoryDeclaration<HostAttributeDir, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<HostAttributeDir, "[hostAttributeDir]", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof HostAttributeComp, typeof HostAttributeDir], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
} ****************************************************************************************************/
import { Directive } from '@angular/core';
importconstructor() {
this.myTitle = 'hello';
this.m}
MyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyDirective, selector: "[my-dir]", host: { properties: { "title": "myTitle", "tabindex": "1", "id": "myId" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, decorators: [{
type: Directive,
args: [{ selector: '[my-dir]', host: { '[title]': 'myTitle', '[tabindex]': '1', '[id]': 'myId' } }]
}] });/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_property_bindings.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyDirective {
myTitle: string;
m * PARTIAL FILE: chain_property_bindings_all.js
 ****************************************************************************************************/
importexport class MyDirective {
constructor() {
this.myTitle = 'hello';
this.myId = 'special-directive';
}
}
MyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyDirective, selector: "[my-dir]", host: { properties: { "tabindex": "1", "title": "this.myTitle", "id": "this.myId" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, decorators: [{
type: Directive,
args: type: HostBinding,
args: ['title']
}], myId: [{
type: HostBinding,
args: ['id']
}] } });/****************************************************************************************************
 import * as i0 from "@angular/core";
emyId: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<MyDirective, "[my-dir]", never, {}, {}, never, never, false, never>;
}/**** ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class MyDirective {
}
MyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyDirective, selector: "[my-dir]", host: { properties: { "title": "\"my title\"", "attr.tabindex": "1", "id": "\"my-id\"" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, decorators: [{
type: Directive,
args: [{
select}]
}] });/****************************************************************************************************
 * PARTIAL FILE: chain_property_bindings_mixed.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export dstatic ɵdir: i0.ɵɵDirectiveDeclaration<MyDirective, "[my-dir]", never, {}, {}, never, never, false, never>;
} ****************************************************************************************************/
iexport class MyDirective {
constructor() {
this.expandedState = 'collapsed';
t}MyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyDirective, selector: "[my-dir]", host: { properties: { "@expand": "expandedState", "@fadeOut": "true", "@shrink": "isSmall" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, decorators: [{
type: Directive,
args: [{
selector: '[my-dir]',
host: { '[@expand]': 'expandedState', '[@fadeOut]': 'true', '[@shrink]': 'isSmall' }
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: chain_synthetic_properties.d.ts
 ****************************************************************************************************/
importexpandedState: string;
isSmalstatic ɵdir: i0.ɵɵDirectiveDeclaration<MyDirective, "[my-dir]", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_attribute_bindings.js
 ****************************************************************************************************/
import {export class MyDirective {
c}
Mi0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, decorators: [{
type: Directive,
args: [{
s}]
}] });/****************************************************************************************************
 * PARTIAL FILE: chain_multiple_attribute_bindings.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyDirective {
myTitle: string;
myId: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyDirective, never>;
static * PARTIAL FILE: chain_attribute_bindings_all.js
 ****************************************************************************************************/
import { Directive, HostBinding } from '@angular/core';
importconstructor() {
this.m}
}MyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyDirective, selector: "[my-dir]", host: { properties: { "attr.tabindex": "1", "attr.title": "this.myTitle", "attr.id": "this.myId" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, decorators: [{
type: Directive,
args: [{type: HostBinding,
atype: HostBinding,
args: ['attr.id']
}] } });/****************************************************************************************************
 import * as i0 from "@angular/core";
export declare class MyDirective {
myTitle: string;
mstatic ɵdir: i0.ɵɵDirectiveDeclaration<MyDirective, "[my-dir]", never, {}, {}, never, never, false, never>;
}/**** ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class MyDirective {
}
MyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyDirective, selector: "[my-dir]", host: { properties: { "attr.title": "\"my title\"", "tabindex": "1", "attr.id": "\"my-id\"" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, decorators: [{
type: }]
}] });/****************************************************************************************************
 * PARTIAL FILE: chain_attribute_bindings_mixed.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyDirective {
static}/****************************************************************************************************
 import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class MyDirective {
mousedowclick() {
}MyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyDirective, selector: "[my-dir]", host: { listeners: { "mousedown": "mousedown()", "mouseup": "mouseup()", "click": "click()" } }, ngImport: i0 });
i0.ɵɵngDargs: [{
selector: '[my-dir]',
host: {
'(mousedown)': 'mousedown()',
'(mouseup)': 'mouseup()',
}
}type: HostListener,
a * PAimport * as i0 from "@angular/core";
export declare class MyDirective {
mousedown(): void;
mouseup(): void;
click(): void;
static ɵfac: i0.ɵɵFactoryDeclaration<MyDirective, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<MyDirective, "[my-dir]", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARexport class MyComponent {
start(}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-comp", host: { listeners: { "@animation.done": "done()", "@animation.start": "start()" } }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: t'(@animation.done)': 'done()',
}}], propDecorators: { start: [{
type: HostListener,
args: ['@animation.start']
}] } });/****************************************************************************************************
 * PARTIAL FILE: chain_synthetic_listeners.d.ts
 ****************************************************************************************************/
istart(): void;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵ * PARTIAL FILE: chain_synthetic_listeners_mixed.js
 ****************************************************************************************************/
import { Component, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
start() {
}
click() {
}
}type:selector: 'my-comp',
template: '',
host: {
'(mousedown)': 'mousedown()',
'(@animation.done)': 'done()',
'(mouseup)': 'mouseup()',
}
}type: HostListener,
args: }] } });/****************************************************************************************************
 * PARimport * as i0 from "@angular/core";
export declare class MyComponent {
start(): void;
click(): void;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-comp", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 import { Directive, HostBinding, NgModule } from '@angular/core';
i}
HostBindingDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostBindingDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
HostBindingDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: HostBindingDir, selector: "[hostBindingDir]", host: { properties: { "class.a": "true", "class.b": "false", "class.c": "this.true", "class.d": "this.false", "class.e": "this.other" } }, ngImport: i0 });
i0.ɵɵngDargs: [{
selector: '[hostBindingDir]',
host: {
'[class.a]': 'true',
'[class.b]': 'false',
}
}]
}], proptype: HostBinding,
args: ['class.d']
}], other: [{
type: HostBinding,
args: ['class.e']
}] } });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Margs: * PARTIAL FILE: host_bindings_primitive_names.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class HostBindingDir {
true: any;
false: any;
other: any;
s}
export declare class MyModule {
sstatic ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****** ****************************************************************************************************/
importexport class HostBindingDir {
}
HostBindingDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostBindingDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
HostBindingDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: HostBindingDir, selector: "[hostBindingDir]", host: { properties: { "class.a": "this['is-a']", "class.b": "this['is-\"b\"']", "class.c": "this['\"is-c\"']" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: HostBindingDir, decorators: [{
type: Directive,
atype: HostBinding,
atype: HostBinding,
args: ['class.b']
}], '"is-c"': [{
type: HostBinding,
args: ['class.c']
}] } });
export cMyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [HostBindingDir] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [HostBindingDir] }]
}] });/****************************************************************************************************
 * PARTI'is-a': any;
'is-"b"': any;
'"is-c"': any;
static ɵfac: i0.ɵɵFactoryDeclaration<HostBindingDir, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<HostBindingDir, "[hostBindingDir]", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof HostBindingDir], never, never>;
s