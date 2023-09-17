/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * Primary template type-che * `ProgramTypeCheckAdapter` for generation of templatexport class TemplateTypeCheckerImpl implements Template   * Stores the `CompletionEngine` which powers autocompletion for each component class.
   *
   * Must be invalidated whenever the component's template or the `ts.Program` changes. Invalidation
   * on template changes is performed within this `TemplateTypeCheckerImpl` instance. When the
   * `ts.Program` changes, the `TemplateTypeCheckerImp  private completionCache = new Map<ts.ClassDeclaration,   * Must be invalidated whenever the component's template or the `ts.Program` changes. Invalidation
   * on template changes is performed within this `TemplateTypeCheckerImpl` instance. When the
   * `ts.Program` changes, the `TemplateTypeCheckerImpl` as a whole is destroyed and replaced.
   */
  private symbolBuilderCache = new Map<ts.ClassDeclara   *   */
  private scopeCache = new Map<ts.ClassDeclaration, ScopeData>();  /**
   * Stores potential element tags for each component (a union of DOM tags as well as directive
   * tags).
   *   * destroyed when the `ts.Program` changes and t   */      private refEmitter: ReferenceEmitter, private reflector: ReflectionHost,
      private compilerHost: Pick<ts.CompilerHost, 'getCanonicalFi      private readonly metaReader: MetadataReader,
      private readonly localMetaReader: MetadataReaderWithIndex,
      private readonly ngModuleIndex: NgModuleIndex,
      private readonly componentScopeReader: ComponentScopeReader,      private readonly perf: PerfRecorder) {}  getTemplate(component: ts.ClassDeclaration): TmplAstNode[]|null {
    const {data} = this.getLatestComponentState(component);
    if (data === null) {  }  private getLatestComponentState(component: ts.ClassDeclaration):
      {data: TemplateData|null, tcb: ts.Node|null, tcbPath: Absol    const sfPath = absoluteFromSourceFile(sf);
    const shimPath = TypeCheckShimGenerator.shimFor(sfPath);    const fileRecord = this.getFileData(sfPath);    if (!fileRecord.shimData.has(shimPath)) {
      return {data: null, tcb: null, tcbPath: shimPath, tcbIsShim: true};
    }    const templateId = fileRecord.sourceManager.getTemplateId(component)    const id = fileRecord.sourceManager.getTe      throw new Error(`Error: no shim file in program: ${shimPath}`);
    }    let tcb: ts.Node|null = findTypeCheckBlock(shimSf, id, /*isDiagnosticsRequest*/ false);    let tcbPath = shimPath;
    if (tcb === null) {
      // Try for an inline block.      tcb = findTypeCheckBloc        return this.getFileAndShimRecordsForPath(filePath) !== null;
  }    if (!isShimFile) {
      // The location is not within a shim file but corresponds w      } else {
        return null;    }    // The location is within a type-checki    const records = this.getFileAndShimRecordsForPath(tcbPath);
    if (records !== null) {
           return null;  }  private getFileAndShimRecordsForPath(shi    }
    r    const fileRecord = this.getFileRecordForTcbLocation(tcbLocation);      return null;
    }    const shimSf = this.programDriver.getProgram().getSourceFile(tcbLocation.tcbPath);
    if (shimSf === undefined) {    }        shimSf, tcbLocat   * most recent type-checking program.
            case OptimizeFor.SingleFile:
        this.ensureAllShimsForOneFile(sf);
         if (fileRecord.hasInlines) {
        const inlineSf = getSourceFileOrError(typeCheckProgram, s        const shimSf = getSourceFileOrError(typeCheckProgram, shimPath);
        diagnostics.push(...typeCheckProgram.getSemanticDiag             }    });
  }  getDiagnosticsForComponent(component: ts.ClassDeclaration): ts.Diagnostic[] {
    t      const sfPath = absoluteFromSourceFile(sf);         const shimRecord = fileRecord.shimDa      diagnostics.push(...typeCheckProgram.getSemanticDiagnostics(shimSf).map(
diag (diag: TemplateDiagnostic|null): diag is TemplateDiagnostic =>    });
  }    }  getGlobalCompletions(
      context: TmplAstTemplate|null, component: ts.ClassDeclaration,    const engine = this.getOr    return this.perf.inPhase(
            return null;
    }
       const templateId = fileData.sourceManager.getTemplateId(clazz);    fileData.shimData.delete(shimPath);
    fileData.isComplete = false;    this.isComplete = false;        end: number,
        sourceFile: ts.SourceFile,    c      ...makeTemplateDiagnostic(    };
  }      return this.completionCache.get(component)!;
    }    this.completionCache.set(component, engine);
    return engine;    const sfPath = absoluteFromSourceFile(sf);      const existingResults = this.state.get(sfPath)!;      if (existingResults.isComplete) {
       if (previousResults === null || !previ        }        this.maybeAdoptPriorResultsForFile(sf);        const sfPath = absoluteFromSourceFile(sf);
         this.perf.inPhase(PerfPhase.TcbGeneration, () => {      if (fileData.isComplete) {
            const sf = component.getSourceFile();
    const sfPath = absoluteFromSourceFile(sf);      // All data for this co   * they won't overwrite or corrupt existing inlines that are used by such shims.
              }
      }      fileData.hasInlines = false;
       if (!this.state.has(path)) {        hasInlines: false,
        sourceManager: new Templ        shimData: new Map(),
       return this.state.get(path)!;  getSy  getSymbolOfNode(node: AST|TmplAstNode, component: ts.ClassDeclaration): Symbol|null {
    const builder = this.getOrCreateSymbolBuilder(component);
    if (builder === null) {    }    if (tcb === null || data === null) {        () => this.programDriver.getProgram().getTypeChecker());
       const inScopeDirectives = this.getScopeData(component)?.directives ?? [];
    c    for (const directiveClass of this.localMetaReader.getKnown(MetaKind.Directive)) {
      const directiveMeta = this.metaReader.getDirectiveMetada      if (withScope === null) continue;    }  }  getPotentialPipes(component: ts.ClassDeclaration): PotentialPipe[] {
       }           if (resultingPipes.has(pip  }  getP      return null;    return this.metaReader.getPipeMetadata(new Reference(pipe));
  }          }    return attributes.map(attribute => ({
    }       }    const ngModuleMeta = this.metaReader.getNgModuleMetadata(ref);
    if (ngModuleMeta !== null) {
      return ngModuleMeta.decorator;  }  getOwningNgModule(component: ts.ClassD      return null;    if (dirMeta !== null && dirMeta.isStandalone) {
      return null;    i      return null;
          .getTypeChecker()
  .getTypeAtLocation(emitted.node)
  .           emitted.value.name !== null) {
      r        moduleSpecifier: emitted.value.moduleName,
       if (exportingNgModules !== null) {        const emittedRef = this.emit(PotentialImportKind.NgModule, exporter, inContext);
        if (emittedRef !== null)        }
     }  private getScopeData(component: ts.      r      throw new Error(`AssertionError: components must have names`);
    }    const scope = this.componentScopeReader.getScopeForComponent(component);
    if (scope === null) {    }        const dirScope = this.scopeDataOfDi        data.pipes.push({...pipeScope, isInScope: true});
         // Skip this directive, it can't be added to a template anyway.
           ngModule = moduleScopeOfDir.ngModule;
    }    return {      selector: dep.selector,      ngModule,  }    const tsSymbol = typeChecker.getSymbolAtLocation(dep.ref.node.name);
         tsSymbol,  }    diag: ts.Diagnostic, sourceResolver: Tem *  */
expor   * Whether the type-checking shim required any inli      *   * Data for each shim generated from this input file.
      * t  shimData: Map<AbsoluteFsPath, ShimTypeCheckin   * type-checking code generated into shims.
   }/      protected sfPath: AbsoluteFsPath, protected fileData: FileTypeCheckingData,      return false;
       } * whclass SingleShimTypeCheckingHost extends SingleFileTypeCheckingHost {
  constructor(
      sfPath: AbsoluteFsPath, fileData: FileTypeCheckingData       }    // Only generate a TCB for the     if (shimPath !== this.shimPath) {  }
}/**  dir  isPoisoned: boolean;
}