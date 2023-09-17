/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * example, NgModules declared outside the curre  mayDeclareProviders: boolean;   * List of static `ngTemplateGuard_xx` members found on the Directive's class.
   * @see `TemplateGuardMeta   * The set of input fields whic   * a narrower type with a getter/setter. See https://angular.io/guide/template-typecheck.
   */   * The set of input fields which map to `readonly`, `private`, or `protected` members in  stringLiteralInputFields: Set<ClassPropertyName>;  /**
   * The set of input fields  undeclaredInputFields: Set<ClassProper   */
  isGeneric: boolean; * Disambiguates different kinds of cexport enum MetaKind {
  Directive,  NgModule,
}/**
 * Possible ways that a directive can be matcexport enum MatchSource {
  /** The directive was matched by its selector. */
 }/** Metadata for a single input mapp};/** Metadata for an input's tra  node: ts.Node;
  type: ts.TypeNode; * Metadata collected for a directive within an NgModule's scope.
 */  kind: MetaKind.Directive;  /** Way in    */
  selector: string|null;  inputs: ClassPropertyMapping<InputM   */
  outputs: ClassPropertyMapping;    *
    */
  baseClass: Reference<ClassDeclaration>|'dyn   * and reliable metadata.
   */
    isStandalone: boolean;  /**   */    imports: Reference<ClassDecla   */
  schemas: SchemaMetadata[]|null;  /**   */
  decorator: ts.Decorator|null;  /** Additional directives applied to the directive host. */
  hostDirectives: HostDirectiveMeta[]|null;  /**
   * Whether the directive   assumedToEx  inputs: {[publicName: string]: string}|null;  /** Outputs from the host directive that have been exposed. */
  outputs: {[publicName: string   * The input name that this guard s   *
   * - 'invocation' means that a   type: 'invocation'|'binding';
} */
export interface PipeMeta {  ref: Reference<C  nameExpr: ts.Expression|null;
  isStandalone: boolean;
   * A MetadataReader whicexport interface Metada}/**
 * An NgModuleIndex export interface NgModuleIndex {
   * Registers new metadata for d  registerNgModuleMetadata(meta: NgModuleMeta): void;
  registerPipeMetadata(meta: Pipe