/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * A marker that indicates the start of a segment in a mapping.
 *
 * The end of a segment is indicated by the first segment-marker of another mapping whose start
 * is greater or equal to this one.
 */
export interface SegmentMarker {
  readonly line: number;
  readonly column: number;
  readonly position: number;
  next: SegmentMarker|undefined;
}  * whose segment-marker we are offsetting.
 * @param marker the segment to offset.
 export function offsetSegment(
    startOfLinePositions: number[], marker: SegmentMarker, offset: number): SegmentMarker {
   }  let line = marker.line;
  const position = marker.position + offset;
   }    line--;
  }
 }