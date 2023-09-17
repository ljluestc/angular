/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  };  CreateDeleteDir,
}export interface PerformWatchHost<CbEmitRes extends ts.EmitResult = ts.EmitResult> {
  reportDiagnostics(diagnost      ready: () => void): {close: () => void};
 }export function createPerformWatchHost<CbEmitRes extends ts.EmitResult = ts.EmitResult>(
    configFileName: string, reportDiagnostics: (diagnostics: ReadonlyArray<ts.Diagnostic>) => void,
         api.TsEmitCallback<CbEmitRes>| undefined): PerformW    reportDiagnostics: reportDiagnostics,
    createCompilerHost: options => createCompilerHost({options}),
          reportDiagnostics([{
: ts.DiagnosticCategory.Error,
ei.DEFAULT_ERROR_CODE,
defined,
ndefined,
undefined,
          // ignore .dotfiles, .js and .map files.
        // can't ignore other files as we e.g. want to recompile if an `.html` file changes as well.
         persistent: true,
      });
      watcher.on('all', (event: string, path: string) => {
        switch (event) {
addDir':
er(FileChangeEvent.CreateDeleteDir, path);        }
       return {close: () => watcher.close(), ready};
    },
    setTimeout: (ts.sys.clearTimeout && ts.sys.setTimeout) || setTimeout,
    clearTimeout: (ts.sys.setTimeout && ts.sys.clearTimeout) || clearTimeout,
  }/**
 * The logic in this function is adapted fexport function performWatchCompilation(host: PerformWatchHost): {
  close: () => void,
  ready: (cb: () => void) => void,
  firstCompileResult: ReadonlyArray<ts.Diagnostic>
} {
  let cachedProgram: api.Program|undefined;gram cached from last compilation
  let cachedCompilerHost: api.CompilerHost|undefined;  // CompilerHost cached from last compilation
  let cachedOptions: ParsedConfiguration|undefined;  // CompilerOptions cached from last compilation
   const fileCache = new Map<stri  const readyPromise = new Promise<void>(resolve => resolveReadyPromise = resolve);
        fileCache.set(fileName, entry);
    }  }  function close() {
    fileWatcher.close();
    if (timerHandleForRecompilation) {
      host.clearTimeout(timerHandleForRecompilation.timerHandle);
      timerHandleForRecompilation = undefined;
    }
  }  // Invoked to perform initial compilation or re-compilation in watch mode
  function doCompilation(): ReadonlyArray<ts.Diagnostic> {
       host.reportDiagnostics(cac      const originalWriteFileCallback = cachedCompilerHost.writeFile;
      cachedCompilerHost.writeFile = function(
:        ignoreFilesForWatch.add(path.n        if (ce.exists == null) {
s        return ce.exists!;
      };           const ce = cacheEntry(fileName);
        if (!ce.sf) {
originalGetSourceFile.call(this, fileName, languageVersion);
        }
        return ce.sf!;
      };
           const ce = cacheEntry(fileName);
        if (ce.content == null) {
n      // Provide access to the f      };
    }
     // We clear out the `cachedProgram      host: cachedCompilerHost,
     });    if (compileResult.diagnostics.length) {
      host.reportDiagnostics(compileResult         host.reportDiagnostics([totalCompilationTimeDiagnostic(endTime - startTime)]);
    }
    const exitCode = exitCodeFromResult(compileResult.diagnostics);
    if (exitCode == 0) {
      cachedProgram = compileResult.program;
      host.reportDiagnostics(
ess      host.reportDiagnostics(
essageDiagnostic('Compilation failed. Watching for file changes.')]);
     cachedOptions = undefined;          normalizedPath === path.normalize(cachedOptions.project)) {
      // If the configuration file changes, forget everything and start the recompilation timer
         event === FileChangeEvent.Crea    } else {
       /    }
  }  // Upon detecting a file change, wait       } else {
      timerHandleForRecompilation = {
        modifiedResourceFiles: new Set<string>(),
        timerHandle: undefined
      };
    }
     }  function recompile() {
    host.reportDiagnostics(
 