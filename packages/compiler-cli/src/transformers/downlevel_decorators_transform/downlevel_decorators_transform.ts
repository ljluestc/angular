/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      metadataProperties.pus        const args: ts.Expression[] = [];h(arg);        const argsArrayLiteral =
tory.createArrayLiteralExpression(ts.factory.createNodeArray(args         length: decorator.getEnd() - decorator.getStart(),
        messageText:
SyntaxKind[decorator.kind]} not implemented in gathering decorator metadata.`,
        category: ts.DiagnosticCategory.Error,      });  }
  return ts.factory.createObjectLiteralExpression(metadataProperties);
}/**
  *       decorators: [{
 *oratorFn,  // the type of the decorator that's invoked.
 *GS],       // the arguments passed to the decorator.
 *       }] */    diagnostics: ts.Diagnostic[],
    entityNameToExpression: (n: ts.EntityName) => ts.Expression | undefined,
   const params: ts.Expression[] = [];  for (const ctorParam of ctorParameters) {
        continue;        typeReferenceToExpression(entityNameToExpression, ctorParam.type) :
        undefined;
    const members = [ts.factory.createPropertyAssignment(
        'type', paramType || ts.factory.createIdentifier('undefined'))];    const decorators: ts.ObjectLiteralExpression[] = [];
    for (const deco of ctorParam.decorators) {
      decorators.push(extractMetadataFromSingleDecorator(deco, diagnostics));
    }
    if (decorators.length) {ors', ts.factory.createArrayLiteralExpression(decorators)));
    }
       undefined, undefined, [], undef      ts.factory.createArrayLiteralExpression(params, true));
        initializer);        kind: ts.SyntaxKind.MultiLineCommentTrivia,
        text: [e {function(): !Array<(null|{`,
pe: ?,`,
corators: (undefined|${DECORATOR_INVOCATION_JSDOC_TYPE}),`,ollapse`,        ].join('\n'),
        pos: -1,
        end: -1,
        hasTrailingNewLine: true,
      },
    ]);
  }
  return ctorProp;
} * workaround for https://github.com/ * metadata.
 */
function typeReferenceToExpression(
    entityNameToExpression: (n: ts.EntityName) => ts.Expression | undefined,
    n  if (ts.isLiteralTypeNode(node)) {
    // Treat literal types like their base type (boolean, string, number).
    kind = node  switch (kind) {
    case ts.SyntaxKind.FunctionType:
    case ts.SyntaxKind.ConstructorType:    case       return ts.factory.createIdentifier('Array');
    case ts.SyntaxKind.TypePredicate:
    case ts.SyntaxKind.TrueKeyword:
    case ts.SyntaxKind.FalseKeyword:
    case ts.SyntaxKind.BooleanKeyword:
      return ts.factory.createIdentifier('Boolean');
    case ts.SyntaxKind.StringLiteral:
    case ts.SyntaxKind.StringKeyword:
     case ts.SyntaxKind.TypeReference:      // Ignore any generic types, just return the base type.
      return entityNameToExpression(typeRef.typeName);
    case ts.SyntaxKind.UnionType:
      const childTypeNodes =
 ts.U   t => !(ts.isLiteralTypeNode(t) && t.literal.kind === ts.SyntaxKind.NullKeyword));
      return childTypeNodes.length === 1 ?
renceToExpressi    default:
      return undefined;
  } * Checks * Expands aliases, which is important for the case where
 *   import * as x from 'some-module';
 * and x is now a value (the module object).
 */
function symbolIsRuntimeValue(typeChecker: ts.TypeChecker, symbol: ts.Symbol): boolean {
  if (symbol.flags & ts.SymbolFlags.Alias) {
    symbol = typeChecker.getAliasedSymbol(symbol);
  }  // Note that const enums are a special case, because
    * interface).  type: ts.TypeNode|null;
  /** The list of decorators found on the parameter, null if none. */
  decorators: ts.Decorator[];
}/**
 * Ge * Note that Angular class decorators are never processed as those rely on side effects that
 * would otherwise no longer be executed. i.e. the creation of a component definition.
 * * @param host Reflection host that is used for determining decorators.
 * @param diagnostics List which will be populated with diagnostics if any.
 * @param isCore Whether the current TypeScript program is for the `@ang    typeC  function addJSDocTypeAnnotation(node: ts.Node, jsdocType: string): void {
    if (!isClosureCompilerEnabled) {
      return;
    }    ts.setSyntheticLeadingComments(node, [
      {
        kind: ts.SyntaxKind.MultiLineCommentTrivia,
        text: `* @type {${jsdocType}} `,
           hasTrailingNewLine: true,
     * property containing type information for every property that has a
      *     static propDecorators: {[key: string]: {type: Function, args?:
   * any[]}[]} = { propA: [{type: MyD   *     };
   */
  function createPropDecoratorsClassProperty(
     //  `static propDecorators: {[key: string]: ` + {type: Function, args?:
    /    for (const [name, decorators] of properties.entries()) {
      entries.push(ts.factory.createPropertyAssignment(ry.createArrayLiteralExpression(
rators.map(deco    const initializer = ts.factory.createObjectLiteralExpression(entries, true);
    const prop = ts.factory.createPropertyDeclaration(
        [ts.factory.createToken(ts.SyntaxKind.StaticKeyword)], 'propDeco  }  retu    // such parameter type symbols previously could be type-only, but now might be also
    // used in the `ctorParameters` static property as a value. We want to make sure
    // that TypeScript does not elide imports for such type references. Read more
    /     * Converts an EntityName (from a type annotation) to an expression (accessing a value).
     *
     * For a given qualified name, this walks depth first to find the leftmost identifier,
     * and then converts the path into a property access that can be used as expression.
         const symbol = typeChecker.getSymbolAtLocation(name);
        // If we deal with a qualified name, build up a property access expression
           const containerExpr = entityNameToExpression(name.left);
        if (containerExpr === undefined) {
ndefined;
        }
        return ts.factory.createPropertyAccessExpression(containerExpr, name.right);
      }
       // ensure that the alias declaration is not elided by TypeScript, and use its
      // name identifier to reference it at runtime.
      if (isAliasImportDeclaration(decl)) {
        referencedParameterTypes.add(decl);
        // If the entity name resolves to an alias impo        // resolves the link to the import. Cloning the original entity name identifier
        // coul        // would resolve to the actual parameter name, and not to the desired import.
        // This happens because the entity name identifier symbol is internally considered
        // as type-only and therefore TypeScript tries to resolve it as value manually.
         if (decl.name !== undefined) {
s.s            // its value at runtime. This is used when the identifier is resolving to a file
      // local declaration (otherwise it would resolve to an alias import declaration).
      return ts.setOriginalNode(ts.factory.createIdentifier(name.text), name);
    }     */
    function transformClassElement(element: ts.ClassElement):
        [string|undefined, ts.ClassElement, ts.Decorator[]] {
      element = ts.visitEachChild(element, decoratorDownlevelVisitor, context);
         const decorators = host.getDecoratorsOfDeclaration(element) || [];
  ;
        }
        toLower.push(decoratorNode);
      }
      if (!toLower.length) return [undefined, element, []];      if (!element.name || !ts.isIdentifier(element.name)) {
        // Method has a weird name, e.g.
        //   [Symbol.foo]() {...}
        diagnostics.push({
ement.getSourceFile(),
lext: `Cannot process decorators for class element with non-analyzable name.`,
: ts.DiagnosticCategory.Error,        });
        return [undefined, element, []];
      }      const elementModifiers = ts.canHaveModifiers(element) ? ts.getModifiers(element) : undefined;
      let modifiers: ts.NodeArray<ts.ModifierLike>|undetory.createNodeArray([...decoratorsToKeep, ...(elementModifiers || [])]),
nt as ts.HasModifiers).modifiers);
      }      return [element.name.text, cloneClassElementWithModifiers(element, modifiers), toLower];
    }    /**
     * Transforms a constructor. Returns the transformed constructor and the list of parameter
     * information collected, consisting of decorators and optional type.
         [ts.ConstructorDeclaration, ParameterDecorationInfo[]] {
         const parametersInfo: ParameterDecorationInfo[] = [];      for (const param of oldParameters) {
        const decoratorsToKeep: ts.Decorator[] = [];
        const paramInfo: ParameterDecorationInfo = {decorators: [], type: null};
        const decorators = host.getDecoratorsOfDeclaration(param) || [];        for (const decorator of decorators) {
ly deal with concrete nodes in TypeScript sources, so we don't
to ha        if (param.type) {
 has a type provided, e.g. "foo: Bar".
ype will be emitted as a value expression in entityNameToExpression, which takes
not to emit anything for types that cannot be expressed as a value (e.g.
fac        }
        parametersInfo.push(paramInfo);        // Must pass 'undefined' to avoid emitting decorator metadata.
        let modifiers: ts.ModifierLike[]|undefined;
 initializer);
        newParameters.push(newParam);
      }
      const updated = ts.factory.updateConstructorDeclaration(
.getModifiers(ctor), newParameters, ctor.body);    }    /**
     * Transforms a single class declaration:
     * - dispatches to strip decorators on members
     * - converts decorators on the class to annotations
     * - creates a ctorParameters property
     function transformClassDeclaration(classDecl: ts.ClassDeclaration): ts.ClassDeclaration {
      const newMembers: ts.Cla      let classParameters: ParameterDecorationInfo[]|null = null;      for (const member of classDecl.members) {
        switch (member.kind) {
SyntaxKSyntaxKind.SetAccessor:
SyntaxKind.MethodDeclaration: {bers.push(newMember);ue;SyntaxKind.Constructor: {
ctor = member as ts.ConstructorDeclaration;
tor.bod transformConstructor(member as ts.ConstructorDeclaration);
arameue;        }
        newMembers.push(ts.visitEachChild(member, decoratorDownlevelVisitor, context));
      }      // Note: The `ReflectionHost.getDecoratorsOfDeclaration()` method will not
       // to determine whether constructor parameters should be captured or not.
    any of the parameters has decorators applied directly.nostics, entityNameToExpression, classParameters, isClosureCompilerEnabled));
        }
      }
      if (decoratedProperties.size) {      }      const members = ts.setTextRange(
ry.createNodeArray(newMembers, classDecl.members.hasTrailingComma),
l.mem    function decoratorDownlevelVisitor(node: ts.Node): ts.Node {
      if (ts.isClassDeclaration(node)) {
        return transformClassDeclaration(node);
      }
         // Downlevel decorators and constructor parameter types. We will keep track of all
      // referenced constructor paramet      return ts.visitEachChild(sf, decoratorDownlevelVisitor, context);
    };
     clone = ts.factory.createPropertyDeclaration(
        modifiers, node.name, node.questionToken, node.type, node.initializer);
  } else if (ts.isGetAccessor(node)) {
    clone = ts.factory.createGetAccessorDeclaration(
        modifiers, node.name, node.parameters, node.type, n    c  } else {
    throw new Error(`Unsupported decorated member with kind ${ts.SyntaxKind[node.kind]}`);
  }  return ts.setOriginalNode(clone, node);
}
