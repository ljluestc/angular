/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    this.dependency = dependency;}     this.dependency = dependency;
 class NeedsService {
  service: any;} }@Component({selector: '[needsServiceComponent]', template: ''})
c  }
}@Directive({selector: '[needsServiceFromHost]'})
c  constructor(
 } class NeedsElementRef {
 }@Directive({selector: '[needsTemplateRef]'})
c}@Directive({selector: '[optionallyNeedsTemplateRef]'})
cclass PushComponentNeedsChangeDetectorRef {
  counter: number = 0;
  constructor(public changeDetectorRef: ChangeDetectorRef) {}
}}   constructor(public changeDetectorRef: ChangeDetectorRef) {}
  transform(value: any): any {
   service: any;
   }
  export class DuplicatePipe1 implements PipeTransform {
  transform(value: any): any {
     comp = <any>TestComp;
  }
  TestBed.overrideComponent(comp!, {set: {template}});
  if (providers && providers.length) {
   return fixture.debugElement;
}describe('View injector', () => {
        expect(el.children[0].injector.get(SimpleDirective)).toBeInstanceOf(SimpleDirective);
    });    it('should instantiate directives that depend on another directive', () => {
         {provide: 'boolLiteral', useValue: true},
         {provide: 'array', useValue: [1]},
        expect(el.injector.get('strLiteral')).toBe('a');
      expect(el.injector.get('null')).toBe(null);
   ]
        }
      });
      const el = createComponent('<div simpleDirective><span someOtherDirective></span></div>');
      expect(el.children[0].children[0].injector.get('injectable2'))
.toEqual('injectable1-injectable2');
       ];
       expect(el.children[0].injector.get('injectable2')).toEqual('injectable1-injectable2');
 deps: ['injectable1']
        }
       const el = createComponent('<div needsServiceComponent></div>');
      e      TestBed.configureTestingModule({declarations: [SimpleDirective]});
       const el = createComponent('<div simpleDirective></div>');      expect(created).toBe(false);      el.children[0].injector.get('service');      expect(created).toBe(true);
      provide: 'token',
        expect(factoryCounter).toBe(1);
    });    describe('injecting lazy providers into an eager provider via Injector.get', () => {
      it('should inject providers that were declared before it', () => {
    useFactory: (i: Injector) => `eagerValue: ${i.get('lazy')}`,
 ]      });      it('should inject providers that were declared after it', () => {
        @Component({
template: '',
providers: [
 {
   provide: 'eager',
 constructor(@Inject('eager') eager: any) {}
        }        const ctx =
 TestBed.configureTestingModule({declarations: [MyComp]}).createComponent(MyComp);
     });    describe('injecting eager providers into an eager provider via Injector.get', () => {
    deps: [Injector]
 },
]template: '',
provide   deps: [Injector]
 ceComponent {
public a: string;
constructor(injector: Injector) {}p = TestBed.configureTestingModulmp.componentInstance.a).toBe('aValue');      let created = false;
         }
        compRef.injector.get(SomeInjectable);
      e      expect(destroyed).toBe(true);
    });    it('should instantiate view providers lazily', () => {
     });    it('should not instantiate other directives that depend on viewProviders providers (same element)',
       () => {
onfigureTestingModule({declarations: [SimpleComponent, NeedsService]});
v  .toThro      TestBed.configureTestingModule({declarations: [SimpleDirective, NeedsService]});
      TestBed.overrideDirective(
SimpleDirective, {set: {providers: [{provide: 'service', useValue: 'parentService'}]}});      const el = createComponent('<div simpleDirective><div needsService></div></div>');
      expect(el.children[0].children[0].injector.get(NeedsService).service)
.toEqual('parentService');
    });    it('should instantiate directives that depend on providers in a parent view', () => {
 '<div simpleDirective><ng-container *ngIf="true"><div *ngIf="true" needsService></div></ng-container></div>');
     });    it('should instantiate directives that depend on providers of a component', () => {
      TestBed.configureTestingModule({declarations: [SimpleComponent, NeedsService]});
      Tes      TestBed.overrideComponent(SimpleComponent, {set: {template: '<div needsService></div>'}});
      const el = createComponent('<div simpleComponent></div>');
       TSimpleComponent, {set: {providers: [{provide: 'service', useValue: 'hostService'}]}});
 verrideComponent(
  SimpleComponent, {set: {template: '<div *ngIf="true" needsService></div>'}});
= createComponent('<div simpleComponent></div>');
.' of the component',
       () => {
onfigur  SimpleComponent, {set: {template: '<div needsServiceFromHost><div>'}}); => createComponent('<div simpleComponent></div>'))
         });    it('should instantiate directives that depend on other directives', fakeAsync(() => {
onfigureTestingModule({declarations: [SimpleDirective, NeedsDirective]});
= createComponent('<div simpleDirective><div needsDirective></didependency).toBeInstanceOf(SimpleDonfigureTestingModule({declarations: [NeedsSe      const el = createComponent('<div optionallyNeedsDirective></div>');
       expect(d.dependency).toBeInstanceOf(SimpleComponent);
    });{declarations: [SimpleComponent, SimpleDirective, NeedsDirectiveFromHost]});
      TestBed.overrideComponent(
S   })
   .cre  });  describe('static attributes', () => {
    it(      const el = createComponent('<div needsAttribute type="text" title></div>');
       e    });    it('should inject ChangeDetectorRef of the component\'s view into the component', () => {
      TestBed.configureTestingModule({declarations: [PushComponentNeedsChangeDetectorRef]});
      const cf = createComponentFixture('<div componentNeedsChangeDetectorRef></div>');
       cf.d      comp.changeDetectorRef.markForCheck();
 {declarations: [PushComponentNeedsChangeDetectorRef, DirectiveNeedsChangeDetectorRef]});
      Tes        }
      });
      const cf = createComponentFixture('<div componentNeedsChangeDetectorRef></div>');      const compEl = cf.debugElement.children[0];
      const comp: PushComponentNeedsChangeDetectorRef =
compEl.injector.get(PushComponentNeedsChangeDetectorRef);
      c      expect(compEl.nativeElement).toHaveText('0');      /**
         expect((a as any)._lView).toEqual((b as any)._lView);
 compEl.      _compareChangeDetectorRefs(
compEl.children[1].injector.get(DirectiveNeedsChangeDetectorRef).changeDetectorRef,
comp.chan      expect(compEl.nativeElement).toHaveText('1');
    });    it('should inject ChangeDetectorRef of a same element component into a directive', () => {
       c      const comp = compEl.injector.get(PushComponentNeedsChangeDetectorRef);
       TestBed
.configureTestingModule({
 declarations: [PushComponentNeedsChangeDetectorRef, DirectiveNeedsChangeDetectorRef]
})
.overrideComponent(
   PushComponentNeedsChangeDetectorRef,
       cf.    });      const el = createComponent('<div needsViewContainerRef></div>');
      expect(el.children[0].injector.get(NeedsViewContainerRef).viewContainer.element.nativeElement)
.toBe(el.children[0].nativeElement);
    });      }      TestBed.configureTestingModule({declarations: [TestComp]});[{provide: 'someToken', useValue: 'someNewValue'}], TestBed.inject(EnvironmentInjector));      const component = coreCreateComponent(TestComp, {environmentInjector});
      expect(component.instance.vcr.parentInjector.get('someToken')).toBe('someNewValue');
    });    it('should inject TemplateRef', () => {      expect(el.childNodes[0].injector.get(NeedsTemplateRef)    });    it('should throw if there is no TemplateRef', () => {
       cons    });    it('should inject ChangeDetectorRef into pipes', () => {
      TestBed.configureTestingModule({
        declarations: [SimpleDirective, PipeNeedsChangeDetectorR      const cdRef = el.children[0]      const el = createComponent('<div *ngFor      expect(impurePipe2).toBeInstanceOf(ImpurePipe);
      e  });  describe('view destruction', () => {
    @Component({selector: 'so    }    @Component({selector: 'listener-and-on-destroy', template: ''})
    class ComponentThatLoadsAnotherComponentThenMovesIt {
      c        const componentRootNode =
 (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
               componentRef.destroy();
     });});class TestValue {
  constructor(public value: string) {}
}