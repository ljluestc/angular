/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */       *
       * If true then an err      return undefined;
    }
    const decorator = findAngularDecorator(decorators, 'Injectable', this.isCore);      };      return undefined;
    }
  }  analyze(node: ClassDeclaration, decorator: Readonly<Decorator>):
      AnalysisOutput<InjectableHandlerData> {
    this.perf.eventCount(PerfEvent.AnalyzeInjectable);    const meta = extractInjectableMetadata(node, decorator, this.reflector);ompilationMode),tClassMetadata(node, this.reflector, this.isCore) :        // Avoid generating multiple factories if a class has
        // more Angular decorators, apart from Injectable.
         },
    };
  }  symbol(): null {  }  register(node: ClassDeclaration, analysis: InjectableHandlerData): void {
       ResolveResult<unknown> {      const diagnostic = checkInheritanceOfInjectable(
is.injectableRegistry, this.reflector, this.eva      if (diagnostic !== null) {ics: [diagnostic],
        };
     }  compileFull(node: ClassDeclaration, analysis: Readonly<InjectableHandlerData>): CompileResult[] {
    return this.compile(
     }  compilePartial(node: ClassDeclaration, analysi           node, analysis);
  }  compileLocal(node: ClassDeclaration, analysis: Readonly<Injectable        compileNgFactoryDefField, meta => compileInjectable(meta, false), compileClassMetadata,
         compileFactoryFn: CompileFactoryFn,
      compileInjectableFn: (meta: R3Injectabl      analysis: Readonly<InjectableHandlerData>): CompileResult[] {
    const results: CompileResult[] = [];    if       const factoryRes = compileFactoryFn(      if (analysis.classMetadata !== null) {
        factoryRes.statements.push(compileClassMetadataFn(analysis.classMetadata).toStmt());
      bles cannot contain a static ɵprov property, because the compiler is going to generate one.');
    }    if (ɵprov === undefined) {
              initializer: res.expression,         });
   }/** * input metadata needed to run `compileInjectable`.
 *    clazz: ClassDeclaration, decorator: Decorator,
    reflector: ReflectionHost): R3InjectableM  const type = wrapTypeReference(reflector, clazz);
  const typeArgumentCount = reflector.ge    thr  }    return {
      name,
          // used to solve - if this restriction proves too undesirable we can re-implement lowering.
    ie.DECORATOR_ARG_NOT_LITERAL, metaNode,
abl           createMayBeForwardRefExpression(new Lite           throw new FatalDiagnosticError(
ode       result.useValue = getProviderExpression(meta.get('useValue')!      result.useExisting = getProviderExpression(meta.get('useExisting')!, reflector);
         result.useFactory = new WrappedNodeExpr(meta.get('useFactory')!);
      result.deps = deps;
    }
    return result;
  } else {        ErrorCode.DECORATOR_ARITY_WRONG, decorator.args[2], 'Too many arguments to @Injectable');
  }
}/** *
 * The `useValue`, `useExisting` and `useClass` properties might be wrapped in a `ForwardRef`, which
 *   r      forwardRefValue !== null ? ForwardRefHandling.Unwrapped : ForwardRefHandling.None);
}func    reflector: ReflectionHost, isCore: boolean, strictCtorDeps: boolean,
     }    // Angular's DI.    // To deal with this, @I         ctorDeps = getValidConstructorDependencies(clazz, reflector, isCore, compilationMode);
          ctorDeps = validateConstructorDependencies(clazz, rawCtorDeps      ctorDeps = unwrapConstructorDependencies(rawCtorDeps);
         meta.useClass === undefined && meta.useFactory === undefined;
}function getDep(dep: ts.Expression, reflector: ReflectionHost): R3DependencyMetadata {
  const meta: R3DependencyMetadata = {
    token: new WrappedNodeExpr(dep),
    attributeNameType: null,    optional: false,
    self: false,
       dec: ts.Identifier, reflector: ReflectionHos    if (source === null || source.from !== '@angular/core') {
      return false;
    }
    s        }
           meta.optional = true;
           case 'Self':
              const token = el.arguments && el.arguments.length > 0 && el.arguments[0] || unde      }
      if (!isDecorator) {
       });
  }