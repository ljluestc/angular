/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */import {ɵsetEnabledBlockTypes as setEnabledBlockTypes} from '@angular/compiler/src/jit_compiler_facade';
import {Component, Injectable, Input} from '@angular/core';
import {ComponentFixtureAutoDetect, ComponentFixtureNoNgZone, TestBed, waitForAsync, withModule} from '@angular/core/testing';
import {dispatchEvent} from '@angular/platform-browser/testing/src/browser_util';
import {expect} from '@angular/platform-browser/testing/src/matchers';@Component({selector: 'simple-comp', template: `<span>Original {{simpleBinding}}</span>`})
@Injectable()
class SimpleComp {
  simpleBinding: string;
  constructor() {
    this.simpleBinding = 'Simple';
  }
}@Component({
  selector: 'deferred-comp',
  standalone: true,
  template: `<div>Deferred Component</div>`,
})
class DeferredComp {
}@Component({
  selector: 'second-deferred-comp',
  standalone: true,
  template: `<div>More Deferred Component</div>`,
})
class SecondDeferredComp {
}@Component({
  selector: 'my-if-comp',
  template: `MyIf(<span *ngIf="showMore">More</span>)`,
})
@Injectable()
class MyIfComp {
  showMore: boolean = false;
}@Component({selector: 'autodetect-comp', template: `<span (click)='click()'>{{text}}</span>`})
class AutoDetectComp {
  text: string = '1';  click() {
    this.text += '1';
  }
}@Component({selector: 'async-comp', template: `<span (click)='click()'>{{text}}</span>`})
class AsyncComp {
  text: string = '1';  click() {
    Promise.resolve(null).then((_) => {
this.text += '1';
    });
  }
}@Component({selector: 'async-child-comp', template: '<span>{{localText}}</span>'})
class AsyncChildComp {
  localText: string = '';  @Input()
  set text(value: string) {
    Promise.resolve(null).then((_) => {
this.localText = value;
    });
  }
}@Component({
  selector: 'async-change-comp',
  template: `<async-child-comp (click)='click()' [text]="text"></async-child-comp>`
})
class AsyncChangeComp {
  text: string = '1';  click() {
    this.text += '1';
  }
}@Component({selector: 'async-timeout-comp', template: `<span (click)='click()'>{{text}}</span>`})
class AsyncTimeoutComp {
  text: string = '1';  click() {
    setTimeout(() => {
this.text += '1';
    }, 10);
  }
}@Component(
    {selector: 'nested-async-timeout-comp', template: `<span (click)='click()'>{{text}}</span>`})
class NestedAsyncTimeoutComp {
  text: string = '1';  click() {
    setTimeout(() => {
setTimeout(() => {
  this.text += '1';
}, 10);
    }, 10);
  }
}{
  describe('ComponentFixture', () => {
    beforeEach(() => setEnabledBlockTypes(['defer']));
    afterEach(() => setEnabledBlockTypes([]));    beforeEach(waitForAsync(() => {
TestBed.configureTestingModule({
  declarations: [
AutoDetectComp, AsyncComp, AsyncTimeoutComp, NestedAsyncTimeoutComp, AsyncChangeComp,
MyIfComp, SimpleComp, AsyncChildComp
  ]
});
    }));    it('should auto detect changes if autoDetectChanges is called', () => {
const componentFixture = TestBed.createComponent(AutoDetectComp);
expect(componentFixture.ngZone).not.toBeNull();
componentFixture.autoDetectChanges();
expect(componentFixture.nativeElement).toHaveText('1');const element = componentFixture.debugElement.children[0];
dispatchEvent(element.nativeElement, 'click');expect(componentFixture.isStable()).toBe(true);
expect(componentFixture.nativeElement).toHaveText('11');
    });    it('should auto detect changes if ComponentFixtureAutoDetect is provided as true',
 withModule({providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]}, () => {
ponentFixture = TestBed.createComponent(AutoDetectComp);
mponentFixture.nativeElement).toHaveText('1');ment = componentFixture.debugElement.children[0];
vent(element.nativeElement, 'click');mponentFixture.nativeElement).toHaveText('11');
 }));    it('should signal through whenStable when the fixture is stable (autoDetectChanges)',
 waitForAsync(() => {
ponentFixture = TestBed.createComponent(AsyncComp);
Fixture.autoDetectChanges();
mponentFixture.nativeElement).toHaveText('1');ment = componentFixture.debugElement.children[0];
vent(element.nativeElement, 'click');
mponentFixture.nativeElement).toHaveText('1');ent is updated asynchronously. Wait for the fixture to become stable
 checking for new value.
mponentFixture.isStable()).toBe(false);
Fixture.whenStable().then((waited) => {
expect(waited).toBe(true);
expect(componentFixture.nativeElement).toHaveText('11'); }));    it('should signal through isStable when the fixture is stable (no autoDetectChanges)',
 waitForAsync(() => {
ponentFixture = TestBed.createComponent(AsyncComp);Fixture.detectChanges();
mponentFixture.nativeElement).toHaveText('1');ment = componentFixture.debugElement.children[0];
vent(element.nativeElement, 'click');
mponentFixture.nativeElement).toHaveText('1');ent is updated asynchronously. Wait for the fixture to become stable
 checking.
Fixture.whenStable().then((waited) => {
expect(waited).toBe(true);
componentFixture.detectChanges();
expect(componentFixture.nativeElement).toHaveText('11'); }));    it('should wait for macroTask(setTimeout) while checking for whenStable ' +
'(autoDetectChanges)',
 waitForAsync(() => {
ponentFixture = TestBed.createComponent(AsyncTimeoutComp);
Fixture.autoDetectChanges();
mponentFixture.nativeElement).toHaveText('1');ment = componentFixture.debugElement.children[0];
vent(element.nativeElement, 'click');
mponentFixture.nativeElement).toHaveText('1');ent is updated asynchronously. Wait for the fixture to become
 before checking for new value.
mponentFixture.isStable()).toBe(false);
Fixture.whenStable().then((waited) => {
expect(waited).toBe(true);
expect(componentFixture.nativeElement).toHaveText('11'); }));    it('should wait for macroTask(setTimeout) while checking for whenStable ' +
'(no autoDetectChanges)',
 waitForAsync(() => {
ponentFixture = TestBed.createComponent(AsyncTimeoutComp);
Fixture.detectChanges();
mponentFixture.nativeElement).toHaveText('1');ment = componentFixture.debugElement.children[0];
vent(element.nativeElement, 'click');
mponentFixture.nativeElement).toHaveText('1');ent is updated asynchronously. Wait for the fixture to become
 before checking for new value.
mponentFixture.isStable()).toBe(false);
Fixture.whenStable().then((waited) => {
expect(waited).toBe(true);
componentFixture.detectChanges();
expect(componentFixture.nativeElement).toHaveText('11'); }));    it('should wait for nested macroTasks(setTimeout) while checking for whenStable ' +
'(autoDetectChanges)',
 waitForAsync(() => {
ponentFixture = TestBed.createComponent(NestedAsyncTimeoutComp);Fixture.autoDetectChanges();
mponentFixture.nativeElement).toHaveText('1');ment = componentFixture.debugElement.children[0];
vent(element.nativeElement, 'click');
mponentFixture.nativeElement).toHaveText('1');ent is updated asynchronously. Wait for the fixture to become
 before checking for new value.
mponentFixture.isStable()).toBe(false);
Fixture.whenStable().then((waited) => {
expect(waited).toBe(true);
expect(componentFixture.nativeElement).toHaveText('11'); }));    it('should wait for nested macroTasks(setTimeout) while checking for whenStable ' +
'(no autoDetectChanges)',
 waitForAsync(() => {
ponentFixture = TestBed.createComponent(NestedAsyncTimeoutComp);
Fixture.detectChanges();
mponentFixture.nativeElement).toHaveText('1');ment = componentFixture.debugElement.children[0];
vent(element.nativeElement, 'click');
mponentFixture.nativeElement).toHaveText('1');ent is updated asynchronously. Wait for the fixture to become
 before checking for new value.
mponentFixture.isStable()).toBe(false);
Fixture.whenStable().then((waited) => {
expect(waited).toBe(true);
componentFixture.detectChanges();
expect(componentFixture.nativeElement).toHaveText('11'); }));    it('should stabilize after async task in change detection (autoDetectChanges)',
 waitForAsync(() => {
ponentFixture = TestBed.createComponent(AsyncChangeComp);Fixture.autoDetectChanges();
Fixture.whenStable().then((_) => {
expect(componentFixture.nativeElement).toHaveText('1');const element = componentFixture.debugElement.children[0];
dispatchEvent(element.nativeElement, 'click');componentFixture.whenStable().then((_) => {
  expect(componentFixture.nativeElement).toHaveText('11');
}); }));    it('should stabilize after async task in change detection(no autoDetectChanges)',
 waitForAsync(() => {
ponentFixture = TestBed.createComponent(AsyncChangeComp);
Fixture.detectChanges();
Fixture.whenStable().then((_) => {
// Run detectChanges again so that stabilized value is reflected in the
// DOM.
componentFixture.detectChanges();
expect(componentFixture.nativeElement).toHaveText('1');const element = componentFixture.debugElement.children[0];
dispatchEvent(element.nativeElement, 'click');
componentFixture.detectChanges();componentFixture.whenStable().then((_) => {
  // Run detectChanges again so that stabilized value is reflected in
  // the DOM.
  componentFixture.detectChanges();
  expect(componentFixture.nativeElement).toHaveText('11');
}); }));    describe('defer', () => {
it('should return all defer blocks in the component', async () => {
  @Component({
selector: 'defer-comp',
standalone: true,
imports: [DeferredComp, SecondDeferredComp],
template: `<div>
 {#defer on immediate}
   <DeferredComp />
 {/defer}
 {#defer on idle}
   <SecondDeferredComp />
 {/defer}
</div>`
  })
  class DeferComp {
  }  const componentFixture = TestBed.createComponent(DeferComp);
  const deferBlocks = await componentFixture.getDeferBlocks();
  expect(deferBlocks.length).toBe(2);
});
    });    describe('No NgZone', () => {
beforeEach(() => {
  TestBed.configureTestingModule(
 {providers: [{provide: ComponentFixtureNoNgZone, useValue: true}]});
});it('calling autoDetectChanges raises an error', () => {
  const componentFixture = TestBed.createComponent(SimpleComp);
  expect(() => {
componentFixture.autoDetectChanges();
  }).toThrowError(/Cannot call autoDetectChanges when ComponentFixtureNoNgZone is set/);
});it('should instantiate a component with valid DOM', waitForAsync(() => {
const componentFixture = TestBed.createComponent(SimpleComp);expect(componentFixture.ngZone).toBeNull();
componentFixture.detectChanges();
expect(componentFixture.nativeElement).toHaveText('Original Simple');it('should allow changing members of the component', waitForAsync(() => {
const componentFixture = TestBed.createComponent(MyIfComp);componentFixture.detectChanges();
expect(componentFixture.nativeElement).toHaveText('MyIf()');componentFixture.componentInstance.showMore = true;
componentFixture.detectChanges();
expect(componentFixture.nativeElement).toHaveText('MyIf(More)');    });
  });
}
