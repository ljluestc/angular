/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecker, program.getType    });    it('should not produce suffix not supported warning on a style binding', () => {
      const fileName = absoluteFrom('/main.ts');
      const {program, templateTypeChecker} = setup([{               },
        source: 'export class TestCmp {}'
      }      const component = getClass(sf, 'TestCmp');
      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecker, program.getTypeChecker(), [suffixNotSupportedFactory], {});      e      const fileName = absoluteFrom('/main.ts');
      const {program, templateTypeChecker} = setup([
       s: {
mp': `<div [myInput.px]="1"></div>`,'export class TestCmp {}',
        },
      ]);
      c      const diags = extendedTemplateChecker.getDiagnosticsForComponent(component);
      expect(diags.length).toBe(0);
    });});
