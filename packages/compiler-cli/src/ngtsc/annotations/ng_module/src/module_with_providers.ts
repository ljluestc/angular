/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      return null;        null;
    if (typeName === null) {
      return null;
    }    if (id === null || id.name !== 'ModuleWithProviders') {    }    // If it's not from @angular/core, bail.
    if (!isCore && id.from !== '@angular/core') {
      return null;
    }    // If there's no type parameter specified, bail.
    ie.NGMODULE_MODULE_WITH_PROVIDERS_MISSING_GENERIC, type,
lName} returns a ModuleWithProviders type without a generic type argument. ` +
ase a    }    const arg = type.typeArguments[0];    return typeNodeToValueExpr(arg);
  }  /**
   * Retrieve an `NgModule` identifier (T) from the specified `type`, if it is of the form:
   *    * @returns the identifier of the NgModule type if found, or null otherwise.
   */      if (ts.isTypeLiteralNode(t)) {
        for (const m of t.members) {
Modul;duleExpression) {      }
     }  return (fn, callExpr, resolve, unresolvable) => {
    const rawType = fn.node.type;
    i    }    const type =
           return unresolvable;
    }    return new SyntheticValue({
         }}export interface ResolvedModuleWithPr    sv is SyntheticValue<ResolvedModuleWithProviders> {
  r   