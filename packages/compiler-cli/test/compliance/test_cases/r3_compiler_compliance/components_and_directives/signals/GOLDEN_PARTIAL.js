/****************************************************************************************************
 * PARTIAL FILE: component.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class OtherCmp {
}
OtherCmp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: OtherCmp, deps: [], target: i0.ɵɵFactoryTarget.Component });
OtherCmp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: OtherCmp, isStandalone: true, isSignal: true, selector: "other-cmp", ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: OtherCmp, decorators: [{
type: Component,
args: [{
signals: true,
standalone: true,
selector: 'other-cmp',
template: '',
}]
}] });
export class SignalCmp {
}
SignalCmp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SignalCmp, deps: [], target: i0.ɵɵFactoryTarget.Component });
SignalCmp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SignalCmp, isStandalone: true, isSignal: true, selector: "ng-component", ngImport: i0, template: '<other-cmp></other-cmp>', isInline: true, dependencies: [{ kind: "component", type: OtherCmp, selector: "other-cmp" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SignalCmp, decorators: [{
type: Component,
args: [{
signals: true,
standalone: true,
template: '<other-cmp></other-cmp>',
imports: [OtherCmp],
}]
}] });export declare class SignalCmp {
static ɵfac: i0.ɵɵFactoryDeclaration<SignalCmp, never>;
static ɵcmp: i0.ɵɵComponentDeclaration<SignalCmp, "ng-component", never, {}, {}, never, never, true, never, true>;
}/****************************************************************************************************
 * PARTIAL FILE: directive.js
 import * as i0 from "@angular/core";
export class SignalDir {
}SignalDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: SignalDir, isSignal: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SignalDir, decorators: [{
tsignals: true,
}]
} ****************************************************************************************************/
import * as i0 from "@angular/core";
exportstatic ɵdir: i0.ɵɵDirectiveDeclaration<SignalDir, never, never, {}, {}, never, never, false, never, true>;
}