/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ */  shouldImportSymbol(symbol: string, specifier: strin   }
}/**
 * A mapping of supported symbols that can be imported from */  [  ['ɵɵdefineNgModule', 'ɵɵdefineNgModule'],
  ['ɵɵsetNgModuleScope', 'ɵɵsetNgModuleScope'],
   ['ɵɵInjectableDeclaration', 'ɵɵInjectableDeclaration'],
   ['ɵNgModuleFactory', 'NgModuleFactory'],
  ['ɵnoSideEffects', 'ɵnoSideEffects'], * `ImportRewriter` that r */  constructor(private r3SymbolsPath: string) {}  shouldImportSymbol(symbol: string, specifier: string): boolean {
    return true;
     }    return validateAndRewriteCoreSymbol(symbol);
       // This module isn't core, so ignore it.
      return specifier;  }  i  }}
