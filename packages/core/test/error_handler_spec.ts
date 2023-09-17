/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      });    it('should print original exception message if available (original is not Error)', () => {
      const realOriginal = new Error('custom');      const e = errorToString(wrappedError('wrappedwrapped', original));
 