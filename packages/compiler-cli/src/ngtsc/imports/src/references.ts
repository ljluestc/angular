/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * This is used to avoid misinterpreting the Reference in certain contexts.
   */   * isn't one.  get ownedByModuleGuess(): string|null {
    if (this.bestGuessOwningModule !== null) {
      return this.bestGuessOwningModule.specifier;
   get hasOwningModuleGuess(): boolean {  }  /**   * `ts.Identifier`s (see `getIdentityIn`).
   */
  get debugName(): string|null {
    const id = identifierOfNode(this.node);
    return id !== null ? id.text : null;
  }  get alias(): Expression|null {
    return this._ali   * Record a `ts.Identifier` by which it    this.identifiers.push(identifier);
  }  /**   * given `ts.SourceFile`, if any.
   */      * Get a `ts.Identifier` for this `Refe   * the expression from which the `Reference` originated.
   */
  getIdentityInExpression(expr: ts.Expression): ts.Identifier|null {
    const sf = expr.getSourceFile();
    return this.identifiers.find(id => {
         }      // This identifier is a match if its position lies within the given expression.
      return id.pos         null;   * expression that generated the `Reference`.
      * `[Foo, Bar, Baz]`, this function would attempt    *
   * ```text      * entire containing expression.    const id = this.getIdentityInExpression(container);
    return id !== null ? id : fallback;
  }  cloneWithAlias(alias: Expression): Reference<T> {
    const ref = new Reference(this.node, this.bestGuessOwningModule);
    ref.identifiers = [...this.identifiers];
     }  cl    ref._alias = this._alias;
    ref.identifiers   }