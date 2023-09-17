<a name="17.0.0-next.4"></a>
# 17.0.0-next.4 (2023-09-13)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [59387ee476](https://github.com/angular/angular/commit/59387ee476dff1a893a01fe5cbee3c95b93c0cdb) | feat | support styles and styleUrl as strings ([#51715](https://github.com/angular/angular/pull/51715)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [73e4bf2ed2](https://github.com/angular/angular/commit/73e4bf2ed2471faf44a49b591e19a390d5867449) | feat | Add feature to support the View Transitions API ([#51314](https://github.com/angular/angular/pull/51314)) || [f464e39364](https://github.c# 16.2.4 (2023-09-06)<!-- CHANGELOG SPLIT MARKER --><a name="17.0.0-next.2"></a>
# 17.0.0-next.2 (2023### platform-browser  
  ```ts
  import {REMOVE_STYLES_ON_COMPONENT_DESTROY} from '@angular/platform-browser';  providers: [{    useValue: false,
  }]### router  the public API:
  
  - canceledNavigationResolution
  - paramsInheritanceStrategy
  - titleStrategy
  - urlUpdateStrategy
  - malformedUriErrorHandler
    `RouterModule.forRoot` APIs.| Commit | Type | Description |
| -- | -- | -- || [18be804c03](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [86c5e34601](https://github.com/angular/angular/commit/86c5e34601d7901a11688124aa902646524177eb) | fix | remove code duplication between entry-points ([#51500](https://github.com/angular/angular/pull/51500)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [de2550d988](https://github.com/angular/angular/commit/de2550d9886394e1ecde586d72bf2bab5b65cb39) | fix | correct incomplete escaping ([#51557](https://github.com/angular/angular/pull/51557)) |
| [3bca9db4a5](https://github.com/angular/angular/commit/3bca9db4a56d61ac22b4ce87591d8862606177c8) | fix | remove unnecessary escaping in regex expressions ([#51554](https://github.com/angular/angular/pull/51554)) || Commit | Type | Description || [dbffdc09c2](https://github.com/angular/angular/commit/dbffdc09c25c93868aa13ae368c9fd21a4c359fb) | fix | avoid duplicated code between entry-points (primary, testing, rxjs-interop) ([#51500](https://github.com/angular/angular/pull/51500)) |
| [45d2ded0ea](https:| [1423bfbf8f](https://github.c| [685d01e106](https://github.com/angular/angular/commit/685d01e1065dad6dc52eaac9eb9527100994f5ce) | perf | chain template instructions ([#51546](https://github.com/angular/angular/pull/51546)) |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [88b1575271](https://github.com/angular/angular/commit/88b157527172d70ed3e5aa11aa8b7963a8612e49) | fix | correct incomplete escaping ([#51557](https://github.com/angular/angular/pull/51557)) |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- || [c5daa6ce77](https://github.c| Commit | Type | Description |
| -- | -- | -- |# 16.2.3 (2023-08-30)| Commit | Type | Description |
| -- | -- | -- |
| [04c6574280](https://github.com/angular/angular/commit/04c65742802537c8bd725f9a7a931955a67684d9) | fix | remove unnecessary escaping in regex expressions ([#51554](https://github.com/angular/angular/pull/51554)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [dbd761f528](https://github.com/angular/angular/commit/dbd761f528a08cba0fbdd476b115e1445683cf36) | fix | correct incomplete escaping ([#51557](https://github.com/angular/angular/pull/51557)) |
| [5c36fc784f](https://github.com/angular/angular/commit/5c36fc784f292608f7485c5513aeb98e5745d17c) | fix | remove unnecessary escaping in regex expressions ([#51554](https://github.com/angular/angular/pull/51554)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [dcd1add06f](https://github.com/angular/angular/commit/dcd1add06f9facb87de89c144967cc95a2dac27c) | fix | correct incomplete escaping ([#51557](https://github.com/angular/angular/pull/51557)) |
| [20d62603c2](https://github.com/angular/angular/commit/20d62603c2f86c810fda0b3b503327dce232a6d3) | fix | handle hydration of view containers that use component hosts as anchors ([#51456](https://github.com/angular/angular/pull/51456)) |
| [e6b301caa2](https://github.com/angular/angular/commit/e6b301caa25c1532a4db2e8521bdea3f911316b1) | fix | remove unnecessary escaping in regex expressions ([#51554](https://github.com/angular/angular/p### language-service| -- | -- | -- |
| [8081fdd22d](https://github.com/angular/angular/commit/8081fdd22d6889f92e11cbe4c53d80bddd496a9a) | fix | correct incomplete escaping ([#51557](https://github.com/angular/angular/pull/51557)) |<!-- CHANGELOG SPLIT MARKER --><a name="17.0.0-next.1"></a>
# 17.0.0-next.1 (2023-08-23)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [d910bf8a84](https://github.com/angular/angular/commit/d910bf8a843c07a096969d5e47b49f60981b00e9) | fix | Allow safeUrl for ngSrc in NgOptimizedImage ([#51351](https://github.com/angular/angular/pull/51351)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [5bd9fbd2c3](https://github.com/angular/angular/commit/5bd9fbd2c3ab4467074fac5e4d689b3c85bf08cd) | fix | enforce a minimum version to be used when a library uses input transform ([#51413](https://github.com/angular/angular/pull/51413)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [9cc52b9b85](https://github.com/angular/angular/commit/9cc52b9b85ffa5cb65c6886e81b5bff10dde8d52) | feat | support TypeScript 5.2 ([#51334](https://github.com/angular/angular/pull/51334)) |
| [a9b3c006f8](https://github.com/angular/angular/commit/a9b3c006f8593e0187298df21418644070312a40) | fix | guard the jasmine hooks ([#51394](https://github.com/angular/angular/pull/51394)) |
### router| -- | -- | -- |# 16.2.2 (2023-08-23)
### common| -- | -- | -- |### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [39ace8664b](https://github.com/angular/angular/commit/39ace8664b843225a75dd706236ae13e171126d3) | fix | enforce a minimum version to be used when a library uses input transform ([#51413](https://github.com/angular/angular/pull/51413)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [36f434e49d](https://github.com/angular/angular/commit/36f434e49d24f0393950299486141a121d42e044) | fix | guard the jasmine hooks ([#51394](https://github.com/angular/angular/pull/51394)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [b0396e7164](https://github.com/angular/angular/commit/b0396e7164c08e01d24d2d8411edf1ccf4b52826) | fix | Ensure `canceledNavigationResolution: 'computed'` works on first page ([#51441](https://github.com/angular/angular/pull/51441)) |<!-- CHANGELOG SPLIT MARKER --><a name="17.0.0-next.0"></a>
# 17.0.0-next.0 (2023-08-16)<!-- CHANGELOG SPLIT MARKER --><a name="16.2.1"></a>
# 16.2.1 (2023-08-16)
### router
| Commit | Type | Description || [232a8c1b8d](https://github.c### common
| Commit | Type | Description || [29d358170b](https://github.c### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [c27a1e61d6](https://github.com/angular/angular/commit/c27a1e61d64a67aa169086f7db11bcfd5bb7d2fc) | feat | scope selectors in @scope queries ([#50747](https://github.com/angular/angular/pull/50747)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [12bad6576d](https://github.com/angular/angular/commit/12bad6576d2ffe4667118b214d9c7598ed3d8edb) | fix | libraries compiled with v16.1+ breaking with Angular framework v16.0.x ([#50714](https://github.com/angular/angular/pull/50714)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [e53d4ecf4c](https://github.com/angular/angular/commit/e53d4ecf4cfd9e64d6ba8c8b19adbb7df9cfc047) | feat | add afterRender and afterNextRender ([#50607](https://github.com/angular/angular/pull/50607)) || [cdaa2a8a9e](https://github.c### router
| Commit | Type | Descriptio| [0b14e4ef74](https://github.c# 16.1.8 (2023-08-02)
### compiler
| Commit | Type | Description |
| -- | -- | -- |# 16.1.7 (2023-07-26)| Commit |# 16.1.5 (2023-07-13)
### animations| -- | -- | -- |### core
| Commit | Type | Description |
| -- | -- | -- |
| [499fb5c772](https://github.com/angular/angular/commit/499fb5c772332c03ebd8bbf7e1e6cba80dc0def0) | fix | ensure that standalone components get correct injector instances ([#50954](https://github.com/angular/angular/pull/50954)) |
| [c65913ecb7](https://github.com/angular/angular/commit/c65913ecb7de96ee0178c64136c5ffbc62348f34) | fix | handle `deref` returning `null` on `RefactiveNode`. ([#50992](https://github.com/angular/angular/pull/50992)) |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [31419f6a3b](https://github.com/angular/angular/commit/31419f6a3b7d57c5e789d6073d7b6505cf720c13) | perf | do not remove renderer from cache when `REMOVE_STYLES_ON_COMPONENT_DESTROY` is enabled. ([#51005](https://github.com/angular/angular/pull/51005)) |
### upgrade
| Commit | Type | Description |
| -- | -- | -- |# 16.1.4 (2023-07-06)| Commit | Type | Description |
| -- | -- | -- |### upgrade| -- | -- | -- |# 16| Commit | Type | Description |
| -- | -- | -- |
| [e1bbe47c23](https://github.com/angular/angular/commit/e1bbe47c234a495766cc07a9741a194954a6b9b4) | fix | support input transform functions ([#50713](https://github.com/angular/angular/pull/50713)) |
### platform-browser
| Commit | Type | Description || [79dd6a847a](https://github.c# 16.1.2 (2023-06-21)
### http| -- | -- | -- || [5ae001829c](https://github.com/angular/angular/commit/5ae001829c3f3594e3c10f30e0b89ea1eb2b84fb) | fix | use serializeBody to support JSON payload in FetchBackend ([#50776](https://github.com/angu### compiler-cli| -- | -- | -- |
| [71360b3a3e](https://github.com/angular/angular/commit/71360b3a3e7cb3419176c89f8c78ebd2e14ff880) | fix | libraries compiled with v16.1+ breaking with Angular framework v16.0.x ([#50715](https://github.com/angular/angular/pull/50715)) | Commit | Type | Description || [d9bed48eb5](https://github.com/angular/angular/commit/d9bed48eb590bc4a45769835bccc206d418f620c) | fix | extend toSignal to accept any Subscribable ([#50162](https://github.com/angular/angular/pull/50162| Commit | Type | Description || [5e1d8444ae](https://github.com/angular/angular/commit/5e1d8444ae2952b4e9e5d7089200e7a3ac700e0d) | fix | Prevent a component from importing itself. ([#50554](https://github.com/angular/angular/pull/50554)) |<!-- CHANGELOG SPLIT MARKER --><a name="16.1.0"></a>
# 16.1.0 (2023-06-13)
### compiler| -- | -- | -- || [721bc72649](https://github.com/angular/angular/commit/721bc72649b7d73f730298e04a4606a8bfd53011) | fix | resolve deprecation warning with TypeScript 5.1 ([#50460](https://github.com/angular/angular/pull/50460)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [68017d4e75](https://github.com/angular/angular/commit/68017d4e75abed78b378dce54f860cfa0d0fa42f) | feat | add ability to transform input values ([#50420](https://github.com/angular/angular/pull/50420)) |
| [69dadd2502](https://github.com/angular/angular/commit/69dadd25020ee84364466c0740f695984dd8c84d) | feat | support TypeScript 5.1 ([#50156](https://github.com/angular/angular/pull/50156)) |
| [c0ebe34cbd](https://github.com/angular/angular/commit/c0ebe34cbd235dc0b5e56fbe37429b77c0d91170) | fix | add additional component metadata to component ID generation ([#50336](https://github.com/angular/angular/pull/50336)) |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [85c5427582](https://github.com/angular/angular/commit/85c54275825a57fd3c7055a99e58bb211e085af9) | feat | Introduction of the `fetch` Backend for the `HttpClient` ([#50247](https://github.com/angular/angular/pull/50247)) |<!-- CHANGELOG SPLIT MARKER --><a name="16.0.6"></a>
# 16.0.6 (2023-06-13)### compiler| -- | -- | -- |
| [703b8fcac1](https://githu| Commit | Type | Description || Commit | Type | Description |
| -- | -- | -- |
| [7e1bc513de](https://github.com/angular/angular/commit/7e1bc513dead7d809f5ba2e6edc45b85af12f828) | fix | untrack subscription and unsubscription in async pipe ([#50522](https://github.com/angular/angular/pull/50522)) |
### core
| Commit | Type | Description || [9970b29ace](https://github.c| [98e8fdf40e](https://github.com/angular/angular/commit/98e8fdf40e598f2c2a4d0c11de302ea13e586a1a) | fix | fix `Self` flag inside embedded views with custom injectors ([#50270](https://github.com/angular/angular/pull/50270)) |
| [199ff4fe7f](https://github.com/angular/angular/commit/199ff4fe7f2cd4b561703e8520c2d6ccc1e2afb7) | fix | host directives incorrectly validating aliased bindings ([#50364](https://github.com/angular/angular/pull/50364)) || Commit | Type | Description || [080bbd2137](https://github.com/angular/angular/commit/080bbd21377d099c91aa0c6ea8ca634423cd8125) | fix | create macrotask during request handling instead of load start ([#50406](https://github.com| [cc41758b59](https://github.c# 16.0.1 (2023-05-10)
### core| -- | -- | -- || [048b6b1e0d](https://github.com/angular/angular/commit/048b6b1e0d9d93d63e6fde2c16a9c3e2b221b581) | fix | bootstrapApplication call not rejected when error is thrown in importProvidersFrom module ([#50120| [f751ce6445](https://github.c# 16.0.0 (2023-05-03)[Blog post "Angular v16 is now available"](https://goo.gle/angular-v16).## Breaking Changes- Angular Compatibility Compile### bazel
- Several changes to the Angular Package Format (APF)
  - Removal of FESM2015
  - Replacing ES2020 with ES2022
  - Replacing FESM2020 with FESM2022
- Several changes to the Angular Package Format (APF)
  - Removal of FESM2015
  - Replacing ES2020 with ES2022
  - Replacing FESM2020 with FESM2022
### common
- `MockPlatformLocation` is now provided by default in tests.
  Existing tests may have behaviors which rely on
  `BrowserPlatformLocation` instead. For example, direct access to the
  `window.history` in either the test or the component rather than going
  through the Angular APIs (`Location.getState()`). The quickest fix is to
  update the providers in the test suite to override the provider again
  `TestBed.configureTestingModule({providers: [{provide: PlatformLocation, useClass: BrowserPlatformLocation}]})`.  `MockPlatformLocation` instea  
  Before the change, the following template was compiling:    selector: 'person',      <ng-container
        *ngTemplateOutlet=" context: { $implicit: 'test', - `zone.js` versions `0.11.x` and `0.12.x` are not longer supported.
- * `entryComponents` has been deleted from the `@NgModule` and `@Component` public APIs. Any usages can be removed since they weren't doing anyting.
  * `ANALYZE_FOR_ENTRY_COMPONENTS` injection token has been deleted. Any references can be removed.
- ComponentRef.setInput will only set the input on the
  component if it is different from the previous value (based on `Object.is`  updated to copy objects or wr    ]
  });- The `ReflectiveInjector` and   ### platform-browser### platform-server  - `renderApplication` method no longer accepts a root component as first argument. Instead, provide a bootstrapping function that returns a `Promise<Applic  Before  ```ts
  const bootstrap = () => bootstrapApplication(RootComponent, appConfig);
  const output: string = await renderApplication(bootstrap, options);
  ```
- `renderModuleFactory` has been removed. Use `renderModule` instead.
### router  a `NavigationSkipped` event.   factory resolver.- Tests which mock `ActivatedRoute` instances may need to be adjusted  scenarios. This means that tests with invalid/incomplete ActivatedRoute mocks  to a real URL where before th  There is rarely production impact, but it has been found that relative
  navigations when using an `ActivatedRoute` that does not appear in the
  current router state were effectively ignored in the past. By creating
  the correct URLs, this sometimes resulted in different navigation
  behavior in the application. Most often, this happens when attempting to
  create a navigation that only updates query params using an empty
  command array, for example `router.navigate([], {relativeTo: route,
  queryParams: newQueryParams})`. In this case, the `relativeTo` property
  should be removed.
## Deprecations
### core
-  `makeStateKey`, `StateKey` and  `TransferState` exports have been moved from `@angular/platform-browser` to `@angular/core`. Please update the imports.
  
  ```diff
  - import {makeStateKey, StateKey, TransferState} from '@angular/platform-browser';
  + import {makeStateKey, StateKey, TransferState} from '@angular/core';
  ```  `runInInjectionContext` funct  ```typescript
  // Previous method version (deprecated):
  envInjector.runInContext(fn);  runInInjectionContext(envInje- `BrowserModule.withServerTransition` has been deprecated. `APP_ID` should be used instead to set the application ID.
  NB: Unless, you render multiple Angular applications on the same page, setting an application ID is not necessary.
  
  Before:
  ```ts
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),  ]  ```
- `ApplicationConfig`- `PlatformConfig.baseUrl` and | Commit | Type | Description |
| -- | -- | -- |
| [48aa96ea13](https://github.com/angular/angular/commit/48aa96ea13ebfadf2f6b13516c7702dae740a7be) | refactor | remove Angular Compatibility Compiler (ngcc) ([#49101](https://github.com/angular/angular/pull/49101)) |
| [2703fd6260](https://github.com/angular/angular/commit/2703fd626040c5e65401ebd776404a3b9e284724) | refactor | remove deprecated `EventManager` method `addGlobalEventListener` ([#49645](https://github.com/angular/angular/pull/49645)) |
### common
| Commit | Type | Description || [5dce2a5a3a](https://github.c| [1407a9aeaf](https://github.com/angular/angular/commit/1407a9aeaf5edf33dfb9b52d7b2baaebef9b80ed) | feat | support multiple configuration files in `extends` ([#49125](https://github.com/angular/angular/pull/49125)) |
| [9de1e9da8f](https://github.com/angular/angular/commit/9de1e9da8fc7d102f74389d9a270c4608bf0dd64) | fix | incorrectly matching directives on attribute bindings ([#49713](https://github.com/angular/angular/pull/49713)) |
| [6623810e4d](https://github.com/angular/angular/commit/6623810e4d3347edaccbbb214fa883ab6a669936) | fix | Produce diagnositc if directive used in host binding is not exported ([#49527](https://github.com/angular/angular/pull/49527)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- || [ed817e32fe](https://github.c### core| -- | -- | -- || [4e9531f777](https://github.com/angular/angular/commit/4e9531f7773e7bf0d3034a36c62f34f914e4a451) | feat | add `mergeApplicati| [bc5ddabdcb](https://github.c| [061f3d1086](https://github.com/angular/angular/commit/061f3d1086421b921403f7d358c02f84927b699b) | feat | Drop public `factories` property for `IterableDiffers` : Breaking change ([#49598](https://github.com/angular/angular/pull/49598)) |
| [fdf61974d1](https://github.com/angular/angular/commit/fdf61974d1155b771d7d53c7bbc3bd2b0f6681cb) | feat | drop support for `zone.js` versions `<=0.12.0` ([#49331](https://github.com/angular/angular/pull/49331)) |
| [9c5fd50de4](https://github.com/angular/angular/commit/9c5fd50de4489d98b40668f7d9885c18d9a43c73) | feat | effects can optionally return a cleanup function ([#49625](https://github.com/angular/angular/pull/49625)) |
| [c024574f46](https://github.com/angular/angular/commit/c024574f46f18c42c1e5b02afa6c1e3e4219d25b) | feat | expose `makeStateKey`, `StateKey` and  `TransferState` ([#49563](https://github.com/angular/angular/pull/49563)) |
| [a5f1737d1c](https://github.com/angular/angular/commit/a5f1737d1c2435b1476c1277bdc9a6827377465f) | feat | expose onDestroy on ApplicationRef ([#49677](https://github.com/angular/angular/pull/49677)) |
| [e883198460](https://github.com/angular/angular/commit/e8831984601da631afc29f9fd72d36f57696f936) | feat | implement `takeUntilDestroyed` in rxjs-interop ([#49154](https://github.com/angular/angular/pull/| [0f5c8003cc](https://github.c| [f8e25864e8](https:| [be23b7ce65](https://github.com/angular/angular/commit/be23b7ce650634c| [fd9dcd36cd](https://github.com/angular/angular/commit/fd9dcd36cdf9ad92f404567f6c8c0914544b6e0d) | fix | Ensure ef| [4721c48a24](https://github.c| [f8b95b9da6](https://github.com/angular/angular/commit/f8b95b9da62d0c8719a38d230f389db5268c0b01) | fix | execute query setters in non-reactive context ([#49906](https://github.com/angular/angular/pull/49906)) |
| [ef91a2e0fe](https://github.com/angular/angular/commit/ef91a2e0fe66378635d0787bd6d953eb8d31d881) | fix | execute template creation in non-reactive context ([#49883](https://github.com/angular/angular/pull/49883)) |
| [87549af73c](https://github.com/angular/angular/commit/87549af73c675d33b2c87d083e05a82b18332bf0) | fix | Fix capitalization of toObservableOptions ([#49832](https://github.com/angular/angular/pull/49832)) |
| [0e5f9ba6f4](https://github.com/angular/angular/commit/0e5f9ba6f427a79a0b741c1780cd2ff72cc3100a) | fix | generate consistent component IDs ([#48253](https://github.com/angular/angular/pull/48253)) |
| [fedc75624c](https://github.com/angular/angular/commit/fedc75624c5dcfaaa2b5ef901e7e700309770a26) | fix | include inner ViewContainerRef anchor nodes into ViewRef.rootNodes output ([#49867](https://github.com/angular/angular/pull/49867)) |
| [df1dfc4c17](https://github.com/angular/angular/commit/df1dfc4c17abc6799f2e8f3f5f8604a7bf3d173a) | fix | make sure that lifecycle hooks are not tracked ([#49701](https://github.com/angular/angular/pull/49701)) |
| [c34d7e0822](https://github.com/angular/angular/commit/c34d7e0822c21f7b6e7dfd46d3e12cd6ebb7390e) | fix | onDestroy should be registered only on valid DestroyRef ([#49804](https://github.com/angular/angular/pull/49804)) |
| [2f2ef14f9e](https://github.com/angular/angular/commit/2f2ef14f9e6b64445f76cb9e3f5958abe2439157) | fix | resolve `InitialRenderPendingTasks` promise on complete ([#49784](https://github.com/angular/angular/pull/49784)) |
| [c7d8d3ee37](https://github.com/angular/angular/commit/c7d8d3ee3757c2540baf739001b0fc13c096a4a4) | fix | toObservable should allow writes to signals in the effect ([#49769](https://github.com/angular/angular/pull/49769)) |
| [b4531f1d82](https://github.com/angular/angular/commit/b4531f1d82dc37d00487ff862f058e2574cec318) | fix | typing of TestBed Common token. ([#49997](https://github.com/angular/angular/pull/49997)) |
| [a4e749ffca](https://github.com/angular/angular/commit/a4e749ffca5b1f726c365cecaf0f5c4f13eec8d9) | fix | When using setInput, mark view dirty in same was as `markForCheck` ([#49711](https://github.com/angular/angular/pull/49711)) |
| [9b9c818f99](https://github.com/angular/angular/commit/9b9c818f99c44473e915bedd157146c88e44989a) | perf | change `RendererType2.styles` to accept a only a flat array ([#49072](https://github.com/angular/angular/pull/49072)) |
| [82d6fbb109](https://github.com/angular/angular/commit/82d6fbb109491607bd2e4feaa35c3dace79e4576) | refactor | generate a static application ID ([#49422](https://github.com/angular/angular/pull/49422)) |
| [3b863ddc1e](https://github.com/angular/angular/commit/3b863ddc1e67a2fa7627ad78e172c839781e81b6) | refactor | Remove `ReflectiveInjector` symbol ([#48103](https://github.com/angular/angular/pull/48103)) |
| [f594725951](https://github.com/angular/angular/commit/f594725951fafde475ee99ffccf1175c13c48288) | refactor | remove Node.js v14 support ([#49255](https://github.com/angular/angular/pull/49255)) |
### forms
| Commit | Type | Description || [07a1aa3004](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [aff1512950](https://github.com/angular/angular/commit/aff15129501511569bbb4ff6dfcb16ad1c01890d) | feat | allow `HttpClient` to cache requests ([#49509](https://github.com/angular/angular/pull/49509)) || [9f0c6d1ed1](https://github.c| -- | -- | -- |
| [5e5dac278d](https://github.com/angular/angular/commit/5e5dac278d57d29277f0847f025e7dfa850bec45) | feat | Migration to remove `Router` guard and resolver interfaces ([#49337](https://github.com/angular/angular/pull/49337)) |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [761e02d912](https://github.com/angular/angular/commit/761e02d912e4f910f9e5e915c019dc1fef0d0839) | feat | add a public API function to enable non-destructive hydration ([#49666](https://github.com/angular/angular/pull/49666)) |
| [630af63fae](https://github.com/angular/angular/commit/630af63fae2e279e88805aecf01db58be6dfbafb) | feat | deprecate `withServerTransition` call ([#49422](https://github.com/angular/angular/pull/49422)) |
| [81e7d15ef6](https://github.com/angular/angular/commit/81e7d15ef65b70c9734ebfd2c865e70d743263dc) | feat | enable HTTP request caching when using `provideClientHydration` ([#49699](https://github.com/angular/angular/pull/49699)) |
| [74c925c19c](https://github.com/angular/angular/commit/74c925c19c5a8f4823fa929700f6599970cd61d3) | fix | export deprecated `TransferState` as type ([#50015](https://github.com/angular/angular/pull/50015)) |
| [2312eb53ef](https://github.com/angular/angular/commit/2312eb53ef5862e0866c29d11dec2a9b7b6a064c) | fix | KeyEventsPlugin should keep the same behavior ([#49330](https://github.com/angular/angular/pull/49330)) || [9165ff2517](https://github.c| [3aa85a8087](https://github.com/angular/angular/commit/3aa85a8087643ce79da6d1aeae7b925bb76315a5) | refactor | move `ApplicationConfig` to core ([#49253](https://github.com/angular/angular/pull/492### platform-server| -- | -- | -- |
| [b5278cc115](https://github.com/angular/angular/commit/b5278cc115ee6383a20783967b9e7da3f6184dcd) | feat | `renderApplication` now accepts a bootstrapping method ([#49248](https://github.com/angular/angular/pull/49248)) |
| [056d68002f](https://github.com/angular/angular/commit/056d68002fbe6024b486bb7220bc77f8f9a07707) | feat | add `provideServerSupport` function to provide server capabilities to an application ([#49380](https://github.com/angular/angular/pull/49380)) |
| [7870fb07fe](https://github.com/angular/angular/commit/7870fb07fe6b25f5ebb22497bff3a03b7b5fc646) | feat | rename `provideServerSupport` to `provideServerRendering` ([#49678](https://github.com/angular/angular/pull/49678)) |
| [a08a8ff108](https://github.com/angular/angular/commit/a08a8ff108bba88ba4bd7f30a6a8c1bcadb13db7) | fix | bundle @angular/domino in via esbuild ([#49229](https://github.com/angular/angular/pull/49229)) |
| [5ea624f313](https://github.com/angular/angular/commit/5ea624f3135c71316c36eb94445d818f9157d988) | fix | remove dependency on `@angular/platform-browser-dynamic` ([#50064](https://github.com/angular/angular/pull/50064)) |
| [e99460865e](https://github.com/angular/angular/commit/e99460865e6a038be08a3436422ad129901aec8c) | refactor | deprecate `useAbsoluteUrl` and `baseUrl` ([#49546](https://github.com/angular/angular/pull/49546)) |
| [41f27ad086](https://github.com/angular/angular/commit/41f27ad08643839d09daf4588069a3f8fe627070) | refactor | remove `renderApplication` overload that accepts a component ([#49463](https://github.com/angular/angular/pull/49463)) |
| [17abe6dc96](https://github.com/angular/angular/commit/17abe6dc96a443de0c2f9575bb160042a031fed1) | refactor | remove deprecated `renderModuleFactory` ([#49247](https://github.com/angular/angular/pull/49247)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [ea32c3289a](https://github.com/angular/angular/commit/ea32c3289ad773a821b3432fb8d4c36d0d9fbd9d) | feat | Expose information about the last successful `Navigation` ([#49235](https://github.com/angular/angular/pull/49235)) |
| [455c728525](https://github.com/angular/angular/commit/455c7285257a8def53ae6c9d14e9848d72ae2613) | feat | helper functions to convert class guards to functional ([#48709](https://github.com/angular/angular/pull/48709)) || [1f055b90b6](https://github.c| [c0b1b7becf](https://github.com/angular/angular/commit/c0b1b7becf65d5f21018a1794aafe9bbfbd5ce05) | fix | Remove deprecated ComponentFactoryResolver from APIs ([#49239](https://github.com/angular/angular/pull/49239)) |
| [1e32709e0e](https://github.com/angular/angular/commit/1e32709e0e16f553ed3e7778705c9a0c5641d0af) | fix | remove RouterEvent from Event union type ([#46061](https://github.com/angular/angular/pull/46061)) || [1600687fe5](https://github.c### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [5e7fc259ea](https://github.com/angular/angular/commit/5e7fc259ead62ee9b4f8a9a77a455065b6a8e2d8) | feat | add function to provide service worker ([#48247](https://github.com/angular/angular/pull/48247)) |<!-- CHANGELOG SPLIT MARKER --><a name="15.2.9"></a>
# 15.2.9 (2023-05-03)
### common
| Commit | Type | Description || [9107e931ca](https://github.c| Commit | Type | Description || [7c58885797](https://github.c### core
| Commit | Type | Description |
| -- | -- | -- |
| [2fff8fadbe](https://github.com/angular/angular/commit/2fff8fadbeff9df3bc09b8847dbf08febbe3b5f8) | fix | handle invalid classes in class array bindings ([#49924](https://github.com/angular/angular/pull/49924)) || Commit | Type | Description || [05a0225deb](https://github.com/angular/angular/commit/05a0225deb126849f3798e828f6dbef7c221ec57) | fix | prevent headers from throwing an error when initializing numerical values ([#49379](https://github.com/angular/angular/pull/49379)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [09a42d988e](https://github.com/angular/angular/commit/09a42d988e654825648205c8df90f7ca4d034c74) | fix | canceledNavigationResolution: 'computed' with redirects to the current URL ([#49793](https://github.com/angular/angular/pull/49793)) |<!-- CHANGELOG SPLIT MARKER --><a name="15.2.7"></a>
# 15.2.7 (2023-04-12)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [b0c1a90f55](https://github.com/angular/angular/commit/b0c1a90f55ecfafb4fd5c22cdd1b4a5f12573f22) | fix | Produce diagnositc if directive used in host binding is not exported ([#49792](https://github.com/angular/angular| Commit | Type | Description || [a40529af2e](https://github.com/angular/angular/commit/a40529af2e2923f1dbdae8898a0e94e9e63a3fcf) | fix | Catch FatalDiagnosticError during template type checking ([#49792](https://github.com/angular/angular/pull/49792)) |
### core| -- | -- | -- |## Special Thanks# 13.4.0 (2023-04-06)| Commit | Type | Description |
| -- | -- | -- |
| [ae34dbca1b](https://github.com/angular/angular/commit/ae34dbca1be10b0245a751bb0596599e95d7b4aa) | feat | Backport NgOptimizedImage to v13 |
## Special Thanks
Alex Castle and Paul Gschwendtner<!-- CHANGELOG SPLIT MARKER --><a name="15.2.6"></a>
# 15.2.6 (2023-04-05)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [d9efa1b0d7](https://github.com/angular/angular/commit/d9efa1b0d742217de1164f7904c202b2697348d9) | feat | change the URL sanitization to only block javascript: URLs ([#49659](https://github.com/angular/angular/pull/49659)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [cad7274ef9](https://github.com/angular/angular/commit/cad7274ef90914f0c24d071473a6cbae0e5b8250) | fix | create correct URL relative to path with empty child ([#49691](https://github.com/angular/angular/pull/49691)) |
| [9b61379096](https://github.com/angular/angular/commit/9b6137909690d6cbfdd8cbef502e9e2ac0d28c4a) | fix | Ensure initial navigation clears current navigation when blocking ([#49572](https://github.com/angular/angular/pull/49572)) |
## Special Thanks
Andrew Scott, Guillaume Weghsteen, John Manners, Johnny Gérard, Matthieu Riegler, Robin Richtsfeld, Sandra Limacher, Sarthak Thakkar, Vinit Neogi and vikram menon<!-- CHANGELOG SPLIT MARKER --><a name="15.2.5"></a>### common| -- | -- | -- |
| [ca5acadb78](https://github.com/angular/angular/commit/ca5acadb78c33bf896001a5810cb4be15ff7bc86) | fix | invalid ImageKit transformation ([#49201](https://github.com/angular/angular/pull/49201)) |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [077f6b4674](https://github.com/angular/angular/commit/077f6b4674c01bfed083e73a17d848e226e543b4) | fix | do not unquote CSS values ([#49460](https://github.com/angular/angular/pull/49460)) |### core| -- | -- | -- |
| [d201fc2dec](https://github.com/angular/angular/commit/d201fc2dec1a3a9cc6952ebb46cb672200a78236) | fix | set style property value to empty string instead of an invalid value ([#49460](https://github.com/angular/angular/pull/49460)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [978d37f324](https://github.com/angular/angular/commit/978d37f324ce4a1fe9b57f3d9430d7c28ecf6131) | fix | Ensure Router preloading works with lazy component and static children ([#49571](https://github.com/angular/angular/pull/49571)) |
| [a844435514](https://github.com/angular/angular/commit/a844435514962c52f4fb480bcfab7ee6519a59cc) | fix | fix [#49457](https://github.com/angular/angular/pull/49457) outlet activating with old info ([#49459](https://github.com/angular/angular/pull/49459)) |
## Special Thanks
Alan Agius, Andrew Scott, Asaf Malin, Jan Cabadaj, Kristiyan Kostadinov, Matthieu Riegler, Paul Gschwendtner, Sid and Tano Abeleyra<!-- CHANGELOG SPLIT MARKER --><a name="15.2.4"></a>
# 15.2.4 (2023-03-22)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [bae6b5ceb1](https://github.com/angular/angular/commit/bae6b5ceb16bd87c8146aa29564a8d29135a6f95) | fix | Allow `TestBed.configureTestingModule` to work with recursive cycle of standalone components. ([#49473](https://github.com/angular/angular/pull/49473)) |
| [087f4412af](https://github.com/angular/angular/commit/087f4412afe9ccdefe7d63012af749b79f3e84d0) | fix | more accurate matching of classes during content projection ([#48888](https://github.com/anAditya Srinivasan, Alex Rickaba## Special Thanks
Alan Agius, Esteban Gehring, Matthieu Riegler and Virginia Dooley<!-- CHANGELOG SPLIT MARKER --><a name="14.3.0"></a>
# 14.3.0 (2023-03-13)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [37bbc61cfe](https://github.com/angular/angular/commit/37bbc61cfeca1531a80393636c096ce452a67d27) | feat | Backport NgOptimizedImage to Angular 14. |
## Special Thanks
Alex Castle, Joey Perrott and Paul Gschwendtner<!-- CHANGELOG SPLIT MARKER --><a name="15.2.2"></a>
# 15.2.2 (2023-03-08)
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [6207d6f1f0](https://github.com/angular/angular/commit/6207d6f1f0771ff3b74379367e65af665ef0e51c) | fix | add protractor support if protractor imports are detected ([#49274](https://github.com/angular/angular/pull/49274)) |Alan Agius, Andrew Kushnir, And### common
| Commit | Type | Description |
| -- | -- | -- |
| [f0e926074d](https://github.com/angular/angular/commit/f0e926074df189b3e3ca361a6a3bcd852c05e010) | fix | make Location.normalize() return the correct path when the base path contains characters that interfere with regex syntax. ([#49181](https://github.com/angular/angular/pull/49181)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [04d8b6c61a](https://github.com/angular/angular/commit/04d8b6c61a0d0a2d61b9202d09774f3ab347e82f) | fix | do not persist component analysis if template/styles are missing ([#49184](https://github.com/angular/angular/pull/49184)) |
### core| -- | -- | -- |### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [44d095a61c](https://github.com/angular/angular/commit/44d095a61cb340ea1f5e0a19370ea839378b02c3) | fix | avoid migrating the same class multiple times in standalone migration ([#49245](https://github.com/angular/angular/pull/49### router| -- | -- | -- |
| [3062442728](https://github.com/angular/angular/commit/30624427289ad65bdbabd865d028146753c3a97a) | fix | add error message when using loadComponent with a NgModule ([#49164](https://github.com/angular/angular/pull/49164)) |
## Special Thanks# 15.2.0 (2023-02-22)### 
- Class and `InjectionToken` guards and resolvers are
  deprecated. Instead, write guards as plain JavaScript functions and
  inject dependencies with `inject` from `@angular/core`.
### 
| Commit | Type | Description || [926c35f4ac](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [54b24eb40f](https://github.com/angular/angular/commit/54b24eb40fed13c926305ad475202a5608d41c6b) | feat | Add loaderParams attribute to NgOptimizedImage ([#48907](https://github.com/angular/angular/pull/48907)) |
### compiler-cli
| Commit | Type | Description || [0cf11167f1](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [a154db8a81](https://github.com/angular/angular/commit/a154db8a81cbdfed8c3d0db1e2a5bf43aa3e0bbf) | feat | add ng generate schematic to convert declarations to standalone ([#48790](https://github.com/angular/angular/pull/48790)) |
| [345e737daa](https://github.com/angular/angular/commit/345e737daa7b9f635a4c2923358e5e765f716434) | feat | add ng generate schematic to convert to standalone bootstrapping APIs ([#48848](https://github.com/angular/angular/pull/48848)) |
| [e7318fc758](https://github.com/angular/angular/commit/e7318fc758d9e64d1a7f60a2c7071a769b73e7d8) | feat | add ng generate schematic to remove unnecessary modules ([#48832](https://github.com/angular/angular/pull/48832)) |
### language-service| -- | -- | -- || [141333411e](https://github.com/angular/angular/commit/141333411e67769d752c7162e4cb03376022f5e1) | feat | Introduce a new NgModuleIndex, and use it to suggest re-exports. ([#48354](https://github.com/angular/angular/pull/48354)) |
| [d0145033bd](https:| Commit | Type | Description || [2796230e95](https://github.com/angular/angular/commit/2796230e953eb8c29d6227a1a3858f5f08a8f200) | fix | add `enum` in `mode` option in `standalone` schema ([#48851](https://github.com/angular/angular/pull/48851)) |
| [816e76a578](https://github.com/angular/angular/commit/816e76a5789b041fee78ddd278c0e0d19b9a617a) | f| [32cf4e5cb9](https://github.c| [a40cd47aa7](https://github.com/angular/angular/commit/a40cd47aa7ebccfbeeb26e397e03f1372aa10a55) | fix | avoid modifying testing modules without declarations ([#48921](https://github.com/angular/angular/pull/48921)) |
| [1afa6ed322](https://github.com/angular/angular/commit/1afa6ed3227e784e3fe2b4b31443961589cb6332) | fix | don't add ModuleWithProviders to standalone test components ([#48987](https://github.com/angular/angular/pull/48987)) |
| [c98c6a8452](https://github.com/angular/angular/commit/c98c6a845286b9b89daf275a9c4a2bdbc7ad77a7) | fix | don't copy animations modules into the imports of test components ([#49147](https://github.com/angular/angular/pull/49147)) |
| [8389557848](https://github.com/angular/angular/commit/83895578488bd35c7e47609f092907eb0f53f435) | fix | don't copy unmigrated declarations into imports array ([#48882](https://github.com/angular/angular/pull/48882)) |
| [f82bdc4b01](https://github.com/angular/angular/commit/f82bdc4b01f93a7103870449d37da61cc4c4f179) | fix | don't delete classes that may provide dependencies transitively ([#48866](https://github.com/angular/angular/pull/48866)) |
| [759db12e0b](https://github.com/angular/angular/commit/759db12e0b618fcb51f4cb141adeb49bfa495a60) | fix | duplicated comments on migrated classes ([#48966](https://github.com/angular/angular/pull/48966)) |
| [ba38178d19](https://github.com/angular/angular/commit/ba38178d1918d413f9c2260c40eb6542eadfddba) | fix | generate forwardRef for same file imports ([#48898](https://github.com/angular/angular/pull/48898)) |
| [03fcb36cfd](https://github.com| [770191cf1f](https://github.c| [65c74ed93e](https://github.com/angular/angular/commit/65c74ed93e04cb560c27838d440c6aa7a9859a4e) | fix | normalize paths to posix ([#48850](https://github.com/angular/angular/pull/48850)) |
| [6377487b1a](https://github.com/angular/angular/commit/6377487b1ab7679cef9a44f88440fe5e8eb97480) | fix | only exclude bootstrapped declarations from initial standalone migration ([#48987](https://github.com/angular/angular/pull/48987)) |
| [e9e4449a43](https://github.com/angular/angular/commit/e9e4449a43430e026e61b0f05ebd32dd830fa916) | fix | preserve tsconfig in standalone migration ([#48987](https://github.com/angular/angular/pull/48987)) |
| [ffad1b49d9](https://github.com/angular/angular/commit/ffad1b49d95ab90637e7184f92cb5136d490d865) | fix | reduce number of files that need to be checked ([#48987](https://github.com/angular/angular/pull/48987)) |
| [ba7a757cc5](https://github.com/angular/angular/commit/ba7a757cc5a2f3f942adcbabdcd5b7aef33ea493) | fix | return correct alias when conflicting import exists ([#49139](https://github.com/angular/angular/pull/49139)) |
| [49a7c9f94a](https://github.com/angular/angular/commit/49a7c9f94ae8f89907da8b3620242e62f87ec5a4) | fix | standalone migration incorrectly throwing path error for multi app projects ([#48958](https://github.com/angular/angular/pull/48958)) |
| [584976e6c8](https://github.com/angular/angular/commit/584976e6c8a783d40578ab191132673300394a52) | fix | support --defaults in standalone migration ([#48921](https://github.com/angular/angular/pull/48921)) |
| [03f47ac901](https://github.com/angular/angular/commit/03f47ac9019eddbcb373b50c41bc6f523293ece1) | fix | use consistent quotes in generated imports ([#48876](https://github.com/angular/angular/pull/48876)) |
| [ebae506d89](https://github.com/angular/angular/commit/ebae506d894a90c38e0f2dd1e948acabdb0fdf2e) | fix | use import remapper in root component ([#49046](https://github.com/angular/angular/pull/49046)) |
| [40c976c909](https://github.com/angular/angular/commit/40c976c90975878852a87b7722076eb78944098b) | fix | use NgForOf instead of NgFor ([#49022](https://github.com/angular/angular/pull/49022)) |
| [4ac25b2aff](https://github.com/angular/angular/commit/4ac25b2affab4f959ad8c111f1e429a05b435422) | perf | avoid re-traversing nodes when resolving bootstrap call dependencies ([#49010](https://github.com/angular/angular/pull/49010)) |
| [26cb7ab2e6](https://github.com/angular/angular/commit/26cb7ab2e6ac9b61904361a8a544467b69eef3f3) | perf | speed up language service lookups ([#49010](https://github.com/angular/angular/pull/49010)) |
### platform-browser| -- | -- | -- |### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [25e220a23a](https://github.com/angular/angular/commit/25e220a23ab90520efc65f05cd9b7a22db582b87) | fix | avoid duplicate TransferState info after renderApplication call ([#49094](https://github.com/angular/angular/pull/49094)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [31b94c762f](https://github.com/angular/angular/commit/31b94c762fc91ab6cabe08ea6812780fdcf92a64) | feat | Add a withNavigationErrorHandler feature to provideRouter ([#48551](https://github.com/angular/angular/pull/48551)) |
| [dedac8d3f7](https://github.com/angular/angular/commit/dedac8d3f73ebf4f05b773454e2a22ab5fa4bf7c) | feat | Add test helper for trigger navigations in tests ([#48552](https://github.com/angular/angular/pull/48552)) |
## Special Thanks
Alan Agius, Alex Castle, Alex Rickabaugh, Andrew Kushnir, Andrew Scott, Dylan Hunn, Ikko Eltociear Ashimine, Ilyass, Jessica Janiuk, Joey Perrott, John Manners, Kalbarczyk, Kristiyan Kostadinov, Matthieu Riegler, Paul Gschwendtner, Pawel Kozlowski, Virginia Dooley, Walid Bouguima, cexbrayat and mgechev<!-- CHANGELOG SPLIT MARKER --><a name="15.1.5"></a>
# 15.1.5 (2023-02-15)
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [5f2a3edcf2](https://github.com/angular/angular/commit/5f2a3edcf27cfe6ffc6ae4d67ca2b47953f26336) | fix | Make radio buttons respect `[attr.disabled]` ([#48864](https://github.com/angular/angular/pull/48864)) |
## Special Thanks
AleksanderBodurri, Alvaro Junqueira, Dylan Hunn, Joey Perrott, Matthieu Riegler, PaloMiklo and Paul Gschwendtner<!-- CHANGELOG SPLIT MARKER --><a name="15.1.4"></a>
# 15.1.4 (2023-02-08)
## Special Thanks
Jessica Janiuk, Kian Yang Lee, Matthieu Riegler, Redouane Bekkouche and Simona Cotin<!-- CHANGELOG SPLIT MARKER --><a name="15.1.3"></a>
# 15.1.3 (2023-02-02)| Commit | Type | Description || [d36dfd4b62](https://github.com/angular/angular/commit/d36dfd4b626ff4c5894ca67136f71dd1f7f56e3e) | fix | fix non-animatable warnings for easing ([#48583](https://github.com/angular/angular/pull/48583)) |
### common
| Commit | Type | Description |
| -- | -- | -- |
| [a334e4efbe](https://github.com/angular/angular/commit/a334e4efbe9380776e574f745390901552df771e) | fix | warn if using ngSrcset without a configured image loader ([#48804](https://github.com/angular/angular/pull/48804)) |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [171b4d4640](https://github.com/angular/angular/commit/171b4d46407e7c2860fdce4a5196fd6a34b455f0) | fix | incorrect code when non-null assertion is used after a safe access ([#48801]| Commit | Type | Description || [9e86dd231b](https://github.com/angular/angular/commit/9e86dd231bd0fb818da537191bbe197f15efc44d) | fix | Fixed file format issue with lint ([#48859](https://github.com/angular/angular/pull/48859)) |
| [af31f98b00](https://github.com/angular/angular/commit/af31f98b00a5d3decbb39df1f998346b3002b89e) | fix | migration host incorrectly reading empty files ([#48849](https://github.com/angular/angular/pull/48849)) |
### platform-server
| Commit | Type | Description || [73972c684e](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [d5b2c249a3](https://github.com/angular/angular/commit/d5b2c249a3b220d0a47413c6e1054fd49d9d8cd8) | fix | Handle routerLink directive on svg anchors. ([#48857](https://github.com/angular/angular/pull/48857)) |
## Special Thanks
Alan Agius, Besim Gürbüz, Brecht Billiet, Dario Piotrowicz, Dylan Hunn, Iván Navarro, Jessica Janiuk, Kristiyan Kostadinov, Matthieu Riegler, Onkar Ruikar, Payam Valadkhan, Santosh Yadav, Virginia Dooley and Walid Bouguima<!-- CHANGELOG SPLIT MARKER --><a name="15.1.2"></a>
# 15.1.2 (2023-01-25)
### compiler
| Commit | Type | Description || [98ccb57117](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [145f848a10](https://github.com/angular/angular/commit/145f848a10b4dc791cbf42b803983357735d5f86) | fix | resolve deprecation warning ([#48812](https://github.com/angular/angular/pull/48812)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [a6b10f6e59](https://github.com/angular/angular/commit/a6b10f6e597e666a55ef1cd2aecdf3a309cebad8) | fix | 'createUrlTreeFromSnapshot' with empty paths and named outlets ([#48734](https://github.com/angular/angular/pull/48734)) |
## Special Thanks# 15.1.1 (2023-01-18)| Commit | Type | Description |
| -- | -- | -- |
| [68ce4f6ab4](https://github.com/angular/angular/commit/68ce4f6ab495f78858281b902e6433fe90ed6dbf) | fix | Update `Location` to get a normalized URL valid in case a represented URL starts with the substring equals `APP_BASE_HREF` ([#48489](https://github.com/angular/angular/pull/48489)) |
| [032b2bd689](https://github.com/angular/angular/commit/032b2bd689e24ece61e23bfe9a39a11676958b8d) | perf | avoid excessive DOM mutation in NgClass ([#48433](https://github.com/angular/angular/pull/48433)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [dd54f6bd96](https://github.com/angular/angular/commit/dd54f6bd963f859d18af90d5b3834c443ec073f9) | fix | makeEnvironmentProviders should accept EnvironmentProviders ([#48720](https://github.com/angular/angular/pull/48720)) |
## Special Thanks
Alan Agius, Alex Rickabaugh, Andrew Scott, Aristeidis Bampakos, Bob Watson, Jens, Konstantin Kharitonov, Kristiyan Kostadinov, Matthieu Riegler, Paul Gschwendtner, Pawel Kozlowski, Vladyslav Slipchenko, ced, dario-piotrowicz, mgechev and ノウラ<!-- CHANGELOG SPLIT MARKER --><a name="15.1.0"></a>
# 15.1.0 (2023-01-10)### router  instead.
- router writable properties
  
  The following strategies are meant to be configured by registering the
  application strategy in DI via the `providers` in the root `NgModule` or
  `bootstrapApplication`:
  * `routeReuseStrategy`
  * `titleStrategy`
  * `urlHandlingStrategy`
    * `canceledNavigationResoluti  The following options are available in `RouterModule.forRoot` but not
  available in `provideRouter`:
  * `malformedUriErrorHandler` - This was found to not be used anywhere
    internally.
  * `errorHandler` - Developers can instead subscribe to `Router.events`
    and filter for `NavigationError`.
### common
| Commit | Type | Description |
| -- | -- | -- |
| [fe50813664](https://github.com/angular/angular/commit/fe50813664809a1177132a77bd2a316ad0858b9e) | feat | Add BrowserPlatformLocation to the public API ([#48488](https://github.com/angular/angular/pull/48488)) |
| [2f4f0638c7](https://github.com/angular/angular/commit/2f4f0638c74dccfc2d0522f67ab226d3227c0566) | fix | Add data attribtue to NgOptimizedImage ([#48497](https://github.com/angular/angular/pull/48497)) |
### compiler
| Commit | Type | Description |
| -- | -- | -- || [caf7228f8a](https://github.c### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [caedef0f5b](https://github.com/angular/angular/commit/caedef0f5b37ac6530885223b26879c39c36c1bd) | fix | update `@babel/core` dependency and lock version ([#48634](https://github.com/angular/angular/pull/48634)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [6acae1477a](https://github.com/angular/angular/commit/6acae1477a212bbd85d0670913c2925fa3bc0c24) | feat | Add `TestBed.runInInjectionContext` to help test functions which use `inject` ([#47955](https://github.com/angular/angular/pull/47955)) |
| [38421578a2](https://github.com/angular/angular/commit/38421578a2573bcbc86c927ed4015e20fc39f04a) | feat | Make the `isStandalone()` function available in public API ([#48114](https://github.com/angular/angular/pull/48114)) |
| [dd42974b07](https://github.com/angular/angular/commit/dd42974b070b068135c1bc34072486ae440e45e0) | feat | support TypeScript 4.9 ([#48005](https://github.com/angular/angular/pull/48005)) |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [8aa8b4b77c](https://github.com/angular/angular/commit/8aa8b4b77cefcdd400ec9767b946b295ef42a066) | fix | Form provider FormsModule.withConfig return a FormsModule ([#48526](https://github.com/angular/angular/pull/48526)) |
### language-service
| Commit | Type | Description || [5f0b53c735](https://github.c| [ce8160ecb2](https://github.com/angular/angular/commit/ce8160ecb28d6765d438eb65035835984eb956ec) | fix | Prevent crashes on unemitable references ([#47938](https://github.com/angular/angular/pull/47938)) |
| [e615b598ba](https://github.com/angular/angular/commit/e615b598bab9c67bc34a44e39ef1d7066f9bf052) | fix | ship `/api` entry-point ([#48670](https://github.com/angular/angular/pull/48670)) |
| [6ce7d76a0e](https://github.com/angular/angular/commit/6ce7d76a0ea9cfc1591bee408719fa6da069344f) | fix | update packages/language-service/build.sh script to work with vscode-ng-language-service's new Bazel build ([#48663](https://github.com/angular/angular/pull/48663)) |
### localize
| Commit | Type | Description |
| -- | -- | -- |
| [a1a8e91eca](https://github.com/angular/angular/commit/a1a8e91ecaded6a2e4d700109a26d3117ad77c9c) | fix | add triple slash type reference on `@angular/localize` on `ng  add ([#48502](https://github.com/angular/angular/pull/48502)) |
### migrations| -- | -- | -- |### router
| Commit | Type | Description |
| -- | -- | -- |
| [228e992db7](https://github.com/angular/angular/commit/228e992db75bd7a2213b4596e6e2a8696578aa19) | docs | Deprecate canLoad guards in favor of canMatch ([#48180](https://github.com/angular/angular/pull/48180)) |
| [0a8b8a66cd](https://github.com/angular/angular/commit/0a8b8a66cdfb86586811c79bec938b3ab7215e8f) | docs | Deprecate public members of Router that are meant to be configured elsewhere ([#48006](https://github.com/angular/angular/pull/48006)) |
| [332461bd0c](https://github.com/angular/angular/commit/332461bd0c5f5734a9d7f051f0f4c6c173dd87c9) | feat | Add ability to override `onSameUrlNavigation` default per-navigation ([#48050](https://github.com/angular/angular/pull/48050)) |
| [f58ad86e51](https://github.com/angular/angular/commit/f58ad86e51817f83ff18db790a347528262b850b) | feat | Add feature provider for enabling hash navigation ([#48301](https://github.com/angular/angular/pull/48301)) |
| [73f03ad2d2](https://github.com/angular/angular/commit/73f03ad2d29811dda2ee03c5f18c79ebc9519c0b) | feat | Add new NavigationSkipped event for ignored navigations ([#48024](https://github.com/angular/angular/pull/48024)) |
| [3fe75710d9](https://github.com/angular/angular/commit/3fe75710d97a0f3224b2b09c45d9b8a9ad6efe91) | fix | page refresh should not destroy history state ([#48540](https://github.com/angular/angular/pull/48540)) |
## Special Thanks
Alan Agius, Alex Castle, Alex Rickabaugh, Andrew Kushnir, Andrew Scott, Bob Watson, Charles Lyding, Derek Cormier, Doug Parker, Dylan Hunn, George Kalpakas, Greg Magolan, Jessica Janiuk, JiaLiPassion, Joey Perrott, Kristiyan Kostadinov, Matthieu Riegler, Paul Gschwendtner, Pawel Kozlowski, Renan Ferro, Tim Gates, Vadim, Virginia Dooley, ced, mgechev, piyush132000, robertIsaac and sr5434<!-- CHANGELOG SPLIT MARKER --><a name="15.0.4"></a>
# 15.0.4 (2022-12-14)
### animations| -- | -- | -- |### common
| Commit | Type | Description |
| -- | -- | -- |
| [f30d18a942](https://github.com/angular/angular/commit/f30d18a9424afacbd47d70f91e233e286bb94b0d) | fix | Fix TestBed.overrideProvider type to include multi ([#48424](https://github.com/angular/angular/pull/48424)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [b55d2dab5d](https://github.com/angular/angular/commit/b55d2dab5d76ffa809ac1feb78392a75c3081dec) | fix | evaluate const tuple types statically ([#48091](https://github.com/angular/angular/pull/48091)) |
## Special Thanks
Alan Agius, Andrew Kushnir, Andrew Scott, Aristeidis Bampakos, Bob Watson, BrowserPerson, Jens, Jessica Janiuk, Joey Perrott, JoostK, Konstantin Kharitonov, Lukas Matta, Piotr Kowalski, Virginia Dooley, Yannick Baron, dario-piotrowicz, lsst25, piyush132000 and why520crazy<!-- CHANGELOG SPLIT MARKER --><a name="15.0.3"></a>
# 15.0.3 (2022-12-07)| Commit | Type | Description || [50b1c2bf52](https://github.com/angular/angular/commit/50b1c2bf520e88828eadefcb2d0acaf151f8118e) | fix | Don't generate srcsets with very large sources ([#47997](https://github.com/angular/angular/pull/47997)) |
| [bf44dc234a](https://github.com/angular/angular/commit/bf44dc234a32069cb297ef7d3a87c2004cad8b00) | fix | Update `Location` to support base href containing `origin` ([#48327](https://github.com/angular/angular/pull/48327)) |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [9a5d84249a](https://github.com/angular/angular/commit/9a5d84249a0fd6b5c2a77c7ab6cbf72d90c45ee3) | fix | make sure selectors inside container queries are correctly scoped ([#48353](https://github.com/angular/angular/pull/48353)) |
### compiler-cli
| Commit | Type | Description || [167bc0d163](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [e4dcaa513e](https://github.com/angular/angular/commit/e4dcaa513e7d5ccd3a63edf6132792873f01f7c1) | fix | unable to inject ChangeDetectorRef inside host directives ([#48355](https://github.com/angular/angular/pull/48355)) |
## Special Thanks# 15.0.2 (2022-11-30)| Commit | Type | Description |
| -- | -- | -- |## Special Thanks# 15.0.1 (2022-11-22)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [930af9dd26](https://github.com/angular/angular/commit/930af9dd2607754e778922a4bb31055123229e24) | fix | Fix MockPlatformLocation events and missing onPopState implementation ([#48113](https://github.com/angular/angular/pull/48113)) |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [b342e55509](https://github.com/angular/angular/commit/b342e5550928c14ddfb33861189f67b39e163d05) | fix | don't mutate validators array ([#47830](https://github.com/angular/angular/p### language-service| -- | -- | -- |
| [cc8b76ef7c](https://github.com/angular/angular/commit/cc8b76ef7cb908d2c95229f39bf82a13ca59570b) | fix | correctly handle host directive inputs/outputs ([#48147](https://github.com/angular/angular/pull/48147)) |
| [a8c33bf931](https://github.com/angular/angular/commit/a8c33bf93132425a617381e4aa9a6f0e8e0ddf5b) | fix | update packages/language-service/build.sh script to work with vscode-ng-language-service's new Bazel build ([#48120](https://github.com/angular/angular/pull/48120)) |
### router| -- | -- | -- || [9baefd085f](https://github.com/angular/angular/commit/9baefd085fb079c312c4c03d79775a0fcff933b9) | fix | Ensure renavigating in component init works with enabledBlocking ([#48063](https://github.com/angular/angular/pull/48063)) |
| [fa5528fb5f](https://github.com/angular/angular/commit/fa5528fb5f0fe6e4e6ea85d39e43262018520c43) | fix | restore 'history.state' on popstate even if navigationId missing ([#48033](https://github.com/angular/angular/pull/48033)) |
## Special Thanks
Alan Agius, Andrew Scott, Bjarki, Bob Watson, Brooke, Derek Cormier, Dylan Hunn, George Kalpakas, Greg Magolan, Ikko Ashimine, Ivan Rodriguez, Jessica Janiuk, Joe Roxbury, Joey Perrott, Kristiyan Kostadinov, Matthieu Riegler, Mikhail Savchuk, Nebojsa Cvetkovic, Pawel Kozlowski, Volodymyr and Wooshaah<!-- CHANGELOG SPLIT MARKER --><a name="12.2.17"></a>
# 12.2.17 (2022-11-22)### core### core
| Commit | Type | Description |
| -- | -- | -- |
| [b871db57da](https://github.com/angular/angulAndrew Kushnir, Andrew Scott, G## Breaking Changes
### core
- Existing iframe usages may have security-sensitive attributes applied as an attribute or property binding in a template or via host bindings in a directive. Such usages would require an update to ensure compliance with the new stricter rules around iframe bindings.
### core
| Commit | Type | Description |
| -- | -- | -- |
| [b1d7b79ff4](https://github.com/angular/angular/commit/b1d7b79ff4619d6e7967455d7cda72754f5dab9a) | fix | hardening attribute and property binding rules for <iframe> elements ([#48029](https://github.com/angular/angular/pull/48029)) |
## Special Thanks### core| -- | -- | -- |
| [54814c8e9b](https://github.com/angular/angular/commit/54814c8e9ba6b82a7f4748ef2b2f47507efd758b) | fix | hardening attribute and property binding rules for <iframe> elements ([#48028](https://github.com/angular/angular/pull/48028)) |
## Special Thanks
Andrew Kushnir<!-- CHANGELOG SPLIT MARKER --><a name="15.0.0"></a>
# 15.0.0 (2022-11-16)[Blog post "Angular v15 is now available"](https://goo.gle/angular-v15).## Breaking Changes
### compiler
- Keyframes names are now prefixed with the component's "scope name".
  For example, the following keyframes rule in a component definition,
  whose "scope name" is host-my-cmp:
      
     @keyframes host-my-cmp_foo { ... }  Any TypeScript/JavaScript cod  
  The recommended solutions in this case are to either:
  - change the component's view encapsulation to the `None` or `ShadowDom`
  - define keyframes rules in global stylesheets (e.g styles.css)
  - define keyframes rules programmatically in code.
### compiler-cli
- Invalid constructors for DI may now report compilation errors
  
  When a class inherits its constructor from a base class, the compiler may now
  report an error when that constructor cannot be used for DI purposes. This may  as an error during compilatio  Any new errors that may be reported because of this change can be resolved either
  by decorating the base class from which the constructor is inherited, or by adding
  an explicit constructor to the class for which the error is reported.
- Angular compiler option `enableIvy` has been removed as Ivy is the only rendering engine.
### core
- Angular no longer supports Node.js versions `14.[15-19].x` and `16.[10-12].x`. Current supported versions of Node.js are `14.20.x`, `16.13.x` and `18.10.x`.
- TypeScript versions older than 4.8 are no longer supported.
- Existing iframe usages may have security-sensitive attributes applied as an attribute or property binding in a template or via host bindings in a directive. Such usages would require an update to ensure compliance with the new stricter rules around iframe bindings.
- Existing iframe usages may have `src` or `srcdoc` preceding other attributes. Such usages may need to be updated to ensure compliance with the new stricter rules around iframe bindings.
### forms
- setDisabledState will always be called when a `ControlValueAccessor` is attached. You can opt-out with `FormsModule.withConfig` or `ReactiveFormsModule.withConfig`.
### localize
- - `canParse` method has been removed from all translation parsers in `@angular/localize/tools`. `analyze` should be used instead.
  -  the `hint` parameter in the`parse` methods is now mandatory.- Previously, the `RouterOutlet  component is not instantiated until the change detection runs. This
  could affect tests which do not trigger change detection after a router
  navigation. In rarer cases, this can affect production code that relies
  on the exact timing of component availability.
- The title property is now required on ActivatedRouteSnapshot
- `relativeLinkResolution` is no longer configurable in
  the Router. This option was used as a means to opt out of a bug fix.
## Deprecations
### common
- The `DATE_PIPE_DEFAULT_TIMEZONE` token is now deprecated in favor
  of the `DATE_PIPE_DEFAULT_OPTIONS` token, which accepts an object
  as a value and the timezone can be defined as a field (called `timezone`)
  on that object.
### core
- - The ability to pass an `NgModule` to the `providedIn` option for
  `@Injectable` and `InjectionToken` is now deprecated.  `providedIn: NgModule` was in  incorrectly, in circumstances where `providedIn: 'root'` should be
  preferred. If providers should truly be scoped to a specific NgModule, use
  `NgModule.providers` instead.
  
  - The ability to set `providedIn: 'any'` for an `@Injectable` or
  `InjectionToken` is now deprecated.
  
  `providedIn: 'any'` is an optio- The bit field signature of `I### router
- The `RouterLinkWithHref` directive is deprecated, use the `RouterLink` directive instead. The `RouterLink` contains the code from the `RouterLinkWithHref` to handle elements with `href` attributes.
### common
| Commit | Type | Description |
| -- | -- | -- |
| [c0c7efaf7c](https://github.com/angular/angular/commit/c0c7efaf7c8a53c1a6f137aac960757cc804f263) | feat | add `provideLocationMocks()` function to provide Location mocks ([#47674](https://github.com/angular/angular/pull/47674)) |
| [75e6297f09](https://github.com/angular/angular/commit/75e6297f0901cc98aea1626a138a820e68d026ec) | feat | add <link> preload tag on server for priority img ([#47343](https://github.com/angular/angular/pull/47343)) |
| [4fde292bb5](https://github.com/angular/angular/commit/4fde292bb58f5d5bc3cf6e634f7cff9eb0d13d84) | feat | Add automatic srcset generation to ngOptimizedImage ([#47547](https://github.com/angular/angular/pull/47547)) |
| [9483343ebf](https://github.com/angular/angular/commit/9483343ebf958297ebcb81ef313d356296a41f41) | feat | Add fill mode to NgOptimizedImage ([#47738](https://github.com/angular/angular/pull/47738)) |
| [bdb5371033](https://github.com/angular/angular/commit/bdb5371033d8e9a110619861323e8383a32d5900) | feat | add injection token for default DatePipe configuration ([#47157](https://github.com/angular/angular/pull/47157)) |
| [449d29b701](https://github.com/angular/angular/commit/449d29b701ee5a50e7279d44f4c3888a5d6f7e96) | fix | Add fetchpriority to ngOptimizedImage preloads ([#48010](https://github.com/angular/angular/pull/48010)) || [3a18398d83](https://github.c| [8abf1c844c](https://github.com/angular/angular/commit/8abf1c844c656b41a604098889db76e8c63da720) | fix | fix formatting on oversized image error ([#47188](https://github.com/angular/angular/pull/47188)) |
| [ca7bf65933](https://github.com/angular/angular/commit/ca7bf6593380fa760891d29fba5c9f61c6e9bf8b) | fix | rename `rawSrc` -> `ngSrc` in NgOptimizedImage directive ([#47362](https://github.com/angular/angular/pull/47362)) |
| [b3879dbf14](https://github.com/angular/angular/commit/b3879dbf1470ab4f31e676f1f8909cd50d963844) | fix | support density descriptors with 2+ decimals ([#47197](| [23f210c0ab](https://github.c### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [051f75648d](https://github.com/angular/angular/commit/051f75648d6065949796ac1c7ea67e71e31b011e) | fix | scope css keyframes in emulated view encapsulation ([#42608](https://github.com/angular/angular/pull/42608)) |
| [39b72e208b](https://github.com/angular/angular/commit/39b72e208b46d80f1d9a802cebf043c2ccf3c5f2) | fix | update element schema ([#47552](https://github.com/angular/angular/pull/47552)) |
| [48b354a83e](https://github.com/angular/angular/commit/48b354a83e6d94735a03eebb3a52c5698e7a0f44) | fix | update element schema ([#47552](https://github.com/angular/angular/pull/47552)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [bc54687c7b](https://github.com/angular/angular/commit/bc54687c7b91efe451aa744d2d3a15ca3524231e) | fix | exclude abstract classes from `strictInjectionParameters` requirement ([#44615](https://github.com/angular/angular/pull/44615)) || [2e1dddec45](https://github.c| [8fcadaad48](https://github.com/angular/angular/commit/8fcadaad48b2b1328f47b7603b230445a26f95a8) | perf | cache source file for reporting type-checking diagnostics ([#47471](https://github.com/angular/angular/pull/47471)) |
| [16f96eeabf](https://github.com/angular/angular/commit/16f96eeabf77964092b4b6a830e29f2761ffaeec) | refactor | remove `enableIvy` options ([#47346](https://github.com/angular/angular/pull/47346)) || Commit | Type | Description || [e3cef4a784](https://github.com/angular/angular/commit/e3cef4a7843d22fd004f1e27afcc42d0fbbef74a) | docs | deprecate `providedIn: NgModule` and `providedIn: 'any'` ([#47616](https://github.com/angular/angular/pull/47616)) |
| [1b9fd46d14](https://github.com/angular/angular/commit/1b9fd46d14ed46f78b6d761b3917ded1f0d51e0d) | feat | add support for Node.js version 18 ([#47730](https://github.com/angular/angular/pull/47730)) |
| [ed11a13c3c](https://github.com/angular/angular/commit/ed11a13c3c5cccb0094c1a4ff9c60ea741a42067) | feat | drop support for TypeScript 4.6 and 4.7 ([#47690](https://github.com/angular/angular/pull/47690)) |
| [db28badfe6](https://github.com/angular/angular/commit/db28badfe67f404e81dacd7c3131af105feb3412) | feat | enable the new directive composition API ([#47642](https://github.com/angular/angular/pull/47642)) |
| [7de1469be6](https://github.com/angular/angular/commit/7de1469be62b08037681ee9e75614fb800700ef8) | feat | introduce EnvironmentProviders wrapper type ([#47669](https://github.com/angular/angular/pull/47669)) |
| [841c8e5138](https://github.com/angular/angular/commit/841c8e51386645d7fd26642f41952ed8f0a2dbe5) | feat | support object-based DI flags in Injector.get() ([#46761](https://github.com/angular/angular/pull/46761)) |
| [120555a626](https://github.com/angular/angular/commit/120555a626d66523e46ce01681b11a0f38e3a40a) | feat | support object-based DI flags in TestBed.inject() ([#46761](https://github.com/angular/angular/pull/46761)) |
| [96c0e42e61](https://github.com/angular/angular/commit/96c0e42e61b8a4fced1354da0162c06e7b029cf3) | fix | allow| [d4b3c0b47c](https://github.c### forms
| Commit | Type | Description |
| -- | -- | -- |
| [a8569e3802](https://github.com/angular/angular/commit/a8569e38029724a7d77935bccce| Commit | Type | Description || [3ba99e286a](https://github.com/angular/angular/commit/3ba99e286a166d122fb334171b6a9a1e6461a724) | feat | allow for child `HttpClient`s to request via parents ([#47502](https://github.com/angular/angular/pull/47502)) |
| [84d0d33c35](https://github.com/angular/angular/commit/84d0d33c3537f0da927e0ce449ede78ef9bebc6b) | feat | introduce `provideHttpC| [e47b129070](https://github.c| [bebef5fb43](https://github.com/angular/angular/commit/bebef5fb43dcf54a109499d0d9dd701786c33f60) | feat | Quick fix to import a component when its selector is used ([#47088](https://github.com/angular/angular/pull/47088)) |
| [e7ee53c541](https://github.com/angular/angular/commit/e7ee53c541da0a1f85c217354ec9901010ae0de9) | feat | support to fix invalid banana in box ([#47393](https://github.com/angular/angular/pull/47393)) |
### localize
| Commit | Type | Description |
| -- | -- | -- |
| [400a6b5e37](https://github.com/angular/angular/commit/400a6b5e3707f3939d84c659a115b75ef15d2c09) | fix | add polyfill in polyfills array instead of polyfills.ts ([#47569](https://github.com/angular/angular/pull/47569)) |
| [b6fd814542](https://github.com/angular/angular/commit/b6fd81454207bd256a48d5726f3bd7e6ce6a489b) | fix | update ng add schematic to support Angular CLI version 15 ([#47763](https://github.com/angular/angular/pull/47763)) |
| [d36fd3d9e4](https://github.com/angular/angular/commit/d36fd3d9e41984818af5e1aad5e3004574d837bb) | refactor | remove deprecated `canParse` method from TranslationParsers ([#47275](https://github.com/angular/angular/pull/47275)) |
### platform-server| -- | -- | -- |### router
| Commit | Type | Description |
| -- | -- | -- |
| [7bee28d037](https://github.com/angular/angular/commit/7bee28d0| [da58801f95](https://github.c| [f73ef21442](https://github.com/angular/angular/commit/f73ef2144279b6b26902510f90ca1fccb8e166b2) | feat | merge `RouterLinkWithHref` into `RouterLink` ([#47630](https://github.com/angular/angular/pull/47630)) |
| [16c8f55663](https://github.com/angular/angular/commit/16c8f55663c30270fcd647b1a8a20ddbc8923349) | feat | migrate `RouterLinkWithHref` references to `RouterLink` ([#47599](https://github.com/angular/angular/pull/47599)) |
| [07017a7bd3](https://github.com/angular/angular/commit/07017a7bd30c6bb7bd1b94a9fd1b112ee68c9ced) | feat | prevent `provideRouter()` from usage in @Component ([#47669](https://github.com/angular/angular/pull/47669)) |
| [79e9e8ab77](https://github.com/angular/angular/commit/79e9e8ab779d230f6a1df25c4ccff94b13129305) | fix | Delay router scroll event until navigated components have rendered ([#47563](https://github.com/angular/angular/pull/47563)) || [7b89d95c0e](https://github.cAlan Agius, AleksanderBodurri, Alex Castle, Alex Rickabaugh, Andrew Kushnir, Andrew Scott, Charles Lyding, Dylan Hunn, Ferdinand Malcher, George Kalpakas, Jeremy Elbourn, Jessica Janiuk, JiaLiPassion, Joey Perrott, JoostK, Kara Erickson, Kristiyan Kostadinov, Martin Probst, Matthias Weiß, Matthieu Riegler, Paul Gschwendtner, Pawel Kozlowski, Sabareesh Kappagantu, WD Snoeijer, angular-robot[bot], arturovt, ced, dario-piotrowicz, ivanwonder and jaybell<!-- CHANGELOG SPLIT MARKER --><a name="14.2.11"></a>
# 14.2.11 (2022-11-16)| Commit | Type | Description || [aef353c143](https://github.com/angular/angular/commit/aef353c143ea4e31d76f00ae91efe49eecc3a321) | fix | Ensure renavigating in component init works with enabledBlocking ([#48066](https://github.com/angular/angular/pull/48066)) |
## Special Thanks
Alan Agius, Andrew Scott and Mujo Osmanovic<!-- CHANGELOG SPLIT MARKER --><a name="14.2.10"></a>
# 14.2.10 (2022-11-09)| Commit | Type | Description || [db867fee77](https://github.com/angular/angular/commit/db867fee77bc62f367fc5d484fc3951d72d998c8) | fix | fix redirectTo on named outlets - resolves [#33783](https://github.com/angular/angular/pull/33783) ([#47927](https://github.com/angular/angular/pull/47927)) |
## Special Thanks
Alan Agius, Albert Szekely, Andrew Scott, Doug Parker, Kristiyan Kostadinov, Markus Eckstein, Peter Scriven and abergquist<!-- CHANGELOG SPLIT MARKER --><a name="14.2.9"></a>
# 14.2.9 (2022-11-03)
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [92d28bdd99](https://github.com/angular/angular/commit/92d28bdd99d3e18f42f6ed8494344b72b15d0104) | perf | resolve memory leak when using a# 14.2.7 (2022-10-19)Bob Watson, Charles Barnes, Joey Perrott, Virginia Dooley, WD Snoeijer, abergquist and urugator<!-- CHANGELOG SPLIT MARKER --><a name="14.2.6"></a>
# 14.2.6 (2022-10-12)
### compiler-cli
| Commit | Typ| [3fd176a905](https://github.c## Special Thanks
Alan Agius, Andrew KuAlexander Wiebe, Ciprian Sauliuc, Dmytro Mezhenskyi, George Kalpakas, Jo### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [a4b66fe1e5](https://github.com/angular/angular/commit/a4b66fe1e5acaf148069933720499652f21a7bce) | perf | cache source file for reporting type-checking diagnostics ([#47508](https://github.com/angular/angular/pull/47508)) |
### core
| Commit | Type | Description || [2c46b5ab24](https://github.cAlan Agius, Ashley Hunter, Doug Parker, Jessica Janiuk, JoostK, Kristiyan Kostadinov, Rokas Brazdžionis and Simona Cotin<!-- CHANGELOG SPLIT MARKER --><a name="14.2.3"></a>
# 14.2.3 (2022-09-21)| Commit | Type | Description || [bba2dae812](https://github.com/angular/angular/commit/bba2dae81263d07c55cd059eb8ef51baa7774055) | fix | make sure that the useAnimation function delay is applied ([#47468](https://github.com/angular/angular/pull/47468)) |
## Special Thanks
AleksanderBodurri, Andrew Kushnir, Andrew Scott, Bob Watson, George Kalpakas, Joey Perrott, Mauro Mattos, dario-piotrowicz, fabioemoutinho and famzila<!-- CHANGELOG SPLIT MARKER --><a name="14.2.2"></a>
# 14.2.2 (2022-09-14)
### animations
| Commit | Type | Description |
| -- | -- | -- |
| [937e6c5b3d](https://github.com/angular/angular/commit/937e6c5b3d4c4bfc6ba202ee6692bc2fd8a35b89) | fix | make sure that the animation function delay is applied ([#47285](https://github.com/angular/angular/pull/47285)) |
### common
| Commit | Type | Description || [a3e1303f04](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [80c66a1e57](https://github.com/angular/angular/commit/80c66a1e57af33342ed851a0de886fc17b53f7a3) | fix | don't prevent default behavior for forms with method="dialog" ([#47308](https://github.com/angular/angular/pull/47308)) |
## Special Thanks
Abhishek Rawat, Andrew Kushnir, Benjamin Chanudet, Bob Watson, George Kalpakas, Ikko Ashimine, Kristiyan Kostadinov, Marc Wrobel, Mariia Subkov, Pawel Kozlowski, Sebastian, abergquist, dario-piotrowicz, onrails and vyom1611<!-- CHANGELOG SPLIT MARKER --><a name="14.2.1"></a>
# 14.2.1 (2022-09-07)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [c0d7ac9ec2](https://github.com/angular/angular/commit/c0d7ac9ec2df9af36d80382bc70c4580720f35a3) | fix | improve formatting of image warnings ([#47299](https://github.com/angular/angular/pull/47299)) |
| [1875ce520a](https://github.com/angular/angular/commit/1875ce520afe7b5c55680b8c6a938a2331dda599) | fix | use DOCUMENT token to query for preconnect links ([#47353](https://github.com/angular/angular/pull/47353)) |
### compiler
| Commit | Type | Description |
| -- | -- | -- |### service-worker| -- | -- | -- |
| [6091786696](https://github.com/angular/angular/commit/60917866961b7ab80ec9637c72300f2707aadd09) | fix | include headers in requests for assets ([#47260](https://github.com/angular/angular/pull/47260)) |
| [28d33505fd](https://github.com/angular/angular/commit/28d33505fd4be00eaf4bf417cd27e20733ddfb80) | fix | only consider GET requests as navigation requests ([#47263](https://github.com/angular/angular/pull/47263)) |
## Special Thanks
Aristeidis Bampakos, Asaf M, Bingo's Code, Bob Watson, Daniel Ostrovsky, George Kalpakas, Giovanni Alberto Rivas, Jeremy Elbourn, Jobayer Hossain, Joe Martin (Crowdstaffing), Joey Perrott, JoostK, Kara Erickson, Kristiyan Kostadinov, Maina Wycliffe, Sabareesh Kappagantu, Simona Cotin, Sonu Sindhu, Yann Provoost, abergquist, jaybell and vyom1611<!-- CHANGELOG SPLIT MARKER --><a name="14.2.0"></a>
# 14.2.0 (2022-08-25)
### animations
| Commit | Type | Description |
| -- | -- | -- |
| [b96e571897](https://github.com/angular/angular/commit/b96e571897e815ff509188f15b60c66b1bafa358) | fix | fix stagger timing not handling params ([#47208](https://github.com/angular/angular/pull/47208)) |
### common
| Commit | Type | Description |
| -- | -- | -- |
| [b380fdd59e](https://github.com/angular/angular/commit/b380fdd59e368e89908ea915f150cdc9f5a87a7f) | feat | add a density cap for image srcsets ([#47082](https://github.com/angular/angular/pull/47082)) |
| [7ce497e5bc](https://github.com/angular/angular/commit/7ce497e5bc6502bed8099d2592888f3164cdcf1f) | feat | add built-in Imgix loader ([#47082](https://github.com/angular/angular/pull/47082)) |
| [bff870db61](https://github.com/angular/angular/commit/bff870db6146850248597889550f676d81a85c90) | f| [0566205a02](https://github.c| [e854a8cdde](https://github.com/angular/angular/commit/e854a8cdde0f2fd00e67c0a841c8f6f0abcea18b) | feat | add loading attr to NgOptimizedImage ([#47082](https://github.com/angular/angular/pull/47082)) |
| [8d3701cb4c](https://github.com/angular/angular/commit/8d3701cb4c167fb8b2153359a71e4f222d3d5657) | feat | add warnings re: image distortion ([#47082](https://github.com/angular/angular/pull/47082)) |
| [d5f7da2120](https://github.com/angular/angular/commit/d5f7da21207f7808dffb3932fa61d22614e6bd57) | feat | define public API surface for NgOptimizedImage directive ([#47082](https://github.com/angular/angular/pull/47082)) |
| [d3c3426aa4](https://github.com/angular/angular/commit/d3c3426aa41bd4092da3a9dd6951cab63f217db4) | feat | detect LCP images in `NgOptimizedImage` and assert if `priority` is set ([#47082](https://github.com/angular/angular/pull/47082)) |
| [451b85ca17](https://github.com/angular/angular/commit/451b85ca176e0aeae6358016e2695ea133d9ec56) | feat | explain why width/height is required ([#47082](https://github.com/angular/angular/pull/47082)) |
| [586274fe65](https://github.com/angular/angular/commit/586274fe65c5184b633e0e5ac12ca91979f138b2) | feat | provide an ability to exclude origins from preconnect checks in NgOptimizedImage ([#47082](https://github.com/angular/angular/pull/47082)) |
| [57f3386e5b](https://github.com/angular/angular/commit/57f3386e5b5a3d6edc9e6d8c60b442b16e5c4a20) | feat | support custom srcset attributes in NgOptimizedImage ([#47082](https://github.com/angular/angular/pull/47082)) |
| [7baf9a46cd](https://github.com| [e2ab99b95e](https://github.c| [f9511bf6e8](https://github.com/angular/angular/commit/f9511bf6e8322f292421bcc0fa7851535aeaac85) | fix | avoid interacting with a destroyed injector ([#47243](https://github.com/angular/angular/pull/47243)) |
| [dc29e21b14](https://github.com/angular/angular/commit/dc29e21b141574247b5f9f859c019b4ad4be9742) | fix | consider density descriptors with multiple digits as valid ([#47230](https://github.com/angular/angular/pull/47230)) |
| [801daf82d1](https://github.com/angular/angular/commit/801daf82d119a39f21d26812b28c8551c58d841b) | fix | detect `data:` and `blob:` inputs in `NgOptimizedImage` directive ([#47082](https://github.com/angular/angular/pull/47082)) |
| [fff8056e7f](https://github.com/angular/angular/commit/fff8056e7f5fffd6d54315ca3897505ad5da725f) | fix | fix formatting on oversized image error ([#47188](https://github.com/angular/angular/pull/47188)) ([#47232](https://github.com/angular/angular/pull/47232)) |
| [1ca2ce19ab](https://github.com/angular/angular/commit/1ca2ce19ab871c76bee3ad67ee9c610284ca9281) | fix | remove default for image width ([#47082](https://github.com/angular/angular/pull/47082)) |
| [c5db867ddc](https://github.com/angular/angular/commit/c5db867ddcac10720a23487461994bbf682898e9) | fix | remove duplicate deepForEach ([#47189](https://github.com/angular/angular/pull/47189)) |
| [1cf43deb18](https://github.com/angular/angular/commit/1cf43deb1899440c0bd468f8bf31390d4f23d678) | fix | sanitize `rawSrc` and `rawSrcset` values in NgOptimizedImage directive ([#47082](https://github.com/angular/angular/pull/47082)) |
| [d71dfe931f](https://github.com/angular/angular/commit/d71dfe931f71bff71e4e7af96aebd59f31cd4079) | fix | set bound width and height onto host element ([#47082](https://github.com/angular/angular/pull/47082)) |
| [32caa8b669](https://github.com/angular/angular/commit/32caa8b66908097522658360e5907c5004c13eeb) | fix | support density descriptors with 2+ decimals ([#47197](https://github.com/angular/angular/pull/47197)) ([#47232](https://github.com/angular/angular/pull/47232)) |
| [ae4405f0bf](https://github.com/angular/angular/commit/ae4405f0bf1c94fe86d9e9a62360834e80cef8e7) | fix | throw if srcset is used with rawSrc ([#47082](https://github.com/angular/angular/pull/47082)) |
| [0c8eb8bc82](https://github.com/angular/angular/commit/0c8eb8bc82c26596092d4774fcdac255aecdec90) | perf | monitor LCP only for images without `priority` attribute ([#47082](https://github.com/angular/angular/pull/47082)) || Commit | Type | Description || [ea89677c12](https://github.com/angular/angular/commit/ea89677c125c16654e3e521998b575687c2bd20c) | feat | support more recent version of `tsickle` ([#47018](https://github.com/angular/angular/pull/47018)) |
### core
| Commit | Type | Description || [d1e83e1b30](https://github.c| [4b377d3a6d](https://github.com/angular/angular/commit/4b377d3a6d069da23ec577f8deca761b01d4e2f5) | feat | introduce createApplication API ([#46475](https://github.com/angular/angular/pull/46475)) |
| [31429eaccc](https://github.com/angular/angular/commit/31429eaccc973672efb4ed98a628cf9842e24b02) | feat | support TypeScript 4.8 ([#47038](https://github.com/angular/angular/pull/47038)) |
| [796840209c](https://github.com/angular/angular/commit/796840209cd38aacc5061a31701efe7eda1f6587) | fix | align TestBed interfaces and implementation ([#46635](https://github.com/angular/angular/pull/46635)) |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [426af91a42](https://github.com/angular/angular/commit/426af91a42104d6ce227ab52c8c4db3e218f5e03) | feat | add `FormBuilder.record()` method ([#46485](https://github.com/angular/angular/pull/46485)) |
| [b302797de4](https://github.com/angular/angular/commit/b302797de47409b988ad77e87f766a5f18374ded) | fix | Correctly infer `FormBuilder` types involving `[value, validators]` shorthand in more cases. ([#47034](https://github.com/angular/angular/pull/47034)) |
### language-service
| Commit | Type | Description || [598b72bd05](https://github.c| Commit | Type | Description |
| -- | -- | -- |### platform-server| -- | -- | -- |
| [2b4d7f6733](https://github.com/angular/angular/commit/2b4d7f6733e10e45e3ca8a448307bbc2834fc4a1) | feat | support document reference in render functions ([#47032](https://github.com/angular/angular/pull/47032)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [0abb67af59](https://github.com/angular/angular/commit/0abb67af59a92a2b29082a259aa9f4ea3fbaab7d) | feat | allow guards and resolvers to be plain functions ([#46684](https://github.com/angular/angular/pull/46684)) |
| [75df404467](https://github.com/angular/angular/commit/75df4044675c61d2b646437cfe64fe828a39b3a0) | feat | Create APIs for using Router without RouterModule ([#47010](https://github.com/angular/angular/pull/47010)) |
| [10289f1f6e](https://github.com/angular/angular/commit/10289f1f6e3d5935304a38d4300d4dadfea66150) | feat | expo| [422323cee0](https://github.c| [2a43beec15](https://github.com/angular/angular/commit/2a43beec159990b8c4bafc7f189e2bd85002dc7a) | fix | Fix route recognition behavior with some versions of rxjs ([#47098](https://github.com/angular/angular/pull/47098)) |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |# 14.1.3 (2022-08-17)| Commit | Type | Description |
| -- | -- | -- |## Special Thanks| [5ff715c549](https://github.com/angular/angular/commit/5ff715c5497fcbcbb33eb93770470fff5a816cd5) | fix | check if transplanted views are attached to change detector ([#46974](https://github.com/angular/angular/pull/46974)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [439d77e852](https://github.com/angular/angular/commit/439d77e852c2e08d384c420a2c3a962a804c60f1) | fix | Fix route recognition behavior with some versions of rxjs ([#47098](https://github.com/angular/angular/pull/47098)) ([#47112](https://github.com/angular/angular/pull/47112)) |
## Special Thanks
4javier, Andrew Kushnir, Andrew Scott, AntonioCardenas, Bob Watson, Bruno Barbosa, Eduardo Speroni, Edward, George Kalpakas, Jan Melcher, Kristiyan Kostadinov, Mladen Jakovljević, Paul Gschwendtner, Pawel Kozlowski, Roman Matusevich, Vovch, ashide2729, ileil and onrails<!-- CHANGELOG SPLIT MARKER --><a name="14.1.1"></a>
# 14.1.1 (2022-08-03)
### core| -- | -- | -- |### router
| Commit | Type | Description |
| -- | -- | -- |
| [79825d3f10](https://github.com/angular/angular/commit/79825d3f## Special Thanks# 14.1.0 (2022-07-20)
## Deprecations
### core
- The `createNgModuleRef` is deprecated in favor of newly added `createNgModule` one.  new options object. Correspon| Commit | Type | Description || [55308f2df5](https://github.c| Commit | Type | Description |
| -- | -- | -- || [a7597dd080](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [33ce3883a5](https://github.com/angular/a| [9e836c232f](https://github.c| Commit | Type | Description |
| -- | -- | -- || [131d029da1](https://github.c| [b5153814af](https://github.com/angular/angular/commit/b5153814af3e6b1ec8550ddf39584efd7cca36be) | feat | add `reflectComponentType` function |
| [96c6139c9a](https://github.com/angular/angular/commit/96c6139c9ab35aa6ab2330a5a79a5906d5c2e8be) | feat | add ability to set inputs on ComponentRef ([#46641](https://github.com/angular/angular/pull/46641)) |
| [a6d5fe202c](https://github.com/angular/angular/commit/a6d5fe202cafb419f3beb8d09711132124b6aa9a) | feat | alias `createN| [19e6d9ccd3](https://github.c| [fa52b6e906](https://github.com/angular/angular/commit/fa52b6e906e549e1c6b4a4f4428596d093fb0549) | feat | options object to supersede bit flags for `inject()` ([#46649](https://github.com/angular/angular/pull/46649)) |
| [af20112222](https://github.com/angular/angular/commit/af20112222fcfa961ff9a2dee4050dd59aa4156e) | feat | support the descendants option for ContentChild queries ([#46638](https://github.com/angular/angular/pull/46638)) |
| [945a3ad359](https://github.com/angular/angular/commit/945a3ad359cd2fe3456f635b0fe36effbfe8d5c2) | fix | Fix `runInContext` for `NgModuleRef` injector ([#46877](https://github.com/angular/angular/pull/46877)) |
| [bb7c80477b](https://github.com/angular/angular/commit/bb7c80477b1258f48971b67b2eade6a4b41337f2) | fix | make parent injector argument required in `createEnvironmentInjector` ([#46397](https://github.com/angular/angular/pull/46397)) |
### http
| Commit | Type | Description || -- | -- | -- |## Special Thanks# 14.0.7 (2022-07-20)| Commit | Type | Description |
| -- | -- | -- |
| [5bdbb6285b](https://github.com/angular/angular/commit/5bdbb6285b77f070347a5878bbd8218f6e01b5e8) | fix | make sure falsy values are added to _globalTimelineStyles ([#46863](https://github.com/angular/angular/pull/46863)) |
### compiler| -- | -- | -- |### core
| Commit | Type | Des### forms| -- | -- | -- || [e8c8b695f2](https://github.com/angular/angul| Commit | Type | Description |
| -- | -- | -- |
| [14863acb1a](https://github.com/angular/angular/commit/14863acb1a642e9f6d36ea5d10d64f26d84ad475) | fix | add `--project` option to `ng-add` schematic ([#46664](https://github.com/angular/angular/pull/46664)) |
## Special Thanks
Alan Agius, Andrew Scott, Bob Watson, Dylan Hunn, George Kalpakas, Ivaylo Kirov, Jessica Janiuk, JoostK, Joshua VanAllen, Lukas Matta, Marcin Wosinek, Nicolas Molina Monroy, Paul Gschwendtner, SoulsMark, Uday Sony, dario-piotrowicz, markostanimirovic and zhysky<!-- CHANGELOG SPLIT MARKER --><a name="14.0.5"></a>
# 14.0.5 (2022-07-06)| Commit | Type | Description || [a3bd65e2b8](https://github.com/angular/angular/commit/a3bd65e2b87a2b5676c920778598fa6afd2cda9f) | fix | Ensure `APP_IAlan Agius, Alex Rickabaugh, An### animations
| Commit | Type | Description |
| -- | -- | -- |
| [51be9bbe29](https://github.com/angular/angular/commit/51be9bbe29e12ae0e8d4777cdac5c7466c8b6184) | fix | cleanup DOM elements when the root view is removed ([#45143](https://github.com/angular/angular/pull/45143)) |
| [999aca86c8](https://github.com/angular/angular/commit/999aca86c89030b6a9023cd2835636ee487334f2) | fix | enable shadowElements to leave when their parent does ([#46459](https://github.com/angular/angular/pull/46459)) |
### common
| Commit | Type | Description |
| -- | -- | -- |### core| -- | -- | -- |
| [1e7f22f00a](https://github.com/angular/angular/commit/1e7f22f00ab10a6ae01729e3355871e51bc8bf4d) | fix | trigger `ApplicationRef.destroy` when Platform is destroyed ([#46497](https://github.com/angular/angular/pull/46497)) |
| [8bde2dbc71](https://github.com/angular/angular/commit/8bde2dbc714a0d9f7cda80c7893ab213d1e3f931) | fix | Update ngfor error code to be negative ([#46555](https://github.com/angular/angular/pull/46555)) |
| [57e8fc00eb](https://github.com/angular/angular/commit/57e8fc00eba92618c2cf063589ba1a88d3b30055) | fix | Updates error to use RuntimeError code ([#46526](https://github.com/angular/angular/pull/46526)) |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [74a26d870e](https://github.com/angular/angular/commit/74a26d870e2437f779c8c70f0b811f1d0bf8d4ee) | fix | Convert existing reactive errors to use RuntimeErrorCode. ([#46560](https://github.com/angular/angular/pull/46560)) |
| [747872212d](https://github.com/angular/angular/commit/747872212d12660eee59024202840e7d3ebfc866) | fix | Update a Forms validator error to use RuntimeError ([#46537](https://github.com/angular/angular/pull/46537)) || Commit | Type | Description || [d6fac9e914](https://github.com/angular/angular/commit/d6fac9e914ad13f1ed63ea6a3738c245e547eaae) | fix | Ensure that new `RouterOutlet` instances work after old ones are destroyed ([#46554](https://github.com/angular/angular/pull/46554)) |
## Special Thanks
Alan Agius, Alex Rickabaugh, Andrew Kushnir, Andrew Scott, Bezael, Chad Ramos, Chellappan, Cédric Exbrayat, Dylan Hunn, George Kalpakas, Jeremy Meiss, Jessica Janiuk, Joey Perrott, KMathy, Kristiyan Kostadinov, Paul Gschwendtner, Pawel Kozlowski, Ramesh Thiruchelvam, Vaibhav Kumar, arturovt, dario-piotrowicz and renovate[bot]<!-- CHANGELOG SPLIT MARKER --><a name="14.0.3"></a>
# 14.0.3 (2022-06-22)
### animations
| Commit | Type | Description |
| -- | -- | -- |
| [3dd7bb3f8f](https://github.com/angular/angular/commit/3dd7bb3f8fa009e245bfc91aa06a485d0cb27586) | fix | reset the start and done fns on player reset ([#46364](https://github.com/angular/angular/pull/46364)) || Commit | Type | Description || [c086653655](https://github.com/angular/angular/commit/c0866536558fa5abb91e1ba51fa84ea0321e6864) | fix | deduplicate imports of standalone components in JIT compiler ([#46439](https://github.com/angular/angular/pull/46439)) |
| [5d3b97e1f8](https://github.com/angular/angular/commit/5d3b97e1f8d5d004621df1004e00f128064d73cd) | fix | handle NgModules with standalone pipes in TestBed correctly ([#46407](https://github.com/angular/angular/pull/46407)) |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [6ad7b40a6f](https://github.com/angular/angular/commit/6ad7b40a6fe1b447173a44e7750f2b9abcb6fc0a) | fix | invalid style attribute being generated for null values ([#46433](https://github.com/angular/angular/pull/46433)) |
## Special Thanks
4javier, Aakash, Alan Agius, Andrew Kushnir, Aristeidis Bampakos, Dany Paredes, Derek Cormier, JoostK, Kristiyan Kostadinov, Paul Gschwendtner, Ramesh Thiruchelvam, behrooz bozorg chami, dario-piotrowicz, markostanimirovic, renovate[bot] and web-dave<!-- CHANGELOG SPLIT MARKER --><a name="14.0.2"></a>
# 14.0.2 (2022-06-15)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [ef5cba3df7](https://github.com/angular/angular/commit/ef5cba3df783691433fe918f8f3c05878784c0f8) | fix | allow null in ngComponentOutlet ([#46280](https://github.com/angular/angular/pull/46280)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [8ecfd71fd7](https://github.com/angular/angular/commit/8ecfd71fd7a44628500668fbb59fdc08de8b8140) | fix | don't emit empty providers array ([#46301](https://github.com/angular/angular/pull/46301)) |
| [b92c1a6ada](https://github.com/angular/angular/commit/b92c1a6adada5923b1fd69e24560ae5bfd67dd5a) | fix | use inline type-check blocks for components outside `rootDir` ([#46096](https://github.com/angular/angular/pull/46096)) || Commit | Type | Description || [3fd8948b4a](https://github.com/angular/angular/commit/3fd8948b4a04dc504be3d4dd751a5554673423bb) | fix | Resolve forwardRef declarations for jit ([#46334](https://github.com/angular/angular/pull/46334)) |
## Special Thanks
Alex Rickabaugh, Andrew Scott, Badawi7, Daniel Schmitz, Derek Cormier, JoostK, Kevin Davila, Kristiyan Kostadinov, Paul Draper, Paul Gschwendtner, Tom Eustace, Totati, Younes Jaaidi, alefra, dario-piotrowicz, markostanimirovic, mgechev, piyush132000, sten-bone and vivekkoya<!-- CHANGELOG SPLIT MARKER --><a name="14.0.1"></a>
# 14.0.1 (2022-06-08)
### bazel
| Commit | Type | Description |
| -- | -- | -- |
| [b00d237c0e](https://github.com/angular/angular/commit/b00d237c0ef726bdc262d81bcc3a3cb33181dbd9) | fix | update API extractor version ([#46259](https://github.com/angular/angular/pull/46259)) |
| [9a0a7bac21](https://github.com/angular/angular/commit/9a0a7bac21decae7662a8a2ec9488f60daa97e10) | perf | reduce input files for `ng_package` rollup and type bundle actions ([#46187](https://github.com/angular/angular/pull/46187)) |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [dde0b7f4b3](https://github.com/angular/angular/commit/dde0b7f4b3bc658b67a97644c8655252803be663) | fix | allow FormBuilder.group(...) to accept optional fields. ([#46253](https://github.com/angular/angular/pull/46253)) |
## Special Thanks
Adrien Crivelli, Alan Agius, Alex Rickabaugh, Andrew Kushnir, Andrew Scott, Dylan Hunn, Fabrizio Fallico, George Kalpakas, Jelle Bruisten, JoostK, Kristiyan Kostadinov, Krzysztof Platis, Paul Gschwendtner, Phalgun Vaddepalli, San Leen, dario-piotrowicz, mgechev and wellWINeo<!-- CHANGELOG SPLIT MARKER --><a name="14.0.0"></a>
# 14.0.0 (2022-06-02)[Blog post "Angular v14 is now available"](https://goo.gle/angular-v14).## Breaking Changes
### animations
- The `AnimationDriver.getParentElement` method has become required, so any
  implementors of this interface are now required to provide an implementation
  for this method. This breakage is unlikely to affect application developers,
  as `AnimationDriver` is not expected to be implemented in user code.
### common
- Adds new required class member that any implementors of the LocationStrategy will need to satisfy.
  Location does not depend on PlatformLocation anymore.
### compiler
- Keyframes names are now prefixed with the component's "scope name".
  For example, the following keyframes rule in a component definition,
  whose "scope name" is host-my-cmp:
  
     @keyframes foo { ... }
  
  will become:
  
     @keyframes host-my-cmp_foo { ... }
  
  Any TypeScript/JavaScript code which relied on the names of keyframes rules
  will no longer match.  The recommended solutions in   - define keyframes rules in global stylesheets (e.g styles.css)
  - define keyframes rules programmatically in code.### core
- Support for Node.js v12 has been removed as it will become EOL on 2022-04-30. Please use Node.js v14.15 or later.
- TypeScript versions older than 4.6 are no longer supported.
- Forms [email] input coercion
  
  Forms [email] input value will be considered as true if it is defined with any value rather
  than false and 'false'.
- Since Ivy, TestBed doesn't use AOT summaries. The `aotSummaries` fields in TestBed APIs were present, but unused. The fields were deprecated in previous major version and in v14 those fields are removed. The `aotSummaries` fields were completely unused, so you can just drop them from the TestBed APIs usage.
### forms
- Forms classes accept a generic.
  
  Forms model classes now accept a generic type parameter. Untyped versions of these classes are available to opt-out of the new, stricter behavior.
- objects with a length key set to zero will no longer validate as empty.
  
  This is technically a breaking change, since objects with a key `length` and value `0` will no longer validate as empty. This is a very minor change, and any reliance on this behavior is probably a bug anyway.- Queries including + will now   Possible server-side workarounds will need to be undone.
- JSONP will throw an error when headers are set on a reques  JSONP does not support header  were ignored. The JSONP backend will now throw an error if it
  receives a request that has any headers set. Any uses of JSONP
  on requests with headers set will need to remove the headers
  to avoid the error.
### platform-browser
- This change may cause a breaking change in unit tests that are implicitly depending on a specific
  number and sequence of change detections in order for their assertions to pass.
- This may break invalid calls to `TransferState` methods.  This tightens parameter types- The type of `Route.pathMatch` is now stricter. Places that use
  `pathMatch` will likely need to be updated to have an explicit
  `Route`/`Routes` type so that TypeScript does not infer the type as
  `string`.    the `Router` only sets it t    `Router#navigateByUrl()` call before navigation" but the value
    actually gets set to something completely different. It's set to the
    current internal `UrlTree` of the Router at the time navigation
    occurs.
    `initialUrl` because it was n  In more specific use-cases, tracking the `finalUrl` between successful- Lazy loaded configs are now a  configs will now error. Note that this is only done in dev mode so
  there is no production impact of this change.
- When a guard returns a `UrlTree`, the router would previously schedule
  the redirect navigation within a `setTimeout`. This timeout is now removed,
  which can result in test failures due to incorrectly written tests.
  Tests which perform navigations should ensure that all timeouts are
  flushed before making assertions. Tests should ensure they are capable
  of handling all redirects from the original navigation.  before proceeding with the na  The router now takes only the first emitted value by the resolvers
  and then proceeds with navigation. This is now consistent with `Observables`
  returned by other guards: only the first value is used.
### zone.js
- in TaskTrackingZoneSpec track a periodic task until it is cancelled
  
  The breaking change is scoped only to the plugin
  `zone.js/plugins/task-tracking`. If you used `TaskTrackingZoneSpec` and
  checked the pending macroTasks e.g. using `(this.ngZone as any)._inner
  ._parent._properties.TaskTrackingZone.getTasksFor('macroTask')`, then
  its behavior slightly changed for periodic macrotasks. For example,
  previously the `setInterval` macrotask was no longer tracked after its
  callback was executed for the first time. Now it's tracked until  ### common
- The `ngModuleFactory` input of the `NgComponentOutlet` directive is deprecated in favor of a newly added `ngModule` input. The `ngModule` input accepts references to the NgModule class directly, without the need to resolve module factory first.
### forms
- The `initialValueIsDefault` option has been deprecated and replaced with the otherwise-identical `nonNullable` option, for the sake of naming consistency.
- It is now deprecated to provide *both* `AbstractControlOption`s and an async validators argument to a FormControl. Previously, the async validators would just be silently dropped, resulting in a probably buggy forms. Now, the constructor call is deprecated, and Angular will print a warning in devmo- The `resolver` argument of th| Commit | Type | Description || [a6fa37bc6e](https://github.c| [f8dc660605](https://github.com/angular/angular/commit/f8dc66060591e1ce42265a7862c3df16e40b05e1) | fix | allow animations with unsupported CSS properties ([#44729](https://github.com/angular/angular/pull/44729)) |
| [2a75754ee8](https://github.com/angular/angular/commit/2a75754ee823032e651bc596887a2186dc6846ae) | fix | apply default params when resolved value is null or undefined ([#45339](https://github.com/angular/angular/pull/453| [5c7c56bc85](https://github.c| [7a81481fb2](https://github.com/angular/angular/commit/7a81481fb29e94b550db7ad68270eccf26bb2743) | perf | Remove generic objects in favor of Maps ([#44482](https://github.com/angular/angular/pull/44482)) |
| [6642e3c8fd](https://github.com/angular/angular/commit/6642e3c8fd7d3b5ed22710667b2c41a46f14eda8) | perf | remove no longer needed CssKeyframes classes ([#44903](https://github.com/angular/angular/pull/44903)) |
| [59559fdbac](https://github.com/angular/a| Commit | Type | Description || [31d7c3bd71](https://github.com/angular/angular/commit/31d7c3bd71fdab3fef1b4615ecb8124fe6c165bd) | feat | add getState method to LocationStrategy interface ([#45648](https://github.com/angular/angular/pull/45648)) |
| [c89cf63059](https://github.com/angular/angular/commit/c89cf63059370bba43717483e3d9627499dfe815) | feat | support NgModule as an input to the NgComponentOutlet ([#44815](https://github.com/angular/angular/pull/44815)) |
| [38c03a2035](https://github.com/angular/angular/commit/38c03a20358db3f8621c023b98e627cd385731c0) | feat | support years greater than 9999 ([#43622](https://github.com/angular/angular/pull/43622)) |
| [bedb257afc](https://github.com/angular/angular/commit/bedb257afc1ca12eb221536| [05d50b849b](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [bb8d7091c6](https://github.com/angular/angular/commit/bb8d7091c64a785758ae347b1a9bcdeeed95897c) | fix | exclude empty styles from emitted metadata ([#45459](https://github.com/angular/angular/pull/45459)) |
| [4d6a1d6722](https://github.com/angular/angular/commit/4d6a1d672210219328b33f4f96210870563066ee) | fix | scope css keyframes in emulated view encapsulation ([#42608](https://github.com/angular/angular/pull/42608)) |
| [f03e313f24](https://github.com/angular/angular/commit/f03e313f24465cbe9ce99aa5f9f482a6c6b5485f) | fix | scope css keyfr| Commit | Type | Description || [9cf14ff03d](https://github.com/angular/angular/commit/9cf14ff03dc7a848413b323dfb943fcd26f1217e) | feat | exclude abstract classes from `strictInjectionParameters` requirement ([#44615](https://github.com/angular/angular/pull/44615)) |
| [0072eb48ba](https://github.com/angular/angular/commit/0072eb48ba1c6f549703988b7fd7ba3e09058048) | feat | initial implementation of standalone components ([#44812](https://github.com/angular/angular/pull/44812)) |
| [2142ffd295](https://github.com/angular/angular/commit/2142ffd295de491eb8582c2eb1712b5b48044f24) | feat | propagate `standalone` flag to runtime ([#44973](https://github.com/angular/angular/pull/44973)) |
| [6f653e05f9](https://github.com/angular/angular/commit/6f653e05f985141ae4d2d90af78b2bc001595661) | feat | standalone types imported into NgModule scopes ([#44973](https://github.com/angular/angular/pull/44973)) |
| [752ddbc165](https://github.com/angular/angular/commit/752ddbc165359c2ff987c24f715d0a36fd604ec0) | feat | Support template binding to protected component members ([#45823](https://github.com/angular/angular/pull/45823)) |
| [3d13343975](https://github.com/angular/angular/commit/3d133439754cbf5d5a20bb3c714c8673c848e465) | fix | better error messages for NgModule structural issues ([#44973](https://github.com/angular/angular/pull/44973)) |
| [046dad1a8d](https://github.com/angular/angular/commit/046dad1a8d878ea537a6e2e| [32c625d027](https://github.c| [a524a50361](https://github.com/angular/angular/commit/a524a50361bb408cf8baf8ff209378a1db967545) | [8155428ba6](https://github.c| Commit | Type | Description || [174ce7dd13](https://github.c| [69018c9f42](https://github.com/angular/angular/commit/69018c9f42d14c1c7aa8271b406d6d247de1c564) | feat | allow for injector to be specified when creating an embedded view ([#45156](https://github.com/angular/angular/pull/45156)) |
| [94c949a60a](https://github.com/angular/angular/commit/94c949a60ad0de1f5385ec97f2c1933cb1d55f22) | feat | allow for injector to be specified when creating an embedded view ([#45156](https://github.com/angular/angular/pull/45156)) |
| [e702cafcf2](https://github.com/angular/angular/commit/e702cafcf2fef53968ef52ce17cb343f3a12bb53) | feat | allow to throw on unknown elements in tests ([#45479](https://github.com/angular/angular/pull/45479)) |
| [6662a97c61](https://github.com/angular/angular/commit/6662a97c61f133a14f2d117f71e4d2b8f4a83c| [5a10fc4f82](https://github.c| [94bba76a4a](https://github.com/angular/angular/commit/94bba76a4a9594a5eb90e581f407f1b70697e715) | feat | support TypeScript 4.6 ([#45190](https://github.com/angular/angular/pull/45190)) |
| [29039fcdbc](https://github.com/angular/angular/commit/29039fcdbcb8cab040d88dabe2dcb1abae34cb4e) | feat | support TypeScript 4.7 ([#45749](https://github.com/angular/angular/pull/45749)) |
| [225e4f2dbe](https://github.com/angular/angular/commit/225e4f2dbeac5982982fb94eac65ea931c44247a) | feat | triggerEventHandler accept optional eventObj ([#45279](https://github.com/angular/angular/pull/45279)) |
| [401dec46eb]| [d36fa111eb](https://github.c| [f3eb7d9ecb](https://github.com/angular/angular/commit/f3eb7d9ecb9a82e7396cca658e3250e47c853153) | fix | Ensure the `StandaloneService` is retained after closure minification ([#45783](https://github.com/angular/angular/pull/45783)) |
| [701405fa71](https:| [aafac7228f](https://github.com/angular/angular/commit/aafac7228f3d18b| [88f1168506](https://github.com/angular/angular/commit/88f1168506befd0665125da1fca2a719cb27dbb5) | perf | only track LViews that are referenced in `__ngContext__` ([#45172](https://github.com/angular/angular/pull/45172)) |
| [9add714b13](https://github.com/angular/angular/commit/9add714b13740db621eb2b200d72be74cc7eb630) | refactor | remove deprecated `aotSummaries` fields in TestBed config ([#45487](https://github.com/angular/angular/pull/45487)) |
### devtools tabs
| Commit | Type | Description |
| -- | -- | -- |### forms| -- | -- | -- |
| [2dbdebc646](https://github.com/angular/angular/commit/2dbdebc6467074c7005c09ef5c229029f8d3607c) | feat | Add `FormBuilder.nonNullable`. ([#45852](https://github.com/angular/angular/pull/45852)) || [7ee121f595](https://github.c| [f490c2de4e](https://github.com/angular/angular/commit/f490c2de4e1ada26e62e35c0d70cb90e55297658) | feat | support nega| [4332897baa](https://github.c| [9f6fa5b746](https://github.com/angular/angular/commit/9f6fa5b746cbdd4a71f67728ff6b663ad26c6a29) | fix | Prevent FormBuilder from distributing unions to control types. ([#45942](https://github.com/angular/angular/pull/45942)) |
| [aa7b857be8](https://github.com/angular/angular/commit/aa7b857be89a62e6dcfe62c418acf0823525d265) | fix | Property renaming safe code ([#45271](https://github.com/angular/angular/pull/45271)) |
| [cae1e44608](https://github.com/angular/angular/commit/cae1e44608227ac80682401190c6d28ef39b3269) | fix | Update the typed forms migration to use `FormArray<T>` instead of `FormArray<T[]>`. ([#44933](https://github.com/angular/angular/pull/44933)) |
| [d336ba96d9](https://github.com/angular/angular/commit/d336ba96d922363235688f54d8af108ef7ab01f0) | fix | Update the typed forms migration. ([#45281](https://github.com/angular/angular/pull/45281)) |
| [018550ed50](https://github.com/angular/angular/commit/018550ed5025de9737794b683eb7c0697d83d430) | fix | Value and RawValue should be part of the public API. ([#45978](https://github.com/angular/angular/pull/45978)) |
| [2e96cede3e](https://github.com/angular/angular/commit/2e96cede3e2d9ac399c10d3bfe25259b92a5276e) | fix | Warn on FormControls that are constructed with both options and asyncValidators. |
### http
| Commit | Type | Description || [76a9a24cdc](https://github.c### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [9d4af65e34](https://github.com/angular/angular/commit/9d4af65e343e41b48cb9afd12c2b61d8ca61a9ac) | feat | Provide plugin to delegate rename requests to Angular ([#44696](https://github.com/angular/angular/pull/44696)) |
| [3ae133c69e](https://github.com/angular/angular/commit/3ae133c69e1c78d5ddf772cacf222f909faccd70) | fix | Fix detection of Angular for v14+ projects ([#45998](https://github.com/angular/angular/pull/45998)) |
### localize
| Commit | Type | Description |
| -- | -- | -- |
| [a50e2da64a](https://github.com/angular/angular/commit/a50e2da64a4297d1bc994a267203c2097da2efaf) | fix | ensure transitively loaded compiler code is tree-shakable ([#45405](https://github.com/angular/angular/pull/45405)) |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [d56a537196](https://github.com/angular/angular/commit/d56a537196d2ab0f3f48821889020d2f5bc621ba) | feat | Add migration to add explicit `Route`/`Routes` type ([#45084](https://github.com/angular/angular/pull/45084)) |
### ngcc
| Commit | Type | Description || [74a2e2e2ec](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [a01bcb8e7e](https://github.com/angular/angular/commit/a01bcb8e7eaf63ac9466a78dd4d15228241da900) | fix | do not run change detection when loading Hammer ([#44921](https://github.com/angular/angular/pull/44921)) |
| [b32647dc68](https://github.com/angular/angular/commit/b32647dc68b055da0c49c86d6e7e2a7d2ec5954a) | fix | Make transfer state key typesafe. ([#23020](https://github.com/angular/angular/pull/23020)) |
| [c7bf75dd5e](https://github.com/angular/angular/commit/c7bf75dd5e7f3f80a3c2afb8586ae46f7258f349) | fix | remove obsolete shim for Map comparison in Jasmine ([#45521](https://github.com/angular/angular/pull/45521)) |
| [23c4c9601e](https://github.com/angular/angular/commit/23c4c9601e1bdd8bd2e37d9e0468440a44971b95) | perf | avoid including Testability by default in `bootstrapApplication` ([#45885](https://github.com/angular/angular/pull/| Commit | Type | Description || [dff5586d52](https://github.com/angular/angular/commit/dff5586d5243f914b9054b5ab7ac71d57edfa973) | feat | implement `renderApplication` function ([#45785](https://github.com/angular/angular/pull/45785)) |
| [22c71be94c](https://github.com/angular/angular/commit/22c71be94c3a695ca0cd0316065d807abb46355f) | fix | update `renderApplication` to move `appId` to options ([#45844](https://github.com/angular/angular/pull/45844)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [f4fd1a8262](https://github.com/angular/angular/commit/f4fd1a82620b5b3899c5e8c89fa06b084ee5792e) | feat | Add `EnvironmentInjector` to `RouterOutlet.activateWith` ([#45597](https://github.com/angular/angular/pull/45597)) |
| [910de8bc33](https://github.com/angular/angular/commit/910de8bc3379b1452c0bc23a866b5108d6d94e55) | feat | Add `Route.title` with a configurable `TitleStrategy` ([#43307](https://github.com/angular/angular/pull/43307)) |
| [4e0957a4e1](https://github.com/angular/angular/commit/4e0957a4e10d1ae188faa843043a2314c9873c52) | feat | Add ability to specify providers on a Route ([#45673](https://github.com/angular/angular/pull/45673)) || [41e2a68e30](https://github.c| [791bd31424](https://github.com/angular/angular/commit/791bd3142432ed7caf14a68a6e434b27004e634b) | feat | set stricter type for Route.title ([#44939](https://github.com/angular/angular/pull/44939)) |
| [50004c143b](https://github.com/angular/angular/commit/50004c143ba9b1e041c7b30caf98f6582d3d26d4) | feat | Support lazy loading standalone components with `loadComponent` ([#45705](https://github.com/angular/angular/pull/45705)) |
| [7fd416d060](https://github.com/angular/angular/commit/7fd416d060bd873bc88dffed41946c51aa649ec1) | fix | Fix type of Route.pathMatch to be more accurate ([#45176](https://github.com/angular/angular/pull/45176)) |
| [1c11a57155](https://github.com/angular/angular/commit/1c11a5715576632a4fb7170202395cf95dfbce09) | fix | merge interited resolved data and static data ([#45276](https://github.com/angular/angular/pull/45276)) |
| [f8f3ab377b](https://github.com/angular/angular/commit/f8f3ab377b8842c2bae0f215a0e90aaa3a1e070a) | fix | Remove `any` from `LoadChildrenCallback` type ([#45524](https://github.com/angular/angular/pull/45524)) |
| [d4fc12fa19](https://github.com/angular/angular/commit/d4fc12fa19dbe5e89189bb52c37e5d37a00a663c) | fix | Remove deprecated initialNavigation option ([#45729](https://github.com/angular/angular/pull/45729)) |
| [989e840cce](https://github.com/angular/angular/commit/989e840cce7ebe94311ae898786e09b1b41ce7f6) | fix | Remove unused string type for ActivatedRoute.component ([#45625](https://github.com/angular/angular/pull/45625)) |
| [64f837d2c0](https://github.com/angular/angular/commit/64f837d2c0fbcf722d32b35a87e87220bfe61f65) | fix | Update `Navigation#initialUrl` to match documentation and reality ([#43863](https://github.com/angular/angular/pull/43863)) |
| [96fd29c6d2](https://github.com/angular/angular/commit/96fd29c6d2d2abc5afee4d21a3e964a79aa39844) | fix | validate lazy loaded configs ([#45526](https://github.com/angular/angular/pull/45526)) |
| [f13295f3a3](https://github.com/angular/angular/commit/f13295f3a3a1d622d15cf8339360d53feba824b5) | perf | cancel the navigation instantly if at least one resolver doesn't emit any value ([#45621](https://github.com/angular/angular/pull/45621)) |
| [1d2f5c1101](https://github.com/angular/angular/commit/1d2f5c1101ccd182f5b528de52583a1b98dd6789) | refactor | deprecate no longer needed resolver fields ([#45597](https://github.com/angular/angular/pull/45597)) || [c9679760b2](https://github.c| Commit | Type | Description |
| -- | -- | -- |
| [ec0a0e0669](https://github.com/angular/angular/commit/ec0a0e0669ef5d2f524fbf9a540eb2b306b2e24a) | feat | add `cacheOpaqueResponses` option for data-groups ([#44723](https://github.com/angular/angular/pull/44723)) |## Special Thanks