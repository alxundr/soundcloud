# ext-theme-neptune-1b655537-54a1-4e38-9a0c-793595ea4b0b/examples

This folder contains example applications demonstrating this package. Each of
these applications will be built as part of the package build:

    cd /path/to/package
    sencha package build

As applications, they can also be built individually:

    cd /path/to/package/examples/example-app
    sencha app build

Or you can build all examples as a group:

    cd /path/to/package
    sencha ant examples

The ideal location for the example builds to reside is the `"./build"` folder:

    /path/to/package/
        src/
        resources/
        ...
        examples/
            example-app/
            other-example/
        ...
        build/
            resources/
            examples/
                example-app/
                other-example/

This can be specified in the `".sencha/app/build.properties"` file for the
example applications:

    build.dir=${package.build.dir}/examples/${app.name}
