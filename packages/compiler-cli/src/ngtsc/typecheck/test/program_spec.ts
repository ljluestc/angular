/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  return {    originalFile:   host:  mainPath: AbsoluteFsPath,
  typecheckPath: AbsoluteFsPath,  const      name: mainPath,      name: typecheckPath,     const typecheckSf = getSourceFileOrError(program, typecheckPath);  // To ensure this test is validating the correct behavior, the initial conditions of the
  // input program must be such that:  // 1) /main.ts was previously tagged with a reference to its ngtypecheck shim.
  // 2) /main.ngtypec  sfExtensionData(typecheckSf).fileShim = {
    ext  };  return {program, host, options, mainPath, typecheckPath};
}