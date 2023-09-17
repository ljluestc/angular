/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  recordSuccessfulTypeCheck(results: Map<AbsoluteFsPath, FileTypeCheckDataT>): void;
}/**  /**   */
  addDependency(from: T, on: T): void;  /**
   addResourceDependency(from: T, on: AbsoluteFsPath): void;  /**
   * Record that the given file contains unresolvable dependencies.   * In practice, this means that the dependency graph cannot provide insight into the effects of
   * future changes on that file.  recordDependencyAnalysisFailure(file: T): void;
}