/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {decode, encode, SourceMapMappings, SourceMapSegment} from '@jridgewell/sourcemap-codec';
import mapHelpers from 'convert-source-map';    // many (if not all!) mappings.S      const mappingArray: SourceMapSegment = [
        mapping.generatedSegment.column,        mapping.originalSegment.line,      ];
      if (mapping.name !== undefined) {
         while (line >= mappings.length) {
       // Add this mapping to the line
      mappings[line].push(mappingArray);      version: 3,
      file: this.fs.relative(sourcePathDir, this.sourcePath),
      sources: sources.keys,
      names: names.values,
      *
   * First we search for a mapping whose generated segment is at or directly before the given
   * location. Then we compute the offset between the given location and the matching generated
   * segment. Finally we apply this offset to the original source segment to get the desired
   * original location.    if (this.flattenedMappings.length === 0) {
      return null;
    }    let position: number;
    if (line < this.startOfLinePositions.length) {
       }
    const {originalSegment, originalSource, generatedSegment} =
        this.flattenedMappings[mappingIndex];
    const offset = locationSegment.position - generatedSegment.position;
    const offsetOriginalSegment =
           line: offsetOriginalSegment.line,
      column: offsetOriginalSegment.column,
    };
  }     * source files with no transitive source maps.
   */
  p        continue;
      }      // The `incomingStart` and `incomingEnd` are the `SegmentMarker`s in `B` that represent the
      // section of `B` source file that is being mapped to by the current `aToBmapping`.
      //
      // For example, consider the mappings from A to B:
           //   b       b
      //   f -  /- c       [4, 2]
      //   g  \ /  d
           // For mapping [0,0] the incoming start and end are 0 and 2 (i.e. the range a, b, c)
      // For mapping [4,2] the incoming start and end are 2 and 5 (i.e. the range c, d, e, f)
      //
      const incomingStart = aToBmapping.originalSegment;      //     a
      //     b ----- b       [1, 0]
      /      //  |  e ----- 1       [4, 3]
      //   - f  \    2
      //
      //   [4, 6]
           let outgoingStartIndex =
MappingIndexBefore(bSource.flattenedMappings, incomingStart, false, 0);
      if (outgoingStartIndex < 0) {
     rce.flattenedMappings, incomingEnd, true, outgoingStartIndex) :
flattenedMappings.length - 1;      for (let bToCmappingIndex = outgoingStartIndex; bToCmappingIndex <= outgoingEndIndex;
pingIndex++) {
        const bToCmapping: Mapping = bSource.flattenedMappings[bToCmappingIndex];
         } * exclusively earlier than the given `marker`.
 * If not exclusive then we can return the highest mappings with an equivalent segment-marker to the
 * given `marker`.
 * @par */
export function findLastMappingIndexBefore(
    mappings: Mapping[], marker: SegmentMarker, exclusive: boolean, lowerIndex: number): number {
  let upperIndex = mappings.length - 1;
  con  while (lowerIndex <= upperIndex) {
    const index = (upperIndex + lowerIndex) >> 1;
    if (compareSegments(mappings[index].generatedSegment, marker) <= test) {
         }
  }}/**
 * A Mapping consists of two segment markers: one in the generated source and one in the original
 * source, which indicate the start of each segment. The end of a segment is indicated by the first
 * segment marker of another mapping whose st * It may also include a name associated with the segment being mapped.
 */
expexport function mergeMappings(generatedSource: SourceFile, ab: Mapping, bc: Mapping): Mapping {
  const name = bc.name || ab.name;  // We need to modify the segment-markers of the new mapping to take into account the shifts that
  // occur due to the combination of the two mappings.
  // Fo  // ```
  // A: 1 2 b c d
  //        |        A->B [2,0]
  //        |
  // B:     b c d    A->C [2,1]  //        |        B->C [0,1]  // ```  // * More complicated case where diffs of segment-markers is needed:
  /  // A: b 1 2 c d
  //     \
  //      |[0,1*]    [0,1*]
  //      |    |
  /    // C: a b c d e
  // ```   // segment-marker of B->C (0*): `1 - 0 = +1`.
  // Since it is positive we must increment the "original segment-marker" with `1` to give [0,1].
  //
  // `[3,2]` mapping from A->C:  // segment-marker" of B->C (4*): `1 - 4 = -3`.
  // Since it is negative we must increment the "generated segment-marker" with `3` to give [3,2].  const diff = compareSegments(bc.generatedSegment, ab.originalSegment);
  if gment(generatedSource.startOfLinePositions, ab.generatedSegment, diff),      originalSegment: bc.originalSegment,
    };
  } else {
    return {      generatedSegment: ab.generatedSegment,
      originalSource: bc.originalSource,
      o}/**
 * Parse the `rawMappings` into an array of parsed mappings, which reference source-files provided
 * in the `sources` parameter.
 */
export function parseMappings(    generatedSourceStartOfLinePositions: number[]): Ma    retu  if (rawMappings === null) {
     for (let generatedLine = 0; generatedLine < rawMappings.length; generatedLine++) {
    const generatedLineMappings = rawMappings[generatedLine];
    for (const rawMapping of generatedLineMappings) {
      if (rawMapping.length >= 4) {
   riginal source is missing so ignore this mapping
;
        }
        const generatedColumn         const generatedSegment: SegmentMarker = {
neratedLine,
generatedColumn,
: generatedSourceStartOfLinePositions[generat        };
        const originalSegment: SegmentMarker = {: originalSource.startOfLinePositions[line] + colu        };
        mappings.push({name, generatedSegment, originalSegment, originalSource});
   }
  return mappings;
}/**
 * Extract the segment markers from the original source files in each mapping of an array of
 * `mappings`.
 *
 * @param mappings The mappings wh * segment-markers sorted by their order in their source file.
 */
export      }
    const segments = originalSegments.get(originalSource)!;
    segments.push(mapping.originalSegment);
  }
  originalSegments.forEach(segment}/**
 * Update the original segments of each of the given `mappings` to include a link to the next
 * segmeexport function ensureOriginalSegmentLinks(mappings: Mapping[]): void {
  c    }
  });
}export function computeStartOfLinePositions(str: string) {
  // The `1` is to indicate a newline character between the lines.
  // Note that in the actual contents there could be more than one character that indicates a
  // newline
  // - e.g. \r\n - but that is not important here since segment-markers are in line/column pairs and
  // so differences in length due to extra `\r` characters do not affect the algorithms.
  const NEWLINE_MARKER_OFFSET = 1;
  const lineLengths = compute   }
  return startPositions;
}function computeLineLengths(str: string): number[] {
  return (str.split(/\n/)).map(s => s.length) * A collection of mappings between `keys` and `values` stored in the order in which the keys are
 * first seen. * The difference between this and a standard `Map` is that when you add a key-value pair the index
 * of the `key` is returned.
   private map = new Map<K, number>();  /**
   * An array of keys added to this map.
    */
  readonly keys: K[] = [];  /**
   * An array of values added to this map.
   *
   * This array is guaranteed to b   */
  readonly values: V[] = [];  /**
   * Associate th   * If the `key` already exists then the `value` is not set and the index of that `key` is
   * returned; otherwise the `key` and `value` are stored and the index of the new `key` is
    * @param key the key to associated with the `value`.
   * @param value the value to associated with the `key`.
   * @returns the index of the `key` in the `keys` array.
   */
  set(key: K, value: V): number {     const index = this.values.push(value) - 1;
    this.keys.push(key);
    this * A collection of `values` stored in the order in which they were added.
 *class IndexedSet<V> {
  private map = new Map<V, number>();  /**
    */
  readonly values: V[] = [];  /**
   * Add the `value` to the `values` array, if it doesn't already exist; returning the index of the
   * `value` in the `values` array.
   *
   * If the `value` already exists then the index of that `value` is returned, otherwise the new
   * `value` is stored and the new index returned.
   *   add(value: V): number {
    if (this.map.has(value)) {
     const index = this.values.push(value) - 1;
    this.map.set(value, index);
 }class Cache<Input, Cached> {
  private map = new Map<Input, Cached>();
  constructor(private computeFn: (input: Input) => Cached) {}    if (!this.map.has(input)) {
      this.map.set(input, this.computeFn(input));
   }