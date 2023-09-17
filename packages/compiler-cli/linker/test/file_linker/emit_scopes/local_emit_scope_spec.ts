/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {ConstantPool} from '@angular/compiler';
import * as o from '@angular/compiler/src/output/output_ast';
import ts from 'typescript';      const factory = new TypeScriptAstFactory(/* annotateForClosureCompiler */ false);
      const translator = new Transla      const emitScope =      a        expression: o.importExpr(coreImportRef).prop('bar').callFn([]),
        statements: [],
      }); .toEqual('function () { const _c0 = ["CONST"]; r      c new LocalEmitScope<ts.Statement, ts.Expression>(ngImport, translator, factory);      const def = emitScope.translateDefinition({
        expression: o.fn([], [], null, null, 'foo'),
        statements: [],
      });
      expect(generate(def)).toEqual('function foo      c new LocalEmitScope<ts.Statement, ts.Expression>(ngImport, translator, factory);    });
  });
});function addSharedStatement(constantPool: ConstantPool): void {
  const constArray = o.literalArr([o.literal('CONST')]);
  // We have to add the constant twice or it will