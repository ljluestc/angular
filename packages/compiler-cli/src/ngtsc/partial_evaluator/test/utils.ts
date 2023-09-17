/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';  options: ts.CompilerOptions
} {    {name: absoluteFrom('/entry.ts'), contents: `${code}; const target$ = ${expr};`},
    ...supportingFiles
  ]);  const decl =
      getDeclaration(program, absoluteFrom('/entry.ts'), 'target$', ts.isVariableDeclaration);
  return {    host,
    options,
    checker,  };
}export function makeEvaluator(
    checker: ts.TypeChecker, tracker?: DependencyTracker): PartialEvaluator {
  const reflectionHost = new TypeScriptReflectionHost(checker);
  return new PartialEvaluator(reflectionHost, checker, tracker !== undefined ? tracker : null);
}    foreignFunctionResolver?: ForeignFunctionResolver): T {
  const {expression, checker} = makeExpression(code, expr, supportingFiles);
  const evaluator = makeEvaluator(checker);
  return evaluator.evaluate(expression, foreignFunctionResolver) as T;
}    expr: ts.CallExpression, resolve: (expr: ts.Expression) => ResolvedValue): ResolvedValue {
  return resolve(expr.arguments[0]);
}export const arrowReturnValueFfr: ForeignFunctionResolver = (_fn, node, resolve) => {
  // Extracts the `Foo` from `() => Foo`.
 