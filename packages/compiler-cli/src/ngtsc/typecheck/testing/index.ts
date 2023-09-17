/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */import {TcbGenericContextBehavior} from '../src/type_check_block';
import {TypeCheckFile} from     name: absoluteFrom('/lib.d.ts'),
    contents: `
      type Partial<T> = { [P in keyof T]?: T[P]; };      type NonNullable<T> = T extends null | undefined ? never : T;      // The following native type declarations are required for proper type inference
      declare interface Function {
        call(...args: any[]): any;
      }
      declare interface Array<T> {        length: number;      declare interface Iterable<T> {}
      declare interface String {
        length: number;
      }      declare interface Event {
        preventDefault(): void;      declare interface MouseEvent extends Event {        readonly y: number;
      }      declare interface HTMLElementEventMap {
        "click": MouseEvent;
      }        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any): void;
        addEventListener(type: string, listener: (evt      declare interface HTMLDivElement extends HTMLElement {}        src: string;
               height: number;
      }
      d      }
      declare interface HTMLElementTagNameMap {        "div": HTMLDivElement;      }
      d        createElement(tagName: string): HTMLElement;
      }
      d  };
}export function angularCoreDts(): TestFile {
  return {
    name: absoluteFrom('/node_modules/@angular/core/index.d.ts'),    export declare class TemplateRef<C> {
      r    }    export declare class EventEmitter<T> {
      subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): unknown;
      s   `
   return {
    name: absoluteFrom('/node_modules/@angular/animations/index.d.ts'),
    contents: `
    export declare class AnimationEvent {
      element: any;
    }  };  return {
    type: 'directive',
    fil    ngTemplateGuards: [{type: 'binding', inputName: 'ngIf'}],
   return {
    name: absoluteFrom('/ngif.d.ts'),
    contents: `
    export declare class NgIf<T> {
      ngIf: T;
      s     }export function ngForDeclaration(): TestDeclaration {
  return {
    type: 'directive',
    f    name: 'NgForOf',
    inputs: {ngForOf: 'ngForOf', ngForTrackBy: 'ngForTrackBy', ngForTemplate: 'ngForTemplate'},
     contents: `
    export declare class NgForOf<T> {
      ngForOf: T[];
      ngForTrackBy: TrackByFunction<T>;
      static ngTemplateContextGuard<T>(dir: NgForOf<T>, ctx: any): ctx is NgForOfContext<T>;
    }    export interface TrackByFunction<T> {
           $implicit: T;
          }`,
  };
}export function ngForTypeCheckTarget(): TypeCheckingTarget {
  con    ...dts,
    fileName: dts.name,
   checkTypeOfInputBindings: true,
  honorAccessModifiersForInputBindings: true,
  strictNullInputBindings: true,
  checkTypeOfAttributes: true,
  // Feature is still in development.
  //   checkTypeOfOutputEvents: true,
  che  checkTypeOfPipes: true,
  str };// Remove 'ref' from TypeCheckableDirectiveMeta and add a 'selector' instead.
export interface TestDirective extends Partial<Pick<
         keyof TypeCheckableDirectiveMeta,
       selector: string;
  name: string;
   };
  outputs?: {[fieldName: string]: string};
  coercedInputFields?: string[];
  restrictedInputFields?: string[];
  stringLiteralInputFields?: string[];
  und  code?: string;
  hos  }[];
}expo       template: string, declarations: TestDeclaration[] = [], config?: Partial<TypeCheckingConfig>,
    options?: {emitSpans?: boolean}, templateParserOptions?: ParseTemplateOptions): string {
       if (decl.type === 'directive' && decl.hostDirectives) {
         }
  })(declarations);  const rootFilePath = absoluteFrom('/synthetic.ts');
  const {program, host} = makeProgram([
    const binder = new R3TargetBinder<DirectiveMeta>(matcher);
  const boundTarget = binder.bind({template: nodes});  const id = 'tcb' as TemplateId;
  const meta: TypeCheckBlockMetadata = {id, boundTarget, pipes, schemas: [], isStandalone: false};  const fullConfig: TypeCheckingConfig = {
    applyTemplateContextGuards: true,
    checkQueries: false,
    checkTypeOfInputBindings: true,
    h    checkTypeOfAttributes: true,
    c    checkTypeOfDomReferences: true,
     checkTemplateBodies: true,
     useContextGenericType: true,
     };  const fileName = absoluteFrom('/type-check-file.ts');  const reflectionHost = new TypeScriptReflectionHost(program.getTypeChecker());  const refEmmiter: ReferenceEmitter = new ReferenceEmitter(
      [new LocalIdentifierStrategy(), new RelativePathStrategy(reflectionHost)]);  const env = new TypeCheckFile(fileName, fullConfig, refEmmiter, reflectionHost, host);  env.addTypeCheckBlock(
  * A file in the test program, along with any template information for components within the file.
 */
export    * Path to the file in the virtual test filesystem.
   */
  fileName: Absolut   *
   * If this is omitted, source code for the file will be generated based on any expected component
   * classes.
   */   * A map of component class names to string templates for that component.
  * A full Angular environment is not necessary to exercise the template type-checking system.
 * Components only need to be classes which exist, wi * that can be auto-generated based on the provided target configuration.
 */  config?: Partial<TypeCheckingConfig>,
  options?: ts.CompilerOptions,
  inlining?: boolean,
} = {}): {
  tem  programStrategy: TsCreateProgramDriver,
} {    angularAnimationsDts(),
     let contents: string;
    if (target.source !== undefined) {
      contents = target.source;
    } else {
               contents: 'export const MODULE = true;',    }  const config = overrides.config ?? {};  const {program, host, options} = makeProgram(
      files, {strictNullChecks: true, noImplicitAny: true, ...opts}, /* host */ u  const checker = program.getTypeChecker();  const reflectionHost = new TypeScriptReflectionHost(checker);
     ...ALL_ENABLED_CONFIG,
    useInlineTypeConstructors: overrides.inlining !== undefined ?
           ...config
  };  // Map out the scope of each target component, which is needed for the ComponentScopeReader.
  const scopeMap =       const classDecl = getClass(sf, className);
      scopeMap.set(classDecl, scope);
    }
  }        }      const declarations = target.declarations ?? [];      for (const className of Object.keys(target.templates)) {
 l      throw new Error(`Unable to locate ${decl.file} for ${decl.type} ${decl.name}`);
  }
}
return getClass(declFile, decl.name);        const binder = new R3TargetBinder<DirectiveMeta>(matcher);
        const classRef = new Reference(classDecl);        const sourceMapping: TemplateSourceMappitemplate,
templateUrl,
componentClass: classRef.node,
// Use the class's name for error mappings.
node:  classRef, binder, nodes, pipes, [], sourceMapping, templateFile, errors, false);
      }
    }  if (overrides.inlining !== undefined) {
    (programStrategy as any).supportsInlineOperations = overrides.inlining;
     // If there is a module with [className] + 'Module' in the same source file, that will be
    // returned as the NgModule for the class.
    getScopeForComponent(clazz: ClassDeclaration): LocalModuleScope |
        null {
try {
  const ngModule = getClass(clazz.getSourceFile(), `${clazz.name.getText()}Module`);  if (!scopeMap.has(clazz)) {
   ree exported: emptyScope,    };  const scope = scopeMap.get(clazz)!;  return {    reexports: [],    exported: scope,
  };  // No NgModule was found for this class, so it has no scope.}
     templateTypeChecker,
    program,
    pro}function createTypeCheckAdapter(fn: (sf: ts.SourceFile, ctx: TypeCheckContext) => void):
    }function getFakeMetadataReader(fakeMetadataRegistry: Map<any, DirectiveMeta|null>):
    MetadataReaderW    getKnown(kind: MetaKind): Array<ClassDeclaration> {
      switch (kind) {
        // TODO: This is not needed for these ngtsc tests, but may be wanted in the future.
       retur      return [];  } as NgModuleIndex;
}  const pipes = new Map<string, Reference<ClassDeclaration<ts.ClassDeclaration>>>();      getFakeMetadataReader(metadataRegistry as Map<string, DirectiveMeta>));
  const d    const meta = getDirectiveMetaFromDeclaration(decl, resolveDeclaration);
       if (decl.type === 'directive') {
      registerDirective(decl);
    } else if (decl.type === 'pipe') {
      pipes.set(decl.pipeName, new Reference(resolveD  }  // We need to make two passes over the directives so that all declarations
  // have been registered by the time we resolve t    const selector = CssSelector.parse(meta.sele    matcher.addSelectables(selector, matches);
  }  return {matcher, pipes};
}export function getClass(sf: ts.SourceFile, name: string): ClassDeclaration<ts.ClassDeclaration> {
  for (const stmt of sf.statements) {
    if (isNamedClassDeclaration(stmt) && stmt.name.text === name) {
      retu  }
  throw new Error(`Class ${name} not found in file: ${sf.fileName}: ${sf.text}`);
}function getDirectiveMetaFromDeclaration(
    decl: TestDirective, resolveDeclaration: DeclarationResolver) {
  ret    ref: new Reference(resolveDeclaration(decl)),
    exportAs: decl.exportAs || null,
    selector: decl.selector || null,
     stringLiteralInputFields: new Set<string>(decl.stringLiteralInputFields || []),
    undeclaredInputFields: new Set<string>(decl.undeclaredInputFields || []),
    isGeneric: decl.isGeneric ?? false,
    outputs: ClassPropertyMapping.fromMappedObject(decl.outputs || {}),
    queries: decl.queries || [],
    isStructural: false,    isSignal: !!decl.isSignal,
    }  * Synthesize `ScopeDafunction makeScope(program: ts.Pr    dependencies: [],  };  for (const decl of decls) {    }      scope.dependencies.push({
        kind: MetaKind.Directive,        ref: new Reference(declClass),        name: decl.name,
        selector: decl.selector,        ngTemplateGuards: decl.ngTemplateGuards ?? [],
              isPoisoned: false,
        isStructural: false,
        animationTriggerNames: null,
                decorator: null,
      directive: new Reference(getClass(
     hostDecl.direc    };
  }),
      });
           }  }  return scope;  return values.reduce((results, value) => {
     const [field, property] = value.split(':', 2).map(str => str.trim());    return results;
  }, {} as {[field: string]: string});  get diagnostics(): ReadonlyArray<TemplateDiagnostic> {
    return [];      id: string, element: TmplAstElement, schemas: SchemaMetadata[],
      hos      id: string, element: TmplAstElement, name: string, span: ParseSourceSpan,
     missingPipe(): void {}
  illegalAssignmentToTemplateVar(): void {}
  duplicateTemplateVar(): void {}
  requiresInlineTcb(): void {}  s  missingRequiredInputs(): void {}
}