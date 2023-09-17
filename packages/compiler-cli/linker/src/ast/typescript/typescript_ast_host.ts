/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      return null;  }  isStringLiteral = ts.isStringLiteral;  parseStringLiteral(str: ts.Expression): string {
    assert(str, this.isStringLiteral, 'a string literal');
    return str.text;
  }  isNumericLiteral = ts.isNumericLiteral;  parseNumericLiteral(num: ts.Expression): number {
     }  isBooleanLiteral(node: ts.Expressi  }  parseBooleanLiteral(bool: ts.Expression): boolean {
    if (isBooleanLiteral(bool)) {
      return bool.kind === ts.SyntaxKind.TrueKeyword;
       } else {    }
  }         assert(element, isNotSpreadEle       assert(obj, this.isObjectLiteral, 'an object literal');    const result = new Map<string, ts.Expression>();
    for (const property of obj.properties) {
      assert(property, ts.isPropertyAssignment, 'a property assignment');
       }  }  isFunctionExpression(node: ts.Expression): node is ts.FunctionExpression|ts.ArrowFunction {
          // * `function(...) { stmt; ...  'U    }    return stmt.expression;    assert(call, ts.isCallExpression, 'a call expression');
    return call.expression;
  }  parseArguments(call: ts.Expression): ts.Expression[] {
         assert(arg, isNotSpreadElement, 'ar       const file = node.getSourceFile();
     } */ttedExpression): e is ts.Expressi}/*}/** */function isBooleanLiteral(node: ts.Expression): node is ts.TrueLiteral|ts.FalseLiteral {
  return node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword;
}ty */
fun      ts.isNumericLiteral(node.operand) &