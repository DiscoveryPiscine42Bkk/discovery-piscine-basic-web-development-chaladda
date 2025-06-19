#!/bin/bash
# filepath: build.sh

for arg in "$@"
do
    dir="ex$arg"
    mkdir -p "$dir"
    echo "Created directory: $dir"
done