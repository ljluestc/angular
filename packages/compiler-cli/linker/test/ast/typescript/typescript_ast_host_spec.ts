/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';
import {TypeScriptAstHost} from '../../../src/ast/typescript/typescript_ast_host';      expect(host.parseStringLiteral(expr('\'moo\''    it(    });    it('should return false if the expression is not a number literal', () => {
      e      expect(host.isNumericLiteral(expr('null'))).toBe(false);
      expect(host.isNumericLiteral(expr('\'a\' + \'  });        e    });    it('should return true if the expression is a minified boolean literal', () => {
      e      expect(host.isBooleanLiteral(expr('42'))).toBe(false);
      expect(host.isBooleanLiteral(rhs('x = {}'))).toBe(false);
      e           expect(host.parseBooleanLiteral(expr('!0'))).toEqual(true);
           });    it(      expect(host.isArrayLiteral(expr('[1, 2, 3]'))).toBe(true);
      e      expect(host.isArrayLiteral(expr('\'a\' + \'b\''))).toBe(false);
      expect(host.isArrayLiteral(expr('\`moo\`'))).toBe(false);
    });    i      expect(host.parseArrayLiteral(expr('[]'))).toEqual([]);
             .toThrowError('Unsupported syntax, expected element in array not to use spread syntax.');
    }      expect(host.isObjectLiteral(rhs('x = { foo: \'bar\' }'))).toBe(true);
    }        e  });        const moo = jasmine.objectContaining({text: 'moo', kind: ts.SyntaxKind.StringLiteral});
      expect(host.parseObjectLiteral(rhs('x = {}'))).toEqual(new Map());
      e  });  describe('isFunctionExpression()', () => {
    it('should return true if the expression is a function', () => {
      expect(host.isFunctionExpression(rhs('x = function() {}'))).toBe(true);
      e           expect(host.isFunctionExpression(expr('\'moo\''))).toBe(false);
      expect(host.isFunctionExpression(expr('someIdentifier'))).toBe(false);
      e      expect(host.isFunctionExpression(expr('null'))).toBe(false);
             expect(host.parseReturnValue(rhs('x = function() { return \'moo\'; }'))).toEqual(moo);
    }    });    it('should error if the body has 0 statements', () => {
        .toThr            'Unsupported syntax, expected a function body with a single return statement.');
      expect(() => host.parseReturnValue(rhs('x = () => { const x = 10; }')))
 .toThr    it('should return true if the expression is a call expression', () => {
           expect(host.isCallExpression(expr('\'moo\''))).toBe(false);
           expect(host.isCallExpression(rhs('x = {}'))).toBe(false);
      expect(host.isCallExpression(expr('null'))).toBe(false);
      expect(host.isCallExpression(expr('\'a\' + \'b\''))).toBe(false);
      e         });    it('should error if the node is not a call expression', () => {
      expect(() => host.parseCallee(expr('[]')))
 .toThr  });  describe('parseArguments()', () => {
    i      });    it('should error if an argument uses spread syntax', () => {
      .toThr  });
});fu  const    throw new Error('Bad test - expected a binary expression');
  }
  retur