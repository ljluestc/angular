/****************************************************************************************************
 * PARTIAL FILE: empty_content.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n></div>
  <div i18n>  </div>
  <div i18n>  <div i18n>  </div>
  <div i18n>  </div>
  `
}]export class MyModule {
}
MyModule.ɵfaMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModu}] });/****************************************************************************************************
 * PARTIAL FILE: empty_content.d.ts
 ***********exportstatic ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static}/****************************************************************************************************
 * PARTIAL FILE: comments_in_translated_text.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n>Some <!-- comments --> text</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: s  <div i18n>Some <!-- comments --> text</div>
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
 * PARTIAL FILE: comments_in_translated_text.d.ts
 export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
exportstatic ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: escape_quotes.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n>Some text 'with single quotes', "with double quotes", \`with backticks\` and without quotes.</div>
 type: Component,
args: [{
selector: 'my-component',
template: `
  <div i18n>Some text 'with single quotes', "with double quotes", \`with backticks\` and without quotes.</div>
  `
}]export class MyModule {
}
MMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: escape_quotes.d.ts
 *****export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
sexport declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/**** ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.count = 1;
}MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: '<div i18n>`{{ count }}`</div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
atempl}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: backtick_quotes.d.ts
 ****************************************************************************************************/
icountstatic ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: plain_text_messages.js
 ****************************************************************************************************/
importexport class MyComponent {
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
M  <di  <div>My non-i18n block #2</div>
  <div i18n>My i18n block #3</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
s  <div i18n>My i18n block #1</div>
  <div>My non-i18n block #1</div>
  <div i18n>My i18n block #2</div>
  <div  `,
}]
}] });
eMyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: plain_text_messages.d.ts
 export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: named_interpolations.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
constructor() {
this.valueA = '';
this.v}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MNamed interpolation: {{ valueA // i18n(ph="PH_A") }}
Named interpolation with spaces: {{ valueB // i18n(ph="PH B") }}
  </div>
`, isItype: Component,
args: [{
selector: 'my-component',
tNamed interpolation: {{ valueA // i18n(ph="PH_A") }}
Named interpolation with spaces: {{ valueB // i18n(ph="PH B") }}
  </div>
`,
}]
}] });
export class MyModule {
}
MyModuMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
t}] });/****************************************************************************************************
 * PARTIAL FILE: named_interpolations.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
valueA: string;
valueB: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
sexport declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: interpolation_custom_config.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
importconstructor() {
this.valueA = '';
}
}
MyComp  <div i18n>{% valueA %}</div>
  `, isInline: true, interpolation: ["{%", "%}"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: `
  <div i18n>{% valueA %}</div>
 }]
}] });
export class MyModule {
}
MMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] }); ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
valueA: string;
static}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: interpolation_complex_expressions.js
 ****************************************************************************************************/
iexport class AsyncPipe {
transform(v) { }
}
AsyncPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: AsyncPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Atype: Pipe,
args: [{ name: 'async' }]
}] });
export class MyComponent {
}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n>
{{ valueA | async }}
{{ valueA?.a?.b }}
{{ valueA.getRawValue()?.getTitle() }}
  </div>
  `, itype: Component,
args: [{
selector: 'my-component',
template: `
  <div i18n>
{{{ valueA.getRawValue()?.getTitle() }}
  </div>
  `
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent, AsyncPipe] });
Mtype: NgModule,
args: [{ declarations: [MyComponent, AsyncPipe] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: interpolation_complex_expressions.d.ts
 *****export declare class AsyncPipe {
transform(v: any): void;
static ɵfac: i0.ɵɵFactoryDeclaration<AsyncPipe, never>;
static ɵpipe: i0.ɵɵPipeDeclaration<AsyncPipe, "async", false>;
}
export declare class MyComponent {
valueAstatic ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent, typeof AsyncPipe], never, never>;
s * PARTIAL FILE: bindings_in_content.js
 ****************************************************************************************************/
import { Component, NgModule, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class UppercasePipe {
transform(v) { }
}
UppercasePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: UppercasePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
UppercasePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: UppercasePipe, name: "uppercase" });
iargs: [{ name: 'uppercase' }]
}] });
exportthis.one = 1;
this.two = 2;
this.tthis.five = 5;
}
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n>My i18n block #{{ one }}</div>
  <div i18n>My i18n block #{{ two | uppercase }}</div>
  <div i18n>My i18n block #{{ three + four + five }}</div>
  `, isInline: true, dependencies: [{ kind: "pipe", type: UppercasePipe, name: "uppercase" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
t  `
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent, UppercasePipe] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, UppercasePipe] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: bindings_in_content.d.ts
 *****export declare class UppercasePipe {
transform(v: any): void;
static}
export declare class MyComponent {
one: number;
two: number;
three: number;
four: number;
five: number;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent, typeof UppercasePipe], never, never>;
simport { Component, NgModule, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class UppercasePipe {
transform(v) { }
}
UppercasePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: UppercasePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
UppercasePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: UppercasePipe, name: "uppercase" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: UppercasePipe, decorators: [{
type: Pipe,
args: [{ name: 'uppercase' }]
}] });
exportthis.one = 1;
this.two = 2;
this.n}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n>
My i18n block #{{ one }}
<span>Plain text in nested element</span>
  </div>
  <div i18n>
My i18n block #{{ two | uppercase }}
<div>
  <div>
<span>
  More bindings in more nested element: {{ nestedInBlockTwo }}
</span>
  </div>
</div>
  </div>
`, isInline: true, dependencies: [{ kind: "pipe", type: UppercasePipe, name: "uppercase" }] });
itemplate: `
  <div i18n>
My i18n block #{{ one }}
<span>Plain text in nested element</span>
  </div>
  <div i18n>
My i18n block #{{ two | uppercase }}
<div>
  <div>
<span>
  More bindings in more nested element: {{ nestedInBlockTwo }}
</span>
  </di  </div>
`,
}]export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent, UppercasePipe] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent, UppercasePipe] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: nested_elements.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class UppercasePipe {
transform(v: any): void;
static ɵfac: i0.ɵɵFactoryDeclaration<UppercasePipe, never>;
static ɵpipe: i0.ɵɵPipeDeclaration<UppercasePipe, "uppercase", false>;
}
export declare class MyComponent {
ostatic ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent, typeof UppercasePipe], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: nested_elements_with_i18n_attributes.js
 ****************************************************************************************************/
import { Component, NgModule, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class UppercasePipe {
transfUppercasePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: UppercasePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
UppercasePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: UppercasePipe, name: "uppercase" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: UppercasePipe, decorators: [{
type: Pipe,
args: [{ name: 'uppercase' }]
}] });
export class MyComponent {
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n>
  My i18n block #1 with value: {{ valueA }}
  <spa  </span>
</div>
<div i18n>
  My i18n block #2 with value {{ valueD | uppercase }}
  <span i18n-title title="Span title {{ valueE }}">
Plain text in nested element (block #2)
  </span>
</div>
`, isInline: true, dependencies: [{ kind: "pipe", type: UppercasePipe, name: "uppercase" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
tselector: 'my-component',
template: `
  <div i18n>
  My i18n block #1 with value: {{ valueA }}
  <span i18n-title title="Span title {{ valueB }} and {{ valueC }}">
Plain text in nested element (block #1)
  </span>
</div>
<  <span i18n-title title="Span title {{ valueE }}">
Plain text in nested element (block #2)
  </span>
</div>
`,
}]
}] });}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [UppercasePipe, MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [UppercasePipe, MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: nested_elements_with_i18n_attributes.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class UppercasePipe {
transfstatic ɵpipe: i0.ɵɵPipeDeclaration<UppercasePipe, "uppercase", false>;
}
export declare class MyComponent {
valueA: any;
valueB: any;
valueC: any;
valueD: any;
valueE: any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof UppercasePipe, typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: nested_templates.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
eMyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div>
Some content
<div *ngIf="visible">
  <div i18n>
Some other content {{ valueA }}
<div>
  More nested levels with bindings {{ valueB | uppercase }}
</div>
  </div>
</div>
  </div>
`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: selector: 'my-component',
template: `
  <div>
Some content
<div *ngIf="visible">
  <div<div>
  More nested levels with bindings {{ valueB | uppercase }}
</div>
  </div>
</div>
  </div>
`,
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
t}] });/****************************************************************************************************
 * PARTIAL FILE: nested_templates.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
s}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: self_closing.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <img src="logo.png" i18n />
  <img  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
templa  <img src="logo.png" i18n *ngIf="visible" />
  <img src="logo.png" i18n *ngIf="visible" i18n-title title="App logo #{{ id }}" />
  `,
}]
}] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: self_closing.d.ts
 exportstatic ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
s * PARTIAL FILE: nested_templates_context.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
}MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n>
Some content
<div *ngIf="visible">
  Some other content {{ valueA }}
  <div>
More nested levels with bindings {{ valueB | uppercase }}
<div *ngIf="exists">
  Content inside sub-template {{ valueC }}
  <div>
Bottom</div>
  </div>
</div>
<div *ngIf="!visible">
  Some other content {{ valueE + valueF }}
  <div>
More nested levels with bindings {{ valueG | uppercase }}
  </div>
</div>
  </div>
`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: `
  <div i18n>
Some content
<div *ngIf="visible">
  Some other content {{ valueA }}
  <div<div *ngIf="exists">
  Content inside sub-template {{ valueC }}
   </di  </div>
</div>
<div *ngIf="!visible">
  Some other content {{ valueE + valueF }}
  <div>
More nested levels with bindings {{ valueG | uppercase }}
   </div>
`,
}]
}] });
export class MyModule {
}
MMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: nested_templates_context.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
staticexport declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}/****************************************************************************************************
 * PARTIAL FILE: directives.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class MyComponent {
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n *ngIf="visible">Some other content <span>{{ valueA }}</span></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: `
  <div}]
}] });
eMyModuMyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: directives.d.ts
 export declare class MyComponent {
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, {}, {}, never, never, false, never>;
}
export declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
s}/****************************************************************************************************
 * PARTIAL FILE: event_listeners.js
 ****************************************************************************************************/
import { Component, NgModule } from '@angular/core';
importonClick() { }
}
MyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyComponent, selector: "my-component", ngImport: i0, template: `
  <div i18n (click)="onClick()">Hello</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyComponent, decorators: [{
type: Component,
args: [{
selector: 'my-component',
template: `
  <div i18n (click)="onClick()">Hello</div>
 }] });
export class MyModule {
}
MyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, declarations: [MyComponent] });
MyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyModule, decorators: [{
type: NgModule,
args: [{ declarations: [MyComponent] }]
}] });/****************************************************************************************************
 * PARTIAL FILE: event_listeners.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyComponent {
onClick(): void;
static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
staticexport declare class MyModule {
static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof MyComponent], never, never>;
static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}