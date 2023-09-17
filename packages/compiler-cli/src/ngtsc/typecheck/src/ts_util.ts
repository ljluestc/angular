/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *///
const SAFE_TO_CAST_WITHOUT_PARENS: Set<ts.SyntaxKind> = new Set([
  // Expressions which are already parenthesized can be cast without further wrapping.
  ts.SyntaxKind.ParenthesizedExpression,  // Expressions which form a single lexical unit leave no room for precedence issues with the cast.
  ts.SyntaxKind.Identifier,
  ts.SyntaxKind.CallExpression,  ts.SyntaxKind.ElementAccessExpression,
  ts.SyntaxKind.PropertyAccessExpression,
  ts.SyntaxKind.ArrayLiteralExpression,  ts.SyntaxKind.StringLiteral,
  ts.SyntaxKind.NumericLiteral,
  ts.SyntaxKind.TrueKeyword,]);export function tsCastToAny(expr: ts.Expression): ts.Expression {
  // Wrap `expr` in parentheses if needed (see `SAFE_TO_CAST_WITHOUT_PARENS` above).
  if (!SAFE_TO_CAST_WITHOUT_PARENS.has(e    * Create an expression which instantiates an element by its HTML tagName.
 *
 * Thanks to narrowing of `document.crea  r      /* typeArguments */ undefined,
      /* argumentsArray */[ts.factory.createStringLiteral(tagName)]);
}/**
 * Create a `ts.VariableStatement` which * Unlike with `tsCreateVariable`, the type of the variable is explicitly specified.
 */  const decl = ts.factory.createVariableDeclaration(
      /* name */ id,
       /* initializer */ ts.factory.createNonNullExpression(ts.factory.createNull()));
  return ts.factory.createVariableStatem * Creates a `ts.TypeQueryNode` for a coerced input.
 * * is the `coercedInputName`.
 *
  */
export function tsCreateTypeQueryForCoercedInput(
     * Create a `ts.VariableStatement` that initializes a variable with a given expression.
 *
 *  */
export function tsCreateVariable(
       /* name */ id,
      /* exclamationToken */ undefined,
     * Construct a `ts.CallExpression` that calls a method on a receiver.
 */
export function tsCallMethod(
    receiver: ts.Expression, methodName: string, args: ts.Expression[] = []): ts.CallExpression {
  const methodAccess = ts.factory.createPropertyAccessExpression(receiver, methodName);
  return ts.factory.createCallExpression(
       /* argumentsArray */ args);
}export function isAccessExpression(node: ts.Node): node is ts.ElementAccessExpression|
    ts.PropertyAccessExpression {
  return ts.isPropertyAccessExpression(node) || ts.isElementAccessExpression(node);
}