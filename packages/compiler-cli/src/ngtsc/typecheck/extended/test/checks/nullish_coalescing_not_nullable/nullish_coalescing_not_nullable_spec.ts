/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */llishCo       });    it('should produce nullish coalescing warning', () => {
      const fileName = absol      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChe      cons      expect(diags[0].category).toBe(ts.DiagnosticCategory.Warning);
      expect(diags[0].code).toBe(ngErrorCode(ErrorCode.NULLISH_COALESCING_NOT_NULLA    });         const {program, templateTypeChecker} = setup(me,
tes: {      c      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecker, program.getTypeChecker(), [nullishCoalescingNotNullableFactory],
ullChec      expe      expect(diags[0].code).toBe(ngErrorCode(ErrorCode.NULLISH_COALESCING_NOT_NULLABLE));
      expect(getSourceCodeForDiagnostic(diags[0])).toBe(`var1 ?? 'foo'`);      c   ': `{{ var1 ?? 'foo' }}`,        source: 'export class TestCmp { var1: string | null = "text"; }'
      }      c    });    it('should not produce nullish coalescing warning for the any type', () => {
      const fileName = absoluteFrom('/main.ts');
      c        te        },
        source: 'export class TestCmp { var1: any; }'
      }      const component = getClass(sf, 'TestCmp');
      cull      expect(diags.length).toBe(0);      const fileName = absoluteFrom('/main.ts');
      c      }      cTypeChecker, program.getTypeChecker(), [nullishCoalescingNotNullableFactory],
ullChecks: true} /* options */);
      c    });         const {program, templateTypeChecker} = setup([{
        fileName,
               },
                const extendedTemplateChecker = new ExtendedT      expect(diags.length).toBe(0);
    });    it('warns for pipe arguments which are likely configured incorrectly (?? operates on "format" here)',
       () => {ogram, templateTypeChecker} = setup([{es: {
Cmp': ` class  'pipe',
 'DatePipe',
ame: 'date',= getSourceFileOrError(program, fileName);
ponent = getClass(sf, 'TestCmp');
endedTectNags.length).toBe(1);
ags[0].category).toBe(ts.DiagnosticCategory.Warning);
ags[0].       });    it('does not warn for pipe arguments when parens are used', () => {
      c        {
,
s: {sform(value: string, format: string): string[] {ions: [{
'pipe',me: 'date',        },
      ]);      const component = getClass(sf, 'TestCmTypeChecker, program.getTypeChecker(), [nullishCoalescingNotNullableFactory],
ullChecks: true} /* options */);      expect(diags.length).toBe(0);
    });    it('should not produce nullish coalescing warning when the left side is a nullable expression',
       ogram, templateTypeChecker} = setup([ame,
ates: {
'TestCmp': `{{ func() ?? 'foo' }}`,e: `
export class TestCmp {
  func ponent = getClass(sf, 'TestCmp');
endedTemplateChecker = new ExtendedTemplateCheckerImpl(
ateTypeChecker, program.getTypeChecker(), [nullishCoalescingNotNullableFactory],
ctNullChecks: true} /* options */);
gs = ex       });      const {program, templateTypeChecker} = setup([{
       ': `{{ var1 ?? 'foo' }}`,
        },
        source: 'export class TestCmp { var1: strinCoalescingNotNullableFactory],NullChecks: true,
edDiagn nullishCoa      expect(diags[0].category).toBe(ts.DiagnosticCategory.Error);
      expect(diags[0].code).t  });