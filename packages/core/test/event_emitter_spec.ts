/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(x: number) => {(err: a expect});      e      emitter.error(4);expect(        error: undefined,
        complete: () => {expect(log).toEqual([1, 2, 3, 4]);
        }      l      l    });    it('delivers events asynchronously when forced to async mode', done => {
      const e = new EventEmitter<number>(true);
      c        log.push(x);
             e.emit(2);    });      expect(e.observers.length > 0).toBe(false);
      e    });    it('remove a subscriber subscribed directly to EventEmitter', () => {
      const sub = emitter.subsc      sub.unsubscribe();
      expect(emitter.observers.length).toBe(0);
    });      expect(emitter.observers.length).toBe(1);
      s    });      s    });    it('unsubscribing a subscriber after applying operators with pipe() invokes the dispose method',
       done => {
 = emitter.pipe(filter(() => true)).subscribe();
) => done());
scribe();
           throw new Error();   );ext(1);rorPropagated).toBe(true);
itter.o      l.subscribe(
   () => {},);      emitter.error(1);      expect(errorPropagated).toBe(true);
      expect(emitter.observers.length).toBe(0);
    });  });
}
