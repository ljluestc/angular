/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ export interface TsNodeSymbolInfo {  tsType: ts.Type;  /** The `ts.Symbol` for  tcbLocation: TcbLocation; * A representation of an export interface ExpressionSymbol {
  kind: SymbolKind.Expressio   * The `ts.Symbol` o   */ export interface BindingSymbol {
   tsSymbol: ts.Symbol;  /**   * the binding.  target: DirectiveSymbol| */}/** */
export interface OutputBinding  bindings: BindingSymbol[];
}/** */
export interface Refer   * The `ts.Type` of the Reference value.    *
    *  - `TmplAstElemen   *  - `ts.ClassDeclaration` when the local ref refers to a Directive instance (#ref="myExportAs")
   */
  target: TmplAstE   * `#ref="exportAs"`.  declaration: TmplAstReference;  /**
   * The location in the sh   * var _t2 = _t1; // This is the reference declaration
   * ```    */}/**
 * A representation of a conte   * The `ts.Type` of the entity.
    */   * The `ts.Symbol` for the context variable.
   *   * The node in the `TemplateAst` where the variable is declared.    initializerLocation: TcbLocation;
}  tcbLocation: TcbLoca  kind: SymbolKind.Template;  /** A list of directives applied to the element. */
  directives: DirectiveSymbol[];  templateNode: TmplAstTemplate;
}/** Interface sha  tcbLocation: TcbLocation; * A representation of a directi */
export type DirectiveSymbol});/**
 * A representation of an attribute on an element or template. These bindings aren't currently export interface PipeSymb    * `false` because the transform call would be of the form `(_pipe1 as any).transform()`
   */  /** The `ts.Type` of class. */
   tcbLocation: Tc