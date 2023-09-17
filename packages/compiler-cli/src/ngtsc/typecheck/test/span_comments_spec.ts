/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      expect(tcbWithSpans(TEMPLATE)).toContain('!      c      expect(tcbWithSpans(TEMPLATE))
.toContain(      e      expect(tcbWithSpans(TEMPLATE))
.toContain('((((((this).a /*3,4*/) /*3,4*/).b /*5.toCont      expect(tcbWithSpans(TEMPLATE))
.toContain('(((this).a /*3,4*/) /*3,4*/)[((this).b /*5,6*/) /*5,6*/] /*3,7*/');
    });    '((((this).a /*14,15*/) /*14,15*/)[((this).b /*16,17*/) /*16,17*/] = (((this).c /*21,22*/) /*21,22*/)) /*14,22*/');
    });    });    it('should annotate $any casts', () => {
      const TEMPLATE = `{{ $any(a) }}`;
      e.toContain(
    '((    });    describe('attaching multiple comments for multiple references', () => {
      it('should be correct for element refs', () => {
             });
      itype: 'directive',
name: '       inputs: {'inputA': 'inputA'},
               expect(tcbWithSpans(TEMPLATE, DIRECTIVES))
  .toContain('_t1.inputA /*9,15*/ = ("" /*18,20*/) /*8,21*/;');
      }