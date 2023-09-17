/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';      export const Y = 'test';    });    it('resolves undef    });    it('function calls work', () => {    });    it('function call default value works', () => {
      expect(evaluate(`function foo(bar = 1) { return bar; }`, 'foo()')).toEqual(1);
      expect(evaluate(`function foo(bar     });    });    it('additio    });    });    it('static property call works', () => {('test'      expect(
(
ss Foo { static bar(test) { return test;      e      e      expect(ev      e      e      expect(evaluate('const a = 6, b = 3;', 'a | b')).toEqual(7);      e    });    it('evaluates comparison operators', () => {
      expect(evaluate('const a = 2, b = 3;', 'a < b')).toEqual(true);
      expect(evaluate('const a = 3, b =       e      e      expect(ev    });      e    });    it('supports undefined', () => {    });             `;      expect(evaluate(code, 'a')).toBe(0);
      expect(evaluate(code, 'b')).toBe(1);
      expect(evaluate(code, 'c')).toBe(2);      expect(evaluate(code, 'e')).toBe(2);
    });    it('supports destructuring o      c      expect(value.node.getText()).toEqual('"location" in window');
      e      }      if (!valu    });      }    });      if (!(value instanceof DynamicValue)) {
        return fail(`Should have resolved to a DynamicValue`);
      }      e    });       if (!Array.isArray(array)) {
        return fail(`Should have resolved to an array`);
      }      const value = array[1];
      i      }      if (!value.isFromInvalidExpressionType()) {
             e    });        'foo', 42, null, true
      ]      const tuple = evaluate(        import {External} from 'external';
             e      const value = evaluate(`declare const x: ['foo', string];`, `x`) as [string, DynamicValue];      expect(Array.isArray(value)).toBeTrue();
      e      expect(value[1].isFromDynamicType()).toBe(true);
    });      ]      c      if (!(resolved instanceof Reference)) {
        return fail('Expected expression to resolve to a reference');
      }      c'/node_ '/entry.ts'),
: `
foo} from 'some_library';      `
             const checker = program.getTypeChecker();      const expr = result.initializer!;
      c             e      });
    });    it('module spread works', () => {
      c _('/mo        b: 2,
       : ` const primary = mod2.indirection;
 const       ]);
      e('test'      expect(evaluate('const a = 2, b = 4;', '`1${a}3${b}5`')).toEqual('12345');
    });.test.b');      expect(evaluate(`const a = '12', b = '34';`, 'a[\'concat\'](b)')).toBe('1234');
      e      expect(
(`const        return fail(`Should have resolved to a DynamicValue`);
      }        return fail('Should originate from dynamic input');
      }      }        A,
        B,
           `,      if (!(result instanceof EnumValue)) {
           });        {name: _('/decl.d.ts'), contents: 'export declare let value: number;'},
      ]    });       const checker = program.getTypeChecker();
      const result = getDeclaration(program, _('/entry.ts'), 'target$', ts.isVariableDeclaration);
      const expr = result.initializer! as ts.ObjectLiteralExpression;      const evaluator = makeEvaluator(checker);
      c    });    it('should resolve dynamic values in object literals'        {name: _('/decl.d.ts'), contents: 'export declare const fn: any;'},
             c        return fail(`Should have resolved 'value' to a DynamicValue`);      c  `,
 [], firstArgFfr);      expect(id.text).toEqual('Target');
    });       ardRef(() => Foo)',{
  name:},
{  contesolved.bestGuessOwningModule).toBeNull();
         contents: `export declare f{
  name: _('/node_modules/external/index.d.ts'),
  contefail('Expected expression to resolve to a reference');esolved.node as ts.ClassDeclaration).name!.text).toBe('Foo');
solved.bestGuessOwningModule).toEqual({
er: 'exolved =er: 'external',
ionCont        return fail(`Should have resolved to a DynamicValue`);
      }      expect((value.node as ts.CallExpression).expression.getText()).toBe('foo');
      expect((value.reason.node as ts.FunctionDeclaration).getText())        const addDependency =
e.creat A { static foo = 42; } function bar() { return A.foo; }`, 'bar()');
               (args: Parameters<typeof addDependency>) => [args[0].fileName, args[1].fileName]))
al([[entryPath, entryPath], [entryPath, entryPath]]);        const addDependency =
e.createSpy<DependencyTracker['addDependency']>('DependencyTracker');
               const otherPath = getSourceFileOrError(program, _('/other.ts')).fileName;
        const evaluator = makeEvaluator(checker, {...fakeDepTracker, addDependency});
        evaluator.evaluate(expression);
       e.createSpy<DependencyTracker['addDependency']>('DependencyTracker');
        const {expression, checker, program} =
pressio conte        const directReexportPath = getSourceFileOrError(program, _('/direct-reexport.ts')).fileName;
        const constPath = getSourceFileOrError(program, _('/const.ts')).fileName;
               expect(
endencyot '/indirect-reexport.ts' or '/def.ts'.
S skips    }); };
