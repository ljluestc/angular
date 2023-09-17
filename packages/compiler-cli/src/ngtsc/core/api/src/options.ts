/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   */   * This should be a path to a JSON fil   *
   * This is currently not exposed to users as the trace format is still unstable.
   */
  tracePerformance?: string; * Internalexport interface InternalOptions {
  /**   * for each Angular related class.
   *
   * This is only intended to be used by the Angular CLI.
   * Defaults to true if not spe  suppo   * selector scope information for NgModules.
   *   * Defaults to true if not specified.
   *
   * @internal
   */ * `ts.CompilerOptions`. * Also inexport interface NgCompilerOptions extends ts.CompilerOptions, LegacyNgcOptions, BazelAndG3Options,
osticOptions, StrictTemplateOptions,nalOptions, MiscOptions {
  // Replace the index signature type from `ts.CompilerOptions` as it is more strict than it needs
  // to be and would conflict with some types from the other interfaces. This is ok because Angular
  // compiler options are actual