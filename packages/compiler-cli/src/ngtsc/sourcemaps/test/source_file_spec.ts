/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {encode} from '@jridgewell/sourcemap-codec';        const rawSourceMap: RawSourceMap = {mappings: '', names: [], sources: [], version: 3};
             });      it('should parse the mappings from the raw source map', () => { ['a.js']        };
        const originalSource = new SourceFile(_('/foo/src/a.js'), 'abcdefg', null, [], fs);
       alSource,undefinedtedSegment: {line: 0, column: 6, position: 6, next: undefined},      });      it('should return an empty Map for source files with no source map', () => {
        expect(extractOriginalSegments(parseMappings(null, [], []))).toEqual(new Map());
      }awSourceM: [],: 0, colu        const rawSourceMap: RawSourceMap = {
:
de([[[0        ], column: 2, position: 2, next: undefined},
, column: 3, position: 3, next:    });  arker4: SegmentMarker = {line: 0, column: 40, position: 40, next: marker5};
arker3: Smarker => ({generatedSegment: marker} as Mapping));arker: SegmentMarker = {line: 0, column: 35, position: 35, next: undefined};
ndex = findLastMappingIndexBefore(mappings, marker, /* exclusive */ false, 0);
index).        c        const marker2: SegmentMarker = {line: 0, column: 20, position: 20, next: marker3};
        const marker1: SegmentMarker = {line: 0, column: 10, position: 10, next: marker2};
             expect(index).toEqual(4);
      }          const mappings: Mapping[] = [marker1, marker2, marker3, marker4, marker5].map(
 => ({gen marker4: SegmentMarker = {line: 0, column: 40, pos marker2: SegmentMarker = {line: 0, column: 20, position: 20, next: marker3};
 marker1: SegmentMarker = {line: 0, column: 10, position: 10, next: marker2}; mappings: Mapping[] = [marker1, marker2, marker3, marker4, marker5].map(
  marker  marker3: SegmentMarker = {line: 0, column: 30, position: 30, next: marker4};
 marker2: SegmentMarker = {line: 0  marker rker5: SegmentMarker = {line: 0, column: 50, position: 50, next: undefined};rker3: SegmentMarker = {line: 0, column: 30, position: 30, next: marker4};
rker2: Seer => ({generatedSegment: marker} as Mapping));
dex = findLastMappingIndexBefore(mappings, marker3, /* exclusive */ true, 0);
ndex)  marker => ({generatedSegment: marker} as Mapping));
 index  m  marker => ({generatedSegment: marker} as Mapping)); marker: SegmentMarker = {line: 0, column: 35, position: 35, next: undefined};
 index = findLastMappingIndexBefore(mappings, marker4: SegmentMarker = {line: 0, column: 40, position: 40, next: marker5}; marker2: SegmentMarker = {line: 0, column: 20, position: 20, next: marker3};
 markert(index).toEqual(2);        it('should return the lowerIndex mapping index if there are multiple marker3: SegmentMarker = {line: 0, column: 30, position: 30, next: marker4};
 marker2: SegmentMarker = {line: 0, column: 20, pos mappings: Mapping[] = [marker1, marker2, marker3, marker4, marker5].map(
  marker => ({generatedSegment: marker} as Mapping)); marker: SegmentMarker =t(index).toEqual(3);        it('should return -1 if the segment marker is lower than the lowerIndex hint', () => {
rker5: Seer => ({generatedSegment: marker} as Mapping));rker: SegmentMarker = {line: 0, column: 25, position: 25, next: undefined};dex = findLastMappingIndexBefore(mappings, marker, /* exclusive */ false, 2);
ndex).toEqual(-1); marker2:awSourceMap: RawSourceMap = {  encode([[[0, 0, 0, 0], [2, 1, 0, 3], [4, 0, 0, 2], [5, 1, 0, 5], [6, 1, 0, 2]]]),
: [],
es: ['a.js', 'b.js'],riginalSegmentLinks(mappings);
mappings[0].originalSegment.next).toBe(mappings[2].originalSegment);
mappings[1].originalSegment.next).toBe(mappings[3].originalSegment);
mappiSourceFile(_('/foo/src/index.js'), 'index contents', rawSourceMap, [], fs);
ourceFi source = new SourceFile(_('/foo/src/c.js'), 'bcd123', h: null,ings: encode([[[0, 1, 0, 0], [1, 0, 0, 0], [4, 1, 0, 1]]]),
s: [],h: null,ings: encode([[[0, 0, 0, 0], [2, 0, 0, 3], [4, 0, 0, 2], [5, 0, 0, 5]]]),ces: ['b.js'],
ion: 3:: undefinedratedSegment: {line: 0, column: 2, position: 2, next: undefined},inalSegment: {line: inalSource: dSource,
inalSegment: {line: 0, column: 1, position: 1, nextinalSource: cSource,
inalSegment: {line: 0, column: 1, position: 1, next: inalSource: dSource,: undefined        });        it('should ignore mappings to missing source files', () => {
ourceMap:h: null,ings: encode([[[0, 0, 0, 0], [2, 0, 0, ces: ['b.js'],mappings to c are dropped since there is no source file to mapemoveOriginalSegmentLinks(aSource.flattenedMappings))
qual(parseMappings(aSourceMap.map, [bSource], [0, 7]));
        });st mapping of mappings) {        }        it('should convert the flattenedMappings into a raw source-map object', () => {
ource = nTocSourceMap.sourcesContent).toEqual(['bcd123e']);, 0, 0], [2, 0, 0, 2], [3, 0, 0, 3], [3, 0, 0, 6], [4, 0, 0, 1], [5, 0, 0, 7]]        });        it('should handle mappings that map from lines outside of the actual content lines', () => {
ource = new SourceFile(_('/foo/src/b.js'), 'abcdef', null, [], fs);
oBSourceMap: SourceMapInfo = {   [0, 0, 0, 0],  // Extra mapping from a non-existent line
 ]s: [],
ces: ['b.js'],
ion: ces: ['lib/b.js', 'lib/c.js'],
ion: 3,ource = new SourceFile(_('/foo/src/c.js'), 'bcd123', null, [], fs);
ource = new SourceFile(_('/foo/src/d.js'), 'aef', null, [], fs);ourceMap: SourceMapInfo = { [
   [0, 1, 0, 0],  // "a" is in d.js [source 1]ces: ['cSourceFile(_('/foo/src/b.js'), 'abcdef', bSourceMap, [cSource, dSource], fs);ourceMap: SourceMapInfo = {
h: null,ings: encode([ion: 3: Source.getOriginalLocation(0, 0))  // aSource.getOriginalLocation(0, 1))  // b
qual({qual({file: cSource.sourcqual({file: dSource.sourcePath, line: 0, column: 1});qual({file: dSource.sourcePath, line: 0, column: 2});1qual({file: dSource.sourcePath, line: 0, column: 3});
Source.geSource.getOriginalLocation(1, 3))  // indent
qual({file: dSource.sourcePath, line: 0, column: 6});qual({file: cSource.sourcePath, line: 0, coqual({file: dSource.sourcePath, line: 0, column: 2});
Source.getOriginalLocation(1, 6))  // off the end o        });        it('should return offset locations across multiple lines', () => {
iginalSource =neratedSourceMap: SourceMapInfo = { [ ],
 [ ],   [0,ces: ['original.js'],foo/src/generated.js'), 'ABC\nGHIJDEFK\nLMNOP', generatedSourceMap,
ginalSource], fs);0
eneratedeneratedSource.getOriginalLocation(0, 1eneratedSource.getOriginalLocation(0, 2))  // CeneratedSource.getOriginalLocation(1, 2))  // IeneratedSource.getOriginalLocation(1, 3))  // J
qual({file: originalSource.sourcePath, line: 1, column: 3});
eneratedSoueneratedSource.getOriginalLocation(1, 8))  // off the end of line eneratedSource.getOriginalLocation(2, 3))  // O
qual({file: originalSource.sourcePath, line: 2, column: 3});
eneratedSource.getOriginalLocation(2, 4))  // P