/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        differ.check(m); .toEqual        eprevious: ['a', 'b[B->BB]'],
additions: ['d[null->D]'],removals:      });              m.set('a', 0);        differ.check(m);        m = new Map();
        m.set('b', 1);
        m.set('a', 1);
        d        iexpect(f.supports({})).toBeTruthy();
expect(f.supports('not suppdiffer.ch map: ['a addit}));m = {};expect(kvChangesAsString removals: ['a[A->null]', 'd[D->null]']
}));
        });        it('should work regardless key order', () => {
differ.chdiffer.ch previous: ['b[3->2]', 'a[2->1]'],
 changes: ['a[2->1]', 'b[3->2]']
})); addidiffer.diff(m);
expect(kv        }      