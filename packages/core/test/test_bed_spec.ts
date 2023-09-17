/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */})}@NgModule({  exports: [GreetingCmp],
})}@Component({selector: 'inherited-cmp', template  id = 'one';
}@Component({     <p title="( {{ label }} - {{ title }} )" [attr.aria-  `
})eexport class ComponentWithInlineTemplate {  imports: [GreetingModule],
   ]e  // This test is extracted to an individual `describe` block to   it('should apply scopes correctly for components in the lazy-loaded module', () => {
    // Reset TestBed to the initial state, emulating an invocation of a first test. declarations: [Root, DirA],    TestBed.configureTestingModule({});
     expect(fix}    const A = new InjectionToken('A');    @Component({
standalone: true,
template: '{{ a }}',
providers: [{provide: A, useValue: 'A'}],
   });
    class ComponentDependenciesModule {
     // TestBed to examine and override providers in dependencies.
    TestBed.configureTestingModule({imports: [MyStandaloneComp]});
     const fixt     })    }

    @Component({
standalone: true,
tstandalone: true,
t
   });  it('should allow overriding the set of directives and pipe @Directive({
  @Directive({e: true,
id]': class MyStandaloneDirectiveB {

  @Pipe({name: ( class MyStandaloneComp { }

 // N TestBed.overrideComponent(
MyStandaloneComp, {set: {imports: [MyStandalonePipeB, MyStandaloneDirectiveB]}});
 fixture.detectChanges();
 i
    // NOTE: the `TestBed.configureTestingModule` call is *not* required here, since TestBed
   it('should make overridden providers available in pipes', () => {
 trans    @NgModule({exports: [TestPipe],
p    })    }
impor    TestBed.overrideProvider(TOKEN_A, {useValue: 'Overridden A'});

     expect(hostElement.textContent).toBe('transformed original value using Overridden A token');
  });
 standalone: true,template: `<test-cmp #testCmpCtrl></test-cmp>`,
imports: [TestModule],
    }@View
    it('should allow declarations and exports overrides on an imported NgModule', () => {
// replace TestComponent with MockTestComponent  remove: {declarations: [TestComponent], exports: [TestComponent]},
 @TestBed.overrideModule(Imporimports: [ImportedModule],
  },TTestBed.configureTestingModule({
   });
});
 selector: 'non-standalone-comp',
t  `An override for the ${typeName} class has the \`standalon
   exp});  });
    c  });

     h    expect(greetingByCss.componentInstance).toBeInstanceOf(GreetingCmp);
  });  it('should give the ability to trigger the change detection', () => {
     });
   it(    const helloWorldCmp = 
    c  });  it('should give access t    hello.detectChanges();
    const injector = hello.debugElement.injector;
    c  });  it('should give access to local refs on a node', () => {
    const withRefsCmp = TestBed.createComponent(WithRefsCmp);
    const firstDivDebugEl = withRefsCmp.debugElement.query(By.css('div'));
  it('should give the abilit    c  it('should allow duplic    c    h    TestBed.resetTestingModule();
    T    hello = TestBed.createComponent(HelloWorld);
  // of the NgModule.ModuleWithProviders<HelloWorldModule> = {ngModule: HelloWorldModule};
 Test    }

  it('allow to override a provider', () => {
    TestBed.overrideProvider(NAME, {useValue: 'injected World!'});
    const hello = TestBed.createComponent(HelloWorld);    expect(hello.nativeElement).toHaveText('Hello injected World!');
  });  it('uses the most recent pr    });
     const fixture = TestBed.createComponent(CmpWithProviders);
 
 .conf    expect(fixture.nativeElement).toHaveText('hello 2');
  describe('module overridesselector: 'test-cmp',
tem      cselector: 'app-rootdeclarations: [AppComponen    }
    @    }    it('should allow declarations override', () => {
TestBTestBconst fixture = TestBed.createComponent(AppComponent);
const app = fixture.componentInstance;
expect(app.testCmpCtrl.testField).toBe('overwritten');
    });
  });
    /    @Component({
seltemplate: 'comp-b content',
 impor  <comp-a></comp-a>`,    c
    @expor    class AppModule {TestBed
.conf // AppModule -> ModuleB -> ModuleA (to be overridden)
 impo add:expect(fixture.nativeElement.textContent).toContain('comp-a mock co    });

    it('should detect chained modules override', () => {})
.overrideModule(ModuleA, { a.comp    }  },  imports: [
MyMod}
  ],
});expect(value).toEqual(overrideValue);
    });// enTestBed.overrideProvider(multiToken, {useValue: overrideValue, multi: true});
  
    it('when provider is a "regula}
TestBed.configureTestingModule({imports: [MyMod2]});
TestBed    });
@NgModule({imports: [MyMod.forRoot()]})
classTestBed.configureTestingModulTestBed
TestB }; @Injectable({providedIn: 'root'})
 class MyService {return 'original'; @NgModule({})
 c TestBed.overrideProvider(MyService, {useValue: serviceOverride});
  }); const      });

  it(return 'override';
constructor(public name: string) {}
    @NgModule({  {provide: CYCLES, useValue: new Cyclic('a'), multi: true},
  {    })        }    clas    T
    @    });    const multiOverride = {useValue: [{value: 'new provider'}], multi: true};
    T  it(    expect(simpleApp.nativeElement).toHaveText('simple - inherited');
  });

  it('should not trigger change detection for ComponentA while calling TestBed.createComponent for ComponentB',
     
 } @Com '...',
 })    TestBed.createComponent(ComponentWithInlineTemplate);
  });    class ProvidesErrorHandler {    TestBed.configureTestingModule({imports: [ProvidesErrorHandler, HelloWorldModule]});
  it('should throw errors in CD', () => {
    @    @Component({selector:   this.name.hello = 'hello';
}    cconst button = fixture.nat    // This test validates that a component (Outer) which is both declared and imported
    /    // This condition is tested by having the component (Outer) use another component    // text 'Inner' from the template of (Inner) should appear in the result.
    /templ    })    @Component({
template: '<outer></out    })
    class Fixture {    // include a correct instance of the Inner component with the 'Inner' text from its
    // template.  });  descr
    /it(`should throw an error in case invalid type is used in ${overri  });  describe('defer blocks', () => {
    /        consts: [['dir']],
   te      });
}
setClassMetadataAsync(   });
return ComponentClass;@Comp  selector: 'cmp-a',
  tem    });
  selector: 'cmp-a',
  template: 'CmpA!',
})}
const RootAotComponent = getAOTCompiledComponent('root', [], []);
  expect(    });
  });  describe('AOT pre-comp          */class ComponentClass {
  staselectors: [['comp']],
decls: dependencies,
consts: [['dir']],    elementStart(0, 'div', 0);setClassMetadata(
Co    }    it('should allow to override a provider used in a dependency of a 
@  providclass S
  ngAfterViewInit() {
this.expect(fixture.nativeElement.innerHTML).toBe('Template override');
    }    it('should have an ability to override template with empty string', () => {
conconst  //   //   imports: [ModuleClass],
});  });  describe('resetting ng defs', () => {
    it('should restore ng declass SomePipe {
  t}expec    it('should cleanup ng defs clasclass So
c@Pipe({name: 'some-pipe'})
class// ng defs should be removed from classes with no annotations
expectemplate: '<child></child>',

tonfigureTestingModule({etectChanges();
 Testild c3: `ChildCmp` is included in the `declarations` field,onfigureTestingModule({etectChanges();

nstance = fixture.debugElement.query(By.directive(ChildCmp));
ildCmpInstance).toBeNull(); });
expect(TestBed.inject(Token).name).toEqual('fake');
// no    });    it('should cleanle()id: string|undefined;t({providers: [SomeInjectable]})
ponenodule {onfigureTestingModule({imports: [MyModule]});
ginal    c    sproviders: [{provi  .compileComponents();    T    expect(fixture!.nativeEle    describe('injection flags', () => {
it('should be able to optionally inject a token', () => {
  con  exp    con  expect(result).toBe(null);

it('s  TestBed.configureTest    });
  it(  it('should default defer block behavior to manual', () => {  });
  });  it('should reset   });
  });  it(    expect(TestBedImpl.INSTANCE.shouldTearDownTestingModule()).toBe(false);
  });
  });  it('should destroy test module providers when test module teardown is enabled', () => {
    S       expect(SimpleService.ngOnDestroyCalls).toBe(1);
  it(    @ngOnDestroy() {declarations: [ThrowsOnDestroy],
teardown: {destroyAfter
    for (let i = 0; i < 3; i++) {  throw Error('oh no');    }
    c    TestBed.configureTe  });  throw Error('oh no');
}        });`span
 @Component({ons:  });
reateComponent(StyledComp1),
reate    expect(TestBedImpl.INSTANCE.shouldRethrowTeardownErrors())
  .to  it(    expect(TestBedImpl.INSTANCE.shouldRethrowTeardownErrors()).toBe(false);
    it('should rethrow errors if the option is enabled, but teardown is disabled', () => {
    TestBed.configureTestingModule({teardown: {destroyAfterEach: false, rethrowErrors: true}});
    expect(TestBedImpl.INSTANCE    it('should be able to configure the option', () => {
    TestBed.configureTestingModule({errorOnUnknownElements: true});
    expect(TestBedImpl.INSTANCE.shouldThrowErrorOnUnknownElements()).toBe(true);
  });  it('should reset the option back to the default when TestBed is reset', () => {
    T  });
});de  });  it('should not thro    });  it('should reset the option back to the default when TestBed is reset', () => {
    T