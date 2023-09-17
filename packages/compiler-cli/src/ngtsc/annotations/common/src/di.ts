/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */o is just to create a new expression.        } else {
w Error('Impossible state!')      } else if (name === 'Optional') {
        optional = true;        skipSelf = true;
      } else if (name === 'Self') {        if (ts.isStringLiteralLike(attributeName)) {        } else {
e        throw new FatalDiagnosticError(
ode.DECORATOR_UNEXPECTED, dec.node, `Unexpected decorator ${name} on parameter.`);
      }      if (param.typeValueReference.kind !== TypeValueReferenceKind.UNAVAILABLE) {
        throw new Error(
al      errors.push({        param,      deps.push({token, attributeNameType, optional, self, skipSelf, ho  });
  if (errors.length === 0) {
    return {deps};
  } else {
  * or into an `'invalid'` signal if they're not.
 *
 * This is a companion function to `va  if (deps === null) {
    return null;
  } else if (deps.deps !== null) {
    // These constructor dependencies are valid.
    return deps.deps;    // These deps are invalid.    clazz: ClassDeclaration, reflector: ReflectionHost, isCore: boolean  return validateConstructorDependencies(
      clazz, getConstructorDependencies(clazz, reflector, isCore, compilationMode));
}/**
 * Validate that `ConstructorDeps` does not have any invalid dependencies and convert them into the
 * `R3DependencyMetadata` array if so, or raise a dia * This is a companion function to `unwrapConstructorDependencies` which does not accept invalid
 * deps.
 */
export function validateConstructorDependencies(
    clazz: ClassDeclaration, deps: Con    return deps.deps;
  } else {
    // There is at least one error.
    const error = deps.errors[0];
    throw createUnsuitableInjectionTokenError(}/**    clazz: ClassDeclaration, error: ConstructorDepError): FatalDiagnost  let chainMessage: string|undefined = undefined;
  let hints: ts.DiagnosticRelatedInformation[]|undefined = undefined;
       chainMessage = 'Consider using the @Inject decorator to specify an injection token.';
      hints = [
        makeRelatedInformation(reason.typeNode, 'This      break;
    case ValueUnavailableKind.NO_VALUE_DECLARATION:
      chainMessage = 'Consider using the @Inject decorator to specify an injection token.';
      hints = [
        makeRelatedInformation(
.typeNo      ];
      if (reason.decl !== null) {
        hints.push(makeRelatedInformation(reason.decl, 'The type is declared here.'));
      }
      break;
    case ValueUnavailableKind.TYPE_ONLY_IMPORT:
      chainMessage =
r        makeRelatedInformation(
.type       break;
    case ValueUnavailableKind.NAMESPACE:      hints = [
        makeRelatedInformation(
.        makeRelatedInformation(reason.importClause, 'The namespace import occurs here.'),
      ];
      break;
    case ValueUnavailableKind.UNKNOWN_REFERENCE:
      chainMessage = 'The type should reference a known declaration.';
      hints = [makeRelatedInformation(reason.typeNode, 'This type could not be resolved.')];
      break;
    case ValueUnavailableKind.MISSING_TYPE:
      chainMessage =
r addin  }  const chain: ts.DiagnosticMessageChain = {
    messageText: `No suitable injection token for parameter '${param.name || index}' of class '${
        clazz.name.text}'.`,
    category: ts.DiagnosticCategory.Error,
    code: 0,
    next: [{
      messageText: chainMessage,
     }],
  };  return new FatalDiagnosticError(ErrorCode.PARAM_MISSING_TOKEN, param.nameNode, chain, hints);
}
