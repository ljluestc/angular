/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        differ.check(l);        l.leprevious: ['a[0->1]', 'b[1->0]', 'c'],        differ.check(l);
         d .toEqual(        expect(iterableDifferToString(differ)).toEqual(iterableChangesAsString({
collection: ['a', 'b', 'additions: [      });      it('should ignore [NaN] != [NaN]', () => {
        const l = [NaN]; .toEqual(iterableChangesAsString({collection: [NaN], previous: [NaN]}));
      });      it('should detect [NaN] moves', () => {
         dcollection: ['a', 'c[2->1]'],
previous: ['a', 'b[1->null]', 'c[2->1]'],removals: ['b[1->ncollectio        }));
      });      it('should support duplicates', () => {
        const l = ['a',         differ.check(l);moves: ['b[3->2]', 'b[4->3]'],
r      });      it('shoul        differ.check(l);        l.length = 0;        l        differ.check(l);
        eprevious: ['a[0->1]', 'b[1->0]', 'c'],
moves: ['b[1->0]', 'a[0-        const l = ['a', '*', '*', 'd', '-', '-', '-', 'e'];
        d        l[5] = 'c';
        differ.check(l);additions: ['b[null->removals: ['*[2->null]', '-[6->null]'],
        }   const sufif (record.curr} else if (record.previo} else {
 return `        }        function modifyArrayUsingOperation(
 arr: number[], endData: any[], prev: number|null, next: number|null) {if (prev == null) {
 // "next} else if (next == null) {
 value =  arr.splice(prev, 1);
 arr.splice(next, 0, value);
}  const startData = [0, 1, 2, 3, 4, 5];const value = modifyArrayUsingOperation(startData, endData, prev, next);
operation'INSERT 6'REMOVE 5 (5 -> VOID) [o=5]', 'INSERT 8 (VOID -> 5)'
  ]);  expect(startData).toEqual(endData);'REMOVE 0 (0 -> VOID) [o=0]', 'MOVE 2 (1 -> 0) [o=2]', 'REMOVE 3 (2 -> VOID) [o=3]'
  ]);  exconst startDatadiffer = differ.diff(end modifyArrayUsingOperation(startData, endData, pre});expect 'INSERT 9 (VOID -> 3)', 'REMOVE 5 (6 -> VOID) [o=4]'
]);expectconst startData = [0, 1, 2, 3, 4];
const endData = [4, 1, 2 'MOVE 4 (4 -> 0) [o=4]', 'MOVE 1 (2 -> 1) [o=1]', 'MOVE 2 (3 -> 2) [o=2]',
 'MOVE 3         });        it('should not fail', () => {
const startData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; modifyArrayUsingOperation(startData, endData, prev, next);
 operations.push(stringifyItemChange(item, prev, next, item.previousIndex));
});expect(operations).toEqual([
 'MOVE 10]);() => {  const endData =  differ.forEachOperatiooperations.push(stringifyItemChange(item, prev, next, item.previousIndex));
  });  expect(operations).toEqual([]);
});
      });expect(differ.diff(['a', 'b'])).toBe(differ);
        });        it('should return null when there is no change', () => {expect(differ.diff(['a', 'b'])).toEqual(null);
        } removals: ['a[0->null]', 'b[1->null]']
}));expec      });
    });    describe('trackBy function by id', function() {
      let differ: any;          let l = buildItemList(['a', 'b', 'c']);collection: [`{id: a}`, `{id: b}`, `{id: c}`],
identityChanges: [`{id: a}`, `{id: b}`, `{id: c}`],
previ      });      it('should have updated properties in identity change collection', () => {
        l        differ.check(l);
     identityChanges: [`{id: a, color: orange}`, `{id: b, color: red}`],        diff        }));
      });             expect(iterableDifferToString(differ)).toEqual(iterableChangesAsString({
collection: ['{id: b}[null->0]', '{id: a}[0->1]', '{id: a}[1->2]'],
identmove        const lnew ComplexItem('a', 'renew ComplexItem('a', 'blue'),
new ComplexItem('c', 'orange'),
new       '{id: b, color: yellow}[1->0]', '{id: a, color: blue}[0->1]', '{id: c, color: orange}',
 '{identiprevious: [
 '{id: a, color: blue}[0        differ.check(l1);        const l2 = [l1[1], l1[0], l1[2], l1[3]];
        d], '{id: a, color: blue}[0->1]', '{id: b, color: yellow}[1->0]', '{id: c, color: orange}',
 '{id: a, color: red}'
],        }));        differ.check(l);
        expect(iterableDifferToString(differ)).toEqual(iterableChangesAsString({
collection: ['{id: a}', '{id: b}'],
pre        }));
      });   removals:    });}