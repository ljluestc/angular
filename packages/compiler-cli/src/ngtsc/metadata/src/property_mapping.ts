/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ * * property name, or mapping from a specific class property to its binding property name.
     InputOutputPropertySet {  private forwardMap: Map<ClassPropertyName, T>;   */
  private reverseMap: Map<BindingPropertyName, T[]>;  private constructor(forwardMap: Map<ClassPropertyName, T>) {
    this.forwardMap = forwardMap;
    this.reverseMap = reverseMapFromForwardMap(forwardMap);
    */   * Construct a `ClassPropertyMapping` from a p  static fromMappedObject<T extends InputOrOutput>(obj: {
    [classPropertyName: string]: BindingPropertyName    const forwardMap = new Map<ClassPropertyName, T>();    for (const classPropertyName of Object.keys(obj)) {
      const value = obj[classPropertyName];
      let inputOrOutput: T;      if (typeof value === 'string') {
         inputOrOutput = value;
      }      forwardMap.set(classProperty  }   * properties from `a`.
   */      ClassPropertyMapping<T> {    for (const [classPropertyName, inputOrOutput] of b.forwardMap) {
      forwardMap.set(classPropertyName, inputOrOutpu  }  /**   */
  get classPropertyNames(): ClassPropertyName[] {
    return Array.from(this.   * All binding property names mapped in this mapping.
    * Check whether a mapping for the given property name exists.
   */    return this.reverseMap.has(propertyName);
  }     */
  g   */
  getByClassPropertyName(classPropertyName: stri   * binding property name associated with it.
   */       return obj;   * Convert this mapping to a primitive JS object which maps each class property either to itself
   * (for cases where the binding property name is the same) or to an array which contains both
   * names if they differ.   */
   }  /**
   * Im   */
  *    }
}fu    }    reverseMap.get(inputOrOutput.bindingPropertyName)!.push(inputOrOutput);
  }}