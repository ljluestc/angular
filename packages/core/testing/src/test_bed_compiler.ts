/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  // defs in case TestBed makes changes to the originals.  private compilerProviders: Provider[]|null = null;  private providerOverrides: Provider[] = [];
   private testModuleRef: NgModuleRef<any>|null = nul    this.testModuleType = DynamicTestModule as    this.compilerProviders = providers;  '"TestBed.configureTestingModule" call');t  }  overrideModule(ngModule: Type<any>, override: MetadataOverride<NgModule>): void {depsTracker.clearScopeCacheFor(ngModule);
    }    if (metadata === null) {    }    this.recompileNgModule(ngModule, metadata);    // At this point, the module has a valid module def (ɵmod), but the override may have introduced
     this.verifyNoStandaloneFlagOverrides(directive,     this.pendingPipes.add(pipe);  override.remove?.hasOwnProperty('standalone')) {
throw new Error(
`AproviderDef = {
     c    overridesBucket.push(providerDef);    // Keep overrides grouped by token as well for fast lookups using token
   e  this.providerOverridesByModule.set(providedIn, [providerDef]);    }
  }  overrideTemplateUsingTestingModule(type: Type<any>, template: string): void {    const overrideStyleUrls = !!def && !ɵisComponent    /    // resolution). In order to avoid this, we     // is complete.
 }    this.queueTypesFromModulesArray(resolvedDeps.flat(2))    // and re-compile a component.
    await this.resolvePendingComponentsWithAsyncMetadata();    // Verify that there were no standalone components present in the `declarations` field
    // during the `TestBed.configureTestingMod    if (needsAsyncResources) {
let resourceLoader: ResourceLoader;
le    this.compileTypesSync();    // Create the testing module itself.
    this.compileTestModule();    this.applyTransitiveScopes();    t    t    this.componentToModuleScope.clear();        // Cast it to any before accessing it.    /  }  /**
   * @internal
   */    this.queueTypesFromModulesArray([m    this.applyProviderOverrides();
        this.queueTypesFromModulesArray([moduleType]);    this.applyProviderOverrides();
     }  /**   * @internal  _getComponentFactories(moduleType: Nconstreturn factories;  }  private compileTypesSync(): boolean {
     this.pendingComponents.forEach(declaration =>   throw new Error(
 `C  throw invalidTypeError(de    this.pendingComponents.clear();    this.pendinif (metadata }compileDirective(declaration, metadata);
    });  throw invalidTypeError(declaration.name, 'Pipe');// Module overrides (via `TestBed.overrideModule`) might affect scopes that were previously
// calculated and stored in `transitiveCompileScopes`. If mconst testingModuleDef = (this.testModuleType as any)[NG_MOD_DEF];
const affectedModules = this.collectModulesAff}
    }    const moduleToScope = new Map<Type<any>|TestingModuleOverride, NgModuleTransitiveScopes>();
  // `tView` that is stored on// changed. Store original `tView` before patching scope, so the `tView` (including scope
// information) is restored bpatchComponentDefWithScope((compo  }  if (t    this.seenComponents.forEach(maybeApp       */    /       // present here is suspicious and should be refactored in a way that the line
    // below can be moved (for ex. after an early exit check below).
    c// Visit all component dependencies anconst dependencies = maybeUnwrapFn(def.dependencies ?? []);
f  .if (this.hasProviderOverrides(providers)) {  injectorDef.providers = this.getOverriddenProviders(providers);
}//con  this.applyProviderOverridesInScope(importedModule); fieldName: 'providers',});   im}  }  (styles, type) => (type as any)[NG_COMP_DEF].styles = styles);
    this.existingComponentStyles.clear();
  }  private queueTypeArray(arr: any[], moduleType: Type<any>|TestingModuleOverride): void {
    for (const value of arr) {  this.queueTypeArray(value, moduleType);
} e  }  private queueType(typeif (ɵisComponentDefPendingResolutio}// can be set correctly. If// // * the component was in 'declarations' of the testing module, and also in an imported module
//   in which case the module scope will be TestingMod// real module, which was imported. This pattern is under    if (directive) {
if (!type.hasOwnProperty(NG_DIR_DEF)) {}
this.seenDirectives.add(type);    // can skip ones that have already been seen encountered. In some test setups, this caching
    /    const queueTypesFromModulesArrayRecur = (arr: any[]): void => {
forqueueTypesFromModulesArrayRecur(value); continue;
}queueTypesFromModulesArrayRecur(maybeUnwrapFn(def.exports));
  } else if (isModuleWithPro  } else if (isStandaloneComponent(value)) {
this.queueType(value, null); continue; // // them separately and pr } el  }  }  // When module overrides (via `TestB  // if we have the following module hierarchy: A -> B -> C (where `->` means `imports`)     c // // imports, since we already examined them before.
 if (affectedModules.has(value)) {
   pa path.forEach(item => affectedModules.// Examine module imports recursively to look for overridden modules.
const moduleDef = (value as any)[NG_MOD_DEF];
calcA    calcAffectedModulesRecur(arr, []);
      * Preserve an original def (such as ɵmod, ɵinj, etc) before applying an override.   */
 th   const currentDef = Object.getOwnPropertyDescriptor(type, prop);
currentDefs.set(prop, currentDef);  }  private st     }  /**
   * Clears current components resolution queue, but  prithis.originalComponentResolutionQueue = new Map      * as a part of restoring the state after completion of the current set of tests (that might
   * potentially mutate the state).
       if (this.originalComponentResolutionQueue !== null) {
ɵrestoreComponentResolutionQueue(this.originalComp    }
  }def   // Delete operations are generally undesirable since they have performance
      // class to restore its original state (before applying overrides and running tests).
   delete (type as any)[prop];   Object.defineProp    this.init       setLocaleId(DEFAULT_LOCALE_ID);
  }  private compileTestModule(): void {{provide: Compiler, useFactory: () => new R3TestCompiler(    if (this._injector !== null) {
return this._injector;    const compilerOptions = this.platform.injector.get(COMPILER_OPTIONS);
    compilerOptions.forEach(opts => {
if   }    const token = getProviderToken(provider);  }  private getProviderOverrides(providers?: Array<Provider|InternalEnvironmentProviders>):
Provider[] {
    i    // metadata's providers and applies a mapping function which retrieves overrides for each
       // providers array and contaminate any error messages that might be generated.
     }  private getOverriddenProviders(providers?: Array<Provider|InternalEnvironmentProviders>):
Provider[] {
    if (!providers || !providers.length || this.providerOverridesByToken.size === 0) return [];    const flattenedProviders = flattenProviders(providers);
       // take precedence over the values defined in provider list. We also filter out all providers
    // that have overrides, keeping overridden values only. This is needed, since presence of a
    // provider with `ngOnDeconst token: any = getProviderToken(provider);
if (this.providerOverridesByT// make sure that provided overri}    return final;    return this.getProviderOverrides(providers).length > 0;
  }  private patchDefWithProviderOverrides(declaration: Type<any>, field: string): void {
    cthis.storeFieldOfDefOnType(declaration, }fu    module: new NgModuleResolver(),
    component: new ComponentResolver(),    pipe: new PipeResolver()
  };
}function isStandaloneComponent<T>(value: Type<T>): value is ComponentType<T> {function getComponentDef(value: Type<unknown>): ComponentDef<unknown>|null;
funct}fu  values.forEach(value => {
    if (Array.isArray(value)) {
out.p}function identityFn<T>(value: T): T {}function flattenProviders<T>(
    providers: Array<Provider|InternalEnvironmentProviders>, mapFn: (provider: Provider) => T): T[];
funct  const out: any[] = [];
  f    if (Array.isArray(provider)) {
out.push(...flattenProviders(provider, maout.push(mapFn(provider));
    }
 }f}fu}function isModuleWithProviders(value: any): value is ModuleWithProviders<any> {
  return value.hasOwnProperty('ngModule');  f  }
}function invalidTypeError(name: string, expectedType: string): Error {
  r  c    return new R3NgModuleFactory(moduleType);
  }  async compileModuleAsync<T>(moduleType: Type<T>): Promise<NgModuleFactory<T>> {    return new R3NgModuleFactory(moduleType);
  }  compileModuleAndAllComponentsSync<T>(moduleType: Type<T>): ModuleWithComponentFactories<T> {
    c    return new ModuleWithComponentFactories(ngMPro    return meta && meta.id || undefined;
  }
}