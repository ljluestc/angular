# Version compatibility

The following tables describe the versions of Node.js, TypeScript, and RxJS that each version of
Angular requires.

## Actively supported versions

This table
covers [Angular versions under active support](guide/releases#actively-supported-versions).

| Angular   | Node.js   | TypeScript     | RxJS      |
| ------------------ | ------------------------------------ | -------------- | ------------------ |
| 16.1.x    | ^16.14.0 \|\| ^18.10.0      | >=4.9.3 <5.2.0 | ^6.5.3 \|\| ^7.4.0 |
| 16.0.x    | ^16.14.0 \|\| ^18.10.0      | >=4.9.3 <5.1.0 | ^6.5.3 \|\| ^7.4.0 |
| 15.1.x \|\| 15.2.x | ^14.20.0 \|\| ^16.13.0 \|\| ^18.10.0 | >=4.8.2 <5.0.0 | ^6.5.3 \|\| ^7.4.0 |
| 15.0.x    | ^14.20.0 \|\| ^16.13.0 \|\| ^18.10.0 | ~4.8.2| ^6.5.3 \|\| ^7.4.0 |
| 14.2.x \|\| 14.3.x | ^14.15.0 \|\| ^16.10.0      | >=4.6.2 <4.9.0 | ^6.5.3 \|\| ^7.4.0 |
| 14.0.x \|\| 14.1.x | ^14.15.0 \|\| ^16.10.0      | >=4.6.2 <4.8.0 | ^6.5.3 \|\| ^7.4.0 |

## Unsupported Angular versions

This table covers Angular versions that are no longer under long-term support (LTS). This
information was correct when each version went out of LTS and is provided without any further
guarantees. It is listed here for historical reference.

| Angular   | Node.js   | TypeScript     | RxJS      |
| ------------------ | ------------------------------------ | -------------- | ------------------ |
| 13.3.x    | ^12.20.0 \|\| ^14.15.0 \|\| ^16.10.0 | >=4.4.3 <4.7.0 | ^6.5.3 \|\| ^7.4.0 |
| 13.1.x \|\| 13.2.x | ^12.20.0 \|\| ^14.15.0 \|\| ^16.10.0 | >=4.4.3 <4.6.0 | ^6.5.3 \|\| ^7.4.0 |
| 13.0.x    | ^12.20.0 \|\| ^14.15.0 \|\| ^16.10.0 | ~4.4.3| ^6.5.3 \|\| ^7.4.0 |
| 12.2.x    | ^12.14.0 \|\| ^14.15.0      | >=4.2.3 <4.4.0 | ^6.5.3 \|\| ^7.0.0 |
| 12.1.x    | ^12.14.0 \|\| ^14.15.0      | >=4.2.3 <4.4.0 | ^6.5.3    |
| 12.0.x    | ^12.14.0 \|\| ^14.15.0      | ~4.2.3| ^6.5.3    |
| 11.2.x    | ^10.13.0 \|\| ^12.11.0      | >=4.0.0 <4.2.0 | ^6.5.3    |
| 11.1.x    | ^10.13.0 \|\| ^12.11.0      | >=4.0.0 <4.2.0 | ^6.5.3    |
| 11.0.x    | ^10.13.0 \|\| ^12.11.0      | ~4.0.0| ^6.5.3    |
| 10.2.x    | ^10.13.0 \|\| ^12.11.0      | >=3.9.0 <4.1.0 | ^6.5.3    |
| 10.1.x    | ^10.13.0 \|\| ^12.11.0      | >=3.9.0 <4.1.0 | ^6.5.3    |
| 10.0.x    | ^10.13.0 \|\| ^12.11.0      | ~3.9.0| ^6.5.3    |
| 9.1.x     | ^10.13.0 \|\| ^12.11.0      | >=3.6.0 <3.9.0 | ^6.5.3    |
| 9.0.x     | ^10.13.0 \|\| ^12.11.0      | >=3.6.0 <3.8.0 | ^6.5.3    |

### Before v9

Until Angular v9, Angular and Angular CLI versions were not synced.

| Angular   | Angular CLI        | Node.js    | TypeScript     | RxJS   |
| --------------------------- | --------------------------- | ------------------- | -------------- | ------ |
| 8.2.x     | 8.2.x \|\| 8.3.x   | ^10.9.0    | >=3.4.2 <3.6.0 | ^6.4.0 |
| 8.0.x \|\| 8.1.x   | 8.0.x \|\| 8.1.x   | ^10.9.0    | ~3.4.2| ^6.4.0 |
| 7.2.x     | 7.2.x \|\| 7.3.x   | ^8.9.0 \|\| ^10.9.0 | >=3.1.3 <3.3.0 | ^6.0.0 |
| 7.0.x \|\| 7.1.x   | 7.0.x \|\| 7.1.x   | ^8.9.0 \|\| ^10.9.0 | ~3.1.3| ^6.0.0 |
| 6.1.x     | 6.1.x \|\| 6.2.x   | ^8.9.0     | >=2.7.2 <3.0.0 | ^6.0.0 |
| 6.0.x     | 6.0.x     | ^8.9.0     | ~2.7.2| ^6.0.0 |
| 5.2.x     | 1.6.x \|\| 1.7.x   | ^6.9.0 \|\| ^8.9.0  | >=2.4.2 <2.7.0 | ^5.5.0 |
| 5.0.x \|\| 5.1.x   | 1.5.x     | ^6.9.0 \|\| ^8.9.0  | ~2.4.2| ^5.5.0 |
| 4.2.x \|\| 4.3.x \|\| 4.4.x | 1.4.x     | ^6.9.0 \|\| ^8.9.0  | >=2.1.6 <2.5.0 | ^5.0.1 |
| 4.2.x \|\| 4.3.x \|\| 4.4.x | 1.3.x     | ^6.9.0     | >=2.1.6 <2.5.0 | ^5.0.1 |
| 4.0.x \|\| 4.1.x   | 1.0.x \|\| 1.1.x \|\| 1.2.x | ^6.9.0     | >=2.1.6 <2.4.0 | ^5.0.1 |
| 2.x       | -| ^6.9.0     | >=1.8.0 <2.2.0 | ^5.0.1 |
