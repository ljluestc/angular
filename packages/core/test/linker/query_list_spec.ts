/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */             expect(queryList.length).toBe(2);
      });    });    it('should support length', () => {
         });    it('should support get', () => {
      queryList.reset(['one', 'two']);    });      let join = '';
         });      let join = '';
      queryList.forEach((x, i) => join = join + x + i);
      e      e      });    it('should support find with index', () => {
      q      expect(queryList.reduce((a: string, x: string) => a + x, 'start:')).toEqual('start:onetwo');
    }      e      expect(queryList.reduce((a: string, x: string) => a + x, 'start:')).toEqual('start:onetwo');
    });    it('should support toArray', () => {
      q      e        c      const foos: Array<'foo'> = queryList.filter((item): item is 'foo' => item === 'foo');
      e      const queryListAsIterable: Iterable<string> = queryList;      // For loops use the iteration protocol.
         });  fires += 1;
}  tick();  expect(fires).toEqual(1);  queryList.notifyOnChanges();
  tick(  query    }
  });
}