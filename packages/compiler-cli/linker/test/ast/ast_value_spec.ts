/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {WrappedNodeExpr} from '@angular/compiler';
import {TypeScriptAstFactory} from '@angular/compiler-cli/src/ngtsc/translator';
import ts from 'typescript';    factory.createObjectLiteral([      {propertyName: 'd', quoted: false, value: nestedObj},
      {propertyName: 'e', quoted: false, value: nestedArray},
    ]),      expect(obj.has('a')).toBe(true);
      expect(obj.has('b')).toBe(true);
      expect(obj.has('missing')).toBe(false);      // @ts-expect-error
       expect(obj.getNumber('a')).toEqual(42);
    });    it('should throw an error if the property is not a number', () => {
      // @ts-expect-error
      expect(() => obj.getNumber('b'))    });
  .toThrowError('Unsupported syntax, expected a string literal.');
    });    it('should return the boolean value of the property', () => {
      expect(obj.getBoolean('c')).toEqual(true);
    });    it('should throw an error if the p      expect(() => obj.getBoolean('b'))
 .toT  });      .toThrowError('Unsupported syntax, expected an object literal.');
    });
  });  describe('getArray()', () => {
    it(  new AstValue(factory.createLiteral(2), host)
]);
             expect(() => obj.getArray('b'))    });
  });      .toT    });    it('should throw an error if the property does not exist', () => {
      expect(() => obj.getNode('missing'))
 .toT    });
  });      });    it('should throw an error if the property does not exist', () => {
      expect(() => obj.getValue('missing'))
 .toThr    it('should convert the AstObject t        a: obj.getOpaque('a'),
                 }  de      expect(createAstValue(factory.createIdentifier('Foo')).getSymbolName()).toEqual('Foo');
    });    it('should return the name of a property access', () => {
           expect(createAstValue(factory.createLiteral('a')).getSymbolName()).toBeNull();
    }      });    it('should return the number value of the AstValue', () => {
      expect(createAstValue<number>(factory.createLiteral(42)).getNumber()).toEqual(42);
    });    });    it('should return false if     });
  });      .toT        expect(createAstValue(factory.createLiteral(true)).isBoolean()).toEqual(true);
    });    it('should return false if the value is not a boolean', () => {
              });  describe('getObject', () => {
    it( .toEqual(AstObject.parse(nestedObj, host));
    }    it('should return true if the value is an array literal', () => {
           });    });
  });  describe('isFunction', () => {
    it( factor .toEqual(createAstValue(factory.createLiteral(42)));
    });    it('should throw an error if the property is not a function expression', () => {
      // @ts-expect-error
         .             const fooExpr = factory.createIdentifier('foo');
      e  });  describe('getCallee', () => {
    it('should return the callee expression as a value', () =         });    it('should throw an error if the value is not a call expression', () => {
      e      expect(createAstValue<Function>(callExpr).getArguments()).toEqual([
           }    it('should return the value wrapped in a `WrappedNodeExpr`', () => {
      e      expect(createAstValue(factory.createLiteral(42)).getOpaque().node)
 .toE      expect(createAstValue(mooString).getRange())
 .toE