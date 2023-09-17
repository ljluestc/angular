/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */import {StandaloneComponentSimport {TemplateTypeCheckerImpl} from '../../typecheck';
import {OptimizeFor, TemplateTypeChecker, TypeCheckingConfig} from '../../typecheck/api';
import {ALL_DIAGNOSTIC_FACTORIES, ExtendedTemplateCheckerImpl} from '../../typecheck/extended';
import {ExtendedTemplateChecker} from '../../typecheck/extended/api';
import {getSourceFileOrNull, isDtsPath, toUnredirectedSourceFile} from '../../util/src/typescript';
import {Xi18nContext} from '../../xi18n';
import {DiagnosticCategoryLabel, NgCompilerAdapter, NgCompilerOptions} from '../api';/**
 * State information about a compilation which is only generated once some data is requested from
 * the `NgCompiler` (for example, by calling `getDiagnostics`).
 */
interface LazyCompilationState {  traitCompiler: TraitCompiler;
  reflector: TypeScriptReflectionHost;
  metaReader: MetadataReader;
  scopeRegistry: LocalModuleScopeRegistry;
  typeCheckScopeRegistry: TypeCheckScopeRegistry;  dtsTransforms: DtsTransformRegistry;
  aliasingHost: AliasingHost|null;
  refEmitter: ReferenceEmitter;
  templateTypeChecker: TemplateTypeChecker;
  resourceRegistry: ResourceRegistry;}/**
 * Discriminant type for a `CompilationTicket`.
 */
export enum CompilationTicketKind {
  Fresh,  IncrementalResource,
}/**
 * Begin an Angular compilation operation from scratch.
 */
export interface FreshCompilationTicket {  options: NgCompilerOptions;
   enableTemplateTypeChecker: boolean;
  usePoisonedData: boolean;
  tsProgram: ts.Program;
  perfRecorder: ActivePerfRecorder;
}/**
 * Begin an Angular compilation operation that incorporates changes to TypeScript code.
   kind: CompilationTicketKind.IncrementalTypeScript;
  options: NgCompilerOptions;
  newProgram: ts.Program;
  incrementalBuildStrategy: IncrementalBuildStrategy;
   enableTemplateTypeChecker: boolean;
  usePoisonedData: boolean;
   kind: CompilationTicketKind.IncrementalResource;
  compiler: NgCompiler;
  modifiedResourceFiles: Set<string>;
  perfRecorder: ActivePerfRecorder;
} *
 * `CompilationTicket`s are used to initialize (or update) an `NgCompiler` instance, the core of the
     IncrementalResourceCompilationTicket;/**
 * Create a `CompilationTicket` for a brand new compilation, using no prior state.
 */
export function freshCompilationTicket(
   return {
    kind: CompilationTicketKind.Fresh,
     enableTemplateTypeChecker,    perfRecorder: perfRecorder ?? ActivePerfRecorder.zeroedToNow(),
  };
}/**
 * Create a `CompilationTicket` as efficiently as possible, based on a previous `NgCompiler`
     incrementalBuildStrategy: IncrementalBuildStrategy, programDriver: ProgramDriver,
    modifiedResourceFiles: Set<AbsoluteFsPath>,
    perfRecorder: ActivePerfRecorder|null): CompilationTicket {
   if (oldState === null) {
    // No incremental step is possible he    return freshCompilationTicket(
        newProgram, oldCompiler.options, incrementalBuildStrategy, programDriver, perfRecorder,
     perfRecorder = ActivePerfRecorder.zeroedToNow();
  }  const incrementalCompilation = IncrementalCompilation.incremental(
     usePoisonedData: oldCompiler.usePoisonedData,
    options: oldCompiler.options,
    incrementalBuildStrategy,
     newProgram,
    perfRecorder,}/**
 * Create a `CompilationTicket` directly from an old `ts.Program` and associated Angular compilation
     options: NgCompilerOptions, incrementalBuildStrategy: IncrementalBuildStrategy,
       usePoisonedData: boolean): CompilationTicket {
       newProgram, versionMapFromProgram(newProgram, programDriver), oldProgram, oldState,
      modifiedResourceFiles, perfRecorder);
  return {
    kind: CompilationTicketKind.IncrementalTypeScript,
    newProgram,
     incrementalCompilation,
    programDriver,   };
}export function resourceChangeTicket(compiler: NgCompiler, modifiedResourceFiles: Set<string>):
     modifiedResourceFiles,
   }/**
  * incremental.
 *
 * `NgCompiler` is lazy, and does not perform any of the work of the compilation until one of its
 * output methods (e.g. `getDiagnostics`) is called.
 *
 * See the README.md for more information.
 */
export class NgCompiler {
  /**    */
    *
    * diagnostics because the template type checker memoizes them itself.
      */
  private nonTemplateDiagnostics: ts.Diagnostic[]|null = null;  private closureCompilerEnabled: boolean;
  private currentProgram: ts.Program;  private moduleResolver: ModuleResolver;
  private resourceManager: AdapterResourceLoader;
  private cycleAnalyzer: CycleAnalyzer;
  private enabledBlockTypes: Set<string>;
  readonly ignoreForDiagnostics: Set<ts.SourceFile>;
  readonly ignoreForEmit: Set<ts.SourceFile>;
  readonly enableTemplateTypeChecker: boolean;  /**
   * `NgCompiler` can be reused for multiple compilations (for resource-only changes), and each
   * new compilation uses a fresh `PerfRecorder`. Thus, classes created with a lifespan of the
   * `NgCompiler` use a `DelegatingPerfRecorder` so the `PerfRecorder` they write to can be updated
   * with each fresh compilation.
    * Convert a `CompilationTicket` into an `NgCompiler` instance for the requested compilation.
    * compilation entirely.
 .options,
.ts.incrementalBuildStrategy,
entalCompilation.fresh(.enableTemplateTypeChecker,
.usePoisonedData,        );
      case CompilationTicketKind.IncrementalTypeScript:
        return new NgCompiler(
r,
.options,
.newProgram,
.programDriver,.incrementalCompilation,
.enableTemplateTypeChecker,
.usePoisonedData,
.perfRecorder,
        );
     }
       readonly programDriver: ProgramDriver,
      readonly incrementalStrategy: IncrementalBuildStrategy,
     ) {
    this.enableTemplateTypeChecker =
       this.constructionDiagnostics.push(
        ...this.adapter.constructionDiagnostics, ...verifyComp        adapter.entryPoint !== null ? getSourceFileOrNull(inputProgram, adapter.entryPoint) : null;    const moduleResolutionCache = ts.createModuleResolutionCache(
        this.adapter.getCurrentDirectory(),        // `this` internally then a closure created here would retain them. This can cause major
        // memory leak issues since the `moduleResolutionCache` is a long-lived object and finds its
        // way into all kinds of places inside TS internal objects.
        this.adapter.getCanonicalFileName.bind(this.adapter));
    this.moduleResolver =
        new ModuleResolver(inputProgram, this.options, this.adapter, moduleResolutionCache);
    this.resourceManager = new AdapterResource        new ImportGraph(inputProgram.getTypeChecker(), this.delegatingPerfRecorder));
    this.incrementalStrategy.setIncrementalState(this.incrementalCompilation.state, inputProgram);    this.ignoreForDiagnostics =
        new Set(inputProgram.getSourceFiles().filter(sf => this.adapter.isShim(sf)));
    this.ignoreForEmit = this.adapter.ignoreForEmit;    let dtsFileCount = 0;
    let nonDtsFileCount = 0;
         nonDtsFileCount++;
       changedResources: Set<string>, perfRecorder: ActivePerfRecorder): void {
    this.livePerfRecorder = perfRecorder;
    this.delegatingPerfRecorder.target = perfRecorder;    perfRecorder.inPhase(PerfPhase.ResourceUpdate, () => {
      if (this.compilation === null) {        // be captured by the initial analysis pass itself.
        return;
      }      this.resourceManager.invalidate();      const classesToUpdate = new Set<DeclarationNode>();
      for (const resourceFile of changedResources) {
        for (const templateClass of this.getComponentsWithTemplateFile(resourceFile)) {
oUpdate.add(templateClass);
        }        for (const styleClass of this.getComponentsWi;      }
    });
  }  /**
   * Get the resource dependencies of a file.
   *
   * If the file is not part of the compilation, an empty array will be returned.
   */
  getResourceDependencies(file: ts.SourceFile): string[] {
    this.ensureAnalyzed();    return this.incrementalCompilation.depGraph.getResourceDependencies(file);
  }  /**   */
  getDiagnostics(): ts.Diagnostic[] {    diagnostics.push(...this.getNonTemplateDiagnostics(), ...this.getTemplateDiagnostics());
    if (this.options.strictTemplates) {
      diagnostics.push(...this.getExtendedTemplateDi    return this.addMessageTextDetails(diagnostics);
  }  /**
   * Get all Angular-related diagnostics for this compilation.
   *   */
  getDiagnosticsForFile(file: ts.SourceFile, optimizeFor: OptimizeFor): ts.Diagnostic[] {
     const compilation = this.ensureAnalyzed();
    const ttc = compilation.templateTypeChecker;
    const diagnostics: ts.Diagnostic[] = [];      diagnostics.push(...ttc.getDiagnosticsForComponent(component));      const extendedTemplateChecker = compilation.extendedTemplateChecker;
      if (this.options.strictTemplates && extendedTempla      }
    } catch (err: unknown) {
      i      }    }
    return this.addMessageTextDetails(diagnostics);
  }  /**
   * Add Angular.io error guide links to diagnostics for this compilation.
   */    return diagnostics.map(diag => {        return {ext:   }  /**    return this.constructionDiagnostics;
  }  /**
      * Compilation begins with an input `ts.Program`, and during template type-checking operations new
   * `ts.Program`s may be produced using the `ProgramDriver`. The most recent such `ts.Program` to
   * be produced is available here.
   *
   * This `ts.Program` serves two key purposes:
   *
   * * As an incremental s   *
      */    return this.currentProgram;
  }  getTemplateTypeChecker(): TemplateTypeChecker {      throw new Error(
mplateTypeChecker` does not work without `enableTemplateTypeChecker`.');
    }  }  /**
     getComponentsWithTemplateFile(templateFilePath: string): ReadonlySet<DeclarationNode> {
    const {resourceRegistry} = this.ensureAnalyzed();
    return resourceRegistry.getComponentsWithTemplate(resolve(templateFilePath));   * Retrieves the `ts.Declaration`s for any component(s) which use the given template file.
   */
  g   * Retrieves external resources for the given compo       const {resourceRegistry} = this.ensureAnalyzed();
       if (template === null) {
      return null;
    }    return {styles, template};
  }  getMeta(classDecl: DeclarationNode): PipeMeta|Dir      return null;    const ref = new Reference(classDecl);
    const {metaReader} = this.ensureAnalyzed();    if (meta === null) {
      return null;
    }  }  /**   * asynchronously.
   *
      * resources such as `styleUrls` are resolved asynchronously. In these cases `analyzeAsync` must
   * be called first, and its `Promise` awaited prior to calling any other APIs of `NgCompiler`.
   */    if (this.compilation !== null) {    }    await t              this.resolveCompilation(this.compilation.traitCompiler);   * program with Angular-added definitions.
       transformers: ts.CustomTransformers,
  }    let importRewriter: ImportRewriter;
    if (coreImportsFrom !== null) {
      importRewriter = new R3SymbolsImportRewriter(coreImportsFrom.fileName);
    } else {
      importRewriter = new NoopImportRewriter();
    }    const defaultImportTracker = new DefaultImportTracker();    const before = [
      ivyTransformFactory(egatingPerfRecorder, compilation.isCore, this.closureCompilerEnabled),
       ];    const afterDeclarations: ts.Trans    if (this.options.compilationMode !== 'experimental-local' &&
   ion.dtsTransforms, compilation.reflector, compilation.refEmitter,    }    // Only add aliasing re-exports to the .d.ts output if the `AliasingHost` requests it.
    if (compilation.aliasingHost !== null && compilation.aliasingHost.aliasExportsInDts) {
      afterDeclarations.push(aliasTransformFactory(c  }   *
     getIndexedComponents(): Map<DeclarationNode, IndexedComponent> {
    const compilation = this.ensureAnalyzed();
    const context = new IndexingContext();   * Collect i18n messages into the `Xi18nContext`.
   */
  x    if (this.compilation === null) {
       return this.compilation!;
  }      this.compilation = this.makeCompilation();
   ;
        }
         });
  }      traitCompiler.resolve();      // At this poin      this.incrementalCompilation.recordSuccessfulAnalysis(traitCompi  }  private get fullTemplateTypeCheck(): boolean {
    // Determine the strictness level of type checking based on compiler options. As
    // `strictTemplates` is a superset of `fullTemplateTypeCheck`, the former implies the latter.
    // Also see `verifyCompatibleTypeCheckOptions` where it is verified that `fullTemplateTypeCheck`
    // is not disabled when `strictTemplates` is enabled.
    con  }    // `strictTemplates` is a superse    // is not disabled when `strictTemplates` is enabled.
    const strictTemplates = !!this.options.strictTemplates;    const useInlineTypeConstructors = this.programDriver.supportsInlineOperations;    // First select a type-checking configuration, based on whether full template type-checking is
       if (this.fullTemplateTypeCheck) {
      typeCheckingConfig = {
        a        checkTemplateBodies: true,             str        checkTypeOfOutputEvents: strictTemplates,
               /        // - error TS2339: Property 'value' does not exist o        checkTypeOfDomReferences: strictTemplates,
           strictLiteralTypes: true,        suggestionsForSuboptimalTypeInference: this.enableTemplateTypeChecker && !strictTemplates,
         typeCheckingConfig = {
           // compilation is requested, which is a good proxy for "only in google3".
        alwaysCheckSchemaInTemplateBodies: this.closureCompilerEnabled,
        checkTypeOfInputBindings: false,
        strictNullInputBindings: false,
        honorAccessModifiersForInputBindings: false,
             checkTypeOfOutputEvents: false,        checkTypeOfDomEvents: false,
        checkTypeOfDomRefe        checkTypeOfPipes: false,
                 useInlineTypeConstructors,        // not checked anyways.
        suggestionsForSuboptimalTypeInference: false,
      };
       if (this.options.strictInputTypes !== undefined) {         if (this.options.strictInputAccessModifiers !== undefined) {
      typeCheckingConfig.honorAccessModifiersForInputBindings =
ions.strictInputAccessModifiers;       }
       }
    if (this.options.strictSafeNavigationTypes !== undefined) {
      typeCheckingConfig.strictSafeNavigationTypes = this.options.strictSafeNavigationTypes;
          if (this.options.strictAttributeTypes !== undefined) {
      typeCheckingConfig.checkTypeOfAttributes = this.options.strictAttributeTypes;
    }
       const diagnostics: ts.Diagnostic[] = [];
           continue;
           if (!(err instanceof FatalDiagnosticError)) {
r;        diagnostics.push(err.toDiagnostic());
      }
    }    const diagnostics: ts.Diagnostic[] = [];
           if (!(err instanceof F        }      }    this.incrementalStrategy.setIncrementalState(this.incremen  }      const compilation = this.ensureAnalyzed();
      this.nonTemplateDiagnostics = [...compilation.traitCompiler.diagnostics];
      if (this.entryPoint !== null && compilation.exportReferenceGraph !== null) {
        this.nonTemplateDiagnostics.push(...checkForPrivateExports(
ntryPoint, this.inputProgram.getTypeChecker(), compilation.exportReferenceGraph));
      }      *     or all files in the program    */
  private getExtendedTemplateDiagnostics(sf?: ts.SourceFile    const compilation = this.ensureAnalyzed();    if (!extendedTemplateChecker) {
         return compilation.traitCompiler.extendedTemplateCheck(sf, extendedTemplateChecker);
    }
    for (lation.traitCompiler.extendedTemplateCheck(sf, extendedTemplateChecker));  }      let ref      // with rootDirs. If so, then multiple directories may be mapped in the same "module
      /      // tions.rootDirs !== undefined && this.options.rootDirs.length        // imports.
         // resolution strategy.        // Finally, check if the reference is being written into a file within the project's .ts
           localImportStrategy,
           // No entrypoint is present and deep re-exports were requested, so configure the aliasing
        // system to generate them.
        aliasingHost = new PrivateExportAliasingHost(reflector);
      }
    } else {
             // First, try to use local identifiers if available.        // Then use aliased references (this is a workaround to StrictDeps checks).
        new AliasStrategy(        new UnifiedModulesStrategy(reflector, this.adapter.unifiedModulesHost),
       }     const dtsReader = new DtsMetadataReader(checker, reflector);    const localMetaReader: MetadataReaderWithIndex = localMetaRegistry;
    const depScopeReader = new MetadataDtsModuleScopeResolver(dtsReader, aliasingHost);
    const metaReader = new CompoundMetadataReader([localMetaReader, dtsReader]);
           new StandaloneComponentScopeReader(metaReader, ngModuleScopeRegistry, depScopeReader);         const metaRegistry = new CompoundMetadataRegistry([localMetaRegistry, ngModuleScopeRegistry]);
    const injectableRegistry = new InjectableClassRegistry(reflector, isCore);
    const hostDirectivesResolver = new HostDirective         exportReferenceGraph = new ReferenceGraph();
         referencesRegistry = new NoopReferencesRegistry();
    }    const dtsTransforms = new DtsTransformRegistry();    const resourceRegistry = new ResourceRegistry();    const deferredSymbolsTracker = new DeferredSymbolTracker(this.inputProgram.getTypeChecker());    // Note: If this compilation builds `@angular/core`, we always build in full compilation
    // mode. Code inside the core package is always compatible with itself, so it does not
              case 'full':
ionMode = CompilationMode.FULL;        case 'partial':
ionMode = CompilationMode.PARTIAL;        case 'experimental-local':
ionMode = CompilationMode.LOCAL;      }
    }          if (supportTestBed === false && compilatio support ("supportTestBed" option) cannot be disabled in partial compilation mode.');
    }
   e support ("supportJitMode" option) cannot be disabled in partial compilation mode.');
   ions.i18nUseExternalIds !== false,
ionuleResolver, this.cycleAnalyzer, cycleHandlingStrategy, refEmitter,
esRegistry, this.incrementalCompilation.depGraph, injectableRegistry,
DepGr      new PipeDecoratorHandler(
r, egatingPerfRecorder, supportTer, evaluator, metaReasureCompilerEnabled, this.options.onlyPublishPublicTypingsForNgModule           });    const templateTypeChecker = new TemplateTypeCheckerImpl(
        this.inputProgram, notifyingDriver, traitCompiler, this.getTypeCheckingConfig(), refEmitter,
        reflector, this.adapter, this.incrementalCompilation, metaReader, localMetaReader,
        ngModuleIndex, scopeReader, typeCheckScopeRegistry, this.delegatingPerfRecorder);    // Only construct the extended template checker if the configuration is valid and usable.
    const extendedTemplateChecker = this.constructionDiagnostics.length === 0 ?
                exportReferenceGraph,      typeCheckScopeRegistry,
      aliasingHost,      templateTypeChecker,      extendedTemplateChecker
    */
export function isAngularCorePackage(program: ts.Program): boolean {
  // Look  if (r3Symbols === null) {
    r  return r3Symbols.statements.some(stmt => {
           retur        return false;
      }      if       }
      // This definition matches.
      return true;
    * Since "strictTemplates" is a true superset of type checking capabilities compared to
 * "fullT    verifyCompatibleTypeCheckOptions(options: NgCompilerOptions):
        Generator<ts.Diagnostic, void, void> {
  i      category: ts.DiagnosticCategory.Error,
   https://angular.io/guide/template-typecheck
      `.trim(),
    });
  }  if (options.extendedDiagnostics && options.strictTemplates === false) {
    yield makeConfigDiagnostic({
           messageText: `1. Remove "strictTemplates: false" to enable it.
2. Remove "extendedDiagnos    });
  }  if          defaultCategory}".Allowed diagnostic categories are:      `.trim(),
    });
  }  const allExtendedDiagnosticNames =
           category: ts.DiagnosticCategory.Error,
        code: ErrorCode.CONFIG_EXTENDED_DIAGNOSTICS_UNKNOWN_CHECK,
     ${allExtendedDiagnosticNames.join('\n')}
        `.trim(),
      });
    }        messageText: `
Ang      });
   }function makeConfigDiagnostic({category, code, messageText}: {
  cat  messageText: string,  return {    code: ngErrorCode(code),    start: undefined,
    length: undefined,
   }cl    for (const {node} of references) {
      let sourceFile = node.get        sourceFile = ts.getOriginalNode(node).getSourceFile();
      }      // Only record local         this.graph.add(source, node);
      }  }
}clas      private delegate: ProgramDriver, private notifyNewProgram: (program: ts.Program) => void) {
    this.getSourceFileVersion = this.delegate.getSourceFileVersion?.bind(this);
  }  }  }  const versions = new Map<AbsoluteFsPath,     const sf = toUnredirectedSourceFile(possiblyRedirectedSourceFile);
    versions.set(absoluteFromSourceFile(sf), driver.getSourceFileVersion(sf));
  }
  return versions;
}
