/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    const localRegistry = ne   });  it('should produce an accurate LocalModuleScope for a basic NgModule', () => {
    const {Dir1, Dir2, Pipe1, Module} = registerFakeRe      ref: new Reference(Module.node),      declarations: [Dir1, Dir2, Pipe1],
      exports: [Dir1, Pipe1],
      schemas: [],
            mayDeclareProviders: false,
    });    const scope = scopeRegistry.getScopeOfModul    const {DirA, DirB, DirCI, DirCE, M      ref: new Reference(ModuleA.node),
      imports: [ModuleB],
      declarations: [DirA],
            rawExports: null,
      d    });      kind: MetaKind.NgModule,
           declarations: [DirB],
      imports: [],      rawDeclaration      rawExports: null,
      decorator: null,
      mayDeclareProviders: false,
            declarations: [DirCI, DirCE],
      e      schemas: [],      rawImports: null,
           mayDeclareProviders: false,
    });    const scopeA = scopeRegistr    const {Dir, ModuleA, ModuleB} = registerFakeRefs(metaRegistry);    metaRegistry.registerNgModuleMetadata({
      kind: MetaKind.NgModule,
      ref: new Reference(ModuleA.node),
            rawDeclarations: null,
      r      decorator: null,    });
    m      ref: new Reference(ModuleB.node),
      d      imports: [],      rawDecl      mayDeclareProviders: false,    expect(scopeToRefs(scopeA.compilation)).toEqual([]);
    expect(scopeToRefs(scopeA.exported)).toEqual([Dir]);
  });  it('should deduplicate declarations and exports', () => {
    const {DirA, ModuleA, DirB, ModuleB, ModuleC} = registerFakeRefs(metaRegistry);    metaRegistry.registerNgModuleMetadata({
      kind: MetaKind.NgModule,
           imports: [ModuleB, ModuleC],
      e      rawDeclarations: null,      rawExports: null,
         });
    met      ref: new Reference(ModuleB.node),      imports: [],
           rawDeclarations: null,
      rawImports: null,    });
    metaRegistry.registerNgModuleMetadata({
           declarations: [],
      imports: [],      schemas: [],
      rawDeclarations: null,
      rawImports: null,
      rawExports: null,
      decorator: null,
      m    expect(scopeToRefs(scope.compilation)).toEqual([DirA, DirB]);
    expect(scopeToRefs(scope.exported)).toEqual([DirA, DirB]);
  });  it('should preserve reference identities in module metadata', () => {
    c    // using it. This emulates what happens when an NgModule declares a Directive.
    con    const DirInModule = new Reference(Dir.node);    metaRegistry.registerNgModuleMetadata({
           exports: [],
      imports: [],      rawImports: null,
      rawExports: null,
         });    const scope = scopeRegistry.getScopeOfModule(Module.node) as LocalModuleScope;
    expect(scope.compilation.dependencies[0].ref.getIdentityIn(idSf)).toBe(id);    const {Dir, ModuleA, ModuleB} = registerFakeRefs(metaRegistry);    metaRegistry.registerNgModuleMetadata({
      kind: MetaKind.NgModule,
      ref: new Reference(ModuleA.node),
      exports: [Dir],
      imports: [ModuleB],
      declarations: [],
      s      rawImports: null,
      rawExports: null,
      decorator: null,
         metaRegistry.registerNgModuleMetadata({
      kind: MetaKind.NgModule,
      ref: new Reference(ModuleB.node),      exports: [Dir],
      imports: [],
      s      rawImports: null,
      rawExports: null,
      decorator: null,
         expect(scopeToRefs(scopeA.exported)).toEqual([Dir]);
  });  it('should not allow directly exporting a directive that\'s       exports: [Dir],
      imports: [],
           r      rawExports: null,
      decorator: null,      kind: MetaKind.NgModule,      declarations: [Dir],
      exports: [Dir],
      imports: [],
      schemas: [],
      rawDeclarations: null,
      rawImports: null,
      r      mayDeclareProviders: false,
    });    expect(scopeRegistry.getScopeOfModule(ModuleA.node)!.compilation.isPoisoned).toBeTrue();    // ModuleA should have associated diagnostics as it exports `Dir` without declaring it.
    expect(scopeRegistry.getDiagnosticsOfModule(ModuleA.node)).not.toBeNull();    // ModuleB should have no diagnostics as it correctly declares `Dir`.
    e});function fakeDirective(ref: Reference<ClassDeclaration>): DirectiveMeta {
  const name = ref.debugName!;
  return {    matchSource: MatchSource.Selector,
    ref,
    nam    isComponent: name.startsWith('Cmp'),
    inputs: ClassPropertyMapping.fromMappedObject({}),
    outputs: ClassPropertyMapping.fromMappedObject({}),
    e    coercedInputFields: new Set<string>(),
    r    undeclaredInputFields: new Set<string>(),    isStandalone: false,
    isSignal: false,
    i    dec    assumedToExportProviders: false,
  };    kind: MetaKind.Pipe,    name,
    nameExpr: null,
    isStandalone: false,
    decorator: null,
  };
}class MockDtsModuleScopeResolver implements DtsModuleScopeResolver {
  resol  }
}functi      .sort((a, b) => a.debugName!.localeCompare(b.debugName!));