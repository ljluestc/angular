/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {AbsoluteFsPath} from '../../file_system';
import {ContentOrigin} from './content_origin';  sourcesContent?: (string|null)[];
  mappings: string;
}/**
 * The path and content of a source-map.
 */
export interface MapAndPath {
  /** The path to the source map if it was external or `null` if it was inline. */
  mapPath: AbsoluteFsPath|null;
  /** The raw source map itself. */
  map: RawSourceMap;
}/**
 * Information about a loaded source-map.
   /** From where the content for this source-map came. */
  origin: ContentOrigin;
}