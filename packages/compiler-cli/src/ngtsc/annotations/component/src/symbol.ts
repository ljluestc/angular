/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      previousSymbol: SemanticSymbol, typeCheckApiAffected: Set<SemanticSymbol>): boolean {
    i    }    // To verify     const isInheritan      while (currentSymbol instanceof DirectiveSymbol) {rue        currentSymbol = currentSymbol.baseClass;
      }      return false;
    }    /        isReferen    // API affected.
    const isPipeUnaffected = (current: SemanticReference, previous: SemanticReference) =>
        isReferenceEqual(current, previous) && !typeCheckApiAffected.has(current.symbo       //     changed.
    ret        !isArrayEqual(this.usedPipes, previousSymbol.usedPipes, isPipeUnaffected);
  }