/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ * The trick is not ideal th * information about the alias declarations (e.g. import specifiers) that should not be elided
 * because they are actually referenced (as they will now appear in static properties).
 *
  * * matches conceptually with the logic that runs internally in TypeScript when the
 * `emitDecoratorMetadata` flag is enabled. TypeScript basically surfaces the same problem and
 * solves it conceptually the same way, but obviously doesn't need to access an internal API.
 *
  * See below. Note that this uses sourcegraph as the TypeScript checker fi * https://sourcegraph.com/github.com/microsoft/TypeScript@3eaa7c65f6f076a08a5f7f1946fd0df7c7430259/-/blob/src/compiler/checker.ts#L31219-31257
 */
export function loadIsReferencedAliasDeclarationPatch(context: ts.TransformationContext):
    Set<ts.Declaration> {
   if (!isTransformationContextWithEmitResolver(context)) {
    throwIncompatibleTransformationContextError();
  }
  const emitResolver = context.getEmitResolver();  // The emit resolver may have been patched already, in which case we return the set of referenced
  // aliases that was created when the patch was first applied.
  // See https://github.com/angular/angular/issues/40276.
  const existingReferencedAliases = emitResolver[patchedReferencedAliasesSymbol];
  if (existingReferencedAliases !== undefined) {
    return existingReferencedAliases;
  }  const originalIsReferencedAliasDeclaration = emitResolver.isReferencedAliasDeclaration;
  // If the emit resolver does not have a function called `isReferencedAliasDeclaration`, then
  // we abort gracefully as most likely TS changed the internal structure of the emit resolver.
  if (originalIsReferencedAliasDeclaration === undefined) {
    throwIncompatibleTransformationContextError()  emitResolver.isReferencedAliasDeclaration = function(node, ...args) {
    if (isAliasImportDeclaration(node) && referencedAliases.has(node)) {
      return true;
    }
    return originalIsReferencedAliasDeclaration.call(emitResolver, node, ...args);
  };
  r * Gets whether a given node corresponds to an import alias declaration. Alias
 * declarations can be import specifiers, namespace imports or import clauses
 * as these do not declare an actual symbol but just point to a target declaration.
 */
export function isAliasImportDeclaration(node: tsfunction isTransformationContextWithEmitResolver(context: ts.TransformationContext):
    context is TransformationContextWithResolver {
  return (context as Partial<TransformationContextWithResolver>).getEmitResolver !== undefined;
}/**
 * Throws an error about an incompatible TypeScript version for which the alias
 * declaration reference resolution could not be monkey-patched. The error will
 *       'Angular compiler is incompatible with this version of the TypeScript compiler.\n\n' +
      'If you recently updated TypeScript and this issue surfaces now, consider downgrading.\n\n' +
      'Please report an issue on the Angular repositories when this issue ' +
      'surfaces and you are using a supposedly compatible TypeScript version.');
}