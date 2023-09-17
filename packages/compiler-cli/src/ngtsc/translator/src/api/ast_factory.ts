/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   *
   * @param statement the statement where the comments are to be attached.
   * @param leadingComments the comments to attach.
   */
  attachComments(statement: TStatement, leadingComments: LeadingComment[]): void;  /**
   * Create a literal array expression (e.g. `[expr1, expr2]`).
   *   */
  createArrayLiteral(elements: TExpression[]): TExpression;  /**
   * Create an assignment expression (e.g. `lhsExpr = rhsExpr`).   * @param target an expression that evaluates to the left side of the assignment.
   * @param value an expression that evaluates to the right  createAssignment(target: TExpression, value: TExpression): TExpression;  /**
   * Create a binary expression (e.g. `lhs && rhs`).   * @param leftOperand an expression that will appear on the left of the operator.
   * @param operator the binary operator that will be appli   */      leftOperand: TExpression, operator: BinaryOperator, rightOperand: TExpression): TExpression;  /**
   * Create a block of statements (e.g. `{ stmt1; stmt2; }`).   * @param body an array of statements to be wrapped in a block.
   */   * Create an expression that is calling the `callee` with the given `ar   * @param callee an expression that evaluates to a function to be called.   * @param pure whether to mark the call as pure (having no side-effects).
   */   * Create a ternary expression (e.g. `testExpr ? trueExpr : falseExpr`).
   *   */      condition: TExpression, thenExpression: TExpression,   * Create an element access (e.g. `obj[expr]`).
   *
   * @param expression an expression that evaluates to the object to be accessed.   */
  createElementAccess(expression: TExpression, element: TExpression): TExpression;  /**
   * Create a statement that is simply executing the given   createExpressionStatement(expression: TExpression): TStatement;  /**   *   */
  createFunctionDeclaration(functionName: string, parameters: string[], body: TStatement):
      TStatement;  /**   * (e.g. `function foo(param1, param2) { stmt; }`).
   *   * @param parameters the names of the function's parameters.
   * @param body a statement (or a block of statements) that are the body of the function.
   */      TExpression;  /**
   * Create an expression that represents an arrow function   *   * @param body an expression or block of statements that are the body of the function.   * (e.g. `import('./some/path')`)
   *
   * @param url t  createDynamicImport(url: string): TExpression;  /**   *
   * @param name the name of the identifier.  createIdentifier(name: string): TExpression;  /**
   * Create an if statement (e.g. `if (testExpr) { trueStmt; } else { falseStmt; }`).
   *   * @param thenSt   * @param elseStatement a statement (or block of statements) that is executed if `condition` is
   *     falsy.  createIfStatement(
      condition: TExpression, thenStatement: TStatement,
      elseStatement: TStatement|null): TStatement;  /**   * Create an expression that is instantiating the `expression` as a class.
   *
   * @param expre   */   * Create a literal object expression (e.g. `{ prop1: expr1, prop2: e   * @param properties the properties (key and value) to appear in the object.
   */   * Wrap an expression in parentheses.   * @param expression the expression to wrap in parentheses.
   */
  createParenthesizedExpression(expression: TE   *   * @param propertyName the name of the property to access.
   */   * Create a return statement (e.g `return expr;`).
   *
   * @param expression the expression to be return  createReturnStatement(expression: TExpression|null): TStatement;  /**
   * Create a tagged template literal string. E.   * ```   * @param tag an expression that is applied as a tag handler for this template string.
   * @param template the collection of strings and expressions that constitute an interpolated
   *     template literal.
   */   * Create a throw statement (e.g. `throw expr;  createThrowStatement(expression: TExpr   *
   * @param expression the expression whose type we want.   *   * @param operand the expression that the operator applies to.
   */
  createUnaryExpression(operator: UnaryOperator, operand: TExpression)   *
   * @param variableName the name of the variable.
   * @param initia   */
  createVariableDeclaration(   *
   * @param node the node to which the range should be attached.
   * @param sourceMapRange the range to attach to    */      T;
}/** * The unary operators supported by the `AstFactory`.export type UnaryOperator = '+'|'-'|'!';/**
 * The binary operators supported by the `AstFactory`.
 */
export type Binarexport interface SourceMapLocation {  line: number;  column: number;
}/**
 * The original range of a node created by the `AstFactory`.
 */}/** */
export interface ObjectLiteralProperty<TExpression> {
  propertyName: string;  /**   */
  quoted: boolean;
}/** * string with interpolations).
 */  /**
   * A collection of the interpolated expressions that are interleaved between the elements.
   */}/** */
e  raw: string;
  /** The parsed string, with escape codes etc processed. */  /** The original location of this piece of the template }/**
 * Information used by the `AstFactory` to prepend a comment to a statemen */  toString(): string;
  multiline: boolean;
  trailingNewline: boolean;
}