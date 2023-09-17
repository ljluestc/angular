/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    if (!options.disableTypeScri    }    //     if (options.compilationMode === 'experimental-local') {
      options.noEmitOnError     }    this.tsProgram = perfRecorder.inPhase(        () => ts.createProgram(this.host    // the program.
    untagAllTsFiles(this.tsProgr         con      const strings = this.host.getModifiedResourceFiles();
      if (strings !== undefined)      }    if (oldProgram === undefined    } else {
      ticket = incrementalFromCompilerTicket(
am.corementalStrategy,ResourceFiles,      );    return this.compiler.getCurrentProgram();
  }  getTsOptionDiagnostics(canc         ret      let res: readonly ts.Diagnostic[];
      if (sourceFile !== undefin      } else {stics.push(...this.tsProgram.getSyntacticDiagnostics(sf, cancellationToken));        }
        res = diagnostics;      return res;
    });
  }  getTsSemanticDiagnostics(
         // No TS semantic check should be done in local c    if (this.options.compilationMode ===oredFiles.has(sf)) {
sti      }    });    r      fileName?: strin    let sf: ts.SourceFile|undefined = undefined;
    if (fileName !== undefined)       }      return this.compiler.getDiagnosticsForFile(sf, OptimizeFor.WholeProgram  }  /**
   * Ensure that the `NgCompiler` has properly analyzed the pro   *
   * This is used by the Angular CLI to allow for spawning (async) child compilations for things
     loadNgStructureAsync(): Promise<void> {
    r    return [];    const ctx = new MessageBundle(new Htped: true,
ile      const {transformers} =    co        beforeTransforms.push(...customTransforms.beforeTs);
      }      const emitResults: CbEmitRes[] = [];      for (const targetSourceFile of this.tsProgram.getSourceFiles()) {
        if (targetSourceFile.isDeclarationFile || ignoreFiles.has(targetSourceFile)) {
; this.tsProgram,: beforeTransforms,ecl        }));
      }      this.compiler.perfRecorder.memory(PerfCheckpoint.E      return ((opts && opts.mergeEmitResultsCallback) || mergeEmitResults)(emitResults);
    });    // Record performance analysis information to disk if we've been asked to do so.
         getFileSystem().writeFile(
ystem    return this.compiler.getIndexedComponents();}const defaultEmitCallback: api.TsEmitCa