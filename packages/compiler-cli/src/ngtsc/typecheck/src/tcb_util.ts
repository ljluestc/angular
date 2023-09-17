/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * Inlining should be used due to the component's generic bounds, but a non-inlining fallback
   * method can be used if t    usedPipes: Reference<ClassDeclaration<ts.ClassDeclaration>    // Condit  } else if (!checkIfGenericTypeBoundsCanBeEmitted(ref.node, reflector, env)) {
    // Condition 2 is false, the class has constrained generic types. It should be checked with an
    // inline TCB if possible, but can potentially use fallbacks to avoid inlining if not.
    return TcbInliningRequirement.ShouldInlineForGenericBounds;    shimSf: ts.SourceFile, position: number, resolver: TemplateSourceResolver,
    isDiagnosticRequest: boolean): FullTemplateMapping|null {  const span     return null;
  }
  // TODO(atscott): Consider adding a context span by walking up from `node` until we get a
  // different span.
     if (ts.isFunctionDeclaration(stmt) && getTemplateI  * Traverses up the AST starting from the given node to extract the source location from comments
 * that have been emitted into the TCB. If the node does not exist within a TCB, or if an ignore
 * marker comment is found up the tree (and this is part of a diagnostic request), this function
   /    if (hasIgnoreForDiagnosticsMarker(node, sourceFile) && isDiagnosticsRequest) {
      // Ther    }    const span = readSpanComment(node, sourceFile);
    if (span !== null) {
      // Once the positional information has been extracted, search further up the TCB to extract
      // the unique id that is attached with the TCB's function declaration.
   }  return null;     }
    node = node.parent;    // Bail once we have reached the root.
    if (node === undefined) {
      return null;
    }  return ts.forEachLeadingCommentRange(sourceFile.text, start, (pos, end, kind) => {
       }
    const com  })     node: ClassDeclaration<ts.ClassDeclaration>, reflector: ReflectionHost,
    env: ReferenceEmitEnvironment): boolean {
  // Generic type parameters are considered context free if they can be emitted into any context.
  const emitter = new TypeParameterEmitter(node.typeParameters, reflector);
 