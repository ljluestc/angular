/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {runfiles} from '@bazel/runfiles';    return JSON.parse(fs.readFile(testCasesPath)) as {cases: TestCaseJson | TestCaseJson[]}    throw new Error(`F  * Search the file-system from the `currfunction*        Generator<AbsoluteFsPath> {
   }    const absPath = fs.resolve(current, segment);
    if (predicate(segment)) {    } else {
      if (fs.lstat(absPath).isDirectory()) {
 }function getStringOrFail(container: any, property: string, testPath: AbsoluteFsPath): string {
  const value = container[property];
  if (typeof value !== 'string') {  }
     container: any, property: string, testPath: AbsoluteFsPath, defaultValue: string[]): string[]   if (typeof value === 'undefined') {
    return defaultValue;
  }
  if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
    throw new Error(
 }  const defaultFailureMessage = 'Incorrect generated output.';
  const tsFiles = inputFiles.filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts'));
  const defaultFiles = tsFiles.map(inputFile => {    return {expected: outputFile, generated: outputFile};
       expectedErrors: [],    }];
  }  if (!Array.isArray(value)) {
    return parseExpectations([value], testPath, inputFiles);
  }  return value.map((expectation, i) => {
    if (typeof expectation !== 'object') {
      throw new Error(
     }    const failureMessage: string = expectation.failureMessage ?? defaultFailureMessage;
       throw new Error(`Test has invalid "expectations[${
 i}].files" property in TEST_CASES.json - expected array of "expected files": ${
 testPath}`);    const files: ExpectedFile[] = expectation.files.map((file: any) => {
       }
      throw new Error(`Test has invalid "expectations[${
 i}].files" property in TEST_CASES.json - expected each item to be a string or an "expected file" object: ${
 te  });
}function parseExpectedErrors(expectedErrors: any = [], testPath: AbsoluteFsPath): ExpectedError[] {
  i        'Test has invalid "expectedErrors" property in TEST_CASES.json - expected an array: ' +
        testPath);
  }  return expectedErrors.map(error => {
       testPath);
         testPath);
  }
  return extraChecks;
}function parseRegExp(str: string|undefined): RegExp {
  return new RegExp(str || '');
}   property}" property in TEST_CASES.json - expected config option object: ` +
        testPath);
  }
  rexport interface ComplianceTest {
   /** The absolute path (on the real file-system) to the test case containing this test. */
  r  description: string;
  /**
      */
    *    */
   /** If set to `true` this test is skipped when testing with use_template_pipeline */
  skipForTemplatePipeline?: boolean;
  /** If set to `true`, this test will only execute when the template pipeline is used. */
   focusTest?: boolean;
  /** If set to `true`, then exclude this test (equivalent to jasmine's 'xit()`). */
   /*  /** A list of pairs of paths to expected and generated files to compare. */
   expectedErrors: ExpectedError[];
  /** Additional checks to run against the generated code. */
  extraChecks: ExtraCheck[];
}/**
 *   templatePipelineExpected?: string;
} */
exp  location: RegExp;
}/**
 *  */
export type ExtraCheck = (string|[string, ...any]);/**
 * Options to pass to configure the compiler.
 */ * Interface espressing the type for the json object found at ../test_cases/test_case_schema.json.
   };
  compilerOptions?: ConfigOptions;
  angularCompilerOptions?: ConfigOptions;
   focusTest?: boolean;
  excludeTest?: boolean;
}