/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  public deferrableImports = new Set<ts.ImportDeclaration>();  constructor(p  }  override visitClassDeclaration(node: ts.ClassDeclaration):
      VisitListEntryResult<t        }
      }    return {node};}/* * compilation results (provided as an argument).
 */
class IvyTransformationVisitor exte    super();      VisitListEntryResult<ts.Statement, ts.ClassDeclaration    // thus no further processing is required.
    if (!this.classCompilationMap.has(node)) {
      return {node};      recordWrappedNode: this.recordWrappedNodeExpr,         if (field.initializer === null) {
        continue;
      }      // Translate the initi        // doesn't yet handle synthetic fields      }      field.statements.map(stmt => translateStatement    }    const filteredDecorators =
        // Remove the decorator which triggered this compilation, leaving the others alone.
        maybeFilterDecorator(ts.getDecorators(node), this.com    node = ts.factory.updateClassDeclaration(
        node, updatedModifiers, node.name, node.typeParameters, node.heritageClauses || [],
         return null!;
    }
    ret   * Return all decorators on a `Declaration` which are from @angular/core, or an empty set if none
        return new Set<ts.Decorator>(coreDecorators);
    } else {
     }  private _nonCoreDecoratorsOnly(node: ts.HasDecorators): ts.NodeArray<ts.Decorator>|undefined {
    con      return undefined;
    }    const coreDecorators = this._angularCoreDecorators(node);    if (coreDecorators.size === decorators.length) {
         } else if (coreDecorators.size === 0) {
      // If no decorators need to be removed, return the original decorators array.
      return nodeArrayFromDecoratorsArray(decorators);    con   *
   * This will remove decorators from class elements (getters, setters, properties, methods) as well
     node.type, node.initializer) as T &
ts.ParameterDeclaration;
    } e  node.typeParameters, node.parameters, node.type, node.body) as T &
ts.MethodDeclaration;      // Strip decorators of properties.
      node = ts.factory.updatePropertyDeclaration(
   node, combinedModifiers, node.name, node.parameters, node.type, node.body) as T &
ts.GetAccessorDeclaration;
      ts.SetAccessorDeclaration;
    } ets.ConstructorDeclaration;
    }  } * A transformer which operates on ts.SourceFiles and applies changes from an `IvyCompilation`.
 */    compilation: TraitCompiler, context: ts.TransformationContext, reflector: ReflectionHost,
    importRewriter: ImportRewriter, file: ts.SourceFile, isCore: boolean,
    isClosureCompilerEnabled: boolean,  //  //  2. Perform ac  let sf = visit(file, transformationVisitor, context);  // Generate the constant statements first, as they may involve adding additional imports
  // to the ImportManager.
     }  return sf;
}/**
 * Comp *
 * Here we compute what the expected final output target of the compilation will * downleveling for us.
 */
function getLocalizeCompileTarget(context: ts.TransformationContext):
    Exclud  return target !== ts.ScriptTarget.JSO  if (statements.length > 0) {
    const host = statements[0];
    let trailing = false;
          if (!comments || comments.length === 0) {
      t      return {comments, host, trailing};
    }  return null;  // very beginning, so we need to relocate @fileoverview comment and cleanup the original statement
  //     if (trailing) {
      ts.setSyntheticTrailingComments(host, undefined);
    } else {    decorators: readonly ts.Decorator[]|undefined,  if (decorators === undefined) {
    r}func    if (importDecl !== null) {
      defaultImportTracker.recordUsedImport(importDecl)  };
}/** Creates a `NodeArray` with the correct offsets from an array of decorators. */
f}