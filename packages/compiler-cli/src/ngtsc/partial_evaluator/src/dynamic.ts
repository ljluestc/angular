/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * the value of that strin   */   * A value could no   * A value could not be determined statically for any reason other the above.
   */}/** */    return new Dy    return new Dynami      DynamicValue<Reference<ts.Declaration>> {
    return new DynamicValue(node, ref, DynamicValueReason.EXTERNAL_REFERENCE);
  }  static fromUnsupportedSyntax(node: ts.Node): DynamicValue {
    return new D    return new Dynami  }  static fromSyntheticInput(node: ts.Node, value: SyntheticValue<unknown>):
      DynamicValue<Synth   }  isFromDynamicInput(this: DynamicValue<R>): this is DynamicValue<DynamicValue> {
    return this.code === DynamicValueReason.DYNAMIC_INPUT;
  }  isFromDynamicString(this: DynamicValue<R>): this is DynamicValue {
    return this.code     return this.code === DynamicValueReason.EXTERNAL_REFERENCE;    return this.code === DynamicValueReason.UNSUPPORTED_SYNTAX;
  }  isFromUnknow  }  isFromComplexFun  }  isFromUnknown(this: DynamicValue<R>): this is DynamicValue {
    return this.code === DynamicValueReason.UNKNOWN;
  }      case DynamicValueReason.DYNAMIC_INPUT:
        return v      case DynamicVal         case DynamicValueReason.UNKNOWN:
        return visitor.v   v  visitUnknownIdentifier(value: DynamicValue): R;
  visitInvalidExpressionType(value: DynamicValue): R;
  v  visitSyntheticInput(value: DynamicValue<SyntheticValue<unknown>>): R;
  visitUnknown(value: