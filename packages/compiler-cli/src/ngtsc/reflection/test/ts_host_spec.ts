/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';  };
  visit(node);}runInEachFileSystem(() => {
  describe('reflector', () => {
    let _: typeof absoluteFrom;    beforeEach(() =>  contents: `
  class Bar {}  class Foo {
    constructor(bar: Bar) {}        `        const c         expect(args.length).toBe(1);
        expect        const {program} = makeProgram([
{  contents: `}
        `
}  name: _('/entry.ts'),
  contents: `  }
        `        ]);        const checker = program.getTypeChecker();
        const host = new TypeScriptReflectionHost(checker);
         expectParameter(args[0], 'bar', 'Bar', 'dec', './dec');
      });     }
        `{  contents: `
  import {dec} from './dec';
   }
        `             expectParameter(args[0], 'bar', 'Bar', 'dec', './dec');
      });      it('should refle{  contents: `
export class Bar {}
        `{
  name: _('/entry.ts'),
  contents: `
  import     c        const checker = program.getTypeChecker();
        c        expect(args.length).toBe(2);
        expectParameter(args[0], 'bar', {moduleName: './bar', name: 'Bar'});
        expectParameter(args[1], 'otherBar', {moduleName: './bar', name: 'Bar'});
      });      it('should reflect an argument from an aliased import', () => {
        const {program} = makeProgram([
{
  name: _('/baexport class Bar {}
        `
},
{    constructor(bar: LocalBar) {}
  }        const clazz = getDeclaration(program, _('/entry.ts'), 'Foo', isNamedClassDeclaration);
        const checker = program.getTypeChecker();
        c        expect(args.length).toBe(1);
        expectParameter(args[0], 'bar', {moduleName: './bar', name: 'Bar'});
      });      it('should reflect an argument from a namespace declarations', () => {
        ccontents: `
  export declare class Bar {}
  declare namespace i1 {
    export {    }
  }  class Foo {
    constructor(bar: i1.Bar) {}
  }        const args = host.getConstructorParameters(clazz)!;
        expect(args.length).toBe(1);
        expect        const {program} = makeProgram([
{
  name: _('/bar.ts'),
  content        `
},
{  contents: `
  import   }
        `
}
        ]);        const checker = program.getTypeChecker();
           expect(args.length).toBe(1);
        const param = args[0].typeValueReference;
        i        const {program} = makeProgram([
{
  name: _('/bar.ts'),
  content        `
},
{
  name: _('/entry.ts'),
  content    constructor(bar: Bar|null) {}
  }
        `        ]);
        c        expect(args.length).toBe(1);
        expectParameter(args[0], 'bar', {moduleName: './bar', name: 'Bar'});
      });      it('should reflect the arguments from an overloaded constructor', () => {
        const contents: `
  c    constructor(bar: Bar);
    constructor(bar: Bar, baz?: Baz) {}
  }
        `        const clazz = getDeclaration(pro        c        expect(args.length).toBe(2);
        expectParameter(args[0], 'bar', 'Bar');
        expectParameter(args[1], 'baz', 'Baz');
      });
    });          const {program} = makeProgram([
{name: _('/node_modules/absolute/index.ts'), contents: 'export class Target {}'},
{
  name: _('/entry.ts'),
  content},
        ]);
        c        if (foo.type === undefined || !ts.isTypeReferenceNode(foo.type) ||
  !ts.isI        const directImport = host.getImportOfIdentifier(Target);
        const sf = foo.getSourceFile();
        cname: 'Target',
from: 'absolute',
node: importDecl as ts.ImportDeclaration,
        });
     name: _('/entry.ts'),
  contents: `
  import * as abs from 'absolute';
  let foo: abs.Target;},        c        if (foo.type === undefined || !ts.isTypeReferenceNode(foo.type) ||
  !ts.isQualifiedName(foo.type.typeName)) {
return fail('Unexpected type for foo');
        }
        c        const sf = foo.getSourceFile();
        const importDecl = findFirstImportDeclaration(sf);
        expect(namespacedImport).toEqual({
name: 'Target',
from: 'absolute',
node: importDecl as ts.Impor      });
    });    describe('getDeclarationOfIdentifier()', () => {
      it('should reflect a re-export', () => {
        c  name: _('/entry.ts'),
  content        `
}
        ]        if (target.initializer === undefined || !ts.isIdentifier(target.initializer)) {
return fail('Unexpected initializer for target');
        }
        const directTarget =
  g        const host = new TypeScriptReflectionHost(checker);
        const targetDecl = host.getDeclarationOfIdentifier(Target);
        const directTargetDecl = host.getDeclarationOfIdentifier(DirectTarget);
        if (targetDecl === null) {
return fail('No declaration found for Target');
        } else if (directTargetDecl ===         }        expect(directTargetDecl.viaModule).toBe('absolute');
        expect(directTargetDecl.node).toBe(targetDecl.node);
      });      it('should resolve a direct import', () => {
        const {program} = makeProgram([
{name: _(  name: _('/entry.ts'),
  contents: `
  import {Target} from 'absolute';
  let foo: Target;
        `
},        const checker = program.getTypeChecker();
               const foo = getDeclaration(program, _('/entry.ts'), 'foo', ts.isVariableDeclaration);
        if (foo.type === undefined || !ts.isTypeReferenceNode(foo.type) ||
  !ts.isI        const decl = host.getDeclarationOfIdentifier(Target);
        expect(decl).toEquviaModule: 'absolute',      });      it('should resolve a namespaced import', () => {
        const {program} = makeProgram([
{name: _('/node_modules/absolute/index.ts'), contents: 'export class Target {}'},
{
  name: _  import * as abs from 'absolute';
  let foo: abs.Target;
        `
},
           }
        const Target = foo.type.typeName.right;
        const decl = host.getDeclarationOfIdentifier(Target);
        expect(decl).toEqual({
node: targetDecl,
viaModule: 'absolute',
        });
      });{
  name: _('/entry.ts'),
  content  export function foo() {}
  export type T = string;
  export         `
},
        ]);
        const checker = program.getTypeChecker();
        const host = new TypeScriptReflectionHost(checker);
        const exportedDeclar        expect(Array.from(exportedDeclarations!.keys())).toEqual(['foo', 'x', 'T', 'I', 'E']);
               const {program} = makeProgram([
{name: _('/node_modules/absolute/index.ts'), contents: 'export class Target {}'},
{name: _('/local1.ts'), contents: `export {Target as AliasTarget} from 'absolute';`},
{name: _('/local2.ts'), contents: `export {AliasTarget as T  name: _('/entry.ts'),
  contents: `
  export {Target as Target  export {Target as AliasTarget2} from './local2';        `        ]);
        const checker = program.getTypeChecker();
        const host = new TypeScriptReflectionHost(checker);
        const exportedDeclarations =
  host.ge'Target1', 'AliasTarget', 'AliasTarget2', 'Target'
        ]);
        expect(Array.from(exportedDeclarations!.values()).map(v => v.viaModule)).toEqual([
null, null, null, null
        ]    });    describe('getMembersOfClass()', () => {        const {program} = makeProgram([{
name: _('/entr  class Foo {  }
        `
        }]);
        const members = getMembers(program);
        expect(members.length).toBe(1);
        expectMember(members[0], 'string-literal-property-member', ClassMemberKind.Property);
      });      it('should retrieve method members', () => {
        const {program} = makeProgram([{
name: _('        `
        }]);
        c        expectMember(members[0], 'myMethod', ClassMemberKind.Method);
      });      it('should retrieve constructor as member', () => {
        const {program} = makeProgram([{
name: _('/entry.ts'),
contents: `
  class Foo {
    constructor() {}
  }
        `
        }]);        expect(members.length).toBe(1);
           @Input()
    prop: string;
  }
        `        const members = getMembers(program);
        expect(members.length).toBe(1);
        expect(members[0].decorators).not.toBeNull();
        expect(members[0].decorators![0].name).toBe('Input');
      });      it('identifies static members', () name: _('  class Foo {
    static staticMember = '';
  }
        `
        }        expect(members.length).toBe(1);
        expect(members[0].isStatic).toBeTrue();
      });      function getMembers(program: ts.Program) {
        const clazz = getDeclaration(program, _('/entry.ts'), 'Foo', isNamedClassDeclaration);
        c               expect(member.name).toEqual(name);      }
    });      param: CtorParameter, name: string, type?: strin    expect(param.name!).toEqual(name);
    if (type === undefined) {
      expect(param.typeValueReference).toBeNull();
    } else {
      if (param.typeValueReference.kind === TypeValueReferenceKind.UNAVAILABLE) {
        return fail(`Expected parameter ${name} to have a typeValueReference`);
      }typeof type === 'string') {
        expect(argExpressionToString(param.typeValueReference.expression)).toEqual(type);
      } else if (
param.t        expect(param.typeValueReference.moduleName).      } else {
        return fail(`Mismatch between typeValueReference and expected type: ${param.name} / ${
  param.typeValueReference.kind}`);
      }    if (decorator !== undefined) {
      exp      expect(param.decorators!.some(
  dec => dec.name === decorator && dec.import !== null &&
      dec.import.from === decoratorFrom))
.toBe(true);
    }
  }  function argExpressionToString(name: ts.Node|null): string {
    if (name == null) {
      throw new Error('\'name\' argument can\'t be null');
    }    if (ts.isIdentifier(name)) {
      return name.text;
    } else if (ts.isPropertyAccessExpression(name)) {
      r