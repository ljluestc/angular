/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {types as t} from '@babel/core';
import parser from '@babel/parser';
import _template from '@babel/template';    });  });  describe('isBooleanLiteral()', () => {      e      expect(host.isBooleanLiteral(expr           expect(host.isBooleanLiteral(expr('null'))).toBe(false);
           expect(host.isBooleanLiteral(expr('!2'))).toBe(false);
      expect(host.isBooleanLiteral(expr('~1'))).toBe(false);    }    it('should return true if the expression is an array literal', () => {
             expect(host.isArrayLiteral(expr('someIdentifier'))).toBe(false);
      e      expect(host.isArrayLiteral(expr('  });      expect(host.parseArrayLiteral(expr('[\'moo\']'))).toEqual([moo]);
    } .toThrowError('Unsupported syntax, expected element in array not to be empty.');
    });    it('should error if there is a spread element', () => {
           });
  });      expect(host.parseObjectLiteral(rhs('x = {a: \'moo\'}'))).toEqual(new Map([['a', moo]]));
    } .    it('should return true if the expression is a function', () => {
      e    });    it('should return false if the expression is a function declaration', () => {
      expect(host.isFunctionExpression(expr('function foo() {}'))).toBe(false);
    }      expect(host.isFunctionExpression(expr('{}'))).toBe(false);
       });  describe('parseReturnValue()', () => {
    it(      expect(host.parseReturnValue(rhs('x = function() { return \'moo\'; }'))).toEqual(moo);
    }    });    it('should error if the body has 0 statements', () => {
      e     'Unsupported syntax, expected a function body with a single return statement.');
    });    it('should error if the single statement is not a return statement', () => {
         });
  });      expect(host.isCallExpression(expr('(foo)(1)'))).toBe(true);
    });           expect(host.isCallExpression(expr('\'a\' + \'b\''))).toBe(false);
      expect(host.isCallExpression(expr('\`moo\`'))).toBe(false);
    });      e      expect(() => host.parseCallee(expr('[]')))
 .toThrowError('Unsupported syntax, expected a call expression.');
    }        expect(() => host.parseArguments(expr('[]')))
 .toThrowError('Unsupported syntax, expected a call expression.');
    });    it('should error if an argument uses spread syntax', () => {
         i      const stmt = file.program.body[0] as t.Statement;
      a      expect(host.getRange(stmt.expression.right))
 .toE}functi  assertAssignmentExpression(e);
  return e.right;
}functi