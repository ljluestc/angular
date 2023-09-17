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
import {Cycle, CycleAnalyzer} from '../src/analyzer';
import {ImportGraph} from '../src/imports';
import {importPath, makeProgramFromGraph} from './util';      // a -> b -> c -> d
      /      const a = getSourceFileOrE      c      expect(analyzer.wouldCreateCycle(a, b)).toBe(null);
      expect(analyzer.wouldCreateCycle(a, c)).toBe(null);
      e      expect(analyzer.wouldCreat    });      const a = getSourceFileOrError(program, (_('/a.ts')));
      const b = getSourceFileOrError(program, (_('/b.ts')));
      c      const cycle = analyzer.wouldCreateCycle(c, a);
      expect(cycle).toBeInstanceOf(Cycle);
      e      const c = getSourceFileOrError(program, (_('/c.ts')));
      const e = getSourceFileOrError(program, (_('/e.ts')));
      c      expect(analyzer.wouldCreateCycle(b, g)).toBe(null);
      const cycle = analyzer.wouldCreateCycle(g, b);
      e      expect(analyzer.wouldCreateCycle(b, c)).toBe(null);
      analyzer.recordSyntheticImport(c, b);
      const cycle = analyzer.wouldCreateCycle(b, c);
      expect(cycle).toBeInstanceOf(Cycle);
      expect(importPath(cycle!.getPath())).toEqual('b,c,b');
    });    it('should not consider type-only imports', () => {
      c    });
  });  function makeAnalyzer(graph: string): {program: ts.Program, analyzer: CycleAnalyzer} {
    const {program} = makeProgramFromGraph(getFileSystem(), graph);
    return {
      program,
      a  }
});