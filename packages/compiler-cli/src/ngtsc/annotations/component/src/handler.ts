/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */import {combineResolvers, compileDeclareFactory, compileInputTransformFields, compileNgFactoryDefField, compileResults, extractClassMetadata, extractSchemas, findAngularDecorator, forwardRefResolver, getDirectiveDiagnostics, getProviderDiagnostics, InjectableClassRegistry, isExpressionForwardReference, readBaseClass, ReferencesRegistry, removeIdentifierReferences, resolveEnumValue, resolveImportedFile, resolveLiteral, resolveProvidersRequiringFactory, ResourceLoader, toFactoryMetadata, validateHostDirectives, wrapFunctionExpressionsInParens,} from '../../common';
import {extractDirectiveMetaimport {ComponentAnalysisData, ComponentResolutionData} from './metadata';
import {_extractTemplateStyleUrls, extractComponentStyleUrls, extractStyleResources, extractTemplate, makeResourceNotFoundError, ParsedTemplateWithSource, parseTemplateDeclaration, preloadAndParseTemplate, ResourceTypeForDiagnostics, StyleUrlMeta, transformDecoratorResources} from './resources';
import {ComponentSymbol} from './symbol';
import {animationTriggerResolver, collectAnimationNames, validateAndFlattenCompone  ref: Reference<ClassDeclaration>,
  importedFile: ImportedFile,
};type UsedNgModule = R3NgModuleDependencyMetadata&{
  importedFile: ImportedFile,
};type AnyUsedType = UsedPipe|UsedDirective|UsedNgModule;const isUsedDirective = (      private reflector: ReflectionHost, private evaluator: PartialEvaluator,
      private metaRegistry: MetadataRegistry, private metaReader: MetadataReader,
        private typeCheckScopeRegistry: TypeCheckScopeRegistry,
      private resourceRegistry: ResourceRegistry, private isCore: boolean,
        private i18nUseExternalIds: boolean, private enab      private enabledBloc      i18nNormalizeLineEndingsInICUs: this.i18nNormalizeLineEndingsInICUs,
      usePoisonedData: this.usePoisonedData,
    }  private literalCache = new Map<Decorator, ts.ObjectLiteralExpression>();
  private elementSchemaRegistry = new DomElementSchemaRegistry();  /**
     * thrown away, and the parsed template is reused dur  private preanalyzeTempl    if (decorator !== undefined) {
      return {
         } else {
      return undefined;  }  preanalyze(node: ClassDeclaration, decorator: Readonly<Decorator>): Promise<void>|undefined {
      // These resources are:    // - the templateUrl, if there is one    if (!thi        // producing a diagnostic.
        return undefined;
     valuator, this.resourceLoader, this.depTracker, this.preanalyzeTemplateCache,
decorator, component, containingFile, this.defaultPreserveWhitesp(te return undefined;rn Promise.all(template.styleUrls.map(styleUrl => resolveStyleUrl(styleUrl)))
      let inlineStyles;      const litStyles = parseDirectiveStyles(component, this.evaluator, this.compilastyles => {            .all([n        .then(() => undefined);
  }  analyze(node: ClassDeclaration, decorator: Readonly<Decorator>):    this.perf.eventCount(PerfEvent.AnalyzeComponent);
    const containingFile = node.getSourceFile().fileName;
    this.literalCache.delete(decorator);    let diagnostics: ts.Diagnostic[]|undefined;
             this.elementSchemaRegistry.getDefaultComponentElementName());
    if (directiveResult === undefined) {         return {};
          resolveEnumValue(this.evaluator, component, 'en    const changeDetection: number|null =
        resolveEnumValue(this.evaluator, component, '      animations = new WrappedNodeExpr(animationExpression);luator.evaluate(animationExpression, animationTriggerResolver);
      animationTriggerNames = {includesDynamicAn          }    // `providersRequiringFactory` into a single set, but we keep the separate so that
    // we can distinguish where an error is coming from when logging the diagnostics in `resolve`.
    let viewProvidersRequiringFactory: Set<Reference<ClassDeclaration>>|null = null;
         const viewProviders = component.get('viewProviders')!;
      viewProvidersRequiringFactory =
rovidersRequiringFactory(viewProviders, this.reflector, this.evaluator);
      wrappedViewProviders = new WrappedNodeExpr(
otateForClosureCompiler ? wrapFunctionEx    }    if (component.has('providers')) {
      providersRequiringFactory = resolveProvidersRequiringFactory(
t.get(    let rawImports: ts.Expression|null = component.get('imports') ?? null;    if (rawImports && !metadata.isStandalone) {
         }
      diagnostics.push(makeDiagnostic(s' .name, `Did you forget to add 'standalone: true' to this @Component?`)]));
           isPoisoned = true;
    } else if (this.compilationMode !== CompilationMode.LOCAL && rawImports) {      const importResolvers = combineResolvers([
        createModuleWithProvidersResolver(this.reflector, this.isCore),
        forwardRefResolver,
      ]);
      const imported = this.evaluator.evaluate(expr, importResolvers);AndFla        isPoisoned = true;
        if (diagnostics === undefined) {
ics = [];        diagnostics.push(...importDiagnostics);
      }
    }    let schemas: SchemaMetadata[]|nu      }
          schemas = [];    // If a preanalyze phase was executed, the template may already exist in parsed form, so check
    // the preanalyzeTemplateCache.
    // Extract a closure of the template parsing code so that it can be reparsed with different
         const preanalyzed = this.preanalyzeTemplateCache.get(node)!;
      this.preanalyzeTemplateCache.delete(node);      template = preanalyzed;
    } else {
      const templateDecl = parseTemplateDeclaration(
corator, component, containingFile, this     I18nLegacyMessageIdFormat: this.enableI18nLegacyMessageIdFormat,
rmalizeLineEndingsInICUs: this.i18nNormalizeLineEndingsInICUs,
sonedD        template.declaration.isInline ? {path: null, expression: componenton: template.sourceMapping.node
       // component.
    let styles: string[] = [];    const styleResources = extractS       ];    for (const styleUrl of styleUrls) {
             const resourceStr = this.resourceLoader.load(resourceUrl);
        styles.push(resourceStr);Tracker.addResourceDependency(node.getSourceFile(), absoluteFrom(resourceUrl));
        }
      } catch {
        if (this.depTracker !== null) {
nalysis of this file cannot be re-used if one of the style URLs couldution/lrl.source === ResourceTypeForDiagnostics.StylesheetFromDecorator ?
ceTypeForDiagnostics.StylesheetFromDecorator :
ceTypeForDiagnostics.StylesheetFromTemplate;sourceNotFoundError(styleUrl.url, styleUrl.nodeForError, resourceType)
 .toDiagnostic());
           const selectorError = checkCus        }
        if (this.preanalyzeStylesCache.has(node)) {        styles.push(...inlineStyles);
      }
    } else {
         if (this.resourceLoader.canPreprocess) {
        throw new Error('Inline resource process        const litStyles = parseDirectiveStyles(component, this.evaluator, this.compilationMode);
        if (litStyles !== null) {
yles = [...litStyles];
ush(...litStyles);         if (template.styles.length > 0) {
      styles.push(...template.styles);
    }         rawHostDirectives,ata,
: {entSelectors: template.ngContentSelectors,ation,
ation: template.interpolationConfig ?? DEFAULT_INTERPOLATION_CONFIG, will be replaced during the compilation step, after all `NgModule`s have been
zed and the full compilation scope for the component can be realized.
ns,xternalIds: this.i18nUseExternalIds,
ContextFilePath,
ts:Wrappe        },
     tClassMetadata(
 node, this.reflector, this.isCore, this.annotateForClosureCompiler,        providersRequiringFactory,
        viewProvidersRequiringFactory,
        inlineStyles,
        styleUrls,
        resources: {: templateResource,        i        rawImports,
        resolvedImports,        decorator: decorator?.node as ts.Decorator | null ?? null,
      },
      diagnostics,
    };      output.analysis!.meta.changeDetection = changeDetection;
    }
    r        analysis.typeCheckMeta, type    const ref = new Reference(node);
    t                exportAs: analysis.meta.exportAs,
      inputs: analysis.inputs,
      outputs: analysis.outputs,      hostDirectives: analysis.hostDirectives,
      ...analysis.typeCheckMeta,
      isPoisoned: analysis.isPoisoned,
         animationTriggerNames: analysis.animationTriggerNames,
      schemas: analysis.schemas,    this.injectableRegistry.registerInjectable(node, {
      ctorDeps: analysis.meta.deps,
    });
  }  index(    i    }
    const scope = this.scopeReader.getScopeForComponent(node);
    c         // Don't bother indexing components which had erroneous scopes, un        return null;
      }   addSelectables(        }
      }
    }
    const binder = new R3Targe      declaration: node,
      selector,
      boundTemplate,
      templateMeta: {
            },
    }  }  typeCheck(ctx: TypeCheckContext, node: ClassDeclaration, meta: Readonly<ComponentAnalysisData>):
      void {      return;
    }
    const scope = this.typeCheckScopeRegistry.getTypeCheckScope(node);
    if (scope.isPoisoned && !this.usePoisonedData) {
      // Don't type-check components that had errors in their scopes, unless requested.    }    const binder = new R3TargetBinder<        n        meta.meta.isStandalone);
  }  extendedTemplateChe      extendedTemplateChecker: ExtendedTemplateChecker): ts.Diagnostic[] {
    return extendedTemplateChecker.getDiagnosticsForComponent(component);
  }  resolve(
      node: ClassDeclaration, analysis: Readonly<ComponentAnalysisData>,
      symbol: ComponentSymbol): ResolveResult<ComponentResolutionData> {
    if (this.semanticDepGraphUpdater !== null && analysis.baseClass instanceof Reference) {
      symbol.baseClass = this.semanticDepGraphUpdater.getSymbol(analysis.baseClass.node);
    }    };      //
      // First it needs to be determined if actually importing the directives/pipes used in the
      // template would create a cycle. Currently ngtsc refuses to generate cycles, so an option
                // Determining this is challenging, because the TemplateDefinitionBuilder is responsible for
      // matching directives and pipes in the template; however, that doesn't run until the actual
      // compile() step. It's not possible to run template compilation sooner as it requires the
           //
      // Instead, directives/pipes are matched independently here, using the R3TargetBinder. This
      // is an alternative implementation of template matching which is used for template
      // type-checking and will eventually replace matching in the TemplateDefinitionBuilder.      // Set up the R3TargetBinder, as well as a 'directives' array and a 'pipes' map that are
   pendencies;      for (const dep of dependencies) {
        if (dep.kind === MetaKind.Directive && d      // BoundTarget, which is similar to a ts.TypeChecker.
      const binder = new R3TargetBinder(matcher);
      const bound = binder.bind({template: metadata.template.nodes});      // Find all defer blocks used in the template and for each block
         for (const deferBlock of bound.           const eagerlyUsed = new Set<ClassDeclaration>();
      for (const dir of bound.getEagerlyUsedDirectives()) {
           for (const name of bound.getEagerlyUsedPipes()) {
           }      // Set of Directives and Pipes used across the entire template,
      // including all `{#defer}` blocks.      for (const bound of deferBlocks.values()) {
          es.has(name)) {        }
      }      const declarations = new Map<ClassDeclaration, UsedPipe|UsedDirective|UsedNgModule>();      // Transform the dependencies list, filtering out unused dependencies.
      for (const dep of dependencies) {
        // Only emit referenceaKind.Directive:
holeTemplateUsed.has(dep.ref.node) || dep.matchSource !== MatchSource.Selector) {
inue;dirType = this.refEmitter.emit(dep.ref, context);
SuccessfulReferenceEmit(
 dirTy dep.ref,
: dirctouts: dep.outputs.propertyNames,
rtAs: dep.exportAs,
mponent: dep.isComponent,aKind.Pipe:inue;: R3TemplateDependencyKind.Pipe,
: pipeType.expression,
: dep.name,
 dep.ref,
rtedFile: pipeType.importedFile,aKind.NgModule:
ngModuleType = this.refEmitter.emit(dep.ref, context);: R3TrtedFile: ngModuleType.importedFile,  anticDepGfrom(declarations.values()).filter(isUsedDirective).map(getSemanticReference);
         }      const eadecl.kind === R3TemplateDependencyKind.NgModule ||
rlyUsed.has(decl.ref.node));      // Process information related to `{#defer}` blocks
         // import which needs to be generated would create a cycle. This check is skipped for
      // standalone components as the dependencies of a standalone component have already been
      // imported directly by the user, so Angular won't introduce any imports that aren't already
      // in the user's program.
      if (!metadata.isStandalone) {
           // array to be wrapped in a closure. This check is technically a heuristic as there's no
   .r        // No cycle was detected. Record the imports that need to be created in the cycle detector
        // so that future cyclic import checks consider their production.
        for (const {type, importedFile} of eagerDeclarations) {
beRecordSyntheticImport(importedFile, type, context);
        }        // Check whether the dependencies arrays in ɵcmp need to be wrapped in a closure.
        // This is required if any dependency reference is to a declaration in the same file
     > isExpressionForwardReference(decl.type, node.name, context));        const wrapDirectivesAndPipesInClosure =
ationIsForwardDeclared || standaloneImportMayBeForwardDeclared;        data.declarations = eagerDeclarations;
        data.declarationListEmitMode = wrapDirectivesAndPipesInClosure ?
ation      } else {
        if (this.cycleHandlingStrategy === CycleHandlingStrategy.UseRemoteScoping) {
ring the directiveDefs/pipeDefs arrays directly would require imports that would
e a cycle. Instead, mark this component as requiring remote scoping, so that thepeRegistry.setComponentRemoteScope(
, eagerDeclarations.filter(isUsedDirective).map(dir => dir.ref),
rDeclarations.filter(isUsedPipe).map(pipe => pipe.refmoduleSymbol = this.semanticDepGraphUpdater.getSymbol(scope.ngModule);
moduleSymbo   `AssertionError: Expected ${scope.ngModule.name} to be an NgModuleSymbol.`);Symbol.addRemotelyScopedComponent(
 symbol, symbol.usedDirectives, symbol.usedPipes or more import cycles would need to be created to compile this component, ' +
   'which is not supported by the current compiler configuration.',
tedMessages);      }
   .resolvedImports, analysis.rawImports, this.metaReader, this.scopeReader);
      diagnostics.push(...standaloneDiagnostics);
    }ectableRegistry);
      diagnostics.push(...providerDiagnostics);
    }      const viewProviderDiagnostics = getProviderDiagnostics(
.view           if (directiveDiagnostics !== null) {
      diagnostics.push(...directiveDiagnostics);        validateHostDirectives(
is.rawH       }    if (diagnostics.length > 0) {      void {
    ctx        analysis.template.interpolationConfig ?? DEFAULT_INTERPOLATION_CONFIG);    const containingFile = node.getSourceFile().fileName;    // If the template is external, re-parse it.
    const templateDecl = analysis.template.declaration;
    if (!templateDecl.isInline    // path
    let styles: string[] = [];
    i        try {
solvedStyleUrl = this.resourceLoader.resolve(styleUrl.url, containingFile);
yleTex. We do not need to do anything with them when updating resources.
        }
      }
         for (const styleText of analysis.inlineStyles) {
        styles.push(styleText);
      }    f      node: ClassDeclaration, analysis: Readonly<ComponentAnalysisData>,
      resolution: Readonly<ComponentResolutionData>, pool: ConstantPool): CompileResult[] {
    if (analysis.template.errors !== null && analysis.template.errors.length > 0) {
      return [];
    }    // Deferrable symbol name -> corresponding import path.
    const deferrableTypes = new Map<string, string>();    // Go over all dependencies of all defer blocks and update the value of
    // the `isDeferrable` flag and the `importPath` to reflec    for (const [_, deferBlockDeps] of resolution.deferBlocks) {
             const classDecl = dep.classDecckDep.imp    const fac = compileNgFactoryDefField(toFactoryMetadata(meta, FactoryTarget.Component));    if (analysis.classMetadata) {
         cs.classMetadat    }    const def = compileComponentFromMetadata(meta, pool, makeBindingParser());
    const inputTransformFiel        compileComponentClassMetadata(analysis.classMetadata, deferrableTypes).toStmt() :
       if (analysis.template.errors !== null && analysis.template.errors.length > 0) {
      return [];
    }
    const templateInfo: DeclareComponentTemplateInfo = {
      content: analysis.template.content,
         return compileResults(
       if (analysis.template.errors !== null && analysis.template.errors.length > 0)    }    const meta: R3ComponentMetadata<R3TemplateDependency> = {
      ...analysis.meta,
      declarationListEmitMode: (!analysis.meta.isStandalone || analysis.rawImports !== null) ?
ionListEmitMode.RuntimeResolved :
ionListEmitMode.Direct,
      declarations: EMPTY_ARRAY,
      def    };    const fac = compileNgFactoryDefField(toFactoryMetadata(meta, FactoryTarget.Component));
    const def = compileComponentFromMetadata(meta, pool, makeBindingParser());
    c        compileClassMetadata(analysis.classMetadata).toStmt() :    return compileResults(
        fac, def, classMetadata, 'ɵcmp', inputTransformFields,    * Check whether adding an import from `origin` to the source-file corresponding to `expr` would
   * create a cyclic import.
   *   */
  private _checkForCyclicImport(
      importedFile: ImportedFile, expr: Expression, origin: ts.SourceFile): Cycle|null {
    const imported = resolveImportedFile(this.moduleResolver, importedFile, expr, origin);      return null;
    }
    // Check whether the import is legal.
    return this.cycleAn      importedFile: ImportedFile, expr    if (imported === null) {    }    this.cycleAnalyzer.recordSyntheticImport(origin, imported);
  }  /**
   * Resolv   */
  private resolveDeferBlocks(      deferrableDec        if (decl.kind === R3TemplateDependencyKind.NgModule) {
;
        }irectives.has(decl.ref.node)) {
;          }
        // Collect initial information about this dependency.
       me: decl.ref.node.name.escapedText as string,
able: false,
th: null,
 info to match corresponding import during the `compile` phase.
larat      resolutionData.deferBlocks.set(deferBlock, deps);
    }    // For standalone component    // for defer loading.
    i      for (const node of analysisData.rawImports.elements) {
       ;
        }        const imp = this.reflector.getImportOfIdentifier(node);
     ;
        }        const decl = this.reflector.getDeclarationOfIdentifier(node);
       ; defe        }        // Are we even tryin        const dirMeta = this.metaReader.getDirectiveMetadata(new Reference(decl.node));
               }        // Is it a standalone pipe?        }        if (dirMeta === null && pipeMeta === nul;
        }        // Keep track of how this class made it into the current source file
        // (which ts.ImportDec    importRefs: Reference<ClassDeclaration>[], importExpr: ts.Expression,
    metaReader: MetadataReader, scopeReader: ComponentScopeReader): ts.Diagnostic[] {
  con    const dirMeta = metaReader.getDirectiveMetadata(ref);
    if (dirMeta !== null) {
            }
      continue;
    }    const pipeMeta = metaReader.getPipeMetadata(ref);
           diagnostics.push(makeNotStandaloneDiagnostic(scopeReader, ref, importExpr, 'pipe'));
      }
      continue;    i