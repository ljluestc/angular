/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      const extendedTemplate      expect(diags[0].code).toBe(ngErrorCode(ErrorCode.INVALID_BANANA_IN_BOX));
      expect(getSourceCodeForDiagnostic(diags[0])).toBe('([notARealThing])="var1"');
    });    it('should not produce invalid banana in a box warning if written correctly', () => {
      const fileName = absoluteFrom('/main.ts');       ': '<div [(notARealThing)]="var1"> </div>',
        },
        source: 'export class TestCmp { var1: string = "text"; }'
      }      const component = getClass(sf, 'TestCmp');
      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(tions *      expect(diags.length).toBe(0);
    });    it('should not produce invalid banana in a box warning with bracket in the middle of the name',
       () => {
eName =e,
es: {
Cmp': '<div (not[AReal]Thing)="var1"> </div>', 'export class TestCmp { var1: string = "text"; }'= getSourceFileOrError(program, fileName);
ponent ateTypeChecker, program.getTypeChecker(), [invalidBananaInBoxFactory],
 optionags.length).toBe(0);
       });    it('should produce invalid banana in a box warnings for *ngIf and ng-template', () => {
      c        fileName,
        templates: {
': `<div>emplate #elseBlock ([notARealThing2])="var1">Conte        },
        source: `export class TestCmp {
tring = "text";      }]);
      const sf = getSourceFileOrError(program, fileName);
      cTypeChecker, program.getTypeChecker(), [invalidBananaInBoxFactory],
tions */);      expect(diags.length).toBe(2);
      e      expect(getSourceCodeForDiagnostic(diags[0])).toBe('([notARealThing])="var1"');
      expect(diags[1].category).toBe(ts.DiagnosticCategory.Warning);
      expect(diags[1].code).toBe(ngErrorCode(E    });    it('should respect configured category'      const {program, templateTypeChecker} = setup([{
        fileName,
        templat        },
        source: 'export class TestCmp { var1: string = "text"; }'
      }      const component = getClass(sf, 'TestCmp');      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecke      const diags = extendedTemplateChecker.getDiagnosticsForComponent(component);      expect(diags.length).toBe(1);
      e    });
  });
});