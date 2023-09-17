/****************************************************************************************************
 * PARTIAL FILE: basic_switch.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
}
value() {
return 1;
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
  {{message}}
  {#switch value()}
{:case 0} case 0
{:case 1} case 1
{:case 2} case 2
{:default} default
  {/switch}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#switch value()}
{:case 0} case 0
{:case 1} case 1
{:case 2} case 2
{:default} default
  {/switch}
</div>
  `,
}]
}] });static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: switch_without_default.js
 import * as i0 from "@angular/core";
export class MyApp {
cthis.value = () => 1;
}
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
 {:case 0} case 0
{:case 1} case 1
{:case 2} case 2
  {/switch}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#switch value()}
{:case 0} case 0
{:case 1} case 1
{:case 2} case 2
  {/switch}
</div>
  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: switch_without_default.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportvalue: () => number;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARimport { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
cthis.value = () => 1;
this.n}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<  {#switch value()}
{:case  {#switch nestedValue()}
{:case 0} nested case 0
{:case 1} nested case 1
{{:case 2} case 2
  {/switch}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
a<div>
  {{message}}
  {#switch value()}
{:case 0} case 0
{:case 1}
  {#switch nestedValue()}
{:case 0} nested case 0
{:case 1} nested case 1
{:case 2} nested case 2
  {/switch}
{:case 2} case 2
  {/switch}
</div>
  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: nested_switch.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
value: () => number;
nestedValue: () => number;
static}/****************************************************************************************************
 * PARTIAL FILE: switch_with_pipe.js
 ****************************************************************************************************/
import { Component, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TestPipe {
tranform(value) {
return value;
}Ti0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: TestPipe, decorators: [{
type: Pipe,
args: [{ standalone: true, name: 'test' }]
}] });
export class MyApp {
constructor() {
this.message = 'hello';
this.value = () => 1;
}M<div>
  {{message}}
  {#switch value() | test}
{:case 0} case 0
{:case 1} case 1
{:default} default
  {/switch}
</div>
  `, ittemplate: `
<div>
  {{message}}
  {#switch value() | test}
{:case 0} case 0
{:case 1} case 1
{:default} default
  {/switch}
</div>
  `,
s}]
}] });/****************************************************************************************************
 * PARTIAL FILE: switch_with_pipe.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class TestPipe {
tranform(value: unknown): unknown;
static ɵfac: i0.ɵɵFactoryDeclaration<TestPipe, never>;
static ɵpipe: i0.ɵɵPipeDeclaration<TestPipe, "test", true>;
}
export declare class MyApp {
message: string;
value: () => number;
static}/****************************************************************************************************
 * PARTIAL FILE: basic_if.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
this.value = () => 1;
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp. </div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#if value()}hello{/if}
</div>
  `,
}]
}] }); export declare class MyApp {
message: string;
value: () => number;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: basic_if_else.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.mM<div>
  {{message}}
  {#if value()}hello{:else}goodbye{/if}
</div>
  `, isInline: true });
iargs: [{
template: `
<div>
  {{message}}
  {#if value()}hello{:else}goodbye{/if}
</div>
  `,
}] * PARTIAL FILE: basic_if_else.d.ts
 ****************************************************************************************************/
imessage: string;
value: () => number;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
this.value = () => 1;
this.otherValue = () => 2;
}<div>
  {{message}}
  {#if value() === 1}
one
{:else if otherValue() === 2} two
{:else if message} three
{:else} four
  {/if}
<i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
ttemplate: `
<div>
  {{message}}
  {#if value() === 1}
one
{:else if otherValue() === 2} two
{:else if message} three
{:else}]
}] });/****************************************************************************************************
 * PARTIAL FILE: basic_if_else_if.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
value: () => number;
ostatic ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
} ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
this.val = 1;
this.innerVal = 2;
}MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>  {#if val === 0}
zero
{:else if val === 1} one
{:else if val === 2}
  {#if innerVal === 0}
inner zero
{:else if innerVal === 1} inner one
{  {/if}
{</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#if val === 0}
zero
{:else  {#if innerVal === 0}
inner zero
{:else{:else} inner three
  {/if}
{:else} inner three
  {/if}
</div>
  `,
}]
} ****************************************************************************************************/
imessage: string;
val: number;
innerVal: number;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: if_with_pipe.js
 ****************************************************************************************************/
import { Component, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TestPipe {
tranform(value) {
return value;
}
}TestPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: TestPipe, isStandalone: true, name: "test" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: TestPipe, decorators: [{
type: Pipe,
args: [{ standalone: true, name: 'test' }]
}] });
export class MyApp {
constructor() {
this.m}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
M  {{message}}
  {#if (val | test) === 1}
one
{:else if (val | test) === 2} two
{:else} three
   `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#if (val | test) === 1}
one
{:else  {/if}
</div>
  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: if_with_pipe.d.ts
 ****************************************************************************************************/
importtranform(value: unknown): unknown;
static ɵfac: i0.ɵɵFactoryDeclaration<TestPipe, never>;
static ɵpipe: i0.ɵɵPipeDeclaration<TestPipe, "test", true>;
}message: string;
val: number;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
this.value = () => 1;
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
  {{message}}
  {#if value(); as alias}{{value()}} as {{alias}}{/if}
</div>
  `, isInline: true });
i0.ɵɵnargs: [{
template: `
<div>
  {{me</div>
  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: if_with_alias.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
vstatic ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
s * PARTIAL FILE: if_nested_alias.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.value = () => 1;
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
{#if value(); as root}
  Root: {{value()}}/{{root}}
  {#if value(); as inner}
Inner: {{value()}}/{{root}}/{{inner}}
{#if v{/if}
  {/if}
{/if}
  `, itype: Component,
args: [{
template: `
{#if v  {#if value(); as inner}
Inner: {{value()}}/{{root}}/{{inner}}
{#if value(); as innermost}
  Innermost: {{value()}}/{{root}}/{{inner}}/{{innermost}}
{/if}
  {/if}
{}]
}export declare class MyApp {
value: () => number;
root: any;
inner: any;
innermost: any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: if_nested_alias_listeners.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.value = () => 1;
}}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
{#if value(); as root}
  <button (click)="log(value(), root)"></button>  {#if value(); as inner}
<button (click)="log(value(), root, inner)"></button>{#if value(); as innermost}
  <button (click)="log(value(), root, inner, innermost)"></button>
{/if}
  {/if  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
{#if value(); as root}
   <button (click)="log(value(), root, inner, innermost)"></button>
{/if}{/if}
 }] });/****************************************************************************************************
 * PARTIAL FILE: if_nested_alias_listeners.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
value: () => number;
log(..._: any[]): void;
root: any;
istatic ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: basic_for.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constrthis.items = [{ name: 'one' }, { name: 'two' }, { name: 'three' }];
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersio  {{message}}
  {#for item of items; track item}{{item.name}}{/for}  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: <div>
  {{message}}
  {#for item of items; track item}{{item.name}}{/for}
</div>
  `,
}]
}items: {
name: item: any;
s}/**** ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
this.items = [{ name: 'one' }, { name: 'two' }, { name: 'three' }];
}
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
 {{item.name}}
{:empty} No items!
  {/for}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#for item of items; track item}
{{item.name}}  {/for}
</div>}]
}] });/****************************************************************************************************
 * PARTIAL FILE: for_with_empty.d.ts
 *****export declare class MyApp {
message: string;
items: {
name: string;
}[];
item: any;
static}/**************************************** ****************************************************************************************************/
import { Component } from '@angular/core';export class MyApp {
constructor() {
this.m}
}M  {{m</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
   `,
}]
} ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
items: {
name: string;
}[];
item: any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: for_track_by_field.js
 ***********************************************import * as i0 from "@angular/core";
export class MyApp {this.message = 'hello';
this.i}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
  {{message}}
  {#for item of items; track item.name[0].toUpperCase()}{{item.name}}{/for}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: <  {#for item of items; track item.name[0]  `,
}] * PARTIAL FILE: for_track_by_field.d.ts
 ****************************************************************************************************/
importmessage: string;
items: {
name: string;
}stati}/****************************************************************************************************
 * PARTIAL FILE: nested_for.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
t{ name: 'two', subItems: ['sub one', 'sub two', 'sub three'] },
{ name: 'three', subItems: ['sub one', 'sub two', 'sub three'] },
]MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
  {{message}}
  {#for item of items; track item}
{{item.name}}
{#for subitem of item.subItems; track $index}{{subitem}} from {{item.name}}{/for}
  {/for}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
ttemplate: `
<div>
  {{message}}{{item.name}}
{#for subitem of item.subItems; track $index}{{subite</div>
  `,}] });/****************************************************************************************************
 * PARTIAL FILE: nested_for.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
items: {
name: string;
subItems: string[];
}[];
item: s}/*************************************** ****************************************************************************************************/
import { Component } from '@angular/core';this.message = 'hello';
this.items = [];
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
 IndexLOdd: {{$odd}}
Count: {{$count}}
  {/for}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#for item of items; track item}
IOdd: {{$odd}}
Count: {{$count}}
  {/for}
</div>
  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: for_template_variables.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
eitems: never[];
item: any;
$index: any;
$first: any;
$last: any;
$even: any;
$odd: any;
$count: any;
static}/**** ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
this.items = [];
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp. ILast: {{l}}
Even: {{ev}}
Odd: {{o}}
Count: {{co}}
  {/fo  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#for item of items; track item; let idx = $index, f = $first; let l = $last, ev = $even, o = $odd; let co = $count}
ILast: {{l}}
Even: {{ev}}
O  {/for}
</div>
  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: for_aliased_template_variables.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
items: never[];
idx: any;
f: anyev: any;
o: any;
co: any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: nested_for_template_variables.js
 ****************************************************************************************************/
importexport class MyApp {
constructor() {
this.message = 'hello';
this.items = [
{{ name: 'three', subItems: ['sub one', 'sub two', 'sub three'] },
];
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
  {{message}}
  {#fo{  Inn  {/for}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#for item of items; track item; let outerCount = $count}
{{item.name}}
{#for subitem of item.subItems; track subitem}
 {</div>
  `,
}]
}] });/****************************************************************************************************
 * PARimport * as i0 from "@angular/core";
export declare class MyApp {
message: string;
items: {
name: string;
subItems: string[];
}[];
item: any;
outerCount: any;
$count: any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
} ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constrthis.items = [];
}
log(..._) { }
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
  {{message}}
  {#fo  {/for}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
a<div>
  {{message}}
  {#for item of items; track item; let ev = $even}
<div (</div>
  `,
}]
}] });/****************************************************************************************************
 import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
items: never[];
log(..._: any[]): void;
item: any;
ev: any;
$index: any;
$first: any;
$count: any;
s}/*** ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.items = [];
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `{#for item of items; track item}{{$odd + ''}}{/for}`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `{#for item of items; track item}{{$odd + ''}}{/for}`,
} * PARTIAL FILE: for_variables_expression.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportitem: any;
$odd: static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: for_data_slots.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
// We verify the data slots by defining templates before/after
// and checking that the indexes are sequential.
export class MyApp {
constructor() {
this.items = ['one', 'two', 'three'];
}
}{#for item of items; track item}{{item}}{:empty}Empty{/for}
<ng-template/>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: template: `
<ng-template/>
{#for item of items; track item}{{item}}{:empty}Empty{/for}
<ng-template/>
  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: for_data_slots.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
items: string[];
item: any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
} ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
exportthis.message = 'hello';
this.items = [];
}
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
{{$index}} {{$count}} {{$first}} {{$last}}{#for item of items; track item}
  {{$index}} {{$count}} {{$first}} {{$last}}
{/for}{{$index}} {{$count}} {{$first}} {{$last}}
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
{{$index}} {{$count}} {{$first}} {{$last}}{#for item of items; track item}
  {{$index}} {{$count}} {{$first}} {{$last}}
{/for}{{$index}} {{$count}} {{$first}} {{$last}}
  `,
} impomessage: string;
items: never[];
$index: any;
$count: any;
$first: any;
$last: any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: for_template_track_method_root.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
ctrackFn(_index, item) {
return item;
}
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
  {{message}}
  {#for item of items; track trackFn($index, item)}{/for}
<i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#for item of items; track trackFn($index, item)}{/for}
</div>
  `,
}]
}] });/****************************************************************************************************
 import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
items: {
name: string;
}[];
trackFstatic ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: for_template_track_method_nested.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
exportthis.message = 'hello';
this.items = [{ name: 'one' }, { name: 'two' }, { name: 'three' }];
}
trackFn(_index, item) {
return item;
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<  </ng-template>
</div>
  `, isInline: true });
i0.ɵɵnargs: [{
template: `
<div>
  {{me{#for item of items; track trackFn($index, item)}{/for}
  </ng-template>  `,
}]
}] }); ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
items: {
name: string;
}[];static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/**** ****************************************************************************************************/
import { Component } from '@angular/core';
it}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
{#for item of items; track item.name[0].toUpperCase()}{{item.name}}{/for}
{#for otherItem of otherItems; track otherItem.name[0].toUpperCase()}{{otherItem.name}}{/for}
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
{  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: for_pure_track_reuse.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
items:}[];
otherItems: {
name: string;
}[];
item: static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: for_impure_track_reuse.js
 import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
this.items = [{ name: 'one' }, { name: 'two' }, { name: 'three' }];
this.otherItems = [{ name: 'four' }, { name: 'five' }, { name: 'six' }];
}
trackFn(item, message) {
return message + item.name;
}
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
{  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
{#for item of items; track trackFn(item, message)}{{item.name}}{/for}
{#for }]
} ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
message: string;
items: {
name: otherItems: {
name: string;
}[];
trackFn(item: any, message: string): string;
item: any;
otherItem: any;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 export class MyApp {
constructor() {
this.items = [];
}
trackFn(obj, arr) {
return null;
}
}
MyApp.{#for item of items; track trackFn({foo: item, bar: item}, [item, item])}{{item.name}}{/for}
  `, isInline: true });type: Component,
args: [{
templa}] });/****************************************************************************************************
 * PARTIAL FILE: for_track_literals.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
items: never[];
trackFn(obj: any, arr: any[]): null;static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}