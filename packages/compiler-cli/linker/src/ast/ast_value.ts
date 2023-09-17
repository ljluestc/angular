/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as o from '@angular/compiler';      number {  }  /**         boolean {  }  /**   *
   * Throws an error if there is no such property or the property is not an object.
   */
  getObject<K extends PropertyKey<T>>(th   * Throws an error if there is no such pro  getArray<K extends PropertyKey<T>>(this: ConformsTo<this, T[K], unknown[]>, propertyName: K):
       return arr.map(entry => new AstValue<ArrayValueType<T[K]>, TExpression>(entry, this.host));
  }  /**   * `propertyName`.
      */      * Returns the raw `TExpression`   * Throws an error if there is no such property.
   */
  getNode(propertyName: PropertyKey<T>): TExpression {
    return this.getRequiredProperty(propertyName);     }  /**
   * Converts the AstObject to a raw JavaScript object, mapping each property value (as an
   * `AstValue`) to the generic type (`T`) v  toLiteral<V>(mapper: (value: AstValue<ObjectValueType<T>, TExpression>, key: string) => V):
       for (const [key, expression] of this.obj) {
       }  }  /**
      */
  toMap<V>(mapper: (value: AstValue<ObjectValueType<T>, TExpression>) => V): Map<string, V> {
       return result;    if (!this.obj.has(propertyName)) {
      throw new FatalLinkerError(
ression, `Expected property '${propertyName}' to be present.`);
    }
    * access to the underlying value of the wrapped expression.
 * */  constructor(readonly expression: TExpression, private host: AstHost<TExpression>) {}  /**
   * Get the name of the symbol represented by the given expression node, or `null` if it is not a
   * symbol.  getSymbolName(): string|null {
      * Is this value a number?
       return this.host.isNumericLiteral(this.expression);
  }  /**
     getNumber(this: ConformsTo<this, T, number>): number {
      * Is this value a string?
   */
  i   */
  g  }  /**
   * Is this value a boolean?
   */
  isBoolean(): boolean {
    return this.host.isBooleanLiteral(this.expression);
  }   * Is this value an object literal?
        getObject(this: ConformsTo<this, T, object>): AstObject<ObjectType<T>, TExpression>   }  /**
   * Is this value an array literal?
   */    return this.host.isArrayLiteral(this.expression);
  }    const arr = this.host.parseArrayLiteral(this.expression);
      * Is this value a function expression?
       return this.host.isFunctionExpression(this.expression);
  }   * it is not a function expression.
       return this.host.isCallExpression(this.expression);
  }  getCallee(): AstValue<unknown, TExpression> {
      */
  g  }   */
  getRange(): Range {
    return this.host.getRange(this.expression);
  }
}
