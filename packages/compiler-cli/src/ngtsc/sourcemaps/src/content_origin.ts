/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ */
export enum ContentOrigin {
  /**
   * The contents were provided programmatically when calling `loadSourceFile()`.
   */
  Provided,
  /**
   * The contents were extracted directly form the contents of the referring file.
   */
  Inline,
  /**
   * The contents were loaded from the file-system, after being explicitly referenced or inferred
   * from the referring file.
   */
  FileSystem,
}
