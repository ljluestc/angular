/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecker, program.getType      expect(getSourceCodeForDiagnostic(diags[0])).toBe(`class.blue="true"`);
    });    it('should produce an attribute binding warning', () => {
      const fileName = absoluteFrom('/main.ts');       ': `<div attr.id="bar"></div>`,
        },
        source: 'export class TestCmp { }'
      }      const component = getClass(sf, 'TestCmp');
      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(tions *      expect(diags.length).toBe(1);
      expect(diags[0].category).toBe(ts.DiagnosticCategory.Warning);
      expect(diags[0].code).toBe(ngErrorCode(ErrorCode.TEXT_ATTRIBUTE_NOT_BINDING));
      e      const fileName = absoluteFrom('/main.ts');
      const {program, templateTypeChecker} = setup([{
        fileName,
               },
        source: 'export class TestCmp { }'
      }]);
      ctions */);
      const diags = extendedTemplateChecker.getDiagnosticsForComponent(component);
      expect(diags.length).toBe(1);
      expect(diags[0].category).toBe(ts.DiagnosticCategory.Warning);
      expect(diags[0].code).toBe(ngErrorCode(ErrorCode.TEXT_ATTRIBUTE_NOT_BINDING));
      expect(getSourceCodeForDiagnostic(diags[0])).toBe(`style.margin-right.px="5"`);
    });    it('should not produce a warning when there is no value', () => {
      const fileName = absoluteFrom('/main.ts');
      c        },
        source: 'export class TestCmp { }'
      }]);
      const sf = getSourceFileOrError(program, fileName);
      const component = getClass(sf, 'TestCmp');
      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChe      const diags = extendedTemplateChecker.getDiagnosticsForComponent(component);
      expect(diags.length).toBe(1);
      e});
