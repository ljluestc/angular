/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * An array of `ts.Diagnos  readonly constructionDiagnostics: ts.Diagnostic[];   * files.   */
  readonly ignoreForEmit: Set<ts.SourceFile   * import specifiers are generated.
   *
   * If not required, this can be `null`.
   */   * Resolved list of root directories explicitly set in, or inferred from, the tsconfig.
   */
  readonly rootDirs: ReadonlyArray<AbsoluteFsPath>;
}export interface SourceFileTypeIdentifier {   * Distinguishes between shim files added by Angular to the compilation process (both those
   * intended for output, like ngfactory files, as well as internal shims like ngtypecheck files)
   * and original files in the user's progr   */
  isShim(sf: ts.SourceFile): boolean;  /**
   * Distinguishes between resource files added by Angular to the project and original files in the
   * user's program.   * project and ensures that projects are retained properly when navigating around the workspace.
   */
  isResource(sf: ts.SourceFile): boolean;
}