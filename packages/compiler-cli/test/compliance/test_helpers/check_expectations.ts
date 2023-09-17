/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {ReadonlyFileSystem} from '../../../src/ngtsc/file_system';  verifyUniqueFunctions,
};/** *
 * @param fs The mock file-system that holds the expected and generated files to compare.
 * * @param expectedFiles The list of expected-genexport function checkExpectations(
    fs: ReadonlyFileSystem, testPath: string, failureMessage: string, expectedFiles: ExpectedFile[],
    for (const expectedFile of expectedFiles) {    if (!fs.exists(expectedPath)) {
      throw new Error(`The expected file at ${
 e    if (!fs.exists(generatedPath)) { `The generated file at ${generatedPath} does not exist.\n` +
 'Perhaps there is no matching input source file in the TEST_CASES.json file for this test case.\n' +
 '      error.stack = '';
      throw error;
    }
    const generated = fs.readFile(generatedPath);
          `When checking against expected file "${testPath}/${expectedFile.expected}"\n` +
   failureMessage);    runExtraChecks(testPath, generated, extraChecks);
  }
}function runExtraChecks(
    testPath: string, generated: string, extraChecks: (string|[string, ...any])[]): void {
  for      [fnName, ...args] = check;
    } else {
      fnName = chec    }
    const fn = EXTRA_CHECK_FUNCTIONS[fnName];
  `Unknown extra-check function: "${fnName}" in ${testPath}.\n` +
 `Possible choices are: ${Object.keys(EXTRA_CHECK_FUNCTIONS).map(f => `\n - ${f}`)}.`);
    }     testPath} failed for generated code:\n\n${generated}`);
    }
  }