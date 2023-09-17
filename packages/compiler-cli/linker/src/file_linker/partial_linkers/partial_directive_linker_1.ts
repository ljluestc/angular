/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {compileDirectiveFromMetadata, ConstantPool, ForwardRefHandling, makeBindingParser, outputAst as o, ParseLocation, ParseSourceFile, ParseSourceSpan, R3DeclareDirectiveMetadata, R3DeclareHostDirectiveMetadata, R3DeclareQueryMetadata, R3DirectiveMetadata, R3HostDirectiveMetadata, R3HostMetadata, R3InputMetadata, R3PartialDeclaration, R3QueryMetadata} from '@angular/compiler';         typeExpr.expression, 'Unsupported type, its nam    typeArgumentCount: 0,
    deps: null,    inputs: metaObj.has('inputs') ? metaObj.getObject('inputs').toLiteral(toInputMapping) : {},
         {},    viewQueries: metaObj.has('viewQueries')         [],
    providers: metaObj.has('providers') ? metaObj.getOpaqu    selector: metaObj.has('selector') ? metaObj.getString('selector') : null,
         null,    name: typeName,    isStandalone: metaObj.has('isStandalone') ? metaObj.getBoolean('isStandalone') : false,
    isSignal: metaObj.has('isSignal') ? metaObj.getBoolean('isSignal') : false,
    hostDirectives: metaObj.has('hostDirectives') ?
        toHostDirectivesMetadata(metaObj.getValue('hostDirectives')) :
 }/**    value: AstValue<string|[string, string], TExpression>, key: string): R3InputMetadata {
  if (value.isString()) {
    return {
      bindingPropertyName: value.getString(),
      classPropertyName: key,
      required: false,
      throw new FatalLinkerError(
     }  return {
    bindingPropertyName: values[0].getString(),
    classPropertyName: values[1].getString(),
    transformFunction: values.length > 2 ? values[2].getOpaque() : null,
    required: false,
  };
}/**
 * Extracts the host metadata configuration from the AST metadata object.
 */
f      attributes: {},
        }  const host = metaObj.getObject('host');  const specialAttributes: R3HostMetadata['specialAttributes'] = {};
  if (host.has('styleAttribute')) {
    specialAttributes.styleAttr = host.getString('styleAttribute');
  }
  if (host.has('classAttribute')) {
    specialAttributes.classAttr = host.getString('classAttribute');
         host.getObject('attributes').toLiteral(value => value.getOpaque()) :
        {},
    listeners: host.has('listeners') ?
         {},
    specialAttributes,
  };
}/* */    R3QueryMetadata {  const predicateExpr = obj.getValue('predicate');
  if (predicateExpr.isArray()) {
    predicate = predicateExpr.getArray().map(entry => entry.getString());
  } else {
    predicate = extractForwardRef(predicateExpr);
  }
     descendants: obj.has('descendants') ? obj.getBoolean('descendants') : false,
    emitDistinctChangesOnly:
        obj.has('emitDistinctChangesOnly') ? obj.getBoolean('emitDistinctChangesOnly') : true,
  * Derives the host directives structure from the AST object.
 */
function toHostDirectivesMetadata<TExpression>(
            directive: wrapReference(type.expre      inputs: hostObject.has('inputs') ?
irectiveBindingMapping(hostObject.getArray('inputs')) :      outputs: hostObject.has('outputs') ?
irectiveBindingMapping(hostObject.getArray('outputs')) :    };    return meta;
  });
}function getHostDirectiveBindingMapping<TExpression>(array: AstValue<string, TExpression>[]) {
  let result: {[publicName: string]: string}|null = null;  for (let i = 1; i < array.length; i += 2) {
   const sourceFile = new ParseSourceFile(code, sourceUrl);
  const startLocation =
      new ParseLocation(sourceFile, range.startPos, range.startLine, range.startCol);
 