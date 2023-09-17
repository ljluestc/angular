/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */TypeChecker, program.getType    });    it('should produce an attribute binding warning', () => {
      const fileName = absoluteFrom('/main.ts');
      const {program, templateTypeChecker} = setup([,mp': `      ]);
      const sf = getSourceFileOrError(program, fileName);
      cTypeChecker, program.getTypeChecker(), [skipHydrationNotStaticFactory], {}
ns */
      );      e      const {program, templateTypeChecker} = setup([
        {
,mp': `<div ngSkipHydration="XXX"></div>`,'export class TestCmp { }',
        },
      ]);
      const sf = getSourceFileOrError(program, fileName);
      c      expect(diags[0].code).toBe(ngErrorCode(ErrorCode.SKIP_HYDRATION_NOT_STATIC));
      expect(getSourceCodeForDiagnostic(diags[0])).toBe(`ngSkipHydration="XXX"`);
    });      const {program, templateTypeChecker,
s: {
mp': `<div ngSkipHydration></div>`,'export class TestCmp { }',
        },
      ]);      const component = getClass(sf, 'TestTypeChe      );
      const diags = extendedTemplateChecker.getDiagnosticsForComponent(component);
      expect(diags.length).toBe(0);
    });    it('should not produce a warning with a correct value ', () => {
      cs: {        },
      ]);
      const sf = getSourceFileOrErr      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecker, program.getTypeChecker(), [skipHydrationNotStaticFactory], {}
ns */
      );
      const diags = extendedTemplateChecke    });});
