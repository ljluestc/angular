/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  beforeTs?: ts.Transfor}exp   forceEmit?: boolean;  customTransformers?: CustomTransformers;  mergeEmit    * collect Angular structural in  getTsOptionDiagnostics(cancellationToken?: ts.CancellationToken): ReadonlyArray<ts.Diagnostic>;  /**
   * Retrieve options diagnos  getNgO       ReadonlyArray<ts.Diagnostic>;  /**
   * Retrieve the diagno    * Note it is impo   * semantic analysis and a semantic error might cause errors in specifying the program structure.
    */      ReadonlyArray<ts.Diagnostic>;  /**
    */   * Emit the files requested by emitFlags implied by the   * Angular structural information is required to emit files.
    * @internal  getEmittedSourceFiles(): Map<string, ts.SourceFile>;