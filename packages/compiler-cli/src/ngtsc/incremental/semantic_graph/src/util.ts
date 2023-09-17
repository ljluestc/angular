/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {SemanticReference, SemanticSymbol} from './api'; * Determines whether the provided references to a semantic symbol are still equal, i.e. represent
 *    }  // The reference still corresponds with the same symbol, now check that the path by which it is
  // imported has not changed.
  r  */    a: readonly T[]|null, b: readonly T[]|null,
    equalityTester: (a: T, b: T) => boolean = referenceEquality): boolean {
  i      if (a === null || b === null) {
    return a === b;
  }}