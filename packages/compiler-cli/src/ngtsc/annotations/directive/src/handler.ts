/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  outputs: ClassPropertyMapping;  hostDirectives: HostDirectiveMeta[]|null;
  rawHostDirectives: ts.Expr    DecoratorHandler<Decorator|null, DirectiveHandlerData, DirectiveSymbol, unknown> {      private reflector: ReflectionHost,
      private evaluator: PartialEvaluator      private injectableRegistry: InjectableClassRegistry,
      private refEmitter: ReferenceEmitter,
       private strictCtorDeps: boolean,
      private semanticDepGraphUpdater: SemanticDepGraphUpdater|null,      private perf: PerfRecorder,
      private includeClassMetadata: boole      DetectResult<Decorator|null>|undefined {
    // If a class is undecorated but uses Angular features, we detect it as an
     if (!decorators) {
      const angularField = this.findClassFieldWithAngularFeatures(node);ined;
    } else {    // been processed, but we want to enforce a consistent decorator mental model.
    // See: https://v9.angular.io/guide/migration-undecorated-classes.
       // definitions.
      if (this.isCore) {
        return {};
      }
      return {diagnostics: [getUndecoratedClassWithAngularFeaturesDiagnostic(node)]};
       const analysis = directiveResult.metadata;      providersRequiringFactory = resolveProvidersRequiringFactory(
eResult.decorator.get('providers')!, this.reflector, this.evaluator);
    }    return {
         outputs: directiveResult.outputs,
        meta: analysis,
        hostDirectives: directiveResult.hostDirectives,
        rawHostDirectives: directiveResult.rawHostDirectives,
        classMetadata: this.includeClassMetadata ?
tClas        typeCheckMeta: extractDirectiveTypeCheckMeta(        isPoisoned: false,
           }  symbol(node: ClassDeclaration, analysis: Readonly<DirectiveHandlerData>): DirectiveSymbol {
    const typeParameters = extractSemanticType    // Register this directive's information with the `MetadataRegistry`. This ensures that
    // the information about the directive is available during the compile() phase.
    c      kind: MetaKind.Directive,
       name: node.name.text,
      selector: analysis.meta.selector,
      exportAs: analysis.meta.exportAs,
      inputs: analysis.inputs,
      outputs: analysis.outputs,
           ...analysis.typeCheckMeta,      isStructural: analysis.isStructural,
                  // Directives analyzed within our own compilation are not _assumed_ to export providers.
      // Instead, we statically analyze their       symbol.baseClass = this.semanticDepGraphUpdater.getSymbol(analysis.baseClass.node);
    }    const diagnostics: ts.Diagnostic[] = [];
    i      const providerDiagnostics = getProviderDiagnostics(
.providersRequiringFactory, analysis.meta.providers!.node,
ectableRegistry);
      diagnostics.push(...providerDiagnostics);
    }    const directiveDiagnostics = getDirectiveDiagnostics(
        node, this.injectableRegistry, this.evaluator, this.reflector, this.scopeRegistry,
        this.strictCtorDeps, 'Directive');
    if (directiveDiagnostics !== null) {
             null;      diagnostics.push(...hostDirectivesDiagnotics);
    }           const inputTransformFields = compileInputTransformFields(analysis.inputs);
    const classMetadata = analysis.classMetada        compileDeclareClassMetadata(analysis.classMetadata).toStmt() :
       }  compileLocal(
         const fac = compileNgFactoryDefField(toFactoryMetadata(analysis.meta, FactoryTarget.Directive));
    const def = compileDirectiveFromMetadata(analysis.meta, pool, makeBindingParser());
    const inputTransformFields = compileInputTransformFields(analysis.inputs);
    const classMetadata = analysis.classMetadata !== null ?
         return compileResults(
        fac, def, classMetadata, 'ɵdir', inputTransformFields, null /* deferrableImports */);
  }  /**
   * Checks if a given class uses Angular features and returns the TypeScript node
   *       if (!member.isStatic && member.kind === ClassMe        return true;
             return member.decorators.some(
tor      }
     }