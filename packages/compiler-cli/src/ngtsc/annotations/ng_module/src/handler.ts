/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  rawImports: ts.Expression|null;
  exports: Reference<ClassDe  remoteScopesMayRequireCycleProtection: boolean;
  decorator: ts.Decorator|null;
}export interface NgModuleResolution {
  injectorImports: Expression[]; * Represents an Angular NgModule.export class NgModuleSymbol extends SemanticSymbol {
  private remotelyScopedComponents: {
    component: SemanticSymbol,
   }[] = [];  /**
   * `SemanticSymbol`s of the transitive imports of this NgModule which came from imported   * based on whether the compiler can prove that their transitive imports may contain exported   * NgModule.
   */
  private transitiveImportsFromStandaloneComponents = new Set<SemanticSymbol>();  constructor(decl: ClassDeclaration, public readonly hasProviders: boolean) {
     if (!(p    }    // Changes in the provider status of this NgModule affect downstream dependencies, which may
    // consider provider status in their own emits.  }  override isEmitAffected(previousSymbol: SemanticSymbol): boolean {      return true;
    }    // compare our remotelyScopedComponents to the previous symbol
    if (previousSymbol.remotelyScopedComponents.length !== this.remotelyScopedCo    }    for (const currEntry of this.remotelyScopedComponents) {
         //              // references to the list of used directives, it should be re-emitted to update this list.
        // Note: the NgModule does not have to be re-emitted when any of the directives has had
              return true;
           this.transitiveImportsFromStandaloneComponents.size) {
      return true;
    }    const previousImports = Array.from(previousSymbol.transitiveImportsFromStandaloneComponents);
    fImports.find(prevEntry => isSymbolEqual(prevEntry, transitiveImport));
      if (prevEntry === undefined) {           }
       compo    t}/**
 * Compiles @NgModule annotations to ngModuleDef fields.
     D      private scopeRegistry: LocalModuleScopeRegistry,
         private onlyPublishPublicTypings: boolean,
      private injectableRegistry: InjectableClassRegistry, private perf: PerfRecorder,
       readonly name = 'NgModuleDecoratorHandler';  detect(node: ClassDeclaration, decorators: Decorator[]|null): DetectResult<Decorator>|undefined {
    i    }
    const decorator = findAngularDecorator(decorators, 'NgModule', this.isCore);           };
       throwle ar     ]);    const diagnostics: ts.Diagnostic[] = [];    // Resolving declarations
    let declarationRefs: Reference<ClassDeclaration>[] = [];
            for (const ref of declarationRefs) {
      ref.node.name
       .text}' in an NgModule as it's not a part of the current compilation.`,
eRela    }    if (diagnostics.length > 0) {    }    // Resolving imports
    l    if (this.compilationMode !== CompilationMode.LOCAL && rawImports !== null) {
      const importsMeta = this.evaluator.evaluate(rawImports, moduleResolvers);    }      const exportsMeta = this.evaluator.evaluate(rawExports, moduleResolvers);
         }    // Resolving bootstrap
            const idExpr = ngModule.get('id')!;        id = new WrappedNodeExpr(idExpr);
      } elsode.W       d        exportedDeclarations.push(decl.type)    }
    const imports = importRefs.map(
        imp =>
toR3Reference(imp.getOriginForDiagnostics(meta, node.name), imp, valueContext));
    c        exports.some(isForwardReference);    const type = wrapTypeReference(this.reflector, node);    let ngModuleMetadata: R3NgModuleMetadata;
           exportsExpression: rawExports ? new WrappedNodeExpr(rawExports) : null,
        importsExpression: rawImports ? new WrappedNodeExpr(rawImports) : null,
                };             type,
             publicDeclarationTypes: this.onlyPublishPublicTypings ? exportedDeclarations : null,
        exports,             // tree-shakeable way.
                };
            }      let absoluteIndex = 0;        const resolved = this.evaluator.evaluate(importExpr, moduleResolvers);        const {references, hasModuleWithProviders} =
esolveTypeList(importExpr, [resolved], node.name.text, 'imports', absoluteIndex);
        absoluteIndex += references.length;        topLevelImports.push({
on: i       d      target: FactoryTarget.NgModule,    // circumstances the component scope is monkey-patched from the NgModule file instead.
    //
    // However, if the NgModule itself has a cycle with the desired component/directive
    // reference(s), then we need to be careful. This can happen for example if an NgModule imports
    /    //    // user that a reference may not be defined until a c    // components should also guard against cycles using a closure-wrapped scope.
           declarationRefs.some(isSyntheticReference) || importRefs.some(isSyntheticReference);    return {
      diagnostics: diagnostics.length > 0 ? diagnostics : undefined,
                  declarations: declarationRefs,             importRefs,
             providers: rawProviders,
        providersRequiringFactory: rawProviders ?
eProvidersRequiringFactory(rawProviders, this.reflector, this.evaluator) :        classMetadata: this.includeClassMetadata ?
tClas  }  symbol(node: ClassDeclaration, analysis: NgModuleAnalysis): NgModuleSymbol {
    r    /    // computation.
         rawImports: analysis.rawImports,    }    });
  }  reso    i    }       };    // Add all top-level imports from the `imports` field to the injector imports.
                }      const refsToEmit: Reference      if (this.semanticDepGraphUpdater !== null) {        if (sym instanceof NgModuleSymbol) {
 sym;
        }        const dirMeta = this.metaReader.getDirectiveMetadata(ref);
        }Expoue;        }        const pipeMeta = dirMeta === null ? this.metaReader.getPipeMetadata(ref) : null;
             // expression.        const context = node.getSourceFile();
 ccessfu        }      // specified as module exports.
      const context = getSourceFile(node);
      for (const exportRef of analysis.exports) {
        if (isNgModule(exportRef.node, scope.compilation)) {
pe = this.refEmitter.emit(exportRef, context);
ccessfu                const dirMeta = this.metaReader.getDirectiveMetadata(decl);
        if (dirMeta !== null) {new FatalDiagnosticError( `${refType} ${decl.node.name.text} has no selector, please add it!`);;
        }
             scope.reexports === null) {
      return {data};      return {
        data,
          <NgModuleAnalysis>,    c      ...inj,
      imports: injectorImports,
    });
    const ngModuleDef = compileNgModule(mod);
    const statements = ngModuleDef.statements;
    const metadata = classMetadata !== null ? compileClassMetadata(classMe    this.appendRemoteScopingStatements(
             ...inj,
      imports: injectorImports,
       const metadata = classMetadata !== null ? compileDeclareClassMetadata(classMetadata) : null;
    t     <NgModuleAnalysis>): CompileResult[] {
       this.appendRemoteScopingStatements(   */      ngModuleStatements.unshift(metadata.toStmt());
      * Add remote scoping statements, as needed, to the `ngModuleStatements`.
   */      ngModuleStatements: Statement[], node:      remoteScopesMayRequireCycleProtection: boolean): void {
    c        ype.ex        const directiveArray = new LiteralArrayExpr(directives);
   nctionE               const declExpr = componen        const callExpr =      }
    }
  }  private compileNgModule(      factoryFn,
      {
                initializer: injectorDef.expression,        type: injectorDef.type,
           }  priv      valueContext: ts.SourceFile): R3Reference {
    i   */      {references: Reference<ClassDeclaration>[], hasModuleWithProviders: boolean} {
     if solvedList,      if (entry instanceof SyntheticValue && isResolvedModuleWithProviders(entry)) {
        entry = entry.value.ngModule;
        hasModuleWithProviders = true;
      } else if (entry instanceof Map && entry.has('ngModule')) {
        entry = entry.get('ngModule')!;
        hasModuleWithProviders = true;
      }      if (Array.isArray(entry)) {
                absoluteIndex += recursiveResult.references.length;
        hasModuleWithProviders = hasModuly.node, entry,   className} is not a class`);
        }
        refList.push(entry);        throw createValueHasWrongTypeError(
entry className} is not a reference`);
      }
    }    return {      hasModuleWithProviders,
    };
  }
}function isNgModule(node: ClassDeclaration, compilation: S}/* */
funct      expr.expression.text === 'module'   exp  hasModuleWithProviders: boolean;
}/**
 * Helper method to produce a diagnostics for a situation when a standalone component
 * is referenced in the `@NgModule.bootstrap` array.
 */
function makeStandaloneBootstrapDiagnostic(    rawBootstrapExpr: ts.Expression|null): ts.Diagnostic {
  con      ErrorCode.NGMODULE_BOOTSTRAP_IS_STANDALONE,
      getDiagnosticNode(bootstrappedClassRef, rawBootstrapExpr), message, relatedInformation);
}function isSyntheticReference(ref: Reference<DeclarationNode>): boolean {
  return ref.synthetic;
}