/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ */  kind: IdentifierKind.Method;interface BaseElementOrTemplateIdentifier extends TemplateIdentifier {
  /** Attributes on an element or template. */
  attributes: Set<AttributeIdentifier>;  /** Directives applied to an element or template. */
  usedDirectives: Set<DirectiveReference>;
}
/e}  kind: IdentifierKind.Reference;  /** The target of this reference. If the target is not known, this is `null`. */
  target: {
    /** The template AST node that the reference targets. */
    node: ElementIdentifier|TemplateIde     * `null`.
     */
    directive: ClassDeclaration | null;
  e */  name: string;
  selector: string|null;
  file: ParseSourceFile;
  template: {    usedComponents: Set<De    file: ParseSourceFile;
  };
  errors: Error[];
}