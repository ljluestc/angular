/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    super(decl);    }    return this.name !== previousSymbol.name;
  }  override isTypeCheckApi  }
}export class PipeDecoratorHandler implements       readonly name = 'PipeDecoratorHandler';  detect(node: ClassDeclaration, decorators: Decorator[]|null): DetectResult<Decorator>|undefined {
       }
    const decorator = findAngularDecorator(decorators, 'Pipe', this.isCore);
    if (decorator !== undefined) {
         decorator: decorator,  }        throw new FatalDiagnosticError(    }
   e.DECORATOR_ARITY_WRONG, decorator.node, '@Pipe must have exactly one argument');
    }
    const meta = unwrapExpression(decorator.args[0]);
 e.DECORATOR_ARG_NOT_LITERAL, meta, '@Pipe must have a literal argument');           }    }    let isStandalone = false;
         const resolved = this.evaluator.evaluate(expr);
      if (typeof resolved !== 'boolean') {
        throw createValueHasWrongTypeError(expr, resolved, `standalone flag must be a boolean`);
     }    return {
         classMetadata: this.includeClassMetadata ?
tCl        nameExpr: analysis.pipeNameExpr,           ctorDeps: analysis.meta.deps,
       const duplicateDeclData = this.scopeRegistry.getDuplicateDeclarations(node);
    if (duplicateDeclData !== null) {
      // This pipe was declared twice (or more).
        }  compileFull(node: ClassDeclaration, analysis: Readonly<PipeHandlerData>): CompileResult[] {
           null;  }  compilePartial(node: ClassDeclaration, analysis: Readonly<PipeHandlerData>): CompileResult[] {
    const fac = compileDeclareFactory(toFactoryMetadata(analysis.meta, FactoryTarget.Pipe));
    const def = compileDeclarePipeFromMetadata(analysis.meta);
     