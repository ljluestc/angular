/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        import {Directive, Cne: tru        })        }        @Component({: '',
ctives: [DirectiveC],      expect(jsContents) never, nin( never, never, true, [{ direct        })
        export class MyComponent {ne: true,
ctives: [{directive: forwardRef(()       contures: [i0.ɵɵHostDirectivesFeature(function () { return [DirectiveB]; })]');
      etures: [i0.ɵɵHostDirectivesFeature(function () { return [{ directive: DirectiveA,in(uts: { value: "value" }, standalone: true });');      expect(dtsContents)omponentDeclaration<MyComponent, "my-component", ' +
er, {}, {}, never, never, false, [{ directive: typeof DirectiveB; ' +
uts: {}    });    it('should generate a definition if the host        import {Directive} from '@angular/core';        @Directive({
: '[dir-a]',
ne: tne: true        export class D        import {DirectiveA} from './dir-a';
        i: '',dRef(() => DirectiveA),      `);      env      expin(urn [i1.DirectiveA, { directive: i2.DirectiveB, inputs: ["input", "inputAlias"] }]; })]');      expect(dtsContents).toContain('import * as i1 from "./dir-a";');
      expect(dtsContents).toContain('import * as i2 fro nev      edir: ɵɵDirectiveDeclaration<ExternalDir, '[test]', never,
: "input"}, {output: "output"}, never, never, true, never>;
        }: '',
ctives: [{directive: ExternalDir, inputs: ['input: inputAlias'], outputs: ['output: outputAlias']}]
        }      `);      const dtsCin(uts: ["inin( never, never, false, [{ directive: typeof i1.ExternalDir; ' +
uts: { "i        export {InternalDir as ExternalDir} from './internal';
      `dir: ɵɵDirectiveDeclaration<ExternalDir, '[test]', never, never, {}, {}, never, t      `);        import {ExternalDir} from 'external';   ctives: [ExternalDir]        export class MyComp {}
      `);      env.driveMain();
      const jsContents = env.     in(
omponentD('test.ts', ` class HostDir {
ut({alictor: '[dir]',dalone: true class Dir {}nent({dalone: true,
rts: [Dir]App {}sages = env.driveDiagnostics().map(extractMessage);ssages).toEqual(
uired input 'customAlias' from directive HostDir must be specified.`]);
       })Directives: [{directive: HostDir, inputs: ['inputAlias: customAlias']}],
dalone: tdalone: true,lass HostDir {}ve({
rectives:        env.write('teslass H        ete: '',re        ete: '',        `);        const messages = env.driveDiagnostics().map(extractMessage);      });      it('should produce a diagnostic if a host directive is not a reference', () => {
        env.write('test.ts', `        `);        const messages = env.driveDiagnostics().map(extractMessage);
        expect(messages).toEqual(['Host directive must be a reference']);       te: '',
rective        env.write('test.ts', `
Directive, Component, NgModule} from '@angular/core';ve({
or: '[dir-b]',lass HostDirB {}ve({        // were the case, the same diagnostic would show up more than once in the diagnostics since
        // `HostDirB` is in the chain of both `Host` and `HostDirA`.
        c      });t() foo = new EventEmitter();ve({rectives: [{
ctive: HostDir,
uts: ['        eDirective, Output, Evet('alias') foo = new EventEmitter();ve({
or: '[dirctive HostDir does not have an output with a public name of foo.']);
      }() foo: any;ve({rectives:        expect(messages).toEqual(      });      Directive, Input} from '@angula('alias') foo: any;ve({
or: '[dir        `);        const messages = env.driveDiagnostics().map(extractMessage);
        expect(messages).toEqstDir {() buttonColor?: string;ve({
or: '[dir]',
rectives: [{directive: HostDir, inputs: ['colorAlias: buttonColor']}]r {}
        `ut('colorAlias') colormessages).toEqual(
['CannoDirective, Input} from '@angular/core';ve({selec('color') corectives: [{dmessages).toEqual([]); stDir {
t('clickedor: '[dir]',        `);essages = env.driveDiagnostics().map(extractMessage);
messages).toEqual([
ot alias lone: truelass HostDir {
({required: te: '',        `);        const messages = env.driveDiagnostics().map(extractMessage);        expect(messages).toEqual(
ired input 'input' from host directive HostDir must be exposed.`]);
      });      it('should use the public name when producing diagnostics about missing required inputs',te('test.ts', `
rt {Direct standalone: truert class HostDir {or: '[dir-a]',({required: true, alias: 'inputAlias'}) input: any;nt({
or: 'my-comp',rectives: [{directive: HostDir, inputs: ['inputAlias']}]lass MyComp {}
        `Directive, EventEmitte = newlone: tru        expect(diags.l