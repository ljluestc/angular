/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ extendedTemplateChecker = nt(  .toBe(
      `The \`*${directive}\` directive was used in the template, ` +
      `but neither the \`${      `is included in the \`@Component.imports\` array of this component.`);
t(getSourceCodeForDiagnostic(diags[0])).toBe(directive);        it(`should *not* produce a warning when the '${directive}' directive is not imported ` +
`ifileName,
templates: {
  'TestCmp': `<${element} *${directive}="exp"></${element}>`,  type: 'directive',
  selector: `[test-cmp]`,
    templateTypeChecker, program.getTypeChecker(), [missingControlFlowDirectiveCheck],
  {} /* options */);
 diags = extendedTemplateChecker.getDiagnosticsForComponent(component);
 diagnostic messages are expected.`(when used on the '${element}' element)`, className = directive.charAt(0).toUpperCase() + directive.substr(1);
 fileName = absoluteFrom('/main.ts');
 {program, templateTypeChecker} = setup([{
fi export class ${className} {}declarations: [
  {
    type: 'directive',
    name: className,
    selector: `[${directive}]`,
  },    name: 'TestCmp',
    type: 'directive',
    selector: `[test-cmp]`,
    {strictNullChecks: true} /* diagnostic messages are expected.
t(diags.length).toBe(0);      });
    });    it(`should *not* produce a warning for other missing structural directives`, () => {
      const fileName = absoluteFrom('/main.ts');
      const {program, templateTypeChecker} = setup([{
        fileName,': `<div *foo="exp"></div>`,
        },
        declarations: [{
estCmp',      const sf = getSourceFileOrError(program, fileName);
      const component = getClass(sf, 'TestCmp');
      const extendedTemplateCullChecks: true} /* options */);
      const diags = exte      expect(diags.length).toBe(0);
    });});
