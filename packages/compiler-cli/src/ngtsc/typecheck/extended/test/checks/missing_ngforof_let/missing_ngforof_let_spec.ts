/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */TypeChecker, program.getType    });    it('should not produce missing ngforof let warning if written correctly', () => {
      const fileName = absoluteFrom('/main.ts');
      const {program, templateTypeChecker} = setup([{        },
        source:
t class      const sf = getSourceFileOrError(program, fileName);
      const component = getClass(sf, 'TestCmp');
      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(    });    it('should not produce missing ngforof let warning if written correctly in longhand', () => {
      const fileName = absoluteFrom('/main.ts');
      c        templates: {
': '<ng-template ngFor let-item [ngForOf]="items">{{item["name"]}}</ng-template>',
        },
             }]);
      c      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecker, program.getTypeChecker(), [missingNgForOfLet], {} /* options */);
      c    });
  });
});
