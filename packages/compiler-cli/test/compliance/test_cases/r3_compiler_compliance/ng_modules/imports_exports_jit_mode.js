class AModule {}
AModule.ɵfac = function AModule_Factory(t) { return new (t || AModule)(); };
AModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AModule, declarations: [A1Component, A2Component], exports: [A1Component, A2Component] });
AModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
export { AModule };
…
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AModule, [{
  type: NgModule,
  args: [{ declarations: [A1Component, A2Component], exports: [A1Component, A2Component] }]
}], null, null); })();
…args: [{ declarations: [B1Component, B2Component], exports: [AModule] }]
}], null, null); })();
…class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
Aexport { AppModule };
…
(  args: [{ imports: [BModule] }]
}], null, null); })();