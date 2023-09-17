/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {leadingComment} from '@angular/compiler';
import {types as t} from '@babel/core';
import _generate from '@babel/generator';
import _template from '@babel/template';    it('should create a block statement containing the given sta    });    it(      const arg1 = expression.ast`42`;
      const arg2 = expression.ast`"moo           expect(generate(call).code).toEqual('/* @__PURE__ */foo(42, "moo")');
    });    });
  });  describe('createElementAccess()', () => {
    it('should create an expression access      e  });  describe('createExpressionStatement()', () => {
    it('should create a statement node     const fn = factory.createFunctionDeclaration('foo', ['arg1', 'arg2'], stmts);
expect(generate(fn).code).toEqual([
  'fu  '  y = 20;',].joi       () => {
const stmts = statement.ast`{x = 10; y = 20;}`;
constexpect(generate(fn).code).toEqual([
  'function foo(arg1, arg2) {',].join(           expect(generate(fn).code).toEqual([
        'function (arg1, arg2) {',       });       () => {
const expr = expression.ast`arg2 + arg1`;
const       });    it('should create an arrow function with an implicit return object literal', () => {
      const expr = expression.ast`{a: 1, b: 2}`;
             '() => ({',
        '  a: 1,',
     const fn = factory.createArrowFunctionExpression(['arg1', 'arg2'], stmts);
expect(generate(fn).code).toEqual([
  '(a  '  y = 20;',
  '  return x + y;',  });         });  describe('createDynamicImport()', () => {
    it('should create a dynamic import', () => {
      const url = './some/path';
         i      const ifStmt = factory.createIfStatement(test, thenStmt, elseStmt);
      expect(generate(ifStmt).code).toEqual('if (!test) x = 10;else x = 42;');
    }      cons      expect(generate(ifStmt).code).toEqual('if (!test) x = 10;');
    });
  });      const literal = factory.createLiteral('moo');
      expect(t.isStringLiteral(literal)).toBe(true);
      expect(generate(literal).code).toEqual('"moo"');
    }      expect(t.isNumericLiteral(literal)).toBe(true);
      expect(generate(literal).code).toEqual('NaN');
    });    it('should create a boolean literal', () => {
           expect(generate(literal).code).toEqual('true');
    });    it('should create an `undefined` literal', () => {
           expect(generate(literal).code).toEqual('undefined');
    }      iconstconst arg2 = expression.ast`"moo"`;
const call = factory.createNewExpression(expr, [arg1, arg2]);
expect(generate(call).code).toEqual('new Foo(42, "moo")');
       });
  });             const obj = factory.createObjectLiteral([
             '{',
        '  prop1: 42,',
       });  des      const expr = expression.ast`a + b`;
      const paren = factory.createParenthesizedExpression(expr);
           const expr = expression.ast`obj`;
      const access = factory.createPropertyAccess(expr, 'moo');
      expect(generate(access).code).toEqual('obj.moo');
    });    it('should create a return statement returning the given expression', () => {
         });
  });  describe('createTaggedTemplate()', () => {
    it('should create a tagged template node from the tag, elements and expressions', () => {
      c        {raw: 'raw2', cooked: 'cooked2', range: null},
           const expressions = [
             ];
           expect(generate(template).code).toEqual('tagFn`raw1${42}raw2${"moo"}raw3`');
    }      const throwStmt = factory.createThrowStatement(expr);
      expe  });      const expr = expression.ast`42`;
         }    it('should create a unary expression with the operator and operand', () => {
      const expr = expression.ast`value`;
      const unaryExpr = factory.createUnaryExpression('!', expr);
      expect(generate(unaryExpr).code).toEqual('!value');
    }  constexpect(generate(varDecl).code).toEqual('let foo = 42;');
     expect(generate(varDecl).code).toEqual('const foo = 42;');
       });    it('should create a downleveled variable declaration statement node for the given variable name and initializer',
       const varDecl = factory.createVariableDeclaration('foo', initializer, 'var');
expect(generate(varDecl).code).toEqual('var foo = 42;');
     const       });
  });  describe('setSourceMapRange()', () => {
    i        end: {line: 2, column: 3, offset: 15},
        content: '-****\n*****\n****',
        url: 'other.ts'
      }        end: {line: 3, column: 3},
             content: '-****\n*****\n****',
           expect(expr.loc).toEqual({
        filename: undefined,
             } as any);  // The typings for `loc` do not include `filename`.
    }});
