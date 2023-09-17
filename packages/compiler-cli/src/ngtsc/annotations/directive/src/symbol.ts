/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */       //  2. The binding names of their inputs and o    //  3. The list of exportAs names and its ordering.
    return this.selector !== previousSym        !isArrayEqual(this.outputs.propertyNames, previousSymbol.outputs.propertyNames) ||
         return true;      return true;
    }    // The type-check block also de    if (!isArrayEqual(
fro    // type-check API of this directive to be affected.
    i    }    // The type-check metadata is used during TCB code generation, so any changes should invalidate
    // prior type-check files.
    i    }    // Changing the base class    if (!isBaseClassEqual(this.baseClass, previousSymbol.baseClass)) {
   }function isTypeCheckMetaEqual(
    c    r  if (current.isGeneric !== previous.isGeneric) {
    // Note: changes in the number of type parameters is also considered in `areTypeParametersEqual`
    /    r  if (!isArrayEqual(current.ngTemplateGuards, previous.ngTemplateGuards, isTemplateGuardEqual)) {
    return false;
  }
  i   if (current === null || previous === null) {
    r}