/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */import {Component, forwardRef, ɵɵdefineNgModule, ɵɵgetComponentDepsFactory, ɵɵsetNgModuleScope} from '@angular/core';
import {ComponentType} from '@angular/core/src/render3';describe('component dependencies in local compilation', () => {
  it('should compute correct set of dependencies when importing ng-modules directly', () => {
    @Component({selector: 'sub'})
    class SubComponent {
    }    class SubModule {
static ɵmod = ɵɵdefineNgModule({type: SubModule});
    }
    ɵɵsetNgModuleScope(SubModule, {exports: [SubComponent]});    @Component({})
    class MainComponent {
    }    class MainModule {
static ɵmod = ɵɵdefineNgModule({type: MainModule});
    }
    ɵɵsetNgModuleScope(MainModule, {imports: [SubModule], declarations: [MainComponent]});    const deps = ɵɵgetComponentDepsFactory(MainComponent as ComponentType<any>)();    expect(deps).toEqual(jasmine.arrayWithExactContents([SubComponent, MainComponent]));
  });  it('should compute correct set of dependencies when importing ng-modules with providers', () => {
    @Component({selector: 'sub'})
    class SubComponent {
    }    class SubModule {
static ɵmod = ɵɵdefineNgModule({type: SubModule});
    }
    ɵɵsetNgModuleScope(SubModule, {exports: [SubComponent]});    @Component({})
    class MainComponent {
    }    class MainModule {
static ɵmod = ɵɵdefineNgModule({type: MainModule});
    }
    ɵɵsetNgModuleScope(
  MainModule,
  {imports: [{ngModule: SubModule, providers: []}], declarations: [MainComponent]});    const deps = ɵɵgetComponentDepsFactory(MainComponent as ComponentType<any>)();    expect(deps).toEqual(jasmine.arrayWithExactContents([SubComponent, MainComponent]));
  });  it('should compute correct set of dependencies when importing ng-modules using forward ref',
     () => {
 @Component({selector: 'sub'})
 class SubComponent {
 } class SubModule {
od = ɵɵdefineNgModule({type: SubModule});
 }
 ɵɵsetNgModuleScope(SubModule, {exports: [forwardRef(() => SubComponent)]}); @Component({})
 class MainComponent {
 } class MainModule {
od = ɵɵdefineNgModule({type: MainModule});
 }
 ɵɵsetNgModuleScope(MainModule, {
[forwardRef(() => SubModule)],
ons: [forwardRef(() => MainComponent)]
 }); const deps = ɵɵgetComponentDepsFactory(MainComponent as ComponentType<any>)(); expect(deps).toEqual(jasmine.arrayWithExactContents([SubComponent, MainComponent]));
     });  it('should compute correct set of dependencies when importing ng-modules with providers using forward ref',
     () => {
 @Component({selector: 'sub'})
 class SubComponent {
 } class SubModule {
od = ɵɵdefineNgModule({type: SubModule});
 }
 ɵɵsetNgModuleScope(SubModule, {exports: [SubComponent]}); @Component({})
 class MainComponent {
 } class MainModule {
od = ɵɵdefineNgModule({type: MainModule});
 }
 ɵɵsetNgModuleScope(MainModule, {
[forwardRef(() => ({ngModule: SubModule, providers: []}))],
ons: [MainComponent]
 }); const deps = ɵɵgetComponentDepsFactory(MainComponent as ComponentType<any>)(); expect(deps).toEqual(jasmine.arrayWithExactContents([SubComponent, MainComponent]));
     });
});
