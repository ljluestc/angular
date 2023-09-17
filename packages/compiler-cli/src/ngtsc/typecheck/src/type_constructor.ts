/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ * Inline type constructors  * @param meta additional metadata required to generate the type constructor.
 * @returns a `ts.MethodDeclaration` for  // is set to a return of `null!`. If the type constructor is being generated into a .d.ts file,
  // it needs no body.  if (meta.body) {
    bo    ]);
  }  // Create the type constructor method declaration.
  return ts.factory.createMethodDeclaration(
       /* name */ meta.fnName,      /* typeParameters */ typeParametersWithDefaultTypes(node.typeP      /* type */ rawType,  );    node: ClassDeclaration<ts.ClassDeclaration>, meta: TypeCtorMetad  // initType is the type of 'init', the single argument to the type constructor method.
  // If the Directive has any inputs, its initType will be:
  //
  // Pick<rawType, 'inputA'|'inputB'>
  //
  // P  //
  /  const coercedKeys: ts.PropertySignature[] = [];  for (const {classPropertyName, transform} of meta.fields.inputs) {
    if (!meta.coercedInputFields.has(classPropertyName)) {
     } else {
      coercedKeys.push(ts.factory.createPropertySignature(
/* modifiers */ undefined,
/* name */ classPropertyName,
/* questionToken */ undefined,
/* type */
transform == null ?  }    // Construct a union of all the field names.
    const keyTypeUnion = ts.factory.createUnionTypeNode(plainKeys);    // Construct the Pick<rawType, keyTypeUnion>.
    initType = ts.factory.createTypeReferenceNode('Pick', [rawType, keyTypeUnion]);
  }
  if (coercedKeys.length > 0) {
    const coercedLiteral = ts.factory.createTypeLiteralNode(coercedKeys);    initType = initType !== null ?
        ts.factory.createIntersectionTypeNode([initType, coercedLiteral]) :
        coercedLiteral;
  }  return ts.factory.createParameterDeclaration(      /* dotDotDotToken */ undefined,
      /* name */ 'init',
       /* initializer */ undefined);
}function generateGenericArgs(params: ReadonlyArray<ts.TypeParameterDeclaration>): ts.TypeNode[] {
  return params.map(param => ts.factory.createTypeReferenceNode(param.name, undefined));
}export function requiresInlineTypeCtor(
    node: ClassDeclaration<ts.ClassDeclaration>, host: ReflectionHost,
    env: ReferenceEmitEnvironment): boolean {
  // The class requires an inline type constructor if it has generic type bou * Add a default `= any` to type parameters that don't have a defaul * TypeScript uses the default type of a type parameter whenever inference of that parameter fails.
 * This can happen when inferring a complex type from 'any'. For ex *
 * ```
 * class NgFor<T> {
 *   ngForOf: T[];
 * } * declare function ctor<T>(o: Pick<NgFor<T>, 'ngForOf'|'ngForTrackBy'|'ngForTemplate'>): NgFor<T>;
 * ```
 *
 *  * * var _t2 = ctor({ngForOf: [1, 2] as any, ngForTrackBy: null as any, ngForTemplate: null as any});
 * ```
 *
 * then inference for `T` fails (it cannot be inferred from `T[] = any`). In this case, `T` takes
 * the type `{}`, and so `_t2` is inferred as `NgFor<{}>`. This is obviously wrong.
  * default type will be used in the event that inference fails.
 *
  *
 * var _t3 = ctor({ngForOf: [1, 2] as any});
 * ```
 *    return undefined;    if (param.default === undefined) {
      return ts.factory.updateTypeParameterDeclaration(ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword));
    } else {
      return param;
    }
  });