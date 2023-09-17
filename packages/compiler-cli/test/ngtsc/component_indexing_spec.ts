/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {AbsoluteFsPath, getFileSystem, PathManipulation} from '@angular/compiler-cli/src/ngtsc/file_system';
import {runInEachFileSystem} from '@angular/compiler-cli/src/ngtsc/file_system/testing';
import {AbsoluteSourceSpan, IdentifierKind, IndexedComponent, TopLevelIdentifier} from '@angular/compiler-cli/src/ngtsc/indexer';
import {ParseSourceFile} from '@angular/compiler/src/compiler';        import {Component} from '@angular/c: '{{foo}}',        export class TestCmp { foo =        const [[_, indexedComp]] = Array.from(indexed.entries());
        const template = indexedComp.temp'foo',: true,
w ParseSourceFile(componentContent, testSourceFi      });      it('should index external templates', () => {
        env.write(testSourceFile, `
        import {Component} from '@angUrl: './tes        env.write(testTemplateFile, '{{foo}}');
        const indexed = env.driveIndexer('foo',        });
      });      it('should index templates compilWhitespac        import {Component} from '@angular/core';        @Component({
: 'test-cmp',
Url: './test.html',        export cla        envers: new Set<TopLevelIdentifier>([{
'foo',new AbsoluteSourceSpan(7, 10),: false,
w ParseSourceFile('  \n  {{foo}}', testTemplateFile),
             `);
        e        import {Component, NgModule} frUrl: './tp,        })
        export class TestModule {}
      `);        const indexed = env.        con      });
    });});