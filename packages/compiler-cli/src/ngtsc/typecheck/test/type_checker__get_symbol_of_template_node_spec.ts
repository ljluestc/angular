/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      let fileName: Absolute      beforeEach(() => {        const dirFile = absoluteFrom('/dir.ts');        targets = [me,
tes: {': 'NameDiv',
ctor: 'div[name]',: 'directive' as const,: `export class NameDiv {name!: string;}`,      });      it('        const sf = getSourceFileOrError(program, fileName);
               const symbol = templateTypeChecker.getSymbolOfNode(attributes[0], cmp)!;
        assertInputBindingSymbol(symbol);
        expect((symbol.bindings[0].tsSymbol!.declarations![0] as ts.PropertyDeclaration)
    .name.getText())        const mapping =        c        co        const symbol = templateTypeChecker.getSymbolOfNode(attributes[0], cmp)!;
           .name.getText())
al('name');
      });
    });    describe('templates', () => {        let templateNode: TmplAstTemplate;
        rFile = atemplate dir #ref0 #ref1="dir" let-contextFoo="bar">
 <div [instValues =ce: `
     ex name: 'TestDir',
 selector: '[dir]',
 file: dirFile,
 type: ce: `export class TestDir {}`,tClass(sf, 'Cmp');
Node = grogram.ge        });        it('should get symbol for variables when used', () => {
mbol = teriableSymblateTypeChecker.getTemplateMappingAtTcbLocation(symbol.initializerLocation)!;
nitialilateTypeChecker.getTemplateMappingAtTcbLocation(symbol.localVarLocation)!;
ocalVarMapping.span.toString()).toEqual('contextFoo');
        });        it('should get a symbol for local ref which refers to a directive', () => {
mbol = rogram.getTypeChecker().symbolToString(symbol.tsSymbol)).toEqual('TestDir');
rectiveRefembol = templateTypeChecker.getSymbolOfNode(
plateNode.children[0] as TmplAstTemplate).inputs[2].value, cmp)!;
ferenceS        }symbol.targ        }        it('should get a symbol for local ref which refers to the template', () => {
mbol = templateRefe        });        function assertTemplateReference(symbol: ReferenceSymbol) {
rogram.getTypeChecker().typeToString(symbol.tsType)).toEqual('TemplateRef<any>');
symbol.target as TmplAstTemplate).tagName).toEqual('ng-template');
ymbol.declaration.name).toEqual('ref0');
        }        it('should get symbol for the template itself', () => {
mbol = tempymbol.directives.length).toBe(1);
rective        });
      });          let program: ts.Program;        beforeEach(() => {
leName = absoluteFrom('/main.ts');
rFile = ce: `: st ngForDecla   name:    file: dirFile,
   type:  },ypeCheckTarget( = getSourceFileOrError(testValues.program, fiNode = getAstTemplates(templateTypeChecker, cmp)[0];
        });        it('should retrieve a symbol for a directive on a microsyntax template', () => {
mbol = tempestDir).toBeDefined();
rogram.getTypeChecker().symbolToString(testDir!.tsSymbol)).toEqual('TestDir');
        });        it('should retrieve a symbol for an expression inside structural binding', () => {
ForOfBinding =
lateNode.pressionSymbol(symbol);
rogram.getT        });        it('should retrieve a symbol for property reads of implicit variable inside structural binding', boundText =
  (temp namePropRead = interpolation.expressions[0] as PropertyRead;
 streetNut(  .toEqual('streetNumber');tUserSymbol(userSymbol);        it('finds symbols for variables', () => {
erVar = templateNode.variables.find(v => v.name === 'user')!;
erSymbol = templateTypeChecker.gAstElements((templlateTypeChecker.getSymbolOfNode(innerElementNodes[0].inputs[0].value, cmp)!;
dexSymbol(indexSymbol);
        }riableSymbondexSymborogram.getTypeChecker().typeToString(indexSymbol.tsType!)).toEqual('number');
indexSymbol).declaration).toEqual(templateNode.variables[1]);
        }
      });      it(tes: {'Cmp': templateString},        const sf = getSourceFileOrError(program, fileName);
        con        assertExpressionSymbol(symbol);
        expal('false | true | undefined');
      });      it('should get a symbol for properties several levels deep', () => {
        con        const {templateTypeChecker, program} = setup([me,
tes: {'Cmp': templateString},
: ` street: string;rface Person {
 address: A        con        assertExpressionSymbol(symbol);        expect((symbol.tsSymbol!.declarations![0] as ts.PropertyDeclaration).parent.name!.getText())
al('AddtNode.ast as PropertyRead).receiver as PropertyRead).receiver, cmp)!;
        a      });      describe('should get symbols for conditionals', () => {
        letleName = absoluteFrom('/main.ts');
String = `        <div [inputA]="person?.cars?.[1].engine"></div>
      `;
stValues = setup( {= testValues.progrtClass(sf, 'Cmp');
        });        it('safe property reads', () => {
des = getAsrogram.getTypeChecker().symbolToString(propReadSymbol.tsSymbol!))
qual('street');      .parent.name!.getText()rogram.ge        });        it('safe method calls', () => {
des = getAsthodCallSthat the symbol returned is for the return value of the safe method call.
ethodCallSymbol.tsSymbol).toBeNull();
rogram.getTypeChecker().typeToString(methodCallSymbol.tsType))
e('string | undefiqual('Car');rnarySymbol = templateTypeChecker.getSymbolOfNode(ternary, cmp)!;
pressionSymdrSymbol = templateTypeChecker.getSymbolOfNode(ternary.trueExp, cmp)!;
pressionSymrogram.getTypeChecker().typeToString(addrSymbol.tsType)).toEqual('Address');PersonSymbol = templateTypeChecker.getSymbolOfNode(ternary.falseExp, cmp)!;
pressionSqual('noPersonError');
rogram.getT      });      it('should get a symbol for function on        const templateString = `<div [inputA]="helloWorld"></div>`;
        const {templateTypeChecker, program} = setup([me,
tes: {'Cm class Cmp {
oWorld() {         ass        const {templateTypeChecker, program} = setup([me,: `
 class Cmp {
string;        const sf = getSourceFileOrError(program, fileName);
        const cmp = getClass(sf, 'Cmp');
        c        e        assertExpressionSymbol(aSymbol);
        exp      });      describe('local reference of an Element', () => {
        it('checkTypeOfDomRefere 'Cmp': `
   <input #myRef>
   <div [input]="des = getAstElements(templateTypeChecker, cmp);fSymbol = templateTypeChecker.getSymbolOfNode(nodes[0].references[0], cmp)!;
ferenceSymbemplateTypeChe   templates: {   <input #myRef>
   <div [input]="m },ckTypeOfDomReferences: false});
 = getSourcdes = getAstElements(templateTypeChecker, cmp);fSymbol = templateTypeChecker.getSymbolOfNode(nodes[0].references[0], cmp);
esired beha      });      it('should get symbols for references which refer to directives', () => {
        const fil        const templateString         <        <dites: {'Cmp': templateString},
ations: [{ctor: '[d: 'directive',
rtAs: ['dir'],me: dirFile,
: `export class TestDir { dirValue = 'helloWorld' }`,
tes: {}        ]);        expect((ref1Declaration.declaration as TmplAstReference).name).toEqual('myDir1');        const ref2Declaration = templateTypeChecker.getSymbolOfNode(nodes[1].references[0], cmp)!;
        ass        expect((ref2Declaration.declaration as TmplAst        expect(program.getTypeChecker().symbolToString(dirValueSymbol.tsSymbol!)).toBe('dirValue');
        expect(program.getTypeChecker().typeTo        let templateTypeChecker: TemplateTypeChecker;
        letmplateString = `
, 3] }} } }}`;lates: {'Cmp': templateString},
ce: ` export class Cmp {foo: Foo;}TypeChecker = testValues.templateTypeChecker;
= testValuetClass(sfhSource)        });        it('literal array', () => {
teralArray = interpolation.expressions[0] as LiteralArpressionSymbol(symbol);
rogram.ge        });        it('literal map', () => {
teralMap =         });      });      describe('pipes', () => {        let cmp: ClassDeclaration<ts.ClassDeclaration>;        let program: ts.Program;        function setupPipesTest(checkTypeOfPipes = true) {
leName = absoluteFrom('/main.ts');
mplateString = `<div [inputA]="a | test:b:c"></div>`;   fileName,
   templates: {'Cmp': templateString},
   source     pipeTypeChecker = testValues.templateTypeChecker;
 = getSourcpipeSymbo(program.getTypeChecker().symbolToString(pipeSymbol.tsSymbol!))
 .toEqual('transform');ymbol = templateTypeChecker.getSymbolOfNode(binding.exp, cmp)!;
pressionSymbol(aSymbol);
rogram.getTypeChepressionSymbol(bSymbol);rogram.getTypeChecker().typeToString(bSymbol.tsType)).toEqual('number');ymbol = templateTypeChecker.getSymbolOfNode(binding.args[1] as AST, cmp)!;
pressionSymbol(cSymborogram.getTypeChecker().typeToString(cSymbol.tsType)).toEqual('boo(`checkTypeOfPipes: ${checkTypeOfPipes}`, () => {
ause the args are propertpPipesTest(ct(program.getTypeChecker().typeToString(aSymbol.tsType)).toEqual('string');t bSymbol = templateTypeChecker.getSymbolOfNode(binding.args[0] as AST, cmp)!;
rtExpressionSyct(program.getTypeChecker().symbolToString(cSymbol.tsSymbol      });      it('should get a symbol for PropertyWrite expressions', () => {
        const filetes        const sf = getSourceFileOrError(program, fileName);
        con        const writeSymbol = templateTypeChecker        // Note that the symbol returned is for the RHS of the PropertyWrite. The AST
        //         e      });      it('should get a symbol for Call expressions', () => {
        const filtes: {'Cmp': '<div [input]="t        c        con        expect(callSymbol.tsSymbol).toBeNull();
        expect(program.getTypeChecker().typeToString(callSymbol.tsType)).toBe('string');
      });      it('should get a symbol for SafeCall expressions', () => {
        ctes: {'Cmp': '<div [input]="toString?.(123)"></div>'},
: `export class Cmp { toString?: (value: number) => string; }`        ]);
        const sf = getSourceFileOrError(program, fileName);
               const      it('can get a symbol for empty binding', () => {        const dirFile = absoluteFrom('/dir.ts');
        conations: [{ctor: '[dir]',: 'directive',
ts: {inputA: 'inputA'},me: dirFile,tes: {},        ]);
        const sf = getSourceFileOrError(progral('inputA');        c        const templateString =
dir [inputA]="'my input A'" [inputBRenamed]="'my inputB'"></div>`;
        con: 'directive',
ts: {inputAtes: {},        ]);        assertInputBindingSymbol(aSymbol);
        eal('inputA');        const inputBbinding = (nodes[0] as TmplAstElement).inputs[1];
        con        eal('inputB');        con        const templateString = `<div dir [inputA]="'my input A'"></div>`;
        const {program, templateTypeChecker} = setup([ations: [{
: 'TestDi: dirFile,ts: {inputA: 'inputA'},me: dirFile,
: `export class Te        const sf = getSourceFileOrError(program, fileName);
        const cmp = getClass(sf, 'Cmp');        const nodes = t        expect(aSymbol).toBeNull();
      });  tBoundAtt        assertInputBindingSymbol(symbol);    .name.getText())      });      it('returns dom b        const templateString = `<div [name]="'my input'"></div>`;
        const {program, templateTypeChecker} = setup([
e, templates: {'Cmp': templateString}, declarations: []},        const binding = (nodes[0] as TmplAstElement).inputs[0];        const symbol = templateTypeChecker.getSymbolOfNode(binding, cmp)!;
        assertDomBindingSymbol(symbol);
        ates: {'Cmts: {},me: dirFile,
: `export class TestDir {}`,        const symbol = templateTypeChecker.getSymbolOfNode(inputAbinding, cmp)!;
        a      });      it('can mat        const dirFile = absoluteFrom('/dir.ts');
        ctes: {'Cmp': templateString},
ations: [ name: 'TestDir',: `
rt class TestDir {inputA!: string;}
rt class OtherDir        assertInputBindingSymbol(symbol);    .name.getText())        expect((symbol.bindings[0].tsSymbol!.declarations![0] as ts.PropertyDeclaration)
    .parent.name?.tex      });      it('returns the first field match when directive mates: {'Cmp': `<div dir [inputA]="'my input A'"></div>`},
ations: [ name: 'TestDir',
 selector: '[dir]',
 file: dirF: `        const sf = getSourceFileOrError(program, fileName);
        const         expect((symbol.bindings[0].tsSymbol!.declarations![al('TestD        const fileName = absoluteFrom('/main.ts');
        const dirFati inputs: {inputA: 'inputA'}, name: 'OtherDir',
 selector:  type: 'directive',me: dirFile,
: `rt class OtherDir {otherDirInputA!: string;}tes: {},        ]);
        const sf = getSourceFileOrError(program, fileName);
        c        a    b => (b.tsSymbol!.declarations![0] as ts.PropertyDeclaration).name.getText())))
al(new Set(['inpual(new Set(['TestDir', 'Other        c        conations: [ name: 'TestDir',
 selector: '[dir]',
 file: di outputs: {outputA: 'outputA', outputB: 'renamedOutputB'},
me: dirFile,
: `        const sf = getSourceFileOrError(program, fileName);
        const cmp = getClass(sf, 'Cmp');        const nodes = templateTypeChecker.getTemplate(cmp)!;        const outputABinding = (nodes[0] as TmplAstElement).outputs[0];
        const aSymbol = templateTypeChecker.getSymbolOfNode(ou        expect((aSymbol.bindings[0].tsSymbol!.declarations![0] as ts.PropertyDeclaration)
    .name.getText())
al('out        asser selector: '[dir]', type: 'directive',
 outputs: {outputA: 'outputA'}, name: 'OtherDir', file: dirFile,
 type: 'directive',
 outputs: {unusedOutput: 'unusedOutput'},: `rt class OtherDir {unusedOutput!: EventEmitter<string>;}tes: {},        ]);
        const sf = getSourceFileOrError(program, fileName);                expect((symbol.bindings[0].tsSymbol!.declarations![0] as ts.PropertyDeclaration)
    .name.getText())utputBindingSymbol(symbol);        c        const {program, templateTypeChecker} = setup( fileName,
 templates: {'Cmp': `<div dir (outputA)="handle($event)"></div>`},
 declaratio ] fileName: dirFile,
 source: `export class TestDir {outputA!: EventEmitter<string>;}`,
 templates: {},TypeOfOutputEvents: false});
                const symbol = templateTypeChecker.getSymbolOfNode(outputABi      });      it('returns output symbol for two way binding', () => {
        c        const: `
 export cla }`, selector: '[dir]', outputs: {: `
 export class TestDir {   ngModelChange!: EventEmittertes: {},        ]);
        const sf = getSourceFileOrError(program, fileName);
        const cmp = getClass(sf, 'Cmp');        const nodes = templateTypeChecker.getTemplate(cmp)!;        const outputABinding = (nodes[0] as TmplAstElement).outputs[0];
        con        expect((symbol.bindings[0].tsSymbol!.declarations![0] as ts.PropertyDeclaration)
    .name.getText(al('TestDir');
      });      it('for elements that are components with no inp templates: {'Cmp': `<child-component></child-component>`},
 declarat          e        expect(symbol.directives[0].isCompone        const fileName = absoluteFrom('/main.ts');        c declarations: [     name: 'TestDir',
     selector: '[dir]',
     file: dirFile,     file: dirFile,   },
   {
     name: 'TestDirAllDivs',   }, source: `
rt class TestDir {}rt class TestDirModule {}
rt class         assertElementSymbol(symbol);
        expect(symbol.directives.length).toBe(3);        const expectedModules = new Set([null, 'TestDirModule', 'TestDir2Module']);
        c        e    });    it('el      const dirFile = absoluteFrom('/dir.ts');
      con   name: 'GenericDir',
   select   type: 'directive',
   isGeneric: true      const actualDirectives =
irectives.map(dir => program.getTypeChecker().typeToString(dir.tsType)).sort();
      expect(actualDirectives).toEqual(['GenericDir<any>']);
    });    it('ha      const fileName = absoluteFrom('/main.ts')        {s: {'Cmp': '<div></div>'},
        },      con      assertElementSymbol(symbol);  return nodes.filter((n): n is TmplAstTemplate => n instanceof TmplAstTemplate);
}function}function getAstElements(
    templateTypeChecker: TemplateTypeChecker, cmp: ts.ClassDeclaration&{name: ts.Identifier}) {
  return on}function assertDirectiveSymbol(tSymbol: Symbol): asserts tSymbol is Directi}function assertVariableSymbol(tSymbol: Symbol): asserts tSymbol is VariableSymbol {
  expect(tSymb  expect(tSymbol.kind).toEqual(SymbolKind.Element);  expect(    config: {...config, enableTemplateTypeChecker: true, useInlineTypeConstructors: false}
  });
}