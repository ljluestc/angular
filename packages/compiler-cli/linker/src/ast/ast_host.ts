/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * Return `true` if the given expression is a string literal, or false otherwise.
   */  /**
   * Parse the string value from the given expression, or throw if it is not a string literal.
   */   * Return `true` if the given expression is a numeric literal, or false otherwise.
   */
  isNumericLiteral(node: TExpression): boolean;  parseNumericLiteral(num: TExpression): number;  /**
   * Return `true` if the given expression can be considered a boolean literal, or false otherwise.
   *  isBooleanLiteral(node: TExpression): boolean;   * Parse the boolean value from the given expression, or throw if it is not a boolean literal.
   *
   * Note that this should also cover the specia   * Return `true` if the given expression is an  isArrayLiteral(node: TExpression): boolean;
  /**
   * Parse an array of expressions from the given expression, or throw if it is not an array
   * literal.  parseArrayLiteral(array: TExpression): TExpressi   */
  isObjectLiteral(node: TExpression): boolean;   * Parse the given expression into a map of object property names to property expressions, or
   * throw if it is not an object literal.
   */
  parseObjectLiteral(obj: TExpression): Map<str   */  /**   * statement, extracting the returned expression, or throw if it is not possible.
   */   * Return true if the given expression is a call expression, or false otherwise.
   */
  isCallExpression(node: TExpression): boolean;
  /**   * a call expression.
   */
  parseCallee(call: TExpression): TExpression;   *   */
  parseArguments(call: TExpression): TExpression}/**
 * The location of the start and end of an expression in the original source file.
 */
export interface Range {  startPos: number;
  /** 0-based line index of the range start in the source file text. */
  startLine: number;  startCol: number;  endPos: number;
}