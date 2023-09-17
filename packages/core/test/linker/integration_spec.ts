/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */import {TestBedCompiler} from '@angular/core/testing/src/test_bed_compiler';
import {createMouseEvent, dispatchEvent, el, isCommentNode} from '@angular/platform-browser/testing/src/browser_util';
import {expect} from '@angular/platform-browser/testing/src/matchers';import {stringify} from '../../src/util/stringify';const ANCHOR_ELEMENT = new InjectionToken('AnchorElement');describe('integration tests', function() {
  describe('react to record changes', function() {
    it('should consume text node changes', () => {      const template = '<div>{{ctxProp}}</div>';      const fixture = TestBed.createComponent(MyComp);      expect(fixture.nativeElement).toHaveText('Hello World!');
    });    it('should update text node with a blank string when interpolation evaluates to null', () => {
      TestBed.configureTestingModule({declarations: [MyComp]});      TestBed.overrideComponent(MyComp, {set: {temp      fixture.componentInstance.ctxProp = null!;      fixtu      const fixture = TestBed.configureTestingModule({declarations: [MyComp]})
.overri      fixture.detectChanges();
      expect(fixture.nativeElement).toHaveText('true|false');      TestBed.configureTestingModule({declarations:`<div>before{{'0'}}a{{'1'}}b{{'2'}}c{{'3'}}d{{'4      expecture =
  TestB       });    it('should consume element binding changes', () => {
      TestBed.configureTestingModule({declarations: [MyComp]});      fixture.detectChanges();      expect(fixture.      TestBed.configureTestingModule({declaratio      fixtu      const template = '<div [attr.foo]="ctxProp"></div>';
      T      fixt    });    it('should remove style when when style expression evaluates to null', () => {
      TestBed.configureTestingModule({declarations: [MyComp]});      fixture.detectChanges();    });    it('shouldverrideComponent(MyComp, {set: {template}});      TestBed.c      fixture.detectChanges();
      e.overrideC      f    });    it('should consume directive watch expression change.', () => {
      TestBed.configureTestingModule({declarations: [MyComp, MyDir]});
      c'<div my-dir elprop="Hi there!"></div>' +'<div my-dir       TestBed.overrideComponent(MyComp, {set: {template}});      fixture.detectChanges();      const containerSpan = fixture.debugElement.children[0];      expect(containerSpan.children[0].injector.get(MyDir).dirProp).toEqual('Hello World!');
      expect(containerSpan.chi      e    });    describe('pipes', () => {
      i        const template = '<div my-dir #dir="mydir" [elprop]="ctxProp | double"></div>';
        TestBed.overrideComponent(MyComp, {set:       TestBed.configureTestingModule({declarations: [MyComp, ChildComp, MyDir]});
      c      TestBed.overrideComponent(MyComp, {set: {tem      expect(fixture.nativeElement).toHaveText('nodupl      TestBed.configureTestingModule({declarations: [MyComp, IdDir]});
      const template = '<p [id]="ctxProp"></p>';
      T      expe             e    });    it('should read directives metadata from their binding token', () => {
      TestBed.configureTestingModule({declarations: [MyComp, PrivateImpl, NeedsPublicApi]});
      c      const fixture = TestBed.createComponent(MyComp);'<ng-template pollutedContext let-foo="bar">{{foo}}</ng-template><ng-template noContext let-f    });    it('should not deta      const template =      TestBed.overrideComponent(MyComp, {set: {template}});
      const fixture = TestBed.      c   .fin       Node.COMMENT_NODE)!.injector.get(SomeViewport);
      e      fixture.detectChanges();      expect(someViewport.container.length).toBe(2);
      expect(fixture.debugElement.children.lengt        TestBed.configureTestingModule({declarations: [MyComp, ChildComp]});
               expect(fixture.debugElement.children[0].references!['y'])
 .toBeI               TestBed.overrideComponent(MyComp, {set: {template}});
        const fixture = TestBed.createComponent(MyComp        expect(alice).not.toBe(bob);
      });      it('should assign the component instance to a ref- with shorthand syntax', () => {
        TestBed.configureTestingModule({declarations: [MyComp, ChildComp]});        const fixture = TestBed.configureTestingModule({declarations: [MyComp]})
  .over      });      it('should preserve case', () => {        const template = '<p><child-cmp ref-superAlice        const fixture = TestBed.createComponent(MyComp);        expect(fixture.debugElement.children[0].children[0].references!['superAlice'])
 .toBeInst                             expect(cmp.numberOfChecks).toEqual(1);        fixture.componentInstance.ctxProp = 'two';
        fixture.detectChanges();
               it('should allow to destroy a component from w  const cmp: PushCmpWithHostEvent = cmpEl.injector.get(PushCmpWithHostEvent);               const fixture =        fixture.detectChanges();        expect(cmp.numberOfChecks).toEqual(1);        // regular element
        cmpEl.children[0].trig                      fixture.detectChanges();
               expect(cmp.numberOfChe        TestBed.configureTestingModule({declarations: [MyComp, [[PushCmpWithRef]]]});
        const template = '<push-cmp-with-ref [prop]="ctxProp" #cmp></push-cmp-with-ref>';
               fixture.detectChanges();TestBed.overrideComponent(MyComp, {set: {template}});      TestBed.configureTestingModule({        sc        declarations: [MyComp, SomeDirective, CompWithHost],
        schemas: [NO_ERRORS_SCHEMA],
      }}ireEvent('fired !');
       }));    it('should support events via EventEmitter on template elements', waitForAsync(() => {
ture =     }  .createComponent(MyCom  debugElement => debugElement.nativeNode.nodeType === Node.COMMENT_NODE)!;tter = tc.injector.get(DirectiveEmittingEvent);
omp = fstener.msg).toEqual('');vent.subscribe({
next: () => {  expect(myComp.ctxProp).toEqual('fired !ture = TestBed.createComponent(MyComp);
= fixtureetectChanges();r.control).toEqual('one');olChange.subscribe({
next: () => {      const listener = tc.injector.get(DirectiveListeningDomEvent);
      d      exp      @Component({host: {'role': 'button'}, template: ''})      }      TestBed.configureTestingModule({declarati    });    it('should support updating host element via       const template = '<div update-host-attributes></div>';
      Test    });      e    });        }TestBed.configureTestingModule({declarations: [MyComp, DirectiveWithHostListener]})
   .overrideComponent(
   MyComp,
   {set:       fixture.detectChanges();
      const tc = fixture.debugElement.children[0];          expect(() => TestBed.createComponent(MyComp))               const dispatche        expect(isPrevented(dispatchedEvent2)).toBe(false);        expect(fixture.debugElement.children[1    }    it('should support render global events from multiple directives', () => {
      TestBed.configureTesting      c      e      dispatchEvent(getDOM().getGlobalEventTarget(doc, 'window'), 'domEvent');
      e      beforeEach(() => { MyComp, {add: {template: '<div><dynamic-vp #dynamic></dynamic-vp></div>'}});
      });      describe('.createComponent', () => {
         fixture.detectChanges();  cons  .toHaveText('dynamic greet');
  expec}@NgModule({ providers: [{provide: 'someToken', useValue: ' providers: [{provide: 'someToken', usclass M   TestBed.configureTestingModule({imports: [RootModule]}).createComponent(RootComp);
const compiler = TestBed.inject(Compiler);   <Compon}@NgModule({providers: [{provide: 'someToken', useValue: 'someValue'}]})
class MyModule {
}const compFixture =
   TestBed.configureTestingModu// and         });        it('should throw with destroyed views', waitForAsync(()    .createComponent(MyComp);
  const tc = fixture.debugElement.children[0].children[0];
  const dyn  fixture.detectChanges();  ref.destroy();
  expec  const tc = fixture.debugElement.children[0].ch  const ref = dynamicVp.  expect(() => {  }).toThrowError('Cannot move a destroyed View in a ViewContainer!');
}));      const template = '      const fixture = TestBed.createComponent(MyComp);      const tc = fixture.debugElement.children[0];
      const needsAttribute = tc.injector.get(NeedsAttr      });
      con      const fix.toHaveText(    });
  });  describe('dependency injection', () => {
    it('should support bindings', (   <directive-consu        dDirectiveConsumingInjectableUnbounded        schemas: [NO_ERRORS_SCHEMA],
      });
      c <directi      const fixture = TestBed.createComponent(MyComp);      const comp = fixture    });        declarations:   <par </child-consuming-event-bus> </grand-parent-providing-event-bus>
`;
      T      TestBed.conf      const template = ` <directive-consuming-injectab   </component-providing-loggi      TestBed.overrideComponent(MyComp, {set: {template}});
      c  {decl             class NoSelectorComponent {.toEqual('ng-component');
    });
  });  describe('error handling', () => {
    it('s.toThrowError(`Unexpected value '${
   stringify(      t      } catch (e) { .toContain(`No template specified for component ${stringify(ComponentWithoutView)}`);
      }  });  it('should s    const template = '<simple-imp-cmp></simple-imp-cmp>';
    TestBed.overrideComponent(MyComp, {set: {template}});    con    expect(fixture.nati      @ViewChild('templateRef', {static: true}) templateRef!:    }    @Component({selector: 'test', templat           menuItemsContainer!: ViewContainerRef;
    }    beforeEach(() => {    });    const createElWithContent = (content: string, tagName = 'span') => {
      const element = document      const menuItemsContainerfixture.componentInstance.cfr.resolveComponentFact      const cmptRefWithCc = dynamicCmptFactory.create(Injector.NULL, [[createElWithContent('Cc')]]);      menuItemsContainer.insert(cmptRefWithAa.instance.templateRef.createEmbeddedView({}));
      m      e      TestBed.overrideTemplate(
DynamicMenuItem,      const menuItemsContainerfixture.componentInstance.cfr.resolveComponentFactory(DynamicMenuItem);      const cmptRefWithAa = dynamicCmptFactory.create(
Injector.NULL, [[createElWithContent('AInjectInjecto      menuItemsContainer.insert(cmptRefWithCc.instance.templateRef.createEmbeddedView({}));      menuItemsContainer.move(menuItemsContainer.get(0)!, 1);
      expect(fixture.nativeEle       () => {
verrideTe  `<ng-template #templateRef><ng-content select="span"></ng-content>{{itemContent}}<ng-content select="button"></ng-content></ng-template>`);onfigureTestingModule({declarations: [TestCmp, DynamicMenuItem]});ture = TestBed.createComponent(TestCmp);
uItemsCtRefWithCc = dynamicCmptFactory.fixture.componentInstance.cfr.resolveComponentFactory(DynamicMenuItem);      const cmptRefWithAa = dynamicCmptFactory.create(Injector.NULL, [[]]);
      c   });  describe('Property bindings',       TestBed.configu      const fixture = TestBed.createCo      eonfigureTestingModule({declarations: [MyComp, MyDir]});
plate = '<div my-dir [elprop]="ctxProp"></div>';
verrideComponent(MyComp, {set: {template}});
 => TestBeM      fixture.detectChanges();      const html = fixture.nativeElement.innerHTML;
      expect(html).toContain('ng-reflect-dir-prop="hello"');
       TestBed.configureTestingModule({declarations: [ParentCmp, SomeCmpWithInput]});
      const fixture = TestBed.createComponent(ParentCmp);
      fixture.detectChanges();      const html = fixtu      Tes      Test      const fixture = TestBed.createComponent(MyComp);      fixture.componentInstance.ct      fixture.detectChanges();      expect(fixture.nativeElement.innerHTML).not.toContain('ng-reflect-');
    });      fixture.detectChanges();      expect(fixture.nativeElem   .overrideCo   .createComponent(MyComp);      fixture.componentInstance.ctxBoolProp = true;
      fixture.detectChanges();      let html = fixture.nativeElement.innerHTML;
      expec      fixture.detectChange      expect(html).not.toContain('ng-reflect');
    });      expect(html).toContain('bindings={');    });        declarations: [MyComp, DirectiveWithPropDecorators],      });
      const template = '<with-prop-decorators elProp="aaa"></with-prop-decorators>';
      TestBed.overrideComponent(MyComp, {set: {te    });    it('should support host binding decorators', () => {
      TestBed.configureT        schemas: [NO_ERRORS_SCHEMA],      const template = '<with-prop-decorators></with-prop-decorators>';
      TestBed.overrideComponent(MyComp, {set: {templatTestBed.overrideComponent(MyComp, {set: {template}});
const fixdeclarations: [        const dir = fixtur        getDOM().dispatchEvent(native, createMouseEvent('click'));        expect(dir.target).toBe(native);
           TestBed.configureTestingModule({
        declarations: [MyComp, Compselector: 'comp',
template: '<span>foo</span>  <span>bar</sp        const fixture = TestBed.createComponent(MyComp);        const el = fixture.nativeElement;
        c        expect(svg.namespaceURI).toEqual('h        expect(firstAttribute.name).toEqual('xlink:href');
        expect(firstAttribute.namespaceURI).toEqual('http://www.w3.org/1999/xlink');
      }        e      it('should support attributes with namespace', (        const template = '<svg:use xlink:href="#id" />';
        TestBed.overrideComponent(SomeCmp, {set: {template}});
               const template = '<svg:use [attr.xlink:      }  }class ComponentWithDefaultInterpolation {
  text = 'Default Interpolation';
}@Compo  constructor() {class SimpleImperativeViewComponent {    const hostElement = self.n  }class DynamicViewport {
  priva    return this.vc.createCompo  }  insert(viewRef: ViewRef, index?: number): ViewRef {
    ret}@Directive({selector: })  numbe    this.numberOfChecks = 0;    this.numberOfChecks++;
    ret}@Compo}@Component({}@Component({
  selector: 'push-cmp-with-async',
  cha})
class Pus    this.promise = new Promise((resolve) => {
      this.resolve = resolve;
    });  }
}@Compo  ctxProp: string;  ctxBoolProp: boolean;
  ctxAr    t    }    this.ctxProp = 'initial value';
    this.ctxNumProp = 0;
    this.ctxBoolProp = false;  }  throwError() {  sele  ctxProp: string;
  dirPr    this.ctxProp = serv}class SomeDirectiveMissingAnnotation {}@Component({  temclass CompWithHost {  con  }
}@Com  ctxProp: string;  const    this.dirProp = null;
  }  constructor(public someTmclass PollutedContext {    const evRef = this.vcRef.createEmbeddedView(thclass NoContext {    this.vcRef.createEmbeddedView(this.tplRef);
  }
}@Pipe({name: 'double'})  ngOnDestroy() {}    return `${value}${value}`;
  }  event: EventEmitter<any>;  constructor() {
    this.msg = '';  }class DirectiveUpdatingHostAttributes {class DirectiveUpdatingHostProperties {
  id: string;  constructor() {  }class D    this.msg = msg;}@Directive({
  selector: '[listener]',  }
})  eventTypes: string[] = [];    this.eventTypes.push(eventType);  onWindowEvent(eventType: string) {
    thi}let globalCounter = 0;    return false;
  }class EventDir {
  @Output() customEvent = new EventEmitter();}@Directive({selector: '[static]'})
class Nc  sel})}@Directive({selector: '[needs-public-api]'})
class N  templ  constructor(public vc: ViewContainerRef) {}  set toolbarVc(part: ToolbarPart) {
    this.vc.createEmbeddedView(part.te}@Compo  ctxProp: string = 'hello world';  constructor() {}
}@Directive({selector: '[two-way]', inputs: ['control'], outputs: ['controlChange']})
class DirectiveWithTwoWayBinding {
  controlChange = new EventEmitter();}function createInjectableWith  selector: 'component-providi      [{provide: Injecta})  createdclass DirectiveProvidingInjectable {
}@Compoc}@Comp    this.injectable = injectable;
 }class EventBus {  name: string;  constructor(parentEventBus: EventBus, name: string) {
    this.parentEventBus = parentEventBus;
   providers: [{provide: EventBus, useValue: new EventBus(null!, 'grandparent')}]
})
class GrandParentProvidingEven    this.bus = bus;}func})    this.bus = bus;  }class C    }@Directive({select  view: EmbeddedViewRef<Object>|null;     if (this.view) {
      t    }    if (value) { }@Directive({selector: '[multiple-export-as]', ex  }class OtherDuplicateDir {    elR}@Directive({selector: 'directive-throwing-error'})
class Dir    this.t    this.event.emit(msg);}@Component({selector: 'some-cmp'})})  name: string = 'hello';
}@Compo}