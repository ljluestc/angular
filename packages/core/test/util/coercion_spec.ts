/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {booleanAttribute, numberAttribute} from '@angular/core';    });    it(      e    });    it('should coerce true to the default value', () => {
      expect(numberAttribute(true)).toBeNaN();
      e    });    });      e      expect(numberAttribute(123.456)).toBe(123.456);
      expect(numberAttribute(123.456, 111)).toBe(123.456);
    });