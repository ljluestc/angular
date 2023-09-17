/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */     ignoreForEmit: Set<ts.S */
export class NgTscPlugin implements TscPlugin {    if (this._compiler === null) {
     setFileSystem(new NodeJSFileSystem());
  }       options: ts.CompilerOptions): Plug  } {
    // TODO(alxhub): we provide a `PerfRecorder` to the compiler, but because we're not driving the
    // compilation, the information captured within it is incomplete, and may    }
     let ticket: CompilationTicket;    const modifiedResourceFiles = new Set<AbsoluteFsPath>();
        }    if (oldProgram === undefined ||      ignoreForDiagnostics: this._compiler.ignoreForDiagnostics,
      ignoreForEmit: this._compiler.ignoreForEmit,
    };  }  getNextProgram(): ts.Program {
   }