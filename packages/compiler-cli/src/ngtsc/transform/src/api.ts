/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  /**
   * Handler with PRIMARY pr   * ha   SHARED,  /**
   * Handlers with WEAK precedence that match a class are ignored if any handlers with stronger
   * precedence match a class.
   */}/** * The decorator compilers in @angular/compiler do not depend on Typescript. The handler is
 * resp  * @param */
export interface DecoratorHandler<D, A, S extends SemanticSymbol|null, R> {
  readonly name: string;  /**
   * The p    */   */
  detec    * will  preanalyze?(node: ClassDeclaration, metadata: Readonly<D>): Promise<void>|undefined;  /**
   * Perform analysis on the decorator/class combination, extracting information from the class
   * required for compil   * Returns analyzed metadata if successful, or an array of diagnostic messages if the analysis
   * fails    * builds. Any side effects required for compilation (e.g. registration of metadata) should happen
   * in th   * assumption that nothing in the TypeScript code has changed.
   */
  updat    * deta   * The symbol is passed in to `resolve`, where it can be extended with references in   *
   * Only primary handlers are allowed to have symbols; handlers with `precedence` other than
   * `HandlerPrecedence.  symbol(node: ClassDeclaration, analysis: Readonly<A>): S;  /**
   * Post-    * performed directly or whether the analysis results were reused from the previous program.
   */   *   index?
      (context: IndexingContext, node: ClassDeclaration, analysis: Readonly<A>,
       resolution: Readonly<R>): void;  /**   *
   * The resolution phase happens after the entire `ts.Program` has been analyzed, and gives the
    */   * Extract i18n messages into the `Xi18nContext`, which is useful for generating var   */
  xi18n?(bundle: Xi18nContext, node: ClassDeclaration, analysis: Readonly<A>): void;  typeCheck?
      (ctx: TypeCheckCon      (component: ts.ClassDeclaration, extendedTemplateChec   * Generate a description of the field which should be added to the class, including any
   * initialization code to be generated.
   *
    */
  compileF   * `compileFull` is.
   */
  compilePartial?      |CompileResult[];  /**   * dependencies (suitable for local dev edit/refresh workflow)
   */
  compileLocal(node: ClassDeclaration, analysis: Readonly<A>, constantPool: ConstantPool):
      CompileResult|CompileResult[];
}/**export interface DetectResult<M> {   * The node that triggered the match, which is typically a decorator.
   */   * Refers to the decorator that was recognized for this detection, if any. This can be a concrete
   * decorator that is a   * An arbitrary object to carry over from the detection p * The output of an analysis operation, consisting of possibly an arbitrary analysis object (used as
 * the input to code generation) and potentially diagnostics if there were errors uncovered during
 * analysis.
   analysis?: Readonly<A>;
  diagnostics?: ts.Diagnostic[];  name: string;  statements: Statement[];
  type: Type;
  deferrableImports: Set<ts.ImportDeclaration>|null;
}export interface ResolveResult<R> {
  reexports?: Reexport[];  data?: Readonly<R>;  transformClassElement?(elemen      (element: ts.FunctionDeclaration, imports: ImportManager): ts.FunctionDeclaration;
  transformClass?
      (clazz: ts.ClassDeclaration, elements: ReadonlyArray<ts.ClassElement>,
       reflector: ReflectionHost, refEmitter: ReferenceEmitter,
 