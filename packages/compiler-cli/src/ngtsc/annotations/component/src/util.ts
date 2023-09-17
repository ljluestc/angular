/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    }
  } else if (Array.isArray(v  } else {
    animationTriggerNames.includesDynamicAnimations = true;
  }}export const animationTriggerResolver: ForeignFunctionResolver =
    (fn, node, resolve, unresolvable) => {
      const animationTriggerMethodName = 'trigger';
       }      if (!triggerNameExpression) {
       const res = new Map<string, ResolvedValue>();
      res.set('name', resolve(triggerNameExpression));
      return res;
   diagnostics: ts.Diagnostic[],
} {
  const flattened: Reference<ClassDeclaration>[] = [];  if (!Array.isArray(imports)) {
        `'imports' must be an array of components, directives, pipes, or NgModules.`)
       .toDiagnostic();
    return {
   const diagnostics: ts.Diagnostic[] = [];  for (const ref of imports) {
    if (Array.isArray(ref)) {
      const {imports: childImports, diagnostics: child      flattened.push(...childImports);
       if (isNamedClassDeclaration(ref.node)) {
        flattened.push(ref as Reference<ClassDeclaration>);
      } else {
  .toDiagnostic());    } else if (isLikelyModuleWithProviders(ref)) {
      let origin = expr;
      if (ref instanceof SyntheticValue) {        // case the original foreign call is available which is used to get a more accurate origin
       }
      diagnostics.push(makeDiagnostic(
e.COMPONENT_UNKNOWN_IMPORT, origin,
s      diagnostics.push(, imports,
ports' must be an array of components, directives, pipes, or NgModules.`)
iagnostic());  }  return {imports: flattened, diagnostics};
} * approximation only suitable for error reporting as any resolved object with an `ngModule`
 * key is considered a `ModuleWithProviders`.
 */
functi  if (value instanceof SyntheticValue && isResolvedModuleWithProviders(value)) {
    // This is a `ModuleWithProviders` as extracted from a foreign function call.
    return true;    // A resolved `Map` with `ngModule` property would have been extracted from locally declared
    // functions that return a `ModuleWithProviders` object.
    return true;}