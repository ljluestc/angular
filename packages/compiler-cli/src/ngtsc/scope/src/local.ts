/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * Tracks whether the registry has been asked to produce scopes for a module or component. Once
   * this is true, the regis   * A map of components from the current compilation unit to the NgModule wh    * a directive's compilation scope.
   */
  private declarationToModule = new Map<ClassDeclaration, DeclarationD   * directive/pipe. This data is needed to produce an error for the given class.
   */      new Map<ClassDeclaration, Map<ClassDeclaration, DeclarationData>>();  private moduleToRef = new Map<ClassDeclaration, Reference<ClassDeclaration>>();  /**
   * A cache of calculated `LocalModuleScope`s for each NgModule declared in     * Remote scoping is when the set of directives which apply to a given component is set in the
   * NgModule's file instead of directly on the component def (which is sometimes needed to get
   * around cyclic import issues). This is not used in calculation of    * Tracks errors accumulated in the processing of scopes for each module declaration.
   */   * Tracks which NgModules have directives/pipes that are declared in mor  private modulesWithStructuralErrors = new Set<ClassDeclaration>();  constructor      private dependencyScopeReader: DtsModuleScopeResolver, private refEmitter: ReferenceEmitter,
      private aliasingHost: AliasingHost|null) {}  /**   */
  registerNgModuleMetadata(data: NgModuleMeta): void {    const ngModule = data.ref.node;
     // are found, they're instead tracked in duplicateDeclarations.
    for (const decl of data.declarations) {
      this.registerDeclarationOfModule(ngModule, decl, data.rawDeclarations);  }  registerDirectiveMetadata(directive: DirectiveMeta): void {}  registerPipeMetadata(pipe: PipeMeta): void {}  getScopeForComponent(clazz: ClassDeclaration): LocalModuleScope|null {
    const scope = !this.declarationToModule.has(clazz) ?        this.getScopeOfModule(this.declarationToModule.get(clazz)!.ngModule);
    return scope;
  }  /**   * Ordinarily a class is only declared in one NgModule, in which case th   */    if (!this.duplicateDeclarations.has(node)) {    }    return Array.from(this.duplicateDeclarations.get(node)!.values());
  }  /**   * `LocalModuleScope`.   * This method implements the logic of NgModule imports and exports. It returns the
   * `LocalModuleScope` for the given NgModule if one can be produced   */
  getScopeOfModule(clazz: ClassDeclaration): LocalModuleScope|null {
    return this.moduleToRef.has(clazz) ?
        this.getScopeOfModuleReference(this.moduleToRef.get(clazz)!) :
        null;
  }  /**     getDiagnosticsOfModule(clazz: ClassDeclaration): ts.Diagnost    // before, this will be a no-op due to the       return this.scopeErrors.get(clazz)!;
    } else {    }
  }  private registerDeclarationOfModule(
       const declData: De    };    // First, check for duplicate declarations of the same directive      // This directive/pipe has already been identified as being du      this.du           // This directive/pipe is already registered as declared in another module. Mark it as a
         const firstDeclData = this.declarationTo      this.modulesWithStructuralErrors.add(ngMod      duplicateDeclMap.set(firstDeclData.ngModule, firstDeclData);
      duplicateDeclMap.set(ngModule, declData);      // therefore not valid.
      this.declarationToModule.delete(decl.node);
    } else {
      // This is the first declaration of this directive/pipe, so map it.
      this.declarationToModule.set(decl.node, declData);
      * Implementation of `getScopeOfModule` which accepts a reference to a c  p      return this.cache.get(ref.node)!;    this.sealed = true;    // `ref` should be a      this.cache.set(ref.node, null);
      return null;    // isn't empty then `undefined` will be cached and returned to indicate this scope is invalid.
       // - the directives and pipes which are exported to any NgModules which import this one.    // Directives and pipes in the compilation scope.
       const exportDirect    //    // 3) For each entry in the NgModule's exports:    //       one, add them to the export scope of this NgModule.    //       add     /    if (this.modulesWithStructuralErrors.has(ngModule.ref.node)) {
       }    // 1) process imports.      const imp        if (importScope === 'invalid' || importSue;        }        for (const dep of importScope.exported.dependencies) {
kind === MetaKind.Directive) {        continue;
      }      // The import wasn't an NgModule. Maybe it's a standalone entity?
      const directive = this.fullReader.getDirectiveMetadata(decl);
      if (directive !== null) {
        if (directive.isStandalone) {
ion, decl, ngModule.rawImports, directive.isComponent ? 'component' : 'direct         const pipe = this.fullReader.getPipeMetadata(decl);        } else {ed = true;      isPoisoned = true;
    }    // 2) add declarations.      if (directive !== null) {
   .getOriginForDiagnostics(ngModule.rawDeclarations!),   decl.node.name
         } else if (pipe !== null) {
        if (pipe.isStandalone) {rCode.NGMODULE_DECLARATION_IS_STANDALe ${
   deced = true;        }      } else {          ngModule.ref.node.name
butelate        isPoisoned = true;      }      de    // Exports can contain modules, components,            /        isPoisoned = true;        if (exportScope === 'invalid') {
;Pipes.set(dep.ref.node, dep);        }
      }        const directive = compilationDirectives.get(decl.node)!;
        exportDirectives.set(decl.node, directive);
      } else if (compilationPipes.has(decl.node)) {
        // decl is a pipe in the compilation scope of this NgModule.
           const dirMeta = this.fullReader.getDirectiveMetadata(decl);
        const pipeMeta = this.fullReader.getPipeMetadata(decl);
           isPoisoned = true;      dependencies: [..    };    const reexport      },
           schemas: ngModule.schemas,      this.scopeErrors.set(ref.node, diagnostics);      // Mark this module as being tainted.
      * Check whether a component requires remote scoping.  getRemoteScope(node: ClassDeclaration): RemoteScope|null {
      *
   * The NgModule in question may be declared locally in the    *   *     NgModule.
   *   * array parameter.
   */
  private getExportedScope(      ownerForErrors: DeclarationNode, type: 'import'|'export'): ExportScope|null|'invalid' {
    if (ref.node.getSourceFile().isDeclarationFile) {
             const code = type === 'import' ? ErrorCode.NGMODULE_INVALID_IMPORT :
de.ident nodeNameForError(ownerForErrors)}, but c  }  private getReexports(      exported: Array<DirectiveMeta|PipeMeta>, diagnostics: ts.Diagnostic[]): Re    const sourceFile = ref.node.getSourceFile();
    if (th    }
       // th    // Alias ngModuleRef a    const addReexport = (exportRef: Reference<ClassDeclaration>) => {
      if (exportRef.node.getSourceFile() === sourceFile) {
        return;      const isReExport = !declaredf, source        return;
      }        if (exportRef.alias && exportRef.alias instanceof ExternalExpr) {
s!.pushName: exportRef.alias.value.name!,
s: exportName,        } else {
ittedRef = this.refEmitter.emit(exportRef.cloneWithNoIdentifiers(), sourceFile);
ccessfulReferenceEmit(emittedRef, ngModuleRef.node.name, 'class');
pr dule: expr.value.moduleName,
Name: expr.value.name,
s:       }  }  private assertColl        }      type === 'import' ? ErrorCode.NGMODULE_INVALID_IMPORT : ErrorCode.NGMODULE_INVALID_EXPORT;
  con  const library = decl.ownedByModuleGuess !== null ? ` (${decl.ownedByModuleGuess})` : '';
  con    relatedMessage = `Is it missing an ${annotationType} annotation?`;
  } else if (sf.fileName.indexOf('node_modules') !    relatedMessage =
           decl.debugName} is not compatible with Angular Ivy.`;      code, getDiagnosticNode(decl, rawExpr), message,
    * by the NgModule in question.
 */    decl: Reference<ClassDeclaration>, rawExpr: ts.Expression|null,
    isStandalone: boolean): ts.Diagnostic {
  // The root error is the same here - this export is not valid. Give a helpful error message based
  // o  if (isStandalone) {
    // Standalone types need to be imported into an NgModule before they can be re-exported.
    message += 'it must be imported first';
  } else if (decl.node.getSourceFile().isDeclarationFile) {
    // Non-standalone types can be re-exported, but need to be imported into the NgModule first.
    // This requires importing their own NgModule.
    m    message +=
     ret}/** */    module: ClassDeclaration, refA: Reference<ClassDeclaration>,
    r      module.name.text}' and shares the same name as another exported directive/pipe.`;
  r      `e.name.text}', which are both part of the exports of '${module.name.text}'.    A      [
        ma      ]);
}ex  ref: Re}