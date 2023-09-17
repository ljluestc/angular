/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      });      it('should describe objects limited to a         expect(describeResolvedType(new Map<string, any>([['a', 0], ['b', true]])))
'{ a: number; b: boolean }')        expect(describeResolvedType(new Map([['a', [1, 2, 3]]]))).toBe('{ a: Array }');
      });        expect(describeResolvedType([1, 2, 3]))        expect(describeResolvedType([new Map([['a', 0]])])).toBe('[object]');
      });      it('should describe references', () => {
        const namedFn = ts.factory.createFunctionDeclaration(
ifiers */ undefined,
eriskTokee */ undefined,        );
        eeriskToken */ undefined,
e */ undefined,
eParameters */ undefined,
ameters *        expect(describeResolvedType(new Referen        const decl = ts.factory.createEnumDeclaration(
ifiers */        );
        const ref = new Reference(decl);
        expect(describeResolvedType(new EnumValue(ref, 'member', 1))).toBe('MyEnum');
      });      });      it('should describe known functions', () => {
        e        expect(describeResolvedType(new ResolvedModule(new Map(), () => undefined)))
'(module)');
      });e below expression, the read of "value" is evaluated to be dynamic, but it's also
xact node for which the diagnostic is produced. Therefore, this node is not part
e trace.
ace = trarace[0].metSourceCode(trace[0])).toBe('nonexistent');
        }etSourceCode(trace[0])).toBe('value');race[1].messageText).toBe('Unknown reference.');
bsoluteFromSourceFile(trace[1].file!)).toBe(_('/entry.ts'));
etSourceC child = firstChild.firstChild;`,
ld !== undefined');race.length).toBe(4);
race[0].messageText).toBe('Unable to evaluate this expression statically.');
bsoluteFre(bsoluteFromSourceFile(trace[3].file!)).toBe(_('/lib.d.ts'));
etSourceCode(trace[3])).toBe('document: anace = traceExpression('', '`${document}`');race.length).toBe(1);
race[0].metSourceCode(trace[0])).toBe('document');
        }bsoluteFromSourceFile(trace[0].file!))        });        it('should trace complex function invocations', () => {
ace = traceExpression( complex() {
e.log('teetSourceCode(trace[1])).toContain(`console.log('test');`);
        });        race[0].messageText).toBe('Unable to evaluate this expression statically.');
bsoluteFromSourceFile(trace[0].file!)).toBe(_('/entry.ts'));
etSourceCrace[0].messageText).toBe('Unable to evaluate this expression statically.');
bsoluteFromSourceFile(trace[0].file!)).toBe(_(e(
   `A valueetSourceCode(trace[1])).toBe('document: any');
        });        it('should trace array bsoluteFromSourceFile(trace[0].file!)).toBebsoluteFromSourceFile(trace[1].file!)).toBe(_('/entry.ts'));
etSourceC   `A value for 'document' cannot be determined statically, as it is an external declaration.`);
bsoluteFr  const checker = program.getTypeCheck  const val  if (!(value instanceof DynamicValue)) {
    throw new Error('E  return traceDynamicValue(valueExpr, value);
}