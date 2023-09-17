/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */import {PercentPipe} from '@angular/common';
import {inject} from '@angular/core';
import {ClassProvider, Component, Directive, Inject, Injectable, InjectFlags, InjectionToken, Injector, NgModule, NgModuleRef, ViewChild} from '@angular/core/src/core';
import {NullInjector} from '@angular/core/src/di/null_injector';
import {isClassProvider, isExistingProvider, isFactoryProvider, isTypeProvider, isValueProvider} from '@angular/core/src/di/provider_collection';
import {EnvironmentInjector, R3Injector} from '@angular/core/src/di/r3_injector';
import {setupFrameworkInjectorProfiler} from '@angular/core/src/render3/debug/framework_injector_profiler';
import {getInjectorProfilerContext, InjectedService, InjectedServiceEvent, InjectorCreatedInstanceEvent, InjectorProfilerEvent, InjectorProfilerEventType, ProviderConfiguredEvent, ProviderRecord, setInjectorProfiler} from '@angular/core/src/render3/debug/injector_profiler';
import {getNodeInjectorLView, NodeInjector} from '@angular/core/src/render3/di';
import {getDependenciesFromInjectable, getInjectorProviders, getInjectorResolutionPath} from '@angular/core/src/render3/util/injector_discovery_utils';
import {fakeAsync, tick} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing/src/test_bed';
import {BrowserModule} from '@angular/platform-browser';
import {Router, RouterModule, RouterOutlet} from '@angular/router';describe('setProfiler', () => {
  let injectEvents: InjectedServiceEvent[] = [];
  let createEvents: InjectorCreatedInstanceEvent[] = [];
  let providerConfiguredEvents: ProviderConfiguredEvent[] = [];  function searchForProfilerEvent<T extends InjectorProfilerEvent>(
events: T[], condition: ((event: T) => boolean)): T|undefined {
    return events.find(event => condition(event)) as T;
  }  beforeEach(() => {
    injectEvents = [];
    createEvents = [];
    providerConfiguredEvents = [];    setInjectorProfiler(((injectorProfilerEvent: InjectorProfilerEvent) => {
const {type} = injectorProfilerEvent;
if (type === InjectorProfilerEventType.Inject) {
  injectEvents.push(
 {service: injectorProfilerEvent.service, context: getInjectorProfilerContext(), type});
}
if (type === InjectorProfilerEventType.InstanceCreatedByInjector) {
  createEvents.push({
instance: injectorProfilerEvent.instance,
context: getInjectorProfilerContext(),
type
  });
}
if (type === InjectorProfilerEventType.ProviderConfigured) {
  providerConfiguredEvents.push({
providerRecord: injectorProfilerEvent.providerRecord,
context: getInjectorProfilerContext(),
type
  });
}
    }));
  });  afterAll(() => setInjectorProfiler(null));  it('should emit DI events when a component contains a provider and injects it', () => {
    class MyService {}    @Component({
selector: 'my-comp',
template: 'hello world',
providers: [
  MyService,
]
    })
    class MyComponent {
myService = inject(MyService);
    }    TestBed.configureTestingModule({declarations: [MyComponent]});
    const fixture = TestBed.createComponent(MyComponent);
    const myComp = fixture.componentInstance;    // MyService should have been configured
    const myServiceProviderConfiguredEvent = searchForProfilerEvent<ProviderConfiguredEvent>(
  providerConfiguredEvents, (event) => event.providerRecord.token === MyService);
    expect(myServiceProviderConfiguredEvent).toBeTruthy();    // inject(MyService) was called
    const myServiceInjectEvent = searchForProfilerEvent<InjectedServiceEvent>(
  injectEvents, (event) => event.service.token === MyService);
    expect(myServiceInjectEvent).toBeTruthy();
    expect(myServiceInjectEvent!.service.value).toBe(myComp.myService);
    expect(myServiceInjectEvent!.service.flags).toBe(InjectFlags.Default);    // myComp is an angular instance that is able to call `inject` in it's constructor, so a
    // create event should have been emitted for it
    const componentCreateEvent = searchForProfilerEvent<InjectorCreatedInstanceEvent>(
  createEvents, (event) => (event.instance.value === myComp));
    expect(componentCreateEvent).toBeTruthy();
  });  it('should emit the correct DI events when a service is injected with injection flags', () => {
    class MyService {}
    class MyServiceB {}
    class MyServiceC {}    @Component({
selector: 'my-comp',
template: 'hello world',
providers: [MyService, {provide: MyServiceB, useValue: 0}]
    })
    class MyComponent {
myService = inject(MyService, {self: true});
myServiceD = inject(MyServiceB, {skipSelf: true});
myServiceC = inject(MyServiceC, {optional: true});
    }    TestBed.configureTestingModule({
providers: [MyServiceB, MyServiceC, {provide: MyServiceB, useValue: 1}],
declarations: [MyComponent]
    });
    TestBed.createComponent(MyComponent);    const myServiceInjectEvent = searchForProfilerEvent<InjectedServiceEvent>(
  injectEvents, (event) => event.service.token === MyService);
    const myServiceBInjectEvent =
  searchForProfilerEvent(injectEvents, (event) => event.service.token === MyServiceB);
    const myServiceCInjectEvent =
  searchForProfilerEvent(injectEvents, (event) => event.service.token === MyServiceC);    expect(myServiceInjectEvent!.service.flags).toBe(InjectFlags.Self);
    expect(myServiceBInjectEvent!.service.flags).toBe(InjectFlags.SkipSelf);
    expect(myServiceBInjectEvent!.service.value).toBe(1);
    expect(myServiceCInjectEvent!.service.flags).toBe(InjectFlags.Optional);
  });  it('should emit correct DI events when providers are configured with useFactory, useExisting, useClass, useValue',
     () => {
 class MyService {}
 class MyServiceB {}
 class MyServiceC {}
 class MyServiceD {}
 class MyServiceE {} @Component({
 'my-comp',
 'hello world',
: [
MyService,
{provide: MyServiceB, useFactory: () => new MyServiceB()},
{provide: MyServiceC, useExisting: MyService},
{provide: MyServiceD, useValue: 'hello world'},
{provide: MyServiceE, useClass: class MyExampleClass {}}, })
 class MyComponent {
 = inject(MyService);
 } TestBed.configureTestingModule({declarations: [MyComponent]});
 TestBed.createComponent(MyComponent); // MyService should have been configured
 const myServiceProviderConfiguredEvent = searchForProfilerEvent<ProviderConfiguredEvent>(
providerConfiguredEvents, (event) => event.providerRecord.token === MyService);
 const myServiceBProviderConfiguredEvent = searchForProfilerEvent<ProviderConfiguredEvent>(
providerConfiguredEvents, (event) => event.providerRecord.token === MyServiceB);
 const myServiceCProviderConfiguredEvent = searchForProfilerEvent<ProviderConfiguredEvent>(
providerConfiguredEvents, (event) => event.providerRecord.token === MyServiceC);
 const myServiceDProviderConfiguredEvent = searchForProfilerEvent<ProviderConfiguredEvent>(
providerConfiguredEvents, (event) => event.providerRecord.token === MyServiceD);
 const myServiceEProviderConfiguredEvent = searchForProfilerEvent<ProviderConfiguredEvent>(
providerConfiguredEvents, (event) => event.providerRecord.token === MyServiceE); expect(isTypeProvider(myServiceProviderConfiguredEvent!.providerRecord.provider!))
.toBeTrue();
 expect(isFactoryProvider(myServiceBProviderConfiguredEvent!.providerRecord.provider!))
.toBeTrue();
 expect(isExistingProvider(myServiceCProviderConfiguredEvent!.providerRecord.provider!))
.toBeTrue();
 expect(isValueProvider(myServiceDProviderConfiguredEvent!.providerRecord.provider!))
.toBeTrue();
 expect(isClassProvider(myServiceEProviderConfiguredEvent!.providerRecord.provider!))
.toBeTrue();
     });  it('should emit correct DI events when providers are configured with multi', () => {
    class MyService {}    @Component({
selector: 'my-comp',
template: 'hello world',
providers: [
  {provide: MyService, useClass: MyService, multi: true},
  {provide: MyService, useFactory: () => new MyService(), multi: true},
  {provide: MyService, useValue: 'hello world', multi: true},
]
    })
    class MyComponent {
myService = inject(MyService);
    }    TestBed.configureTestingModule({declarations: [MyComponent]});
    TestBed.createComponent(MyComponent);    // MyService should have been configured
    const myServiceProviderConfiguredEvent = searchForProfilerEvent<ProviderConfiguredEvent>(
  providerConfiguredEvents, (event) => event.providerRecord.token === MyService);    expect(((myServiceProviderConfiguredEvent!.providerRecord)?.provider as ClassProvider).multi)
  .toBeTrue();
  });
});describe('getInjectorProviders', () => {
  beforeEach(() => setupFrameworkInjectorProfiler());
  afterAll(() => setInjectorProfiler(null));  it('should be able to get the providers from a components injector', () => {
    class MyService {}
    @Component({
selector: 'my-comp',
template: `
{{b | percent:'4.3-5' }}
    `,
providers: [MyService]
    })
    class MyComponent {
b = 1.3495;
    }
    TestBed.configureTestingModule({declarations: [MyComponent], imports: [PercentPipe]});
    const fixture = TestBed.createComponent(MyComponent);    const providers = getInjectorProviders(fixture.debugElement.injector);
    expect(providers.length).toBe(1);
    expect(providers[0].token).toBe(MyService);
    expect(providers[0].provider).toBe(MyService);
    expect(providers[0].isViewProvider).toBe(false);
  });  it('should be able to get determine if a provider is a view provider', () => {
    class MyService {}
    @Component({
selector: 'my-comp',
template: `
{{b | percent:'4.3-5' }}
    `,
viewProviders: [MyService]
    })
    class MyComponent {
b = 1.3495;
    }
    TestBed.configureTestingModule({declarations: [MyComponent], imports: [PercentPipe]});
    const fixture = TestBed.createComponent(MyComponent);    const providers = getInjectorProviders(fixture.debugElement.injector);
    expect(providers.length).toBe(1);
    expect(providers[0].token).toBe(MyService);
    expect(providers[0].provider).toBe(MyService);
    expect(providers[0].isViewProvider).toBe(true);
  });  it('should be able to determine import paths after module provider flattening in the NgModule bootstrap case',
     () => {
 // ┌─────────┐
 // │AppModule│
 // └────┬────┘
 //│
 //   imports
 //│
 // ┌────▼────┐
 //┌─imports─┤ ModuleD ├──imports─┐
 //│─┘│
 //│───┐
 //  ┌───▼───┐     │  ModuleC  │
 //  │ModuleB│     │-MyServiceB│
 //  └───┬───┘     └───────────┘
 //│
 //   imports
 //│
 // ┌────▼─────┐
 // │ ModuleA  │
 // │-MyService│
 // └──────────┘ class MyService {}
 class MyServiceB {} @NgModule({providers: [MyService]})
 class ModuleA {
 }
 @NgModule({
[ModuleA],
 })
 class ModuleB {
 } @NgModule({providers: [MyServiceB]})
 class ModuleC {
 } @NgModule({
[ModuleB, ModuleC],
 })
 class ModuleD {
 } @Component({
 'my-comp',
 'hello world',
 })
 class MyComponent {
 } @NgModule({
[ModuleD, BrowserModule],
ons: [MyComponent],
 })
 class AppModule {
 } TestBed.configureTestingModule({imports: [AppModule]});
 const root = TestBed.createComponent(MyComponent);
 root.detectChanges(); const appModuleInjector = root.componentRef.injector.get(EnvironmentInjector);
 const providers = getInjectorProviders(appModuleInjector); const myServiceProvider = providers.find(provider => provider.token === MyService);
 const myServiceBProvider = providers.find(provider => provider.token === MyServiceB); const testModuleType = root.componentRef.injector.get(NgModuleRef).instance.constructor; expect(myServiceProvider).toBeTruthy();
 expect(myServiceBProvider).toBeTruthy(); expect(myServiceProvider!.importPath).toBeInstanceOf(Array);
 expect(myServiceProvider!.importPath!.length).toBe(5);
 expect(myServiceProvider!.importPath![0]).toBe(testModuleType);
 expect(myServiceProvider!.importPath![1]).toBe(AppModule);
 expect(myServiceProvider!.importPath![2]).toBe(ModuleD);
 expect(myServiceProvider!.importPath![3]).toBe(ModuleB);
 expect(myServiceProvider!.importPath![4]).toBe(ModuleA); expect(myServiceBProvider!.importPath).toBeInstanceOf(Array);
 expect(myServiceBProvider!.importPath!.length).toBe(4);
 expect(myServiceBProvider!.importPath![0]).toBe(testModuleType);
 expect(myServiceBProvider!.importPath![1]).toBe(AppModule);
 expect(myServiceBProvider!.importPath![2]).toBe(ModuleD);
 expect(myServiceBProvider!.importPath![3]).toBe(ModuleC);
     });  it('should be able to determine import paths after module provider flattening in the standalone component case',
     () => {
 // ┌────────────────────imports───────────────────────┐
 // │     │
 // │ ┌───────imports────────┐│
 // │ │ ││
 // │ │ ││
 //  ┌─────────┴─┴─────────┐  ┌─────────▼────────────┐ ┌──────────▼───────────┐
 //  │MyStandaloneComponent│  │MyStandaloneComponentB│ │MyStandaloneComponentC│
 //  └──────────┬──────────┘  └──────────┬────┬──────┘ └────┬────────┬────────┘
 //  │  │
 //  └──imports─┐     ┌imports┘    └────┐  │  │
 //│  │     imports
 //  ┌▼─────▼┐  imports     │  │
 //   ┌────┤ModuleD├─────┐│     imports     │
 //imports └───────┘     ││  │    ┌───▼────────┐
 //   │ imports   ┌──▼─────┐  │    │ ModuleE    │
 //┌──▼────┐  │ │ModuleF │  │    │-MyServiceC │
 //│ModuleB│  │ └────────┘  │    └────────────┘
 //└──┬────┘ ┌─────▼─────┐  │
 //imports   │  │
 //  ┌────▼─────┐│-MyServiceB│◄────────────┘
 //  │ ModuleA  │└───────────┘
 //  │-MyService│
 //  └──────────┘ class MyService {}
 class MyServiceB {}
 class MyServiceC {} @NgModule({providers: [MyService]})
 class ModuleA {
 }
 @NgModule({
[ModuleA],
 })
 class ModuleB {
 } @NgModule({providers: [MyServiceB]})
 class ModuleC {
 } @NgModule({
[ModuleB, ModuleC],
 })
 class ModuleD {
 } @NgModule({
: [MyServiceC],
 })
 class ModuleE {
 } @NgModule({})
 class ModuleF {
 } @Component({
 'my-comp-c',
 'hello world',
[ModuleE, ModuleC],
e: true
 })
 class MyStandaloneComponentC {
 } @Component({
 'my-comp-b',
 'hello world',
[ModuleD, ModuleF],
e: true
 })
 class MyStandaloneComponentB {
 } @Component({
 'my-comp',
 `
b/>
c/>
  `,
[ModuleD, MyStandaloneComponentB, MyStandaloneComponentC],
e: true
 })
 class MyStandaloneComponent {
 } const root = TestBed.createComponent(MyStandaloneComponent);
 root.detectChanges(); const appComponentEnvironmentInjector = root.componentRef.injector.get(EnvironmentInjector);
 const providers = getInjectorProviders(appComponentEnvironmentInjector); // There are 2 paths from MyStandaloneComponent to MyService
 //
 // path 1: MyStandaloneComponent -> ModuleD => ModuleB -> ModuleA
 // path 2: MyStandaloneComponent -> MyStandaloneComponentB -> ModuleD => ModuleB -> ModuleA
 //
 // Angular discovers this provider through the first path it visits
 // during it's postorder traversal (in this case path 1). Therefore
 // we expect myServiceProvider.importPath to have 4 DI containers
 //
 const myServiceProvider = providers.find(provider => provider.token === MyService);
 expect(myServiceProvider).toBeTruthy();
 expect(myServiceProvider!.importPath).toBeInstanceOf(Array);
 expect(myServiceProvider!.importPath!.length).toBe(4);
 expect(myServiceProvider!.importPath![0]).toBe(MyStandaloneComponent);
 expect(myServiceProvider!.importPath![1]).toBe(ModuleD);
 expect(myServiceProvider!.importPath![2]).toBe(ModuleB);
 expect(myServiceProvider!.importPath![3]).toBe(ModuleA); // Similarly to above there are multiple paths from MyStandaloneComponent MyServiceB
 //
 // path 1: MyStandaloneComponent -> ModuleD => ModuleC
 // path 2: MyStandaloneComponent -> MyStandaloneComponentB -> ModuleD => ModuleC
 // path 3: MyStandaloneComponent -> MyStandaloneComponentC -> ModuleC
 //
 // Angular discovers this provider through the first path it visits
 // during it's postorder traversal (in this case path 1). Therefore
 // we expect myServiceProvider.importPath to have 4 DI containers
 //
 const myServiceBProvider = providers.find(provider => provider.token === MyServiceB);
 expect(myServiceBProvider).toBeTruthy();
 expect(myServiceBProvider!.importPath).toBeInstanceOf(Array);
 expect(myServiceBProvider!.importPath!.length).toBe(3);
 expect(myServiceBProvider!.importPath![0]).toBe(MyStandaloneComponent);
 expect(myServiceBProvider!.importPath![1]).toBe(ModuleD);
 expect(myServiceBProvider!.importPath![2]).toBe(ModuleC);
     });  it('should be able to determine import paths after module provider flattening in the standalone component case with lazy components',
     fakeAsync(() => {
 class MyService {} @NgModule({providers: [MyService]})
 class ModuleA {
 } @Component(
{selector: 'my-comp-b', template: 'hello world', imports: [ModuleA], standalone: true})
 class MyStandaloneComponentB {
= inject(Injector);
 } @Component({
 'my-comp',
 `<router-outlet/>`,
[MyStandaloneComponentB, RouterOutlet],
e: true
 })
 class MyStandaloneComponent {
= inject(Injector);
d(RouterOutlet) routerOutlet: RouterOutlet|undefined;
 } TestBed.configureTestingModule({
[RouterModule.forRoot([{
path: 'lazy',
loadComponent: () => MyStandaloneComponentB, });
 const root = TestBed.createComponent(MyStandaloneComponent);
 TestBed.inject(Router).navigateByUrl('/lazy');
 tick();
 root.detectChanges(); const myStandaloneComponentNodeInjector = root.componentRef.injector;
 const myStandaloneComponentEnvironmentInjector =
myStandaloneComponentNodeInjector.get(EnvironmentInjector);
 const myStandalonecomponentB =
root.componentRef.instance!.routerOutlet!.component as MyStandaloneComponentB;
 const myComponentBNodeInjector = myStandalonecomponentB.injector;
 const myComponentBEnvironmentInjector = myComponentBNodeInjector.get(EnvironmentInjector);
 const myStandaloneComponentEnvironmentInjectorProviders =
getInjectorProviders(myStandaloneComponentEnvironmentInjector);
 const myComponentBEnvironmentInjectorProviders =
getInjectorProviders(myComponentBEnvironmentInjector); // Lazy component should have its own environment injector and therefore different
 // providers
 expect(myStandaloneComponentEnvironmentInjectorProviders)
.not.toEqual(myComponentBEnvironmentInjectorProviders); const myServiceProviderRecord =
myComponentBEnvironmentInjectorProviders.find(provider => provider.token === MyService); expect(myServiceProviderRecord).toBeTruthy();
 expect(myServiceProviderRecord!.importPath).toBeInstanceOf(Array);
 expect(myServiceProviderRecord!.importPath!.length).toBe(2);
 expect(myServiceProviderRecord!.importPath![0]).toBe(MyStandaloneComponentB);
 expect(myServiceProviderRecord!.importPath![1]).toBe(ModuleA);
     }));
});describe('getDependenciesFromInjectable', () => {
  beforeEach(() => setupFrameworkInjectorProfiler());
  afterAll(() => setInjectorProfiler(null));  it('should be able to determine which injector dependencies come from', fakeAsync(() => {
 class MyService {}
 class MyServiceB {}
 class MyServiceC {}
 class MyServiceD {}
 class MyServiceG {}
 class MyServiceH {} const myInjectionToken = new InjectionToken('myInjectionToken');
 const myServiceCInstance = new MyServiceC(); @NgModule({
: [
MyService, {provide: MyServiceB, useValue: 'hello world'},
{provide: MyServiceC, useFactory: () => 123},
{provide: myInjectionToken, useValue: myServiceCInstance} })
 class ModuleA {
 } @Directive({
 '[my-directive]',
e: true,
 })
 class MyStandaloneDirective {
omHost = inject(MyServiceH, {host: true, optional: true});
= inject(Injector);) {
onMyStandaloneDirectiveCreated(this); } @Component({
 'my-comp-c',
 'hello world',
[],
e: true,
 })
 class MyStandaloneComponentC {
 } @Component({
 'my-comp-b',
 '<my-comp-c my-directive/>',
[MyStandaloneComponentC, MyStandaloneDirective],
e: true
 })
 class MyStandaloneComponentB {
 = inject(MyService);
B = inject(MyServiceB, {optional: true});
C = inject(MyServiceC, {skipSelf: true});
onTokenValue = inject(myInjectionToken);
= inject(Injector, {self: true, host: true});
D = inject(MyServiceD);
G = inject(MyServiceG);
ponent = inject(MyStandaloneComponent);
 } @Component({
 'my-comp',
 `<router-outlet/>`,
[RouterOutlet, ModuleA],
: [MyServiceG, {provide: MyServiceH, useValue: 'MyStandaloneComponent'}],
e: true
 })
 class MyStandaloneComponent {
= inject(Injector);
d(RouterOutlet) routerOutlet: RouterOutlet|undefined;
 } TestBed.configureTestingModule({
: [{provide: MyServiceD, useValue: '123'}],  [RouterModule.forRoot([{path: 'lazy', loadComponent: () => MyStandaloneComponentB}])]
 }); const root = TestBed.createComponent(MyStandaloneComponent);
 TestBed.inject(Router).navigateByUrl('/lazy');
 tick();
 root.detectChanges(); const myStandalonecomponentB =
root.componentRef.instance!.routerOutlet!.component as MyStandaloneComponentB; const {dependencies: dependenciesOfMyStandaloneComponentB} =
getDependenciesFromInjectable(myStandalonecomponentB.injector, MyStandaloneComponentB)!;
 const standaloneInjector =
root.componentInstance.injector.get(EnvironmentInjector) as EnvironmentInjector; expect(dependenciesOfMyStandaloneComponentB).toBeInstanceOf(Array);
 expect(dependenciesOfMyStandaloneComponentB.length).toBe(8); const myServiceDep = dependenciesOfMyStandaloneComponentB[0];
 const myServiceBDep = dependenciesOfMyStandaloneComponentB[1];
 const myServiceCDep = dependenciesOfMyStandaloneComponentB[2];
 const myInjectionTokenValueDep = dependenciesOfMyStandaloneComponentB[3];
 const injectorDep = dependenciesOfMyStandaloneComponentB[4];
 const myServiceDDep = dependenciesOfMyStandaloneComponentB[5];
 const myServiceGDep = dependenciesOfMyStandaloneComponentB[6];
 const parentComponentDep = dependenciesOfMyStandaloneComponentB[7]; expect(myServiceDep.token).toBe(MyService);
 expect(myServiceBDep.token).toBe(MyServiceB);
 expect(myServiceCDep.token).toBe(MyServiceC);
 expect(myInjectionTokenValueDep.token).toBe(myInjectionToken);
 expect(injectorDep.token).toBe(Injector);
 expect(myServiceDDep.token).toBe(MyServiceD);
 expect(myServiceGDep.token).toBe(MyServiceG);
 expect(parentComponentDep.token).toBe(MyStandaloneComponent); expect(dependenciesOfMyStandaloneComponentB[0].flags).toEqual({
 false,
 false,
se,
se,
 });
 expect(myServiceBDep.flags).toEqual({
 true,
 false,
se,
se,
 });
 expect(myServiceCDep.flags).toEqual({
 false,
 true,
se,
se,
 });
 expect(myInjectionTokenValueDep.flags).toEqual({
 false,
 false,
se,
se,
 });
 expect(injectorDep.flags).toEqual({
 false,
 false,
e,
e,
 });
 expect(myServiceDDep.flags).toEqual({
 false,
 false,
se,
se,
 });
 expect(myServiceGDep.flags).toEqual({
 false,
 false,
se,
se,
 });
 expect(parentComponentDep.flags).toEqual({
 false,
 false,
se,
se,
 }); expect(dependenciesOfMyStandaloneComponentB[0].value).toBe(myStandalonecomponentB.myService);
 expect(myServiceBDep.value).toBe('hello world');
 expect(myServiceCDep.value).toBe(123);
 expect(myInjectionTokenValueDep.value).toBe(myServiceCInstance);
 expect(injectorDep.value).toBe(myStandalonecomponentB.injector);
 expect(myServiceDDep.value).toBe('123');
 expect(myServiceGDep.value).toBe(myStandalonecomponentB.myServiceG);
 expect(parentComponentDep.value).toBe(myStandalonecomponentB.parentComponent); expect(dependenciesOfMyStandaloneComponentB[0].providedIn).toBe(standaloneInjector);
 expect(myServiceBDep.providedIn).toBe(standaloneInjector);
 expect(myServiceCDep.providedIn).toBe(standaloneInjector);
 expect(myInjectionTokenValueDep.providedIn).toBe(standaloneInjector);
 expect(injectorDep.providedIn).toBe(myStandalonecomponentB.injector);
 expect(myServiceDDep.providedIn).toBe(standaloneInjector.get(Injector, null, {
 true
 }) as Injector);
 expect(getNodeInjectorLView(myServiceGDep.providedIn as NodeInjector))
.toBe(getNodeInjectorLView(
myStandalonecomponentB.parentComponent.injector as NodeInjector)); function onMyStandaloneDirectiveCreated(myStandaloneDirective: MyStandaloneDirective) {
ector = myStandaloneDirective.injector;
s = getDependenciesFromInjectable(injector, MyStandaloneDirective);
ps).not.toBeNull();
ps!.dependencies.length).toBe(2);  // MyServiceH, Injector
ps!.dependencies[0].token).toBe(MyServiceH);
ps!.dependencies[0].flags)
  .toEqual({optional: true, host: true, self: false, skipSelf: false});
deInjector that provides MyService is not in the host path of this injector.
ps!.dependencies[0].providedIn).toBeUndefined();
 }
     }));  it('should be able to recursively determine dependencies of dependencies by using the providedIn field',
     fakeAsync(() => {
 @Injectable()
 class MyService {
B = inject(MyServiceB);
 } @Injectable()
 class MyServiceB {
inject(Router);
 } @NgModule({providers: [MyService]})
 class ModuleA {
 } @NgModule({imports: [ModuleA]})
 class ModuleB {
 } @NgModule({providers: [MyServiceB]})
 class ModuleC {
 } @NgModule({imports: [ModuleB, ModuleC]})
 class ModuleD {
 } @Component(
{selector: 'my-comp', template: 'hello world', imports: [ModuleD], standalone: true})
 class MyStandaloneComponent {
 = inject(MyService);
 } TestBed.configureTestingModule({imports: [RouterModule]});
 const root = TestBed.createComponent(MyStandaloneComponent); const {instance, dependencies} = getDependenciesFromInjectable(
root.componentRef.injector, root.componentRef.componentType)!;
 const standaloneInjector = root.componentRef.injector.get(EnvironmentInjector); expect(instance).toBeInstanceOf(MyStandaloneComponent);
 expect(dependencies).toBeInstanceOf(Array);
 expect(dependencies.length).toBe(1); const myServiceDependency = dependencies[0]; expect(myServiceDependency.token).toBe(MyService);
 expect(myServiceDependency.value).toBe((instance as MyStandaloneComponent).myService);
 expect(myServiceDependency.flags)
.toEqual({optional: false, skipSelf: false, self: false, host: false});
 expect(myServiceDependency.providedIn).toBe(standaloneInjector); const {instance: myServiceInstance, dependencies: myServiceDependencies} =
getDependenciesFromInjectable(
myServiceDependency.providedIn!, myServiceDependency.token!)!;
 expect(myServiceDependencies).toBeInstanceOf(Array);
 expect(myServiceDependencies.length).toBe(1);
 const myServiceBDependency = myServiceDependencies[0]; expect(myServiceBDependency.token).toBe(MyServiceB);
 expect(myServiceBDependency.value).toBe((myServiceInstance as MyService).myServiceB);
 expect(myServiceBDependency.flags)
.toEqual({optional: false, skipSelf: false, self: false, host: false});
 expect(myServiceBDependency.providedIn).toBe(standaloneInjector); const {instance: myServiceBInstance, dependencies: myServiceBDependencies} =
getDependenciesFromInjectable(
myServiceBDependency.providedIn!, myServiceBDependency.token!)!;
 expect(myServiceBDependencies).toBeInstanceOf(Array);
 expect(myServiceBDependencies.length).toBe(1);
 const routerDependency = myServiceBDependencies[0]; expect(routerDependency.token).toBe(Router);
 expect(routerDependency.value).toBe((myServiceBInstance as MyServiceB).router);
 expect(routerDependency.flags)
.toEqual({optional: false, skipSelf: false, self: false, host: false});
 expect(routerDependency.providedIn).toBe((standaloneInjector as R3Injector).parent);
     }));
});describe('getInjectorResolutionPath', () => {
  beforeEach(() => setupFrameworkInjectorProfiler());
  afterAll(() => setInjectorProfiler(null));  it('should be able to inspect injector hierarchy structure', fakeAsync(() => {
 class MyServiceA {}
 @NgModule({providers: [MyServiceA]})
 class ModuleA {
 } class MyServiceB {}
 @NgModule({providers: [MyServiceB]})
 class ModuleB {
 } @Component({
 'lazy-comp',
 `lazy component`,
e: true,
[ModuleB],
 })
 class LazyComponent {
or() {
onLazyComponentCreated(); } @Component({
e: true,
[RouterOutlet, ModuleA],
 `<router-outlet/>`,
 })
 class MyStandaloneComponent {
tor = inject(Injector);
or = inject(EnvironmentInjector);
 } TestBed.configureTestingModule({
[RouterModule.forRoot([{
path: 'lazy',
loadComponent: () => LazyComponent, });
 const root = TestBed.createComponent(MyStandaloneComponent);
 TestBed.inject(Router).navigateByUrl('/lazy');
 tick();
 root.detectChanges(); function onLazyComponentCreated() {
yComponentNodeInjector = inject(Injector);
yComponentEnvironmentInjector = inject(EnvironmentInjector);terOutletNodeInjector = inject(Injector, {skipSelf: true}) as NodeInjector;tandaloneComponent = inject(MyStandaloneComponent);
tandaloneComponentNodeInjector =
  myStandaloneComponent.nodeInjector as NodeInjector;h = getInjectorResolutionPath(lazyComponentNodeInjector);*
* Here is a diagram of the injectors in our application:
*
*
*
*  ┌────────────┐
*  │NullInjector│
*  └─────▲──────┘
*  │
*┌────────────┴────────────────┐
*│EnvironmentInjector(Platform)│
*└────────────▲────────────────┘
*  │
*┌────────────┴────────────┐
*│EnvironmentInjector(Root)│
*└───────────────▲─────────┘
*│
*│
*│
*┌────────────────────────────────────┐  ┌─┴────────────────────────────────────────┐
*│ NodeInjector(MyStandaloneComponent)├─►| EnvironmentInjector(MyStandaloneComponent│
*└────────────────▲───────────────────┘  └────────────▲─────────────────────────────┘
*  │     │
*  │     │
*  │     │
*    ┌────────────┴─────────────┐│
*    │NodeInjector(RouterOutlet)├──────────┐│
*    └────────────▲─────────────┘││
*  │
*  │
*  │
*  │
*   ┌─────────────┴──────────────┐  ┌──────▼──────────┴────────────────┐
*   │ NodeInjector(LazyComponent)├──►EnvironmentInjector(LazyComponent)│
*   └────────────────────────────┘  └──────────────────────────────────┘
*
*
*
*
*
* The Resolution path if we start at NodeInjector(LazyComponent) should be
* [
*    NodeInjector[LazyComponent],
*    NodeInjector[RouterOutlet],
*    NodeInjector[MyStandaloneComponent],
*    R3Injector[LazyComponent],
*    R3Injector[MyStandaloneComponent],
*    R3Injector[Root],
*    R3Injector[Platform],
*    NullInjector
* ]
*/
th.length).toBe(8);th[0]).toBe(lazyComponentNodeInjector);th[1]).toBeInstanceOf(NodeInjector);
tNodeInjectorLView(path[1] as NodeInjector))
  .toBe(getNodeInjectorLView(routerOutletNodeInjector));th[2]).toBeInstanceOf(NodeInjector);
tNodeInjectorLView(path[2] as NodeInjector))
  .toBe(getNodeInjectorLView(myStandaloneComponentNodeInjector));th[3]).toBeInstanceOf(R3Injector);
th[3]).toBe(lazyComponentEnvironmentInjector);
ath[3] as R3Injector).scopes.has('environment')).toBeTrue();
ath[3] as R3Injector).source).toBe('Standalone[LazyComponent]');th[4]).toBeInstanceOf(R3Injector);
ath[4] as R3Injector).scopes.has('environment')).toBeTrue();
ath[4] as R3Injector).source).toBe('Standalone[MyStandaloneComponent]');th[5]).toBeInstanceOf(R3Injector);
ath[5] as R3Injector).scopes.has('environment')).toBeTrue();
ath[5] as R3Injector).scopes.has('root')).toBeTrue();th[6]).toBeInstanceOf(R3Injector);
ath[6] as R3Injector).scopes.has('platform')).toBeTrue();th[7]).toBeInstanceOf(NullInjector);
 }
     }));
});
