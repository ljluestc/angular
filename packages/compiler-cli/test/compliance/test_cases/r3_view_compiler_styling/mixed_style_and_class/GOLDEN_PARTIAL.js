/****************************************************************************************************
 * PARTIAL FILE: mixed.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.myStyleExp = [{ color: 'red' }, { color: 'blue', duration: 1000 }];
this.myClassExp = 'foo bar apple';
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<div [style]="myStyleExp" [class]="myClassExp"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{ selector: 'my-component', template: `<div [style]="myStyleExp" [class]="myClassExp"></div>` }]
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
myClassExp: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: pipe_bindings.js
 import * as i0 from "@angular/core";
export class StylePipe {
tStylePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StylePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
StylePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StylePipe, name: "stylePipe" });
iargs: [{ name: 'stylePipe' }]
}] });
e}
ClassPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: ClassPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Ctype: Pipe,
args: [{ name: 'classPipe' }]
}] });
export class MyComponent {
constructor() {
this.myStyleExp = [{ color: 'red' }, { color: 'blue', duration: 1000 }];
this.myClassExp = 'foo bar apple';
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `<div [style]="myStyleExp | stylePipe" [class]="myClassExp | classPipe"></div>`, isInline: true, dependencies: [{ kind: "pipe", type: StylePipe, name: "stylePipe" }, { kind: "pipe", type: ClassPipe, name: "classPipe" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: `<div [style]="myStyleExp | stylePipe" [class]="myClassExp | classPipe"></div>`
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent, StylePipe, ClassPipe] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, StylePipe, ClassPipe] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: pipe_bindings.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportstatic ɵfac: i0.ɵɵFactoryDeclaration<StylePipe, never>;
static ɵpipe: i0.ɵɵPipeDeclaration<StylePipe, "stylePipe", false>;
}
export declare class ClassPipe {
transfstatic ɵpipe: i0.ɵɵPipeDeclaration<ClassPipe, "classPipe", false>;
}
export declare class MyComponent {
myStyleExp: ({
color:} | {
color: string;
duration: number;
})[];
myClasstatic ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static}/****************************************************************************************************
 * PARTIAL FILE: pipe_bindings_slots.js
 ****************************************************************************************************/
import { Component, NgModule, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PipePipe {
tPipePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: PipePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PipePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: PipePipe, name: "pipe" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: PipePipe, decorators: [{
type: Pipe,
args: [{ name: 'pipe' }]
}] });
ethis.myStyleExp = {};
this.fooExp = 'foo';
this.barExp = 'bar';
this.bazExp = 'baz';
this.items = [1, 2, 3];
this.item = 1;
}MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
<div [class]="{}"
 [class.foo]="fooExp | pipe:2000"
 [style]="myStyleExp | pipe:1000"
 [style.bar]="barExp | pipe:3000"
 i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: `
<div [class]="{}"
  [style.bar]="barExp | pipe:3000"
 [style.baz]="bazExp | pipe:4000">
 {{ item }}</div>`
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent, PipePipe] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, PipePipe] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: pipe_bindings_slots.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class PipePipe {
transform(v: any): void;
static ɵfac: i0.ɵɵFactoryDeclaration<PipePipe, never>;
static ɵpipe: i0.ɵɵPipeDeclaration<PipePipe, "pipe", false>;
}myStyleExp: {};
fooExp: string;
barExp: string;
bazExp: string;
items: number[];
item: number;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent, typeof PipePipe], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: multiple_elements.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
exportthis.w1 = '100px';
this.h1 = '100px';
this.a1 = true;
t}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
<div [style.width]="w1"></div>
<div [style.height]="h1"></div>
<div [  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
atemplate: `
<div [style.width]="w1"></div>
<div [style.height]="h1"></div>
<div [class.active]="a1"></div>
<div [class.removed]="r1"></div>
  `}] });
export class MyModule {
}
MMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: multiple_elements.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
w1: string;
hr1: boolean;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
exportstatic ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}