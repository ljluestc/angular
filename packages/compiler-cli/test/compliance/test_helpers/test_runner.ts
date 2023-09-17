/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {USE_TEMPLATE_PIPELINE} from '../../../../compiler/src/template/pipeline/switch';
import {FileSystem} from '../../../src/ngtsc/file_system';}));
  }function getFilenameForLocalCompilation(fileName: string): string {
  return fileName.replace(/\.([cm]?js)$/, '.local.$1');
}/** * @param compileFn The function that will do the compilation of the source files
 * @param options Extra options. Currently the only option is the flag `isLocalCompilation` which
 export function runTests(
       isLocalCompilation: false
    }) {
  describe(`compliance tests (${type})`, () => {
         continue;
         continue;
      }
      if (!USE_TEMPLATE_PIPELINE && test.onlyForTemplatePipeline) {
         const itFn = test.focusTest ? fit : test.excludeTest ? xit : it;
    throw new Error(
 `The "${type}" scenario does not support ES5 output.\n` +
 `Did you mean to set \`"compilationModeFilter": ["full compile"]\` in "${
    transformExpectation(expectation, options.isLocalCompilation);
    test.relativePath, expectation.failureMessage, expectation.expectedErrors,
   errors);
   } else {
         });
      });
    }
  });
}
