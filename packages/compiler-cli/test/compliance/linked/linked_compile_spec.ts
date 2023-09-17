/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import babel, {PluginObj} from '@babel/core'; * * @param test The compliance test whose function linkPartials(fileSystem: FileSystem, test: ComplianceTest): CompileResult {
  const logger = new ConsoleLogger(LogLevel.debug);
  const loader = new SourceFileLoader(fileSystem, log  const linkerPlugin = createEs2015Linker    logger,
    sourceMapping: test.compilerOptions?.['sourceMap'] === true,
    ...test.angularCompilerOptions  const goldenPartialPath = fileSystem.re    throw new Error(
        'Golden partial does not exist for this test\n' +
        'Try generating it by running:\n' +   test.relativePath}.golden.update`);  const partialFile = fileSystem.readFile(goldenPartialPath);
  const partialFiles = parseGoldenPartial(partialFile);  partialFiles.forEach(
      f => safeWrite(fileSystem, fileSystem.resolve(b      const fileName = fileSystem.resolve        continue;
      }      const sourceMapPath = fileSystem.resolve(fileName + '.map');
      const sourceMap = fileSystem.exists(sourceMapPath) ? undefined;
      const {linkedSource, linkedSourceMap} =
 applyLinker(builtDirectory, fileName, source, sourceMap, linkerPlugin);      if (linkedSourceMap !== undefined) {
        const mapAndPath: MapAndPath = {map: linkedSourceMap, mapPath: sourceMapPath};
        const sourceFile = loader.loadSourceFile(fileName, linkedSource, mapAndPath);
        safeWrite(fileSystem, sourceMapPath, JSON.strin      safeWrite(fileSystem, fileName, linkedSource);
    }  return {emittedFiles: [], errors: []};
}/**
 * Run the file through the Babel linker plugin. * It will ignore files that do not have a `.js` extension.
 *
 * @param file The absolute file path and its source to be transformed using the linker.
 * @param linkerPlugin The linker plugin to apply. */
function applyLinker(    linkerPlugin: PluginObj): {linkedSource: string, linkedSourceMap: RawSourceMap|undefined} {
   }
  const result = babel.transformSync(source, {    filename,
    sourceMaps: !!sourceMap,
    plugins: [linkerPlugin],
    parserOpts: {sourceType: 'unambiguous'},  if (result === null) {
    throw fail('Babel transform did not have output');  if (result.code == null) {
   return {linkedSource: result.code, linkedSourceMap: result.map || undefined};
}/** * directory exists.
 */
function safeWrite(fs: FileSystem, path: AbsoluteFsPath, content: string): void {
  fs.ensureDir(fs.dirname(path));}
