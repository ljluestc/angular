export class BaseModule {
  constructor(service) { this.service = service; }
}
BaseModule.ɵfac = function BaseModule_Factory(t) { return new (t || BaseModule)(i0.ɵɵinject(Service)); };
BaseModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BaseModule });
BaseModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [Service] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseModule, [{
  type: NgModule,
  args: [{ providers: [Service] }]
}], function () { return [{ type: Service }]; }, null); })();
…
export class BasicModule extends BaseModule {
}}], null, null); })();
…