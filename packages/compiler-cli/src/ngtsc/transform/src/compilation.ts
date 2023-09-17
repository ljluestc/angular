/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  node: ClassDeclaration;  /**
   * All traits which matche   * Angular decorators are not permitted.
   */  // mutable state during the `detect`/`analyze` phases of compilation.  /**
   * Whether `traits` contains traits mat  hasWeakHandlers: boolean;  /**   */
  hasPrimaryHandler: boolean;
}/**
 * The heart of Angular c * class (such as the class having a component definition). * The `TraitCompiler` transitions each trait through the various phases of compilation, culminating
 * in the production of `CompileResult`s  */  /**   * those classes.
   */
    * Ivy traits.
   */   */      new Map<string, DecoratorHandler<unknown, unknown, SemanticSymbol|null, unknown>>();  constructor(
      private handlers: DecoratorHandler<      private perf: PerfRec      private compileNonExportedClasses      private dtsTransforms: DtsTransformRegistry,
      private semanticDepGraphUpdater: SemanticDepGraphUpdater|null,
     }
  }  analyzeSync(sf: ts.S  private analyze(sf: ts.SourceFile, preanalyze: boolean): Promise<void    // type of 'void', so `undefined` is used instead.    const priorWork = (this.compilationMode !== CompilationMode.LOCAL) ?
        this.incrementalBuild.priorAnalysisFor(sf) :
        null;
    if (priorWork !== null)        for (const priorRecord of prior        }        this.perf.eventCount(PerfEvent.TraitReuseAnalysis, priorWork.length);
      } else {
       if (this.reflector.isClass(node)) {
         ts.forEachChild(    }    const result = new Map<ts.SourceFile, ClassRecord[]>();        records.push(this.classes.get(clazz)!);
      }
      result.set(sf, records);
    }    return result;   * Impo   *
   * Traits from the `ClassRecord` have accurate metadata, but the `handler` is from the old program
       metaDiagnostics: priorRecord.metaDiagnostics,
       };    for (const priorTrait of priorRecord.traits) {
      Trait.pending(        trait = trai      this.fileToClasses.set(sf, new Set<ClassDeclaration>());
    }      if (result === undefined) {      const trait = Trait.pending(handler, result);      foundTraits.push(trait);      if (record === null) {
        // This is the first handler to match this class. This path is a fast path through which
        // most classes will flow.
        record = {hasPrimaryHandler: isPrimaryHandler,
has        const sf = clazz.getSourceFile();
        i        }
        this.fileToClasses.get(sf)!.add(clazz);
 // The current handler is not a WEAK handler, but the class has other WEAK handlers.
//     re        } else if (isWeakHandler && !record.hasWeakHandlers) {
// Thecontinue;// Th  category: ts.DiagnosticCategory.Error,  length: clazz.getWidth(),
  m      }
    }    return foundTraits.length > 0 ? foundTraits : null;
  }  private makeSymbolForTrait(
       }    if (symbol !== null && this.semanticDepGraphUpdater !== null) {              if (preanalyzeQueue !== null && trait.handler.preanalyze !== undefined) {
        // Attempt to run preanalysis. This could fail with a `FatalDiagnosticError`; catc  trait.toAnalyzed(null, [err.toDiagnostic()], null} else {}
        }
      }
      if (preanalysis !== null) {
        preanalyzeQueue!.push(preanalysis.then(analyze));        analyze();
      }
         throw new Error(`Attempt to analyze trait of ${clazz.name.text} in state ${
TraitStat    let result: AnalysisOutput<unknown>;
    try {
      result = trait.handler.analyze(clazz, trait.detected.me        throw err;
         if (this.compilationMode !== CompilationMode.LOCAL && result      trait.handler.register(clazz, result.analysis);
    }
       //    if (this.compilationMode === CompilationMode.LOCAL) {
          for (const  continue;case TraitState.Resolved:
  tresult = handler.resolve(clazz, trait.analysis as Readonly<unknown>, trait.symbol);
       trait = trait.toResolved(null, [err.toDiagnostic()]);
  c  throw err;
}  this.reexportMap.set(fileName, new Map<string, [strinconst fileReexports = this.reexportMap.get(fileName)!;                }
      }    }    if (classes === undefined)    }    const diagnostics: ts.Diagnostic[] = [];
    for (const clazz of classes) {
      if (!isNamedClassDeclaration(clazz)) {
        continue;
      }      for (const trait of record.traits) {
        if (trait.handler.extendedTemplateCheck === undefined) {
con  }  index(ctx: IndexingContext): void {
    for (        } else if (trait.handler.index === undefined) {
// Skip traits that don't affect indexing.
continue;
               }    }
  }  xi18n(bundle: Xi18nContext): void {
    f// Skip traits that haven't been analyzed successfully.        } else if (trait.handler.xi18n === undefined) {
// Skip traits that don't support xi18n.
con        }  updateResources(clazz: DeclarationNode): void {
    //    }        c    }
  }    if (!this.reflector.isClass(clazz) || !this.reflector.isClass(original) ||
        !this.classes.has(original)) {
     containsErrors(trait.resolveDiagnostics)) {
// Cacontinue;
           // `Readonly<unknown>` is nullable (as `unknown` itself is nullable) due to the way that
         }      const compileMatchRes = compileRes;
      if (Array.isArray(compileMatchRes)) {
        for (const result of compileMatchRes) {
if (!}      } else if (!res.some(result => result.name === compileMatchRes.name)) {
            for (const clazz of this.classes.keys()) {
      const record = this.classes.get(clazz)!;
      if (record.metaDiagnostics !== nulldiagnostics.push(...trait.analysisDiagnostics);
        }diagnostics.push(...(trait.res         return diagnostics;
  }  get exportStatements(): Map<string, Map<string, [string, string]>> {
    return this.reexportMap;
  }
}function containsErrors(diagnostics: ts.Diagnostic[]|null): b      diagnostics.some(diag => diag.category === ts.DiagnosticCategory.Error);
}
