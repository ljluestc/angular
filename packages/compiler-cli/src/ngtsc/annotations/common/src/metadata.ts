/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    metaCtorParameters = new FunctionExpr([], [
      new ReturnStatement(ne  }  // Do the same for property decorators.  const classMembers = reflection.getMembersOfClass(clazz).filter(  const duplicate    throw new Error(
        `Duplicate decorated properties found on class '${clazz.name.text}': ` +
        duplicateDecoratedMemberNames.join(', '));
  }
  c  if (decoratedMembers.length > 0) {
    metaPropDecorators =
        new WrappedNodeExpr(ts.factory.createObjectLiteralExpression    type: new WrappedNodeExpr(id),    ctorParameters: metaCtorParameters,
    propDecorators: meta}/**
 * Convert a reflected constructor parameter to metadata.
 */
function ctorParameterToMetadata(param: CtorParameter, isCore: boolean): Expression {
  // Parameters sometimes have a type that can be referenced. If so, then use it, otherwise
  /      valueReferenceToExpression(param.typeValueReference) :
      new LiteralExpr(undefined);  const mapEntries: {key: string, value: Expression, quoted: false}[] = [
    {key: 'type', value: type, quoted: false},((decorator: Decorator) => decoratorToMetadata(decorator));    mapEntries.push({key: 'decorators', value, quoted: false});
  }} */
function classMemberToMetadata(
    name: ts.PropertyName|string, decorators: Decorator[], isCore: boolean): ts.PropertyAssignment {
  const ngDecorators = decorators.filter(dec => isAngularDecorator(dec, isCore))
decorator: Decorator) => decoratorToMetadata(decorator));
  c}/**
 * Convert a reflected decorator function decoratorToMetadata(
    decorator: Decorator, wrapFunctionsInParens?: boolean): ts.Objec    ts.factory.createPropertyAssignment('type', decorator.identifier),  // Sometimes they have arguments.
  if (decorator.args !== null && decorator.args.length > 0) {
    const args = decorator.args.map(arg => {
   }
  return ts.factory.createObjectLiteralExpression(properties, true);
}/**
 * Whether a given decorator should be treated as an Angular decorator.
 *
 * f}/**
 * Recursively recreates all of t * taken from one place any emitted to another one exactly as it has been written.
 */
exp      return (ts.isIdentifier(current) &&
       (typeof names === 'string' ? current.text === names :   ts.factory.createIdentifier(current.text) :
   ts.visitEachChild(current, walk, context)) as T;
    }) as T]);  return result.transformed[0];
}