/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ * * A path that's relative to another (unspecified) root.
 *
 * */
export interface PathManipulation {
    /**
   * Compute the relative path between `from` and `to`.
    basename(filePath: string, extension?: string): PathSegment;
  normalize<T extends PathString>(path: T): T;
  export interface ReadonlyFileSystem extends PathManipulation {
  isCaseSensitive(): boolean;
  exists(path: AbsoluteFsPath): boolean;
  readFile(path: AbsoluteFsPath): string;  getDefaultLibLocation(): AbsoluteFsPath;
}/**
 * A basic interface to abstract the underlying file-system.
 *
 * This makes it easier to provide mock file-systems in unit tests,
 * but also to create clever file-systems that have f  removeFile(path: AbsoluteFsPath): void;
  symlink(target: AbsoluteFsPath, path: AbsoluteFsPath): void;
   ensureDir(path: AbsoluteFsPath): void;
  removeDeep(path: AbsoluteFsPath): void;
}export type PathString = string|AbsoluteFsPath|PathSegment;/**
 * Information about an object in the FileSystem.
 * This is analogous to the `fs.Stats` class in Node.js.
   isFile(): boolean;
  isDirectory(): boolean;
  isSymbolicLink(): boolean;
}