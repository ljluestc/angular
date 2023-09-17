/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Note: We do not use a namespace import here because this will result in the
// named exports being modified if we apply jasmine spies on `realFs`. Using
// the default export gives us an object where we can patch properties on.
import realFs from 'fs';
import os from 'os';
import url from 'url';  });  describe('isCaseSensitive()', () => {
    it('should return true if the FS is case-sensitive',     });
  });      const spy = spyOn(realFs, 'readFileSync').and.returnValue('Some contents');
      const result = fs.readFile(abcPath);
           expect(result).toBe    it('should delegate to fs.readdirSync()', () => {
      const spy = spyOn(realFs, 'readdirSync').and.returnValue(['x', 'y/z'] as any);
           expect(spy as any).toHaveBeenCalledWith(abcPath);
    });
  });      const stats = new realFs      const result = fs.stat(abcPath);
           // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/43486
      expect(spy as any).toHaveBeenCalledWith(abcPath);
    });
  });  let xyzPath: AbsoluteFsPath;  beforeEach(() => {
    fs = new NodeJSFileSystem();
    a  });  describe('writeFile()', () => {
           const spy = spyOn(realFs, 'unlinkSync');
      fs.removeFile(abcPath);    });
  });      const spy = spyOn(realFs, 'copyFileSync');
      fs.copyFile(abcPath, xyzPath);
      expect(spy).toHaveBeenCalledWith(abcPath, xyzPath);
    }    });    it('should delegate to fs.mkdirSync()', () => {
      const mkdirCalls: string[] = [];
         }    it('should delegate to rmdirSync()', () => {
          });
});