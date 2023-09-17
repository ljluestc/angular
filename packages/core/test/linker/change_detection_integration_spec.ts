/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  directiveLog = TestBed.inject(DirectiveLog);
  patchLoggingRenderer2(TestBed.inject(RendererFactory2), renderLog);  const nodes = el.queryAllNode}function _bindSimpleValue(expression: any): ComponentFixture<TestComponent>;
function _bindSimpleValue<T>(expression: any, compType: Type<T>): ComponentFixture<T>;
function _bindSimpleValue<T>(  const ctx = _bindSimpleValue(         TestLocals,
        CompWithRef,
        WrapCompWithRef,        OrderCheckDirective1,           DirectiveLog,
      ],
    });
 iindAndCheckSimpleValue('"str"')).toEqual(['id=str']);
       }));    it('should suppo        }));    it('should support != operations', fakeAsync(() => {
indAndCheckSimpleValue('1 != 1')).toEqual(['id=false']);
       }));    it('should support == operations on coerceible', fakeAsync(() => {
iiindAndCheckSimpleValue('1 < 2')).toEqual(['id=true']);
       }));       }));    it('should support false > operations', fakeAs        }));           }));       }));    it('should support true && operations', fakeAsync(() => {
iindAndCheckSimpleValue('true || false')).toEqual(['id=true']);
        }));       }));    it('should support true conditionals', fakeAsync(() => {
indAndCheckSimpleValue('1 < 2 ? 1 : 2')).toEqual(['id=1']);
       }));       }));    it('should support keyed access to a list item', fakeAsync(() => {
innderLog.log).toEqual(['id=Grenoble']);
       }));ctx.detectCconst ctx = _bindSimpleValue('address?.toString()', Person);
ctx.componentInstance.address = null!;
cctx.detectCexpect(rendctx.detectChanges(false);
expect(renderLog.log).toEqual(['id=null']);      it('should still throw if right-side would throw', fakeAsync(() => {
expect(() =  ctx.compo}).toThrow();    });    it('should support method calls', fakeAsync(() => {
 = _bindSimpleValue('sayHi("Jim")', Person);
tChanges(fanentInstancnderLog.log).toEqual(['id=99']);
       }));    it('should support chained method calls', fakeAsync(() => {
 .clear();tCnentInstanc.clear();tChanges(false);
nderLog.log).toEqual([]);
.clear();ne = _bindSimnderLog.loggedValues).toEqual([[1, 2]]);
     nderLog.loggedValues).toEqual([[1, 2]]);
       }));tChanges(false);
ntChanges(false);
nderLog.log       }));nentInstance.a = 1;
tChanges(false);
tChanges(fanderLog.lognderLog.loggedValues[1]['z']).toEqual(2);
        }));    it('should output empty strings for null values in interpolation', fakeAsync(() => {
 = _bindSimindAndCheck = createCompFixture(
  '<ng-template testLocals let-local="someLocal">{{local}}</ng-template>');
tChanges(factx.componeexpect(renderctx.comctx.detectChanges(false);
expect(renderLog.loggedValues).toEqual(['value one two default']);      it('should associate pipes right-to-left', fakeAsync(() => {
const ctx =ctx.detectCconst ctx = _bindSimpleValue('"Megatron" | identityPipe', Person);ctx.detectChanges(false);expect(renderLog.log).toEqual(['id=Megatron']);renderLog.clear();
ctx.detectC// change from undefined -> null
ctx.componeexpect(rendctx.detectChanges(false);
expect(renderLogctx.detectChanges(false);
expect(reexctx.componeexpect(re]);
ctx.detectChanges(false);
expect(re])const ctx =ctx.detectChanges(false);
expecconst evt = 'EVENT';
childEl.triexpect(ctx.componentInstance.a).toEqual(2);      it('should support empty literals', fakeAsync(() => {
const ctx = _bindSimpleProp('(event)="a=[{},[]]"');
const childconst child  });  describe('RendererFactory', () => {
    it('should call the begin and end methods on the renderer factory when change detection is called',
       fake.begin).not       }));
  });  describe('change notification', () => {
    describexpect(rend      it('should read directive properties', fakeAsync(() => {
const ctx = createCompFixture(
'<div testD  'a': new   'name': new Siexpect(dirs[1].changes).toEqual({
  'a': new });    });
  });  desc'<div testDconst ctx = createCompFixture('<div testDirective="dir"></div>');
expect(directiveLog.filter(['ngOnInit', 'ngOnChanges'])).toEqual([]);ctx.detectChanges(false);expect(directiveLog.filter(['ngOnInit', 'ngOnChanges'])).toEqual([
  'dir.ngOn// First pa  ctx.detectC  expec}
expect(errored).toBe(true);expect(directiveLog.filter(['ngOnInit'])).toEqual(['dir.ngOnInit']);
directiveLo}      it('should be called after ngOnInit', fakeAsync(() => {expect(directiveLog.filte]);      it('should be called on every detectChdirectiveLog.clear();// Verify that checking should not call them.
ctx.checkNoconst ctx = createCompWithContentAndViewChild();
ctx.detectCconst ctx =// First pass fails, but ngAfterContentInit should be called.
try {} catch (e)}
expect(er//expect(dire  'parent  'viewChild.ngAfterContentChecked'
]);      it('should be called on every detectChanges run, except for checkNoChanges', fakeAsync(() => {
const ctx])(() => {'<div testDirective="parent"><div testDirective="child"></div></div><div testDirective="sibling"></div>');ctx.detectChanges(false);expect(directiveLog.filter(['ngAfterContentChecked'])).toEqual([
  'ch  errored = true;
}directiveL} catch (e) {
  throw new Error('Second detectChanges() should not have run detection.');
}  'parent.ctx.detectC     ctx.detectChanges(false);ctx.destroy();expect(directiveLog.filter(['ngOnDestroy'])).toEqual(['dir.ngOnDestroy']);      it('should be called after processing the content and view children', fakeAsync(() => {
TestBed.overrideComponent(AnotherComponent, {
  set: new   'parent.n  'child.ngOnDestroy', 'parent.ngOnDestroy', 'sibling.ngOnDestroy'
]);  ctx.destroy();expect(ctx.componentInstance.a).toEqual('destroyed');      it('should call ngOnDestroy on pipes', fakeAsync(() => {
const ctx =expect(direngingDirective {
@Input() changed: any;onfigureTestingModule({declarations: [ChangingDirective]}); = createCompFixture('<div [id]="a" [changed]="b"></div>', TestData);nentInstance.b = 1;
MsgRegExp =  .toThrowEtChanges(); = _bindSimpleValue('a', TestData);
nentInstancnen       }));    it('should not break the next run', fakeAsync(() => {
 = _b => ct = createConentInstance.value = 0;
tChanges();eDetectorRef.detach();nen       }));    it('Detached view can be checked locally', fakeAsync(() => {
 = createConderLog.log       () => p {@ViewChild('vc', {read: ViewContainerRef, static: true}) vc!: ViewContainerRef;
@ViewChild(TemplateRef, {sttChanges();
nderLog.log        sel        log(id: string) {        selector: 'outer- `<span [i]="log('start')"></span><inner-cmp [o        selector: 'in `<span [i]="log('start')"></span>><ng-container [ngTemplateOutlet]="outerTpl"></ng-container><ng-container [ngTemplateOutlet]="tpl"></ng-container>`
      })          {declarations: [MainComp, OuterComp, InnerComp, DummyDirective]})
   .createC        exp      }      @Directive({selector: '[someDir]'})
      class Some      expect(divEl.nativeElement).toHaveCssClass('init');
      exp  .toBeTruthy      All      if (methods & LifetimeMethods.ngOnInit) cb(LifetimeMethods.ngOnInit);
      if (methods & LifetimeMethods.ngOnChanges) cb(LifetimeMethods.ngOnChanges);
      if   } this.check(LifetimeMethods.ngAfterContentInit); log(`MyChild::${Lifetime this.outp.emit(null);
   } else {    if ((options.childThrows & method) !== 0) { this.t        }        @Component({
selector: '        }          const ctx = initialize(options);        const throws = options.childThrows != LifetimeMethods.None;
        if (throws) {
log(`<CYCLE        expectOnceAndOnlyOnce('MyComponent::ngOnInit()');
        expectOnceAndOnlyOnce('MyChild::ngOnInit()');
        exp      forEa  });})();@Injectable()
class RenderLog {  loggedValues: any[] = [];  setElementProperty(el: any, propNam    this.loggedValues.push(propValue);
  }  setTex    c      return renderer;    (<any>rend    const origSetValue = renderer.setValue;
    renderer.setProperty = function(el: any, name: string, value: any): void {
      log.s  };class DirectiveLog {
  entries: DirectiveLogEntry[] = [];  add(directiveName: string, method: string) {
    this.en  transform(value: any) {
    r  state: numbe    return `${value} state:${this.state++}`;
  }class Pi    return null;}@Pipe({name: 'identityPipe'})  transform(value: any) {
    return value;}@Pipe({name:   transform(value: any, arg1: any, arg2: any, arg3 = 'default') {
    return   selector: 'comp-with-ref',
  template: '<div (event)="noop()" emitterDirective></div>{{value}}',})  @Input() public value: any;  constructor(public changeDetectorRef: ChangeDetectorRef) {}  noop() {}
}@Component  constructor(pu  }  constructor(public changeDetectorRef: ChangeDetectorRef) {}  noop() {}
}@Directive  }  ngAfterContentInit(): any {
    this._v AfterViewInit,   event: any;
  eventEmit  }  }  ngOnIn    if (this.throwOn == 'ngOnInit') {
       }  n      throw  }      }    this.log.add(this.name, 'ngAfterContentChecked');
    if (thi    this.  }  ngAfterViewChecked() {
    this.lo  name = 'injectable';
  constructor(public log: DirectiveLog) {}  ngOnDestroy() {class OnDestroyDirecti     private _    this._name = value;
    this.lo  }  toString(): string {  }
}@Component({selector: 'root', template: 'empty'})class TestData {
  a: any;}@Component({}@Compo}
