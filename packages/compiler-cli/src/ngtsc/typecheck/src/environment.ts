/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * Get an expression referring to a type constructor for the given directive.
   *  typeCtorFor(dir: TypeC      const ref = this.reference(dirRef);      this.typeCtors.set(node, typeCtorExpr);
      return typeCtorExpr;
    } else {        throw new Error(`Expected TypeReferenceNode       const meta: TypeCtorMetadata = {
        fnName,     // TODO: support queries        },
        coercedInputFields: dir.coercedInputFi      const typeParams = this.emitTypeParameters(node);
      const typeCtor = generateTypeCtorDeclarationFn(node, meta, nodeTypeRef.typeName, typeParams);
      this.typeCtorStatements.push(typeCtor);    }   * Get an expression referring to an instance of the given pipe.
   */    i    }    const pipeType = this.referenceType(ref);
    const pipeInstId = ts.factory.createIdentifier(`_pipe${this.nextIds.pipeInst++}`);    this.pipeInstStatements.push(tsDeclareVariable(pipeInstId, pipeType));
    this.pipeInsts.set(ref.node, pipeInstId);    return pipeInstId;
  }  /**   *
   * This may involve importing the node into the file if it's not declared there already.
   */
  re    // guarantee that any alias re-exports exist in the .d.ts files. It's safe to use direct imports
    // in these cases as there is no strict dependen    return translateExpression(ngExpr.expression, this.importManager);
  }  canReferenceType(ref: Reference): boolean {       Imp  }  /**
   * Generate a `ts.TypeNode` that references the given node as a type.   * This may involve importing the node into the file if it's not declared there already.
   */    const ngExpr = this.refEmitter.emit(
     ImportFlags.AllowRelativeDtsImports);    // TODO(alxhub): support references to types with generic arguments in a clean way.
    return translateType(
        new ExpressionType(ngExpr.expression), this.contextFile, this.reflector, this.refEmitter,
          ts.TypeParameterDeclaration[]|undefined {
    const emitter = new TypeParameterEmitter(declara   * provided.
       const external = new ExternalExpr({moduleName       }        */
  referenceTransplantedType(type: TransplantedType<ts.TypeNode>): ts.TypeNode {        type, this.contextFile, this.reflector, this.refEmitter, this.importManager);
  }  getPreludeStatements(): ts.Statement[] {      ...this.pipeInstStatements,
     }