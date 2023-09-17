/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        expect(devModeEqual('one', {})).toBe(false);      });      it('should compare null', () => {
        expect(devModeEqual(null, null)).toBe(true);
        expect(devModeEqual(null, 1)).toBe(false);
        e  });
}