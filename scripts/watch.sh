#!/bin/bash

FILES=(README.md style.css)

build() {
  cp style.css build/style.css
  pandoc README.md -o build/index.html
}

trap 'kill $(jobs -p)' SIGINT

echo "Clean up 'build' directory"
rm -rf build

echo "Initial build"
mkdir build
build

echo "Start watch"
fswatch -o ${FILES[@]} | while read; do build; done &

sleep 1

echo "Open index.html"
open build/index.html

wait
