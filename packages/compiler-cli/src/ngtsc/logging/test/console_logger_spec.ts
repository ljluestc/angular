/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {ConsoleLogger, DEBUG, ERROR, WARN} from '../src/console_logger';
import {LogLevel} from '../src/logger';    spyOn(console, 'warn');    const logger = new Con    expect(console.error).toHaveBeenCalledWith(ERROR, 'error', 'test');
  });    expect(new ConsoleLogger(LogLevel.info).level).toEqual(LogLeve    expect(new ConsoleLogger(LogLevel.error).level).toEqual(LogLevel.error);
  });