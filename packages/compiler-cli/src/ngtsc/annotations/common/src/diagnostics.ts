/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    // error there. If it ca        `'${node.name.text}' is listed in the declarations of the NgModule '${
gModule.name.text}'.`));
  }  // Finally, produce the diagnostic.      ErrorCode.NGMODULE_DECLARATION_NOT_UNIQUE, node.name,
      `The ${kind} '${node.name.text}' is declared by more than one NgModule.`, context);
}/**
 * Creates a `FatalDiagnosticError` for a node that did not evaluate to the expected type. The
 *  * trace to the node where the dynamic value originated. * @param node The node for which the diagnostic should be produced.
 * @param value The evaluated value that has the wrong type.
 * @param messageText The message text of the error.
 */
exp  let chainedMessage: string;
  let relatedInformation: ts.DiagnosticRelatedInformation[]|undefined;
  if (value instanceof DynamicValue) {
    chainedMessage = 'Value could not be determined statically.';
    relatedInformation = traceDynamicValue(node, value);
  } else if (value instanceof Reference) {
       relatedInformation = [makeRelatedInformation(referenceNode, 'Reference is declared here.')];
  } else {
    chainedMessage = `Value is of type '${describeResolvedType(value)}'.`;
  }  const chain: ts.DiagnosticMessageChain = {
    messageText,
    category: ts.DiagnosticCategory.Error,
         code: 0,
    }]
  };  return new FatalDiagnosticError(ErrorCode.VALUE_HAS_WRONG_TYPE, node, chain, relatedInformation);
}/* * @param providerClasses Classes that should be checked.
 * @param providersDeclaration Node that declares the providers array.
 * @param registry Registry that keeps track of the registered injectable classes.
 */  const diagnostics: ts.Diagnostic[] = [];  for (const provider of providerClasses) {
    const injectableMeta = registry.getInjectableMeta(provider.node);
          // provider.
           `The class '${
er.node.name
 .text}' cannot be created via dependency injection, as it does not have an Angular decorator. This will result in an error at runtime.Either add the @Injectable() decorator to '${
er.node.name
 .text}', or configure a different provider (such as a pro        [makeRelatedInformation(provider.node, `'${provider.node.name.text}' is declared here.`)]));
  }  return diagnostics;    node: ClassDeclaration, injectableRegistry: InjectableClassRegistry,
    evaluator: PartialEvaluator, reflector: ReflectionHost, scopeRegistry: LocalModuleScopeRegistry,
        if (more === null) {
         diagnostics.push(more);
    }
  };  const duplicateDeclarations = scopeRegistry.getDuplicateDeclarations(node);  if (duplicateDeclarations !== null) {  }  addDiagnostics(checkInheritanceOfInjectable(
      node, injectableRegistry, reflector, evaluator, strictInjectionParameters, kind));
  return diagnostics;    origin: ts.Expression, hostDirectives: HostDirectiveMeta[], metaReader: MetadataReader) {
  c      diagnostics.push(makeDiagnostic(    }    if (!hostMeta.isStandalone) {
      diagnostics.push(makeDiagnostic(
e.HO      diagnostics.push(makeDiagnostic(
e          requiredInputNames.length > 0 ? new Set(requiredInputNames) : null);
    validateHostDirectiveMappings('output', current, hostMeta, origin, diagnostics, null);
  }     bindingType: 'input'|'output', hostDirectiveMeta: HostDirectiveMeta, meta    requiredBindings: Set<ClassPropertyName>|null) {  c  const existingBindings = bindingType === 'input' ? meta.inputs : meta.outputs;
  const exposedRequiredBindings = new Set<string>();  for (const publicName in hostDirectiveMappings) {
    if (hostDirectiveMappings.hasOwnProperty(publicName)) rectiveMeta.directive.getOriginForDiagnostics(origin),
tiv      }      const remappedPublicName = host     remappedPublicName}, because it already has a different ${
     bindingType} with the same public name.`));        }
    indings.push(`'${name.bindingPropertyName}'`);
 gB  return makeDiagnostic(
      ErrorCode.UNDECORATED_CLASS_USING_ANGULAR_FEATURES, node.name,
   }  const classWithCtor = findInheritedCtor(node, injectableRegistry, reflector    // The class does not inherit a constructor, or th       // The inherited constructor exists in a class that does not have an Angular decorator.
    // This is an error, as there won't be a factory    return getInheritedUndecoratedCtorDiagnostic(node, classWithCtor.ref, kind);
  }  if (isFromDtsFile(classWithCtor.ref.node)) {
     return null;
  }  if (!strictInjectionParameters || isAbstractClassDeclaration(node)) {
   }export    evaluator: PartialEvaluator)  let      return null;
    }    const injectableMeta = injectableRegist      if (injectableMeta.ctorDeps !== null) {
            return {
e}function getInheritedInvalidCtorDiagnostic(    kind: 'Directive'|'Component'|'Pipe'|'Injectable') {
  const baseClassName = baseClass.debugName;  return makeDiagnostic(
      ErrorCode.INJECTABLE_INHERITS_INVALID_CONSTRUCTOR, node.name,
      `The ${kind.toLowerCase()} ${node.name.text} inherits its constructor from ${
sNaa  const baseClassName = baseClass.debugName;      kind === 'Component' || kind === 'Directive' ? 'Directive' : 'Injectable';  retur   NeedsDecorator} decorator ` +
seClassName}, or add an explicit constructor to ${no