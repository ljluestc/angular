/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';  hasGenericTypeBound: boolean;
}/** * does not have any type parameters, then `null` is returned.
 */
e  if (!ts.isClassDeclaration(node) || node.typeParameters === undefined) {
    return null;
  }  return node.typeParameters.map(
      typeParam => ({hasGenericTypeBound: typeParam.constraint !== undefined}));
} */
export function areTypeParametersEqual(
     // parameters has changed.
  if (!isArrayEqual(current, previous, isTypeParameterEqual)) {
   if (current !== null && current.some(typeParam => typeParam.hasGenericTypeBound)) {
    return false;
  }  return a.hasGenericTypeBound === b.hasGenericTypeBound;
}
