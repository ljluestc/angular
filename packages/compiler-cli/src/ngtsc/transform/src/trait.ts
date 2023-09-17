/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ * Pending export interface   state: T    */}/** * *}/**
 * A trait in the "analyzed" state.
 * */
export interface AnalyzedTrait<D, A, S extends SemanticSymbol|null, R> extends
    TraitB    */} *
 * Resolved traits have been successfully analyzed and resolved, contain no errors, and are ready
 * for the compilation phase.
 * */
ex   analysis: Readonly<A>;  /**
   * Analysis may have still resulted in diagnostics.
   */   * Diagnostics resulting from resolution are tracked separately from
   */
  resolveDiagnostics: ts.Dia   * combina  resolution: Readonly<R>|null;
}/**
   typeCheckDiagnostics: ts.Diagnostic[]|     this.assertTransitionLegal(TraitState.Pending, TraitState.Analyzed);
    this.analysis = analysis;
    this.analysisDiagnostics = diagnostics;
    this.symbol = symbol;
    this.state = TraitState.Analyzed;
    return this as AnalyzedTrait<D, A, S, R>;
       this.resolveDiagnost    return this as ResolvedTrait<D, A, S, R>;
  }  toSkipped(): SkippedTrait<D, A, S, R> {
    // Only pending traits can be skipped.
    this.assertTransitionLegal(TraitState.Pe    return this as SkippedTrait<D, A, S, R>;
  }  /**
   * Verifies that the trait is currently in one of the `allowedState`s.
   *   * occurring. However,   * transit  private assertTransitionLegal(allowedState: TraitState, transitionTo: TraitState): void {
 TraitState[transitionTo]}.`);
    }