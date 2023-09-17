#!/usr/bin/env nodeexe  process.stdout.write(`[${progress}] Running: ${target}`);
  const commandResult = exec(`yarn bazel run ${target}`, {silent: true});
  pconsole.groupEnd();
  } else {
con