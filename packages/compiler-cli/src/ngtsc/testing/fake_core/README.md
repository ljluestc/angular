`fake_core` is a library designed to expose some of the same symbols as `@angular/core`, without
requiring compilation of the whole of `@angular/core`. This enables unit tests for the compiler to
be written without incurring long rebuilds for every change.