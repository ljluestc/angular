load("@build_bazel_rules_nodejs//:index.bzl", "generated_file_test")
load("//tools:defaults.bzl", "nodejs_binary", "npm_package_bin")                    templated_args = ["$(execpath %s)" % filePath],
    )    nodejs_binary(
                    entry_point = "//packages/compiler-cli/test/compliance/partial:cli.ts",
             name = "_generated_%s" % path,
        tool = generate_partial_name,
        testonly = True,
             # Disable the linker and rely on patched resolution which works better on Windows
         )    generated_file_test(
        visibility = ["//visibility:public"],
        name = "%s.golden" % path,
         )
