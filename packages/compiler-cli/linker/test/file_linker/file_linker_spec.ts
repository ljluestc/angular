/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as o from '@angular/compiler/src/output/output_ast';
import ts from 'typescript';  let factory: TypeScriptAstFactory;
  beforeEach(() => factory = new TypeScriptAstFactory(/* annotateForClosureCompiler */ false));  describe('isPar      const {fileLinker} = createFi      expect(fileLinker.isPartialDeclaration('ɵɵngDeclareComponent')).toBe(true);
    });    it('should return false if the callee is not recognized', () => {
      const {fileLinker} = createFileLinker();    });    it('should throw an error if th      const version = factory.createLiteral('0.0.0-PLACEHOLDER');
      c        {propertyName: 'minVersion', quoted: false, value: version},
        {propertyName: 'version', quoted: false, value: version},      ]); .toThrowError('Unknown partial dec      const {fileLinker} = createFileLinker();
      c      const declarationArg = factory.createObjectLiteral([
        {propertyName: 'version', quoted: false, value: version},      ]); .toThrowError(`Expected property '      const ngImport = factory.createIdentifier('core');
      c        {propertyName: 'ngImport', quoted: false, value: ngImport},
      ]); () => fileLinker.linkPartialDeclaration(      const {fileLinker} = createFi      expect(
 () =>  .toThrowError(`Expected property 'ngImport' to be present.`);
    });    it('should call `linkPartialDeclaration()` on the appropriate partial compiler', ()       const compileSpy = spyOn(PartialDirectiveLinkerVersion1.prototype, 'linkPartialDeclaration')
      statem      const version = factory.createLiteral('0.0.0-PLACEHOLDER');
      const declarationArg = factory.createObjectLiteral([
        'ɵɵngDeclareDirective', [declarationArg], new MockDeclarationScope());      expect(compilationResult).toEqual(factory.createLiteral('compilation result'));
      expect(compileSpy).toHaveBeenCalled();
      e  });  describe('getConstantStatements()', () => {
    it(      spyOnLinkPartialDeclarationWithConstants(o.literal('REPLACEMENT'));      // Here we use the `core` idenfifier for `ngImport` to trigger the use of a shared scope for
      // constant statements.
      const declarationArg = factory.createObjectLiteral([
      proper        {propertyName: 'version', quoted: false, value: factory.createLiteral('0.0.0-PLACEHOLDER')},
      ]);      const replacement = fileLinker.linkPartialDeclaration(
 'ɵɵngD    });    it('should be no shared constant statements to capture when const {fileLinker} = createFileLinker();
spyOnLinkPartialDeclarationWithConstants(o.literal('REPLACEMENT'));// Here we use a string literal `"not-a-module"` for `ngImport` to cause constant
// statements to be emitted in an IIFE rather than added to the shared constant scope.
const declarationArg = factory.createObjectLiteral([
  {pr    propertyName: 'minVersion',
    quo  },    propertyName: 'version',
    quoted: false,
    value: factory.createLiteral('0.0.0-PLACEHOLDER')
  },
]);const replacement = fileLinker.linkPartialDeclaration(
    'ɵɵ       });
  });  fu    fileLinker: FileLinker<MockConstantScopeRef, ts.Statement, ts.Expression>
  } {      ret});/** * `MockConstantScopeRef` if the expression is an identifier, or `null` otherwise.
 * */
class MockDeclarationScope implements DeclarationScope<MockConstantScopeRef, ts.Expression> {
  getConstantScopeRef(expression: ts.Expression): MockConstantScopeRef|null {
    i    } else {
      r  }  private constructor() {}
  static singleton = new MockDeclarationScope();
}/**
 * Spy on the `PartialDirectiveLinkerVersion1.linkPartialDeclaration()` method, triggering
 * function spyOnLinkPartialDeclarationWithConstants(replacement: o.Expression) {
  let c       constantPool.getConstLiteral(constArray);
     stat     }) as typeof PartialDirectiveLinkerVersion1.prototype.linkPartialDeclaration);
}