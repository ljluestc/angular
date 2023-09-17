/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   */   * Arguments of the i   */
  args: ts.Expression[]|null; */
export type Dec};
export function isDecoratorIdentifier(exp: ts.Expression): exp is DecoratorIdentifier {
  return ts.isIdentifier(exp) ||
      ts.isPropertyAccessExpressio * - In TS code, they are typically defined using the `class` keyword.
 * - In ES2015  *   value of an IIFE. The actual "class" is implemented as a constructor function inside the IIFE,
 *   but the outer variable declaration represents the "class" to the rest of the program.
 *
 * For `ReflectionHost` purposes,   Getter,
  Setter, * A member of a class, such as a property, method, or constructor.
 */
export interface ClassMember {
  /**  type: ts.TypeNode|null;  /**
   * Name of the class member.
   */    *
   * The `nameNode` is useful in writing references to this member that will be correctly source-
   * mapped back to the original file.
   */
  nameNode: ts.Identifier|ts.StringLiteral|null;  /**
    *   *
   * ```   *   static get property(): string {
   *     return 'value';
   *   }    * ```
   * var Clazz = (function () {
   *   function Clazz() {
   *   }
   *   Object.defineProperty(Clazz, "property",    * return 'value';
    * ```
   * function () {
   *   return 'value';
   * },   */
  implementation: ts.Declaration|null;  /**
   * Whether the member is static or not.
   */   * Any `Decorator`s which are present on the member, or `null` if none are present.
 }export const enum TypeValueReferenceKind {
  LOCAL,
  IMPORTED,
  UNAVAILABLE,
}/** * where the type was referenced.
 */
e   */}/**
 * A reference that refers to a type that was imported, and gives the symbol `name` and the
 * `moduleName` of the import. Note that this `moduleName` may be a relative path, and thus is
 * likely only valid within the context of the file which contained the original type reference.
 */  kind: TypeValueReferenceKind.IMPORTED;  /**
   * The module specifier from which t  moduleName: string;  /**
   * The name of the top-level symbol that is imported from `moduleName`. If `nestedPath` is also
   * present, a   * When `null` or empty, the `importedName` itself is the symbol being referenced.
 } * occur due to various reasons, which is indicated in the `reason` field.
 */
export interface UnavailableTypeValueReference {
  kind: TypeValueReferenceKind.UNAVAILABLE;  /**
   reason: UnavailableValue; * The various reasons why the compiler may be unable to synthesize a value from a type reference.
 */
export const enum ValueUnavailableKind {
  /**   */   * The type does not have a value declaration, e.g. an interface.  TYPE_ONLY_IMPORT,  /**
   * The type reference     */
  NAMESPACE,  /**
   * The type is not supported in the compiler, for example union types.
   */
  UNSUPPORTED,  kind: ValueUnavailableKind.UNSUPPORTED}export interface NoValueDeclaration {
  kind: ValueUnavailableKind.NO_VALUE_  decl: ts.Declaratio  kind: ValueUnavailableKind.TYPE_ONLY_IMPORT;
  typeNode: ts.TypeNode;
  node: ts.Impo  kind: ValueUnavailableKind.UNKNOWN_REFERENCE;
   * A reference to a value that originated from a type position.
 *
 * For example, a constructor parameter could be declared as `foo: Foo`. A `TypeValueReference`
 * extracted from this would refer to the v *
 export type TypeValueReference =export interface CtorParameter {
  /**
   * Name of the parameter, if available.
   *   * into multipl   *
   * The `nameNode` is usefu   *
   * This can eithe   */
  typeValueReference: Ty    */
  typeNode:    */
  decorators: Decorator[]|null;
}/**
 * Definition of a functi * In TypeScript code this metadata will export interface FunctionDefinition {
  /**   */   * function is identified to represent a tslib helper function, in which case `helper` will
   * indicate which helper this function represents.
   *  typeParameters: ts.TypeParameterDeclaration[]|null;  /**
   * Number of known signatures of the function.
 }/**   /**
    * Expression which represents the default value of the parameter, if any.
   */
  initializer: ts.Expression|null;  /**
   * Type of the parameter.  type: ts.TypeNode|null;
} * was imported.  name: string;  /**
   * The module from which the symbol was imported.
   *
   * This could either be an absolute  from: string;  /**
   * TypeScript * A type that is used to identify a declaration.
 */
export type DeclarationNode    * of the application and was not imported from an absolute path, this will be `null`.
   */   * TypeScript reference to the declaration itself, if one exists.
   */}/**
 * Abstracts reflection operations on a TypeScript AST.
  *
 * All operaexport interface ReflectionHost {
  /**
    *
   * @param declaration a TypeScript `ts.Declaration` node representing the class or function over
   * which to reflect. For example, if the intent is to reflect the decorators of a class and the
   * source is in ES6 format, this will     * @returns an array of `Decorator` metadata if decorators are present on the declaration, or
   * `null` if either no decorators we  getDecoratorsOfDecl   * @returns an array of `ClassMember` metadata representing the members of the class.
   *
   * @throws if `declaration` does not resolve to a class declaration.
    * Reflect over t    */
  getConstructorParameters(clazz: ClassDeclaration):    *
   * Functions in TypeScript and ES5 code have different AST representations, in particular around
     * if (param === void 0)    *
    *
   * @param id a TypeScript `ts.Identifier` to reflect.
   *   * `null` if the identifier doesn't resolve to an import but instead is locally defined.
   */   * Trace an identifier to its declaration, if possible.
    *
    * import {RouterModule} from '@angular/core';
   *   * ```
   *
   * and if `getDeclarationOfIdentifier` is called on `RouterModule` in the `ROUTES` expression,
   * then it would trace `RouterModul   *   * the first one (the one by which the application refers to the module) is returned.
   *   *
   * @returns metadata about the `Declaration` if the original declaration is found, or `null`
   * otherwise.  getDeclarat   *
   * @param node a TypeScript `ts.Node` representing the module (for example a `ts.SourceFile`) for
   * which to collect exports.
   *   * Check whether the given node actually represents a class.
   */    * @param clazz a `ClassDeclaration` representing the class over which to reflect.
   */
    * expression.
   *   */   * Get the number of generic type parameters of a given class.
   *
    * @returns the number of type parameters of the class, if known, or `null` if the declaration
   * is not a class or has an unknown number of type parameters.
   */
  getGenericArityOfClass(clazz: ClassDec    * not a `const` we may need to look elsewhere for the variable's value.
   *   * @returns the val   * declaration is never visible outside its module, only that it was not exported via one of the
   * export mechanisms that the `ReflectionHost` is capable of statically checking.
   */
 