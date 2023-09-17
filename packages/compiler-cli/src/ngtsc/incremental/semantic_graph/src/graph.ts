/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    if (previousSymbol === null && symbol.identifier !== nu    * Attempts to find the symbol by its identifier.
   */    if (!file.has(identifier)) {    }       }
    return this.symbolByDecl.get(decl)!;
  }
}      /**
       * The semantic dependency   registerSymbol(symbol: SemanticSymbol): void {
    this.newGraph.registerSymbol(symbol);
  }  /**
   * Takes all facts that have been gather      // If no prior dependency graph is available then this was the initial build, in which case
         return {
        needsEmit: new Set<AbsoluteFsPath>(),
        needsTypeCheckEmit: new Set<AbsoluteFsPath>(),
       }
    }    // The second phase is to find all symbols for which the emit result is affected, either because
    // their used declarations have changed or any of those used declarati         }      const previousSymbol = priorGraph.getEquivalentSymbol(symbol);
      if (previousSymbol === null || symbol.isEmitAffected(previousSymbol, isPublicApiAffected)) {
        needsEmit.add(symbol.path);
     }  private determineInvalidatedTypeCheckFiles(priorGraph: SemanticDepGraph): Set<AbsoluteFsPath> {
    const isTypeCheckApiAffected = new Set<SemanticSymbol>();    // The first phase is to collect all symbols which have their public API affected. Any symbols
         const previousSymbol = priorGraph.getEqui        isTypeCheckApiAffected.add(symbol);
      }
       // affected as determined in the first phase.
    const needsTypeCheckEmit = new Set<AbsoluteFsPath>();
    for (const symbol of this.newGraph.symbolByDecl.values()) {
   }        symbol: this.getSymbol(decl),    };
  }   * returns an opaque symbol that represents `decl`.  getSymbol(decl: ClassDeclaration): SemanticSymbol {
    const symbol = this.newGraph.getSymbolByDecl(decl);
    i      // declaration is external. Return an opaque symbol in that case, to allow the external
      // declaration to be compared to a prior compilation.      */    if (this.opaqueSymbols.has(decl)) {
      return this.opaqueSymbols.get(decl)!;
    }    const symbol = new OpaqueSymbol(decl);
     i  } else {
    return null;}
