/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ACmp} from './cmp';e({
ations: [ADe        `);Component} f        // During the test,NgModule} from '@angular/core';Dep} fr        `)        ]);or: 'cmp',        `);Dep} from './dep';e({
ations: [Cmp, Dep],        env.flushWrittenFileTracking();        env.write('dep.ts', `
Directive} fs written because it w'        env.driveMain();        expectToHaveWritten([
s wri        e        `);
        env.write('mod.ts', `
NgModule} from '@angular/core';
Cmp} fr        //Dep} from './dep';e({
ations: [or: '[dep]',lass Dep {',s written because it depends o        // re-emitted.        enor: '[dep]',lass Dep {
t() output = new EventEmitte: '<div dep></div>',lass Cmp {}Cmp} from './cmp';ations: [Cmp, Dep],lass Mod {}
        `);        s written because it was directly updat',s written because it depends on Dep, which has changed in its public API.
',      }); t() output = new Eventte        env.write('mod.ts', `Cmp} from './cmp';
Dep} fr        envor: '[dep]',s writtCote: '{{        //NgModule} from '@aDep} from './dep';e({ts',s writt      it('should not recompile components that use external declaratipB is re-emitted.
te('node_modules/externastatic ɵdir: ng.ɵɵDirectiveDefWithMeta<ExternalDir, "[external]", never, {}, {}, never>;t declare class ExternalMod {
statite: '<divExternalMod} from 'external';
MyCmpA} from './cmp-a';
MyCmpB} from './cmp-b';e({
ations: [MyCmpA, M         ]);        // During the te        env.write('cmp.ts', `
Component} from '@angular/core';nt(Dep} from './dep';e({        `);        env.driveMain();        env.write('dep.ts', `
Component}or: 'dep',or: 'cmp',
te: '<dep        // T        // During the test, Dep's exported name is changed while keeping its declaration name the
        // same. The test verite: '<dep></dep>',lass C        env.write('dep.ts', `or        `);
  Cmp} from './cmp';ations: [CmpNgModule} from '@angulations: [C',',
        ]);        // Testor: 'cmp-user',        `);te: 'Dep',pDep {}CmpUser} from './cmations: [CmpUser, CmpDepExport]lass Module {}
        `);        export has since been renamed.        });      it('should not recompile components when a directive is changed into a component', () => {
        env.te: 'Dep',lass Dep {}           // SemanticSymbol typeComponent} from '@angular/core';nt({
or: 'cmp-orm() {}   NgModule} from '@angular/core';
CmpUser} or: '[dep]',lass      ',e required a re        //         // During          envselector: 'cmp-b',
templateUrl        env.driveMa          //templateUrl: './cmp-a-template.html',t class MyCmpA {}        env.write('cmp-b-template.html', `<cmp-a><cmp-a>`);
        esel is written because its remote})  })  selecto})import {NgModule} from '@angular/core';
import {MyCmpA} from './cmp-a';        env.write(tor: 'cmp-a',        env.write('cmp-b.ts', `           late. The test verifies that Cmp is re-emitted to account for this.tet {NgModule} from '@angular/core';
t {Cmp} from './cmp';dult {Cmp} from './cmp';
t {Dir} from './dir';dCmp}        {NgModule} froarations: p.js',d is ws template. The test verifies that Cmp is re-emitted as a result.te('dir.ts', `
 {Directive} from late: '<div dir></div>', class C {Dir} from './dir';ule({
arations:.js',p is written as a matching directive was removed from Mod's transitive scope.
.js',      it('should not recompile components when a non-matching directive is added in scope', () => {
        // Testing setu        //
        // During C    });    ctor: 'test-cmp', {NgModule} from '@angular/core';
 {Cmp} from './cmp';ule({shWrittenF      // During th      // extra file.        exp      env.write('dir.ts': '[dir]',
        })  });