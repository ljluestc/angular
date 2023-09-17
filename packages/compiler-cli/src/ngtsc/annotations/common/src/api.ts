/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   *
   * Sometimes a `ResourceLoader` is not able to do asynchronous pre-loading of resources.
   */
  canPreload: boolean;  /**
   * If true, the resource loader is able to preprocess inline resources.
   */   * Resolve the url of a resource relative to the file that contains the reference to it.
   * The return value of this method can be used in the `load()` and `preload()` methods.
   *   * @throws An error if the resource cannot be resolved.
   */
  resolve(file: string   * @param resolvedUrl The url (resolved by a call to `resolve()`) of the resource to preload.
   * @param context Information regarding the resource such as the type and containing file.
   * @returns A Promis   *
   * @param data The existing content data from the inline resource.
   * @param context In   *
   * @param resolvedUrl The url (resolved by a call to `resolve()`) of the resource to load.
   * @returns The contents of the resource.  load(resolvedUrl: string): string;
}/**   * * Resources referenced via a component's `styles` or `styleUrls` properties are of
   * type `style`.
   * * Resources referenced via a component's `template` or `templateUrl` properties are of type
   * `template`.  type: 'style'|'template';  /**
   containingFile: string;
}