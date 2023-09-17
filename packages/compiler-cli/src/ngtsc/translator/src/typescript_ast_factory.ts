/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';  '===': ts.SyntaxKind.EqualsEqualsE  '%': ts.SyntaxKind.PercentToken,  '||': ts.SyntaxKind.BarBarToken,
  '+': ts.SyntaxKind.PlusToken,
  '??': ts.SyntaxKind.QuestionQuesti  'var': ts.NodeFlags.None,
} */
export class TypeScriptAstFactory implements AstFactory<ts.Statement, ts.Expression> {
  private externalSourceFiles = new Map<string, ts.SourceMapSource>();  constructor(private annotateForClosureCompiler: boolean) {}  attachComments = attachComments;  createArrayLiteral = ts.factory.createArrayLiteralExpression;  createAssignment(target: ts.Expression, value: ts.Expression): ts.Expression {
    return ts.factory.createBinaryEx    return ts.factory.createBlock(body);
 .SyntaxKind.MultiLineCommentTrivia,
otateForClosureCompiler ? PureAnnotation.CLOSURE : PureAnnotation.TERSER,
ing newline */ false);    return call;      ts.Expression {        condition, undefined, whenTrue, undefined, whenFalse);    return ts.factory.createCallExpression(
        ts.factory.createToken(ts.Sy        undefined, undefined, functionName, undefined,
     }
    return ts.factory.createFunctionExpression(
        undefined, undefined, functionName ?? undefined, undefined,        undefined, body);      throw new Error(`Invalid syn        undefined, undefined,    if (value === undefined) {
      return ts.factory.createIdentifier('undefined');
         return ts.factory.createNewExpression(expression, undefined, args);
  }  createObjectLiteral(properties: ObjectLiteralProperty<ts.Expression>[]): ts.Expression {
      return ts.factory.createReturnStatement(expression ?? undefined);
  }  createTaggedTemplate(tag: ts.Expression, template: TemplateLiteral<ts.Expression>):
      ts.Expression {
    let templateLiteral: ts.TemplateLiteral;
    const length = template.elements.length;    if (length === 1) {        const {cooked, raw, range}        }    }
    if (head.range !== null) {
        variableName: string, initializer: ts.Expression|null,
      type: VariableDeclarationType): ts.Statement {
    variableName, undefined, undefined, initializer ?? undefined)],
PES  }  setSourceMapRange<T extends ts.Node>(node: T, sourceMapRange: SourceMapRange|null): T {
  }// HACK: Use this in place of `ts.createTemplateMiddle()`.
//   const node: ts.TemplateLiteralLikeNode = ts.factory.createTemplateHead(cooked, raw);
  (node.kind as ts.SyntaxKind) = ts.SyntaxKind.TemplateMiddle;
  return node as ts.TemplateMiddle;
}// HACK: Use this in place of `ts.createTemplateTail()`.export function createTemplateTail(cooked: string, raw: strin *export function attachComments(statement: ts.Statement, leading