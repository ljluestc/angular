/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  typeCheckResults: Map<Absoexport interface DeltaIncrementalState {
  kind: IncrementalStateKind.Delta;  /**
   * If available, the `Analyzed   * Set of file paths which have changed since the `lastAnalyzedState` compilation.
   changedResourceFiles: Set<AbsoluteFsPath>; * State produced by a compilation that's usable as the st