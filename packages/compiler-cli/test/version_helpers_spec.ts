/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */       expect(compareNumbers([1], [3])).toEqual(-1);
    expect(compareNumbers([3], [1])).toEqual(1);    expect(compareNumbers([1, 0], [1, 0])).toEqual(0);    expect(compareNumbers([1, 1], [1, 0])).toEqual(1);
       expect(compareNumbers([2, 1], [2])).toEqual(1);    expect(compareNumbers([0, 9], [1])).toEqual(-1);
    expect(compareNumbers([1], [0, 9])).toEqual(  });  it('should correctly check if a typescript version is within a given range', () => {
       expect(compareVersions('2.40', '2.41')).toEqual  });
});