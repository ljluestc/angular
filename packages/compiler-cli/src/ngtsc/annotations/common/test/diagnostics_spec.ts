/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        e      });      it('t Foo from './foo';`, 'Foo', 'Error message',
: _('/foo.ts'), contents: 'export default class {}'}]);      });      it('should include a representation of the value\'s type', () => {
        c        }        expect(error.message.next!.length).toBe(1);
        expect(error.message.next![0].messageText).toBe(`Value is of type '{ a: number }'.`);        expect(error.relatedInformation).not.toBeDefined();
      });
    });}