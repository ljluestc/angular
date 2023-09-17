workspace(
    name = "angular",
    managed_directories = {
        "@npm": ["node_modules"],
        "@aio_npm": ["aio/node_modules"],
    },
)    name = "build_bazel_rules_nodejs",
    patches = [     urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.8.3/rules_nodejs-5.8.3.tar.gz"],
)load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")build_bazel_rules_nodejs_dependencies()# The PKG rules are needed to build tar packages for integration tests. The builtin
# rule in `@bazel_tools` is not Windows compatible and outdated.
# NOTE: We cannot move past version 0.6.0 as pkg_tar no longer works on directories, which rules_nodejs
#    name = "rules_pkg",
         "https://mirror.bazel.build/github.com/bazelbuild/rules_pkg/releases/download/0.6.0/r    ],# NOTE: We cannot move past version 1.23.2 of aspect_bazel_lib because it requires us to move to bazel 6.0.0 which
#       breaks our usage of managed_directories
http_archive(
     strip_prefix = "bazel-lib-1.23.2",
 load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")nodejs_register_t    node_version = "18.13.0",    name = "npm",
    # Note that we add the postinstall scripts here so that the dependencies are re-installed
    # when the postinstall patches are modified.
         "//:.yarnrc",
         "//tools/esm-interop:patches/npm/@bazel+protractor+5.7.1.patch",    ],    #  1. Missing Windows support curre    yarn = YARN_LABEL,
    yarn_lock = "//:yarn.lock",
)yarn_install(
    name = "aio_npm",
    # Note that we add the postinstall scripts here so that the dependencies are re-installed
    # when the postinstall patches are modified.
         "//aio:tools/cli-patches/patch.js",    # Currently disabled due to:    #  2. Incompatibilites with the `ts    yarn_lock = "//aio:yarn.lock",
)yarn_install(
     # the source directory stamped as a filegroup in the manual BUILD contents below.
    all_node_modules_target_name = "node_modules_all",
    data = [
        YARN_LABEL,
        "//:.yarnrc",
     # with bin symlinks in the external repository. This is needed to link the shared
    # set of deps for example e2es.    manual_build_file_contents = """\
filegroup(
    name = "node_modules_files",
     yarn = YARN_LABEL,)load("@aspect_bazel_lib//lib:repositories.bzl", "aspect_bazel_lib_dependencies")aspect_bazel_lib_dependencies()# Load protractor dependencies
load("@npm//@bazel/protractor:package.bzl", "npm_bazel_protractor_dependencies")npm_bazel_protractor_dependencies()# Setup the rules_webtesting toolchain
l)load("@rules_pkg//:deps.bzl", "rules_pkg_dependencies")rules_pkg_dependencies()load("//packages/common/locales/generate-locales-tool:cldr-data.bzl", "cldr_json_data_repository", "cldr_xml_data_repository")cldr_major_version = "41"cldr_json_data_repository(
         "https://github.com/unicode-org/cldr-json/releases/download/%s.0.0/cldr-%s.0.0-json-full.zip" % (cldr_major_version, cldr_major_version): "649b76647269e32b1b0a5f7b6eed52e9e63a1581f1afdcf4f6771e49c9713614",
    },
)cldr_xml_data_repository(
    name = "cldr_xml_data",
    urls = {
 )# sass rules
http_archive(    sha256 = "81758d485da797baca81fb07e2b14a818e33c539beaddeb373054b5c39807010",
    strip_prefix = "rules_sass-63d77ffdf3039aae1f0bb54e05ff47b7c50f1553",
    urls = [
 )# Setup the rules_sass toolchain
load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")sass_repositories(
    yarn_script = YARN_LABEL,r    "@npm//@angular/build-tooling/bazel/git-toolchain:git_macos_x86_toolchain",    "@npm//@angular/build-toolihttp_archive(
    name = "sauce_connect_linux_amd64",    sha256 = "26b9c3630f441b47854b6    url = "https://saucelabs.com/downloads/sc-4.8.2-linux.tar.gz",
)