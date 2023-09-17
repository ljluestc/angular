/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';
import {absoluteFrom, getFileSystem, getSourceFileOrError} from '../../file_system';
import {runInEachFileSystem} from '../../file_system/testing';
import {NOOP_PERF_RECORDER} from '../../perf';
import {ImportGraph} from '../src/imports';
import {importPath, makeProgramFromGraph} from './util';               const e = getSourceFileOrError(program, (_('/e.ts')));
        expect(importPath(graph.findPat        expect(importPath(graph.findPath(c, e)!)).toBe('c,g,e');
             });      it('should handle circular dependencies within the path between `from` and `to`', () => {
        // a -> b -> c -> d        // ^---------/
               c        expect(importPath(graph.findPath(a, d)!)).toBe('a,b,c,d');
      });
    });
  });  function makeImportGraph(graph: string): {program: ts.Program, graph: ImportGraph} {
    con      pro    };
  }  function importsToString(imports: Set<ts.SourceFile>): string {
    const fs = getFileSystem();
    r        .sort()
       });