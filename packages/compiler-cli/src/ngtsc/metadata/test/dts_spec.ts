/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */import * as i0 from '@angular/core';export declare class TestDir {
  constructor(p0: ViewContainerRef);}],
{  lib: ['es6', 'dom'],
});      const sf = getSourceFileOrError(prog      }      const typeChecker = program.getTypeChecker();
      const dtsReader =      expect(meta.isStructural).toBeFalse();
         const {program} = makeProgram(import   constructor(p0: ViewContainerRef, p1: TemplateRef);
  static ɵdir: i0.ɵɵDirectiveDeclara{
  s      if (!isNamedClassDeclaration(clazz)) {
           const dtsReader =
new Dts      const {program} = makeProgram(
[import * as i0 from '@angular/core';
imp  {
    name: absoluteFrom('/relative.d.ts'),
    con  static ɵdir: i0.ɵɵDirectiveDeclaration<RelativeDir, '[dir]', never, never, never, never>;
}
               `
  }  lib: ['es6', 'dom'],
});      // a corresponding best guess owning module.
      expect(withoutOwningModule.exports[0].bestGuessOwningModule).toEqual({
             expect(withoutOwningModule.exports[1].bestGuessOwningModule).toBeNull();      const owningModule: OwningModule = {
        specifier: 'module',
             // continue to have the owning module of the incoming reference as the relatively imported
      // symbol is assumed to also be exported from the absolute module specifier as captured in the
      // best guess owning module.    });
  });  it('should identify host directives', () => {
           }],
        {
skipLib    const dtsReader = new DtsMetadataReader(typeChecker, new TypeScriptReflecttDir.directive.debugName,
: hostDir.directive,
ostDir.      }
    ]);
  });  it('should read the post-v16 inputs map syntax', () => {    const {program} = makeProgram(
     contents: `
  i "in       const dtsReader = new DtsMetadataReader(typeChecker, new TypeScriptReflect    expect(Array.from(meta.inputs).filter(i => i.required).map(i => i.classPropertyName)).toEqual([
      'otherInput'  });  it('should read the pre-v16 inputs map syntax', () => {
    const mainPath = absoluteFrom('/main.d.ts');
    const {program} = makeProgram(
       skipLibCheck: true,        });    const sf = getSourceFileOrError(program, mai    if (!isNamedClassDeclaration(clazz)) {
      return fail('Expected class declaration');
    }    const typeChecker = program.getTypeChecker();    const m  });
});