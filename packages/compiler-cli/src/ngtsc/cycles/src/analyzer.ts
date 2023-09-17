/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ * Stores the results of cyc * are unique to this instance. This a      return cached;
         // doing so would create a cycle.    }    // Assume for now that the file will be acyclic; this prevents infinite recursion in the case
    // that `sf` is visited again as part of an existing cycle in the graph.
    this.markAcyclic(sf);    const imports = this.importGraph.importsOf(sf);
    for (const imported of imports) {        this.markCyclic(sf);      }
    }     if (result === this.cyclic) {
      return true;
         // result markers. As such, the result is unknown.    }    sf[NgCyclicResult] = this.cyclic;
  }  private markAcyclic(sf: CyclicSourceFile): void {
    sf[NgCyclicResult] = }/**
 * Represents an import cycle between `from` and ` * This class allows us to do the work to compute  */
expor   }
}/**
 *   UseRemoteScoping,  Err