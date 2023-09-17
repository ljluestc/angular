/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    }    // * `(...) => { stmt; ... }`     }    return call.callee;  parseArguments(call: t.Expression): t.Expression[] {    return call.arguments.map(arg => {
      assert(arg, isNotSpreadArgument, 'argument not to use spread syntax');
      assert(arg, t.isExpression, 'argument to be an expression');
         throw new FatalLinkerError(    }}/**
 * Return true if the expression does not represent an empty element in an array literal.
 * For example in `[,foo]` the first efunction isNotEmptyElement(e: t.Expression|t.SpreadElement|null): e is t.Expression|
    * }/** */ * Return true if the argument is not a spread element.
 */
function isNotSpreadArgument(arg: ArgumentType): arg is Exclude<ArgumentType, t.SpreadElement> {
  r      t.isNumericLiteral(node.argument) 