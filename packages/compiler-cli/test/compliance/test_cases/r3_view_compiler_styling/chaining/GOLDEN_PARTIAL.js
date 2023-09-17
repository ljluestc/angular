/****************************************************************************************************
 * PARTIAL FILE: class_bindings.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.yesToApple = true;
this.yesToOrange = true;
this.yesToTomato = false;
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `<div
   [class.apple]="yesToApple"
   [class.orange]="yesToOrange"
   [class.tomato]="yesToTomato"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
template: `<div
   [class.apple]="yesToApple"
   [class.orange]="yesToOrange"
   [class.tomato]="yesToTomato"></div>`
}]
}] });}/****************************************************************************************************
 * PARTIAL FILE: style_bindings.js
 import * as i0 from "@angular/core";
export class MyComponent {
cthis.border = '1px solid purple';
this.transition = 'all 1337ms ease';
}MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `<div
[[style.transition]="transition"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
ttemplate: `<div
[style.color]="color"
[style.border]="border"
[style.transition]="transition"></div>`
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: style_bindings.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportborder: string;
transition: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}/**** ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
cthis.this.yesToApple = true;
this.yesToOrange = true;
this.yesToTomato = false;
}
}MyCom[style.color]="color"
[class.orange]="yesToOrange"
[style.border]="border"
[class.tomato]="yesToTomato"
[type:template: `<div
[class.apple]="yesToApple"
[style.color]="color"
[class.orange]="yesToOrange"
[[style.transition]="transition"></div>`
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: mixed_bindings.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
eborder: string;
transition: string;
yesToAyesToTomato: boolean;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: interpolations_equal_arity.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
exportthis.one = '';
}
}
M   style.color="a{{one}}b"
   style.border="a{{one}}b"
   style.transition="a{{one}}b"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args:    style.color="a{{one}}b"
   style.border="a{{one}}b"
   style.transition="a{{one}}b"></div>`
} * PARTIAL FILE: interpolations_equal_arity.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
one: string;
static}/****************************************************************************************************
 * PARTIAL FILE: interpolations_different_arity.js
 ****************************************************************************************************/
ithis.one = '';
this.two = '';
this.three = '';
}
}
MyCompsstyle.transition="a{{one}}b{{two}}c"
style.width="a{{one}}b{{two}}c"
style.height="a{{one}}b{{two}}c{{three}}d"
stemplate: `<div
style.color="a{{one}}b"
style.border="a{{one}}b"
style.transition="a{{one}}b{{two}}c"
style.width="a{{one}}b{{two}}c"
style.height="a{{one}}b{{two}}c{{three}}d"
style.top="a{{one}}b{{two}}c{{three}}d"></div>`
} * PARTIAL FILE: interpolations_different_arity.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
estatic ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: break_different_instructions.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
ethis.width = '42px';
this.yesToApple = true;
this.yesToOrange = true;
}
}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `<div
style.color="a{{one}}b"
style.border="a{{one}}b"
[[class.orange]="yesToOrange"
[style.width]="width"
style.height="a{{one}}b"
style.top="a{{one}}b"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
tstyle.border="a{{one}}b"
[class.apple]="yesToApple"
[style.transition]="transition"
[class.orange]="yesToOrange"
[stylestyle.top="a{{one}}b"></div>`
}]
}] });/****************************************************************************************************
 import * as i0 from "@angular/core";
export declare class MyComponent {
one: string;
transition: string;
width: string;
y}/****************************************************************************************************
 * PARTIAL FILE: break_different_interpolation_instructions.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.one = '';
this.tthis.transition = 'all 1337ms ease';
t}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "ng-component", ngImport: i0, template: `<div
style.color="a{{one}}b"
style.border="a{{one}}b"
style.transition="a{{one}}b{{two}}c"
style.style.top="a{{one}}b"></div>`, isInline: true });
iargs: [{
template: `<div
style.color="a{{one}}b"
style.border="a{{one}}b"
style.transition="a{{one}}b{{two}}c"
style.width="a{{one}}b{{two}}c{{three}}d"
style.height="a{{one}}b"
style.top="a{{one}}b"></div>`
}] * PARTIAL FILE: break_different_interpolation_instructions.d.ts
 export declare class MyComponent {
one: string;
two: string;
three: string;
transition: string;
width: string;
static}/****************************************************************************************************
 import { Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.color = 'red';
this.transition = 'all 1337ms ease';
this.yesToApple = true;
this.yesToTomato = false;
this.bMyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
Mtype: Component,
args: [{
template: '',
host: {
'[class.apple]': 'yesToApple',
'[style.color]': 'color',
'[class.tomato]': 'yesToTomato',
'[style.transition]': 'transition'
}}], propDecorators: { border: [{
t}], yesToOrange: [{
type: HostBinding,
args: ['class.orange']
}] } });/****************************************************************************************************
 * PARTIAL FILE: host_bindings.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
color:border: string;
yesToOrange: boolean;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "ng-component", never, {}, {}, never, never, false, never>;
}