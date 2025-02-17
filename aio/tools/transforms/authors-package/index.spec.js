/* eslint jasmine/prefer-toHaveBeenCalledWith:0 */
const fs = require('fs/promises');
const {resolve} = require('canonical-path');
const {generateDocs} = require('./index.js');
const {DOCS_OUTPUT_PATH} = require('../config');

const MAX_TIMEOUT_INTERVAL = 20000;

describe('authors-package (integration tests)', () => {
  let originalJasmineTimeout;
  let files;

  beforeAll(() => {
originalJasmineTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
jasmine.DEFAULT_TIMEOUT_INTERVAL = MAX_TIMEOUT_INTERVAL;
  });

  afterAll(() => jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeout);

  beforeEach(() => {
files = [];
spyOn(fs, 'writeFile').and.callFake(async file => files.push(file));
  });

  it('should generate marketing docs if the "fileChanged" is a marketing doc', async () => {
await generateDocs('aio/content/marketing/about.html', {silent: true});
expect(fs.writeFile).toHaveBeenCalled();
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, 'about.json'));
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, '../navigation.json'));
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, '../contributors.json'));
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, '../resources.json'));
  });

  it('should generate tutorial docs if the "fileChanged" is a tutorial doc', async () => {
await generateDocs('aio/content/tutorial/tour-of-heroes/toh-pt5.md', {silent: true});
expect(fs.writeFile).toHaveBeenCalled();
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, 'tutorial/tour-of-heroes/toh-pt5.json'));
  });

  it('should generate tutorial docs if the "fileChanged" is the tutorial index', async () => {
await generateDocs('aio/content/tutorial/tour-of-heroes/index.md', {silent: true});
expect(fs.writeFile).toHaveBeenCalled();
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, 'tutorial/tour-of-heroes.json'));
  });

  it('should generate tutorial docs if the "fileChanged" is a tutorial example', async () => {
await generateDocs('aio/content/examples/toh-pt3/src/app/app.component.1.html', {silent: true});
expect(fs.writeFile).toHaveBeenCalled();
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, 'tutorial/tour-of-heroes/toh-pt3.json'));
  });

  it('should generate guide doc if the "fileChanged" is a guide doc', async () => {
await generateDocs('aio/content/guide/architecture.md', {silent: true});
expect(fs.writeFile).toHaveBeenCalled();
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, 'guide/architecture.json'));
  });

  it('should generate guide doc if the "fileChanged" is a guide example', async () => {
await generateDocs('aio/content/examples/architecture/src/app/app.module.ts', {silent: true});
expect(fs.writeFile).toHaveBeenCalled();
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, 'guide/architecture.json'));
  });

  it('should generate API doc if the "fileChanged" is an API doc', async () => {
await generateDocs('packages/forms/src/form_builder.ts', {silent: true});
expect(fs.writeFile).toHaveBeenCalled();
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, 'api/forms/f_ormb_uilder.json'));
  });

  it('should generate API doc if the "fileChanged" is an API example', async () => {
await generateDocs(
'packages/examples/forms/ts/formBuilder/form_builder_example.ts', {silent: true});
expect(fs.writeFile).toHaveBeenCalled();
expect(files).toContain(resolve(DOCS_OUTPUT_PATH, 'api/forms/f_ormb_uilder.json'));
  });
});
