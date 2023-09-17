/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';  public readonly identifier: string|null;  constructor(
      /**       */  ) {
    this.path = absoluteFromSourceFile(dec  }  /**
   * Allows the symbol to be compared t   * is affected.
   *
   * This method determines whether a change to _this_ symbol require the symbols that
   * use to this symbol to be re-emitted.      *
   * @param previousSymbol The symbol f  abstract isPublicApiAffected(previousSymbol: SemanticSymbol): boolean;  /**
   * Allows the symbol to determine whether its emit is affected. The equivalent symbol from a prior
   * build is given, in addition to the set of symbols of which the public API has changed.
   *      * @param previousSymbol The equivalent symbol from a prior compilation. Note that it may be a
   * different type of symbol, if e.g.    */   * Similar to `isPublicApiAffected`, but here equivalent symbol from a prior compilation needs
   * to be compared to see if the type-check block of components that use this symbol is affected.
   *
   * This method determines whether a chan      * failed compilations are never provided.
   *
   * @param previousSymbol The symbol from a prior compilation.
   */   * should cause _this_ symbol's type-check block to be regenerated.
   *
   * @param previousSymbol The equivalent symbol from a prior compilation. Note that it may be a
   * different type of symbol, if e.g. a C         (previousSymbol: SemanticSymbol, typeCheckApiAffected: Set<SemanticSymbol>): boolean;
}/**
 * Represents a reference to a semantic symbol that has been emitted into a source file. The
 * reference may refer to the symbol using a different name than the semexport interface SemanticReference {
  symbol: SemanticSymbol;  /**
   * The path by which the symbol has been referenced.
   */
  importPath: string|null;
}fu    return null;
   // across rebuilds, unless the declaration node has not changed.
  return decl.name.text;
}