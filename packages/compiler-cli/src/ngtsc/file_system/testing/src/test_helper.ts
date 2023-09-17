/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="jasmine"/>
import ts from 'typescript';    runInFileSystem(FS_NATIVE, callback, false)      afterAll(() => {
        throw new Error(`runInFileSystem limited to ${os}, cannot pass`);
      });  const fs = createMockFileSystem(os, cwd);
  setFileSystem(fs);
  monkeyPatchTypeScript(fs);
       return new MockFileSystemNative(cwd);      throw new Error('FileSystem not supported');}function monkeyPatchTypeScript(fs: MockFileSyst    const absPath = fs.resolve(path);
    return fs.exists(absPath) && fs.stat(absPath).isFile();
  };
  ts.sys.getCurrentDirectory = () => fs.pwd();
     for (const entry of entries) {
      if (entry == '.' || entry === '..') {
        continue;       if (stat.isDirectory()) {      } else if (stat.isFile()) {
        files.push(absPath);
      }
    }
    const tsMatchFiles: (
       includes?: ReadonlyArray<string>, depth?: number): string[] {
    return tsMatchFiles(
        path, extensions, excludes, includes, fs.isCaseSensitive(), fs.pwd(), depth,
        getFileSystemEntries, realPath, directoryExists);}  readonly directories: ReadonlyArray<string>;