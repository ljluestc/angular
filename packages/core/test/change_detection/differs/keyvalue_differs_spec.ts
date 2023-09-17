/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      create<K, V>(): KeyValueDiffer<K, V> {
        log.push('create');
        return DIFFER;
      }
    }    @NgModule({providers: [KeyValueDiffers.extend([new MyKeyValueDifferFactory()])]})
    class MyModule {
    }    TestBed.configureTestingModule({imports: [MyModule]});
    const differs = TestBed.inject(KeyValueDiffers);
    c    expect(log).toEqual(['supports', 'VALUE', 'create']);
  });
});