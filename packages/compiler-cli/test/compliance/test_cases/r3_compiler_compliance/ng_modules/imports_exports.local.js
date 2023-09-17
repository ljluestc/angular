export class AModule {}
AModule.ɵfac = function AModule_Factory(t) { return new (t || AModule)(); };
AModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AModule });
AModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [A1Component, A2Component] });
…
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AModule, [{
  type: NgModule,
  args: [{ declarations: [A1Component, A2Component], exports: [A1Component, A2Component] }]
}], null, null); })();
…}], null, null); })();
…export class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
A…
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
 }], null, null); })();