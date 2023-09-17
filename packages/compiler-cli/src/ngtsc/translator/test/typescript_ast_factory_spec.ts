/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {leadingComment} from '@angular/compiler';
import ts from 'typescript';           const assignment = factory.createDynamicImport(url);                    ].join('\n'));
    });
  });      const {items: [callee, arg1, arg2], generate} = setupExpress           expect(genera      factory = new TypeScriptAstFactory(/* annotateForClosureCompiler */ true);      const {items: [callee, arg1, arg2], generate} = setupExpressions(`foo`, `42`, `"moo"`);
      const call = factory.createCallExpression(callee, [arg1, arg2], true);
       });      const {items: [test, thenExpr, elseExpr], generate} =
ressions(`!test`, `42`, `"moo"`);
         it('should create an expression accessing the element of an ar           const stmt = factory.createExpressionStatement(expr);
      e    });
  });  describe('createFunctionDeclaration()', () => {       () => {
ems: [body], generate} = setupStatements('{x = 10; y = 20;}');
= facual(        () => {
ems: [body], generate} = setupStatements('{x = 10; y = 20;}');
= fac      expect(generate(fn)).toEqual('function (arg1, arg2) { x = 10; y = 20; }');
    });
  });      const {items: [testStmt, thenStmt, elseStmt], generate} =
tements      const ifStmt = factory.createIfStatement(test, thenStmt, elseStmt);
             '    x = 10;',        '    x = 42;',
      ].join('\n'));
    }         it('should create an arrow function with an implicit return if a single statement is provided',
       () => {
ems: nerate(fn)).toEqual('(arg1, arg2) => arg2 + arg1');
         });    it('should create an arrow function with a body when an array of statements is provided',
       () => {
ems: [body], generate} = setupStatements('{x = 10; y = 20; return x + y;}');
= fac      expect(ts.isNumericLiteral(literal)).toBe(true);
      e      const {generate} = setupStatements();
           expect(generate(literal)).toEqual('NaN');      const {generate} = setupStatements();
      const literal = factory.createLiteral(true);
      e    });    it('should create an `undefined` literal', () => {
      const {generate} = setupStatements();
         it('should create a `new` operation on the constructor `expression` with the given `args`',
       () => {
ems: nerate(call)).toEqual('new Foo(42, "moo")');
                  expect(generate(obj)).toEqual('{ prop1: 42, "prop2": "moo" }');
    });
  });  describe('createParenthesizedExpression()', () => {
    i      const paren = factory.createParenthesizedExpression(expr);
           expect(generate(returnStmt)).toEqual('return 42;');
    });    it('should create a void return statement if the expression is null', () => {
      c  });  describe('createTaggedTemplate()', () => {
    i        {raw: 'raw\\n1', cooked: 'raw\n1', range: null},      const {items: [tag, ...expressions], generate} = setupExpressions('tagFn', '42', '"moo"');
      const template = factory.createTaggedTemplate(tag, {elements, expressions});
      e  });        const {items: [expr], generate} = setupExpressions(`new Error("bad")`);
      const throwStmt = factory.createThrowStatement(expr);
            });  describe('createUnaryExpression()', () => {
    i         });
  });  describe('createVariableDeclaration()', () => {
    it('should create a variable declaration statement node for the given variable name and initializer',
     Decl = factory.createVariableDeclaration('foo', initializer, 'let');
neratems: [inerate(varDecl)).toEqual('var foo = 42;');
       });    it('should create an uninitialized variable declaration statement node for the given variable name and a null initializer',
     Decl = factory.createVariableDeclaration('foo', null, 'let');
nerat  });  describe('setSourceMapRange()', () => {
    i             expect(range.end).toEqual(15);
     });/**
 * Setup some statements to use in a test, along with a generate function to print the created nodes
 * out. * The TypeScript printer requires access to the original source of non-synthesized nodes.
 * It u * pr */
funct  const sf = ts.createSourceFile('test.ts', stmts, ts.ScriptTarget.ES2015,   };
}/**
 * Setu * */  const {items: [arrayStmt], generate} = setupStatements(`[${exprs.join(',')}];`);
  const expressions = Array.from(
     