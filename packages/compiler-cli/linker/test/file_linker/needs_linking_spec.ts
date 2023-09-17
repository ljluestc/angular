/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        ɵdir = ɵɵngDeclareComponent({type: Cmp});    expect(needsLinking('file.js', `
      const fnName = 'ɵɵngDeclareComponent';
    `)).toBeTrue();
  });