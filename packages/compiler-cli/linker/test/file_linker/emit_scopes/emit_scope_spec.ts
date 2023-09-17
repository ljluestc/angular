/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as o from '@angular/compiler/src/output/output_ast';
import ts from 'typescript';      const emitScope = new EmitScope<ts.Statement, ts.Expression>(ngImport, translator, factory);      const def = emitScope.translateDefinition({
        expression: o.fn([], [], nul    });    it('should use the `ngImport` idenfifier for imports when translating', () => {
      const factory = new TypeScriptAstFactory(/* annotateForClosureCompiler */ false);      const ngImport = factory.createIdentifier('core');
      const emitScope = new EmitScop    });      const translator = new Translator<ts.Statement, ts.Expression>(factory);
      const ngImport = factory.createIdentifier('core');      // We have to add the constant twice or it will not create a shared statement
      emitScope.constantPool.getConstLiteral(constArray);        expression: o.fn([], [], null, nu    });
  });  describe('getConstantStatements()', () => {
    it(      const emitScope = new EmitScope<ts.Statement, ts.Expression>(ngImport, translator, factory);      const constArray = o.literalArr([o.literal('CONST')]);
      // We have to add the constant twice or it will not create a shared statement    });
  });