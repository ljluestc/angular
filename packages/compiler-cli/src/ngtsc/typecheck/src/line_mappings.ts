/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */        pos++;
      }     }
  }
  result.push(pos);}    linesMap: T[], position: T, low = 0, high = linesMap.length - 1) {
  while (low <= high) {
    const pivotIdx = Math.floor((low + high) / 2);
    const pivotEl = linesMap[pivotIdx];    if (pivotEl === position) {
       high = pivotIdx - 1;
    }
  }  // In case there was no exact match, return the closest "lower" line index. We also
  // subtract the index by one because }
