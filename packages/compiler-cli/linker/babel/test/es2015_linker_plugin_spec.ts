/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as o from '@angular/compiler/src/output/output_ast';
import babel, {NodePath, PluginObj, types as t} from '@babel/core';
import _generate from '@babel/generator';     () => {       const logger = new MockLogger();       babel.transformSync(
  [    'spread(...x);'
  ].join('\n'),    parserOpts: {sourceType: 'unambiguous'},       expect(isPartialDeclarationSpy.calls.allArgs()).toEqual([
['fn1'],['fn3'],
['method'],
['fn4'],       ]);
     });  it('should return a Babel plugin that calls FileLinker.link       const linkSpy = spyOn(FileLinker.prototype, 'linkPartialDeclaration')
   .and.       const logger = new MockLogger();
       const plugin = createEs2015LinkerPlugin({fileSystem, logger});       babel.transformSync(
  [    `ɵɵngDeclareDirective({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core, x: 1});`,
    `i0.    'spread(...x);',
    `i0['ɵɵngDeclareDirective']({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core, x: 4});`,
  ].join('\n'),
  {    filename: '/test.js',
    parserOpts: {sourceType: 'unambiguous'},[
  'ɵɵngDeclareDirective',],
[  '{minVersion:\'0.0.0-PLACEHOLDER\',version:\'0.0.0-PLACEHOLDER\',ngImport:core,foo:()=>ɵɵngDeclareDirective({minVersion:\'0.0.0-PLACEHOLDER\',version:\'0.0.0-PLACEHOLDER\',ngImport:core,x:2})}'
],
// Note we do not process `x:2` declaration since it is nested within another declaration
[  '{minVersion:\'0.0.0-PLACEHOLDER\',version:\'0.0.0-PLACEHOLDER\',ngImport:core,x:3}'
],],
       ]);     () => {
       l  .and.callFake(() => t.identifier('REPLACEMENT_' + ++replaceCount));
       const fileSystem = new MockFileSystemNative();
       const logger = new MockLogger();
       const plugin = createEs2015LinkerPlugin({fileSystem, logger});
       const result = babel.transformSync(
  [
    'var core;',    'spread(...x);',
  ].join('\n'),
  {    filename: '/test.js',
    parserOpts: {sourceType: 'unambiguous'},
    gene       expect(result!.code).toEqual('var core;REPLACEMENT_1;REPLACEMENT_2;x.qux();spread(...x);');
     });  it('should return a Babel plugin that adds shared statements after any imports', () => {
    spyOnLinkPartialDeclarationWithConstants(o.literal('REPLACEMENT'));
    const fileSystem = new MockFileSystemNative();
    const logger = new MockLogger();
    const plugin = createEs2015LinkerPlugin({fileSystem, logger});
    const result = babel.transformSync( `ɵɵngDeclareDirective({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core})`,
 `ɵɵngDeclareDirective({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core})`,
 `ɵɵngDe        {
 plugins: [createEs2015LinkerPlugin({fileSystem, logger})],
 filenam generatorOpts: {compact: true},
                .toEqual(
   'import*as core from\'some-module\';import{id}from\'other-module\';const _c0=[1];const _c1=[2];const _c2=[3];"REPLACEMENT";"REPLACEMENT";"REPLACEMENT";');
  });  it('should return a Babel plugin that adds shared statements at the start of the program if it is an ECMAScript Module and there are no imports',
     () => {
       spyOnLinkPartialDeclarationWithConstants(o.literal('REPLACEMENT'));
       const fileSystem = new MockFileSystemNative();  [
    'var core;',
    `ɵɵn    `ɵɵngDeclareDirective({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core})`,
  ].join('\n'),
  {
    plugins: [createEs2015LinkerPlugin({fileSystem, logger})],
    filename: '/test.js',
    // W    generatorOpts: {compact: true},
  });
     'const _c0=[1];const _c1=[2];const _c2=[3];var core;"REPLACEMENT";"REPLACEMENT";"REPLACEMENT";');
     });  it('should return a Babel plugin that adds shared statements at the start of the function body if the ngImport is from a function parameter',
     () => {
       spyOnLinkPartialDeclarationWithConstants(o.literal('REPLACEMENT'));
            const plugin = createEs2015LinkerPlugin({fileSystem, logger});
       const result = babel.transformSync(
  [
    'fun    `  ɵɵngDeclareDirective({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core})`,
    `  ɵɵngDeclareDirective({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core})`,
    '}'
  ].join('\n'),
  {
    plug    parserOpts: {sourceType: 'unambiguous'},
    generatorOpts: {compact: true},
  });  .toEqual(
'functio     () => {
       spyOnLinkPartialDeclarationWithConstants(o.literal('REPLACEMENT'));
       const fileSystem = new MockFileSystemNative();
       const logger = new MockLogger();
       const plugin = createEs2015LinkerPlugin({fileSystem, logger});
       const result = babel.transformSync(
  [
    'function run() {',
    `  ɵ    `  ɵɵngDeclareDirective({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core})`,
    '}',
  ].join('\n'),
  {
    plugins: [createEs2015LinkerPlugin({fileSystem, logger})],
    file    generatorOpts: {compact: true},
  });
     `(function(){const _c0=[1];return"REPLACEMENT";})();`,
`(functi     });  it('should still execute other plugins that match AST nodes inside the result of the replacement',
     () => {
       spyOnLinkPartialDeclarationWithConstants(o.fn([], [], null, null, 'FOO'));
       const fileSystem = new MockFileSystemNative();
       const logger = new MockLogger();
       const plugin = createEs2015LinkerPlugin({fileSystem, logger});
       const result = babel.transformSync(
  [
    `ɵɵngDeclareDirective({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core}); FOO;`,
  ].join('\n'),
  {
    plugins: [
createEs2015LinkerPlugin({fileSystem, logger}),
createIdentifierMapperPlugin('FOO', 'BAR'),
createIdentifierMapperPlugin('_c0', 'x1'),
    ],    parserOpts: {sourceType: 'module'},
    generatorOpts: {compact: true},
  });`(function(){const x1=[1];return function BAR(){};})();BAR;`,
       ]// Inser// outside of an active linker context.
constantPool.statements.push(
    o.fn(/* params */[], /* body */[], /* type */ undefined,
   /* sourceSpan */ undefined, /* name */ 'inserted')
  .callFn([])
  .toStmt());return {
  expression: o.literal('REPLACEMENT'),
  statements: [],
};
       }) as typeof PartialDirectiveLinkerVersion1.prototype.linkPartialDeclaration);    const isPartialDeclarationSpy =
        spyOn(FileLinker.prototype, 'isPartialDeclaration').and.callThrough();    const fileSystem = new MockFileSystemNative();
    const logger = new MockLogger();
    const plugin = createEs2015LinkerPlugin({fileSystem, logger});
    const result = babel.transformSync(
        [
 'import * as core from \'some-module\';',
 `ɵɵngDeclareDirective({minVersion: '0.0.0-PLACEHOLDER', version: '0.0.0-PLACEHOLDER', ngImport: core})`,
        ].join('\n'),
        {
 plug parserOpts: {sourceType: 'unambiguous'},
 generat * Convefunction humanizeLinkerCalls(
    calls: jasmine.Calls<typeof FileLinker.prototype.linkPartialDeclaration>) {
  return calls.all().map(({args: [fn, args]}) => [fn, generate(args[0], {compact: true}).code]);
}/**
 * Spy on the `PartialDirectiveLinkerVersion1.linkPartialDeclaration()` method, triggering
 * shared confunction spyOnLinkPartialDeclarationWithConstants(replacement: o.Expression) {
  let callCount = 0;
  spyOn(PartialDirectiveLinkerVersion1.prototype, 'linkPartialDeclaration')
      .and.callFake((constantPool => {
       const constArray = o.literalArr([o.literal(++callCount)]);       constantPool.getConstLiteral(constArray);
       constantPool.getConstLiteral(constArray);expression: replacement,
statements: [],
       };
     }) as typeof PartialDirectiveLinkerVersion1.prototype.linkPartialDeclaration);
}/**
 * A simple Babel plugin that will replace all identifiers that match `<src>` with identifiers
 * called `<dest>`.
 */
function createIdentifierMapperPlugin(src: string, dest: string): PluginObj {
  return {
    visitor: {
      Identifier(path: NodePath<t.Identifier>) {
        