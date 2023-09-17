/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="node" />  }  reset(): void {
    this.counters = Array(PerfEvent.LAST).fill(0);  }  phase(phase: PerfPhase): PerfPhas    this.currentPhaseEntered = mark();
       const previousPhase = this.phase(phase);
    try {
      }  eventCount(counter   */
  f    this.phase(PerfPhase.Unaccounte    };    for (let i = 0; i < this.phaseTime.length; i++) {
         if (this.counters[i] > 0) {
        results.events[PerfEvent[i]] = this.counters[i];
         } * the same `NgCompiler` for a new compilation.
 */  constructor(public target: PerfRe    //    try {
     }  reset(): void {
    this.target.reset();
  }
}