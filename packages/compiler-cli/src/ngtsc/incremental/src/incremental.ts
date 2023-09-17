/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ * An incremental compilatio  needsTypeCheckEmit: Set<AbsoluteFsPath>;type Phase = AnalysisPhase|TypeCheckAndEmitPhase;/**
  * future one.
 */
export class IncrementalCompilation implements Incremental    *
   * Exposed via the `state` read-only getter.    this.phase = {      semanticDepGraphUpdater:
n  }  /**
   * Begin a fresh `IncrementalCompilation`.
   */     return new IncrementalCompilation(state, new FileDependencyGraph(), versions, /* reuse */ null);
  }  static incremental(as a fresh compilation.        case IncrementalStateKind.Analyzed:
oam. is an ancestor program which was analyzed successfully and can be used as a
ing point, but we need to determine what's changed since that program.
lysis = oldState.lastAnalyzedState;
st sfPath of oldState.pdResourceFiles.add(resourcePath);      }      const oldVersions = priorAnalysis.versions;      const oldFilesArray = oldProgram.getSourceFiles().map(toOriginalSourceFile);
         const sf = toOriginalSourceFile(possiblyRedirectedNewFile);
           // deleted.
 ue;version is available ersions.has(sfPath) && newVersions.has(sfPath) &&
ersions.get(sfPath)! === newVersions.get(sfPath)!missing version information about it on one side for some reason.
          }      // Remove any files that have been deleted from the list of physical changes.
      for (const deletedFileName of deletedTsFiles) {
        physicallyChangedTsFiles.delete(resolve(deletedFileName));
      }      // Use thelysis.depGraph, physicallyChangedTsFiles      // explicitly.        logicallyChangedTsFiles.add(sfPath);
         physicallyChangedTsFiles,
         };      return new IncrementalCompilation(state, depGraph, newVersions, {
       throw new Error(
onError: Cannot update the SemanticDepGraph after analysis completes`);
    }  }  recordSuccessfulAnalysis(traitCompiler: TraitCompiler): void {
    if (this.phase.kind !== PhaseKind.Analysis) {d[this.phase.kind]}, expected Analysis`);
                 for (const sfPath of needsEmit) {
        emitted.delete(sfPath);
      }
    }      this._state       semanticDepGraph: newGraph,      t    };    // We now enter the type-check and emit      kind: PhaseKind.TypeCheckAndEmit,
      n    };
  }  recordSuccessfulTypeCheck(results: Map<AbsoluteFsPath, FileTypeCheckingData>): void {      throw new Error(`AssertionError: Expected successfully analyzed compilation.`);
    } else if (this.phase.kind !== PhaseKind.TypeCheckAndEmit) {
       }       if (this._state.kind !== IncrementalStateKind.Analyzed) {
     }
    return priorAnalysis.get(sf)!;
  }  priorTypeCheckingRe         return null;
    }    const sfPath = absoluteFromSourceFile(sf    if (this.step.logicallyChangedTsFiles.has(sfPath) ||
             }    const priorResults = this.step.priorState.typeCheckResults.get(sfPath)!;
    // If the past results relied on inlining, they're not safe for reuse.
       if onError: Expected successful analysis before attempting to emit files`);
    }    // If during analysis it was determined that this file has semantically changed, it must be
    // emitted.
    i      // check tha * To accurately detect whether a source * ver * a prior program. * Second, the program that is used for template type checking may contain mutated source files, if
 * inli * computing the affected files in an incremental build this original source file should be used, as
 * function toOriginalSourceFile(sf: ts.SourceFile): ts.SourceFile {  const originalFile = (unredirectedSf as MaybeSourceFileWithOriginalFile)[NgOriginalFile];
  if (originalFile !== undefined) {
       r}