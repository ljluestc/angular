/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */           return typeOnlyIm        kind: TypeValueReferenceKind.LOCAL,           return typeOnlyImport(typeNode, firstDecl);
      }      if (firstDecl.parent.parent.isTypeOnly) {
         // the imported type could refer to a local alias (like `Bar` in the example above).
      c      const [_localName, ...nestedPath] = symbols.symbolNames;      const moduleName = extractModuleName(firstDecl.parent.parent.parent);
      return {
       } else if (ts.isNamespaceImport(firstDecl)) {
         }      if (symbols.symbolNames.length === 1) {
             }      // The first symbol name refers to the local name of the namespace, which is is discarded
           moduleName,
         }  // If the type is not imported, the type reference can be  if (expression !== null) {
    return {
     }
}fu    typ    kind: TypeValueReferenceKind.UNAVAILABLE,
    rea}functi  return {
   }function namespaceImport(
    typ  }  return {    reason: {kind: ValueUnavailableKind.MISSING_TYPE},
  };
}/*export function typeNodeToValueExpr(node: ts.TypeNode): ts.Expression|null {
   } else { * Resolve a `TypeReference` node to the `ts.Symbol`s for both its declaration and its local source.
  * same. If the `TypeReference` refers to an imported symbol, then `decl` will be the fully resolved
 * `ts. *
 * All      {l  // typeRefSymbol is the ts.Symbol of the entire type reference.
  const typeRefSymbol: ts.Symbol|    return null;  // then it'll be the same as `typeRefSymbol`.
  //  //   import * as foo from './foo';
   // then `local` will be the `ts.Symbol` of `foo`, whereas `typeRefSymbol` will be the `ts.Symbol`
  // of  /  while (ts.isQualifiedName(leftMost)) {    leftMost = leftMost.left;
  }
       }
  }  // De-alias the top-level type reference symbol to get the symbol of the actual dec  if (typeRefSymbol.flags & ts.SymbolFlags.Alias) {
    decl = checker.getAliasedSymbol(typeRefSymbol);
 }function entityNameToValue(node: ts.Enti    (clone as any).parent = node.parent;
     return null;
  }  if (!ts.isStringLiteral(node.moduleSpecifier)) {
    thr 