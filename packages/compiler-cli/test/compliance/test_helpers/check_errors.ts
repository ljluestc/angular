/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {inspect} from 'util';
import {ExpectedError} from './get_compliance_tests'; `Actual errors: ${inspect(actualErrors)}.`);
    }
  }
}export function checkNoUnexpectedErrors(testPath: string, actualErrors: string[]): void {
  if (actualErrors.length > 0) {
         `Errors: ${inspect(actualErrors)}.`);
  }
}