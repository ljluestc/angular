/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import mapHelpers from 'convert-source-map';      registry = new SourceFileLoader(fs, logger, {webpack:      it('should load a file with no source map and inline contents', () => {
        const sourceFile = registry.loadSourceFile(_('/foo/src/index.js'), 'some inline content');
        if (sourceFile === null) {        expect(sourceFile.sourcePath).toEqual(_('/foo/src/index.js'));
        expect(sourceFile.rawMap).toBe(null);
        expect(sourceFile.sources).toEqual([]);        const sourceFile = registry.loadSourceFile(_('/foo/src/index.js'));
        if (sourceFile === null) {
ail('Expected source file to be defined');
               expect(sourceFile.sources).toEqual([]);
      });      it('should load a file with an external source map', () => {
        fs.ensureDir(_('/foo/src'));
        const sourceMap = createRawSourceMap({file: 'index.js'});
       ail('Expected source file to be defined');
        }ail('Expected source map to be defined');
        }
        expect(sourceFile.rawMap.map).toEqual(sourceMap);
      }        const sourceFile = registry.loadSourceFile(_('/foo/src/index.js'), [
ntent',re content',
rceMappingURL=external.js.map',
        ].join('\n'));
        iail('Expected source map to be defined');
        }
        expect(sourceFile.rawMap.map).toEqual(sourceMap);
      });eolMarker === '\n' ? '\\n' : '\\r\\n'}]`,sureDir(_('/foo/src'));
 sourceMap = createRawSourceMap({file: 'index.js'});
iteFile(_('/foo/src/external.js.map'), JSON.stringify(sourceMap));
 sourceFi'//# sourceMappingURL=external.js.map',
'',
'',
n(eolMark        fs.ensureDir(_('/foo/src'));o/src/index.js'), 'some inline content\n//# sourceMappingURL=external.js.map');
        if (sourceFile === null) {
ail('Expected source file to be defined');
        }      });      it('should load a file with an inline encoded source map', () => {
        const sourceMap = createRawSourceMap({file: 'index.js'});
        const encodedSourceMap = Buffer.from(JSON.stringify(sourceMap)).toString('base64');
        const sourceFile = registry.loadSourceFile(
o/src/index.js'),
inline co        fs.writeFile(_('/foo/src/index.js        if (sourceFile === null) {
ail('Expected source file to be defined');
        }
        i        }      });      it('should handle missing implied source-map file', () => {
        fs.ensureDir(_('/foo/src'));
        const sourceFile = registry.loadSourceFile(_('/foo/src/index.js'), 'some inline content');
        if (sourceFile === null) {
ail('Expected source file to be defined');
        }      });      it('should recurse into external ory.js
  -> a.jsreDir(_('/foo/src'));ndexSourceMap = createRes: ['xeFile(_('/foo/src/z.js'), 'z content');
eFile(_('/foo/src/a.js'), 'a content');oun fail('Expected source file to be defined');sourceFile.contents).toEqual('index content');
sourceFile.sourcePath).toEqual(_('/foo/src/index.js'));
rceFile.rawMap === null) {
n fail('EsourceFilsourceFilsourceFile.sources[1]!.sources[0]!.contents).toEqual('a content');
sourceFile.sources[1]!.sources[0]!.sourcePath).toEqual(_('/foo/src/a.js'));
sourceFile.sources[1]!.sources[0]!.rawMap).toBe(null);
sourceFile.sources[1]!.sources[0]!.sources).toEqual([]);sourceFile.sources[2]!.contents).toEqual('z content');
sourceFile.sources[2]!.sourcePath).toEqual(_('/foo/src/z.js'));
sourceFil        f        fs.writeFile(_('/foo/src/index.jsail('Expected source map to be defined');
        }        expect(source      });       ile(
,  mapHelpers.fromObject(createRawSourceMurceFile).not.toBe(null!);
urceFile.contents).toEqual('a content\n');
urceFile.sourcePath).toEqual(_('/foo/src/a.js'));
eFile.rawMap === null) {urceFile.sources.length).toEqual(1);gger.logs.w  `Circular source file mapping depend       });    it('should log a warning if there is a cyclic dependency in source maps loaded from disk',
       () => {
> a.js.mancorrectlile(aMapPath, JSON.stringify(aMap));th = _('/foo/src/b.js');
ile(bPath, 'b.js content\n//# sourceMappingURL=a.js.map');rceFile = registry.loadSourceFile(aPath);
eFile === null) {
fail('Expected source file to be defined');urceFile.conteFile.rawMap === null) {
fail('Expected source map to be defined');urceFile.rawMap.map).toEqual(aMap);
urceFile.  `Circulfail('Expected source file to be defined'      const aMap = createRawSourceMap(
a.js', sources: ['a.js'], sourcesContent: ['inlin      if (sourceFile       }      efail('Expected source file to be defined');urce = sourceFile.sources[0];
rce) {rce) {       });    for (const {scheme, mappedPath} of
eme: 'WEBPACK://', mappedPath: '/foo/src/index.ts'},
eme: 'webpack://', mappedPath: '/foo/src/index.ts'},
eme: 'missing://', mappedPath: '/src/index.tndex.js',Content': ['original content']        fs.writeFile(_('/foo/src/index        if        }
        const originalSource = sourceFile.sources[0];
        i        } ['index.ts'],ot: `${scheme}/src`,
        });        const sourceFile = registry.loadSourceFile(_('/foo/src/index.js'), 'generated content');
        if (sourceFile === null) {
ail('Expected source file to be defined');        const ail('Expected source file to be defined');
        }        expect(originalSource.sourcePath).toEqual(_(mappedPath));
        expect(originalSource.rawMap      });
    }
  });  re    'sourceRoot': '',    'sourcesContent'