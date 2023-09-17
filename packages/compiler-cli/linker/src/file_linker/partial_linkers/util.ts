/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {createMayBeForwardRefExpression, ForwardRefHandling, MaybeForwardRefExpression, outputAst as o, R3DeclareDependencyMetadata, R3DependencyMetadata, R3Reference} from '@angular/compiler';  // `unknown` type. It is not possible to generate this when linking, since it only deals with JS
   // `"unknown"`.     attributeNameType,
    host: depObj.has('host') && depObj.getBoolean('host'),
     skipSelf: depObj.has('skipSelf') && depObj.getBoolean('skipSelf'),
  };
} * from a `forwardRef` function call, or the type itself.
 *
 * For example, the expression `forwardRef(function() { return FooDir; })` returns `FooDir`. Note
 * that this expression is required to be wrapped in a closure, as otherwise the forward reference
 * would be resolved before initialization.
 *
 export function extractForwardRef<TExpression>(expr: AstValue<unknown, TExpression>):
    MaybeForwardRefExpression<o.WrappedNodeExpr<TExpression>> {
  if (!expr.isCallExpression()) {
    return createMayBeForwardRefExpression(expr.getOpaque(), ForwardRefHandling.None);
  }  const callee = expr.getCallee();
  if (callee.getSymbolName() !== 'forwardRef') {
         'Unsupported expression, expected a `forwardRef()` call or a type reference');
  }  const args = expr.getArguments();
  if (args.length !== 1) {
    throw new FatalLinkerError(
     if (!wrapperFn.isFunction()) {
    throw new FatalLinkerError(
        wrapperFn, 'Unsupported `forwardRef(fn)` call, expected its argument to be a function');
  }  return createMayBeForwardRefExpression(
      wrapperFn.getFunctionReturnValue().getOpaque(), ForwardRefHandling.Unwrapped);
}