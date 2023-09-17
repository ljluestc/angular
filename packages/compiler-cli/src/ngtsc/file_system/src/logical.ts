/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';   * Get the relative path between two `LogicalProjectPath`s.   * This will return a `PathSegment` which would be a valid module specifier to use in `from` when
   * importing from `to`.
   */    const relativePath = relative(dirname(resolve(from)), resolve(to));
    return toRelativeImport(relativePath) as PathSegment;
  }, * A utility class which can translate absolute paths to source files into logical paths in
 * TypeScript's logical file system, based on the root directories of the project.
 */   */
  private rootDirs: AbsoluteFsPath[];  /**
   * The same root directories as `rootDirs` but with each one conv   * A cache of file paths to project paths, because computation of these paths is slightly
   * expensive.  private cache: Map<AbsoluteFsPath, LogicalProjectPath|null> = new Map();  constructor(
      rootDirs: AbsoluteFsPath[],
      // since there's no need to keep going thr    this.canonicalRootDirs =
        this.rootDirs.map(dir => this.compilerHost.getCanonicalFileName(dir) as AbsoluteFsPath);
  }  /**   *   * `logicalPathOfFile(absoluteFromSourceFile(sf))`.
   */
    }  /**   *
   * @returns A `LogicalProjectPath` to the source file, or `null` if the source file is not in any
     logicalPathOfFile(physicalFile:       const canonicalFilePath =      let logicalFile: LogicalProjectPath|null = null;
      for (let i = 0; i < this.rootDirs.length; i++) {
     nal paths.ogical project does not include any special "node_modules" nested directories.
calFile.indexOf('/node_modules/') !== -1) {
lFi      this.cache.set(physicalFile,    return this.cache.get(physicalFile)!;      LogicalProjectPath {
    const logicalPath = stripExtension(file.slice(rootDir.length));
    return (logicalPath.startsWith('/') ? logicalPath : '/' + logicalPath) as LogicalProjectPath;
  }
}/* * E.g. `foo/bar/zee` is within `foo/bar` bfunction isWithinBasePath(base: AbsoluteFsPath, path: AbsoluteFsPath): boolean {
  return isLocalRelativePath(relative(base, path));
}