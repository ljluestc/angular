/****************************************************************************************************
 * PARTIAL FILE: basic_deferred.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
}
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
  {{message}}
  {#defer}Deferred content{/defer}
  <p>Content after defer block</p>
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#defer}Deferred content{/defer}
  <p>Content after defer block</p>
</div>
  `,
}]
}] }); import * as i0 from "@angular/core";
export class MyApp {
cthis.loadingMessage = 'Calendar is loading';
}
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
<div>
 <button></button>
{:loading} {{loadingMessage}}
{  {/defer}
</div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
  {{message}}
  {#defer}
<button></button>
{:loading} {{loadingMessage}}
{:placeholder} <img src="loading.gif">
{:error} Calendar failed to load <i>sad</i>
  {/defer}
</div>
  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: deferred_secondary_blocks.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
exportloadingMessage: string;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARimport { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
{#defe  {:placeholder minimum 2s} <img src="placeholder.gif">
{/defer}
  `, isInline: true });
iargs: [{
templa  <button></button>
  {:placeholder minimum 2s} <img src="placeholder.gif">
{/defer}
 }] });/****************************************************************************************************
 * PARimport * as i0 from "@angular/core";
export declare class MyApp {
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
s * PARimport { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
{  `, itype: Component,
args: [{
template: `
{#defer}
  <button></button>
  {:loading minimum 2s; after 500ms} <img src="loading.gif">
{/defer}
 }] });/****************************************************************************************************
 * PARimport * as i0 from "@angular/core";
export declare class MyApp {
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: deferred_with_local_deps.js
 ****************************************************************************************************/
iexportEagerDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EagerDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EagerDtype: Directive,
args: [{ selector: 'eager-dep', standalone: true }]
}] });
export class LazyDep {
}LazyDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: LazyDep, isStandalone: true, selector: "lazy-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LazyDep, decorators: [{
type: Directive,
aexportLoadingDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LoadingDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
Loadintype: Directive,
args: [{ selector: 'loading-dep', standalone: true }]
}] });
export class MyApp {
}MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, isStandalone: true, selector: "ng-component", ngImport: i0, template: `
<div>
  <eager-dep/>
 {:load</div>
  `, isInline: true, dependencies: [{ kind: "directive", type: EagerDep, selector: "eager-dep" }, { kind: "directive", type: LoadingDep, selector: "loading-dep" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: Component,
args: [{
template: `
<div>
 <lazy-dep/>
{:loading} <loading-dep/>
  {/defer}
</div>
  `,
standa}]
}] });/****************************************************************************************************
 * PARTIAL FILE: deferred_with_local_deps.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class EagerDep {
static ɵfac: i0.ɵɵFactoryDeclaration<EagerDep, never>;
sexport declare class LazyDep {
static ɵfac: i0.ɵɵFactoryDeclaration<LazyDep, never>;
static ɵdir: i0.ɵɵDirectiveDeclaration<LazyDep, "lazy-dep", never, {}, {}, never, never, true, never>;
}
export declare class LoadingDep {
static}
exportstatic ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, true, never>;
}/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps_eager.js
 ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
eEagerDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EagerDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EagerDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: EagerDep, isStandalone: true, selector: "eager-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EagerDep, decorators: [{
type: Directive,
args: [{ selector: 'eager-dep', standalone: true }]
}] });/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps_eager.d.ts
 ****************************************************************************************************/
importstatic ɵfac: i0.ɵɵFactoryDeclaration<EagerDep, never>;
s * PARTIAL FILE: deferred_with_external_deps_lazy.js
 ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class LazyDep {
}
LazyDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LazyDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LazyDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: LazyDep, isStandalone: true, selector: "lazy-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LazyDep, decorators: [{
type: Directive,
args: [{ selector: 'lazy-dep', standalone: true }]
}] });/****************************************************************************************************
 * PARimport * as i0 from "@angular/core";
export declare class LazyDep {
static ɵfac: i0.ɵɵFactoryDeclaration<LazyDep, never>;
static * PARTIAL FILE: deferred_with_external_deps_loading.js
 }
LoadingDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LoadingDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LoadingDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: LoadingDep, isStandalone: true, selector: "loading-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LoadingDep, decorators: [{
type: Directive,
args: [{ selector: 'loading-dep', standalone: true }]
}] });/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps_loading.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class LoadingDep {
static}/****************************************************************************************************
 * PARimport { Component } from '@angular/core';
import { EagerDep } from './deferred_with_external_deps_eager';
import { LazyDep } from './deferred_with_external_deps_lazy';
importMyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
M<lazy-dep/>
{:loading} <loading-dep/>
  {/defer}
</div>
  `, isInline: true, dependencies: [{ kind: "directive", type: EagerDep, selector: "eager-dep" }, { kind: "directive", type: LoadingDep, selector: "loading-dep" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
type: template: `
<div>
  <eager-dep/>
  {#defer}
<lazy-dep/>
{:load<standalone: true,
import}] });/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps.d.ts
 ****************************************************************************************************/
import}/****************************************************************************************************
 export class MyApp {
constructor() {
this.message = 'hello';
this.isReady = true;
}
isVisible() {
return}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
{{message}}
{#defer when isVisible() || isReady; on idle, timer(1337); on immediate, hover;
  on i{  `, isInline: true });
i0.ɵɵnargs: {{message}}
{#defer when isVisible() || isReady; on idle, timer(1337); on immediate, hover;
  on interaction(button); on viewport(button)}
{{message}}
{  `,
} * PARTIAL FILE: deferred_with_triggers.d.ts
 isReady: boolean;
isVisible(): boolean;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: deferred_with_prefetch_triggers.js
 *****import * as i0 from "@angular/core";
export class MyApp {
constructor() {
this.message = 'hello';
this.isReady = true;
}r}
MyApp.{{mess  prefetch on immediate, hover; prefetch on interaction(button); prefetch on viewport(button)}
{{message}}
{:placeholder}<button #button>Click me</button>
  {/defer}
 type: Component,
a  prefetch on immediate, hover; prefetch on interaction(button); prefetch on viewport(button)}
{{message}}
{  `,
}]
}] });/****************************************************************************************************
 * PARTIAL FILE: deferred_with_prefetch_triggers.d.ts
 ****************************************************************************************************/
imessage: string;
isReady: boolean;
isVisistatic ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}/****************************************************************************************************
 * PARTIAL FILE: deferred_when_with_pipe.js
 ****************************************************************************************************/
import { Component, Pipe } from '@angular/core';
importt}
}
TestPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: TestPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TestPitype: Pipe,
args: [{ standalone: true, name: 'testPipe' }]
}] });
export class MyApp {
cthis.isReady = true;
}}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, isStandalone: true, selector: "ng-component", ngImport: i0, template: `
{{message}}
{#defer when isVisible() && (isReady | testPipe)}Hello{/defer}
  `, isInline: true });
i0.ɵɵnargs: [{
template: `
{{message}}
{standalone: true,
imports: [TestPipe],
}] * PARTIAL FILE: deferred_when_with_pipe.d.ts
 export declare class TestPipe {
transform(): boolean;
static ɵfac: i0.ɵɵFactoryDeclaration<TestPipe, never>;
static ɵpipe: i0.ɵɵPipeDeclaration<TestPipe, "testPipe", true>;
}
export declare class MyApp {
misVisible(): boolean;
static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, true, never>;
}