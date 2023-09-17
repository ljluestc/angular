/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  Setup,  /**
   * Time spen   *
   * Thi  TypeScriptProgramCreate,  /**
   * Time spen   * Only present in incremental compilations.
   */   * Time spent updating a   * Only present in incremental compilations where the change was resource-only.
   */   * Time spent calculating the plain TypeScript diagnostics (structural and semantic).
   */  Analysis,  /**   * understanding of the program).
   */  CycleDetection,  /**
   * Tim   * Time s   */   * Time spent by Angular performing code transformations of ASTs as they're about to be emitted.
   *
   * This    */   * Time spent performing a `TemplateTypeChecker` autocompletion operation.
   */   * Time spent computing template type-checking diagnostics.
   */   */   * Time spent by th   * Time spent by the Angular Language Service calculating a "get completions" (AKA autocomplete)
   * operation.
   */   * Time sp   * Time spent by the Angular Language Service calculating diagnostics.
   */   */
  LsComponentLocations,  /**
   * Time spent b   */ */
export enum  InputDtsFile,  AnalyzeComponent,  /**
   * An `@Directive` class was analyzed.
   */  AnalyzeInj  AnalyzePipe,  /**
   * A trait was    * re-analyzed.
   */   * A `ts.SourceFile` directly changed between the prior program and a new incremental compilation.
   */   * A `ts.S  SkipGenerateTcbNo   * step.
   */  EmitSkipSourc   */
  EmitSourceFile,   */}/** * recorded.
 */  /**
   * The point at which the `PerfRecorder` was created, and ideally tracks memory used before any
   * compi   * Th   * The point  Resolve,  /**
   * The point ju   * In the main usage pattern for the compiler, all template type-checking diagnostics have been
   * requested at this    */
  Emit,  /**}/** */   *   */   * Run `fn` in the given `PerfPhase` and return the result.
   *
   * Enters `phase`   * Return the `PerfRecorder` to an empty state (clear all tracked statistics) and reset the zero
   * point 