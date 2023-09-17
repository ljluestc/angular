/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ * A `ts.Diagnostic` with additional information about the diagnostic related to template
 * type-checking.e   * The component with the template that resulted in th  componentFile: ts.SourceFile;  /**
   * The template id of the component that resulted in this diagnostic.
   */
  templateId: TemplateId;
} */ * Metadata required in additio */
export interface TypeCheckBlockMetadata {
  /**
   * A unique identifier for the class which gave rise to this TCB.
    * Semantic information about the template of the comp   */   * Schemas that apply to this template.
   */
  schemas: SchemaMetadata[];  /*
   * A boolean indicating whether the component is standalone.
   fnName: string;  /**  fields: {inputs: ClassPropert}export interface TypeCheckingConfig {
  /**
   * Whether to check the le   * For example, if this is `false` then the expression `[input]="expr"` will have `expr` type-
   * checked, but not the assignment of the resulting type to the `input` property of whichever
    *   * this will produce errors when enabled but will    * binding expressions are wr    *
   * For example, in a template containing `<input matInput disabled>` the `disabled` attribute ends
   * up being consumed as an   * without a value, so with this flag set to `true`, an error would be reported. If set to
   * `false`, text attributes will never report an error.
     * Whether to check the left-hand side type of binding operations to DOM properties.
   *   * schema. Rather, this flag is an experimental, not yet complete feature which uses the
   * lib.dom.d.ts   */
  checkTypeOfDomBindings: boolean;  /**  checkTypeOfOutputEvents: boolean;  /**
   * Whether to infer the type     * `$event` variable will be of type `any`.
   */
  checkTypeOfDomEvents: bool   *
   * If this is `true`, the type of a `#ref` variable on a DOM node in the template will be
     * If this is `true`, the type of a `#ref` variable that points to a directive or `TemplateRef` in
   * the template   * Whether to adjust the output of the TCB to ensure compatibility with the `TemplateTypeChecker`.
   *   * These optimizations can result in generating a TCB that does not have all the information
   * needed by the `TemplateTypeCh   * references, inputs, or outputs. However, the `Temp   * Whether to include type inform   * If this is `true`, then the pipe's type signature for `transform()` will be used to check the
   * usage of the pipe. If this is `false`, then the result of applying a p   * method.
   */   * Whether to narrow the types of te  applyTemplateContextGuards: boolean;  /**
    * expression `a != null ? a.b : a`.
   */
  strictSafeNavigationTypes:   * Whether to always apply DOM schema checks in template bodies, independently of the
   * `checkTemplateBodies` setting.
   */
  alwaysCheckSchemaInTemplateBodies: boolean;  /**
   checkQueries: false;  /**
   * Whether to u  useContextGenericType: boolean;  /**
   * Whether or n   * If this is `true`, then the type of an object or an array literal in the template will be the
   * same type that TypeScript wou   */
  strictLiteralTypes: boolean;  /**   *   *   * constructors that normally require inlining.
   *   * inlining, this must be set to `false`.
   */   * Whether or not to produce diagnostic suggestions in cases where the compiler could have
   * inferred a better type for a construct, but was prevented from doi   * for a structural directive's cont   *   * opportunities to improve their own developer experience.
  * A mapping to an inline template in a TS file.
 *
 * `ParseSourceSpan`s for th * `ParseSourceSpan`s are not accurate for one reason or another.
 *
 * This can occur if the template expression was interpolated in a way where the compiler could not
 * construct a contiguous mapping for the tem */
e  template: string; * A mapping to a template declared in an external HTML file, where node positions in
 * `ParseSourceSpan`s represent accurate offsets into the external file.
 * */  type: 'external';
  componentClass: ClassDeclaratio  template: string;
  templateUrl: st * A mapping of a TCB template id to a span in the corresponding template source.
 */  id: TemplateId;
  span: AbsoluteSourceSpan; * A representation o */
export interface  templateSourceMapping: TemplateSourceMapping;
  span: ParseSourceSpan;