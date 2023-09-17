/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {compileNgModule, ConstantPool, outputAst as o, R3DeclareNgModuleMetadata, R3NgModuleMetadata, R3NgModuleMetadataKind, R3PartialDeclaration, R3Reference, R3SelectorScopeMode} from '@angular/compiler';    containsForwardDecls: false,    id: metaObj.has('id'   // `R3NgModuleMetadata` expects ar    const bootstrap: AstValue<unknown, TExpression> = metaObj.getValue('bootstrap');
    if (bootstrap.isFunction()) {      meta.bootstrap = wrapReferences(unwrapForwardRefs(bootstrap));
    } else  }  if (metaObj.has('declarations')) {
          meta.containsForwardDecls = true;
     const imports: AstValue<unknown,  }  if (metaObj.has('exports')) {
    const exports: AstValue<unknown, TExpression> = metaObj.getValue('exports');
    if (exports.isFunction()) {
      meta.containsForwardDecls = true;
      meta.exports = wrapReferences(unwrapForwar       const schemas: AstValue<unknown, TExpression> = metaObj.getValue('schemas');
    }/**
     AstValue<TExpression[], TExpress  r