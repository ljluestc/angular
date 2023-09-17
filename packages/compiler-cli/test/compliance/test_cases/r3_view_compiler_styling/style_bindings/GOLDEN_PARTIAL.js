/****************************************************************************************************
 * PARTIAL FILE: style_binding.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.myStyleExp = [{ color: 'red' }, { color: 'blue', duration: 1000 }];
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<div [style]="myStyleExp"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{ selector: 'my-component', template: `<div [style]="myStyleExp"></div>` }]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });duration: number;
})[];
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: binding_slots.js
 import * as i0 from "@angular/core";
export class MyComponentWithInterpolation {
c}
}
M<div class="foo foo-{{ fooId }}"></div>
  `, isInline: true });
iargs: [{
selector: 'my-component-with-interpolation',
t  `
}]
}] });
export class MyComponentWithMuchosInterpolation {
constructor() {
this.fooId = '123';
this.fooUsername = 'superfoo';
}
}
MyComponentWithMuchosInterpolation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponentWithMuchosInterpolation, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponentWithMuchosInterpolation.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponentWithMuchosInterpolation, selector: "my-component-with-muchos-interpolation", ngImport: i0, template: `
<div class="foo foo-{{ fooId }}-{{ fooUsername }}"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponentWithMuchosInterpolation, decorators: [{
type: Component,
args: [{
selector: 'my-component-with-muchos-interpolation',
template: `
<div class="foo foo-{{ fooId }}-{{ fooUsername }}"></div>
  `
}]
}] });
export class MyComponentWithoutInterpolation {
constructor() {
this.exp = 'bar';
}
}
MyComponentWithoutInterpolation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponentWithoutInterpolation, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponentWithoutInterpolation.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponentWithoutInterpolation, selector: "my-component-without-interpolation", ngImport: i0, template: `
<div [class]="exp"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponentWithoutInterpolation, decorators: [{
type: Component,
args: [{
selector: 'my-component-without-interpolation',
template: `
<div [class]="exp"></div>
  `
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponentWithInterpolation, MyComponentWithMuchosInterpolation, MyComponentWithoutInterpolation] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{
declarations: [
MyComponentWithInterpolation, MyComponentWithMuchosInterpolation,
MyComponentWithoutInterpolation
]
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: binding_slots.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportstatic ɵfac: i0.ɵɵFactoryDeclaration<MyComponentWithInterpolation, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponentWithInterpolation, "my-component-with-interpolation", never, {}, {}, never, never, false, never>;
}
export declare class MyComponentWithMuchosInterpolation {
fooId:static ɵfac: i0.ɵɵFactoryDeclaration<MyComponentWithMuchosInterpolation, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponentWithMuchosInterpolation, "my-component-with-muchos-interpolation", never, {}, {}, never, never, false, never>;
}
export declare class MyComponentWithoutInterpolation {
exp: sstatic ɵcmp: i0.ɵɵComponentDeclaration<MyComponentWithoutInterpolation, "my-component-without-interpolation", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static}/****************************************************************************************************
 * PARTIAL FILE: binding_slots_interpolations.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
importcthis.myWidth = '100px';
this.myHeight = '100px';
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<div style="opacity:1"
    [style]="myStyleExp"
   [style.height]="myHeight"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
t   [style.width]="myWidth"
   [style]="myStyleExp"
   [style.height]="myHeight"></div>`
}]
}] });
export class MyModule {
}MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 import * as i0 from "@angular/core";
export declare class MyComponent {
myStyleExp: ({
color: string;
duration?: undefined;
} | {duration: number;
})[];
myWidth: string;
myHeight: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
staticstatic ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: style_ordering.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.m}
Mi0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{ selector: 'my-component', template: `<div [style.background-image]="myImage"></div>` }]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModui0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
t}] });/****************************************************************************************************
 * PARTIAL FILE: style_ordering.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
myImage: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
staticexport declare class MyModule {
sstatic * PARTIAL FILE: style_binding_suffixed.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<div [style.font-size.px]="12"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
aexportMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: style_binding_suffixed.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
sexport}/****************************************************************************************************
 * PARTIAL FILE: empty_style_bindings.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<div [style.color]></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{ selector: 'my-component', template: `<div [style.color]></div>` }]
}] });
export class MyModule {
}iargs: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: empty_style_bindings.d.ts
 ****************************************************************************************************/
importstatic ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}