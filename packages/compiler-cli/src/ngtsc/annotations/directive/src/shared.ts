/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  decorator: Map<string, ts.Expression>,
  metadata: R3DirectiveMetad  let directive: Map<string, ts.Expression>;
  if (decorator === null || decorator.args === null || decorator.args.length === 0) {
    directive = new Map<string, ts.Expression>();           `Incorrect number of arguments to @${decorator.name} decorator`);
  } else {
    const meta = unwrapExpression(decorator.args[0]);
    if (!ts.isObjectLiteralExpression(meta)) {
      throw new FatalDiagnosticError(rat    directive = reflectObjectLiteral(meta);
  }  if (directive.has('jit')) {
    // The only allowed value is true, so there's no need to expand further.
    return undefined;
  }  const members = reflector.getMembersOfClass(clazz);  // Precompute a list of ts.ClassElements that have decorators. This includes things like @Input,
  // @Output, @HostBinding, etc.
  c  // decorator, and the decorated fields.
  c      clazz, filterToMembersWithDecorator(decoratedElements, 'Input', coreModule), evaluator,
      reflector, refEmitter);
  const inputs = ClassPropertyMapping.fromMappedObject({...inputsFromMeta, ...inputsFromFields});  // And outputs.
  c      filterToMembersWithDecorator(decoratedElements,  const contentChildFromFields = queriesFromFields(
      filterToMembersWithDecorator(decoratedElements, 'ContentChild', coreModule), reflector,
      evaluator);
  const contentChildrenFromFields = queriesFromFields(      evaluator);  const queries = [...contentChildFromFie      filterToMembersWithDecorator(decoratedElements, 'ViewChild', coreModule), reflector,
      evaluator);
  c      evaluator);
  const viewQueries = [...viewChildFromFields, ...viewChildrenFromFields];  if (directive.has('queries')) {
    const queriesFromDecorator =    queries.push(...queriesFromDecorator.content);
     let selector = defaultSelector;    if (typeof resolved !== 'string') {
      throw createValueHasWrongTypeError(expr, resolved, `selector must be a string`);
    }
    // use default selector in case selector is an empty string    if (!selectore.DIRECTIVE_MISSING_SELECTOR, expr,    }      new WrappedNodeExpr(
ForClosureCompiler ?
Fun      null;  // Determine if `ngOnChanges` is a lifecycle hook defined on the component.
  const usesOnChanges = members.some(ame === 'ngOnChanges');  // Parse exportAs.
  let exportAs: string[]|null = null;    const expr = directive.get('exportAs')!;
       exportAs = resolved.split(',').map(part => part.t  const ctorDeps = selector !== null ? validateConstructorDependencies(clazz, rawCtorDeps) :
structorDependencies(rawCtorDeps);  // Structural directives must have a `TemplateRef` dependency.
  const isStructural = ctorDeps !== null && ctorDeps !== 'invalid' &&
      ctorDeps.some(token.value.modul  if (directive.has('standalone')) {    c  let isSignal = false;
  if (directive.has('signals')) {
       if (typ    }
    isSignal = resolved;  const usesInheritance  const type = wrapTypeReference(reflector, clazz);
  const rawHostDirectives = directive.get('hostDirectives') || null;      rawHostDirectives === null ? null : extractHostDirectives(rawHostDirectives, evaluator);  if (hostDirectives !== null) {
     }  const metadata: R3DirectiveMetadata = {    outputs: outputs.toDirectMappedObject(),
    queries,    selector,
    fullInheritance: false,
    type,    typeSourceSpa    isStandalone,    hostDirectives:    metadata,
    inputs,
       hostDir  };
}export function extractQueryMetadata(    throw new FatalDiag  }
  const first = name === 'ViewChild' || name === 'ContentChild';  const node = forwardReferenceTarget ?? args[0];  const arg = evaluator.evaluate(node);  /**   let predicate: MaybeForwardRefExpression|string[]|null = null;
  i       predicate = [arg];  let descendants: boolean = name !== 'ContentChildren';
  let emitDistinctChangesOnly: boo    const optionsExpr = unwrapExpression(args[1]);
    if (!ts.isObjectLiteralExpression(optionsExpr)) {
      throw new FatalDiagnosticError(} options must be      read = new WrappedNodeExpr(options.      descendants = descendantsValue;
    }    if (options.has('emitDistinctChangesOnly')) {
      const emitDistinctChangesOnlyExpr = options.get('emitDistinctChangesOnly')!;
      const emitDistinctChangesOnlyValue = evaluator.evaluate(emitDistinctChangesOnlyExpr);
      if (tstinctChangesOnlyExpr, emitDistinctChangesOnlyValue,
m      emitDistinctChangesOnly = emitDistinctChangesOnlyValue;        throw createVal      }
      isStatic = staticValue;    // Too many arguments.        ErrorCode.DECORATOR_ARITY_WRONG    propertyName,    read,
    static: isStatic,
   }export function extractHostBindings(
     let bindings: ParsedHostBindings;
  i  } else {  }        decorators.forEach(decorator => {rator.args !== null && decorator.args.length > 0) {
corator.args.length !== 1) {
w new FatalDiagnosticError(   `@HostBinding can have at most one argument, got ${
       decorator.args.length} argument(s)`);resolved = evaluator.evaluate(decorator.args[0]);
peof resolved !== 'string') {
w createValueHasWrongTypeError(
   decorator.node.properties[hostPropertyName] = getSafePropertyAccessString('this', member.n        decorators.forEach(decorator => {
tNarator.args !== null && decorator.args.length > 0) {w new FatalDiagnosticError(
   ErrorCode.DECORATOR_ARITY_WRONG, decorator.args[2],
   `@w createValueHasWrongTypeError(
   decorator.args[0], resolved,
   `@HostListener's event name argument must be a string`);ame = resolved;corator.args.length === 2) {
t expressio!isStringArrayOrDie(resolvedArgs, '@HostListener.args', expression)) {
      `@HostListener's second argument must be a string array`); = resolve    isCore: boolean): {  view: R3QueryMetadata[],
} {
  con    throw new FatalDiagnosticError(
        ErrorCode.VALUE_HAS_WRONG_TYPE, queryData  }      throw new FatalDiagnosticError(    const queryType = ts.isPropertyAccessExpression(queryExpr.expression) ?
        queryExpr.expression.name :
         throw new FatalDiagnosticError(
e.V    }
           !QUERY_TYPES.has(type.name)) {e.V    if (type.name.startsWith('Content')) {
      content.push(query);
    } else {
      view.push(query);
    }  return {content, view};
}export function parseDirectiveStyles(
    directive: Map<string, ts.Expression>, evaluator: PartialEvaluator,
    compilationMode: CompilationMode): null|string[] {
  const expression = directive.get('styles');  if (!expression) {
    return null;  const value = typeof evaluated === 'string' ? [evaluated] : evaluated;  // Create specific error if any string is imported from external file in local compilation mode
  if (compilationMode === CompilationMode.LOCAL && Array.isArray(value)) {
    fy.node
   .getText()} (did you import this string from another file? This is not allowed in local compilation mode. Please either inline it or move it to a separate file and include it using 'styleUrl')`,
: tdInformation);    }
  }  if (!isStringArrayOrDie(value, 'styles', expression)) {
    t        `Failed to resolve @Component.styles to a string or an array of strings`);
  }  return value;
}export function parseFieldStringArrayValue(    string[] {
  if (!dire  }  // Resolve the field of interest from the directive metadata to a string[].
   if (!isStringArrayOrDie(value, field, expression)) {        expression, value, `Failed to resolve @Directive.${field} to a string array`);
  }      throw createValueHasWrongTypeError(
lue[i], `Failed to reso  }
  return true;
}func    evaluator: PartialEvaluator): R3QueryMetadata[] {
  return fields.map(({member, decorators}) => {    const node = member.node || decoratcombine e.DECORATOR_COLLISION, node,
have multiple query decorators on the same class member');
    } else if (!isPropertyTypeMember(member)) {
      throw new FatalDiagnosticError(
e.DECORATOR_UNEXPECTED, node,
eco    return extractQueryMetadata(
   }function isPropertyTypeMember(member: ClassMember): boolean {       results[fieldName] = bindingPropertyName;
    return results;
  }, {} as {[field: string]: string});
}function parseMappingString(value: string): [bindingPropertyName: string, fieldName: string] {
  // Either the value is 'field' o  const [fieldName, bindingPropertyName] = value.split(':', 2).map(str => str.trim());
  * Parse property decorators (e.g. `Input` or `Output`) and invoke callback with the parsed data.
 */
function parseDecoratedFields(
    fields: {member: ClassMember, decorators:  for (const field of fields) {
    const fieldName = field.member.ncorator.name} can have at most one argument, got ${      }      const value = decorator.args != null && decorator.args.length > 0 ?
r.evaluate(decorator.args[0]) :      callback(fieldName, value, decorator);
    }    refEmitter: ReferenceEmitter): Record<string, InputMapping> {
  const inputsField = decoratorMetadata.get('inputs');  if (inputsField === undefined) {
    return {};  const in        inputsField, inputsArray, `Failed to resolve @Directive.inputs to an array`);
  }  for (let i = 0; i < inputsArray.length; i++) {
    const value = inputsArray[i];    if (typeof value === 'string') {
      // If the value is a string, we treat it as a mapping string.
      const [bindingPropertyName, classPropertyName] = parseMappingString(value);
           classPropertyName,
           };
         const name = value.get('name');
       let transform: InputTransform|null = null;      if (typeof name !==Field, name,
 at position ${i} of @Directive.inputs array must have a "name" property`);
      }      if (value.has('transform')) {
   tsField, transformValue,
n      }      inputs[name] = {        bindingPropertyName: typeof alias === 'string' ? alias : name,
       evaluator: PartialEvaluator, reflector: ReflectionHost,
    refEmitter: ReferenceEmitter): Record<string, InputMapping> {
  const inputs = {} as Record<string, InputMapping>;  parseDecoratedFields(inputMembers, evaluator, (classPropertyName, options, decorator) => {
    let bindingPropertyName: string;
    let required = false;
         } else if (options instanceof Map) {
      const aliasInConfig = options.get('alias');      required = options.get('required'      rator.name} decorator argument must resolve to a string or an object literal`);
    }    inputs[classPropertyName] = {bindingPropertyName, classPropertyName, required, transform};
  });  return inputs;
}/** Parses the `transform` function and its type of a specific input. */
function parseInputTransformFunction(
     const definition = reflector.getDefinitionOfFunction(value.node);  if (definition === null) {
    throw createValueHasWrongTypeError(value.node, value, 'Input transform must be a function');
  }  if (definition.typeParameters !== null && definition.typeParameters.length > 0) {
   }  if (definition.signatureCount > 1) {
    throw createValueHasWrongTypeError(
     if (node === null) {
    throw createValueHasWrongTypeError(
        value.node, value, 'Input transform function could not be referenced');
   // is using the name, TS doesn't have a special AST for them.
  const firstParam = definition.parameters[0]?.name === 'this' ? definition.parameters[1] :
     definition.parameters[0];  // Treat functions with no arguments as `unknown` since returning
  // the same value from the transform function is valid.
     throw createValueHasWrongTypeError(
        value.node, value, 'Input transform function first parameter must have a type');
  }  if (firstParam.node.dotDotDotToken) {
    throw createValueHasWrongTypeError(  }  assertEmittableInputType(firstParam.type, clazz.getSourceFile(), reflector, refEmitter);  return {node, type: firstParam.type};
}/** * it can be referenced in a specific context file.
 */    type: ts.TypeNode, contextFile: ts.SourceFile, reflector: ReflectionHost,
    refEmitter: ReferenceEmitter): void {    if         // If the type is declared in a different file, we have to check that it can be imported
        // into the context file. If they're in the same file, we need to verify that they're
     rCode.SYMBOL_NOT_EXPORTED, type,
bol must be exported in order to be used as the type o        }
      }function p}/** Parses the class members that are decorated as outputs. */
fun    evaluator: PartialEvaluator): Record<string, string> {
  const outputs = {} as Record<st      throw createValueHasWrongTypeError(
r.node, bindingPropertyName,
rator.name} decorator argument must resolve to a string`);
   }function evaluateHostExpressionBindings(
    h  if (!(hostMetaMap instanceof Map)) {
     }
     // Resolve Enum references to their declared      value = value.resol      throw createValueHasWrongTypeError(
, key,
or host      hostMetadata[key] = value;
   , value,
o    thr        // triggered an error instead of the whole host         errors.map((error: ParseError) => error.msg).join('\n'));
  } *    rawHostDirectives: ts.Expression, evaluator: PartialEvaluator): HostDirectiveMeta[] {
     }    if (!isNamedClassDeclaration(hostReference.node)) {
      throw createValueHasWrongTypeError(
irectives, hostReference, 'Host directive reference must be a class');
    }    const meta: HostDirectiveMeta = {      isForwardReference: hostReference.synthetic,
      inputs: parseHostDirectivesMapping('inputs', value, hostReference.node, rawHostDirectives),
      outputs: parseHostDirectivesMapping('outputs', value, hostReference.node, rawHostDirectives),
  * @ * @param classReference Reference to the host directive class.
 * @param sourceExpression Expression that the hofunction parseHostDirectivesMapping(       refEmitter: ReferenceEmitter): R3HostDirectiveMetadata {
  return {        toR3Reference(hostDirective.directive.node, hostDirective.directive, context, refEmitter),
    isForwardReference: hostDirective.isForwardReference,
    i  };
}/**   return {
     required: mapping.required,
    transformFunction: mapping.transform !== null ? new WrappedNodeExpr(mapping.transform.node) :
       null
  };
}