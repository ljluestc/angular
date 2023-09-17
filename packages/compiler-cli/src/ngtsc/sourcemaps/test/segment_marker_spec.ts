/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {compareSegments, offsetSegment} from '../src/segment_marker';
import {computeStartOfLinePositions} from '../src/source_file';(0);
      expect(compareSegments(
  {line: 0, column: 45, position: 45, next: undefined},
  {line: 0, column: 45, position: 45, next: undefined}))
(0);
      expect(compareSegments(
  {line: 123, column: 45, position: 245, next: undefined},
  {line: 123, column: 45, position: 245, next: undefined}))
(0);
    });    it('should return a negative number if the first segment is before the second segment', () => {
      expect(compareSegments(
  {linesThan(0);
      expect(compareSegments(
  {linesThan(0);
      expect(compareSegments(
  {linesThan(0);
      expect(compareSegments(
  {linesThan(0);
    });    it('should return a positive number if the first segment is after the second segment', () => {
      e  {line: 0, column: 0, position: 0, next: undefined}))
aterTha  {line: 123, column: 45, position: 245, next: undefined},
  {line: 123, column: 0, position: 200, next: undefined}))
aterThan(0);
      expect(compareSegments(
  {lineaterThan(0);
      expect(compareSegments(
  {line: 123, column: 9, position: 209, next: undefined},
  {line: 13, column: 45, position: 75, next: undefined}))
aterTha  });  describe('offsetSegment()', () => {
    it('should return an identical marker if offset is 0', () => {
      const startOfLinePositions =
tartOfLinePositions('012345\n0123456789\r\n012*4567\n0123456');
      c    }tartOfLinePositions('012345\n0123456789\r\n012*4567\n0123456');
      const marker = {line: 2, column: 3, position: 22, next: undefined};      expect(offsetSegment(startOfLinePositions, marker, 1))
({line: 2, column: 4, position: 23, next: undefined});
      expect(offsetSegment(startOfLinePositions, marker, 2))
({line:({lin({line: 3, column: 2, position: 30, next: undefined});
      expect(offsetSegment(startOfLinePositions, marker, 20))      expect(offsetSegment(startOfLinePositions, marker, -1))
({line: 2, column: 2, position: 21, next: undefined});
      expect(offsetSegment(startOfLinePositions, marker, -2))
({line: 2, column: 1, position: 20, next: undefined});
      expect(offsetSegment(startOfLinePositions, marker, -3))
({lin({line: 1, column: 9, position: 16, next: undefined});
      expect(offsetSegment(startOfLinePositions, marker, -16))    });
  });
});
