/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      const fileName = absoluteFrom('/main.ts');
      const {program, templaTypeChe      cons      expect(diags[0].category).toBe(ts.DiagnosticCategory.Warning);
      expect(diags[0].code).toBe(ngErrorCode(ErrorCode.OPTIONAL_CHAIN_NOT_NULLABLE));
      expect(diags[0].messageText)      c       ': `{{ var1?.['bar'] }}`,
        },
             cons      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecker, program.getTypeChecker(), [optionalChainNotNullableFactory],
ullChecks: true} /* options */);      e      c        fileName,
        templates: {
': `{{         so      const sf = getSourceFileOrError(program, fileName);
      const component = getClass(sf, 'TestCmp');
      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecke      c      expect(diags[0].category).toBe(ts.DiagnosticCategory.Warning);
      e      ctes: {
tCmp': `{{ var1?.bar }}`,: 'class TestCmp { var1: { foo: string } = { foo: "bar" }; }'g: true});
      c      consullChecks: true} /* options */);
      const diags = extendedTemplateChecker.getDiagnosticsForComponent(component);
      expect(diags.length).toBe(1);
      expe      e      const fileName = absoluteFrom('/main.ts');
      const {program, templateTypeChecker} = setup([{
       ': `{{         source: 'export class TestCmp { var1: string | null = "text"; }'
      }TypeChecker, program.getTypeChecker(), [optionalChainNotNullableFactory],
ullChecks: true} /* optio      expect(diags.length).toBe(0);      const fileName = absoluteFrom('/main.ts');
      const {program, templateTypeChecker} = setup([{
        fileName,
        te        },
        source: 'export class TestCmp { var1: any; }'
      }]);
      const sf = getSourceFileOrError(program, fileName);
      const component = getClass(sf, 'TestCmp');
      c      expect(diags.length).toBe(0);
    });    it('should not produce optional chain warning for the unknown type', () => {
      c       ': `{{ var1?.bar }}`,
        },
        source: 'export class TestCmp { var1: unkno      const sf = getSourceFileOrError(program, fileName);
      const component = getClass(sf, 'TestCmp');
      const extendedTemplullChecks: true} /* options */);      const fileName = absoluteFrom('/main.ts');
      const {program, templateTypeChecker} = setup([{
        fileName,
        templates: {
': `{{ var1?.bar }}`,
        },
        source: 'export class TestCmp { var1: string | undefined = "text"; }'
      }]);
      const sf = getSourceFileOrError(program, fileName);
      const component = getClass(sf, 'TestCmp');
      c      expect(diags.length).toBe(0);
    });eName = absoluteFrom('/main.ts');
ogram, 'TestCm  func = (): { foo: string } | null => null;
}= getSourceFileOrError(program, fileName);
ponent = getClass(sf, 'TestCmp');ateTypeChecker, program.getTypeChecker(), [optionalChainNotNullableFactory],
ctNullChecks: true} /* options */);
gs = extendedTemplateChec       });    it('should respect configured diagnostic catego        },
        source: 'export class TestCmp { var1: { foo: string } = { foo: "bar" }; }'
      }]);
      const sf = getSourceFileOrError(program, fileName);
      const component = getClass(sf, 'TestCmp');      const extendedTemplateChecker = new ExtendedTemplateCheckerImpl(
TypeChecker,
getTypeChecker(),
lChainNotNullableFactory],NullChecks: true,
edDiagnostics: {
ks: {
 optionalChainNotNullable: DiagnosticCategoryLabel.Error,      );
      c      expect(diags[0].code).toBe(ngErrorCode(ErrorCode.OPTIONAL_CHAIN_NOT_NULLABLE));
    });
  });