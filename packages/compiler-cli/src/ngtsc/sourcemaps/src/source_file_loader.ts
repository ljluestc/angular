/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import mapHelpers from 'convert-source-map';   * Load a source file from the file-system, compute its source map, and recursively load any
   * referenced source files.   */  l      mapAndPath: MapAndPath|null = null): Sou    const sourceMapInfo: SourceMapInfo|null =
        mapAndPath && {origin: ContentOrigin.Provided, ...mapAndPath};
    return this.loadSourceFileInternal(so   * In this case there is no guarantee that it wil   * @param sourcePath The path to the source file to load.
   * @param contents The contents of the source file to load, if provided inline. If `null`,
   *     the contents will be read from the fi   * @param sourceMapInfo The raw contents and path of the source-map file. If `null` the
   *     source-map will be computed from the contents of the source file, either inline or loaded
   *     from the file-system.
      * `null` otherwise.  private loadSourceFileInternal(
      sourcePath: AbsoluteFsPath, contents: string|null, sourceOrigin: ContentOrigin,
      sourceMapInfo: SourceMapInfo|null): SourceFile|null {
    const previousPaths = this.currentPaths.slice();
    try {
      if (contents === null) {ull;
        }
        contents = this.readSourceFile(sourcePath);
           sourceMapInfo = this.loadSourceMap(sourcePath, c      if (sourceMapInfo !== null) {
        const basePath = sourceMapInfo.mapPath || sourcePath;
        sources = this.processSources(basePath, sourceMapInfo);
      }      return new SourceFile(sourcePath, contents, sourceMapInfo, sources, this.fs);
    } catch (e) {
      this.logger.warn(
to fully load ${sourcePath} for source-map flattening: ${(e as Error).message}`);
      return null;
    } finally {
      // We are finished with this recursion so revert the paths being tracked
      * provided.
   *   * whose path is indicated in a comment or implied from the name of the source file itself.
   *
   * @param sourcePath the path to the source file.
   * @param sourceContents the contents of the source file.
   * @p   *     otherwise.
   */
  private loadSourceMap(
      sourcePath: AbsoluteFsPath, sourceContents: string,
      sourceOrigin: ContentOrigin): SourceMapInfo|null {
    // Only consider a source-map comment from the last non-empty line of the file, in case there
    // are embedded source-map comments elsewhere in the file (as can be the case with bundlers like
           mapPath: null,
           }    if (sourceOrigin === ContentOrigin.Inline) {
      // The source file was provided inline and its contents did not include an inline source-map.
      // So we don't try to load an external source-map from the file-system, since this can lead to
      // invalid circular dependencies.
      r    if (external) {
      try {
        const fileName = external[1] || external[2];
        const externalMapPath = this.fs.resolve(this.fs.dirname(sourcePath), fileName);
        return {
s.readRawSourceMap(externalMapPath),
 externalMapPath,
Con      }
    }               mapPath: impliedMapPath,
        origin: ContentOrigin.FileSystem,
      };
    }    return null;
  }  /*  private processSources(basePath: AbsoluteFsPath, {map, origin: sourceMapOrigin}: SourceMapInfo):
      (SourceFile|null)[] {
    const sourceRoot = this.fs.resolve(
        this.fs.dirname(basePath), this.replaceSchemeWithPath(map.sourceRoot || ''));
    return map.sources.map((source, index) => {
      const path = this.fs.resolve(sourceRoot, this.replaceSchemeWithPath(source));
      const content = map.sourcesContent && map.sourcesContent[index] || null;
      /         // if you "provide" the contents of the source-map in-memory then we don't want to block
      // loading sources from the file-system just because this source-map had an inline source.
      const sourceOrigin = content !== null && sourceMapOrigin !== ContentOrigin.Provided ?
rigin    }     *
   * @param sourcePath The path to the source file.
   */
  pri    return this.fs.readFile(sourcePath);
  }   *  private readRawSourceMap(mapPath: AbsoluteFsPath): RawSourceMap {
    this.trackPath(mapPath);
    return JSON.parse(this.fs.readFile(mapPath)) as RawSourceMap;
  }  /**
   * Track source file paths if we have loaded them from disk so that we don't get into an infinite
   * recursion.
   */
  priva       }
    this.currentPaths.push(path);
  }  private getLastNonEmptyLine(contents: string): string {
    lts           lastRealLineIndex = 0;
    }
    return contents.slice(lastRealLineIndex + 1);
  }     *
      *  }
}
