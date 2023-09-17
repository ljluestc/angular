/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';export interface CompileResult {  errors: string[]; * Compile the input source `files` stored in `fs`, writing the generated files to `fs`.
  * @param files An array of paths (relative to the testPath) of input files to be compiled.
 * @param compilerOptions Any extra options to pass to the Typ * @returns A collection of paths of the generated fi    angularCompilerOptions: ConfigOptions|undefined): CompileResult {
   const options = getOptions(rootDir, outDir, compilerOptions, angularCompilerOptions);
  const rootNames = files.map(f => fs.resolve(f));  const {diagnostics, emitResult} = performCompilatio}/**
  *
 * @param fs the mock file-system where the compilation is happening.
 */
export function getRootDirectory(fs: PathManipulation): AbsoluteFsPath {
  * Gets an absolute path (in the mock file-system) of the directory where the compiled files are
  * @param fs the mock file-system where the compilation is happening.
   return fs.resolve('/built');
}/**
 * Get the options object to pass to the compiler.
 *
  * @param compilerOptions Additional options for the TypeScript compiler.
 function getOptions(
   const convertedCompilerOptions = ts.convertCompilerOptionsFromJson(compilerOptions, rootDir);
         'Invalid compilerOptions in test-case::\n' +
        convertedCompilerOptions.errors.map(d => d.messageText).join('\n'));
  }
     noImplicitAny: true,
     strictNullChecks: true,
    outDir,
    rootDir,
    baseUrl: '.',
     target: ts.ScriptTarget.ES2015,
    newLine: ts.NewLineKind.LineFeed,
    module: ts.ModuleKind.ES2015,
    moduleResolution: ts.ModuleResolutionKind.Node10,
     enableI18nLegacyMessageIdFormat: false,
    ...angularCompilerOptions,
  * Replace escaped line-ending markers (\r\n) with real line-ending characters.
 *
 * This allows us to simulate, more reliably, files that have `\r\n` line-endings.
 * (See `test_cases/r3_view_compiler_i18n/line_ending_normalization/template.html`.)
   const originalReadFile = fs.readFile;
  fs.readFile = (path: AbsoluteFsPath): string => {
    const file = originalReadFile.call(fs, path);
    return file
         // unescape `\r\n` at the end of a line
        .replace(/\\r\\n\n/g, '\r\n')
  * Parse the `diagnostics` to extract an error message string.
 *
 * The error message includes the location if available.
 *
 function parseDiagnostics(diagnostics: readonly ts.Diagnostic[]): string[] {
  return diagnostics.map(diagnostic => {
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
    if ('file' in diagnostic && diagnostic.file !== undefined && diagnostic.start !== undefined) {
     } else {
      return message;
    }
 