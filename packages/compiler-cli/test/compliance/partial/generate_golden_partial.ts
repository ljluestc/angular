/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {AbsoluteFsPath, FileSystem} from '../../../src/ngtsc/file_system';
import {compileTest, getBuildOutputDirectory, initMockTestFileSystem} from '../test_helpers/compile_test';
import {ComplianceTest, getComplianceTests} from '../test_helpers/get_compliance_tests';
import {PartiallyCompiledFile, renderGoldenPartial} from '../test_helpers/golden_partials';  for (const test of tests) {
    const fs = initMockTestFileSystem(test.realTestPath);
    for (const file of compilePartials(fs, test)) {
      files.push(file);
    }
  }
  writeGoldenPartial(files);
}/**
 * Partially compile the source files specified by the given `test`.
  * @param test The information about the test being compiled.
 */
f  for (const generatedPath of compileTest(fs, test.inputFiles, test.compilerOptions, {
compilationMode: 'partial',
.    yield {
      path: fs.relative(builtDirectory, generatedPath),
   }
}/**
 * Write the partially compiled files to the appropriate output destination.
 *
 * For now just push the concatenated partial files to standard out.
  */
function writeGoldenPartial(files: PartiallyCompiledFile[]): void {
  // tslint:disable-next-line: no-console
  console.log(renderGoldenPartial(files));
}